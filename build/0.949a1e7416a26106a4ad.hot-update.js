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
	      this.genreCheck();
	    }
	  }, {
	    key: 'genreCheck',
	    value: function genreCheck() {
	      console.log("state Tree" + store.getState());
	      var state = store.getState().genreState.data,
	          currentGenre = store.getState().genreState.currentGenre;
	      var key;
	
	      for (key in state) {
	        if (key == currentGenre) {
	          store.dispatch({ type: "currentData", currentdata: 2 });
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      store.subscribe(function () {
	        console.log(store.getState());
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJnZW5yZUNoZWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInZhbCIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwiY3VycmVudEdlbnJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImdlbnJlU3RhdGUiLCJrZXkiLCJjdXJyZW50ZGF0YSIsInN1YnNjcmliZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOzs7OztBQUdBLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNDLFdBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFIZ0I7QUFJakI7Ozs7eUNBSWtCO0FBQ2xCLHdCQUFFRSxJQUFGLENBQU87QUFDSkMsY0FBSywwQ0FERDtBQUVKQyxtQkFBVSxNQUZOO0FBR0pDLGtCQUFVLFVBQVNDLEdBQVQsRUFBYTtBQUN2QlosaUJBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLFVBQU4sRUFBa0JDLE1BQUtILEdBQXZCLEVBQWY7QUFDQyxVQUZTLENBRVJOLElBRlEsQ0FFSCxJQUZHO0FBSE4sUUFBUDtBQU9BOzs7NEJBRU1VLEMsRUFBRTtBQUNUaEIsYUFBTWEsUUFBTixDQUFlLEVBQUNDLE1BQUssYUFBTixFQUFvQkcsY0FBYUQsRUFBRUUsTUFBRixDQUFTQyxLQUExQyxFQUFmO0FBQ0EsWUFBS1osVUFBTDtBQUNDOzs7a0NBR1c7QUFDVmEsZUFBUUMsR0FBUixDQUFZLGVBQWFyQixNQUFNc0IsUUFBTixFQUF6QjtBQUNFLFdBQU1DLFFBQU12QixNQUFNc0IsUUFBTixHQUFpQkUsVUFBakIsQ0FBNEJULElBQXhDO0FBQUEsV0FDTUUsZUFBZWpCLE1BQU1zQixRQUFOLEdBQWlCRSxVQUFqQixDQUE0QlAsWUFEakQ7QUFFTSxXQUFJUSxHQUFKOztBQUVBLFlBQUlBLEdBQUosSUFBV0YsS0FBWCxFQUFpQjtBQUNmLGFBQUdFLE9BQU9SLFlBQVYsRUFBd0I7QUFDdkJqQixpQkFBTWEsUUFBTixDQUFlLEVBQUNDLE1BQUssYUFBTixFQUFxQlksYUFBYSxDQUFsQyxFQUFmO0FBQ0E7QUFDRjtBQUlWOzs7OEJBS087QUFDTjFCLGFBQU0yQixTQUFOLENBQWdCLFlBQUk7QUFDbEJQLGlCQUFRQyxHQUFSLENBQVlyQixNQUFNc0IsUUFBTixFQUFaO0FBQ0QsUUFGRDs7QUFJRCxjQUNJO0FBQUE7QUFBQSxXQUFVLE9BQU90QixLQUFqQjtBQUNHO0FBQUE7QUFBQTtBQUNHLDBEQUFLLFFBQVUsS0FBS0ssTUFBcEI7QUFESDtBQURILFFBREo7QUFPQTs7OztHQXpEaUMsZ0JBQU11QixTOzs7OztBQTZEeEMsdUJBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCM0IsTUFBaEIsRSIsImZpbGUiOiIwLjk0OWExZTc0MTZhMjYxMDZhNGFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXG5jb25zdCByb290RWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdHN1cGVyKHByb3BzKVxuXHR0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgdGhpcy5nZW5yZUNoZWNrID0gdGhpcy5nZW5yZUNoZWNrLmJpbmQodGhpcylcbn1cblxuXG5cbmNvbXBvbmVudERpZE1vdW50KCl7XG5cdCQuYWpheCh7XG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9zcmMvanNvbi9kYXRhLmpzb25cIixcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHZhbCl7XG4gICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJsb2FkRGF0YVwiLCBkYXRhOnZhbH0pIFxuICAgIH0uYmluZCh0aGlzKVxufSk7XG59XG5cbmNoYW5nZShlKXsgXG5zdG9yZS5kaXNwYXRjaCh7dHlwZTpcImdlbnJlQWN0aW9uXCIsY3VycmVudEdlbnJlOmUudGFyZ2V0LnZhbHVlfSlcbnRoaXMuZ2VucmVDaGVjaygpO1xufVxuXG5cbmdlbnJlQ2hlY2soKXtcbiAgY29uc29sZS5sb2coXCJzdGF0ZSBUcmVlXCIrc3RvcmUuZ2V0U3RhdGUoKSlcbiAgICBjb25zdCBzdGF0ZT1zdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuZGF0YSxcbiAgICAgICAgICBjdXJyZW50R2VucmUgPSBzdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuY3VycmVudEdlbnJlO1xuICAgICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgICBmb3Ioa2V5IGluIHN0YXRlKXtcbiAgICAgICAgICAgIGlmKGtleSA9PSBjdXJyZW50R2VucmUgKXtcbiAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTpcImN1cnJlbnREYXRhXCIsIGN1cnJlbnRkYXRhOiAyIH0pIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuIFxuICBcbn1cblxuXG5cblxucmVuZGVyKCl7XG4gIHN0b3JlLnN1YnNjcmliZSgoKT0+e1xuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXG4gIH0pXG4gICAgIFxuXHRyZXR1cm4oXG4gICAgXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIFx0XHQ8ZGl2PlxuICAgICAgICAgXHRcdDxBcHAgY2hhbmdlID0ge3RoaXMuY2hhbmdlfSAvPlxuICAgICAgICBcdDwvZGl2PiBcbiAgICAgIDwvIFByb3ZpZGVyPlxuICAgICAgICApO1x0IFxufVxuXG59XG5cbnJlbmRlcig8TWFpbi8+LCByb290RWwpO1xuIFxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==