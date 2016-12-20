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
	      var event = e;
	    }
	  }, {
	    key: 'genreCheck',
	    value: function genreCheck() {
	
	      var state = store.getState().genreState.data,
	          currentvalue = store.getState().genreState.currentGenre;
	      var key;
	      console.log("key" + key);
	      store.dispatch({ type: "currentData", currentdata: store.getState().genreState.currentvalue });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJnZW5yZUNoZWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInZhbCIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJlIiwiY3VycmVudEdlbnJlIiwidGFyZ2V0IiwidmFsdWUiLCJldmVudCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJnZW5yZVN0YXRlIiwiY3VycmVudHZhbHVlIiwia2V5IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRkYXRhIiwic3Vic2NyaWJlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUEsUUFBUSx3Q0FBZDtBQUNBLEtBQU1DLFNBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZDs7Ozs7QUFHQSxpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXOztBQUVqQixXQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFDQyxXQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBSGdCO0FBSWpCOzs7O3lDQUlrQjtBQUNsQix3QkFBRUUsSUFBRixDQUFPO0FBQ0pDLGNBQUssMENBREQ7QUFFSkMsbUJBQVUsTUFGTjtBQUdKQyxrQkFBVSxVQUFTQyxHQUFULEVBQWE7QUFDdkJaLGlCQUFNYSxRQUFOLENBQWUsRUFBQ0MsTUFBSyxVQUFOLEVBQWtCQyxNQUFLSCxHQUF2QixFQUFmO0FBQ0MsVUFGUyxDQUVSTixJQUZRLENBRUgsSUFGRztBQUhOLFFBQVA7QUFPQTs7OzRCQUVNVSxDLEVBQUU7QUFDVGhCLGFBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFLLGFBQU4sRUFBb0JHLGNBQWFELEVBQUVFLE1BQUYsQ0FBU0MsS0FBMUMsRUFBZjtBQUNBLFlBQUtaLFVBQUw7QUFDQSxXQUFJYSxRQUFPSixDQUFYO0FBQ0M7OztrQ0FFVzs7QUFFUixXQUFNSyxRQUFNckIsTUFBTXNCLFFBQU4sR0FBaUJDLFVBQWpCLENBQTRCUixJQUF4QztBQUFBLFdBQ01TLGVBQWV4QixNQUFNc0IsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJOLFlBRGpEO0FBRU0sV0FBSVEsR0FBSjtBQUNBQyxlQUFRQyxHQUFSLENBQVksUUFBTUYsR0FBbEI7QUFDQXpCLGFBQU1hLFFBQU4sQ0FBZSxFQUFFQyxNQUFLLGFBQVAsRUFBc0JjLGFBQVk1QixNQUFNc0IsUUFBTixHQUFpQkMsVUFBakIsQ0FBNEJDLFlBQTlELEVBQWY7QUFHVDs7OzhCQUtPO0FBQ054QixhQUFNNkIsU0FBTixDQUFnQixZQUFJO0FBQ25CSCxpQkFBUUMsR0FBUixDQUFZM0IsTUFBTXNCLFFBQU4sRUFBWjtBQUNBLFFBRkQ7O0FBSUQsY0FDSTtBQUFBO0FBQUEsV0FBVSxPQUFTdEIsS0FBbkI7QUFDSTtBQUFBO0FBQUE7QUFDRSwwREFBSyxRQUFVLEtBQUtLLE1BQXBCLEdBREY7QUFFRztBQUZIO0FBREosUUFESjtBQVFBOzs7O0dBckRpQyxnQkFBTXlCLFM7Ozs7O0FBeUR4Qyx1QkFBTyw4QkFBQyxJQUFELE9BQVAsRUFBZ0I3QixNQUFoQixFIiwiZmlsZSI6IjAuYjljMTc3Nzk4NjRkODQ0MjYzODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCdcbmltcG9ydCBDYXJkV3JhcHBlciBmcm9tICcuL2NvbXBvbmVudHMvY2FyZFdyYXBwZXInXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXG5jb25zdCByb290RWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdHN1cGVyKHByb3BzKVxuXHR0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgdGhpcy5nZW5yZUNoZWNrID0gdGhpcy5nZW5yZUNoZWNrLmJpbmQodGhpcylcbn1cblxuXG5cbmNvbXBvbmVudERpZE1vdW50KCl7XG5cdCQuYWpheCh7XG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9zcmMvanNvbi9kYXRhLmpzb25cIixcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHZhbCl7XG4gICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6XCJsb2FkRGF0YVwiLCBkYXRhOnZhbH0pIFxuICAgIH0uYmluZCh0aGlzKVxufSk7XG59XG5cbmNoYW5nZShlKXsgXG5zdG9yZS5kaXNwYXRjaCh7dHlwZTpcImdlbnJlQWN0aW9uXCIsY3VycmVudEdlbnJlOmUudGFyZ2V0LnZhbHVlfSlcbnRoaXMuZ2VucmVDaGVjaygpO1xudmFyIGV2ZW50ID1lO1xufVxuXG5nZW5yZUNoZWNrKCl7XG5cbiAgICBjb25zdCBzdGF0ZT1zdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuZGF0YSxcbiAgICAgICAgICBjdXJyZW50dmFsdWUgPSBzdG9yZS5nZXRTdGF0ZSgpLmdlbnJlU3RhdGUuY3VycmVudEdlbnJlO1xuICAgICAgICAgIHZhciBrZXk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJrZXlcIitrZXkpXG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOlwiY3VycmVudERhdGFcIiwgY3VycmVudGRhdGE6c3RvcmUuZ2V0U3RhdGUoKS5nZW5yZVN0YXRlLmN1cnJlbnR2YWx1ZSB9KSBcbiAgICAgICAgXG4gICAgICAgXG59XG5cblxuXG5cbnJlbmRlcigpe1xuICBzdG9yZS5zdWJzY3JpYmUoKCk9PntcbiAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXG4gIH0pXG4gICAgIFxuXHRyZXR1cm4oXG4gICAgXHQ8UHJvdmlkZXIgc3RvcmUgPSB7c3RvcmV9PlxuICAgICAgXHQgIDxkaXY+IFxuICAgICAgICAgXHRcdDxBcHAgY2hhbmdlID0ge3RoaXMuY2hhbmdlfSAvPlxuICAgICAgICBcdCAgIDwgQ2FyZFdyYXBwZXIgLyA+XG4gICAgICAgICAgPC9kaXY+ICAgXG4gICAgICA8LyBQcm92aWRlcj5cbiAgICAgICAgKTtcdCBcbn1cblxufVxuXG5yZW5kZXIoPE1haW4vPiwgcm9vdEVsKTtcbiBcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=