import Decorator from '../Decorator';

/**
 * @Singleton()
 * Creates an instance of the decorated class by calling it's constructor.
 */
export default class SingletonDecorator extends Decorator {

    newInstance() {

        // create memory map
        if (!global.dec.$SINGLETONS) {

            // TODO: Use WeakMap here (GC!)
            global.dec.$SINGLETONS = {};
        }
        return new SingletonDecorator();
    }

    onDecorate(providerClass) {

        // reference it here
        if (!global.dec.$SINGLETONS[providerClass.prototype.constructor.name]) {
            global.dec.$SINGLETONS[providerClass.prototype.constructor.name] = new providerClass();
        }
        return global.dec.$SINGLETONS[providerClass.prototype.constructor.name];
    }

    static getInstance(className) {
        return global.dec.$SINGLETONS[className];
    }
}
