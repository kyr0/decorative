decorative.js
=============

...is an ES7 micro-framework promoting @decorator pattern-driven app development.

Using decorators means to write:
- less lines
- less complex
- better maintainable 
- better readable
- more loosely coupled
code.

It's really "decorative" code you will be writing using ```@decorators``` ;)

Decorators were introduced to Babel.js in spring 2015 by Yehuda Katz. Since then, only 
a few decorators were implemented (see ```core-decorators``` by ```jayphelps```). But the world didn't care much, 
no matter if they are amazing or not.

When I discovered the es7.decorators I realized the power they could bring
to my web apps and I began to implement decorative.js.

decorative.js is currently under development but already used to develop
a web app which I will release soon. I rely on this framework and it's toolchain (Babel.js)
and it works stable for my use-cases. I can't guarantee that it fully works for you but I think
it's worth a try or at least a quick look.

## Decorative app development

decorative.js heavily relies on ES6 and 7. If you aren't already familiar 
with the great language features introduced in 6 right now, I kindly recommend you to read on here:

    https://github.com/lukehoban/es6features

Well, decorators are part of the ES7 proposals. Let's see, how it looks like to use them.

## Using decorators

First, we ```import``` decorative and the decorators we are planning to use.
Afterwards we decorate ```classes``` and ```class members``` like this:

    import { Singleton } from 'decorative';

    @Singleton()
    class MyFirstDecoratedClass {
    
        hello = "Hi, ";   
    
        sayHello() {
            console.log(this.hello + "I'm a singleton!");
        }
    }
    
Guess what? It's really a singleton now!

   MyFirstDecoratedClass.sayHello();
   
Well, now that you got picture: Lets look what we need to run this code 
in today's JS engines.

## Requirements and setup

Just install this package like this:

    npm install decorative --save
    
If you also plan to use it with React, you may want to install ```decorative-react```:

    npm install decorative-react --save

To use decorative you need to cross-compile the code from tomorrows ECMAScript 7
code back to today's ECMAScript 5 / 6 code. Well, this is quite easy. We use Babel.js
and grunt for this. (while gulp is compatible too, I don't have a configuration example yet; feel free to provide one :)

So lets write a Grunt file and include webpack like this:

    grunt.initConfig({ 
        webpack: {
            app: {
                entry: "$yourAppEntry",
                output: {
                    path: '$yourGeneratedOutputDirectory',
                    filename: "$nameOfTheSingleOutputFileBabelJSGeneratesForYou.js"
                },
                devtool: 'source-map', // <- so you can debug ECMAScript 7 code in devTools today
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            loader: "babel-loader"
                        }
                    ]
                },
                watch: true,          // <- re-compile on JS source/app code change
                keepalive: true,      // <- start the webpack dev-server
                failOnError: false    // <- prevents stopping the dev-server on error
            }
        }
    });

A working example of a Gruntfile can be found in this repositories "Gruntfile.js".

Additionally create a ```.babelrc``` file in your projects root directory (next to Gruntfile.js)
and put it like:

    {
      "presets": ["es2015", "stage-0"],
      "plugins": ["transform-decorators", "syntax-class-properties"]
    }
    
This configures Babel.js to parse/transform the full spectrum of ES6+ features.

Now that we set up Babel.js and grunt, we can run the transpiling process continuously:

    grunt webpack
    
(Or just "grunt" when you set "webpack" as a default task)

## Decorators

Now that the cross-compilation works and you're able to use decorative and it's decorators,
lets take a look which decorators have been implemented and are ready to use:

### @Singleton()

Creates an instance of the decorated class by calling it's constructor.
 
  
      import { Singleton } from 'decorative';
      
      @Singleton()
      class MyFirstDecoratedClass {
          
          hello = "Hi";   
      
          sayHello() {
              console.log("${this.hello}, I'm a singleton!");
          }
      }
  
  
  
### @Inject(valueOrClassName:Object [,instantiate:Boolean])

Assigns any object to the decorated class property.
May use/create a singleton instance of a class.

    import { Singleton, Inject } from 'decorative';
      
    @Singleton()
    class UsingInject {
          
          @Inject('MyFirstDecoratedClass')
          myFirstDecoratedClass = null;
    }
    
    UsingInject.myFirstDecoratedClass.sayHello();
    
    
### @Translate(translations:Object [, locale:String=en_GB])

