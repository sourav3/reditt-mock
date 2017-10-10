
import {expect} from 'chai';
import PostStore from '../../../stores/PostStore';
import UserStore from '../../../stores/UserStore';
import getData  from '../../../data/mockdata';

describe('site', () => {
    describe('post store', function () {
        let storeInstance;
        let postList = getData();
        let post = postList[1];
        post.comments = [];
        post.id = Date.now();
        let comment = postList[0].comments[0];
        comment.postId = post.id;
        comment.id = Date.now();
        comment.author = UserStore.getCurrentUser();
        comment.children = [];
        let replyComment = postList[0].comments[1];
        replyComment.id = Date.now()+1;
        replyComment.parent_id = comment.id;
        replyComment.postId = post.id;
        replyComment.children = [];
        replyComment.author = UserStore.getCurrentUser();


        beforeEach(function () {
            storeInstance = new PostStore();
        });

        it('should instantiate correctly', function (done) {
            expect(storeInstance).to.be.an('object');
            expect(storeInstance.posts).to.be.an('array');
            done();
        });

        it('should add a post', function (done) {
            storeInstance._submitPostSuccess(post);
            expect(storeInstance.posts.length).to.equal(1);
            done();
        });

        it('should get a post by id', function (done) {
            storeInstance._submitPostSuccess(post);
            expect(storeInstance.getPost(post.id)).to.equal(post);
            done();
        });

        it('should add a comment to a post', function (done) {
            storeInstance._submitPostSuccess(post);
            storeInstance._commentPostSuccess(comment);
            expect(storeInstance.getPost(post.id).comments.length).to.equal(1);
            done();
        });

        it('should get the comment by id', function (done) {
            storeInstance._submitPostSuccess(post);
            storeInstance._commentPostSuccess(comment);
            expect(storeInstance.findComment(comment.id)).to.equal(comment);
            done();
        });

        it('should reply to a comment', function (done) {
            storeInstance._submitPostSuccess(post);
            storeInstance._commentPostSuccess(comment);
            storeInstance._replyCommentSuccess(replyComment);
            expect(storeInstance.findComment(comment.id).children.length).to.equal(1);
            expect(storeInstance.findComment(replyComment.id)).to.equal(replyComment);
            done();
        });

        it('should dehydrate', function (done) {
            storeInstance._submitPostSuccess(post);
            let state = storeInstance.dehydrate();

            expect(state.posts).to.be.an('array');
            done();
        });

        it('should rehydrate', function (done) {
            let state = {
                posts : []
            };
            state.posts.push[post];
            storeInstance.rehydrate(state);

            expect(storeInstance.posts).to.equal(state.posts);
            done();
        });
    });
});