webpackJsonp([1],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _userInfo = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_Component) {
    _inherits(UserInfo, _Component);

    function UserInfo() {
        _classCallCheck(this, UserInfo);

        return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
    }

    _createClass(UserInfo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$userInfo = this.props.userInfo,
                userInfo = _props$userInfo.userInfo,
                isLoading = _props$userInfo.isLoading,
                errorMsg = _props$userInfo.errorMsg;

            return _react2.default.createElement(
                'div',
                null,
                isLoading ? '请求信息中...' : errorMsg ? errorMsg : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u7528\u6237\u4FE1\u606F\uFF1A'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u7528\u6237\u540D\uFF1A',
                        userInfo.name
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u4ECB\u7ECD\uFF1A ',
                        userInfo.intro
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.getUserInfo();
                        } },
                    '\u8BF7\u6C42\u7528\u6237\u4FE1\u606F'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return UserInfo;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
    return { userInfo: state.userInfo };
}, { getUserInfo: _userInfo.getUserInfo })(UserInfo);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UserInfo, 'UserInfo', 'E:/study_react/react-family/src/pages/UserInfo/UserInfo.js');
    reactHotLoader.register(_default, 'default', 'E:/study_react/react-family/src/pages/UserInfo/UserInfo.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ })

});
//# sourceMappingURL=userInfo.c369d806d47bd1cccb4c.js.map