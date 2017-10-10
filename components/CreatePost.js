import React from 'react';
import UserStore from'../stores/UserStore';
import submitPostAction from  '../actions/submitPost';
export default class CreatePost extends React.Component {

	static contextTypes = {
	  	getStore: React.PropTypes.func.isRequired,
	    executeAction: React.PropTypes.func.isRequired
	}

	constructor() {
		super();
		this.state ={ text:"",description:""};
	}

	handleTitleChange(event) {
	    this.setState({text: event.target.value})
	}

	handleDescriptionChange(event) {
    	this.setState({description: event.target.value})
	}

	submitPost() {
		let post = {
			id : Date.now(),// would suffice for now
			text : this.state.text,
			author : UserStore.getCurrentUser(),
			description :this.state.description,
			tag : "r/a",
			votes : 0,
			created_at : Date.now(),
  			updated_at : Date.now(),
  			comments : []
		}
		this.context.executeAction(submitPostAction,post);
	}

	render() {
		return (
				<div>
					Post Title :
					<textarea value={this.state.text} onChange={this.handleTitleChange.bind(this)}></textarea>
					<br/>
					Description :
					<textarea value={this.state.description} onChange={this.handleDescriptionChange.bind(this)}></textarea>
					<br/>
					<button onClick={this.submitPost.bind(this)}>Post</button>
				</div>
			);
	}
}