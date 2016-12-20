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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJnZW5yZUNoZWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInZhbCIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwiY3VycmVudEdlbnJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImdlbnJlU3RhdGUiLCJrZXkiLCJpIiwiY3VycmVudERhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUEsUUFBUSx3Q0FBZDtBQUNBLEtBQU1DLFNBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZDs7Ozs7QUFHQSxpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXOztBQUVqQixXQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFDQyxXQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBSGdCO0FBSWpCOzs7O3lDQUlrQjtBQUNsQix3QkFBRUUsSUFBRixDQUFPO0FBQ0pDLGNBQUssMENBREQ7QUFFSkMsbUJBQVUsTUFGTjtBQUdKQyxrQkFBVSxVQUFTQyxHQUFULEVBQWE7O0FBRXZCWixpQkFBTWEsUUFBTixDQUFlLEVBQUNDLE1BQUssVUFBTixFQUFrQkMsTUFBS0gsR0FBdkIsRUFBZjtBQUNDLFVBSFMsQ0FHUk4sSUFIUSxDQUdILElBSEc7QUFITixRQUFQO0FBUUE7Ozs0QkFFTVUsQyxFQUFFO0FBQ1RoQixhQUFNYSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxhQUFOLEVBQW9CRyxjQUFhRCxFQUFFRSxNQUFGLENBQVNDLEtBQTFDLEVBQWY7QUFDQSxZQUFLWixVQUFMO0FBQ0M7OztrQ0FHVztBQUNWYSxlQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQXJCLGFBQU1zQixTQUFOLENBQWdCLFlBQUk7QUFDbEJGLGlCQUFRQyxHQUFSLENBQVlyQixNQUFNdUIsUUFBTixFQUFaO0FBQ0EsYUFBTUMsUUFBTXhCLE1BQU11QixRQUFOLEdBQWlCRSxVQUFqQixDQUE0QlYsSUFBeEM7QUFDQSxhQUFJVyxHQUFKLEVBQ0lDLENBREo7QUFFQSxjQUFJRCxHQUFKLElBQVdGLEtBQVgsRUFBaUI7O0FBRWYsZUFBR0UsUUFBUTFCLE1BQU11QixRQUFOLEdBQWlCRSxVQUFqQixDQUE0QlIsWUFBdkMsRUFBb0Q7QUFDbERqQixtQkFBTWEsUUFBTixDQUFlLEVBQUNDLE1BQUssYUFBTixFQUFxQmMsYUFBWTVCLE1BQU15QixVQUFOLENBQWlCUixZQUFsRCxFQUFmO0FBQ0Q7QUFFRjtBQUVGLFFBYkQ7QUFjRDs7OzhCQUlPOztBQUVQLGNBQ0k7QUFBQTtBQUFBLFdBQVUsT0FBT2pCLEtBQWpCO0FBQ0c7QUFBQTtBQUFBO0FBQ0csMERBQUssUUFBVSxLQUFLSyxNQUFwQjtBQURIO0FBREgsUUFESjtBQU9BOzs7O0dBeERpQyxnQkFBTXdCLFM7Ozs7O0FBNER4Qyx1QkFBTyw4QkFBQyxJQUFELE9BQVAsRUFBZ0I1QixNQUFoQixFIiwiZmlsZSI6IjAuNGU0ZWU1MDExNTIzMzY5ZDFlYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCdcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycylcbmNvbnN0IHJvb3RFbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcblx0c3VwZXIocHJvcHMpXG5cdHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICB0aGlzLmdlbnJlQ2hlY2sgPSB0aGlzLmdlbnJlQ2hlY2suYmluZCh0aGlzKVxufVxuXG5cblxuY29tcG9uZW50RGlkTW91bnQoKXtcblx0JC5hamF4KHtcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDoyMDAwL3NyYy9qc29uL2RhdGEuanNvblwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICBzdWNjZXNzIDogZnVuY3Rpb24odmFsKXtcblxuICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOlwibG9hZERhdGFcIiwgZGF0YTp2YWx9KSBcbiAgICB9LmJpbmQodGhpcylcbn0pO1xufVxuXG5jaGFuZ2UoZSl7IFxuc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJnZW5yZUFjdGlvblwiLGN1cnJlbnRHZW5yZTplLnRhcmdldC52YWx1ZX0pXG50aGlzLmdlbnJlQ2hlY2soKTtcbn1cblxuXG5nZW5yZUNoZWNrKCl7XG4gIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBnYW1lIGNoZWNrXCIpO1xuICBzdG9yZS5zdWJzY3JpYmUoKCk9PntcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKVxuICAgIGNvbnN0IHN0YXRlPXN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5kYXRhO1xuICAgIHZhciBrZXksXG4gICAgICAgIGk7XG4gICAgZm9yKGtleSBpbiBzdGF0ZSl7XG5cbiAgICAgIGlmKGtleSA9PT0gc3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlLmN1cnJlbnRHZW5yZSl7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiY3VycmVudERhdGFcIiwgY3VycmVudERhdGE6c3RvcmUuZ2VucmVTdGF0ZS5jdXJyZW50R2VucmV9KSBcbiAgICAgIH1cblxuICAgIH1cbiAgICAgXG4gIH0pICBcbn1cblxuXG5cbnJlbmRlcigpe1xuXG5cdHJldHVybihcbiAgICBcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgXHRcdDxkaXY+XG4gICAgICAgICBcdFx0PEFwcCBjaGFuZ2UgPSB7dGhpcy5jaGFuZ2V9IC8+XG4gICAgICAgIFx0PC9kaXY+IFxuICAgICAgPC8gUHJvdmlkZXI+XG4gICAgICAgICk7XHQgXG59XG5cbn1cblxucmVuZGVyKDxNYWluLz4sIHJvb3RFbCk7XG4gXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9