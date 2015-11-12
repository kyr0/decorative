if (!global.dec) {
    global.dec = {};
}

import EventBus from './event/Bus';

if (!dec.EventBus) {
    dec.EventBus = new EventBus();
}

import Router from './Router';
dec.Router = Router;

// DECORATORS
import AppDecorator from './decorator/App';
dec.AppDecorator = AppDecorator;
var App = new AppDecorator().getDecorator();
if (!dec.App) {
    dec.App = App;
}

import AppModuleDecorator from './decorator/AppModule';
dec.AppModuleDecorator = AppModuleDecorator;
var AppModule = new AppModuleDecorator().getDecorator();
if (!dec.AppModule) {
    dec.AppModule = AppModule
}

import SingletonDecorator from './decorator/Singleton';
dec.SingletonDecorator = SingletonDecorator;
var Singleton = new SingletonDecorator().getDecorator();
if (!dec.Singleton) {
    dec.Singleton = Singleton;
}
var getInstance = SingletonDecorator.getInstance;
if (!dec.getInstance) {
    dec.getInstance = getInstance;
}

import DOMBindDecorator from './decorator/dom/Bind';
dec.DOMBindDecorator = DOMBindDecorator;
var DOMBind = new DOMBindDecorator().getDecorator();
if (!dec.DOMBind) {
    dec.DOMBind = DOMBind;
}

import InjectDecorator from './decorator/Inject';
dec.InjectDecorator = InjectDecorator;
var Inject = new InjectDecorator().getDecorator();
if (!dec.Inject) {
    dec.Inject = Inject;
}

import RouteDecorator from './decorator/Route';
dec.RouteDecorator = RouteDecorator;
var Route = new RouteDecorator().getDecorator();
if (!dec.Route) {
    dec.Route = Route;
}

import TranslateDecorator from './decorator/Translate';
dec.TranslateDecorator = TranslateDecorator;
var Translate = new TranslateDecorator().getDecorator();
if (!dec.Translate) {
    dec.Translate = Translate;
}

import PromisedDecorator from './decorator/Promised';
dec.PromisedDecorator = PromisedDecorator;
var Promised = new PromisedDecorator().getDecorator();
if (!dec.Promised) {
    dec.Promised = Promised;
}

import Log from './Log';
var log = Log.log;
dec.log = log;

// export by reference
export default {
    EventBus,
    AppDecorator,
    App,
    DOMBindDecorator,
    DOMBind,
    AppModule,
    Singleton,
    Inject,
    Route,
    Translate,
    Promised,
    getInstance,
    log
};

