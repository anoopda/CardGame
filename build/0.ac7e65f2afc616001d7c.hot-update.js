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
	        var key;
	        for (key in state) {
	          console.log("key:" + key + " state :" + state[key]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwidmFsIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjdXJyZW50R2VucmUiLCJzdWJzY3JpYmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiZ2VucmVTdGF0ZSIsImtleSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOzs7OztBQUdBLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDs7QUFGaUI7QUFJakI7Ozs7eUNBRWtCO0FBQ2xCLHdCQUFFQyxJQUFGLENBQU87QUFDSkMsY0FBSywwQ0FERDtBQUVKQyxtQkFBVSxNQUZOO0FBR0pDLGtCQUFVLFVBQVNDLEdBQVQsRUFBYTtBQUN2QkMsbUJBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBWCxpQkFBTWMsUUFBTixDQUFlLEVBQUNDLE1BQUssVUFBTixFQUFrQkMsTUFBS0wsR0FBdkIsRUFBZjtBQUNDLFVBSFMsQ0FHUkwsSUFIUSxDQUdILElBSEc7QUFITixRQUFQO0FBUUE7Ozs0QkFHTVcsQyxFQUFFO0FBQ1RMLGVBQVFDLEdBQVIsQ0FBWUksRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNBbkIsYUFBTWMsUUFBTixDQUFlLEVBQUNDLE1BQUssYUFBTixFQUFvQkssY0FBYUgsRUFBRUMsTUFBRixDQUFTQyxLQUExQyxFQUFmO0FBQ0M7Ozs4QkFFTztBQUNQbkIsYUFBTXFCLFNBQU4sQ0FBZ0IsWUFBSTtBQUNuQixhQUFNQyxRQUFNdEIsTUFBTXVCLFFBQU4sR0FBaUJDLFVBQWpCLENBQTRCUixJQUF4QztBQUNBLGFBQUlTLEdBQUo7QUFDQSxjQUFJQSxHQUFKLElBQVdILEtBQVgsRUFBaUI7QUFDZlYsbUJBQVFDLEdBQVIsQ0FBWSxTQUFPWSxHQUFQLEdBQVcsVUFBWCxHQUFzQkgsTUFBTUcsR0FBTixDQUFsQztBQUNEOztBQUVDYixpQkFBUUMsR0FBUixDQUFZYixNQUFNdUIsUUFBTixFQUFaO0FBQ0QsUUFSRjtBQVNBLGNBQ0k7QUFBQTtBQUFBLFdBQVUsT0FBT3ZCLEtBQWpCO0FBQ0c7QUFBQTtBQUFBO0FBQ0csMERBQUssUUFBVSxLQUFLSyxNQUFwQjtBQURIO0FBREgsUUFESjtBQU9BOzs7O0dBMUNpQyxnQkFBTXFCLFM7Ozs7O0FBOEN4Qyx1QkFBTyw4QkFBQyxJQUFELE9BQVAsRUFBZ0J6QixNQUFoQixFIiwiZmlsZSI6IjAuYWM3ZTY1ZjJhZmM2MTYwMDFkN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCdcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycylcbmNvbnN0IHJvb3RFbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcblx0c3VwZXIocHJvcHMpXG5cdHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuXG59XG5cbmNvbXBvbmVudERpZE1vdW50KCl7XG5cdCQuYWpheCh7XG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9zcmMvanNvbi9kYXRhLmpzb25cIixcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHZhbCl7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTpcImxvYWREYXRhXCIsIGRhdGE6dmFsfSkgXG4gICAgfS5iaW5kKHRoaXMpXG59KTtcbn1cblxuXG5jaGFuZ2UoZSl7XG5jb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSkgIFxuc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJnZW5yZUFjdGlvblwiLGN1cnJlbnRHZW5yZTplLnRhcmdldC52YWx1ZX0pXG59XG5cbnJlbmRlcigpe1xuIHN0b3JlLnN1YnNjcmliZSgoKT0+e1xuICBjb25zdCBzdGF0ZT1zdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuZGF0YTtcbiAgdmFyIGtleTtcbiAgZm9yKGtleSBpbiBzdGF0ZSl7XG4gICAgY29uc29sZS5sb2coXCJrZXk6XCIra2V5K1wiIHN0YXRlIDpcIitzdGF0ZVtrZXldKTtcbiAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXG4gIH0pXG5cdHJldHVybihcbiAgICBcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgXHRcdDxkaXY+XG4gICAgICAgICBcdFx0PEFwcCBjaGFuZ2UgPSB7dGhpcy5jaGFuZ2V9IC8+XG4gICAgICAgIFx0PC9kaXY+IFxuICAgICAgPC8gUHJvdmlkZXI+XG4gICAgICAgICk7XHQgXG59XG5cbn1cblxucmVuZGVyKDxNYWluLz4sIHJvb3RFbCk7XG4gXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9