webpackHotUpdate(0,{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(53);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(43);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(17);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(44);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(114);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(81);
	
	var _jquery = __webpack_require__(89);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactRedux = __webpack_require__(275);
	
	var _app = __webpack_require__(149);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _index7 = __webpack_require__(82);
	
	var _index8 = _interopRequireDefault(_index7);
	
	var _cardWrapper = __webpack_require__(150);
	
	var _cardWrapper2 = _interopRequireDefault(_cardWrapper);
	
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
	
	      var state = store.getState().genreState.data,
	          currentGenre = store.getState().genreState.data.currentGenre;
	      console.log(currentGenre);
	      var key;
	      store.dispatch({ type: "currentData", currentdata: currentGenre });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react3.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(_app2.default, { change: this.change }),
	          _react3.default.createElement(_cardWrapper2.default, null)
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react3.default.Component));
	
	exports.default = Main;
	
	
	(0, _reactDom.render)(_react3.default.createElement(Main, null), rootEl);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJnZW5yZUNoZWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInZhbCIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwiY3VycmVudEdlbnJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsImdldFN0YXRlIiwiZ2VucmVTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJjdXJyZW50ZGF0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1BLFFBQVEsd0NBQWQ7QUFDQSxLQUFNQyxTQUFRQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWQ7Ozs7O0FBR0EsaUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2R0FDWEEsS0FEVzs7QUFFakIsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBQ0MsV0FBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQixPQUFsQjtBQUhnQjtBQUlqQjs7Ozt5Q0FJa0I7QUFDbEIsd0JBQUVFLElBQUYsQ0FBTztBQUNKQyxjQUFLLDBDQUREO0FBRUpDLG1CQUFVLE1BRk47QUFHSkMsa0JBQVUsVUFBU0MsR0FBVCxFQUFhO0FBQ3ZCWixpQkFBTWEsUUFBTixDQUFlLEVBQUNDLE1BQUssVUFBTixFQUFrQkMsTUFBS0gsR0FBdkIsRUFBZjtBQUNDLFVBRlMsQ0FFUk4sSUFGUSxDQUVILElBRkc7QUFITixRQUFQO0FBT0E7Ozs0QkFFTVUsQyxFQUFFO0FBQ1RoQixhQUFNYSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxhQUFOLEVBQW9CRyxjQUFhRCxFQUFFRSxNQUFGLENBQVNDLEtBQTFDLEVBQWY7QUFDQSxZQUFLWixVQUFMO0FBQ0M7OztrQ0FFVzs7QUFFUixXQUFNYSxRQUFNcEIsTUFBTXFCLFFBQU4sR0FBaUJDLFVBQWpCLENBQTRCUCxJQUF4QztBQUFBLFdBQ01FLGVBQWVqQixNQUFNcUIsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJQLElBQTVCLENBQWlDRSxZQUR0RDtBQUVNTSxlQUFRQyxHQUFSLENBQVlQLFlBQVo7QUFDQSxXQUFJUSxHQUFKO0FBQ0Z6QixhQUFNYSxRQUFOLENBQWUsRUFBRUMsTUFBSyxhQUFQLEVBQXNCWSxhQUFZVCxZQUFsQyxFQUFmO0FBR1A7Ozs4QkFLTzs7QUFFUCxjQUNJO0FBQUE7QUFBQSxXQUFVLE9BQVNqQixLQUFuQjtBQUNJO0FBQUE7QUFBQTtBQUNFLDBEQUFLLFFBQVUsS0FBS0ssTUFBcEIsR0FERjtBQUVHO0FBRkg7QUFESixRQURKO0FBUUE7Ozs7R0FqRGlDLGdCQUFNc0IsUzs7Ozs7QUFxRHhDLHVCQUFPLDhCQUFDLElBQUQsT0FBUCxFQUFnQjFCLE1BQWhCLEUiLCJmaWxlIjoiMC4xMjRhZmJlZWM3YTk0NDdkNGE1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4J1xuaW1wb3J0IENhcmRXcmFwcGVyIGZyb20gJy4vY29tcG9uZW50cy9jYXJkV3JhcHBlcidcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycylcbmNvbnN0IHJvb3RFbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcblx0c3VwZXIocHJvcHMpXG5cdHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICB0aGlzLmdlbnJlQ2hlY2sgPSB0aGlzLmdlbnJlQ2hlY2suYmluZCh0aGlzKVxufVxuXG5cblxuY29tcG9uZW50RGlkTW91bnQoKXtcblx0JC5hamF4KHtcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDoyMDAwL3NyYy9qc29uL2RhdGEuanNvblwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICBzdWNjZXNzIDogZnVuY3Rpb24odmFsKXtcbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTpcImxvYWREYXRhXCIsIGRhdGE6dmFsfSkgXG4gICAgfS5iaW5kKHRoaXMpXG59KTtcbn1cblxuY2hhbmdlKGUpeyBcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIixjdXJyZW50R2VucmU6ZS50YXJnZXQudmFsdWV9KVxudGhpcy5nZW5yZUNoZWNrKCk7XG59XG5cbmdlbnJlQ2hlY2soKXtcblxuICAgIGNvbnN0IHN0YXRlPXN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5kYXRhLFxuICAgICAgICAgIGN1cnJlbnRHZW5yZSA9IHN0b3JlLmdldFN0YXRlKCkuZ2VucmVTdGF0ZS5kYXRhLmN1cnJlbnRHZW5yZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50R2VucmUpXG4gICAgICAgICAgdmFyIGtleTtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOlwiY3VycmVudERhdGFcIiwgY3VycmVudGRhdGE6Y3VycmVudEdlbnJlIH0pIFxuICAgICAgICAgIFxuICAgICAgICAgICBcbn1cblxuXG5cblxucmVuZGVyKCl7XG4gIFxuXHRyZXR1cm4oXG4gICAgXHQ8UHJvdmlkZXIgc3RvcmUgPSB7c3RvcmV9PlxuICAgICAgXHQgIDxkaXY+IFxuICAgICAgICAgXHRcdDxBcHAgY2hhbmdlID0ge3RoaXMuY2hhbmdlfSAvPlxuICAgICAgICBcdCAgIDwgQ2FyZFdyYXBwZXIgLyA+XG4gICAgICAgICAgPC9kaXY+ICAgXG4gICAgICA8LyBQcm92aWRlcj5cbiAgICAgICAgKTtcdCBcbn1cblxufVxuXG5yZW5kZXIoPE1haW4vPiwgcm9vdEVsKTtcbiBcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=