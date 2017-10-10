export default function(context,payload,done) {
    context.dispatch('DOWNVOTE_COMMENT_START', payload);
    context.service.create('PostService.downvoteComment', payload, {}, function (err, cmntId) {
        if (err) {
            console.log(err);
            context.dispatch('DOWNVOTE_COMMENT_FAILURE', cmntId);
            alert("Downvote comment failed");
            done();
            return;
        }

        context.dispatch('DOWNVOTE_COMMENT_SUCCESS', cmntId);
        done();
    });
}