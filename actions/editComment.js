export default function(context,payload,done) {
    context.dispatch('EDIT_CMNT_START', payload,done);
    context.service.create('PostService.editComment', payload, {}, function (err, comment) {
        if (err) {
            console.log(err);
            context.dispatch('EDIT_CMNT_FAILURE', comment);
            alert("Comment edit failed");
            done();
            return;
        }

        context.dispatch('EDIT_CMNT_SUCCESS', comment);
        done();
    });

}