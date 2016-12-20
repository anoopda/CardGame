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
				store.subscribe(function () {
					console.log(store.getState().genreState.currentdata);
					var x;
					for (x in cardlist) {
						console.log("cardlist" + x + "" + cardlist[x]);
					}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkV3JhcHBlci5qcz8wYzk0Il0sIm5hbWVzIjpbImdlbmVyYXRlTGF5b3V0IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsImNvbnRleHQiLCJjYXJkbGlzdCIsImdldFN0YXRlIiwiZ2VucmVTdGF0ZSIsImN1cnJlbnRkYXRhIiwic3Vic2NyaWJlIiwieCIsIkNvbXBvbmVudCIsIkNhcmRXcmFwcGVyIiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSx5QkFBYTtBQUFBOztBQUFBOztBQUVaLFNBQUtBLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7O0FBRlk7QUFJWjs7OztvQ0FHZTtBQUNmQyxZQUFRQyxHQUFSLENBQVksUUFBWjtBQURlLFFBRVJDLEtBRlEsR0FFQyxLQUFLQyxPQUZOLENBRVJELEtBRlE7O0FBR2YsUUFBTUUsV0FBV0YsTUFBTUcsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJDLFdBQTdDO0FBQ0FMLFVBQU1NLFNBQU4sQ0FBZ0IsWUFBSTtBQUNuQlIsYUFBUUMsR0FBUixDQUFZQyxNQUFNRyxRQUFOLEdBQWlCQyxVQUFqQixDQUE0QkMsV0FBeEM7QUFDRCxTQUFJRSxDQUFKO0FBQ0MsVUFBSUEsQ0FBSixJQUFTTCxRQUFULEVBQWtCO0FBQ2pCSixjQUFRQyxHQUFSLENBQVksYUFBV1EsQ0FBWCxHQUFhLEVBQWIsR0FBZ0JMLFNBQVNLLENBQVQsQ0FBNUI7QUFDQTtBQUNELEtBTkQ7QUFPQTs7OzRCQUdPOztBQUlQLFdBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxhQUFmO0FBRUUsVUFBS1gsY0FBTDtBQUZGLEtBREQ7QUFPQTs7OztHQWxDd0MsZ0JBQU1ZLFM7Ozs7O0FBdUMvQ0MsYUFBWUMsWUFBWixHQUEyQjtBQUN6QlYsU0FBTyxnQkFBTVcsU0FBTixDQUFnQkM7QUFERSxFQUEzQixDIiwiZmlsZSI6IjAuNjQwYTU1YjgwMzhlNWNlYmU4MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKCl7XG5cdHN1cGVyKClcblx0dGhpcy5nZW5lcmF0ZUxheW91dCA9IHRoaXMuZ2VuZXJhdGVMYXlvdXQuYmluZCh0aGlzKVxuXHRcbn1cblxuXG5nZW5lcmF0ZUxheW91dCgpe1xuXHRjb25zb2xlLmxvZyhcImNhYWRkYVwiKTtcblx0Y29uc3Qge3N0b3JlfSA9IHRoaXMuY29udGV4dFxuXHRjb25zdCBjYXJkbGlzdCA9IHN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5jdXJyZW50ZGF0YVxuXHRzdG9yZS5zdWJzY3JpYmUoKCk9Pntcblx0XHRjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuY3VycmVudGRhdGEpXG5cdHZhciB4O1x0XG5cdFx0Zm9yKHggaW4gY2FyZGxpc3Qpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJjYXJkbGlzdFwiK3grXCJcIitjYXJkbGlzdFt4XSlcblx0XHR9XG5cdH0pXHRcbn1cblxuXG5yZW5kZXIoKXtcblxuXG5cdFxuXHRyZXR1cm4oXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkV3JhcHBlclwiPlxuXG5cdFx0XHR7dGhpcy5nZW5lcmF0ZUxheW91dCgpfVx0XG5cblx0XHQ8L2Rpdj5cblx0KTtcdFxufVxuXG59XG5cblxuQ2FyZFdyYXBwZXIuY29udGV4dFR5cGVzID0ge1xuICBzdG9yZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYXJkV3JhcHBlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=