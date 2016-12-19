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
	  state = getState();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGlja0RldGVjdCIsImRpc3BhdGNoIiwidHlwZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOztBQUVBLFVBQVNDLFdBQVQsR0FBdUI7QUFDdkJKLFNBQU1LLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBZjtBQUNBQyxXQUFRQyxVQUFSO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBWUgsS0FBWjtBQUNDOztBQUVBLHVCQUNDO0FBQUE7QUFBQSxLQUFLLE9BQU9QLEtBQVo7QUFDRyxxREFESDtBQUVHLDZDQUFRLFNBQVVJLFdBQWxCO0FBRkgsRUFERCxFQUtDSCxNQUxELEUiLCJmaWxlIjoiMC4yMDg4NDUzZDU4ZTUyZTZiZGZiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCdcblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxuY29uc3Qgcm9vdEVsPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmZ1bmN0aW9uIGNsaWNrRGV0ZWN0ICgpe1xuc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJnZW5yZUFjdGlvblwifSlcbnN0YXRlID0gZ2V0U3RhdGUoKVxuY29uc29sZS5sb2coc3RhdGUpO1xufVxuXG5cdHJlbmRlcihcbiAgPGRpdiBzdG9yZT17c3RvcmV9PlxuICAgICA8IEFwcC8+XG4gICAgIDxidXR0b24gb25DbGljayA9e2NsaWNrRGV0ZWN0fSA+PC9idXR0b24+XG4gIDwvIGRpdj4sXG4gIHJvb3RFbFxuKVx0XG5cblxuXG5cbiBcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=