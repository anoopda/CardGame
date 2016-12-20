webpackHotUpdate(0,{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(82);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var genreReducer = function genreReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'genreAction':
	      {
	        state.one = "state changed";
	        break;
	      }
	
	    case 'loadData':
	      {
	        state.data = action.data;
	        break;
	      }
	
	    default:
	      break;
	  }
	  return state;
	};
	exports.default = genreReducer;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcmVkdWNlcjEuanM/ZWZiZSJdLCJuYW1lcyI6WyJnZW5yZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJvbmUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNQSxlQUFlLFNBQWZBLFlBQWUsR0FBeUI7QUFBQSxPQUF2QkMsS0FBdUIsdUVBQWhCLEVBQWdCO0FBQUEsT0FBWEMsTUFBVzs7QUFDNUMsV0FBUUEsT0FBT0MsSUFBZjtBQUNFLFVBQUssYUFBTDtBQUFtQjtBQUNsQkYsZUFBTUcsR0FBTixHQUFVLGVBQVY7QUFDQztBQUNMOztBQUVHLFVBQUssVUFBTDtBQUFnQjtBQUNmSCxlQUFNSSxJQUFOLEdBQVdILE9BQU9HLElBQWxCO0FBQ0E7QUFDQzs7QUFFRjtBQUNFO0FBWko7QUFjQSxVQUFPSixLQUFQO0FBQ0QsRUFoQkQ7bUJBaUJlRCxZIiwiZmlsZSI6IjAuOGViYzc3ZTQxN2M1MjIxMjRmYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4J1xuXG5cbmNvbnN0IGdlbnJlUmVkdWNlciA9ICggc3RhdGUgPXt9ICwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdnZW5yZUFjdGlvbic6e1xuICAgIFx0c3RhdGUub25lPVwic3RhdGUgY2hhbmdlZFwiO1xuICAgICAgYnJlYWs7XG59XG5cbiAgICBjYXNlICdsb2FkRGF0YSc6e1xuICAgIFx0c3RhdGUuZGF0YT1hY3Rpb24uZGF0YTtcbiAgICBcdGJyZWFrO1xuICAgICB9ICBcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gc3RhdGVcbn1cbmV4cG9ydCBkZWZhdWx0IGdlbnJlUmVkdWNlciBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlcnMvcmVkdWNlcjEuanMiXSwic291cmNlUm9vdCI6IiJ9