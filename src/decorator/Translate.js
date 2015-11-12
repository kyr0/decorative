import Decorator from '../Decorator';

/**
 * @Translate(translations:Object [, locale:String=en_GB])
 * Injects an i18n object into the target class prototype.
 */
export default class TranslateDecorator extends Decorator {

    translations = null;
    locale = "en_GB";

    constructor() {
        super();
    }

    newInstance() {
        return new TranslateDecorator();
    }

    applyConfig(args) {

        this.translations = args[0];

        if (args[1]) {
            this.locale = args[1];
        }
    }
    onDecorate(targetClass) {

        // assign translation object
        targetClass.prototype.i18n = this.translations[this.locale];

        return targetClass;
    }
}