webpackHotUpdate(0,{

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(333);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(274);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(22);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(275);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactDom = __webpack_require__(111);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(78);
	
	var _jquery = __webpack_require__(86);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactRedux = __webpack_require__(271);
	
	var _app = __webpack_require__(146);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _index7 = __webpack_require__(79);
	
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
	    _this.clickDetect = _this.clickDetect.bind(_this);
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _jquery2.default.ajax({
	        url: "http://localhost:8000/src/json/data.json",
	        dataType: "json",
	        success: function (val) {
	          console.log(val);
	        }.bind(this)
	      });
	    }
	  }, {
	    key: 'change',
	    value: function change() {
	      console.log("blahhh");
	    }
	  }, {
	    key: 'clickDetect',
	    value: function clickDetect() {
	      store.dispatch({ type: "genreAction" });
	      var state = store.getState();
	      console.log(state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react3.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(_app2.default, null),
	          _react3.default.createElement('button', { onClick: function onClick() {
	              return _this2.clickDetect;
	            } })
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react3.default.Component));
	
	exports.default = Main;
	
	
	(0, _reactDom.render)(_react3.default.createElement(Main, null), rootEl);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJzdG9yZSIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImNoYW5nZSIsImJpbmQiLCJjbGlja0RldGVjdCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ0eXBlIiwic3RhdGUiLCJnZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxLQUFNQSxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsU0FBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFkOzs7OztBQUlBLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFdBQUtDLFdBQUwsR0FBa0IsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbEI7QUFIaUI7QUFJakI7Ozs7MENBR21CO0FBQ25CLHdCQUFFRSxJQUFGLENBQU87QUFDSkMsY0FBSywwQ0FERDtBQUVKQyxtQkFBVSxNQUZOO0FBR0pDLGtCQUFVLFVBQVNDLEdBQVQsRUFBYTtBQUN2QkMsbUJBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNDLFVBRlMsQ0FFUk4sSUFGUSxDQUVILElBRkc7QUFITixRQUFQO0FBT0E7Ozs4QkFFTztBQUNSTyxlQUFRQyxHQUFSLENBQVksUUFBWjtBQUNDOzs7bUNBRVk7QUFDYmQsYUFBTWUsUUFBTixDQUFlLEVBQUNDLE1BQUssYUFBTixFQUFmO0FBQ0EsV0FBTUMsUUFBUWpCLE1BQU1rQixRQUFOLEVBQWQ7QUFDQUwsZUFBUUMsR0FBUixDQUFZRyxLQUFaO0FBQ0M7Ozs4QkFFTztBQUFBOztBQUNQLGNBQ0k7QUFBQTtBQUFBLFdBQVUsT0FBT2pCLEtBQWpCO0FBQ0c7QUFBQTtBQUFBO0FBQ0csNkRBREg7QUFFRyxxREFBUSxTQUFTO0FBQUEsc0JBQUksT0FBS08sV0FBVDtBQUFBLGNBQWpCO0FBRkg7QUFESCxRQURKO0FBUUE7Ozs7R0F0Q2lDLGdCQUFNWSxTOzs7OztBQTJDeEMsdUJBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCbEIsTUFBaEIsRSIsImZpbGUiOiIwLmRkMWQzOGEzODFmODk5NTdjN2Q3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycylcbmNvbnN0IHJvb3RFbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuXHRzdXBlcihwcm9wcylcblx0dGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG5cdHRoaXMuY2xpY2tEZXRlY3QgPXRoaXMuY2xpY2tEZXRlY3QuYmluZCh0aGlzKVxufVxuXG5cbmNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHQkLmFqYXgoe1xuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvc3JjL2pzb24vZGF0YS5qc29uXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbih2YWwpe1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgfS5iaW5kKHRoaXMpXG59KTtcbn1cblxuY2hhbmdlKCl7XG5jb25zb2xlLmxvZyhcImJsYWhoaFwiKTtcbn1cblxuY2xpY2tEZXRlY3QoKXtcbnN0b3JlLmRpc3BhdGNoKHt0eXBlOlwiZ2VucmVBY3Rpb25cIn0pXG5jb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcbmNvbnNvbGUubG9nKHN0YXRlKTtcbn1cblxucmVuZGVyKCl7XG5cdHJldHVybihcbiAgICBcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgXHRcdDxkaXY+XG4gICAgICAgICBcdFx0PCBBcHAgLz5cbiAgICAgICAgIFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLmNsaWNrRGV0ZWN0fT48L2J1dHRvbj5cbiAgICAgICAgXHQ8L2Rpdj4gXG4gICAgICA8LyBQcm92aWRlcj5cbiAgICAgICAgKTtcdCBcbn1cblxuXG59XG5cbnJlbmRlcig8TWFpbi8+LCByb290RWwpO1xuIFxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==