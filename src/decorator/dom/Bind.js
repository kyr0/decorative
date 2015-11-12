import Decorator from '../../Decorator';

/**
 * Global @DOMBind decorator implementation.
 * Selects a DOM element using jQuery (if available) or document.querySelector.
 */
export default class DOMBindDecorator extends Decorator {

    selector = null;

    constructor() {
        super();
    }

    newInstance() {
        return new DOMBindDecorator();
    }

    applyConfig(args) {
        this.selector = args[0];
    }

    onDecorate(classPrototype, propertyName, descriptor) {

        var me = this;

        // allow future re-visiting
        descriptor.writable = true;

        // set initial prototype value
        descriptor.initializer = function() {

            var value = DOMBindDecorator.query(me.selector) || {};

            // for future re-visiting
            value.DOMBind = descriptor.initializer;

            return value;
        };
        return descriptor;
    }

    static query(selector) {

        if ($ || jQuery) {

            return ($||jQuery)(selector)[0];

        } else if (document.querySelector) {

            return document.querySelector(selector);

        } else {

            throw new Error('No native browser support for selecting DOM elements available. Please include jQuery.');
        }
    }
}