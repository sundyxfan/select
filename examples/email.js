webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(351);


/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _soSelect = __webpack_require__(173);
	
	var _soSelect2 = _interopRequireDefault(_soSelect);
	
	__webpack_require__(350);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console: 0 */
	
	var Test = _react2.default.createClass({
	  displayName: 'Test',
	  getInitialState: function getInitialState() {
	    return {
	      options: []
	    };
	  },
	  onSelect: function onSelect(value) {
	    console.log('onSelect', value);
	  },
	  onChange: function onChange(value) {
	    console.log('onChange', value);
	    var options = [];
	    if (value) {
	      if (value.indexOf('@') >= 0) {
	        options = _react2.default.createElement(
	          _soSelect.Option,
	          { key: value },
	          value
	        );
	      } else {
	        options = ['gmail.com', 'yahoo.com', 'outlook.com'].map(function (domain) {
	          var email = value + '@' + domain;
	          return _react2.default.createElement(
	            _soSelect.Option,
	            { key: email },
	            email
	          );
	        });
	      }
	    }
	    this.setState({
	      options: options
	    });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      _soSelect2.default,
	      {
	        combobox: true,
	        notFoundContent: false,
	        style: { width: 200 },
	        onChange: this.onChange,
	        onSelect: this.onSelect,
	        placeholder: '请输入账户名'
	      },
	      this.state.options
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=email.js.map