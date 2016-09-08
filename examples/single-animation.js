webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(357);


/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _soSelect = __webpack_require__(173);
	
	var _soSelect2 = _interopRequireDefault(_soSelect);
	
	__webpack_require__(333);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console: 0 */
	
	function onChange(value) {
	  console.log('selected ' + value);
	}
	
	var c1 = _react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement('div', { style: { height: 150 } }),
	  _react2.default.createElement(
	    'h2',
	    null,
	    'Single Select'
	  ),
	  _react2.default.createElement(
	    'div',
	    { style: { width: 300 } },
	    _react2.default.createElement(
	      _soSelect2.default,
	      {
	        allowClear: true,
	        placeholder: 'placeholder',
	        searchPlaceholder: 'searchPlaceholder',
	        defaultValue: 'lucy',
	        style: { width: 500 },
	        animation: 'slide-up',
	        showSearch: false,
	        onChange: onChange
	      },
	      _react2.default.createElement(
	        _soSelect.Option,
	        { value: 'jack' },
	        _react2.default.createElement(
	          'b',
	          {
	            style: {
	              color: 'red'
	            }
	          },
	          'jack'
	        )
	      ),
	      _react2.default.createElement(
	        _soSelect.Option,
	        { value: 'lucy' },
	        'lucy'
	      ),
	      _react2.default.createElement(
	        _soSelect.Option,
	        { value: 'disabled', disabled: true },
	        'disabled'
	      ),
	      _react2.default.createElement(
	        _soSelect.Option,
	        { value: 'yiminghe' },
	        'yiminghe'
	      )
	    )
	  )
	);
	
	_reactDom2.default.render(c1, document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=single-animation.js.map