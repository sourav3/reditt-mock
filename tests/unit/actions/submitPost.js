import { expect } from 'chai';
import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';
import submitPost from '../../../actions/submitPost';
import PostStore from '../../../stores/PostStore';
import getData from '../../../data/mockdata'



describe('carousel-server', () => {
    describe('submit posts', function () {
        let context;
        let posts = getData();
        posts[0].id=Date.now();
        posts[1].id=Date.now();
        posts[1].text="GAvPcyGsef4dKOPxxpc2iaRjB4MQpCaxaM532MNjRvpFJiBeWGtdFeG47vfFtshlHSLYUa41cv6vD1tNYPtjAmFxggUNuGp8X8lwnRTQMcoGvCITlCMZZEamu344kVimKQx0hSbdgmaVsLrDNMnoqvEWmHbiWvcA1NqayfYKkosVW6PZXuqHkAySiKEAODRIl8HTOqjva3qEEPzOxHTFXgixdnHnaMtL7iMRTU4ykkEm3t17lWNpSPA21Kaiwai";
        beforeEach(function () {
            context = createMockActionContext({
            	stores: [PostStore]
            });
            context.service = new MockService();
            context.service.setService('PostService.submitPost', function (method, params, config, callback) {
                callback(null,posts[0]);
			});
        });

        it('should execute the action', function (done) {
            submitPost(context, posts[0], function () {
                expect(context.dispatchCalls.length).to.equal(2);
                expect(context.dispatchCalls[0].name).to.equal('SUBMIT_POST_START');
                expect(context.dispatchCalls[1].name).to.satisfy((name)=>{
                	return (name === 'SUBMIT_POST_SUCCESS') || (name === 'SUBMIT_POST_FAILURE')
                })
                expect(context.dispatchCalls[0].payload).to.equal(posts[0]);
                done();
            });
        });

        it('should execute the action', function (done) {
            submitPost(context, posts[1], function () {
                expect(context.dispatchCalls.length).to.equal(2);
                expect(context.dispatchCalls[0].name).to.equal('SUBMIT_POST_START');
                expect(context.dispatchCalls[1].name).to.equal('SUBMIT_POST_FAILURE');
                expect(context.dispatchCalls[0].payload).to.equal(posts[1]);
                done();
            });
        });

    });
});