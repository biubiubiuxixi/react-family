webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(28);
} else {
  module.exports = require('./dist/react-hot-loader.development.js');
}


/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(14);

var _counter = __webpack_require__(101);

var _counter2 = _interopRequireDefault(_counter);

var _userInfo = __webpack_require__(102);

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _default = (0, _redux.combineReducers)({
    counter: _counter2.default,
    userInfo: _userInfo2.default
});

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'E:/study_react/react-family/src/redux/reducers.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reducer;

var _counter = __webpack_require__(53);

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

/* 初始化state */
var initState = {
    count: 0
};

/* reducer */
function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case _counter.INCREMENT:
            return {
                count: state.count + 1
            };
        case _counter.DECREMENT:
            return {
                count: state.count - 1
            };
        case _counter.RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
};
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initState, 'initState', 'E:/study_react/react-family/src/redux/reducers/counter.js');
    reactHotLoader.register(reducer, 'reducer', 'E:/study_react/react-family/src/redux/reducers/counter.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _userInfo = __webpack_require__(54);

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case _userInfo.GET_USER_INFO_REQUEST:
            return _extends({}, state, {
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            });
        case _userInfo.GET_USER_INFO_SUCCESS:
            return _extends({}, state, {
                isLoading: false,
                userInfo: action.userInfo,
                errorMsg: ''
            });
        case _userInfo.GET_USER_INFO_FAIL:
            return _extends({}, state, {
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误'
            });
        default:
            return state;
    }
};
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initState, 'initState', 'E:/study_react/react-family/src/redux/reducers/userInfo.js');
    reactHotLoader.register(reducer, 'reducer', 'E:/study_react/react-family/src/redux/reducers/userInfo.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(45);

var _Bundle = __webpack_require__(129);

var _Bundle2 = _interopRequireDefault(_Bundle);

var _Home = __webpack_require__(130);

var _Home2 = _interopRequireDefault(_Home);

var _Page = __webpack_require__(131);

var _Page2 = _interopRequireDefault(_Page);

var _Counter = __webpack_require__(132);

var _Counter2 = _interopRequireDefault(_Counter);

var _UserInfo = __webpack_require__(133);

var _UserInfo2 = _interopRequireDefault(_UserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var Loading = function Loading() {
    return _react2.default.createElement(
        'div',
        null,
        'Loading......'
    );
};

var createComponent = function createComponent(component) {
    return function (props) {
        return _react2.default.createElement(
            _Bundle2.default,
            { load: component },
            function (Component) {
                return Component ? _react2.default.createElement(Component, props) : _react2.default.createElement(Loading, null);
            }
        );
    };
};

var getRouter = function getRouter() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        '\u9996\u9875'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/page1' },
                        'Page1'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/counter' },
                        'Counter'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/userInfo' },
                        '\u7528\u6237\u4FE1\u606F'
                    )
                )
            ),
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: createComponent(_Home2.default) }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/page1', component: createComponent(_Page2.default) }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/counter', component: createComponent(_Counter2.default) }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/userInfo', component: createComponent(_UserInfo2.default) })
            )
        )
    );
};

