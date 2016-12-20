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
	    _this.clickDetect = _this.clickDetect.bind(_this);
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
	    value: function change() {
	      console.log("blahhh");
	      store.dispatch({ type: "genreAction" });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var state = store.getState();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJjbGlja0RldGVjdCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ0eXBlIiwic3RhdGUiLCJnZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOzs7OztBQUlBLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFdBQUtDLFdBQUwsR0FBa0IsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbEI7QUFIaUI7QUFJakI7Ozs7MENBRW1CO0FBQ25CLHdCQUFFRSxJQUFGLENBQU87QUFDSkMsY0FBSywwQ0FERDtBQUVKQyxtQkFBVSxNQUZOO0FBR0pDLGtCQUFVLFVBQVNDLEdBQVQsRUFBYTtBQUN2QkMsbUJBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNDLFVBRlMsQ0FFUk4sSUFGUSxDQUVILElBRkc7QUFITixRQUFQO0FBT0E7Ozs4QkFFTztBQUNSTyxlQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBZCxhQUFNZSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxhQUFOLEVBQWY7QUFDQzs7OzhCQUVPO0FBQ04sV0FBTUMsUUFBUWpCLE1BQU1rQixRQUFOLEVBQWQ7QUFDRCxjQUNJO0FBQUE7QUFBQSxXQUFVLE9BQU9sQixLQUFqQjtBQUNHO0FBQUE7QUFBQTtBQUNHLDBEQUFLLFFBQVUsS0FBS0ssTUFBcEI7QUFESDtBQURILFFBREo7QUFPQTs7OztHQWhDaUMsZ0JBQU1jLFM7Ozs7O0FBb0N4Qyx1QkFBTyw4QkFBQyxJQUFELE9BQVAsRUFBZ0JsQixNQUFoQixFIiwiZmlsZSI6IjAuYTllMzRiYjU1YmM0OWViYTdkN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCdcblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxuY29uc3Qgcm9vdEVsPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdHN1cGVyKHByb3BzKVxuXHR0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblx0dGhpcy5jbGlja0RldGVjdCA9dGhpcy5jbGlja0RldGVjdC5iaW5kKHRoaXMpXG59XG5cbmNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHQkLmFqYXgoe1xuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjIwMDAvc3JjL2pzb24vZGF0YS5qc29uXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbih2YWwpe1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgfS5iaW5kKHRoaXMpXG59KTtcbn1cblxuY2hhbmdlKCl7XG5jb25zb2xlLmxvZyhcImJsYWhoaFwiKTtcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIn0pXG59XG5cbnJlbmRlcigpe1xuICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCkgIFxuXHRyZXR1cm4oXG4gICAgXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIFx0XHQ8ZGl2PlxuICAgICAgICAgXHRcdDxBcHAgY2hhbmdlID0ge3RoaXMuY2hhbmdlfSAvPlxuICAgICAgICBcdDwvZGl2PiBcbiAgICAgIDwvIFByb3ZpZGVyPlxuICAgICAgICApO1x0IFxufVxuXG59XG5cbnJlbmRlcig8TWFpbi8+LCByb290RWwpO1xuIFxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==