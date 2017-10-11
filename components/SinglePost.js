import React from "react";
import PostStore from "../stores/PostStore"
import UserStore from "../stores/UserStore"
import {NavLink} from 'fluxible-router';
import TimeAgo from "react-timeago"

import Comment from "./Comment"

import {Button, Collapse} from "react-bootstrap"

import { handleRoute } from 'fluxible-router';
import connectToStores from 'fluxible-addons-react/connectToStores';
import commentPost from '../actions/commentPost';
import loadPosts from '../actions/loadPosts';
import upvotePost from '../actions/upvotePost';
import downvotePost from '../actions/downvotePost';
import editPostAction from '../actions/editPost';


class SinglePost extends React.Component {

  static contextTypes = {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
  }

  constructor(props,context) {
    super(props,context);
    //console.log("Inside SinglePost props.currentRoute: ",props.currentRoute);
    this.getPost=this.getPost.bind(this);
    this._onStoreChange=this._onStoreChange.bind(this);
    this.state = {post : this.context.getStore(PostStore).getPost(props.postId?props.postId:props.currentRoute.params.postId),
      postId : props.postId?props.postId:props.currentRoute.params.postId,
      editMode : false, 
      replyMode : false,
      replyText:"",
      descOpen:true, 
      onlyHeaders : props.onlyHeaders
    };
  }

  componentWillMount() {
    this.context.getStore(PostStore).addChangeListener(this._onStoreChange);
  }

  componentWillUnmount() {
    this.context.getStore(PostStore).removeChangeListener(this._onStoreChange);
    clearInterval(this.countdown);
  }

  componentDidMount() {
    if(this.state.post === null) {
       this.context.executeAction(loadPosts);
    }
    if(this.props.postId) { // means child component
      return;
    }
    this.countdown = setInterval((function() {
      this.context.executeAction(loadPosts)
    }).bind(this),5000);
  }

  getStoreState () {
    return {
      post : this.context.getStore(PostStore).getPost(this.state.postId)
    }
  }

  _onStoreChange () {
    //console.log("Inside SinglePost _onStoreChange this.context:",this.context);
    if(this.context) {
       this.setState({post : this.context.getStore(PostStore).getPost(this.state.postId)});     
    }
    else {
      //console.log("Inside SinglePost this.state :",this.state);
      this.setState({post : PostStore.getPost(this.state.postId)});
    }
  }

  dfs(comments,height,visited,new_comments) {
  	for(let i=0;i<comments.length;i++) {
      //console.log(`height : ${height} i=${i}`)
  		if(!visited[comments[i].id]) {
        visited[comments[i].id]=true;
        //console.log(height);
        comments[i].height=height;
  			new_comments.push(comments[i]);
        //console.log(comments[i]);
  			if(comments[i].children !== null) {
  				 this.dfs(comments[i].children,height+1,visited,new_comments);
  			}
  		}
  	}
  }

  getPost() {
    this.setState({
      post: PostStore.getPost(this.state.postId),
      postId: this.state.postId
    });
    //console.log("Inside getPost");
  }

  mark_visited_false(comments,visited) {
    for(let i=0;i<comments.length;i++) {
      visited[comments[i].id]=false;
      this.mark_visited_false(comments[i].children || [],visited);
    }
  }

  upvote() {
    let postId = this.state.postId;
    console.log("upvote postId:"+postId);
    this.context.executeAction(upvotePost,postId);
  }

  downvote() {
    let postId = this.state.postId;
    console.log("downvote postId:"+postId);
    this.context.executeAction(downvotePost,postId);
  }

  replyModeToggle() {
    this.setState({replyMode: !this.state.replyMode});
  }

  handleChange(event) {
    this.setState({replyText: event.target.value});
  }

  commentPost() {
    let comment = {
      id : Date.now(),
      author : UserStore.getCurrentUser(),
      postId : this.state.postId,
      text : this.state.replyText,
      votes : 0,
      children : [],
      created_at : Date.now(),
      updated_at : Date.now()
    }
    this.context.executeAction(commentPost,comment)
    this.replyModeToggle();
    this.setState({replyText:""});
  }

