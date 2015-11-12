import Decorator from '../Decorator';

/**
 * @AppModule()
 * Automatically creates an instance of the decorated class and adds it to the application instance.
 * Afterwards it emits "moduleStarted" in the internal event bus so that @Route()
 * decorators get activated in time.
 */
export default class AppModuleDecorator extends Decorator {

    newInstance() {
        return new AppModuleDecorator();
    }

    onDecorate(moduleClass) {

        // annotate AppInstance reference when started
        dec.EventBus.on('appStarted', (appInstance) => {

            // create instance
            let ModuleInstance = new moduleClass();

            // set app reference
            ModuleInstance.app = appInstance;

            if (!appInstance.modules) {
                appInstance.modules = {};
            }

            // register module within application instance by name
            appInstance.modules[moduleClass.name] = ModuleInstance;

            if (ModuleInstance['onStart'] &&
                typeof ModuleInstance['onStart'] === 'function') {

                ModuleInstance['onStart'].call(ModuleInstance);
            }
            dec.EventBus.emit('moduleStarted', ModuleInstance);
        });
        return moduleClass;
    }
}