export default function(context,payload,done) {
    context.dispatch('UPVOTE_COMMENT_START', payload);
    context.service.create('PostService.upvoteComment', payload, {}, function (err, cmntId) {
        if (err) {
            console.log(err);
            context.dispatch('UPVOTE_COMMENT_FAILURE', cmntId);
            alert("Upvote comment failed");
            done();
            return;
        }

        context.dispatch('UPVOTE_COMMENT_SUCCESS', cmntId);
        done();
    });
}