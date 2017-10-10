import { expect } from 'chai';
import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';
import loadPosts from '../../../actions/loadPosts';
import PostStore from '../../../stores/PostStore';
import getData from '../../../data/mockdata'



describe('carousel-server', () => {
    describe('load posts', function () {
        let context;
        let posts=getData();
        beforeEach(function () {
            context = createMockActionContext({
            	stores: [PostStore]
            });
            context.service = new MockService();
            context.service.setService('PostService', function (method, params, config, callback) {
                callback(null,posts);
			});
        });

        it('should execute the action', function (done) {
            loadPosts(context, 1, function () {
                expect(context.dispatchCalls.length).to.equal(2);
                expect(context.dispatchCalls[0].name).to.equal('LOAD_POST_START');
                expect(context.dispatchCalls[1].name).to.satisfy((name)=>{
                	return (name === 'LOAD_POST_SUCCESS') || (name === 'LOAD_POST_FAILURE')
                })
                expect(context.dispatchCalls[0].payload).to.equal(1);
                done();
            });
        });
    });
});