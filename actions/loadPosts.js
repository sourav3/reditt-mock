export default function(context,payload,done) {
    context.dispatch('LOAD_POST_START', payload);
    context.service.read('PostService',{}, {}, function (err, posts) {
        if (err) {
            console.log(err);
            context.dispatch('LOAD_POST_FAILURE', {});
            console.log("Loading posts failed");
            done();
            return;
        }

        context.dispatch('LOAD_POST_SUCCESS', posts);
        done();
    });

}