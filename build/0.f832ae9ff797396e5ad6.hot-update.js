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
					console.log(store.getState().genreState);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkV3JhcHBlci5qcz8wYzk0Il0sIm5hbWVzIjpbImdlbmVyYXRlTGF5b3V0IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsImNvbnRleHQiLCJjYXJkbGlzdCIsImdldFN0YXRlIiwiZ2VucmVTdGF0ZSIsImN1cnJlbnRkYXRhIiwic3Vic2NyaWJlIiwieCIsImxlbmd0aCIsIkNvbXBvbmVudCIsIkNhcmRXcmFwcGVyIiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSx5QkFBYTtBQUFBOztBQUFBOztBQUVaLFNBQUtBLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7O0FBRlk7QUFJWjs7OztvQ0FHZTtBQUNmQyxZQUFRQyxHQUFSLENBQVksUUFBWjtBQURlLFFBRVJDLEtBRlEsR0FFQyxLQUFLQyxPQUZOLENBRVJELEtBRlE7O0FBR2YsUUFBTUUsV0FBV0YsTUFBTUcsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJDLFdBQTdDO0FBQ0FMLFVBQU1NLFNBQU4sQ0FBZ0IsWUFBSTtBQUNuQlIsYUFBUUMsR0FBUixDQUFZQyxNQUFNRyxRQUFOLEdBQWlCQyxVQUE3QjtBQUNELFNBQUlHLENBQUo7QUFDQyxVQUFJLElBQUlBLElBQUUsQ0FBVixFQUFZQSxJQUFFTCxTQUFTTSxNQUF2QixFQUErQkQsR0FBL0IsRUFBbUM7QUFDbENULGNBQVFDLEdBQVIsQ0FBWSxhQUFXUSxDQUFYLEdBQWEsRUFBYixHQUFnQkwsU0FBU0ssQ0FBVCxDQUE1QjtBQUNBO0FBQ0QsS0FORDtBQU9BOzs7NEJBR087O0FBSVAsV0FDQztBQUFBO0FBQUEsT0FBSyxXQUFVLGFBQWY7QUFFRSxVQUFLWCxjQUFMO0FBRkYsS0FERDtBQU9BOzs7O0dBbEN3QyxnQkFBTWEsUzs7Ozs7QUF1Qy9DQyxhQUFZQyxZQUFaLEdBQTJCO0FBQ3pCWCxTQUFPLGdCQUFNWSxTQUFOLENBQWdCQztBQURFLEVBQTNCLEMiLCJmaWxlIjoiMC5mODMyYWU5ZmY3OTczOTZlNWFkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IoKXtcblx0c3VwZXIoKVxuXHR0aGlzLmdlbmVyYXRlTGF5b3V0ID0gdGhpcy5nZW5lcmF0ZUxheW91dC5iaW5kKHRoaXMpXG5cdFxufVxuXG5cbmdlbmVyYXRlTGF5b3V0KCl7XG5cdGNvbnNvbGUubG9nKFwiY2FhZGRhXCIpO1xuXHRjb25zdCB7c3RvcmV9ID0gdGhpcy5jb250ZXh0XG5cdGNvbnN0IGNhcmRsaXN0ID0gc3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlLmN1cnJlbnRkYXRhXG5cdHN0b3JlLnN1YnNjcmliZSgoKT0+e1xuXHRcdGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZSlcblx0dmFyIHg7XHRcblx0XHRmb3IodmFyIHg9MDt4PGNhcmRsaXN0Lmxlbmd0aDsgeCsrKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiY2FyZGxpc3RcIit4K1wiXCIrY2FyZGxpc3RbeF0pXG5cdFx0fVxuXHR9KVx0XG59XG5cblxucmVuZGVyKCl7XG5cblxuXHRcblx0cmV0dXJuKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFdyYXBwZXJcIj5cblxuXHRcdFx0e3RoaXMuZ2VuZXJhdGVMYXlvdXQoKX1cdFxuXG5cdFx0PC9kaXY+XG5cdCk7XHRcbn1cblxufVxuXG5cbkNhcmRXcmFwcGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgc3RvcmU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FyZFdyYXBwZXIuanMiXSwic291cmNlUm9vdCI6IiJ9