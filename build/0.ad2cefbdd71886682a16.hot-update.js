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
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _jquery2.default.ajax({
	        url: "http://localhost:2000/src/json/data.json",
	        dataType: "json",
	        success: function (val) {
	          console.log(val);
	        }.bind(this)
	      });
	    }
	  }, {
	    key: 'change',
	    value: function change(e) {
	      console.log(e.target.children);
	      store.dispatch({ type: "genreAction" });
	      store.subscribe(function () {
	        console.log(store.getState());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwidmFsIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidHlwZSIsInN1YnNjcmliZSIsImdldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1BLFFBQVEsd0NBQWQ7QUFDQSxLQUFNQyxTQUFRQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWQ7Ozs7O0FBSUEsaUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2R0FDWEEsS0FEVzs7QUFFakIsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkOztBQUZpQjtBQUlqQjs7OzswQ0FFbUI7QUFDbkIsd0JBQUVDLElBQUYsQ0FBTztBQUNKQyxjQUFLLDBDQUREO0FBRUpDLG1CQUFVLE1BRk47QUFHSkMsa0JBQVUsVUFBU0MsR0FBVCxFQUFhO0FBQ3ZCQyxtQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0MsVUFGUyxDQUVSTCxJQUZRLENBRUgsSUFGRztBQUhOLFFBQVA7QUFPQTs7OzRCQUVNUSxDLEVBQUU7QUFDVEYsZUFBUUMsR0FBUixDQUFZQyxFQUFFQyxNQUFGLENBQVNDLFFBQXJCO0FBQ0FoQixhQUFNaUIsUUFBTixDQUFlLEVBQUNDLE1BQUssYUFBTixFQUFmO0FBQ0VsQixhQUFNbUIsU0FBTixDQUFnQixZQUFJO0FBQ2xCUCxpQkFBUUMsR0FBUixDQUFZYixNQUFNb0IsUUFBTixFQUFaO0FBQ0QsUUFGRDtBQUdEOzs7OEJBRU87O0FBRVAsY0FDSTtBQUFBO0FBQUEsV0FBVSxPQUFPcEIsS0FBakI7QUFDRztBQUFBO0FBQUE7QUFDRywwREFBSyxRQUFVLEtBQUtLLE1BQXBCO0FBREg7QUFESCxRQURKO0FBT0E7Ozs7R0FuQ2lDLGdCQUFNZ0IsUzs7Ozs7QUF1Q3hDLHVCQUFPLDhCQUFDLElBQUQsT0FBUCxFQUFnQnBCLE1BQWhCLEUiLCJmaWxlIjoiMC5hZDJjZWZiZGQ3MTg4NjY4MmExNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4J1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxuY29uc3Qgcm9vdEVsPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdHN1cGVyKHByb3BzKVxuXHR0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxufVxuXG5jb21wb25lbnRXaWxsTW91bnQoKXtcblx0JC5hamF4KHtcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDoyMDAwL3NyYy9qc29uL2RhdGEuanNvblwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICBzdWNjZXNzIDogZnVuY3Rpb24odmFsKXtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgIH0uYmluZCh0aGlzKVxufSk7XG59XG5cbmNoYW5nZShlKXtcbmNvbnNvbGUubG9nKGUudGFyZ2V0LmNoaWxkcmVuKTtcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIn0pXG4gIHN0b3JlLnN1YnNjcmliZSgoKT0+e1xuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXG4gIH0pXG59XG5cbnJlbmRlcigpe1xuXG5cdHJldHVybihcbiAgICBcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgXHRcdDxkaXY+XG4gICAgICAgICBcdFx0PEFwcCBjaGFuZ2UgPSB7dGhpcy5jaGFuZ2V9IC8+XG4gICAgICAgIFx0PC9kaXY+IFxuICAgICAgPC8gUHJvdmlkZXI+XG4gICAgICAgICk7XHQgXG59XG5cbn1cblxucmVuZGVyKDxNYWluLz4sIHJvb3RFbCk7XG4gXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9