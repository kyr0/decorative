/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Bus = __webpack_require__(1);
	
	var _Bus2 = _interopRequireDefault(_Bus);
	
	var _Router = __webpack_require__(4);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	var _App = __webpack_require__(6);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _AppModule = __webpack_require__(8);
	
	var _AppModule2 = _interopRequireDefault(_AppModule);
	
	var _Singleton = __webpack_require__(9);
	
	var _Singleton2 = _interopRequireDefault(_Singleton);
	
	var _Bind = __webpack_require__(10);
	
	var _Bind2 = _interopRequireDefault(_Bind);
	
	var _Inject = __webpack_require__(11);
	
	var _Inject2 = _interopRequireDefault(_Inject);
	
	var _Route = __webpack_require__(12);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _Translate = __webpack_require__(13);
	
	var _Translate2 = _interopRequireDefault(_Translate);
	
	var _Promised = __webpack_require__(14);
	
	var _Promised2 = _interopRequireDefault(_Promised);
	
	var _Log = __webpack_require__(15);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!global.dec) {
	    global.dec = {};
	}
	
	if (!dec.EventBus) {
	    dec.EventBus = new
	
	    // export by reference
	    _Bus2.default();
	}
	
	dec.Router = _Router2.default;
	
	// DECORATORS
	
	dec.AppDecorator = _App2.default;
	var App = new _App2.default().getDecorator();
	if (!dec.App) {
	    dec.App = App;
	}
	
	dec.AppModuleDecorator = _AppModule2.default;
	var AppModule = new _AppModule2.default().getDecorator();
	if (!dec.AppModule) {
	    dec.AppModule = AppModule;
	}
	
	dec.SingletonDecorator = _Singleton2.default;
	var Singleton = new _Singleton2.default().getDecorator();
	if (!dec.Singleton) {
	    dec.Singleton = Singleton;
	}
	var getInstance = _Singleton2.default.getInstance;
	if (!dec.getInstance) {
	    dec.getInstance = getInstance;
	}
	
	dec.DOMBindDecorator = _Bind2.default;
	var DOMBind = new _Bind2.default().getDecorator();
	if (!dec.DOMBind) {
	    dec.DOMBind = DOMBind;
	}
	
	dec.InjectDecorator = _Inject2.default;
	var Inject = new _Inject2.default().getDecorator();
	if (!dec.Inject) {
	    dec.Inject = Inject;
	}
	
	dec.RouteDecorator = _Route2.default;
	var Route = new _Route2.default().getDecorator();
	if (!dec.Route) {
	    dec.Route = Route;
	}
	
	dec.TranslateDecorator = _Translate2.default;
	var Translate = new _Translate2.default().getDecorator();
	if (!dec.Translate) {
	    dec.Translate = Translate;
	}
	
	dec.PromisedDecorator = _Promised2.default;
	var Promised = new _Promised2.default().getDecorator();
	if (!dec.Promised) {
	    dec.Promised = Promised;
	}
	
	var log = _Log2.default.log;
	dec.log = log;exports.default = {
	    EventBus: _Bus2.default,
	    AppDecorator: _App2.default,
	    App: App,
	    DOMBindDecorator: _Bind2.default,
	    DOMBind: DOMBind,
	    AppModule: AppModule,
	    Singleton: Singleton,
	    Inject: Inject,
	    Route: Route,
	    Translate: Translate,
	    Promised: Promised,
	    getInstance: getInstance,
	    log: log
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _Observable2 = __webpack_require__(2);
	
	var _Observable3 = _interopRequireDefault(_Observable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bus = (function (_Observable) {
	   _inherits(Bus, _Observable);
	
	   function Bus() {
	      _classCallCheck(this, Bus);
	
	      return _possibleConstructorReturn(this, Object.getPrototypeOf(Bus).apply(this, arguments));
	   }
	
	   return Bus;
	})(_Observable3.default);
	
	exports.default = Bus;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eventemitter = __webpack_require__(3);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Observable = (function (_EventEmitter) {
	  _inherits(Observable, _EventEmitter);
	
	  function Observable() {
	    _classCallCheck(this, Observable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Observable).apply(this, arguments));
	  }
	
	  return Observable;
	})(_eventemitter2.default);
	
	exports.default = Observable;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	/*!
	 * EventEmitter2
	 * https://github.com/hij1nx/EventEmitter2
	 *
	 * Copyright (c) 2013 hij1nx
	 * Licensed under the MIT license.
	 */
	;!(function (undefined) {
	
	  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
	    return Object.prototype.toString.call(obj) === "[object Array]";
	  };
	  var defaultMaxListeners = 10;
	
	  function init() {
	    this._events = {};
	    if (this._conf) {
	      configure.call(this, this._conf);
	    }
	  }
	
	  function configure(conf) {
	    if (conf) {
	
	      this._conf = conf;
	
	      conf.delimiter && (this.delimiter = conf.delimiter);
	      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
	      conf.wildcard && (this.wildcard = conf.wildcard);
	      conf.newListener && (this.newListener = conf.newListener);
	
	      if (this.wildcard) {
	        this.listenerTree = {};
	      }
	    }
	  }
	
	  function EventEmitter(conf) {
	    this._events = {};
	    this.newListener = false;
	    configure.call(this, conf);
	  }
	
	  //
	  // Attention, function return type now is array, always !
	  // It has zero elements if no any matches found and one or more
	  // elements (leafs) if there are matches
	  //
	  function searchListenerTree(handlers, type, tree, i) {
	    if (!tree) {
	      return [];
	    }
	    var listeners = [],
	        leaf,
	        len,
	        branch,
	        xTree,
	        xxTree,
	        isolatedBranch,
	        endReached,
	        typeLength = type.length,
	        currentType = type[i],
	        nextType = type[i + 1];
	    if (i === typeLength && tree._listeners) {
	      //
	      // If at the end of the event(s) list and the tree has listeners
	      // invoke those listeners.
	      //
	      if (typeof tree._listeners === 'function') {
	        handlers && handlers.push(tree._listeners);
	        return [tree];
	      } else {
	        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
	          handlers && handlers.push(tree._listeners[leaf]);
	        }
	        return [tree];
	      }
	    }
	
	    if (currentType === '*' || currentType === '**' || tree[currentType]) {
	      //
	      // If the event emitted is '*' at this part
	      // or there is a concrete match at this patch
	      //
	      if (currentType === '*') {
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i + 1));
	          }
	        }
	        return listeners;
	      } else if (currentType === '**') {
	        endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === '*';
	        if (endReached && tree._listeners) {
	          // The next element has a _listeners, add it to the handlers.
	          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
	        }
	
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            if (branch === '*' || branch === '**') {
	              if (tree[branch]._listeners && !endReached) {
	                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
	              }
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            } else if (branch === nextType) {
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i + 2));
	            } else {
	              // No match on this one, shift into the tree but not in the type array.
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            }
	          }
	        }
	        return listeners;
	      }
	
	      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i + 1));
	    }
	
	    xTree = tree['*'];
	    if (xTree) {
	      //
	      // If the listener tree will allow any match for this part,
	      // then recursively explore all branches of the tree
	      //
	      searchListenerTree(handlers, type, xTree, i + 1);
	    }
	
	    xxTree = tree['**'];
	    if (xxTree) {
	      if (i < typeLength) {
	        if (xxTree._listeners) {
	          // If we have a listener on a '**', it will catch all, so add its handler.
	          searchListenerTree(handlers, type, xxTree, typeLength);
	        }
	
	        // Build arrays of matching next branches and others.
	        for (branch in xxTree) {
	          if (branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
	            if (branch === nextType) {
	              // We know the next element will match, so jump twice.
	              searchListenerTree(handlers, type, xxTree[branch], i + 2);
	            } else if (branch === currentType) {
	              // Current node matches, move into the tree.
	              searchListenerTree(handlers, type, xxTree[branch], i + 1);
	            } else {
	              isolatedBranch = {};
	              isolatedBranch[branch] = xxTree[branch];
	              searchListenerTree(handlers, type, { '**': isolatedBranch }, i + 1);
	            }
	          }
	        }
	      } else if (xxTree._listeners) {
	        // We have reached the end and still on a '**'
	        searchListenerTree(handlers, type, xxTree, typeLength);
	      } else if (xxTree['*'] && xxTree['*']._listeners) {
	        searchListenerTree(handlers, type, xxTree['*'], typeLength);
	      }
	    }
	
	    return listeners;
	  }
	
	  function growListenerTree(type, listener) {
	
	    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	
	    //
	    // Looks for two consecutive '**', if so, don't add the event at all.
	    //
	    for (var i = 0, len = type.length; i + 1 < len; i++) {
	      if (type[i] === '**' && type[i + 1] === '**') {
	        return;
	      }
	    }
	
	    var tree = this.listenerTree;
	    var name = type.shift();
	
	    while (name) {
	
	      if (!tree[name]) {
	        tree[name] = {};
	      }
	
	      tree = tree[name];
	
	      if (type.length === 0) {
	
	        if (!tree._listeners) {
	          tree._listeners = listener;
	        } else if (typeof tree._listeners === 'function') {
	          tree._listeners = [tree._listeners, listener];
	        } else if (isArray(tree._listeners)) {
	
	          tree._listeners.push(listener);
	
	          if (!tree._listeners.warned) {
	
	            var m = defaultMaxListeners;
	
	            if (typeof this._events.maxListeners !== 'undefined') {
	              m = this._events.maxListeners;
	            }
	
	            if (m > 0 && tree._listeners.length > m) {
	
	              tree._listeners.warned = true;
	              console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', tree._listeners.length);
	              console.trace();
	            }
	          }
	        }
	        return true;
	      }
	      name = type.shift();
	    }
	    return true;
	  }
	
	  // By default EventEmitters will print a warning if more than
	  // 10 listeners are added to it. This is a useful default which
	  // helps finding memory leaks.
	  //
	  // Obviously not all Emitters should be limited to 10. This function allows
	  // that to be increased. Set to zero for unlimited.
	
	  EventEmitter.prototype.delimiter = '.';
	
	  EventEmitter.prototype.setMaxListeners = function (n) {
	    this._events || init.call(this);
	    this._events.maxListeners = n;
	    if (!this._conf) this._conf = {};
	    this._conf.maxListeners = n;
	  };
	
	  EventEmitter.prototype.event = '';
	
	  EventEmitter.prototype.once = function (event, fn) {
	    this.many(event, 1, fn);
	    return this;
	  };
	
	  EventEmitter.prototype.many = function (event, ttl, fn) {
	    var self = this;
	
	    if (typeof fn !== 'function') {
	      throw new Error('many only accepts instances of Function');
	    }
	
	    function listener() {
	      if (--ttl === 0) {
	        self.off(event, listener);
	      }
	      fn.apply(this, arguments);
	    }
	
	    listener._origin = fn;
	
	    this.on(event, listener);
	
	    return self;
	  };
	
	  EventEmitter.prototype.emit = function () {
	
	    this._events || init.call(this);
	
	    var type = arguments[0];
	
	    if (type === 'newListener' && !this.newListener) {
	      if (!this._events.newListener) {
	        return false;
	      }
	    }
	
	    // Loop through the *_all* functions and invoke them.
	    if (this._all) {
	      var l = arguments.length;
	      var args = new Array(l - 1);
	      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	      for (i = 0, l = this._all.length; i < l; i++) {
	        this.event = type;
	        this._all[i].apply(this, args);
	      }
	    }
	
	    // If there is no 'error' event listener then throw.
	    if (type === 'error') {
	
	      if (!this._all && !this._events.error && !(this.wildcard && this.listenerTree.error)) {
	
	        if (arguments[1] instanceof Error) {
	          throw arguments[1]; // Unhandled 'error' event
	        } else {
	            throw new Error("Uncaught, unspecified 'error' event.");
	          }
	        return false;
	      }
	    }
	
	    var handler;
	
	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	    }
	
	    if (typeof handler === 'function') {
	      this.event = type;
	      if (arguments.length === 1) {
	        handler.call(this);
	      } else if (arguments.length > 1) switch (arguments.length) {
	        case 2:
	          handler.call(this, arguments[1]);
	          break;
	        case 3:
	          handler.call(this, arguments[1], arguments[2]);
	          break;
	        // slower
	        default:
	          var l = arguments.length;
	          var args = new Array(l - 1);
	          for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	          handler.apply(this, args);
	      }
	      return true;
	    } else if (handler) {
	      var l = arguments.length;
	      var args = new Array(l - 1);
	      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	
	      var listeners = handler.slice();
	      for (var i = 0, l = listeners.length; i < l; i++) {
	        this.event = type;
	        listeners[i].apply(this, args);
	      }
	      return listeners.length > 0 || !!this._all;
	    } else {
	      return !!this._all;
	    }
	  };
	
	  EventEmitter.prototype.on = function (type, listener) {
	
	    if (typeof type === 'function') {
	      this.onAny(type);
	      return this;
	    }
	
	    if (typeof listener !== 'function') {
	      throw new Error('on only accepts instances of Function');
	    }
	    this._events || init.call(this);
	
	    // To avoid recursion in the case that type == "newListeners"! Before
	    // adding it to the listeners, first emit "newListeners".
	    this.emit('newListener', type, listener);
	
	    if (this.wildcard) {
	      growListenerTree.call(this, type, listener);
	      return this;
	    }
	
	    if (!this._events[type]) {
	      // Optimize the case of one listener. Don't need the extra array object.
	      this._events[type] = listener;
	    } else if (typeof this._events[type] === 'function') {
	      // Adding the second element, need to change to array.
	      this._events[type] = [this._events[type], listener];
	    } else if (isArray(this._events[type])) {
	      // If we've already got an array, just append.
	      this._events[type].push(listener);
	
	      // Check for listener leak
	      if (!this._events[type].warned) {
	
	        var m = defaultMaxListeners;
	
	        if (typeof this._events.maxListeners !== 'undefined') {
	          m = this._events.maxListeners;
	        }
	
	        if (m > 0 && this._events[type].length > m) {
	
	          this._events[type].warned = true;
	          console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	          console.trace();
	        }
	      }
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.onAny = function (fn) {
	
	    if (typeof fn !== 'function') {
	      throw new Error('onAny only accepts instances of Function');
	    }
	
	    if (!this._all) {
	      this._all = [];
	    }
	
	    // Add the function to the event listener collection.
	    this._all.push(fn);
	    return this;
	  };
	
	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	  EventEmitter.prototype.off = function (type, listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('removeListener only takes instances of Function');
	    }
	
	    var handlers,
	        leafs = [];
	
	    if (this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	    } else {
	      // does not use listeners(), so no side effect of creating _events[type]
	      if (!this._events[type]) return this;
	      handlers = this._events[type];
	      leafs.push({ _listeners: handlers });
	    }
	
	    for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
	      var leaf = leafs[iLeaf];
	      handlers = leaf._listeners;
	      if (isArray(handlers)) {
	
	        var position = -1;
	
	        for (var i = 0, length = handlers.length; i < length; i++) {
	          if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
	            position = i;
	            break;
	          }
	        }
	
	        if (position < 0) {
	          continue;
	        }
	
	        if (this.wildcard) {
	          leaf._listeners.splice(position, 1);
	        } else {
	          this._events[type].splice(position, 1);
	        }
	
	        if (handlers.length === 0) {
	          if (this.wildcard) {
	            delete leaf._listeners;
	          } else {
	            delete this._events[type];
	          }
	        }
	        return this;
	      } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
	        if (this.wildcard) {
	          delete leaf._listeners;
	        } else {
	          delete this._events[type];
	        }
	      }
	    }
	
	    return this;
	  };
	
	  EventEmitter.prototype.offAny = function (fn) {
	    var i = 0,
	        l = 0,
	        fns;
	    if (fn && this._all && this._all.length > 0) {
	      fns = this._all;
	      for (i = 0, l = fns.length; i < l; i++) {
	        if (fn === fns[i]) {
	          fns.splice(i, 1);
	          return this;
	        }
	      }
	    } else {
	      this._all = [];
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
	
	  EventEmitter.prototype.removeAllListeners = function (type) {
	    if (arguments.length === 0) {
	      !this._events || init.call(this);
	      return this;
	    }
	
	    if (this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	
	      for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
	        var leaf = leafs[iLeaf];
	        leaf._listeners = null;
	      }
	    } else {
	      if (!this._events[type]) return this;
	      this._events[type] = null;
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.listeners = function (type) {
	    if (this.wildcard) {
	      var handlers = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
	      return handlers;
	    }
	
	    this._events || init.call(this);
	
	    if (!this._events[type]) this._events[type] = [];
	    if (!isArray(this._events[type])) {
	      this._events[type] = [this._events[type]];
	    }
	    return this._events[type];
	  };
	
	  EventEmitter.prototype.listenersAny = function () {
	
	    if (this._all) {
	      return this._all;
	    } else {
	      return [];
	    }
	  };
	
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return EventEmitter;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	    // CommonJS
	    exports.EventEmitter2 = EventEmitter;
	  } else {
	    // Browser global.
	    window.EventEmitter2 = EventEmitter;
	  }
	})();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _routes2.default)();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	!(function (e) {
	  if ("object" == ( false ? "undefined" : _typeof(exports))) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var f;"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.routes = e();
	  }
	})(function () {
	  var define, module, exports;return (function e(t, n, r) {
	    function s(o, u) {
	      if (!n[o]) {
	        if (!t[o]) {
	          var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
	        }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
	          var n = t[o][1][e];return s(n ? n : e);
	        }, f, f.exports, e, t, n, r);
	      }return n[o].exports;
	    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	  })({ 1: [function (_dereq_, module, exports) {
	
	      var localRoutes = [];
	
	      /**
	       * Convert path to route object
	       *
	       * A string or RegExp should be passed,
	       * will return { re, src, keys} obj
	       *
	       * @param  {String / RegExp} path
	       * @return {Object}
	       */
	
	      var Route = function Route(path) {
	        //using 'new' is optional
	
	        var src,
	            re,
	            keys = [];
	
	        if (path instanceof RegExp) {
	          re = path;
	          src = path.toString();
	        } else {
	          re = pathToRegExp(path, keys);
	          src = path;
	        }
	
	        return {
	          re: re,
	          src: path.toString(),
	          keys: keys
	        };
	      };
	
	      /**
	       * Normalize the given path string,
	       * returning a regular expression.
	       *
	       * An empty array should be passed,
	       * which will contain the placeholder
	       * key names. For example "/user/:id" will
	       * then contain ["id"].
	       *
	       * @param  {String} path
	       * @param  {Array} keys
	       * @return {RegExp}
	       */
	      var pathToRegExp = function pathToRegExp(path, keys) {
	        path = path.concat('/?').replace(/\/\(/g, '(?:/').replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, function (_, slash, format, key, capture, optional) {
	          if (_ === "*") {
	            keys.push(undefined);
	            return _;
	          }
	
	          keys.push(key);
	          slash = slash || '';
	          return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || '([^/]+?)') + ')' + (optional || '');
	        }).replace(/([\/.])/g, '\\$1').replace(/\*/g, '(.*)');
	        return new RegExp('^' + path + '$', 'i');
	      };
	
	      /**
	       * Attempt to match the given request to
	       * one of the routes. When successful
	       * a  {fn, params, splats} obj is returned
	       *
	       * @param  {Array} routes
	       * @param  {String} uri
	       * @return {Object}
	       */
	      var _match = function _match(routes, uri, startAt) {
	        var captures,
	            i = startAt || 0;
	
	        for (var len = routes.length; i < len; ++i) {
	          var route = routes[i],
	              re = route.re,
	              keys = route.keys,
	              splats = [],
	              params = {};
	
	          if (captures = uri.match(re)) {
	            for (var j = 1, len = captures.length; j < len; ++j) {
	              var key = keys[j - 1],
	                  val = typeof captures[j] === 'string' ? unescape(captures[j]) : captures[j];
	              if (key) {
	                params[key] = val;
	              } else {
	                splats.push(val);
	              }
	            }
	            return {
	              params: params,
	              splats: splats,
	              route: route.src,
	              next: i + 1
	            };
	          }
	        }
	      };
	
	      /**
	       * Default "normal" router constructor.
	       * accepts path, fn tuples via addRoute
	       * returns {fn, params, splats, route}
	       *  via match
	       *
	       * @return {Object}
	       */
	
	      var Router = function Router() {
	        //using 'new' is optional
	        return {
	          routes: [],
	          routeMap: {},
	          addRoute: function addRoute(path, fn) {
	            if (!path) throw new Error(' route requires a path');
	            if (!fn) throw new Error(' route ' + path.toString() + ' requires a callback');
	
	            if (this.routeMap[path]) {
	              throw new Error('path is already defined: ' + path);
	            }
	
	            var route = Route(path);
	            route.fn = fn;
	
	            this.routes.push(route);
	            this.routeMap[path] = fn;
	          },
	
	          removeRoute: function removeRoute(path) {
	            if (!path) throw new Error(' route requires a path');
	            if (!this.routeMap[path]) {
	              throw new Error('path does not exist: ' + path);
	            }
	
	            var match;
	            var newRoutes = [];
	
	            // copy the routes excluding the route being removed
	            for (var i = 0; i < this.routes.length; i++) {
	              var route = this.routes[i];
	              if (route.src !== path) {
	                newRoutes.push(route);
	              }
	            }
	            this.routes = newRoutes;
	            delete this.routeMap[path];
	          },
	
	          match: function match(pathname, startAt) {
	            var route = _match(this.routes, pathname, startAt);
	            if (route) {
	              route.fn = this.routeMap[route.route];
	              route.next = this.match.bind(this, pathname, route.next);
	            }
	            return route;
	          }
	        };
	      };
	
	      Router.Route = Route;
	      Router.pathToRegExp = pathToRegExp;
	      Router.match = _match;
	      // back compat
	      Router.Router = Router;
	
	      module.exports = Router;
	    }, {}] }, {}, [1])(1);
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Decorator2 = __webpack_require__(7);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var AppDecorator = (function (_Decorator) {
	    _inherits(AppDecorator, _Decorator);
	
	    function AppDecorator() {
	        _classCallCheck(this, AppDecorator);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AppDecorator).apply(this, arguments));
	    }
	
	    _createClass(AppDecorator, [{
	        key: 'newInstance',
	        value: function newInstance() {
	            return new AppDecorator();
	        }
	    }, {
	        key: 'onDecorate',
	        value: function onDecorate(appDelegateClass) {
	            var _this = this;
	
	            var startImmediatelyImpl = function startImmediatelyImpl(start) {
	                start();
	            };
	
	            var startPromise = new Promise(this.config.delayed || startImmediatelyImpl);
	
	            startPromise.then(function () {
	                _this.startThru(appDelegateClass);
	            });
	            return appDelegateClass;
	        }
	    }, {
	        key: 'startThru',
	        value: function startThru(appDelegateClass) {
	
	            // create instance
	            var appDelegateClassInstance = new appDelegateClass();
	
	            if (appDelegateClassInstance.onStart && typeof appDelegateClassInstance.onStart === 'function') {
	
	                appDelegateClassInstance.onStart.call(appDelegateClassInstance);
	            }
	
	            // fire event: App started
	            dec.EventBus.emit('appStarted', appDelegateClassInstance);
	        }
	    }]);
	
	    return AppDecorator;
	})(_Decorator3.default);
	
	exports.default = AppDecorator;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	var Decorator = (function () {
	    function Decorator() {
	        _classCallCheck(this, Decorator);
	
	        this.config = {};
	    }
	
	    _createClass(Decorator, [{
	        key: "applyConfig",
	
	        /**
	         * Lifecycle method with default implementation.
	         * You may implement custom logic here
	         * to e.g. manipulate this.config before this.onDecorate() gets called.
	         * MUST set this.config.
	         * @param {Arguments} args The decorator's call arguments
	         * @return void
	         */
	        value: function applyConfig(args) {
	            this.config = args[0] || {};
	        }
	    }, {
	        key: "onDecoratorCall",
	        value: function onDecoratorCall(config) {}
	
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
	
	    }, {
	        key: "onDecorate",
	        value: function onDecorate() {
	
	            // if (!arguments[1]) { it's a class! }
	
	            // TODO: Check if this should apply for all targets:
	            // classes, methods, properties or if the descriptor argument 2 should be returned instead
	            return arguments[0];
	        }
	    }, {
	        key: "newInstance",
	        value: function newInstance() {
	            return new Decorator();
	        }
	
	        /**
	         * Internal decorator lifecycle implementation that uses hooks to
	         * enable implementing decorator handler methods on class level and
	         * thus allow inheritance.
	         * @returns {Function}
	         */
	
	    }, {
	        key: "getDecorator",
	        value: function getDecorator() {
	            var me = this;
	            return function (config) {
	
	                me = me.newInstance();
	
	                me.applyConfig(arguments);
	
	                return function () {
	                    return me.onDecorate.apply(me, arguments);
	                };
	            };
	        }
	    }]);
	
	    return Decorator;
	})();
	
	exports.default = Decorator;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Decorator2 = __webpack_require__(7);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @AppModule()
	 * Automatically creates an instance of the decorated class and adds it to the application instance.
	 * Afterwards it emits "moduleStarted" in the internal event bus so that @Route()
	 * decorators get activated in time.
	 */
	
	var AppModuleDecorator = (function (_Decorator) {
	    _inherits(AppModuleDecorator, _Decorator);
	
	    function AppModuleDecorator() {
	        _classCallCheck(this, AppModuleDecorator);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AppModuleDecorator).apply(this, arguments));
	    }
	
	    _createClass(AppModuleDecorator, [{
	        key: 'newInstance',
	        value: function newInstance() {
	            return new AppModuleDecorator();
	        }
	    }, {
	        key: 'onDecorate',
	        value: function onDecorate(moduleClass) {
	
	            // annotate AppInstance reference when started
	            dec.EventBus.on('appStarted', function (appInstance) {
	
	                // create instance
	                var ModuleInstance = new moduleClass();
	
	                // set app reference
	                ModuleInstance.app = appInstance;
	
	                if (!appInstance.modules) {
	                    appInstance.modules = {};
	                }
	
	                // register module within application instance by name
	                appInstance.modules[moduleClass.name] = ModuleInstance;
	
	                if (ModuleInstance['onStart'] && typeof ModuleInstance['onStart'] === 'function') {
	
	                    ModuleInstance['onStart'].call(ModuleInstance);
	                }
	                dec.EventBus.emit('moduleStarted', ModuleInstance);
	            });
	            return moduleClass;
	        }
	    }]);
	
	    return AppModuleDecorator;
	})(_Decorator3.default);
	
	exports.default = AppModuleDecorator;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Decorator2 = __webpack_require__(7);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @Singleton()
	 * Creates an instance of the decorated class by calling it's constructor.
	 */
	
	var SingletonDecorator = (function (_Decorator) {
	    _inherits(SingletonDecorator, _Decorator);
	
	    function SingletonDecorator() {
	        _classCallCheck(this, SingletonDecorator);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SingletonDecorator).apply(this, arguments));
	    }
	
	    _createClass(SingletonDecorator, [{
	        key: 'newInstance',
	        value: function newInstance() {
	
	            // create memory map
	            if (!global.dec.$SINGLETONS) {
	
	                // TODO: Use WeakMap here (GC!)
	                global.dec.$SINGLETONS = {};
	            }
	            return new SingletonDecorator();
	        }
	    }, {
	        key: 'onDecorate',
	        value: function onDecorate(providerClass) {
	
	            // reference it here
	            if (!global.dec.$SINGLETONS[providerClass.prototype.constructor.name]) {
	                global.dec.$SINGLETONS[providerClass.prototype.constructor.name] = new providerClass();
	            }
	            return global.dec.$SINGLETONS[providerClass.prototype.constructor.name];
	        }
	    }], [{
	        key: 'getInstance',
	        value: function getInstance(className) {
	            return global.dec.$SINGLETONS[className];
	        }
	    }]);
	
	    return SingletonDecorator;
	})(_Decorator3.default);
	
	exports.default = SingletonDecorator;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Decorator2 = __webpack_require__(7);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Global @DOMBind decorator implementation.
	 * Selects a DOM element using jQuery (if available) or document.querySelector.
	 */
	
	var DOMBindDecorator = (function (_Decorator) {
	    _inherits(DOMBindDecorator, _Decorator);
	
	    function DOMBindDecorator() {
	        _classCallCheck(this, DOMBindDecorator);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DOMBindDecorator).call(this));
	
	        _this.selector = null;
	        return _this;
	    }
	
	    _createClass(DOMBindDecorator, [{
	        key: 'newInstance',
	        value: function newInstance() {
	            return new DOMBindDecorator();
	        }
	    }, {
	        key: 'applyConfig',
	        value: function applyConfig(args) {
	            this.selector = args[0];
	        }
	    }, {
	        key: 'onDecorate',
	        value: function onDecorate(classPrototype, propertyName, descriptor) {
	
	            var me = this;
	
	            // allow future re-visiting
	            descriptor.writable = true;
	
	            // set initial prototype value
	            descriptor.initializer = function () {
	
	                var value = DOMBindDecorator.query(me.selector) || {};
	
	                // for future re-visiting
	                value.DOMBind = descriptor.initializer;
	
	                return value;
	            };
	            return descriptor;
	        }
	    }], [{
	        key: 'query',
	        value: function query(selector) {
	
	            if ($ || jQuery) {
	
	                return ($ || jQuery)(selector)[0];
	            } else if (document.querySelector) {
	
	                return document.querySelector(selector);
	            } else {
	
	                throw new Error('No native browser support for selecting DOM elements available. Please include jQuery.');
	            }
	        }
	    }]);
	
	    return DOMBindDecorator;
	})(_Decorator3.default);
	
	exports.default = DOMBindDecorator;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Decorator2 = __webpack_require__(7);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @Inject(valueOrClassName:Object[, instantiate])
	 * Assigns any object to the decorated class property.
	 * May use/create a singleton instance of a class.
	 */
	
	var InjectDecorator = (function (_Decorator) {
	    _inherits(InjectDecorator, _Decorator);
	
	    function InjectDecorator() {
	        _classCallCheck(this, InjectDecorator);
	
	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(InjectDecorator).call(this));
	
	        _this2.value = null;
	        _this2.instantiate = true;
	        return _this2;
	    }
	
	    _createClass(InjectDecorator, [{
	        key: 'newInstance',
	        value: function newInstance() {
	            return new InjectDecorator();
	        }
	    }, {
	        key: 'applyConfig',
	        value: function applyConfig(args) {
	
	            this.value = args[0];
	
	            if (args[1] && typeof args[1] == 'boolean') {
	                this.instantiate = args[1];
	            }
	        }
	    }, {
	        key: 'onDecorate',
	        value: function onDecorate(classInstance, propertyName, descriptor) {
	            var _this = this;
	
	            descriptor.initializer = function () {
	
	                // inject class reference
	                var value = _this.value;
	
	                // inject instance if existing (@Singleton decorated classes)
	                if (global.dec.$SINGLETONS[value]) {
	                    value = global.dec.$SINGLETONS[value];
	                }
	
	                // create an instance on the fly
	                if (_this.instantiate && typeof value == 'function') {
	                    value = new value();
	                }
	                return value;
	            };
	            return descriptor;
	        }
	    }]);
	
	    return InjectDecorator;
	})(_Decorator3.default);
	
	exports.default = InjectDecorator;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Decorator2 = __webpack_require__(7);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @Route(route:String [,authCb:Function])
	 *
	 * Watches for module classes to be started and hooks it's
	 * routing logic in, as soon as it detects a matching module class and route.
	 */
	
	var RouteDecorator = (function (_Decorator) {
	    _inherits(RouteDecorator, _Decorator);
	
	    function RouteDecorator() {
	        _classCallCheck(this, RouteDecorator);
	
	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(RouteDecorator).call(this));
	
	        _this2.route = null;
	        _this2.authCb = null;
	        return _this2;
	    }
	
	    _createClass(RouteDecorator, [{
	        key: 'newInstance',
	        value: function newInstance() {
	            return new RouteDecorator();
	        }
	    }, {
	        key: 'applyConfig',
	        value: function applyConfig(args) {
	            this.route = args[0];
	
	            if (args[1] && typeof args[1] == 'function') {
	                this.authCb = args[1];
	            }
	        }
	    }, {
	        key: 'onDecorate',
	        value: function onDecorate(targetClass, methodName, descriptor) {
	            var _this = this;
	
	            // add the route to the router
	            dec.Router.addRoute(this.route, function () {});
	
	            // route matching after a module has been started
	            dec.EventBus.on('moduleStarted', function (moduleInstance) {
	
	                // found the right instance
	                if (targetClass.constructor.name === moduleInstance.constructor.name) {
	
	                    // try to match route
	                    var routeMatch = dec.Router.match(document.location.pathname);
	
	                    if (routeMatch && _this.authCb) {
	
	                        _this.authCb(function () {
	
	                            // descriptor value == the method annotated
	                            descriptor.value.call(moduleInstance, routeMatch);
	                        });
	                    } else if (routeMatch) {
	
	                        // TODO: Check if it's working
	
	                        // descriptor value == the method annotated
	                        descriptor.value.call(moduleInstance, routeMatch);
	                    }
	                }
	            });
	
	            return descriptor;
	        }
	    }]);
	
	    return RouteDecorator;
	})(_Decorator3.default);
	
	exports.default = RouteDecorator;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Decorator2 = __webpack_require__(7);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @Translate(translations:Object [, locale:String=en_GB])
	 * Injects an i18n object into the target class prototype.
	 */
	
	var TranslateDecorator = (function (_Decorator) {
	    _inherits(TranslateDecorator, _Decorator);
	
	    function TranslateDecorator() {
	        _classCallCheck(this, TranslateDecorator);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TranslateDecorator).call(this));
	
	        _this.translations = null;
	        _this.locale = "en_GB";
	        return _this;
	    }
	
	    _createClass(TranslateDecorator, [{
	        key: "newInstance",
	        value: function newInstance() {
	            return new TranslateDecorator();
	        }
	    }, {
	        key: "applyConfig",
	        value: function applyConfig(args) {
	
	            this.translations = args[0];
	
	            if (args[1]) {
	                this.locale = args[1];
	            }
	        }
	    }, {
	        key: "onDecorate",
	        value: function onDecorate(targetClass) {
	
	            // assign translation object
	            targetClass.prototype.i18n = this.translations[this.locale];
	
	            return targetClass;
	        }
	    }]);
	
	    return TranslateDecorator;
	})(_Decorator3.default);
	
	exports.default = TranslateDecorator;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Decorator2 = __webpack_require__(7);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var PromisedDecorator = (function (_Decorator) {
	    _inherits(PromisedDecorator, _Decorator);
	
	    function PromisedDecorator() {
	        _classCallCheck(this, PromisedDecorator);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PromisedDecorator).apply(this, arguments));
	    }
	
	    _createClass(PromisedDecorator, [{
	        key: 'newInstance',
	        value: function newInstance() {
	            return new PromisedDecorator();
	        }
	    }, {
	        key: 'onDecorate',
	        value: function onDecorate(targetClass, methodName, descriptor) {
	
	            var targetMethod = descriptor.value;
	
	            descriptor.value = function (config) {
	
	                return new Promise(function (resolve, reject) {
	                    targetMethod(config, resolve, reject);
	                });
	            };
	            return descriptor;
	        }
	    }]);
	
	    return PromisedDecorator;
	})(_Decorator3.default);
	
	exports.default = PromisedDecorator;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Log = (function () {
	    function Log() {
	        _classCallCheck(this, Log);
	    }
	
	    _createClass(Log, null, [{
	        key: "log",
	
	        // stupid but effective when .apply() is not supported on console.log (like in chrome ;)
	        value: function log(a1, a2, a3, a4, a5) {
	
	            if (console.log) {
	
	                if (a1 && a2 && a3 && a4 && a5) {
	                    console.log(a1, a2, a3, a4, a5);
	                    return;
	                }
	
	                if (a1 && a2 && a3 && a4) {
	                    console.log(a1, a2, a3, a4);
	                    return;
	                }
	
	                if (a1 && a2 && a3) {
	                    console.log(a1, a2, a3);
	                    return;
	                }
	
	                if (a1 && a2) {
	                    console.log(a1, a2);
	                    return;
	                }
	
	                if (a1) {
	                    console.log(a1);
	                }
	            }
	        }
	    }]);
	
	    return Log;
	})();
	
	exports.default = Log;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map