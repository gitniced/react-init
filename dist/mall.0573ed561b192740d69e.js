webpackJsonp([0],{R2je:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__("GiK3"),_react2=_interopRequireDefault(_react),_Counter=__webpack_require__("m86z"),_Counter2=_interopRequireDefault(_Counter),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__("rGbO").enterModule,enterModule&&enterModule(module);var Mall=function(_Component){function Mall(){return _classCallCheck(this,Mall),_possibleConstructorReturn(this,(Mall.__proto__||Object.getPrototypeOf(Mall)).apply(this,arguments))}return _inherits(Mall,_Component),_createClass(Mall,[{key:"render",value:function(){return _react2.default.createElement("div",null,"this is mall~",_react2.default.createElement(_Counter2.default,null))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Mall}(_react.Component),_default=Mall,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__("rGbO").default,leaveModule=__webpack_require__("rGbO").leaveModule,reactHotLoader&&(reactHotLoader.register(Mall,"Mall","F:/nandi/react/first-react/src/pages/Mall/Mall.js"),reactHotLoader.register(_default,"default","F:/nandi/react/first-react/src/pages/Mall/Mall.js"),leaveModule(module))}).call(exports,__webpack_require__("3IRH")(module))},m86z:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__("GiK3"),_react2=_interopRequireDefault(_react),_counter=__webpack_require__("/iH1"),_reactRedux=__webpack_require__("nliw"),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__("rGbO").enterModule,enterModule&&enterModule(module);var Counter=function(_Component){function Counter(){return _classCallCheck(this,Counter),_possibleConstructorReturn(this,(Counter.__proto__||Object.getPrototypeOf(Counter)).apply(this,arguments))}return _inherits(Counter,_Component),_createClass(Counter,[{key:"render",value:function(){var e=this;return _react2.default.createElement("div",null,_react2.default.createElement("div",null,"当前计数为",this.props.counter.count),_react2.default.createElement("button",{onClick:function(){return e.props.increment()}},"自增"),_react2.default.createElement("button",{onClick:function(){return e.props.decrement()}},"自减"),_react2.default.createElement("button",{onClick:function(){return e.props.reset()}},"重置"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Counter}(_react.Component),mapStateToProps=function(e){return{counter:e.counter}},mapDispatchToProps=function(e){return{increment:function(){e((0,_counter.increment)())},decrement:function(){e((0,_counter.decrement)())},reset:function(){e((0,_counter.reset)())}}},_default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Counter),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__("rGbO").default,leaveModule=__webpack_require__("rGbO").leaveModule,reactHotLoader&&(reactHotLoader.register(Counter,"Counter","F:/nandi/react/first-react/src/component/Counter/Counter.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","F:/nandi/react/first-react/src/component/Counter/Counter.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","F:/nandi/react/first-react/src/component/Counter/Counter.js"),reactHotLoader.register(_default,"default","F:/nandi/react/first-react/src/component/Counter/Counter.js"),leaveModule(module))}).call(exports,__webpack_require__("3IRH")(module))}});