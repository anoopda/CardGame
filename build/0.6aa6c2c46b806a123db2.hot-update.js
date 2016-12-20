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
	          console.log(val);
	          store.dispatch({ type: "loadData", data: val });
	        }.bind(this)
	      });
	    }
	  }, {
	    key: 'change',
	    value: function change(e) {
	      console.log(e.target.value);
	      store.dispatch({ type: "genreAction", currentGenre: e.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      store.subscribe(function () {
	        var state = store.getState().genreState.data;
	        var key, i;
	        for (key in state) {
	
	          console.log("key:" + i + " state :" + state[i]);
	        }
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwidmFsIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjdXJyZW50R2VucmUiLCJzdWJzY3JpYmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiZ2VucmVTdGF0ZSIsImtleSIsImkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUEsUUFBUSx3Q0FBZDtBQUNBLEtBQU1DLFNBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZDs7Ozs7QUFHQSxpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXOztBQUVqQixXQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7O0FBRmlCO0FBSWpCOzs7O3lDQUVrQjtBQUNsQix3QkFBRUMsSUFBRixDQUFPO0FBQ0pDLGNBQUssMENBREQ7QUFFSkMsbUJBQVUsTUFGTjtBQUdKQyxrQkFBVSxVQUFTQyxHQUFULEVBQWE7QUFDdkJDLG1CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQVgsaUJBQU1jLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLFVBQU4sRUFBa0JDLE1BQUtMLEdBQXZCLEVBQWY7QUFDQyxVQUhTLENBR1JMLElBSFEsQ0FHSCxJQUhHO0FBSE4sUUFBUDtBQVFBOzs7NEJBR01XLEMsRUFBRTtBQUNUTCxlQUFRQyxHQUFSLENBQVlJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDQW5CLGFBQU1jLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBb0JLLGNBQWFILEVBQUVDLE1BQUYsQ0FBU0MsS0FBMUMsRUFBZjtBQUNDOzs7OEJBRU87QUFDUG5CLGFBQU1xQixTQUFOLENBQWdCLFlBQUk7QUFDbkIsYUFBTUMsUUFBTXRCLE1BQU11QixRQUFOLEdBQWlCQyxVQUFqQixDQUE0QlIsSUFBeEM7QUFDQSxhQUFJUyxHQUFKLEVBQ0lDLENBREo7QUFFQSxjQUFJRCxHQUFKLElBQVdILEtBQVgsRUFBaUI7O0FBRWJWLG1CQUFRQyxHQUFSLENBQVksU0FBT2EsQ0FBUCxHQUFTLFVBQVQsR0FBb0JKLE1BQU1JLENBQU4sQ0FBaEM7QUFHSDs7QUFFQ2QsaUJBQVFDLEdBQVIsQ0FBWWIsTUFBTXVCLFFBQU4sRUFBWjtBQUNELFFBWkY7QUFhQSxjQUNJO0FBQUE7QUFBQSxXQUFVLE9BQU92QixLQUFqQjtBQUNHO0FBQUE7QUFBQTtBQUNHLDBEQUFLLFFBQVUsS0FBS0ssTUFBcEI7QUFESDtBQURILFFBREo7QUFPQTs7OztHQTlDaUMsZ0JBQU1zQixTOzs7OztBQWtEeEMsdUJBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCMUIsTUFBaEIsRSIsImZpbGUiOiIwLjZhYTZjMmM0NmI4MDZhMTIzZGIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXG5jb25zdCByb290RWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdHN1cGVyKHByb3BzKVxuXHR0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxufVxuXG5jb21wb25lbnREaWRNb3VudCgpe1xuXHQkLmFqYXgoe1xuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjIwMDAvc3JjL2pzb24vZGF0YS5qc29uXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbih2YWwpe1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJsb2FkRGF0YVwiLCBkYXRhOnZhbH0pIFxuICAgIH0uYmluZCh0aGlzKVxufSk7XG59XG5cblxuY2hhbmdlKGUpe1xuY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpICBcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIixjdXJyZW50R2VucmU6ZS50YXJnZXQudmFsdWV9KVxufVxuXG5yZW5kZXIoKXtcbiBzdG9yZS5zdWJzY3JpYmUoKCk9PntcbiAgY29uc3Qgc3RhdGU9c3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlLmRhdGE7XG4gIHZhciBrZXksXG4gICAgICBpO1xuICBmb3Ioa2V5IGluIHN0YXRlKXtcblxuICAgICAgY29uc29sZS5sb2coXCJrZXk6XCIraStcIiBzdGF0ZSA6XCIrc3RhdGVbaV0pOyAgXG4gICBcbiAgICBcbiAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXG4gIH0pXG5cdHJldHVybihcbiAgICBcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgXHRcdDxkaXY+XG4gICAgICAgICBcdFx0PEFwcCBjaGFuZ2UgPSB7dGhpcy5jaGFuZ2V9IC8+XG4gICAgICAgIFx0PC9kaXY+IFxuICAgICAgPC8gUHJvdmlkZXI+XG4gICAgICAgICk7XHQgXG59XG5cbn1cblxucmVuZGVyKDxNYWluLz4sIHJvb3RFbCk7XG4gXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9