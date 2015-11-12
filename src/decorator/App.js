import Decorator from '../Decorator';

/**
 * @App(startConfig:Object)
 *
 * Creates an application instance (e.g. delayed) and broadcasts this event.
 * May call the .onStart() method on the application instance, if existing.
 *
 * The start decorator supports the following config options:
 *
 *   delayed:Function -> This function receives a promise as it's first argument.
 *                       Resolve this promise at any time to execute the start
 *                       at this time instead of realtime.
 *
 * Example:
 *
 * @App({
 *   delayed: (start:Function) => {
 *
 *     $(document).ready(() => {
 *       start();
 *     });
 *   }
 * })
 */
export default class AppDecorator extends Decorator {

    newInstance() {
        return new AppDecorator();
    }

    onDecorate(appDelegateClass) {

        var startImmediatelyImpl = function(start) {
                start();
            };

        var startPromise = new Promise(
            this.config.delayed || startImmediatelyImpl
        );

        startPromise.then(() => {
            this.startThru(appDelegateClass);
        });
        return appDelegateClass;
    }

    startThru(appDelegateClass) {

        // create instance
        let appDelegateClassInstance = new appDelegateClass();

        if (appDelegateClassInstance.onStart &&
            typeof appDelegateClassInstance.onStart === 'function') {

            appDelegateClassInstance.onStart.call(appDelegateClassInstance);
        }

        // fire event: App started
        dec.EventBus.emit('appStarted', appDelegateClassInstance);
    }
}