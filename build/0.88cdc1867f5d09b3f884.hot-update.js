webpackHotUpdate(0,{

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _index = __webpack_require__(53);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(43);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(17);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(44);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		CardWrapper: {
			displayName: "CardWrapper"
		}
	};
	
	var _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: "/home/anoop/Documents/Desktop/Assignments/CARD_GAME/src/components/cardWrapper.js",
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: "/home/anoop/Documents/Desktop/Assignments/CARD_GAME/src/components/cardWrapper.js",
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformHmrLibIndexJs2(_homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var CardWrapper = _wrapComponent("CardWrapper")(function (_React$Component) {
		_inherits(CardWrapper, _React$Component);
	
		function CardWrapper() {
			_classCallCheck(this, CardWrapper);
	
			var _this = _possibleConstructorReturn(this, (CardWrapper.__proto__ || Object.getPrototypeOf(CardWrapper)).call(this));
	
			_this.generateLayout = _this.generateLayout.bind(_this);
	
			return _this;
		}
	
		_createClass(CardWrapper, [{
			key: "generateLayout",
			value: function generateLayout() {
				console.log("caadda");
				var store = this.context.store;
	
				store.subscribe(function () {
					console.log(store.getState().genreState);
				});
			}
		}, {
			key: "render",
			value: function render() {
	
				return _react3.default.createElement(
					"div",
					{ className: "cardWrapper" },
					this.generateLayout()
				);
			}
		}]);
	
		return CardWrapper;
	}(_react3.default.Component));
	
	exports.default = CardWrapper;
	
	
	CardWrapper.contextTypes = {
		store: _react3.default.PropTypes.object
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkV3JhcHBlci5qcz8wYzk0Il0sIm5hbWVzIjpbImdlbmVyYXRlTGF5b3V0IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsImNvbnRleHQiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsImdlbnJlU3RhdGUiLCJDb21wb25lbnQiLCJDYXJkV3JhcHBlciIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EseUJBQWE7QUFBQTs7QUFBQTs7QUFFWixTQUFLQSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCOztBQUZZO0FBSVo7Ozs7b0NBR2U7QUFDZkMsWUFBUUMsR0FBUixDQUFZLFFBQVo7QUFEZSxRQUVSQyxLQUZRLEdBRUMsS0FBS0MsT0FGTixDQUVSRCxLQUZROztBQUdmQSxVQUFNRSxTQUFOLENBQWdCLFlBQUk7QUFDbkJKLGFBQVFDLEdBQVIsQ0FBWUMsTUFBTUcsUUFBTixHQUFpQkMsVUFBN0I7QUFDQSxLQUZEO0FBSUE7Ozs0QkFHTzs7QUFJUCxXQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsYUFBZjtBQUVFLFVBQUtSLGNBQUw7QUFGRixLQUREO0FBT0E7Ozs7R0E5QndDLGdCQUFNUyxTOzs7OztBQW1DL0NDLGFBQVlDLFlBQVosR0FBMkI7QUFDekJQLFNBQU8sZ0JBQU1RLFNBQU4sQ0FBZ0JDO0FBREUsRUFBM0IsQyIsImZpbGUiOiIwLjg4Y2RjMTg2N2Y1ZDA5YjNmODg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcigpe1xuXHRzdXBlcigpXG5cdHRoaXMuZ2VuZXJhdGVMYXlvdXQgPSB0aGlzLmdlbmVyYXRlTGF5b3V0LmJpbmQodGhpcylcblx0XG59XG5cblxuZ2VuZXJhdGVMYXlvdXQoKXtcblx0Y29uc29sZS5sb2coXCJjYWFkZGFcIik7XG5cdGNvbnN0IHtzdG9yZX0gPSB0aGlzLmNvbnRleHRcblx0c3RvcmUuc3Vic2NyaWJlKCgpPT57XG5cdFx0Y29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlKVxuXHR9KVxuXHRcbn1cblxuXG5yZW5kZXIoKXtcblxuXG5cdFxuXHRyZXR1cm4oXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkV3JhcHBlclwiPlxuXG5cdFx0XHR7dGhpcy5nZW5lcmF0ZUxheW91dCgpfVx0XG5cblx0XHQ8L2Rpdj5cblx0KTtcdFxufVxuXG59XG5cblxuQ2FyZFdyYXBwZXIuY29udGV4dFR5cGVzID0ge1xuICBzdG9yZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYXJkV3JhcHBlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=