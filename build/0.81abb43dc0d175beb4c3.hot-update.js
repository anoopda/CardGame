webpackHotUpdate(0,{

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(125);
	
	var _redux = __webpack_require__(54);
	
	var _jquery = __webpack_require__(116);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactRedux = __webpack_require__(128);
	
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
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_app2.default, null),
	    _react2.default.createElement('button', { onClick: clickDetect })
	  )
	), rootEl);

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGlja0RldGVjdCIsImRpc3BhdGNoIiwidHlwZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLEtBQU1BLFFBQVEsd0NBQWQ7QUFDQSxLQUFNQyxTQUFRQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWQ7O0FBRUEsVUFBU0MsV0FBVCxHQUF1QjtBQUN2QkosU0FBTUssUUFBTixDQUFlLEVBQUNDLE1BQUssYUFBTixFQUFmO0FBQ0EsT0FBTUMsUUFBUVAsTUFBTVEsUUFBTixFQUFkO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBWUgsS0FBWjtBQUNDOztBQUVBLHVCQUNDO0FBQUE7QUFBQSxLQUFVLE9BQU9QLEtBQWpCO0FBQ0M7QUFBQTtBQUFBO0FBQ0UsdURBREY7QUFFRSwrQ0FBUSxTQUFVSSxXQUFsQjtBQUZGO0FBREQsRUFERCxFQU9DSCxNQVBELEUiLCJmaWxlIjoiMC44MWFiYjQzZGMwZDE3NWJlYjRjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCdcblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxuY29uc3Qgcm9vdEVsPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmZ1bmN0aW9uIGNsaWNrRGV0ZWN0ICgpe1xuc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJnZW5yZUFjdGlvblwifSlcbmNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKVxuY29uc29sZS5sb2coc3RhdGUpO1xufVxuXG5cdHJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gIFx0PGRpdj5cbiAgICAgPCBBcHAvPlxuICAgICA8YnV0dG9uIG9uQ2xpY2sgPXtjbGlja0RldGVjdH0gPjwvYnV0dG9uPlxuICAgIDwvZGl2PiBcbiAgPC8gUHJvdmlkZXI+LFxuICByb290RWxcbilcdFxuXG5cblxuXG4gXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9