var _default = getRouter;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Loading, 'Loading', 'E:/study_react/react-family/src/router/router.js');
    reactHotLoader.register(createComponent, 'createComponent', 'E:/study_react/react-family/src/router/router.js');
    reactHotLoader.register(getRouter, 'getRouter', 'E:/study_react/react-family/src/router/router.js');
    reactHotLoader.register(_default, 'default', 'E:/study_react/react-family/src/router/router.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bundle = function (_Component) {
    _inherits(Bundle, _Component);

    function Bundle() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Bundle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bundle.__proto__ || Object.getPrototypeOf(Bundle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Bundle, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.load(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.load !== this.props.load) {
                this.load(nextProps);
            }
        }
    }, {
        key: 'load',
        value: function load(props) {
            var _this2 = this;

            this.setState({
                mod: null
            });
            props.load(function (mod) {
                _this2.setState({
                    // handle both es imports and cjs
                    mod: mod.default ? mod.default : mod
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children(this.state.mod);
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Bundle;
}(_react.Component);

var _default = Bundle;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Bundle, 'Bundle', 'E:/study_react/react-family/src/router/Bundle.js');
    reactHotLoader.register(_default, 'default', 'E:/study_react/react-family/src/router/Bundle.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(135));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(136));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(137));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(138));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(1)),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.increment = increment;
exports.decrement = decrement;
exports.reset = reset;

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

/*action*/

var INCREMENT = exports.INCREMENT = "counter/INCREMENT";
var DECREMENT = exports.DECREMENT = "counter/DECREMENT";
var RESET = exports.RESET = "counter/RESET";

function increment() {
    return { type: INCREMENT };
}

function decrement() {
    return { type: DECREMENT };
}

function reset() {
    return { type: RESET };
}
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(INCREMENT, "INCREMENT", "E:/study_react/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(DECREMENT, "DECREMENT", "E:/study_react/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(RESET, "RESET", "E:/study_react/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(increment, "increment", "E:/study_react/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(decrement, "decrement", "E:/study_react/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(reset, "reset", "E:/study_react/react-family/src/redux/actions/counter.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserInfo = getUserInfo;

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var GET_USER_INFO_REQUEST = exports.GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
var GET_USER_INFO_SUCCESS = exports.GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
var GET_USER_INFO_FAIL = exports.GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    };
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    };
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    };
}

function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());
        return fetch('http://localhost:1267/api/user.json').then(function (response) {
            return response.json();
        }).then(function (json) {
            dispatch(getUserInfoSuccess(json));
        }).catch(function () {
            dispatch(getUserInfoFail());
        });
    };
}
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(GET_USER_INFO_REQUEST, "GET_USER_INFO_REQUEST", "E:/study_react/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(GET_USER_INFO_SUCCESS, "GET_USER_INFO_SUCCESS", "E:/study_react/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(GET_USER_INFO_FAIL, "GET_USER_INFO_FAIL", "E:/study_react/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(getUserInfoRequest, "getUserInfoRequest", "E:/study_react/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(getUserInfoSuccess, "getUserInfoSuccess", "E:/study_react/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(getUserInfoFail, "getUserInfoFail", "E:/study_react/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(getUserInfo, "getUserInfo", "E:/study_react/react-family/src/redux/actions/userInfo.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
module.exports = __webpack_require__(66);


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(28);
} else {
  module.exports = __webpack_require__(59);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(1);
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(60));
var levenshtein = _interopDefault(__webpack_require__(61));
var PropTypes = _interopDefault(__webpack_require__(4));
var hoistNonReactStatic = _interopDefault(__webpack_require__(18));

/* eslint-disable no-underscore-dangle */

var isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};

var getComponentDisplayName = function getComponentDisplayName(type) {
  return type.displayName || type.name || 'Component';
};

var getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return React__default.Fragment && type === React__default.Fragment;
};

var generation = 1;

var increment = function increment() {
  return generation++;
};
var get = function get() {
  return generation;
};

var PREFIX = '__reactstandin__';
var PROXY_KEY = PREFIX + 'key';
var GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = PREFIX + 'cachedResult';
var PROXY_IS_MOUNTED = PREFIX + 'isMounted';

var configuration = {
  logLevel: 'error'
};

/* eslint-disable no-console */

var logger = {
  debug: function debug() {
    if (['debug'].includes(configuration.logLevel)) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].includes(configuration.logLevel)) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].includes(configuration.logLevel)) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].includes(configuration.logLevel)) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint-disable no-eval, func-names */

function getDisplayName(Component) {
  var displayName = Component.displayName || Component.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Unknown';
}

var reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return Component.prototype && (Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render);
}

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }
    return new Component({}, {});
  } catch (e) {
    // some components, like Redux connect could not be created without proper context
  }
  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = function identity(a) {
  return a;
};
var indirectEval = eval;

