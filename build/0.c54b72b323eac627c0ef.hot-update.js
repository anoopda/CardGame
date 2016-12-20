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
	
	  console.log("this is" + action.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcmVkdWNlcjEuanM/ZWZiZSJdLCJuYW1lcyI6WyJnZW5yZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidHlwZSIsIm9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBR0EsS0FBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQXlCO0FBQUEsT0FBdkJDLEtBQXVCLHVFQUFoQixFQUFnQjtBQUFBLE9BQVhDLE1BQVc7O0FBQzlDQyxXQUFRQyxHQUFSLENBQVksWUFBVUYsT0FBT0csSUFBN0I7QUFDRSxXQUFRSCxPQUFPSSxJQUFmO0FBQ0UsVUFBSyxhQUFMO0FBQW1CO0FBQ2xCTCxlQUFNTSxHQUFOLEdBQVUsZUFBVjtBQUNDO0FBQ0w7O0FBRUcsVUFBSyxVQUFMO0FBQWdCO0FBQ2ZOLGVBQU1JLElBQU4sR0FBV0gsT0FBT0csSUFBbEI7QUFDQTtBQUNDOztBQUVGO0FBQ0U7QUFaSjtBQWNBLFVBQU9KLEtBQVA7QUFDRCxFQWpCRDttQkFrQmVELFkiLCJmaWxlIjoiMC5jNTRiNzJiMzIzZWFjNjI3YzBlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnXG5cblxuY29uc3QgZ2VucmVSZWR1Y2VyID0gKCBzdGF0ZSA9e30gLCBhY3Rpb24pID0+IHtcdFxuY29uc29sZS5sb2coXCJ0aGlzIGlzXCIrYWN0aW9uLmRhdGEpO1x0XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdnZW5yZUFjdGlvbic6e1xuICAgIFx0c3RhdGUub25lPVwic3RhdGUgY2hhbmdlZFwiO1xuICAgICAgYnJlYWs7XG59XG5cbiAgICBjYXNlICdsb2FkRGF0YSc6e1xuICAgIFx0c3RhdGUuZGF0YT1hY3Rpb24uZGF0YTtcbiAgICBcdGJyZWFrO1xuICAgICB9ICBcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gc3RhdGVcbn1cbmV4cG9ydCBkZWZhdWx0IGdlbnJlUmVkdWNlciBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlcnMvcmVkdWNlcjEuanMiXSwic291cmNlUm9vdCI6IiJ9