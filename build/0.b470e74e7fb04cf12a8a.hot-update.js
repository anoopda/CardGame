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
	
	    case 'currentData':
	      {
	        state.currentData = action.currentData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcmVkdWNlcjEuanM/ZWZiZSJdLCJuYW1lcyI6WyJnZW5yZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjdXJyZW50R2VucmUiLCJkYXRhIiwiY3VycmVudERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7OztBQUdBLEtBQU1BLGVBQWUsU0FBZkEsWUFBZSxHQUF5QjtBQUFBLE9BQXZCQyxLQUF1Qix1RUFBaEIsRUFBZ0I7QUFBQSxPQUFYQyxNQUFXOztBQUM1QyxXQUFRQSxPQUFPQyxJQUFmO0FBQ0UsVUFBSyxhQUFMO0FBQW1CO0FBQ2xCRixlQUFNRyxZQUFOLEdBQW1CRixPQUFPRSxZQUExQjtBQUNDO0FBQ0w7O0FBRUcsVUFBSyxVQUFMO0FBQWdCO0FBQ2ZILGVBQU1JLElBQU4sR0FBV0gsT0FBT0csSUFBbEI7QUFDQTtBQUNDOztBQUVELFVBQUssYUFBTDtBQUFtQjtBQUNsQkosZUFBTUssV0FBTixHQUFvQkosT0FBT0ksV0FBM0I7QUFDQTtBQUNBOztBQUVGO0FBQ0U7QUFqQko7QUFtQkEsVUFBT0wsS0FBUDtBQUNELEVBckJEO21CQXNCZUQsWSIsImZpbGUiOiIwLmI0NzBlNzRlN2ZiMDRjZjEyYThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcblxuXG5jb25zdCBnZW5yZVJlZHVjZXIgPSAoIHN0YXRlID17fSAsIGFjdGlvbikgPT4ge1x0XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdnZW5yZUFjdGlvbic6e1xuICAgIFx0c3RhdGUuY3VycmVudEdlbnJlPWFjdGlvbi5jdXJyZW50R2VucmU7XG4gICAgICBicmVhaztcbn1cblxuICAgIGNhc2UgJ2xvYWREYXRhJzp7XG4gICAgXHRzdGF0ZS5kYXRhPWFjdGlvbi5kYXRhO1xuICAgIFx0YnJlYWs7XG4gICAgIH0gIFxuXG4gICAgIGNhc2UgJ2N1cnJlbnREYXRhJzp7XG4gICAgICBzdGF0ZS5jdXJyZW50RGF0YSA9IGFjdGlvbi5jdXJyZW50RGF0YTtcbiAgICAgIGJyZWFrO1xuICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHN0YXRlXG59XG5leHBvcnQgZGVmYXVsdCBnZW5yZVJlZHVjZXIgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL3JlZHVjZXIxLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==