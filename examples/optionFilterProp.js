webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(355);


/***/ },

/***/ 355:
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
	  _react2.default.createElement(
	    'h2',
	    null,
	    'Select optionFilterProp'
	  ),
	  _react2.default.createElement(
	    'div',
	    { style: { width: 300 } },
	    _react2.default.createElement(
	      _soSelect2.default,
	      {
	        defaultValue: '张三',
	        style: { width: 500 },
	        placeholder: 'placeholder',
	        searchPlaceholder: 'searchPlaceholder',
	        optionFilterProp: 'desc',
	        onChange: onChange
	      },
	      _react2.default.createElement(
	        _soSelect.Option,
	        { value: '张三', desc: '张三 zhang san' },
	        '张三'
	      ),
	      _react2.default.createElement(
	        _soSelect.Option,
	        { value: '李四', desc: '李四 li si' },
	        '李四'
	      ),
	      _react2.default.createElement(
	        _soSelect.Option,
	        { value: '王五', desc: '王五 wang wu' },
	        '王五'
	      )
	    )
	  )
	);
	
	_reactDom2.default.render(c1, document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=optionFilterProp.js.map