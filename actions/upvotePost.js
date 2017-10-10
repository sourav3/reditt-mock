export default function(context,payload,done) {
    context.dispatch('UPVOTE_POST_START', payload);
    context.service.create('PostService.upvotePost', payload, {}, function (err, post) {
        if (err) {
            console.log(err);
            context.dispatch('UPVOTE_POST_FAILURE', post);
            alert("Upvote post failed");
            done();
            return;
        }

        context.dispatch('UPVOTE_POST_SUCCESS', post);
        done();
    });
}