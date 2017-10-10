import { expect } from 'chai';
import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';
import editPost from '../../../actions/editPost';
import PostStore from '../../../stores/PostStore';
import getData from '../../../data/mockdata'



describe('carousel-server', () => {
    describe('edit post', function () {
        let context;
        let posts= getData();
        let param = {id:1,ediText:"Edit",updated_at:Date.now()};
        beforeEach(function () {
            context = createMockActionContext({
            	stores: [PostStore]
            });
            context.service = new MockService();
            context.service.setService('PostService.editPost', function (method, params, config, callback) {
                callback(null,param);
			});
        });

        it('should execute the action', function (done) {
            editPost(context, param, function () {
                expect(context.dispatchCalls.length).to.equal(2);
                expect(context.dispatchCalls[0].name).to.equal('EDIT_POST_START');
                expect(context.dispatchCalls[1].name).to.satisfy((name)=>{
                	return (name === 'EDIT_POST_SUCCESS') || (name === 'EDIT_POST_FAILURE')
                })
                expect(context.dispatchCalls[0].payload).to.equal(param);
                done();
            });
        });
    });
});