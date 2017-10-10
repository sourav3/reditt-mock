import HomePage from '../components/HomePage';
import About from '../components/About';
import SinglePost from '../components/SinglePost';
import CreatePost from '../components/CreatePost';

export default {
    home: {
        path: '/home',
        method: 'get',
        page: 'homePage',
        title: 'Reditt',
        handler: HomePage
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: About
    },
    dynamicPost: {
        path: '/posts/:postId',
        method: 'get',
        page: 'Post',
        title: 'Post',
        handler: SinglePost
    },
    createPost: {
        path: '/createPost',
        method: 'get',
        page: 'Create Post',
        title: 'Create Post',
        handler: CreatePost
    }
};
