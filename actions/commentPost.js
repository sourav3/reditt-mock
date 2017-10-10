export default function(context,payload,done) {
    context.dispatch('COMMENT_POST_START', payload);
    context.service.create('PostService.replyPost', payload, {}, function (err, comment) {
        if (err) {
            console.log(err);
            context.dispatch('COMMENT_POST_FAILURE', comment);
            alert("Replying to post failed");
            done();
            return;
        }

        context.dispatch('COMMENT_POST_SUCCESS', comment);
        done();
    });

}