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
				var store = this.context.store;
	
				var cardlist = store.getState().genreState;
			}
		}, {
			key: "render",
			value: function render() {
				store.subscribe(function () {
					console.log(cardlist);
				});
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkV3JhcHBlci5qcz8wYzk0Il0sIm5hbWVzIjpbImdlbmVyYXRlTGF5b3V0IiwiYmluZCIsInN0b3JlIiwiY29udGV4dCIsImNhcmRsaXN0IiwiZ2V0U3RhdGUiLCJnZW5yZVN0YXRlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsIkNhcmRXcmFwcGVyIiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx5QkFBYTtBQUFBOztBQUFBOztBQUVaLFNBQUtBLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFGWTtBQUdaOzs7O29DQUdlO0FBQUEsUUFDUkMsS0FEUSxHQUNDLEtBQUtDLE9BRE4sQ0FDUkQsS0FEUTs7QUFFZixRQUFNRSxXQUFXRixNQUFNRyxRQUFOLEdBQWlCQyxVQUFsQztBQUNBOzs7NEJBRU87QUFDUEosVUFBTUssU0FBTixDQUFnQixZQUFJO0FBQ25CQyxhQUFRQyxHQUFSLENBQVlMLFFBQVo7QUFDQSxLQUZEOztBQUlBLFdBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxhQUFmO0FBQ0UsVUFBS0osY0FBTDtBQURGLEtBREQ7QUFLQTs7OztHQXRCd0MsZ0JBQU1VLFM7Ozs7O0FBMkIvQ0MsYUFBWUMsWUFBWixHQUEyQjtBQUN6QlYsU0FBTyxnQkFBTVcsU0FBTixDQUFnQkM7QUFERSxFQUEzQixDIiwiZmlsZSI6IjAuZTE1ZWU1ZDNlNzQ2ZjQzNjQyNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuY29uc3RydWN0b3IoKXtcblx0c3VwZXIoKVxuXHR0aGlzLmdlbmVyYXRlTGF5b3V0ID0gdGhpcy5nZW5lcmF0ZUxheW91dC5iaW5kKHRoaXMpXHRcbn1cblxuXG5nZW5lcmF0ZUxheW91dCgpe1xuXHRjb25zdCB7c3RvcmV9ID0gdGhpcy5jb250ZXh0XG5cdGNvbnN0IGNhcmRsaXN0ID0gc3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlXHRcdFxufVxuXG5yZW5kZXIoKXtcblx0c3RvcmUuc3Vic2NyaWJlKCgpPT57XG5cdFx0Y29uc29sZS5sb2coY2FyZGxpc3QpXHRcblx0fSlcblxuXHRyZXR1cm4oXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkV3JhcHBlclwiPlxuXHRcdFx0e3RoaXMuZ2VuZXJhdGVMYXlvdXQoKX1cdFxuXHRcdDwvZGl2PlxuXHQpO1x0XG59XG5cbn1cblxuXG5DYXJkV3JhcHBlci5jb250ZXh0VHlwZXMgPSB7XG4gIHN0b3JlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhcmRXcmFwcGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==