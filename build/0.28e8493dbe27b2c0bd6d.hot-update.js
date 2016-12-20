webpackHotUpdate(0,{

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(80);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(59);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(22);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(60);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(114);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(81);
	
	var _jquery = __webpack_require__(89);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactRedux = __webpack_require__(274);
	
	var _app = __webpack_require__(149);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _index7 = __webpack_require__(82);
	
	var _index8 = _interopRequireDefault(_index7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Main: {
	    displayName: 'Main'
	  }
	};
	
	var _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/home/anoop/Documents/Desktop/Assignments/CARD_GAME/src/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/home/anoop/Documents/Desktop/Assignments/CARD_GAME/src/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformHmrLibIndexJs2(_homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var store = (0, _redux.createStore)(_index8.default);
	var rootEl = document.getElementById('root');
	
	var Main = _wrapComponent('Main')(function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main(props) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
	
	    _this.change = _this.change.bind(_this);
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _jquery2.default.ajax({
	        url: "http://localhost:2000/src/json/data.json",
	        dataType: "json",
	        success: function (val) {
	
	          store.dispatch({ type: "loadData", data: val });
	        }.bind(this)
	      });
	    }
	  }, {
	    key: 'change',
	    value: function change(e) {
	      store.dispatch({ type: "genreAction", currentGenre: e.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      store.subscribe(function () {
	        console.log(store.getState());
	        var state = store.getState().genreState.data;
	        var key, i;
	        for (key in state) {
	
	          if (key === store.getState().genreState.currentGenre) {
	            store.dispatch({ type: "currentData", currentData: store.genreState.currentGenre });
	          }
	        }
	      });
	      return _react3.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(_app2.default, { change: this.change })
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react3.default.Component));
	
	exports.default = Main;
	
	
	(0, _reactDom.render)(_react3.default.createElement(Main, null), rootEl);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(82);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var genreReducer = function genreReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'genreAction':
	      {
	        state.currentGenre = action.currentGenre;
	        break;
	      }
	
	    case 'loadData':
	      {
	        state.data = action.data;
	        break;
	      }
	
	    case 'currentData':
	      {
	        state.currentData = action.currentData;
	      }
	
	    default:
	      break;
	  }
	  return state;
	};
	exports.default = genreReducer;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcmVkdWNlcjEuanM/ZWZiZSJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwidmFsIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZGF0YSIsImUiLCJjdXJyZW50R2VucmUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInN0YXRlIiwiZ2VucmVTdGF0ZSIsImtleSIsImkiLCJjdXJyZW50RGF0YSIsIkNvbXBvbmVudCIsImdlbnJlUmVkdWNlciIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOzs7OztBQUdBLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUZpQjtBQUdqQjs7Ozt5Q0FJa0I7QUFDbEIsd0JBQUVDLElBQUYsQ0FBTztBQUNKQyxjQUFLLDBDQUREO0FBRUpDLG1CQUFVLE1BRk47QUFHSkMsa0JBQVUsVUFBU0MsR0FBVCxFQUFhOztBQUV2QlgsaUJBQU1ZLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLFVBQU4sRUFBa0JDLE1BQUtILEdBQXZCLEVBQWY7QUFDQyxVQUhTLENBR1JMLElBSFEsQ0FHSCxJQUhHO0FBSE4sUUFBUDtBQVFBOzs7NEJBRU1TLEMsRUFBRTtBQUNUZixhQUFNWSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxhQUFOLEVBQW9CRyxjQUFhRCxFQUFFRSxNQUFGLENBQVNDLEtBQTFDLEVBQWY7QUFDQzs7OzhCQUVPO0FBQ1BsQixhQUFNbUIsU0FBTixDQUFnQixZQUFJO0FBQ25CQyxpQkFBUUMsR0FBUixDQUFZckIsTUFBTXNCLFFBQU4sRUFBWjtBQUNBLGFBQU1DLFFBQU12QixNQUFNc0IsUUFBTixHQUFpQkUsVUFBakIsQ0FBNEJWLElBQXhDO0FBQ0EsYUFBSVcsR0FBSixFQUNJQyxDQURKO0FBRUYsY0FBSUQsR0FBSixJQUFXRixLQUFYLEVBQWlCOztBQUVmLGVBQUdFLFFBQVF6QixNQUFNc0IsUUFBTixHQUFpQkUsVUFBakIsQ0FBNEJSLFlBQXZDLEVBQW9EO0FBQ2xEaEIsbUJBQU1ZLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBcUJjLGFBQVkzQixNQUFNd0IsVUFBTixDQUFpQlIsWUFBbEQsRUFBZjtBQUNEO0FBRUY7QUFFRSxRQWJGO0FBY0EsY0FDSTtBQUFBO0FBQUEsV0FBVSxPQUFPaEIsS0FBakI7QUFDRztBQUFBO0FBQUE7QUFDRywwREFBSyxRQUFVLEtBQUtLLE1BQXBCO0FBREg7QUFESCxRQURKO0FBT0E7Ozs7R0E5Q2lDLGdCQUFNdUIsUzs7Ozs7QUFrRHhDLHVCQUFPLDhCQUFDLElBQUQsT0FBUCxFQUFnQjNCLE1BQWhCLEU7Ozs7Ozs7Ozs7Ozs7O0FDNURBOzs7Ozs7QUFHQSxLQUFNNEIsZUFBZSxTQUFmQSxZQUFlLEdBQXlCO0FBQUEsT0FBdkJOLEtBQXVCLHVFQUFoQixFQUFnQjtBQUFBLE9BQVhPLE1BQVc7O0FBQzVDLFdBQVFBLE9BQU9qQixJQUFmO0FBQ0UsVUFBSyxhQUFMO0FBQW1CO0FBQ2xCVSxlQUFNUCxZQUFOLEdBQW1CYyxPQUFPZCxZQUExQjtBQUNDO0FBQ0w7O0FBRUcsVUFBSyxVQUFMO0FBQWdCO0FBQ2ZPLGVBQU1ULElBQU4sR0FBV2dCLE9BQU9oQixJQUFsQjtBQUNBO0FBQ0M7O0FBRUQsVUFBSyxhQUFMO0FBQW1CO0FBQ2xCUyxlQUFNSSxXQUFOLEdBQW9CRyxPQUFPSCxXQUEzQjtBQUNBOztBQUVGO0FBQ0U7QUFoQko7QUFrQkEsVUFBT0osS0FBUDtBQUNELEVBcEJEO21CQXFCZU0sWSIsImZpbGUiOiIwLjI4ZTg0OTNkYmUyN2IyYzBiZDZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXG5jb25zdCByb290RWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdHN1cGVyKHByb3BzKVxuXHR0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbn1cblxuXG5cbmNvbXBvbmVudERpZE1vdW50KCl7XG5cdCQuYWpheCh7XG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9zcmMvanNvbi9kYXRhLmpzb25cIixcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHZhbCl7XG5cbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTpcImxvYWREYXRhXCIsIGRhdGE6dmFsfSkgXG4gICAgfS5iaW5kKHRoaXMpXG59KTtcbn1cblxuY2hhbmdlKGUpeyBcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIixjdXJyZW50R2VucmU6ZS50YXJnZXQudmFsdWV9KVxufVxuXG5yZW5kZXIoKXtcbiBzdG9yZS5zdWJzY3JpYmUoKCk9PntcbiAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSlcbiAgY29uc3Qgc3RhdGU9c3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlLmRhdGE7XG4gIHZhciBrZXksXG4gICAgICBpO1xuZm9yKGtleSBpbiBzdGF0ZSl7XG5cbiAgaWYoa2V5ID09PSBzdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuY3VycmVudEdlbnJlKXtcbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTpcImN1cnJlbnREYXRhXCIsIGN1cnJlbnREYXRhOnN0b3JlLmdlbnJlU3RhdGUuY3VycmVudEdlbnJlfSkgXG4gIH1cblxufVxuICAgXG4gIH0pXG5cdHJldHVybihcbiAgICBcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgXHRcdDxkaXY+XG4gICAgICAgICBcdFx0PEFwcCBjaGFuZ2UgPSB7dGhpcy5jaGFuZ2V9IC8+XG4gICAgICAgIFx0PC9kaXY+IFxuICAgICAgPC8gUHJvdmlkZXI+XG4gICAgICAgICk7XHQgXG59XG5cbn1cblxucmVuZGVyKDxNYWluLz4sIHJvb3RFbCk7XG4gXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcblxuXG5jb25zdCBnZW5yZVJlZHVjZXIgPSAoIHN0YXRlID17fSAsIGFjdGlvbikgPT4ge1x0XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdnZW5yZUFjdGlvbic6e1xuICAgIFx0c3RhdGUuY3VycmVudEdlbnJlPWFjdGlvbi5jdXJyZW50R2VucmU7XG4gICAgICBicmVhaztcbn1cblxuICAgIGNhc2UgJ2xvYWREYXRhJzp7XG4gICAgXHRzdGF0ZS5kYXRhPWFjdGlvbi5kYXRhO1xuICAgIFx0YnJlYWs7XG4gICAgIH0gIFxuXG4gICAgIGNhc2UgJ2N1cnJlbnREYXRhJzp7XG4gICAgICBzdGF0ZS5jdXJyZW50RGF0YSA9IGFjdGlvbi5jdXJyZW50RGF0YTtcbiAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBzdGF0ZVxufVxuZXhwb3J0IGRlZmF1bHQgZ2VucmVSZWR1Y2VyIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9yZWR1Y2VyMS5qcyJdLCJzb3VyY2VSb290IjoiIn0=