Injects the provided i18n translation object into the target class prototype.
If a locale is given, it maps like ```translations[locale]```:
    
    import { Translate, Singleton } from 'decorative';
    import i18n from 'i18n/login';
    
    @Translate(i18n, 'de_DE')
    @Singleton
    class LoginForm {
    
        get loginButtonLabel() {
            return this.i18n.loginButtonLabel;
        }
        
        getUserWelcomeMsg(name) {
            return this.i18n.userWelcomeMsg(name);
        }
    }
    
You can use it like:

    // if you like getters :)
    LoginForm.loginButtonLabel()                 // "Einloggen"
    LoginForm.getUserWelcomeMsg('John Doe')      // "Herzlich Willkommen, John Doe!"
    
    // without getters
    LoginForm.i18n.loginButtonLabel              // "Einloggen"
    LoginForm.i18n.userWelcomeMsg('John Doe')    // "Herzlich Willkommen, John Doe!"
    
Well, the ```i18n/login.js``` should look like this:
    
    export default {
        de_DE: {
            loginButtonLabel: 'Einloggen',
            userWelcomeMsg: (name) => return "Herzlich Willkommen, ${name}!"
        },
        en_GB: {
            loginButtonLabel: 'Login',
            userWelcomeMsg: (name) => return "Welcome, ${name}!"
        }
    }
    
### @App(startConfig:Object)

Creates an application instance (e.g. delayed, see below) and emits ```appStarted``` on the internal event bus. 
Modules will create their instances afterwards. (see ```@AppModule```).

An optional ```onStart()``` lifecycle method gets called (if impl.) on the app class right before the modules get started.
   
The ```startConfig```-object of ```@App``` supports the following properties:

```delayed:Function``` 
This function receives a callback function as it's first argument.
Call it at any time to create the App instance right at the time you call that ```start``` function.
This also delays the startup of the ```@AppModules``` for sure.

    import { App } from 'decorative';
    
    // module imports should happen before App declaration
    import './modules/Login';
    import './modules/Dashboard';
    
    @App({
        delayed: (start:Function) => {
            $(document).ready(() => {
                start();
            });
        }
    })
    class MyApp {
    
    }
    
Limitation: Module imports should happen before App declaration.  
    
### @AppModule()

Automatically creates an instance of the decorated class and adds it to the application instance.
Afterwards it emits ```moduleStarted``` in the internal event bus so that ```@Route()``` decorators get activated in time.
    
    import { AppModule } from 'decorative';
        
    @AppModule()
    class Login {
    
        constructor() {
            console.log("I'm a module of ${this.app}!");
        }
    }
    
### @Route(route:String [,authCb(isAllowed:Function):Function])    

Watches for the module classes to be started and calls the decorated method 
as soon a matching document.location route gets detected.
   
    import { AppModule, Route } from 'decorative';
    
    @AppModule()
    class Login {
    
        @Route('/')
        showLoginView() {
            // show the login view here (e.g. using decorative-react ;)
        }
    }
    
As you can see, the @Route() decorator may be called with a second argument ```authCb```.
This enabled flexible, (even asynchronous) authentication checks:

    @Route('/', isAllowed => {
        // check if "/" is allowed, then call:
        isAllowed(true); // or false, to deny
    })
    
The method gets called only if ```isAllowed``` gets called.
    
Limitation: 
Can be applied to methods in @AppModule decorated classes only yet. (see roadmap)
    
### @Promised()

Wraps a decorated method inside a Promise.

    @Promised()
    findMyPhone(howItLooksLike, foundCb, imSureSomeoneHasStolenItCb) {
 
        $.ajax({
            url: '/whereIsMyPhone',
            data: howItLooksLike
        })
        .then(found);
        .catch(imSureSomeoneHasStolenIt);
    }
    
The magic here is, that the method's return value is a promise auto-magically:

    .findMySocks({color: 'white', type: 'android'})
        .then(myPhone => {
            // alright
        })
        .catch(err => {
            this.comingLateToday();
        });

## Roadmap

Although a lot has been implemented, there is still a lot to do and you are very welcome to push :)

Features planned to be introduced in the near future:

  - ```@Singleton``` should support constructor arguments
  - ```@Inject``` should be able to consume and resolve a full-featured DI config object as first argument
  - ```@Route``` should support to be applied on non-@StartModule classes (and therefore auto-detect if the class it belongs to is a module)
  - Please create an issue regarding your own feature requests