var doesSupportClasses = function () {
  try {
    indirectEval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = doesSupportClasses && indirectEval('\n(function(InitialParent, postConstructionAction) {\n  return class ProxyComponent extends InitialParent {\n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n');

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }
  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var isReactComponentInstance = function isReactComponentInstance(el) {
  return el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && !el.type && el.render;
};

var proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }
  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);
  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }
  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', PROXY_KEY, UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!shallowEqual(prevDescriptor, savedDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
    }
  });

  // Copy newly defined static methods and properties
  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      safeDefineProperty(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    safeDefineProperty(ProxyComponent, key, nextDescriptor);
  });

  // Remove static methods and properties that are no longer defined
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }
    // Skip statics that exist on the next class
    if (NextComponent.hasOwnProperty(key)) {
      return;
    }
    // Skip non-configurable statics
    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      return;
    }

    safeDefineProperty(ProxyComponent, key, {
      value: undefined
    });
  });

  return savedDescriptors;
}

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};
  try {
    var nextInstance = safeReactConstructor(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      deepPrototypeUpdate(InitialComponent, NextComponent);
    } catch (e) {
      // It was ES6 class
    }

    var proxyInstance = safeReactConstructor(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
    var hasRegenerate = proxyInstance[REGENERATE_METHOD];
    var ownKeys = getOwnKeys(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.startsWith(PREFIX)) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];
      if (prevAttr && nextAttr) {
        if (isNativeFunction(nextAttr) || isNativeFunction(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
          if (isSameArity && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              logger.warn('React Hot Loader:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            logger.warn('React Hot Loader:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }
          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore)) {
          if (!hasRegenerate) {
            if (nextString.indexOf('function') < 0 && nextString.indexOf('=>') < 0) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              logger.warn('React Hot Loader:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    logger.warn('React Hot Loader:', e);
  }
  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
      if (!shallowStringsEqual(d1, d2)) {
        logger.warn('React Hot Loader:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {
    // Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          target[REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this = this; // common babel transpile\n          var _this2 = this; // common babel transpile\n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        logger.warn('React Hot Loader: Failed to regenerate method ', key, ' of class ', target);
        logger.warn('got error', e);
      }
    });

    target[GENERATION] = currentGeneration;
  }
}

var has = Object.prototype.hasOwnProperty;

var proxies = new WeakMap();

var blackListedClassMembers = ['constructor', 'render', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUnmount', 'getInitialState', 'getDefaultProps'];

var defaultRenderOptions = {
  componentWillReceiveProps: identity,
  componentWillRender: identity,
  componentDidRender: function componentDidRender(result) {
    return result;
  }
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return safeDefineProperty(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

var defineClassMembers = function defineClassMembers(Class, methods) {
  return Object.keys(methods).forEach(function (methodName) {
    return defineClassMember(Class, methodName, methods[methodName]);
  });
};

function createClassProxy(InitialComponent, proxyKey, options) {
  var renderOptions = _extends({}, defaultRenderOptions, options);
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var isFunctionalComponent = !isReactClass(InitialComponent);

  var lastInstance = null;

  function postConstructionAction() {
    this[GENERATION] = 0;

    // As long we can't override constructor
    // every class shall evolve from a base class
    inject(this, proxyGeneration, injectedMembers);

    lastInstance = this;
  }

  function proxiedUpdate() {
    if (this) {
      inject(this, proxyGeneration, injectedMembers);
    }
  }

  function lifeCycleWrapperFactory(wrapperName) {
    var sideEffect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

    return function wrappedMethod() {
      proxiedUpdate.call(this);
      sideEffect(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    };
  }

  function methodWrapperFactory(wrapperName, realMethod) {
    return function wrappedMethod() {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return realMethod.apply(this, rest);
    };
  }

  var fakeBasePrototype = function fakeBasePrototype(Base) {
    return Object.getOwnPropertyNames(Base).filter(function (key) {
      return blackListedClassMembers.indexOf(key) === -1;
    }).filter(function (key) {
      var descriptor = Object.getOwnPropertyDescriptor(Base, key);
      return typeof descriptor.value === 'function';
    }).reduce(function (acc, key) {
      acc[key] = methodWrapperFactory(key, Base[key]);
      return acc;
    }, {});
  };

  var componentDidMount = lifeCycleWrapperFactory('componentDidMount', function (target) {
    target[PROXY_IS_MOUNTED] = true;
  });
  var componentWillReceiveProps = lifeCycleWrapperFactory('componentWillReceiveProps', renderOptions.componentWillReceiveProps);
  var componentWillUnmount = lifeCycleWrapperFactory('componentWillUnmount', function (target) {
    target[PROXY_IS_MOUNTED] = false;
  });

  function proxiedRender() {
    proxiedUpdate.call(this);
    renderOptions.componentWillRender(this);

    var result = void 0;

    // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.
    if (has.call(this, CACHED_RESULT)) {
      result = this[CACHED_RESULT];
      delete this[CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      result = CurrentComponent.prototype.render.call(this);
    }

    return renderOptions.componentDidRender(result);
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    defineClassMembers(Proxy, _extends({}, fakeBasePrototype(Base), {
      render: proxiedRender,
      componentDidMount: componentDidMount,
      componentWillReceiveProps: componentWillReceiveProps,
      componentWillUnmount: componentWillUnmount
    }));
  };

  var ProxyFacade = void 0;
  var ProxyComponent = null;

  if (!isFunctionalComponent) {
    ProxyComponent = proxyClassCreator(InitialComponent, postConstructionAction);

    defineProxyMethods(ProxyComponent, InitialComponent.prototype);

    ProxyFacade = ProxyComponent;
  } else {
    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.

    // eslint-disable-next-line func-names
    ProxyFacade = function ProxyFacade(props, context) {
      var result = CurrentComponent(props, context);

      // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.
      if (isReactComponentInstance(result)) {
        ProxyComponent = null;
        return result;
      }

      // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.
      ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);

      defineProxyMethods(ProxyComponent);

      var determinateResult = new ProxyComponent(props, context);

      // Cache the initial render result so we don't call the component function
      // a second time for the initial render.
      determinateResult[CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get() {
    return ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  safeDefineProperty(ProxyFacade, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  safeDefineProperty(ProxyFacade, PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });

  safeDefineProperty(ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return;
    }

    // Prevent proxy cycles
    var existingProxy = proxies.get(NextComponent);
    if (existingProxy) {
      update(existingProxy[UNWRAP_PROXY]());
      return;
    }

    isFunctionalComponent = !isReactClass(NextComponent);
    proxyGeneration++;

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    var displayName = getDisplayName(CurrentComponent);

    safeDefineProperty(ProxyFacade, 'displayName', {
      configurable: true,
      writable: false,
      enumerable: true,
      value: displayName
    });

    if (ProxyComponent) {
      safeDefineProperty(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = transferStaticProps(ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

    if (isFunctionalComponent || !ProxyComponent) {
      // nothing
    } else {
      checkLifeCycleMethods(ProxyComponent, NextComponent);
      Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
      defineProxyMethods(ProxyComponent, NextComponent.prototype);
      if (proxyGeneration > 1) {
        injectedMembers = mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
      }
    }
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  proxies.set(ProxyFacade, proxy);

  safeDefineProperty(proxy, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

var proxiesByID = void 0;
var idsByType = void 0;

var elementCount = 0;
var renderOptions = {};

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};

var getProxyById = function getProxyById(id) {
  return proxiesByID[id];
};
var getProxyByType = function getProxyByType(type) {
  return getProxyById(getIdByType(type));
};

var setStandInOptions = function setStandInOptions(options) {
  renderOptions = options;
};

var updateProxyById = function updateProxyById(id, type) {
  // Remember the ID.
  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = createClassProxy(type, id, renderOptions);
  } else {
    proxiesByID[id].update(type);
  }
  return proxiesByID[id];
};

var createProxyForType = function createProxyForType(type) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type);
};

var resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
};

resetProxies();

/* eslint-disable no-use-before-define */

function resolveType(type) {
  if (!isCompositeComponent(type)) return type;

  var proxy = reactHotLoader.disableProxyCreation ? getProxyByType(type) : createProxyForType(type);

  return proxy ? proxy.get() : type;
}

var reactHotLoader = {
  register: function register(type, uniqueLocalName, fileName) {
    if (isCompositeComponent(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      var id = fileName + '#' + uniqueLocalName;

      if (getProxyById(id)) {
        // component got replaced. Need to reconsile
        increment();
      }

      updateProxyById(id, type);
    }
  },
  reset: function reset() {
    resetProxies();
  },
  patch: function patch(React$$1) {
    if (!React$$1.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React$$1.createElement;
      // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.
      React$$1.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [resolveType(type)].concat(args));
      };
      React$$1.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React$$1.createFactory = function (type) {
        var factory = React$$1.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      React$$1.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React$$1.Children.only;
      // Use the same trick as React.createElement
      React$$1.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, { type: resolveType(children.type) }));
      };
      React$$1.Children.only.isPatchedByReactHotLoader = true;
    }

    reactHotLoader.reset();
  },


  disableProxyCreation: false
};

/* eslint-disable no-underscore-dangle */

function pushStack(stack, node) {
  stack.type = node.type;
  stack.children = [];
  stack.instance = typeof node.type === 'function' ? node.stateNode : stack;
}

function hydrateFiberStack(node, stack) {
  pushStack(stack, node);
  if (node.child) {
    var child = node.child;

    do {
      var childStack = {};
      hydrateFiberStack(child, childStack);
      stack.children.push(childStack);
      child = child.sibling;
    } while (child);
  }
}

/* eslint-disable no-underscore-dangle */

function pushState(stack, type, instance) {
  stack.type = type;
  stack.children = [];
  stack.instance = instance || stack;
}

function hydrateLegacyStack(node, stack) {
  if (node._currentElement) {
    pushState(stack, node._currentElement.type, node._instance || stack);
  }

  if (node._renderedComponent) {
    var childStack = {};
    hydrateLegacyStack(node._renderedComponent, childStack);
    stack.children.push(childStack);
  } else if (node._renderedChildren) {
    Object.keys(node._renderedChildren).forEach(function (key) {
      var childStack = {};
      hydrateLegacyStack(node._renderedChildren[key], childStack);
      stack.children.push(childStack);
    });
  }
}

/* eslint-disable no-underscore-dangle */

function getReactStack(instance) {
  var rootNode = getInternalInstance(instance);
  var stack = {};
  var isFiber = typeof rootNode.tag === 'number';
  if (isFiber) {
    hydrateFiberStack(rootNode, stack);
  } else {
    hydrateLegacyStack(rootNode, stack);
  }
  return stack;
}

// some `empty` names, React can autoset display name to...
var UNDEFINED_NAMES = {
  Unknown: true,
  Component: true
};

var areNamesEqual = function areNamesEqual(a, b) {
  return a === b || UNDEFINED_NAMES[a] && UNDEFINED_NAMES[b];
};
var isReactClass$1 = function isReactClass(fn) {
  return fn && !!fn.render;
};
var isFunctional = function isFunctional(fn) {
  return typeof fn === 'function';
};
var isArray = function isArray(fn) {
  return Array.isArray(fn);
};
var asArray = function asArray(a) {
  return isArray(a) ? a : [a];
};
var getTypeOf = function getTypeOf(type) {
  if (isReactClass$1(type)) return 'ReactComponent';
  if (isFunctional(type)) return 'StatelessFunctional';
  return 'Fragment'; // ?
};

var filterNullArray = function filterNullArray(a) {
  if (!a) return [];
  return a.filter(function (x) {
    return !!x;
  });
};

var unflatten = function unflatten(a) {
  return a.reduce(function (acc, a) {
    if (Array.isArray(a)) {
      acc.push.apply(acc, unflatten(a));
    } else {
      acc.push(a);
    }
    return acc;
  }, []);
};

var getElementType = function getElementType(child) {
  return child.type[UNWRAP_PROXY] ? child.type[UNWRAP_PROXY]() : child.type;
};

var haveTextSimilarity = function haveTextSimilarity(a, b) {
  return (
    // equal or slight changed
    a === b || levenshtein.get(a, b) < a.length * 0.2
  );
};

var equalClasses = function equalClasses(a, b) {
  var prototypeA = a.prototype;
  var prototypeB = Object.getPrototypeOf(b.prototype);

  var hits = 0;
  var misses = 0;
  Object.getOwnPropertyNames(prototypeA).forEach(function (key) {
    if (typeof prototypeA[key] === 'function') {
      if (haveTextSimilarity(String(prototypeA[key]), String(prototypeB[key]))) {
        hits++;
      } else {
        misses++;
        if (key === 'render') {
          misses++;
        }
      }
    }
  });
  // allow to add or remove one function
  return hits > 0 && misses <= 1;
};

var isSwappable = function isSwappable(a, b) {
  // both are registered components
  if (getIdByType(b) && getIdByType(a) === getIdByType(b)) {
    return true;
  }
  if (getTypeOf(a) !== getTypeOf(b)) {
    return false;
  }
  if (isReactClass$1(a.prototype)) {
    return areNamesEqual(getComponentDisplayName(a), getComponentDisplayName(b)) && equalClasses(a, b);
  }
  if (isFunctional(a)) {
    return areNamesEqual(getComponentDisplayName(a), getComponentDisplayName(b)) && haveTextSimilarity(String(a), String(b));
  }
  return false;
};

var render = function render(component) {
  if (!component) {
    return [];
  }
  if (isReactClass$1(component)) {
    return component.render();
  }
  if (isArray(component)) {
    return component.map(render);
  }
  if (component.children) {
    return component.children;
  }

  return [];
};

var NO_CHILDREN = { children: [] };
var mapChildren = function mapChildren(children, instances) {
  return {
    children: children.filter(function (c) {
      return c;
    }).map(function (child, index) {
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object') {
        return child;
      }
      var instanceLine = instances[index] || {};
      var oldChildren = asArray(instanceLine.children || []);

      if (Array.isArray(child)) {
        return _extends({
          type: null
        }, mapChildren(child, oldChildren));
      }

      var newChildren = asArray(child.props && child.props.children || child.children || []);
      var nextChildren = oldChildren.length && mapChildren(newChildren, oldChildren);

      return _extends({}, instanceLine, nextChildren || {}, {
        type: child.type
      });
    })
  };
};

var mergeInject = function mergeInject(a, b, instance) {
  if (a && !Array.isArray(a)) {
    return mergeInject([a], b);
  }
  if (b && !Array.isArray(b)) {
    return mergeInject(a, [b]);
  }

  if (!a || !b) {
    return NO_CHILDREN;
  }
  if (a.length === b.length) {
    return mapChildren(a, b);
  }

  // in some cases (no confidence here) B could contain A except null children
  // in some cases - could not.
  // this depends on React version and the way you build component.

  var nonNullA = filterNullArray(a);
  if (nonNullA.length === b.length) {
    return mapChildren(nonNullA, b);
  }

  var flatA = unflatten(nonNullA);
  var flatB = unflatten(b);
  if (flatA.length === flatB.length) {
    return mapChildren(flatA, flatB);
  }
  if (flatB.length === 0 && flatA.length === 1 && _typeof(flatA[0]) !== 'object') {
    // terminal node
  } else {
    logger.warn('React-hot-loader: unable to merge ', a, 'and children of ', instance);
  }
  return NO_CHILDREN;
};

var transformFlowNode = function transformFlowNode(flow) {
  return flow.reduce(function (acc, node) {
    if (isFragmentNode(node) && node.props && node.props.children) {
      return [].concat(acc, node.props.children);
    }
    return [].concat(acc, [node]);
  }, []);
};

var scheduledUpdates = [];
var scheduledUpdate = 0;

var flushScheduledUpdates = function flushScheduledUpdates() {
  var instances = scheduledUpdates;
  scheduledUpdates = [];
  scheduledUpdate = 0;
  instances.forEach(function (instance) {
    return instance[PROXY_IS_MOUNTED] && updateInstance(instance);
  });
};

var scheduleInstanceUpdate = function scheduleInstanceUpdate(instance) {
  scheduledUpdates.push(instance);
  if (!scheduledUpdate) {
    scheduledUpdate = setTimeout(flushScheduledUpdates);
  }
};

var hotReplacementRender = function hotReplacementRender(instance, stack) {
  var flow = transformFlowNode(filterNullArray(asArray(render(instance))));

  var children = stack.children;


  flow.forEach(function (child, index) {
    var stackChild = children[index];
    var next = function next(instance) {
      // copy over props as long new component may be hidden inside them
      // child does not have all props, as long some of them can be calculated on componentMount.
      var nextProps = _extends({}, instance.props);
      for (var key in child.props) {
        if (child.props[key]) {
          nextProps[key] = child.props[key];
        }
      }
      if (isReactClass$1(instance) && instance.componentWillUpdate) {
        // Force-refresh component (bypass redux renderedComponent)
        instance.componentWillUpdate(nextProps, instance.state);
      }
      instance.props = nextProps;
      hotReplacementRender(instance, stackChild);
    };

    // text node
    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || !stackChild || !stackChild.instance) {
      return;
    }

    if (_typeof(child.type) !== _typeof(stackChild.type)) {
      // Portals could generate undefined !== null
      if (child.type && stackChild.type) {
        logger.warn('React-hot-loader: got ', child.type, 'instead of', stackChild.type);
      }
      return;
    }

    if (typeof child.type !== 'function') {
      next(
      // move types from render to the instances of hydrated tree
      mergeInject(asArray(child.props ? child.props.children : child.children), stackChild.instance.children, stackChild.instance));
    } else {
      // unwrap proxy
      var childType = getElementType(child);
      if (!stackChild.type[PROXY_KEY]) {
        /* eslint-disable no-console */
        logger.error('React-hot-loader: fatal error caused by ', stackChild.type, ' - no instrumentation found. ', 'Please require react-hot-loader before React. More in troubleshooting.');
        throw new Error('React-hot-loader: wrong configuration');
      }

      if (child.type === stackChild.type) {
        next(stackChild.instance);
      } else if (isSwappable(childType, stackChild.type)) {
        // they are both registered, or have equal code/displayname/signature

        // update proxy using internal PROXY_KEY
        updateProxyById(stackChild.type[PROXY_KEY], childType);

        next(stackChild.instance);
      } else {
        logger.warn('React-hot-loader: a ' + getComponentDisplayName(childType) + ' was found where a ' + getComponentDisplayName(stackChild) + ' was expected.\n          ' + childType);
      }

      scheduleInstanceUpdate(stackChild.instance);
    }
  });
};

var hotReplacementRender$1 = (function (instance, stack) {
  try {
    // disable reconciler to prevent upcoming components from proxying.
    reactHotLoader.disableProxyCreation = true;
    hotReplacementRender(instance, stack);
  } catch (e) {
    logger.warn('React-hot-loader: reconcilation failed due to error', e);
  } finally {
    reactHotLoader.disableProxyCreation = false;
  }
});

var reconcileHotReplacement = function reconcileHotReplacement(ReactInstance) {
  return hotReplacementRender$1(ReactInstance, getReactStack(ReactInstance));
};

var RENDERED_GENERATION = 'REACT_HOT_LOADER_RENDERED_GENERATION';

var renderReconciler = function renderReconciler(target, force) {
  // we are not inside parent reconcilation
  var currentGeneration = get();
  var componentGeneration = target[RENDERED_GENERATION];

  target[RENDERED_GENERATION] = currentGeneration;

  if (!reactHotLoader.disableProxyCreation) {
    if ((componentGeneration || force) && componentGeneration !== currentGeneration) {
      reconcileHotReplacement(target);
      return true;
    }
  }
  return false;
};

function asyncReconciledRender(target) {
  renderReconciler(target, false);
}

function syncReconciledRender(target) {
  if (renderReconciler(target, false)) {
    flushScheduledUpdates();
  }
}

var proxyWrapper = function proxyWrapper(element) {
  // post wrap on post render
  if (!element) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(proxyWrapper);
  }
  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);
    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }
  return element;
};

setStandInOptions({
  componentWillReceiveProps: syncReconciledRender,
  componentWillRender: asyncReconciledRender,
  componentDidRender: proxyWrapper
});

var AppContainer = function (_React$Component) {
  inherits(AppContainer, _React$Component);

  function AppContainer(props) {
    classCallCheck(this, AppContainer);

    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      error: null,
      generation: 0
    };
    return _this;
  }

  AppContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    if (this.state.generation !== get()) {
      // Hot reload is happening.

      this.setState({
        error: null,
        generation: get()
      });

      // perform sandboxed render to find similarities between new and old code
      renderReconciler(this, true);
      // it is possible to flush update out of render cycle
      flushScheduledUpdates();
    }
  };

  AppContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(prevProps, prevState) {
    // Don't update the component if the state had an error and still has one.
    // This allows to break an infinite loop of error -> render -> error -> render
    // https://github.com/gaearon/react-hot-loader/issues/696
    if (prevState.error && this.state.error) {
      return false;
    }

    return true;
  };

  AppContainer.prototype.componentDidCatch = function componentDidCatch(error) {
    logger.error(error);
    this.setState({ error: error });
  };

  AppContainer.prototype.render = function render() {
    var error = this.state.error;


    if (this.props.errorReporter && error) {
      return React__default.createElement(this.props.errorReporter, { error: error });
    }

    return React__default.Children.only(this.props.children);
  };

  return AppContainer;
}(React__default.Component);

