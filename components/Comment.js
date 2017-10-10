import React from "react"
import UserStore from "../stores/UserStore"
import replyCommentAction from "../actions/replyComment"
import editCommentAction from "../actions/editComment"
import upvoteComment from "../actions/upvoteComment"
import downvoteComment from "../actions/downvoteComment"

import {Button, Collapse} from "react-bootstrap"

import TimeAgo from "react-timeago"

export default class Comment extends React.Component {

	static contextTypes = {
	   getStore: React.PropTypes.func.isRequired,
	   executeAction: React.PropTypes.func.isRequired
	}

	constructor(props,context) {
		super(props,context);
		this.state = {open : true, postId : props.postId, cmntId : props.id, editMode: false ,editText:props.text, replyMode:false, replyText:""};
	}

	upvote() {
		console.log(this.state.cmntId);
		this.context.executeAction(upvoteComment,this.state.cmntId);
	}

	downvote() {
		console.log(this.state.cmntId);
		this.context.executeAction(downvoteComment,this.state.cmntId);
	}

	replyModeToggle() {
		this.setState({replyMode: !this.state.replyMode});
	}

	toggleOpen() {
		this.setState({ open: !this.state.open });
	}

	replyComment() {
		let comment = {
			id : Date.now(),
			author : UserStore.getCurrentUser(),
			postId : this.state.postId,
			text : this.state.replyText,
			votes : 0,
			children : [],
			created_at : Date.now(),
		    updated_at : Date.now(),
		    parent_id : this.state.cmntId
		}
		//CommentActions.replyComment(this.state.cmntId,comment);
		this.context.executeAction(replyCommentAction,comment);
		this.replyModeToggle();
		this.setState({ replyText : ""});
	}

	editComment() {
		//CommentActions.editComment(this.state.cmntId,editText);
		this.context.executeAction(editCommentAction,{cmntId : this.state.cmntId,editText : this.state.editText});
		this.toggleEditMode();
	}

	handleChangeEdit(event) {
		this.setState({editText: event.target.value})
	}


	handleChangeReply(event) {
    	this.setState({replyText: event.target.value});
  	}

  	toggleEditMode() {
  		this.setState({editMode : !this.state.editMode,editText:this.props.text});
  	}

	render () {
		const { key, id, author, text, created_at, updated_at, votes, height, children} = this.props;
		const style = {
			marginLeft : height*30,
			border : "1 px"
		};

		const displayNone = {
			display : "none"
		}

		const metaDataStyle = {
			color : "red"
		}

		const commentStyle = {
			"background-color": "#dfe3ee"
		}

		let commentTextArea;
		if(this.state.editMode) {
			commentTextArea = (
				<div>
					<textArea type="text" value={this.state.editText} onChange={this.handleChangeEdit.bind(this)}/> 
					<button onClick={this.editComment.bind(this)}>Save</button>
				</div>
			);
		}
		else {
			commentTextArea = (<div style={commentStyle}><span>{text}</span></div>);
		}

		const nestedComments = (children || []).map(comment => {
		    return <Comment key={comment.id} {...comment} />;
		});
		
		return (
				<div style={style}>
					<Button onClick={this.toggleOpen.bind(this)}>
						{this.state.open?"-":"+"}
					</Button>
					<Collapse >
						<div style={this.state.open?{}:displayNone}>
						<img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png"/>
						Votes : {votes}
					        <br/>
					        <button onClick={this.upvote.bind(this)}>^</button>
					        <button onClick={this.downvote.bind(this)}>v</button>
							<li>
								<div >
									{commentTextArea}
									<a onClick={this.toggleEditMode.bind(this)} href="javascript:void(0)">{this.state.editMode?"Cancel":"Edit"}</a>
									<br/>
									<div style={metaDataStyle}>
									Written by : <a href="javascript:void(0)">{author}</a>  Created At : <a href="javascript:void(0)"><TimeAgo date={created_at} /></a> Updated at : <a href="javascript:void(0)"><TimeAgo date={updated_at}/></a>
									</div>
								</div>
								<a onClick={this.replyModeToggle.bind(this)} href="javascript:void(0)">{this.state.replyMode?"Cancel":"Reply"}</a>
								<textArea style={this.state.replyMode?{}:displayNone} type="text" value={this.state.replyText} onChange={this.handleChangeReply.bind(this)}/>
								<button style={this.state.replyMode?{}:displayNone} onClick={this.replyComment.bind(this)}>Save</button>
							</li>
							{nestedComments}
						</div>
					</Collapse>
				</div>
			);
	}
}