import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import OptGroup from './OptGroup';
import { getValuePropValue, UNSELECTABLE_ATTRIBUTE, UNSELECTABLE_STYLE } from './util';
import { Item as MenuItem, ItemGroup as MenuItemGroup } from 'rc-menu';

export var FilterMixin = function FilterMixin(ComposedComponent) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _initialiseProps.call(_this);

      return _this;
    }

    _class.prototype.render = function render() {
      return React.createElement(ComposedComponent, _extends({}, this.props, { renderFilterOptions: this.renderFilterOptions, renderFilterOptionsFromChildren: this.renderFilterOptionsFromChildren, filterOption: this.filterOption }));
    };

    return _class;
  }(React.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.filterOption = function (input, child) {
      if (!input) {
        return true;
      }
      var filterOption = _this2.props.filterOption;
      if (!filterOption) {
        return true;
      }
      if (child.props.disabled) {
        return false;
      }
      return filterOption.call(_this2, input, child);
    };

    this.renderFilterOptions = function (inputValue) {
      return _this2.renderFilterOptionsFromChildren(_this2.props.children, true, inputValue);
    };

    this.renderFilterOptionsFromChildren = function (children, showNotFound, iv) {
      var sel = [];
      var props = _this2.props;
      var inputValue = iv === undefined ? _this2.state.inputValue : iv;
      var childrenKeys = [];
      var tags = props.tags;
      React.Children.forEach(children, function (child) {
        if (child.type === OptGroup) {
          var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, false);
          if (innerItems.length) {
            var label = child.props.label;
            var key = child.key;
            if (!key && typeof label === 'string') {
              key = label;
            } else if (!label && key) {
              label = key;
            }
            sel.push(React.createElement(
              MenuItemGroup,
              { key: key, title: label },
              innerItems
            ));
          }
          return;
        }
        var childValue = getValuePropValue(child);
        if (_this2.filterOption(inputValue, child)) {
          sel.push(React.createElement(MenuItem, _extends({
            style: UNSELECTABLE_STYLE,
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: childValue,
            key: child.key || childValue
          }, child.props)));
        }
        if (tags && !child.props.disabled) {
          childrenKeys.push(childValue);
        }
      });
      if (tags) {
        // tags value must be string
        var value = _this2.state.value || [];
        value = value.filter(function (singleValue) {
          return childrenKeys.indexOf(singleValue.key) === -1 && (!inputValue || String(singleValue.key).indexOf(String(inputValue)) > -1);
        });
        sel = sel.concat(value.map(function (singleValue) {
          var key = singleValue.key;
          return React.createElement(
            MenuItem,
            {
              style: UNSELECTABLE_STYLE,
              attribute: UNSELECTABLE_ATTRIBUTE,
              value: key,
              key: key
            },
            key
          );
        }));
        if (inputValue) {
          var notFindInputItem = sel.every(function (option) {
            return getValuePropValue(option) !== inputValue;
          });
          if (notFindInputItem) {
            sel.unshift(React.createElement(
              MenuItem,
              {
                style: UNSELECTABLE_STYLE,
                attribute: UNSELECTABLE_ATTRIBUTE,
                value: inputValue,
                key: inputValue
              },
              inputValue
            ));
          }
        }
      }
      if (!sel.length && showNotFound && props.notFoundContent) {
        sel = [React.createElement(
          MenuItem,
          {
            style: UNSELECTABLE_STYLE,
            attribute: UNSELECTABLE_ATTRIBUTE,
            disabled: true,
            value: 'NOT_FOUND',
            key: 'NOT_FOUND'
          },
          props.notFoundContent
        )];
      }
      return sel;
    };
  }, _temp;
};