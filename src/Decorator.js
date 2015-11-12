/**
 * Decorator base class implementation with lifecycle implementation.
 * You may extend from this class to implement your very own decorator
 * or extend from a decorator class which extends from this class.
 *
 * Either way, if you:
 *
 * - like to extend the decorator's logic, override this.onDecorate()
 *   (and e.g. call super() if you want to enhance instead of replace the logic)
 *
 * - like to change the default configuration, replace the config by
 *   setting a new this.defaultConfig value object
 *
 *   OR
 *
 *   override this.getDefaultConig() and return such a default confg
 *   programmatically.
 *
 * - like to change/enhance the way, a config gets applied programmatically,
 *   override this.applyConfig(config), change the config object properties
 *   and store the object as the new this.config.
 *
 * @author Aron Homberg <info@aron-homberg.de>
 */
export default class Decorator {

    config = {};

    /**
     * Lifecycle method with default implementation.
     * You may implement custom logic here
     * to e.g. manipulate this.config before this.onDecorate() gets called.
     * MUST set this.config.
     * @param {Arguments} args The decorator's call arguments
     * @return void
     */
    applyConfig(args) {
        this.config = args[0] || {};
    }

    onDecoratorCall(config) {}

    /**
     * Template lifecycle method to override in subclasses.
     * Here you may implement your decorator's code.
     *
     * Example onDecorate method implementation:
     *
     *     class YourDecorator implements Decorator {
     *
     *         onDecorate(targetClass) {
     *
     *             if (this.config.isFun) {
     *                 targetClass.prototype.isFun = true;
     *             }
     *
     *             return targetClass;
     *         }
     *     }
     *
     * Example usage:
     *
     *     @YourDecorator({
     *         isFun: true
     *     })
     *     class YourClass {...}
     *
     * The method arguments may depend on the decorator's target
     * (class, method or property).
     *
     * MUST return the value of the first argument (target) modified or unmodified.
     * @returns {*}
     */
    onDecorate() {

        // if (!arguments[1]) { it's a class! }

        // TODO: Check if this should apply for all targets:
        // classes, methods, properties or if the descriptor argument 2 should be returned instead
        return arguments[0];
    }


    newInstance() {
        return new Decorator();
    }

    /**
     * Internal decorator lifecycle implementation that uses hooks to
     * enable implementing decorator handler methods on class level and
     * thus allow inheritance.
     * @returns {Function}
     */
    getDecorator() {
        var me = this;
        return function(config) {

            me = me.newInstance();

            me.applyConfig(arguments);

            return function() {
                return me.onDecorate.apply(me, arguments);
            };
        };
    }
}
