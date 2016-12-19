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
	
	_jquery2.default.ajax({
	  url: "http://localhost:8000/src/json/data.json",
	  dataType: "json",
	  success: function (val) {
	    console.log(val);
	  }.bind(undefined)
	});
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwidmFsIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJjbGlja0RldGVjdCIsImRpc3BhdGNoIiwidHlwZSIsInN0YXRlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsS0FBTUEsUUFBUSx3Q0FBZDtBQUNBLEtBQU1DLFNBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZDs7QUFFQSxrQkFBRUMsSUFBRixDQUFPO0FBQ0hDLFFBQUssMENBREY7QUFFSEMsYUFBVSxNQUZQO0FBR0hDLFlBQVUsVUFBU0MsR0FBVCxFQUFhO0FBQ3ZCQyxhQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQyxJQUZTLENBRVJHLElBRlE7QUFIUCxFQUFQOztBQVlBLFVBQVNDLFdBQVQsR0FBdUI7QUFDdkJaLFNBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBZjtBQUNBLE9BQU1DLFFBQVFmLE1BQU1nQixRQUFOLEVBQWQ7QUFDQVAsV0FBUUMsR0FBUixDQUFZSyxLQUFaO0FBQ0M7O0FBRUEsdUJBQ0M7QUFBQTtBQUFBLEtBQVUsT0FBT2YsS0FBakI7QUFDQztBQUFBO0FBQUE7QUFDRSx1REFERjtBQUVFLCtDQUFRLFNBQVVZLFdBQWxCO0FBRkY7QUFERCxFQURELEVBT0NYLE1BUEQsRSIsImZpbGUiOiIwLjQwYzY3ODNhN2M2NThhYzMyMDYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4J1xuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXG5jb25zdCByb290RWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuJC5hamF4KHtcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NyYy9qc29uL2RhdGEuanNvblwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICBzdWNjZXNzIDogZnVuY3Rpb24odmFsKXtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgIH0uYmluZCh0aGlzKVxufSk7XG5cblxuXG5cblxuZnVuY3Rpb24gY2xpY2tEZXRlY3QgKCl7XG5zdG9yZS5kaXNwYXRjaCh7dHlwZTpcImdlbnJlQWN0aW9uXCJ9KVxuY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpXG5jb25zb2xlLmxvZyhzdGF0ZSk7XG59XG5cblx0cmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgXHQ8ZGl2PlxuICAgICA8IEFwcC8+XG4gICAgIDxidXR0b24gb25DbGljayA9e2NsaWNrRGV0ZWN0fSA+PC9idXR0b24+XG4gICAgPC9kaXY+IFxuICA8LyBQcm92aWRlcj4sXG4gIHJvb3RFbFxuKVx0XG5cblxuXG5cbiBcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=