AppContainer.propTypes = {
  children: function children(props) {
    if (React__default.Children.count(props.children) !== 1) {
      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
    }

    return undefined;
  },

  errorReporter: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

var openedModules = {};

var hotModules = {};

var createHotModule = function createHotModule() {
  return { instances: [], updateTimeout: 0 };
};

var hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }
  return hotModules[moduleId];
};

var isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    openedModules[sourceModule.id] = true;
  } else {
    logger.warn('React-hot-loader: no `module` variable found. Do you shadow system variable?');
  }
};

var leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};

/* eslint-disable camelcase, no-undef */
var requireIndirect =  true ? __webpack_require__ : require;
/* eslint-enable */

var createHoc = function createHoc(SourceComponent, TargetComponent) {
  hoistNonReactStatic(TargetComponent, SourceComponent);
  TargetComponent.displayName = 'HotExported' + getComponentDisplayName(SourceComponent);
  return TargetComponent;
};

var makeHotExport = function makeHotExport(sourceModule) {
  var updateInstances = function updateInstances() {
    var module = hotModule(sourceModule.id);
    clearTimeout(module.updateTimeout);
    module.updateTimeout = setTimeout(function () {
      try {
        requireIndirect(sourceModule.id);
      } catch (e) {
        // just swallow
      }
      module.instances.forEach(function (inst) {
        return inst.forceUpdate();
      });
    });
  };

  if (sourceModule.hot) {
    // Mark as self-accepted for Webpack
    // Update instances for Parcel
    sourceModule.hot.accept(updateInstances);

    // Webpack way
    if (sourceModule.hot.addStatusHandler) {
      if (sourceModule.hot.status() === 'idle') {
        sourceModule.hot.addStatusHandler(function (status) {
          if (status === 'apply') {
            updateInstances();
          }
        });
      }
    }
  }
};

