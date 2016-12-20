webpackHotUpdate(0,{

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(80);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(59);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(22);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(60);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(114);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(81);
	
	var _jquery = __webpack_require__(89);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactRedux = __webpack_require__(274);
	
	var _app = __webpack_require__(149);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _index7 = __webpack_require__(82);
	
	var _index8 = _interopRequireDefault(_index7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Main: {
	    displayName: 'Main'
	  }
	};
	
	var _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/home/anoop/Documents/Desktop/Assignments/CARD_GAME/src/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/home/anoop/Documents/Desktop/Assignments/CARD_GAME/src/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformHmrLibIndexJs2(_homeAnoopDocumentsDesktopAssignmentsCARD_GAMENode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var store = (0, _redux.createStore)(_index8.default);
	var rootEl = document.getElementById('root');
	
	var Main = _wrapComponent('Main')(function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main(props) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
	
	    _this.change = _this.change.bind(_this);
	    _this.genreCheck = _this.genreCheck.bind(_this);
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _jquery2.default.ajax({
	        url: "http://localhost:2000/src/json/data.json",
	        dataType: "json",
	        success: function (val) {
	          store.dispatch({ type: "loadData", data: val });
	        }.bind(this)
	      });
	    }
	  }, {
	    key: 'change',
	    value: function change(e) {
	      store.dispatch({ type: "genreAction", currentGenre: e.target.value });
	      this.genreCheck();
	    }
	  }, {
	    key: 'genreCheck',
	    value: function genreCheck() {
	      console.log("state Tree" + store.getState());
	      var state = store.getState().genreState.data,
	          currentGenre = store.getState().genreState.currentGenre;
	      var key;
	
	      for (key in state) {
	        console.log("key :" + key + "" + "currentGenre :" + currentGenre);
	        if (key == currentGenre) {
	          store.dispatch({ type: "currentData", currentdata: store.getState().genreState + "." + state[key] });
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      store.subscribe(function () {
	        console.log(store.getState());
	      });
	
	      return _react3.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(_app2.default, { change: this.change })
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react3.default.Component));
	
	exports.default = Main;
	
	
	(0, _reactDom.render)(_react3.default.createElement(Main, null), rootEl);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJnZW5yZUNoZWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInZhbCIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwiY3VycmVudEdlbnJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImdlbnJlU3RhdGUiLCJrZXkiLCJjdXJyZW50ZGF0YSIsInN1YnNjcmliZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOzs7OztBQUdBLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNDLFdBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFIZ0I7QUFJakI7Ozs7eUNBSWtCO0FBQ2xCLHdCQUFFRSxJQUFGLENBQU87QUFDSkMsY0FBSywwQ0FERDtBQUVKQyxtQkFBVSxNQUZOO0FBR0pDLGtCQUFVLFVBQVNDLEdBQVQsRUFBYTtBQUN2QlosaUJBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLFVBQU4sRUFBa0JDLE1BQUtILEdBQXZCLEVBQWY7QUFDQyxVQUZTLENBRVJOLElBRlEsQ0FFSCxJQUZHO0FBSE4sUUFBUDtBQU9BOzs7NEJBRU1VLEMsRUFBRTtBQUNUaEIsYUFBTWEsUUFBTixDQUFlLEVBQUNDLE1BQUssYUFBTixFQUFvQkcsY0FBYUQsRUFBRUUsTUFBRixDQUFTQyxLQUExQyxFQUFmO0FBQ0EsWUFBS1osVUFBTDtBQUNDOzs7a0NBR1c7QUFDVmEsZUFBUUMsR0FBUixDQUFZLGVBQWFyQixNQUFNc0IsUUFBTixFQUF6QjtBQUNFLFdBQU1DLFFBQU12QixNQUFNc0IsUUFBTixHQUFpQkUsVUFBakIsQ0FBNEJULElBQXhDO0FBQUEsV0FDTUUsZUFBZWpCLE1BQU1zQixRQUFOLEdBQWlCRSxVQUFqQixDQUE0QlAsWUFEakQ7QUFFTSxXQUFJUSxHQUFKOztBQUVBLFlBQUlBLEdBQUosSUFBV0YsS0FBWCxFQUFpQjtBQUNmSCxpQkFBUUMsR0FBUixDQUFZLFVBQVFJLEdBQVIsR0FBWSxFQUFaLEdBQWUsZ0JBQWYsR0FBZ0NSLFlBQTVDO0FBQ0EsYUFBR1EsT0FBT1IsWUFBVixFQUF3QjtBQUN2QmpCLGlCQUFNYSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxhQUFOLEVBQXFCWSxhQUFZMUIsTUFBTXNCLFFBQU4sR0FBaUJFLFVBQWpCLEdBQTRCLEdBQTVCLEdBQWdDRCxNQUFNRSxHQUFOLENBQWpFLEVBQWY7QUFDQTtBQUNGO0FBSVY7Ozs4QkFLTztBQUNOekIsYUFBTTJCLFNBQU4sQ0FBZ0IsWUFBSTtBQUNsQlAsaUJBQVFDLEdBQVIsQ0FBWXJCLE1BQU1zQixRQUFOLEVBQVo7QUFDRCxRQUZEOztBQUlELGNBQ0k7QUFBQTtBQUFBLFdBQVUsT0FBT3RCLEtBQWpCO0FBQ0c7QUFBQTtBQUFBO0FBQ0csMERBQUssUUFBVSxLQUFLSyxNQUFwQjtBQURIO0FBREgsUUFESjtBQU9BOzs7O0dBMURpQyxnQkFBTXVCLFM7Ozs7O0FBOER4Qyx1QkFBTyw4QkFBQyxJQUFELE9BQVAsRUFBZ0IzQixNQUFoQixFIiwiZmlsZSI6IjAuMmMxYjc1YWY4MzM3ZDZhODhhOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCdcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycylcbmNvbnN0IHJvb3RFbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcblx0c3VwZXIocHJvcHMpXG5cdHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICB0aGlzLmdlbnJlQ2hlY2sgPSB0aGlzLmdlbnJlQ2hlY2suYmluZCh0aGlzKVxufVxuXG5cblxuY29tcG9uZW50RGlkTW91bnQoKXtcblx0JC5hamF4KHtcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDoyMDAwL3NyYy9qc29uL2RhdGEuanNvblwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICBzdWNjZXNzIDogZnVuY3Rpb24odmFsKXtcbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTpcImxvYWREYXRhXCIsIGRhdGE6dmFsfSkgXG4gICAgfS5iaW5kKHRoaXMpXG59KTtcbn1cblxuY2hhbmdlKGUpeyBcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIixjdXJyZW50R2VucmU6ZS50YXJnZXQudmFsdWV9KVxudGhpcy5nZW5yZUNoZWNrKCk7XG59XG5cblxuZ2VucmVDaGVjaygpe1xuICBjb25zb2xlLmxvZyhcInN0YXRlIFRyZWVcIitzdG9yZS5nZXRTdGF0ZSgpKVxuICAgIGNvbnN0IHN0YXRlPXN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5kYXRhLFxuICAgICAgICAgIGN1cnJlbnRHZW5yZSA9IHN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5jdXJyZW50R2VucmU7XG4gICAgICAgICAgdmFyIGtleTtcblxuICAgICAgICAgIGZvcihrZXkgaW4gc3RhdGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXkgOlwiK2tleStcIlwiK1wiY3VycmVudEdlbnJlIDpcIitjdXJyZW50R2VucmUpXG4gICAgICAgICAgICBpZihrZXkgPT0gY3VycmVudEdlbnJlICl7XG4gICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJjdXJyZW50RGF0YVwiLCBjdXJyZW50ZGF0YTpzdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUrXCIuXCIrc3RhdGVba2V5XSB9KSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiBcbiAgXG59XG5cblxuXG5cbnJlbmRlcigpe1xuICBzdG9yZS5zdWJzY3JpYmUoKCk9PntcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKVxuICB9KVxuICAgICBcblx0cmV0dXJuKFxuICAgIFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICBcdFx0PGRpdj5cbiAgICAgICAgIFx0XHQ8QXBwIGNoYW5nZSA9IHt0aGlzLmNoYW5nZX0gLz5cbiAgICAgICAgXHQ8L2Rpdj4gXG4gICAgICA8LyBQcm92aWRlcj5cbiAgICAgICAgKTtcdCBcbn1cblxufVxuXG5yZW5kZXIoPE1haW4vPiwgcm9vdEVsKTtcbiBcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=