import { expect } from 'chai';
import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';
import editComment from '../../../actions/editComment';
import PostStore from '../../../stores/PostStore';
import getData from '../../../data/mockdata'



describe('carousel-server', () => {
    describe('edit post', function () {
        let context;
        let posts= getData();
        let param = {id:1,cmntId:1,text:"Edit",ediText:"Edit",updated_at:Date.now()};
        beforeEach(function () {
            context = createMockActionContext({
            	stores: [PostStore]
            });
            context.service = new MockService();
            context.service.setService('PostService.editComment', function (method, params, config, callback) {
                callback(null,param);
			});
        });

        it('should execute the action', function (done) {
            editComment(context, param, function () {
                expect(context.dispatchCalls.length).to.equal(2);
                expect(context.dispatchCalls[0].name).to.equal('EDIT_CMNT_START');
                expect(context.dispatchCalls[1].name).to.satisfy((name)=>{
                	return (name === 'EDIT_CMNT_SUCCESS') || (name === 'EDIT_CMNT_FAILURE')
                })
                expect(context.dispatchCalls[0].payload).to.equal(param);
                done();
            });
        });
    });
});