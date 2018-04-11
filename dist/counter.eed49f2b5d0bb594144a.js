webpackJsonp([3],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _counter = __webpack_require__(53);

var _reactRedux = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_Component) {
    _inherits(Counter, _Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    '\u5F53\u524D\u8BA1\u6570\u4E3A',
                    this.props.counter.count
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.increment();
                        } },
                    '\u81EA\u589E'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.decrement();
                        } },
                    '\u81EA\u51CF'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.reset();
                        } },
                    '\u91CD\u7F6E'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Counter;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        counter: state.counter
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        increment: function increment() {
            dispatch((0, _counter.increment)());
        },
        decrement: function decrement() {
            dispatch((0, _counter.decrement)());
        },
        reset: function reset() {
            dispatch((0, _counter.reset)());
        }
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Counter, 'Counter', 'E:/study_react/react-family/src/pages/Counter/Counter.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'E:/study_react/react-family/src/pages/Counter/Counter.js');
    reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'E:/study_react/react-family/src/pages/Counter/Counter.js');
    reactHotLoader.register(_default, 'default', 'E:/study_react/react-family/src/pages/Counter/Counter.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ })

});
//# sourceMappingURL=counter.eed49f2b5d0bb594144a.js.map