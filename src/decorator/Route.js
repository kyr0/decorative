import Decorator from '../Decorator';

/**
 * @Route(route:String [,authCb:Function])
 *
 * Watches for module classes to be started and hooks it's
 * routing logic in, as soon as it detects a matching module class and route.
 */
export default class RouteDecorator extends Decorator {

    route = null;
    authCb = null;

    constructor(){
        super();
    }

    newInstance() {
        return new RouteDecorator();
    }


    applyConfig(args) {
        this.route = args[0];

        if (args[1] && typeof args[1] == 'function') {
            this.authCb = args[1];
        }
    }

    onDecorate(targetClass, methodName, descriptor) {

        // add the route to the router
        dec.Router.addRoute(this.route, function() {});

        // route matching after a module has been started
        dec.EventBus.on('moduleStarted', (moduleInstance) => {

            // found the right instance
            if (targetClass.constructor.name === moduleInstance.constructor.name) {

                // try to match route
                var routeMatch = dec.Router.match(document.location.pathname);

                if (routeMatch && this.authCb) {

                    this.authCb(function() {

                        // descriptor value == the method annotated
                        descriptor.value.call(moduleInstance, routeMatch);
                    });

                } else if (routeMatch) {

                    // TODO: Check if it's working

                    // descriptor value == the method annotated
                    descriptor.value.call(moduleInstance, routeMatch);
                }
            }
        });

        return descriptor;
    }
}