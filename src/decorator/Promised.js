import Decorator from '../Decorator';

/**
 * @Promised()
 *
 * Wraps a decorated method by a Promise instance.
 *
 * A neat example:
 *
 *     @Promised()
 *     findMySocks(socksFound:Function, socksLost:Function) {
 *
 *         fetch('/foobar.json')
 *              .then(response => return response.json())
 *              .then(data => data ? socksFound(data) : socksLost())
 *              .catch(ex => socksLost());
 *
 *     }
 */
export default class PromisedDecorator extends Decorator {

    newInstance() {
        return new PromisedDecorator();
    }

    onDecorate(targetClass, methodName, descriptor) {

        var targetMethod = descriptor.value;

        descriptor.value = function(config) {

            return new Promise(function(resolve, reject) {
                targetMethod(config, resolve, reject);
            });
        };
        return descriptor;
    }
}