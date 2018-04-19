import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { cloneElement, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { getSelectKeys, preventDefaultEvent } from './util';
import Menu, { ItemGroup as MenuItemGroup } from 'rc-menu';
import scrollIntoView from 'dom-scroll-into-view';

var DropdownMenu = function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  DropdownMenu.prototype.componentWillMount = function componentWillMount() {
    this.lastInputValue = this.props.inputValue;
  };

  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  };

  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return nextProps.visible;
  };

  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  };

  DropdownMenu.prototype.scrollActiveItemToView = function scrollActiveItemToView() {
    // scroll into view
    var itemComponent = findDOMNode(this.firstActiveItem);
    if (itemComponent) {
      scrollIntoView(itemComponent, findDOMNode(this.refs.menu), {
        onlyScrollIfNeeded: true
      });
    }
  };

  DropdownMenu.prototype.renderMenu = function renderMenu() {
    var _this2 = this;

    var props = this.props;
    var menuItems = props.menuItems,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        dropdownMenuStyle = props.dropdownMenuStyle,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        onMenuSelect = props.onMenuSelect,
        inputValue = props.inputValue;

    if (menuItems && menuItems.length) {
      var menuProps = {};
      if (multiple) {
        menuProps.onDeselect = props.onMenuDeselect;
        menuProps.onSelect = onMenuSelect;
      } else {
        menuProps.onClick = onMenuSelect;
      }

      var selectedKeys = getSelectKeys(menuItems, value);
      var activeKeyProps = {};

      var clonedMenuItems = menuItems;
      if (selectedKeys.length) {
        if (props.visible && !this.lastVisible) {
          activeKeyProps.activeKey = selectedKeys[0];
        }
        var foundFirst = false;
        // set firstActiveItem via cloning menus
        // for scroll into view
        var clone = function clone(item) {
          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1) {
            foundFirst = true;
            return cloneElement(item, {
              ref: function ref(_ref) {
                _this2.firstActiveItem = _ref;
              }
            });
          }
          return item;
        };

        clonedMenuItems = menuItems.map(function (item) {
          if (item.type === MenuItemGroup) {
            var children = item.props.children.map(clone);
            return cloneElement(item, {}, children);
          }
          return clone(item);
        });
      }

      // clear activeKey when inputValue change
      if (inputValue !== this.lastInputValue) {
        activeKeyProps.activeKey = '';
      }

      return React.createElement(
        Menu,
        _extends({
          ref: 'menu',
          defaultActiveFirst: defaultActiveFirstOption,
          style: dropdownMenuStyle
        }, activeKeyProps, {
          multiple: multiple,
          focusable: false
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: prefixCls + '-menu'
        }),
        clonedMenuItems
      );
    }
    return null;
  };

  DropdownMenu.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { onMouseDown: preventDefaultEvent },
        this.renderMenu()
      )
    );
  };

  return DropdownMenu;
}(React.Component);

export default DropdownMenu;