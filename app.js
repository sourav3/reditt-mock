import Fluxible from 'fluxible';
import Application from './components/Application';
import HomePage from './components/HomePage';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import UserStore from './stores/UserStore';
import PostStore from './stores/PostStore';
import fetchrPlugin from 'fluxible-plugin-fetchr';
import ReactRouterPlugin from 'fluxible-plugin-react-router';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(PostStore);

app.plug(fetchrPlugin({ xhrPath: '/_api' }));
//app.plug(ReactRouterPlugin());


module.exports = app;
