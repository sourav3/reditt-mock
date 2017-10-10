import { expect } from 'chai';
import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';
import upvoteComment from '../../../actions/upvoteComment';
import PostStore from '../../../stores/PostStore';



describe('carousel-server', () => {
    describe('upvote comment', function () {
        let context;

        beforeEach(function () {
            context = createMockActionContext({
            	stores: [PostStore]
            });
            context.service = new MockService();
            context.service.setService('PostService.upvoteComment', function (method, params, config, callback) {
                callback(null,{id:1});
			});
        });

        it('should execute the action', function (done) {
            upvoteComment(context, 1, function () {
                expect(context.dispatchCalls.length).to.equal(2);
                expect(context.dispatchCalls[0].name).to.equal('UPVOTE_COMMENT_START');
                expect(context.dispatchCalls[1].name).to.satisfy((name)=>{
                	return (name === 'UPVOTE_COMMENT_SUCCESS') || (name === 'UPVOTE_COMMENT_FAILURE')
                })
                expect(context.dispatchCalls[0].payload).to.equal(1);
                done();
            });
        });
    });
});