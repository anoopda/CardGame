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
	  url: "http://localhost:8000/json/data.json",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwidmFsIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJjbGlja0RldGVjdCIsImRpc3BhdGNoIiwidHlwZSIsInN0YXRlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsS0FBTUEsUUFBUSx3Q0FBZDtBQUNBLEtBQU1DLFNBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZDs7QUFFQSxrQkFBRUMsSUFBRixDQUFPO0FBQ0hDLFFBQUssc0NBREY7QUFFSEMsYUFBVSxNQUZQO0FBR0hDLFlBQVUsVUFBU0MsR0FBVCxFQUFhO0FBQ3ZCQyxhQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQyxJQUZTLENBRVJHLElBRlE7QUFIUCxFQUFQOztBQVlBLFVBQVNDLFdBQVQsR0FBdUI7QUFDdkJaLFNBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBZjtBQUNBLE9BQU1DLFFBQVFmLE1BQU1nQixRQUFOLEVBQWQ7QUFDQVAsV0FBUUMsR0FBUixDQUFZSyxLQUFaO0FBQ0M7O0FBRUEsdUJBQ0M7QUFBQTtBQUFBLEtBQVUsT0FBT2YsS0FBakI7QUFDQztBQUFBO0FBQUE7QUFDRSx1REFERjtBQUVFLCtDQUFRLFNBQVVZLFdBQWxCO0FBRkY7QUFERCxFQURELEVBT0NYLE1BUEQsRSIsImZpbGUiOiIwLjI3MTVkYTc2ZmQ0NjllMTk2Zjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4J1xuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXG5jb25zdCByb290RWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuJC5hamF4KHtcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2pzb24vZGF0YS5qc29uXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbih2YWwpe1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgfS5iaW5kKHRoaXMpXG59KTtcblxuXG5cblxuXG5mdW5jdGlvbiBjbGlja0RldGVjdCAoKXtcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIn0pXG5jb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcbmNvbnNvbGUubG9nKHN0YXRlKTtcbn1cblxuXHRyZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICBcdDxkaXY+XG4gICAgIDwgQXBwLz5cbiAgICAgPGJ1dHRvbiBvbkNsaWNrID17Y2xpY2tEZXRlY3R9ID48L2J1dHRvbj5cbiAgICA8L2Rpdj4gXG4gIDwvIFByb3ZpZGVyPixcbiAgcm9vdEVsXG4pXHRcblxuXG5cblxuIFxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==