var hot = function hot(sourceModule) {
  if (!sourceModule || !sourceModule.id) {
    // this is fatal
    throw new Error('React-hot-loader: `hot` could not found the `id` property in the `module` you have provided');
  }
  var moduleId = sourceModule.id;
  var module = hotModule(moduleId);
  makeHotExport(sourceModule);

  // TODO: Ensure that all exports from this file are react components.

  return function (WrappedComponent) {
    // register proxy for wrapped component
    reactHotLoader.register(WrappedComponent, getComponentDisplayName(WrappedComponent), 'RHL' + moduleId);

    return createHoc(WrappedComponent, function (_Component) {
      inherits(ExportedComponent, _Component);

      function ExportedComponent() {
        classCallCheck(this, ExportedComponent);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ExportedComponent.prototype.componentWillMount = function componentWillMount() {
        module.instances.push(this);
      };

      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        if (isOpened(sourceModule)) {
          var componentName = getComponentDisplayName(WrappedComponent);
          logger.error('React-hot-loader: Detected AppContainer unmount on module \'' + moduleId + '\' update.\n' + ('Did you use "hot(' + componentName + ')" and "ReactDOM.render()" in the same file?\n') + ('"hot(' + componentName + ')" shall only be used as export.\n') + 'Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).');
        }
        module.instances = module.instances.filter(function (a) {
          return a !== _this2;
        });
      };

      ExportedComponent.prototype.render = function render() {
        return React__default.createElement(
          AppContainer,
          null,
          React__default.createElement(WrappedComponent, this.props)
        );
      };

      return ExportedComponent;
    }(React.Component));
  };
};

