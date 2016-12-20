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
	      console.log("entered game check");
	      store.subscribe(function () {
	
	        var state = store.getState().genreState.data;
	
	        store.dispatch({ type: "currentData", currentdata: store.getState().genreState.currentGenre });
	      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJnZW5yZUNoZWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInZhbCIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwiY3VycmVudEdlbnJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic3Vic2NyaWJlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImdlbnJlU3RhdGUiLCJjdXJyZW50ZGF0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOzs7OztBQUdBLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNDLFdBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFIZ0I7QUFJakI7Ozs7eUNBSWtCO0FBQ2xCLHdCQUFFRSxJQUFGLENBQU87QUFDSkMsY0FBSywwQ0FERDtBQUVKQyxtQkFBVSxNQUZOO0FBR0pDLGtCQUFVLFVBQVNDLEdBQVQsRUFBYTs7QUFFdkJaLGlCQUFNYSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxVQUFOLEVBQWtCQyxNQUFLSCxHQUF2QixFQUFmO0FBQ0MsVUFIUyxDQUdSTixJQUhRLENBR0gsSUFIRztBQUhOLFFBQVA7QUFRQTs7OzRCQUVNVSxDLEVBQUU7QUFDVGhCLGFBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBb0JHLGNBQWFELEVBQUVFLE1BQUYsQ0FBU0MsS0FBMUMsRUFBZjtBQUNBLFlBQUtaLFVBQUw7QUFDQzs7O2tDQUdXO0FBQ1ZhLGVBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBckIsYUFBTXNCLFNBQU4sQ0FBZ0IsWUFBSTs7QUFFbEIsYUFBTUMsUUFBTXZCLE1BQU13QixRQUFOLEdBQWlCQyxVQUFqQixDQUE0QlYsSUFBeEM7O0FBSUlmLGVBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBcUJZLGFBQVkxQixNQUFNd0IsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJSLFlBQTdELEVBQWY7QUFLTCxRQVhEO0FBWUQ7Ozs4QkFJTztBQUNMakIsYUFBTXNCLFNBQU4sQ0FBZ0IsWUFBSTtBQUNqQkYsaUJBQVFDLEdBQVIsQ0FBWXJCLE1BQU13QixRQUFOLEVBQVo7QUFDRixRQUZEO0FBR0YsY0FDSTtBQUFBO0FBQUEsV0FBVSxPQUFPeEIsS0FBakI7QUFDRztBQUFBO0FBQUE7QUFDRywwREFBSyxRQUFVLEtBQUtLLE1BQXBCO0FBREg7QUFESCxRQURKO0FBT0E7Ozs7R0F4RGlDLGdCQUFNc0IsUzs7Ozs7QUE0RHhDLHVCQUFPLDhCQUFDLElBQUQsT0FBUCxFQUFnQjFCLE1BQWhCLEUiLCJmaWxlIjoiMC45NmIwM2QxNjJmZTRhYmJiMjRkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4J1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxuY29uc3Qgcm9vdEVsPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuXHRzdXBlcihwcm9wcylcblx0dGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gIHRoaXMuZ2VucmVDaGVjayA9IHRoaXMuZ2VucmVDaGVjay5iaW5kKHRoaXMpXG59XG5cblxuXG5jb21wb25lbnREaWRNb3VudCgpe1xuXHQkLmFqYXgoe1xuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjIwMDAvc3JjL2pzb24vZGF0YS5qc29uXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbih2YWwpe1xuXG4gICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJsb2FkRGF0YVwiLCBkYXRhOnZhbH0pIFxuICAgIH0uYmluZCh0aGlzKVxufSk7XG59XG5cbmNoYW5nZShlKXsgXG5zdG9yZS5kaXNwYXRjaCh7dHlwZTpcImdlbnJlQWN0aW9uXCIsY3VycmVudEdlbnJlOmUudGFyZ2V0LnZhbHVlfSlcbnRoaXMuZ2VucmVDaGVjaygpO1xufVxuXG5cbmdlbnJlQ2hlY2soKXtcbiAgY29uc29sZS5sb2coXCJlbnRlcmVkIGdhbWUgY2hlY2tcIik7XG4gIHN0b3JlLnN1YnNjcmliZSgoKT0+e1xuICAgIFxuICAgIGNvbnN0IHN0YXRlPXN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5kYXRhO1xuXG4gIFxuXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiY3VycmVudERhdGFcIiwgY3VycmVudGRhdGE6c3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlLmN1cnJlbnRHZW5yZX0pIFxuICAgIFxuXG5cbiAgICAgXG4gIH0pICBcbn1cblxuXG5cbnJlbmRlcigpe1xuICAgc3RvcmUuc3Vic2NyaWJlKCgpPT57XG4gICAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKVxuICAgfSlcblx0cmV0dXJuKFxuICAgIFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICBcdFx0PGRpdj5cbiAgICAgICAgIFx0XHQ8QXBwIGNoYW5nZSA9IHt0aGlzLmNoYW5nZX0gLz5cbiAgICAgICAgXHQ8L2Rpdj4gXG4gICAgICA8LyBQcm92aWRlcj5cbiAgICAgICAgKTtcdCBcbn1cblxufVxuXG5yZW5kZXIoPE1haW4vPiwgcm9vdEVsKTtcbiBcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=