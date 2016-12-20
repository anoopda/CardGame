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
					for (var x = 0; x < cardlist.length; x++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkV3JhcHBlci5qcz8wYzk0Il0sIm5hbWVzIjpbImdlbmVyYXRlTGF5b3V0IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsImNvbnRleHQiLCJjYXJkbGlzdCIsImdldFN0YXRlIiwiZ2VucmVTdGF0ZSIsImN1cnJlbnRkYXRhIiwic3Vic2NyaWJlIiwieCIsImxlbmd0aCIsIkNvbXBvbmVudCIsIkNhcmRXcmFwcGVyIiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSx5QkFBYTtBQUFBOztBQUFBOztBQUVaLFNBQUtBLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7O0FBRlk7QUFJWjs7OztvQ0FHZTtBQUNmQyxZQUFRQyxHQUFSLENBQVksUUFBWjtBQURlLFFBRVJDLEtBRlEsR0FFQyxLQUFLQyxPQUZOLENBRVJELEtBRlE7O0FBR2YsUUFBTUUsV0FBV0YsTUFBTUcsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJDLFdBQTdDO0FBQ0FMLFVBQU1NLFNBQU4sQ0FBZ0IsWUFBSTtBQUNuQlIsYUFBUUMsR0FBUixDQUFZQyxNQUFNRyxRQUFOLEdBQWlCQyxVQUFqQixDQUE0QkMsV0FBeEM7QUFDRCxTQUFJRSxDQUFKO0FBQ0MsVUFBSSxJQUFJQSxJQUFFLENBQVYsRUFBWUEsSUFBRUwsU0FBU00sTUFBdkIsRUFBK0JELEdBQS9CLEVBQW1DO0FBQ2xDVCxjQUFRQyxHQUFSLENBQVksYUFBV1EsQ0FBWCxHQUFhLEVBQWIsR0FBZ0JMLFNBQVNLLENBQVQsQ0FBNUI7QUFDQTtBQUNELEtBTkQ7QUFPQTs7OzRCQUdPOztBQUlQLFdBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxhQUFmO0FBRUUsVUFBS1gsY0FBTDtBQUZGLEtBREQ7QUFPQTs7OztHQWxDd0MsZ0JBQU1hLFM7Ozs7O0FBdUMvQ0MsYUFBWUMsWUFBWixHQUEyQjtBQUN6QlgsU0FBTyxnQkFBTVksU0FBTixDQUFnQkM7QUFERSxFQUEzQixDIiwiZmlsZSI6IjAuZWRlMGE3NmE5MWU1NGEwYTllMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKCl7XG5cdHN1cGVyKClcblx0dGhpcy5nZW5lcmF0ZUxheW91dCA9IHRoaXMuZ2VuZXJhdGVMYXlvdXQuYmluZCh0aGlzKVxuXHRcbn1cblxuXG5nZW5lcmF0ZUxheW91dCgpe1xuXHRjb25zb2xlLmxvZyhcImNhYWRkYVwiKTtcblx0Y29uc3Qge3N0b3JlfSA9IHRoaXMuY29udGV4dFxuXHRjb25zdCBjYXJkbGlzdCA9IHN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5jdXJyZW50ZGF0YVxuXHRzdG9yZS5zdWJzY3JpYmUoKCk9Pntcblx0XHRjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuY3VycmVudGRhdGEpXG5cdHZhciB4O1x0XG5cdFx0Zm9yKHZhciB4PTA7eDxjYXJkbGlzdC5sZW5ndGg7IHgrKyl7XG5cdFx0XHRjb25zb2xlLmxvZyhcImNhcmRsaXN0XCIreCtcIlwiK2NhcmRsaXN0W3hdKVxuXHRcdH1cblx0fSlcdFxufVxuXG5cbnJlbmRlcigpe1xuXG5cblx0XG5cdHJldHVybihcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRXcmFwcGVyXCI+XG5cblx0XHRcdHt0aGlzLmdlbmVyYXRlTGF5b3V0KCl9XHRcblxuXHRcdDwvZGl2PlxuXHQpO1x0XG59XG5cbn1cblxuXG5DYXJkV3JhcHBlci5jb250ZXh0VHlwZXMgPSB7XG4gIHN0b3JlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhcmRXcmFwcGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==