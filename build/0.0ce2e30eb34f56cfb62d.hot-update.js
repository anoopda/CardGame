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
	
				var cardlist = store.getState().genreState.currentdata;
				console.log(cardlist);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkV3JhcHBlci5qcz8wYzk0Il0sIm5hbWVzIjpbImdlbmVyYXRlTGF5b3V0IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsImNvbnRleHQiLCJjYXJkbGlzdCIsImdldFN0YXRlIiwiZ2VucmVTdGF0ZSIsImN1cnJlbnRkYXRhIiwiQ29tcG9uZW50IiwiQ2FyZFdyYXBwZXIiLCJjb250ZXh0VHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLHlCQUFhO0FBQUE7O0FBQUE7O0FBRVosU0FBS0EsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0Qjs7QUFGWTtBQUlaOzs7O29DQUdlO0FBQ2ZDLFlBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBRGUsUUFFUkMsS0FGUSxHQUVDLEtBQUtDLE9BRk4sQ0FFUkQsS0FGUTs7QUFHZixRQUFNRSxXQUFXRixNQUFNRyxRQUFOLEdBQWlCQyxVQUFqQixDQUE0QkMsV0FBN0M7QUFDQVAsWUFBUUMsR0FBUixDQUFZRyxRQUFaO0FBR0E7Ozs0QkFHTzs7QUFJUCxXQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsYUFBZjtBQUVFLFVBQUtOLGNBQUw7QUFGRixLQUREO0FBT0E7Ozs7R0E5QndDLGdCQUFNVSxTOzs7OztBQW1DL0NDLGFBQVlDLFlBQVosR0FBMkI7QUFDekJSLFNBQU8sZ0JBQU1TLFNBQU4sQ0FBZ0JDO0FBREUsRUFBM0IsQyIsImZpbGUiOiIwLjBjZTJlMzBlYjM0ZjU2Y2ZiNjJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcigpe1xuXHRzdXBlcigpXG5cdHRoaXMuZ2VuZXJhdGVMYXlvdXQgPSB0aGlzLmdlbmVyYXRlTGF5b3V0LmJpbmQodGhpcylcblx0XG59XG5cblxuZ2VuZXJhdGVMYXlvdXQoKXtcblx0Y29uc29sZS5sb2coXCJjYWFkZGFcIik7XG5cdGNvbnN0IHtzdG9yZX0gPSB0aGlzLmNvbnRleHRcblx0Y29uc3QgY2FyZGxpc3QgPSBzdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuY3VycmVudGRhdGFcblx0Y29uc29sZS5sb2coY2FyZGxpc3QpO1xuXHRcblx0XG59XG5cblxucmVuZGVyKCl7XG5cblxuXHRcblx0cmV0dXJuKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFdyYXBwZXJcIj5cblxuXHRcdFx0e3RoaXMuZ2VuZXJhdGVMYXlvdXQoKX1cdFxuXG5cdFx0PC9kaXY+XG5cdCk7XHRcbn1cblxufVxuXG5cbkNhcmRXcmFwcGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgc3RvcmU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FyZFdyYXBwZXIuanMiXSwic291cmNlUm9vdCI6IiJ9