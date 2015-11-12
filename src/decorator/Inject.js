import Decorator from '../Decorator';

/**
 * @Inject(valueOrClassName:Object[, instantiate])
 * Assigns any object to the decorated class property.
 * May use/create a singleton instance of a class.
 */
export default class InjectDecorator extends Decorator {

    value = null;
    instantiate = true;

    constructor() {
        super();
    }

    newInstance() {
        return new InjectDecorator();
    }

    applyConfig(args) {

        this.value = args[0];

        if (args[1] && typeof args[1] == 'boolean') {
            this.instantiate = args[1];
        }
    }

    onDecorate(classInstance, propertyName, descriptor) {

        descriptor.initializer = () => {

            // inject class reference
            var value = this.value;

            // inject instance if existing (@Singleton decorated classes)
            if (global.dec.$SINGLETONS[value]) {
                value = global.dec.$SINGLETONS[value];
            }

            // create an instance on the fly
            if (this.instantiate && typeof value == 'function') {
                value = new value();
            }
            return value;
        };
        return descriptor;
    }
}