var getProxyOrType = function getProxyOrType(type) {
  var proxy = getProxyByType(type);
  return proxy ? proxy.get() : type;
};

var areComponentsEqual = function areComponentsEqual(a, b) {
  return getProxyOrType(a) === getProxyOrType(b);
};

var setConfig = function setConfig(config) {
  return Object.assign(configuration, config);
};

reactHotLoader.patch(React__default);

exports.default = reactHotLoader;
exports.AppContainer = AppContainer;
exports.hot = hot;
exports.enterModule = enter;
exports.leaveModule = leave;
exports.areComponentsEqual = areComponentsEqual;
exports.setConfig = setConfig;


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  'use strict';
  
  var collator;
  try {
    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
  } catch (err){
    console.log("Collator could not be initialized and wouldn't be used");
  }
  // arrays to re-use
  var prevRow = [],
    str2Char = [];
  
  /**
   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
   */
  var Levenshtein = {
    /**
     * Calculate levenshtein distance of the two strings.
     *
     * @param str1 String the first string.
     * @param str2 String the second string.
     * @param [options] Additional options.
     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.
     * @return Integer the levenshtein distance (0 and above).
     */
    get: function(str1, str2, options) {
      var useCollator = (options && collator && options.useCollator);
      
      var str1Len = str1.length,
        str2Len = str2.length;
      
      // base cases
      if (str1Len === 0) return str2Len;
      if (str2Len === 0) return str1Len;

      // two rows
      var curCol, nextCol, i, j, tmp;

      // initialise previous row
      for (i=0; i<str2Len; ++i) {
        prevRow[i] = i;
        str2Char[i] = str2.charCodeAt(i);
      }
      prevRow[str2Len] = str2Len;

      var strCmp;
      if (useCollator) {
        // calculate current row distance from previous row using collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      else {
        // calculate current row distance from previous row without collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = str1.charCodeAt(i) === str2Char[j];

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      return nextCol;
    }

  };

  // amd
  if ("function" !== "undefined" && __webpack_require__(62) !== null && __webpack_require__(63)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Levenshtein;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // commonjs
  else if (typeof module !== "undefined" && module !== null && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = Levenshtein;
  }
  // web worker
  else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
    self.Levenshtein = Levenshtein;
  }
  // browser main thread
  else if (typeof window !== "undefined" && window !== null) {
    window.Levenshtein = Levenshtein;
  }
}());


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(0);

var _reactRedux = __webpack_require__(27);

var _store = __webpack_require__(98);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(103);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var renderWithHotReload = function renderWithHotReload(RootElement) {
    _reactDom2.default.render(_react2.default.createElement(
        _reactHotLoader.AppContainer,
        null,
        _react2.default.createElement(
            _reactRedux.Provider,
            { store: _store2.default },
            RootElement
        )
    ), document.getElementById('app'));
};

// 初始化
renderWithHotReload((0, _router2.default)());

// 热更新
if (false) {
    module.hot.accept('./router/router', function () {
        var getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(renderWithHotReload, 'renderWithHotReload', 'E:/study_react/react-family/src/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(99);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(100);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var _default = store;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, 'store', 'E:/study_react/react-family/src/redux/store.js');
  reactHotLoader.register(_default, 'default', 'E:/study_react/react-family/src/redux/store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ })

},[55]);
//# sourceMappingURL=app.2221898ea7ebd36b7af9.js.map