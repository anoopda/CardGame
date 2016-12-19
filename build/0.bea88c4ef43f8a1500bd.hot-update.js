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
	  var state = store.getState();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGlja0RldGVjdCIsImRpc3BhdGNoIiwidHlwZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOztBQUVBLFVBQVNDLFdBQVQsR0FBdUI7QUFDdkJKLFNBQU1LLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBZjtBQUNBLE9BQU1DLFFBQVFQLE1BQU1RLFFBQU4sRUFBZDtBQUNBQyxXQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDQzs7QUFFQSx1QkFDQztBQUFBO0FBQUEsS0FBSyxPQUFPUCxLQUFaO0FBQ0cscURBREg7QUFFRyw2Q0FBUSxTQUFVSSxXQUFsQjtBQUZILEVBREQsRUFLQ0gsTUFMRCxFIiwiZmlsZSI6IjAuYmVhODhjNGVmNDNmOGExNTAwYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycylcbmNvbnN0IHJvb3RFbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuXG5mdW5jdGlvbiBjbGlja0RldGVjdCAoKXtcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIn0pXG5jb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcbmNvbnNvbGUubG9nKHN0YXRlKTtcbn1cblxuXHRyZW5kZXIoXG4gIDxkaXYgc3RvcmU9e3N0b3JlfT5cbiAgICAgPCBBcHAvPlxuICAgICA8YnV0dG9uIG9uQ2xpY2sgPXtjbGlja0RldGVjdH0gPjwvYnV0dG9uPlxuICA8LyBkaXY+LFxuICByb290RWxcbilcdFxuXG5cblxuXG4gXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9