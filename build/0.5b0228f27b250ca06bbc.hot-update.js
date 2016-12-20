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
	    _this.genreCheck = _this.genreCheck.bind(_this);
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
	      genreCheck();
	    }
	  }, {
	    key: 'genreCheck',
	    value: function genreCheck() {
	
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
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJnZW5yZUNoZWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInZhbCIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwiY3VycmVudEdlbnJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImdlbnJlU3RhdGUiLCJrZXkiLCJpIiwiY3VycmVudERhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUEsUUFBUSx3Q0FBZDtBQUNBLEtBQU1DLFNBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZDs7Ozs7QUFHQSxpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXOztBQUVqQixXQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFDQyxXQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBSGdCO0FBSWpCOzs7O3lDQUlrQjtBQUNsQix3QkFBRUUsSUFBRixDQUFPO0FBQ0pDLGNBQUssMENBREQ7QUFFSkMsbUJBQVUsTUFGTjtBQUdKQyxrQkFBVSxVQUFTQyxHQUFULEVBQWE7O0FBRXZCWixpQkFBTWEsUUFBTixDQUFlLEVBQUNDLE1BQUssVUFBTixFQUFrQkMsTUFBS0gsR0FBdkIsRUFBZjtBQUNDLFVBSFMsQ0FHUk4sSUFIUSxDQUdILElBSEc7QUFITixRQUFQO0FBUUE7Ozs0QkFFTVUsQyxFQUFFO0FBQ1RoQixhQUFNYSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxhQUFOLEVBQW9CRyxjQUFhRCxFQUFFRSxNQUFGLENBQVNDLEtBQTFDLEVBQWY7QUFDQVo7QUFDQzs7O2tDQUdXOztBQUVYUCxhQUFNb0IsU0FBTixDQUFnQixZQUFJO0FBQ25CQyxpQkFBUUMsR0FBUixDQUFZdEIsTUFBTXVCLFFBQU4sRUFBWjtBQUNBLGFBQU1DLFFBQU14QixNQUFNdUIsUUFBTixHQUFpQkUsVUFBakIsQ0FBNEJWLElBQXhDO0FBQ0EsYUFBSVcsR0FBSixFQUNJQyxDQURKO0FBRUYsY0FBSUQsR0FBSixJQUFXRixLQUFYLEVBQWlCOztBQUVmLGVBQUdFLFFBQVExQixNQUFNdUIsUUFBTixHQUFpQkUsVUFBakIsQ0FBNEJSLFlBQXZDLEVBQW9EO0FBQ2xEakIsbUJBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBcUJjLGFBQVk1QixNQUFNeUIsVUFBTixDQUFpQlIsWUFBbEQsRUFBZjtBQUNEO0FBRUY7QUFFRSxRQWJGO0FBZUE7Ozs4QkFJTzs7QUFFUCxjQUNJO0FBQUE7QUFBQSxXQUFVLE9BQU9qQixLQUFqQjtBQUNHO0FBQUE7QUFBQTtBQUNHLDBEQUFLLFFBQVUsS0FBS0ssTUFBcEI7QUFESDtBQURILFFBREo7QUFPQTs7OztHQXpEaUMsZ0JBQU13QixTOzs7OztBQTZEeEMsdUJBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCNUIsTUFBaEIsRSIsImZpbGUiOiIwLjViMDIyOGYyN2IyNTBjYTA2YmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXG5jb25zdCByb290RWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdHN1cGVyKHByb3BzKVxuXHR0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgdGhpcy5nZW5yZUNoZWNrID0gdGhpcy5nZW5yZUNoZWNrLmJpbmQodGhpcylcbn1cblxuXG5cbmNvbXBvbmVudERpZE1vdW50KCl7XG5cdCQuYWpheCh7XG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9zcmMvanNvbi9kYXRhLmpzb25cIixcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHZhbCl7XG5cbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTpcImxvYWREYXRhXCIsIGRhdGE6dmFsfSkgXG4gICAgfS5iaW5kKHRoaXMpXG59KTtcbn1cblxuY2hhbmdlKGUpeyBcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIixjdXJyZW50R2VucmU6ZS50YXJnZXQudmFsdWV9KVxuZ2VucmVDaGVjaygpO1xufVxuXG5cbmdlbnJlQ2hlY2soKXtcblxuIHN0b3JlLnN1YnNjcmliZSgoKT0+e1xuICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKVxuICBjb25zdCBzdGF0ZT1zdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuZGF0YTtcbiAgdmFyIGtleSxcbiAgICAgIGk7XG5mb3Ioa2V5IGluIHN0YXRlKXtcblxuICBpZihrZXkgPT09IHN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5jdXJyZW50R2VucmUpe1xuICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiY3VycmVudERhdGFcIiwgY3VycmVudERhdGE6c3RvcmUuZ2VucmVTdGF0ZS5jdXJyZW50R2VucmV9KSBcbiAgfVxuXG59XG4gICBcbiAgfSlcblxufVxuXG5cblxucmVuZGVyKCl7XG5cblx0cmV0dXJuKFxuICAgIFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICBcdFx0PGRpdj5cbiAgICAgICAgIFx0XHQ8QXBwIGNoYW5nZSA9IHt0aGlzLmNoYW5nZX0gLz5cbiAgICAgICAgXHQ8L2Rpdj4gXG4gICAgICA8LyBQcm92aWRlcj5cbiAgICAgICAgKTtcdCBcbn1cblxufVxuXG5yZW5kZXIoPE1haW4vPiwgcm9vdEVsKTtcbiBcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=