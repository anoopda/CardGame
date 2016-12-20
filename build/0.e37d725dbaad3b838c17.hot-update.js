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
	        state.currentGenre = action.currentGenre;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcmVkdWNlcjEuanM/ZWZiZSJdLCJuYW1lcyI6WyJnZW5yZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjdXJyZW50R2VucmUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNQSxlQUFlLFNBQWZBLFlBQWUsR0FBeUI7QUFBQSxPQUF2QkMsS0FBdUIsdUVBQWhCLEVBQWdCO0FBQUEsT0FBWEMsTUFBVzs7QUFDNUMsV0FBUUEsT0FBT0MsSUFBZjtBQUNFLFVBQUssYUFBTDtBQUFtQjtBQUNsQkYsZUFBTUcsWUFBTixHQUFtQkYsT0FBT0UsWUFBMUI7QUFDQztBQUNMOztBQUVHLFVBQUssVUFBTDtBQUFnQjtBQUNmSCxlQUFNSSxJQUFOLEdBQVdILE9BQU9HLElBQWxCO0FBQ0E7QUFDQzs7QUFFRjtBQUNFO0FBWko7QUFjQSxVQUFPSixLQUFQO0FBQ0QsRUFoQkQ7bUJBaUJlRCxZIiwiZmlsZSI6IjAuZTM3ZDcyNWRiYWFkM2I4MzhjMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4J1xuXG5cbmNvbnN0IGdlbnJlUmVkdWNlciA9ICggc3RhdGUgPXt9ICwgYWN0aW9uKSA9PiB7XHRcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2dlbnJlQWN0aW9uJzp7XG4gICAgXHRzdGF0ZS5jdXJyZW50R2VucmU9YWN0aW9uLmN1cnJlbnRHZW5yZTtcbiAgICAgIGJyZWFrO1xufVxuXG4gICAgY2FzZSAnbG9hZERhdGEnOntcbiAgICBcdHN0YXRlLmRhdGE9YWN0aW9uLmRhdGE7XG4gICAgXHRicmVhaztcbiAgICAgfSAgXG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHN0YXRlXG59XG5leHBvcnQgZGVmYXVsdCBnZW5yZVJlZHVjZXIgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL3JlZHVjZXIxLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==