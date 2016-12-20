webpackHotUpdate(0,{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
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
	
	var _reactDom = __webpack_require__(114);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(81);
	
	var _jquery = __webpack_require__(89);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactRedux = __webpack_require__(275);
	
	var _app = __webpack_require__(149);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _index7 = __webpack_require__(82);
	
	var _index8 = _interopRequireDefault(_index7);
	
	var _cardWrapper = __webpack_require__(150);
	
	var _cardWrapper2 = _interopRequireDefault(_cardWrapper);
	
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
	
	      var state = store.getState().genreState.data,
	          currentvalue = store.getState().genreState.currentGenre;
	      store.dispatch({ type: "currentData", currentdata: store.getState().genreState.data[currentvalue] });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      store.subscribe(function () {});
	
	      return _react3.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(_app2.default, { change: this.change }),
	          _react3.default.createElement(_cardWrapper2.default, null)
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react3.default.Component));
	
	exports.default = Main;
	
	
	(0, _reactDom.render)(_react3.default.createElement(Main, null), rootEl);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJnZW5yZUNoZWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInZhbCIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwiY3VycmVudEdlbnJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsImdldFN0YXRlIiwiZ2VucmVTdGF0ZSIsImN1cnJlbnR2YWx1ZSIsImN1cnJlbnRkYXRhIiwic3Vic2NyaWJlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUEsUUFBUSx3Q0FBZDtBQUNBLEtBQU1DLFNBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZDs7Ozs7QUFHQSxpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXOztBQUVqQixXQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFDQyxXQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBSGdCO0FBSWpCOzs7O3lDQUlrQjtBQUNsQix3QkFBRUUsSUFBRixDQUFPO0FBQ0pDLGNBQUssMENBREQ7QUFFSkMsbUJBQVUsTUFGTjtBQUdKQyxrQkFBVSxVQUFTQyxHQUFULEVBQWE7QUFDdkJaLGlCQUFNYSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxVQUFOLEVBQWtCQyxNQUFLSCxHQUF2QixFQUFmO0FBQ0MsVUFGUyxDQUVSTixJQUZRLENBRUgsSUFGRztBQUhOLFFBQVA7QUFPQTs7OzRCQUVNVSxDLEVBQUU7QUFDVGhCLGFBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBb0JHLGNBQWFELEVBQUVFLE1BQUYsQ0FBU0MsS0FBMUMsRUFBZjtBQUNBLFlBQUtaLFVBQUw7QUFDQzs7O2tDQUVXOztBQUVSLFdBQU1hLFFBQU1wQixNQUFNcUIsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJQLElBQXhDO0FBQUEsV0FDTVEsZUFBZXZCLE1BQU1xQixRQUFOLEdBQWlCQyxVQUFqQixDQUE0QkwsWUFEakQ7QUFFTWpCLGFBQU1hLFFBQU4sQ0FBZSxFQUFFQyxNQUFLLGFBQVAsRUFBc0JVLGFBQVl4QixNQUFNcUIsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJQLElBQTVCLENBQWlDUSxZQUFqQyxDQUFsQyxFQUFmO0FBQ1Q7Ozs4QkFHTztBQUNOdkIsYUFBTXlCLFNBQU4sQ0FBZ0IsWUFBSSxDQUVuQixDQUZEOztBQUlELGNBQ0k7QUFBQTtBQUFBLFdBQVUsT0FBU3pCLEtBQW5CO0FBQ0k7QUFBQTtBQUFBO0FBQ0UsMERBQUssUUFBVSxLQUFLSyxNQUFwQixHQURGO0FBRUc7QUFGSDtBQURKLFFBREo7QUFRQTs7OztHQTlDaUMsZ0JBQU1xQixTOzs7OztBQWtEeEMsdUJBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCekIsTUFBaEIsRSIsImZpbGUiOiIwLmY2MDJkYmQyNTg1MTZjNmMyYmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXG5pbXBvcnQgQ2FyZFdyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL2NhcmRXcmFwcGVyJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxuY29uc3Qgcm9vdEVsPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuXHRzdXBlcihwcm9wcylcblx0dGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gIHRoaXMuZ2VucmVDaGVjayA9IHRoaXMuZ2VucmVDaGVjay5iaW5kKHRoaXMpXG59XG5cblxuXG5jb21wb25lbnREaWRNb3VudCgpe1xuXHQkLmFqYXgoe1xuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjIwMDAvc3JjL2pzb24vZGF0YS5qc29uXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbih2YWwpe1xuICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOlwibG9hZERhdGFcIiwgZGF0YTp2YWx9KSBcbiAgICB9LmJpbmQodGhpcylcbn0pO1xufVxuXG5jaGFuZ2UoZSl7IFxuc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJnZW5yZUFjdGlvblwiLGN1cnJlbnRHZW5yZTplLnRhcmdldC52YWx1ZX0pXG50aGlzLmdlbnJlQ2hlY2soKTtcbn1cblxuZ2VucmVDaGVjaygpe1xuXG4gICAgY29uc3Qgc3RhdGU9c3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlLmRhdGEsXG4gICAgICAgICAgY3VycmVudHZhbHVlID0gc3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlLmN1cnJlbnRHZW5yZTtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6XCJjdXJyZW50RGF0YVwiLCBjdXJyZW50ZGF0YTpzdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuZGF0YVtjdXJyZW50dmFsdWVdIH0pICAgICAgIFxufVxuXG5cbnJlbmRlcigpe1xuICBzdG9yZS5zdWJzY3JpYmUoKCk9PntcblxuICB9KVxuICAgICBcblx0cmV0dXJuKFxuICAgIFx0PFByb3ZpZGVyIHN0b3JlID0ge3N0b3JlfT5cbiAgICAgIFx0ICA8ZGl2PiBcbiAgICAgICAgIFx0XHQ8QXBwIGNoYW5nZSA9IHt0aGlzLmNoYW5nZX0gLz5cbiAgICAgICAgXHQgICA8IENhcmRXcmFwcGVyIC8gPlxuICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgPC8gUHJvdmlkZXI+XG4gICAgICAgICk7XHQgXG59XG5cbn1cblxucmVuZGVyKDxNYWluLz4sIHJvb3RFbCk7XG4gXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9