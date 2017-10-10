export default function(context,payload,done) {
    context.dispatch('EDIT_POST_START', payload,done);
    context.service.create('PostService.editPost', payload, {}, function (err, comment) {
        if (err) {
            console.log(err);
            context.dispatch('EDIT_POST_FAILURE', comment);
            alert("Post edit failed");
            done();
            return;
        }

        context.dispatch('EDIT_POST_SUCCESS', comment);
        done();
    });

}