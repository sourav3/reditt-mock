'use strict';

var posts= [
		{
			id : 1,
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			author : "balmiki",
			description :"This should probably only do mid-haul, won't go to US.",
			tag : "r/a",
			votes : 230,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
  			comments : [
	      		{
					id : 1,
					author : "Sourav",
					postId : 1,
					text : "Comment1",
					votes : 0,
					children : [
								{
							id : 3,
							author : "logan",
							postId : 1,
							text : "Comment3",
							votes : 0,
							children : [],
							created_at : "2014-10-16T23:16:44.173Z",
			      			updated_at : "2014-10-16T23:16:44.173Z"
						},
						{
							id : 4,
							author : "balu",
							postId : 1,
							text : "Comment1",
							votes : 0,
							children : [],
							created_at : "2014-10-16T23:16:44.173Z",
			      			updated_at : "2014-10-16T23:16:44.173Z"
						}
					],
					created_at : "2014-10-16T23:16:44.173Z",
	      			updated_at : "2014-10-16T23:16:44.173Z"
				},
				{
					id : 2,
					author : "ravan",
					postId : 1,
					votes : 0,
					text : "Comment2",
					children: [ {
						id : 6,
						author : "harry",
						postId : 1,
						votes : 0,
						text : "Comment3",
						children : [],
						created_at : "2014-10-16T23:16:44.173Z",
		      			updated_at : "2014-10-16T23:16:44.173Z"
					}],
					created_at : "2014-10-16T23:16:44.173Z",
	      			updated_at : "2014-10-16T23:16:44.173Z"
				},
				
				{
					id : 5,
					author : "valmiki",
					postId : 1,
					text : "Comment2",
					votes : 0,
					children : [],
					created_at : "2014-10-16T23:16:44.173Z",
	      			updated_at : "2014-10-16T23:16:44.173Z"
				}
  			]
		},
		{
			id : 2,
			author : "sourav",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 30,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id : 3,
			author : "sourav",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 40,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id : 4,
			author : "sourav",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 40,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id : 5,
			author : "alam",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 40,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []

		},
		{
			id: 6,
			author : "godzilla",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 40,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []

		},
		{
			id: 7,
			author : "godzilla",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 50,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 8,
			author : "happy",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 50,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 9,
			author : "revenant",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 50,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 10,
			author: "general",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 90,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 11,
			author: "seven",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 100,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 12,
			author: "blade-runner",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 100,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 13,
			author: "blade-runner",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 100,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 14,
			author: "john",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 100,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 15,
			author: "denis",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 120,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		}, 
		{
			id: 16,
			author: "raven",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 120,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 17,
			author: "jagten",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 120,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 18,
			author: "despacito",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 110,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 19,
			author: "enrique",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 109,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 20,
			author: "salman",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 112,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 21,
			author: "manoj",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 112,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 22,
			author: "manoj",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 112,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 23,
			author: "jam",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 112,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 24,
			author: "sahil",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 112,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 25,
			author: "koushik",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 112,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 26,
			author: "koushik",
			tag : "r/a/b",
			text : "Singapore's First Boeing 787-10 Dreamliner Rolls Out - Airways Magazine",
			description :"This should probably only do mid-haul, won't go to US.",
			votes : 112,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 27,
			author: "jamal",
			tag : "r/a/b",
			text : "Hindu",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 119,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 28,
			author: "jamal",
			tag : "r/a/b",
			text : "Hindu",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 119,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 29,
			author: "gallot",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 30,
			author: "sam",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 31,
			author: "ram",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 32,
			author: "david",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 33,
			author: "archie",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 34,
			author: "pta",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 35,
			author: "ham",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 36,
			author: "sammy",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 37,
			author: "garry",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 123,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 38,
			author: "jenny",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 179,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		},
		{
			id: 40,
			author: "satan",
			tag : "r/a/b",
			text: "Salvation",
			description :"This should probably only do mid-haul, won't go to US.",
			votes: 179,
			created_at : "2014-10-16T23:16:44.173Z",
  			updated_at : "2014-10-16T23:16:44.173Z",
			comments : []
		}
	];

var randomResponseTime = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var submitPost = function (req, resource, post, config, callback) {
		if (post.text.indexOf('fail') > -1) {
            var err = new Error('Shenanigans');
            setTimeout(function () {
                callback(err);
            }, randomResponseTime(800, 1000));
            return;
        }
        else {
        	post.id = Date.now(); // can use better methods
        	posts.push(post);
        	callback(null,post);
        }
}

var replyPost = function (req, resource, params, config, callback) {
		if (params.text.indexOf('fail') > -1) {
            var err = new Error('Shenanigans');
            setTimeout(function () {
                callback(err);
            }, randomResponseTime(800, 1000));
            return;
        }
        else {
        	var post = getPost(params.postId);
        	if(post == null) {
        		callback(new Error("Post not found"));
        		return;
        	}
        	post.comments = (post.comments || []);
        	post.comments.push(params);
        	setTimeout(function () {
                callback(null, params);
            }, randomResponseTime(100, 1000));
        }
}

