import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
	constructor() {
		super();
		this.currentUser="sourav"
	}

	setCurrentUser(user) {
		this.currentUser=user;
	}

	getCurrentUser() {
		return this.currentUser;
	}
}

const userStore = new UserStore();
//dispatcher.register(userStore.handleActions.bind(userStore));
export default userStore;