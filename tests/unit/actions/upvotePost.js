import { expect } from 'chai';
import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';
import upvotePost from '../../../actions/upvotePost';
import PostStore from '../../../stores/PostStore';



describe('carousel-server', () => {
    describe('upvote post', function () {
        let context;

        beforeEach(function () {
            context = createMockActionContext({
            	stores: [PostStore]
            });
            context.service = new MockService();
            context.service.setService('PostService.upvotePost', function (method, params, config, callback) {
                callback(null,{id:1});
			});
        });

        it('should execute the action', function (done) {
            upvotePost(context, 1, function () {
                expect(context.dispatchCalls.length).to.equal(2);
                expect(context.dispatchCalls[0].name).to.equal('UPVOTE_POST_START');
                expect(context.dispatchCalls[1].name).to.satisfy((name)=>{
                	return (name === 'UPVOTE_POST_SUCCESS') || (name === 'UPVOTE_POST_FAILURE')
                })
                expect(context.dispatchCalls[0].payload).to.equal(1);
                done();
            });
        });
    });
});