var editPost = function (req, resource, params, config, callback) {
		if (params.editText.indexOf('fail') > -1) {
            var err = new Error('Shenanigans');
            setTimeout(function () {
                callback(err);
            }, randomResponseTime(800, 1000));
            return;
        }
        else {
        	var post = getPost(params.id);
        	if(post == null) {
        		callback(new Error("Post not found"));
        		return;
        	}
        	post.description=params.editText;
        	post.updated_at=Date.now();
        	setTimeout(function () {
                callback(null, post);
            }, randomResponseTime(100, 1000));
        }
}

//can use maps to make it faster
var findCommentRec = function(comment,cmntId) {
		if(comment.id == cmntId) {
			return comment;
		}
		comment.children=(comment.children || []);
		for(let i=0; i < comment.children.length; i++) {
			let foundCmnt = findCommentRec(comment.children[i],cmntId);
			if(foundCmnt != null) {
				return foundCmnt;
			}
		}
		return null;
	}


//can use maps to make it faster
var findComment = function (cmntId) {
		let found = null;
		for(let i=0;i<posts.length;i++) {
			let comments = posts[i].comments;
			for(let j=0;j<comments.length;j++) {
				console.log(j);
				found = findCommentRec(comments[j], cmntId);
				if(found != null) {
					return found;
				}	
			}
		}
		reportCommentNotFound(cmntId);
		return null;
	}

var replyComment = function (req, resource, params, config, callback) {
		if (params.text.indexOf('fail') > -1) {
            var err = new Error('Shenanigans');
            setTimeout(function () {
                callback(err);
            }, randomResponseTime(800, 1000));
            return;
        }
        else {
        	let parent_cmnt = findComment(params.parent_id);
        	if(parent_cmnt != null) {
        		parent_cmnt.children = (parent_cmnt.children || []);
        		parent_cmnt.children.push(params);
        		callback(null,params);
        	}
        	else {
        		 var err = new Error('Parent comment not found');
        		 callback(err);
        	}
        }
	}

var editComment = function(req, resource, params, config, callback) {
	if (params.editText.indexOf('fail') > -1) {
            var err = new Error('Shenanigans');
            setTimeout(function () {
                callback(err);
            }, randomResponseTime(800, 1000));
            return;
        }
        else {
        	let comment = findComment(params.cmntId);
        	if(comment != null) {
        		comment.text=params.editText;
        		comment.updated_at=Date.now();
        		callback(null,comment);
        	}
        	else {
        		 var err = new Error('Parent comment not found');
        		 callback(err);
        	}
        }
}

var upvotePost = function (req, resource, postId, config, callback) {
		
	var post = getPost(postId);
	if(post == null) {
		callback(new Error("Post not found"));
		return;
	}
	post.votes++;
	callback(null,postId);

}

var downvotePost = function (req, resource, postId, config, callback) {		
	var post = getPost(postId);
	if(post == null) {
		callback(new Error("Post not found"));
		return;
	}
	post.votes--;
	callback(null,postId);

}

var upvoteComment = function (req, resource, cmntId, config, callback) {		
	var comment = findComment(cmntId);
	if(comment == null) {
		callback(new Error("comment not found"));
		return;
	}
	comment.votes++;
	callback(null,cmntId);
}

var downvoteComment = function (req, resource, cmntId, config, callback) {		
	var comment = findComment(cmntId);
	if(comment == null) {
		callback(new Error("comment not found"));
		return;
	}
	comment.votes--;
	callback(null,cmntId);
}

var getPost = function (postId) {
		for(var i=0;i<posts.length;i++) {
			if( posts[i].id == postId) {
				return posts[i];
			}
		}
		return null;
}

module.exports = {
	name : 'PostService',

	reportCommentNotFound : function (cmntId) {

	},

	read : function (req, resource, params, config, callback) {
		return callback(null,posts);
	},

	create : function (req, resource, params, body, config, callback) {
		if (resource === 'PostService.replyPost') {
			replyPost(req, resource, params, config, callback);
		}
		else if (resource === 'PostService.upvotePost') {
			upvotePost(req, resource, params, config, callback);
		}
		else if (resource === 'PostService.downvotePost') {
			downvotePost(req, resource, params, config, callback);
		}
		else if (resource === 'PostService.replyComment') {
			replyComment(req, resource, params, config, callback);
		}
		else if (resource === 'PostService.editComment') {
			editComment(req, resource, params, config, callback);
		}
		else if (resource === 'PostService.editPost') {
			editPost(req, resource, params, config, callback);
		}
		else if (resource === 'PostService.submitPost') {
			submitPost(req, resource, params, config, callback);
		}
		else if (resource === 'PostService.upvoteComment') {
			upvoteComment(req, resource, params, config, callback);
		}
		else if (resource === 'PostService.downvoteComment') {
			downvoteComment(req, resource, params, config, callback);
		}
	}
}