  handleChangeEdit(event) {
    this.setState({editText: event.target.value})
  }

  editPost() {
    this.context.executeAction(editPostAction,{id:this.state.postId,editText:this.state.editText});
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.setState({editMode : !this.state.editMode,editText:this.state.post.description});
  }

  toggleDescOpen() {
    this.setState({descOpen : !this.state.descOpen})
  }

  render() {

    //console.log("Inside singlepost render", this.state.postId);

    let post = this.state.post;

    if(post === null) {
      post = this.props.post;
    }

    if((post === null) || (post === undefined)) {
      console.log("Post is null postId:",this.state.postId);
      return null;
    }
    
    let comments = post.comments;
    let visited = [];
    let new_comments = [];
    //console.log(comments);

    if(this.state.onlyHeaders) {
      //console.log("onlyHeaders: "+this.state.onlyHeaders);
      return (
          <div>
             <img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png"/>
              Votes : {post.votes}
              <br/>
              <button onClick={this.upvote.bind(this)}>^</button>
              <button onClick={this.downvote.bind(this)}>v</button>
              Posted by : <a href="javascript:void(0)">{post.author}</a>
              <NavLink routeName="dynamicPost" navParams={{postId:post.id}}><span><b>{post.text}</b></span></NavLink>
              <br/>
               Created At : <a href="javascript:void(0)"><TimeAgo date={post.created_at}/></a> Updated At : <a href="javascript:void(0)"><TimeAgo date={post.updated_at}/></a>
              <br/>
          </div>
        )
    }

  	this.dfs(comments,0,visited,new_comments);

  	let CommentComponents = comments.map(comment => {
  		return <Comment key = {comment.id} {...comment} />
  	})


    const PostDescriptionArea = (()=> {
      if(this.state.editMode) {
        return (
          <div>
            <textArea type="text" value={this.state.editText} onChange={this.handleChangeEdit.bind(this)}/> 
            <button onClick={this.editPost.bind(this)}>Save</button>
          </div>
        )
      }
      else {
        return (<div><span>{post.description}</span></div>)
      }
    }).bind(this)()
    

    //console.log(CommentComponents);

    const wobullets = {
      "list-style": "none"
    };

    const displayNone = {
      display : "none"
    }

    return (
    	<div>
        <NavLink routeName="home">Home</NavLink>
        <br/>
        <img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png"/>
        Votes : {post.votes}
        <br/>
        <button onClick={this.upvote.bind(this)}>^</button>
        <button onClick={this.downvote.bind(this)}>v</button>
        Posted by : <a href="javascript:void(0)">{post.author}</a>
        <span><b>{post.text}</b></span>
        <br/>
    		<button onClick={this.toggleDescOpen.bind(this)}>{this.state.descOpen?"-":"+"}</button>
        <div style={this.state.descOpen?{}:displayNone}>
        <span>{PostDescriptionArea}</span>
        <a onClick={this.toggleEditMode.bind(this)} href="javascript:void(0)">{this.state.editMode?"Cancel":"Edit"}</a>
        </div>
        <br/>
    		 Created At : <a href="javascript:void(0)"><TimeAgo date={post.created_at}/></a> Updated At : <a href="javascript:void(0)"><TimeAgo date={post.updated_at}/></a>
    		<br/>
        <a onClick={this.replyModeToggle.bind(this)} href="javascript:void(0)">{this.state.replyMode?"Cancel":"Comment"}</a>
        <textArea style={this.state.replyMode?{}:displayNone} type="text" value={this.state.replyText} onChange={this.handleChange.bind(this)}/>
        <button style={this.state.replyMode?{}:displayNone} onClick={this.commentPost.bind(this)}>Save</button>
    		<ul style={wobullets}>{CommentComponents}</ul>
    	</div>
    	)
  }
}
SinglePost = handleRoute(
    connectToStores(SinglePost, [ PostStore ], (context) => ({
    }))
);
export default SinglePost;