webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(345);


/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sophonSelect = __webpack_require__(173);
	
	var _sophonSelect2 = _interopRequireDefault(_sophonSelect);
	
	__webpack_require__(323);
	
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
	  _react2.default.createElement(
	    'h2',
	    null,
	    'Select OptGroup'
	  ),
	  _react2.default.createElement(
	    'div',
	    { style: { width: 300 } },
	    _react2.default.createElement(
	      _sophonSelect2.default,
	      {
	        placeholder: 'placeholder',
	        defaultValue: 'lucy',
	        showSearch: false,
	        style: { width: 500 },
	        onChange: onChange
	      },
	      _react2.default.createElement(
	        _sophonSelect.OptGroup,
	        { label: 'manager' },
	        _react2.default.createElement(
	          _sophonSelect.Option,
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
	          _sophonSelect.Option,
	          { value: 'lucy' },
	          'lucy'
	        )
	      ),
	      _react2.default.createElement(
	        _sophonSelect.OptGroup,
	        { label: 'engineer' },
	        _react2.default.createElement(
	          _sophonSelect.Option,
	          { value: 'yiminghe' },
	          'yiminghe'
	        )
	      )
	    )
	  )
	);
	
	_reactDom2.default.render(c1, document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=optgroup.js.map