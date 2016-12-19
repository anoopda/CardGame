webpackHotUpdate(0,{

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(124);
	
	var _redux = __webpack_require__(54);
	
	var _reactRedux = __webpack_require__(127);
	
	var _app = __webpack_require__(96);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _index = __webpack_require__(55);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_index2.default);
	var rootEl = document.getElementById('root');
	
	function clickDetect() {
	  store.dispatch({ type: "genreAction" });
	  var state = getState();
	  console.log(state);
	}
	
	(0, _reactDom.render)(_react2.default.createElement(
	  'div',
	  { store: store },
	  _react2.default.createElement(_app2.default, null),
	  _react2.default.createElement('button', { onClick: clickDetect })
	), rootEl);

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGlja0RldGVjdCIsImRpc3BhdGNoIiwidHlwZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOztBQUVBLFVBQVNDLFdBQVQsR0FBdUI7QUFDdkJKLFNBQU1LLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBZjtBQUNBLE9BQU1DLFFBQVFDLFVBQWQ7QUFDQUMsV0FBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0M7O0FBRUEsdUJBQ0M7QUFBQTtBQUFBLEtBQUssT0FBT1AsS0FBWjtBQUNHLHFEQURIO0FBRUcsNkNBQVEsU0FBVUksV0FBbEI7QUFGSCxFQURELEVBS0NILE1BTEQsRSIsImZpbGUiOiIwLjgxNTRlYTg2MzU1ODNiODhmZDllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4J1xuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXG5jb25zdCByb290RWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuZnVuY3Rpb24gY2xpY2tEZXRlY3QgKCl7XG5zdG9yZS5kaXNwYXRjaCh7dHlwZTpcImdlbnJlQWN0aW9uXCJ9KVxuY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpXG5jb25zb2xlLmxvZyhzdGF0ZSk7XG59XG5cblx0cmVuZGVyKFxuICA8ZGl2IHN0b3JlPXtzdG9yZX0+XG4gICAgIDwgQXBwLz5cbiAgICAgPGJ1dHRvbiBvbkNsaWNrID17Y2xpY2tEZXRlY3R9ID48L2J1dHRvbj5cbiAgPC8gZGl2PixcbiAgcm9vdEVsXG4pXHRcblxuXG5cblxuIFxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==