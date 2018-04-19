import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import Trigger from 'rc-trigger';
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import DropdownMenu from './DropdownMenu';
import ReactDOM from 'react-dom';

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger = function (_React$Component) {
  _inherits(SelectTrigger, _React$Component);

  function SelectTrigger(props) {
    _classCallCheck(this, SelectTrigger);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    return _this;
  }

  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    var _props = this.props,
        visible = _props.visible,
        dropdownMatchSelectWidth = _props.dropdownMatchSelectWidth;

    if (visible) {
      var dropdownDOMNode = this.getPopupDOMNode();
      if (dropdownDOMNode) {
        var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
        dropdownDOMNode.style[widthProp] = ReactDOM.findDOMNode(this).offsetWidth + 'px';
      }
    }
  };

  SelectTrigger.prototype.render = function render() {
    var _popupClassName;

    var props = this.props;
    var multiple = props.multiple,
        visible = props.visible,
        inputValue = props.inputValue,
        dropdownAlign = props.dropdownAlign;

    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, _popupClassName[props.dropdownClassName] = !!props.dropdownClassName, _popupClassName[dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single')] = 1, _popupClassName);
    var popupElement = this.getDropdownElement({
      menuItems: props.options,
      multiple: multiple,
      inputValue: inputValue,
      visible: visible
    });

    return React.createElement(
      Trigger,
      _extends({}, props, {
        showAction: props.disabled ? [] : ['click'],
        hideAction: props.disabled ? [] : ['blur'],
        ref: 'trigger',
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: classnames(popupClassName),
        popupStyle: props.dropdownStyle
      }),
      props.children
    );
  };

  return SelectTrigger;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getInnerMenu = function () {
    return _this2.popupMenu && _this2.popupMenu.refs.menu;
  };

  this.getPopupDOMNode = function () {
    return _this2.refs.trigger.getPopupDomNode();
  };

  this.getDropdownElement = function (newProps) {
    var props = _this2.props;
    return React.createElement(DropdownMenu, _extends({
      ref: _this2.saveMenu
    }, newProps, {
      prefixCls: _this2.getDropdownPrefixCls(),
      onMenuSelect: props.onMenuSelect,
      onMenuDeselect: props.onMenuDeselect,
      value: props.value,
      defaultActiveFirstOption: props.defaultActiveFirstOption,
      dropdownMenuStyle: props.dropdownMenuStyle }));
  };

  this.getDropdownTransitionName = function () {
    var props = _this2.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = _this2.getDropdownPrefixCls() + '-' + props.animation;
    }
    return transitionName;
  };

  this.getDropdownPrefixCls = function () {
    return _this2.props.prefixCls + '-dropdown';
  };

  this.saveMenu = function (menu) {
    _this2.popupMenu = menu;
  };
};

export default SelectTrigger;