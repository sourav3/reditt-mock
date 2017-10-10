export default function(context,payload,done) {
    context.dispatch('DOWNVOTE_POST_START', payload);
    context.service.create('PostService.downvotePost', payload, {}, function (err, postId) {
        if (err) {
            console.log(err);
            context.dispatch('DOWNVOTE_POST_FAILURE', postId);
            alert("Downvoting to post failed");
            done();
            return;
        }

        context.dispatch('DOWNVOTE_POST_SUCCESS', postId);
        done();
    });

}