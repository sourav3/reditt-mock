import { BaseStore } from 'fluxible/addons';

class PostStore extends BaseStore {

	static storeName = 'PostStore';

	static handlers = {
        'REPLY_CMNT_SUCCESS': '_replyCommentSuccess',
        'EDIT_CMNT_SUCCESS': '_editCommentSuccess',
        'LOAD_POST_SUCCESS': '_loadPostSuccess',
        'EDIT_POST_SUCCESS':'_editPostSuccess',
        'SUBMIT_POST_SUCCESS':'_submitPostSuccess',
        'COMMENT_POST_SUCCESS':'_commentPostSuccess',
        'UPVOTE_POST_SUCCESS':'_upvotePostSuccess',
        'DOWNVOTE_POST_SUCCESS':'_downvotePostSuccess',
        'UPVOTE_COMMENT_SUCCESS':'_upvoteCommentSuccess',
        'DOWNVOTE_COMMENT_SUCCESS':'_downvoteCommentSuccess'
	};

	constructor(dispatcher) {
		super();
		this.dispatcher = dispatcher;
		this.posts = [];
		this.emitChange();
	}


	sortJSON(data, key, way) {
	    return data.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        if (way === '123' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
	        if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
	    });
	}

	getTopKPostIds(k) {
		return this.sortJSON(this.posts,'votes','321').map((post)=>{ return post.id}).slice(0,k);
	}

	_loadPostSuccess(posts) {
		console.log("Successfully loaded posts")
		this.posts = posts;
		this.emitChange();
	}

	_submitPostSuccess(post) {
		this.posts.push(post);
		this.emitChange();
	}

	_editPostSuccess(editedPost) {
		let post = this.getPost(editedPost.id);
		if(post !== null) {
			post.description = editedPost.description;
			post.updated_at = editedPost.updated_at;
			this.emitChange();
		}
	}

	
	getPost(postId) {
		for(var i=0;i<this.posts.length;i++) {
			if( this.posts[i].id == postId) {
				return this.posts[i];
			}
		}
		return null;
	}
	reportCommentNotFound(cmntId) {
		console.log("Comment not found, cmntId:",cmntId);
	}

	findCommentRec(comment,cmntId) {
		if(comment.id == cmntId) {
			return comment;
		}
		comment.children=(comment.children || []);
		for(let i=0; i < comment.children.length; i++) {
			let foundCmnt = this.findCommentRec(comment.children[i],cmntId);
			if(foundCmnt != null) {
				return foundCmnt;
			}
		}
		return null;
	}

	//can use maps to make it faster
	findComment(cmntId) {
		let found = null;
		for(let i=0;i<this.posts.length;i++) {
			let comments = this.posts[i].comments;
			for(let j=0;j<comments.length;j++) {
				console.log(j);
				found = this.findCommentRec(comments[j], cmntId);
				if(found != null) {
					return found;
				}	
			}
		}
		this.reportCommentNotFound(cmntId);
		return null;
	}

	_replyCommentSuccess(comment) {
		let parent_comment = this.findComment(comment.parent_id);
		if(parent_comment != null) {
			parent_comment.children = (parent_comment.children || [])
			parent_comment.children.push(comment);
			this.emitChange();
		}
	}

	_commentPostSuccess(comment) {
		let post = this.getPost(comment.postId);
		if(post !== null) {
			post.comments = (post.comments || []);
			post.comments.push(comment);
			this.emitChange();
		}
	}

	_upvotePostSuccess(postId) {
		let post = this.getPost(postId);
		if(post !== null ) {
			post.votes++;
			this.emitChange();
		}
	}

	_downvotePostSuccess(postId) {
		let post = this.getPost(postId);
		if(post !== null) {
			post.votes--;
			this.emitChange();
		}
	}

	_upvoteCommentSuccess(cmntId) {
		let comment = this.findComment(cmntId);
		if(comment !== null) {
			comment.votes++;
			this.emitChange();
		}
	}

	_downvoteCommentSuccess(cmntId) {
		let comment = this.findComment(cmntId);
		if(comment !== null) {
			comment.votes--;
			this.emitChange();
		}
		
	}

	_editCommentSuccess(editted_comment) {
		let comment = this.findComment(editted_comment.id);
		if(comment != null) {
			comment.text = editted_comment.text;
			comment.updated_at = editted_comment.updated_at;
			this.emitChange();
		}
	}

	dehydrate() {
		console.log("Inside dehydrate");
        return {
            posts : this.posts
        };
    }

    rehydrate(state) {
    	console.log("Inside dehydrate");
        this.posts = state.posts;
        this.emitChange();
	}

}

export default PostStore;