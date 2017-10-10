export default function(context,payload,done) {
    context.dispatch('REPLY_CMNT_START', payload,done);
    context.service.create('PostService.replyComment', payload, {}, function (err, comment) {
        if (err) {
            console.log(err);
            context.dispatch('REPLY_CMNT_FAILURE', comment);
            alert("Replying to comment failed");
            done();
            return;
        }

        context.dispatch('REPLY_CMNT_SUCCESS', comment);
        done();
    });

}