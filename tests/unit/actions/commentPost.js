import { expect } from 'chai';
import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';
import commentPost from '../../../actions/commentPost';
import PostStore from '../../../stores/PostStore';
import getData from '../../../data/mockdata'



describe('carousel-server', () => {
    describe('comment post', function () {
        let context;
        let posts= getData();
        let newCmnt=posts[0].comments[1];
        newCmnt.parent_id=1;
        var pseudoUniq = Date.now();
        newCmnt.id=pseudoUniq;
        beforeEach(function () {
            context = createMockActionContext({
            	stores: [PostStore]
            });
            context.service = new MockService();
            context.service.setService('PostService.replyPost', function (method, params, config, callback) {
                callback(null,newCmnt);
			});
        });

        it('should execute the action', function (done) {
            commentPost(context,newCmnt, function () {
                expect(context.dispatchCalls.length).to.equal(2);
                expect(context.dispatchCalls[0].name).to.equal('COMMENT_POST_START');
                expect(context.dispatchCalls[1].name).to.satisfy((name)=>{
                	return (name === 'COMMENT_POST_SUCCESS') || (name === 'COMMENT_POST_FAILURE')
                })
                expect(context.dispatchCalls[0].payload).to.equal(newCmnt);
                done();
            });
        });
    });
});