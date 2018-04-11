webpackJsonp([2],{

/***/ 135:
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

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.handleClick = function () {
            return _this.setState({
                age: _this.state.age + 1
            });
        };

        _this.state = {
            name: '小希希',
            age: 1
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                name = _state.name,
                age = _state.age;

            return _react2.default.createElement(
                'div',
                null,
                '\u8FD9\u662Fhome\u9875\u3002',
                _react2.default.createElement('br', null),
                '\u5927\u5BB6\u597D\u6211\u662F',
                name,
                '\u70B9\u5B83\u52A0\u4E00',
                _react2.default.createElement(
                    'button',
                    { onClick: this.handleClick },
                    '\u6309\u94AE'
                ),
                age,
                _react2.default.createElement('br', null),
                '\u8BF7\u4ED4\u7EC6\u770B\u54E6state\u53EF\u4EE5\u4FDD\u5B58\u4E86\u54E6 \u563F\u563F\u563F',
                _react2.default.createElement('img', { src: './../../images/bg.jpg' })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Home, 'Home', 'E:/study_react/react-family/src/pages/Home/Home.js');
    reactHotLoader.register(_default, 'default', 'E:/study_react/react-family/src/pages/Home/Home.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ })

});
//# sourceMappingURL=home.8082b6bff3d8796d4ac6.js.map