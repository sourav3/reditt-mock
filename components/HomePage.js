import React from "react";

import PostStore from "../stores/PostStore"
import UserStore from "../stores/UserStore"
import SinglePost from "../components/SinglePost"
import loadPosts from "../actions/loadPosts"
import { handleRoute } from 'fluxible-router';
import connectToStores from 'fluxible-addons-react/connectToStores';
import {NavLink} from 'fluxible-router';


class HomePage extends React.Component {

	static contextTypes = {
	  getStore: React.PropTypes.func.isRequired,
	  executeAction: React.PropTypes.func.isRequired
	}
	
	constructor(props,context) {
		super(props,context);
		console.log("Inside constructor context=",context);
		let k=20;
		this.state = { postIds : []}
	}

	componentWillMount() {
		this.context.getStore(PostStore).addChangeListener(this._onStoreChange);
	}

  	componentWillUnmount() {
    	this.context.getStore(PostStore).removeChangeListener(this._onStoreChange);
    	clearInterval(this.countdown);
  	}

  	componentDidMount() {
  		this.context.executeAction(loadPosts);
  		this.countdown = setInterval((function(){this.context.executeAction(loadPosts)}).bind(this),5000);
  	}

  	_onStoreChange () {

  	}

	render() {
		//console.log("Inside HomePage render :",this.props);
		let PostList = this.props.postIds.map((id,index)=>{
			return <div><SinglePost key={id.toString()} postId={id} onlyHeaders={true}/><br/></div>
		})

		return (
			<div>
              <NavLink routeName="createPost">Create post</NavLink>
				{PostList}
			</div>
			)
	}
}

HomePage = handleRoute(
    connectToStores(HomePage, [ PostStore ], (context) => ({
        postIds: context.getStore(PostStore).getTopKPostIds(20)
    }))
);

export default HomePage;