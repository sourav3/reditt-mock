import {navigateAction} from 'fluxible-router';
export default function(context,payload,done) {
    context.dispatch('SUBMIT_POST_START', payload);
    if(payload.text.length >= 255 ) {
        console.log("Submit post failed");
        context.dispatch('SUBMIT_POST_FAILURE', payload);
        done();
        return;
    }
    context.service.create('PostService.submitPost', payload, {}, function (err, post) {
        if (err) {
            console.log(err);
            context.dispatch('SUBMIT_POST_FAILURE', post);
            alert("Submit post failed");
            done();
            return;
        }
        context.executeAction(navigateAction,{params:{postId:post.id},method:'get',routeName:'dynamicPost'});
        context.dispatch('SUBMIT_POST_SUCCESS', post);
        done();
    });
}