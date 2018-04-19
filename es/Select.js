import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { KeyCode } from 'rc-util';
import classnames from 'classnames';
import OptGroup from './OptGroup';
import Animate from 'rc-animate';
import classes from 'component-classes';
import { Item as MenuItem, ItemGroup as MenuItemGroup } from 'rc-menu';

import { getPropValue, getValuePropValue, isCombobox, isMultipleOrTags, isMultipleOrTagsOrCombobox, isSingleMode, toArray, findIndexInValueByKey, UNSELECTABLE_ATTRIBUTE, UNSELECTABLE_STYLE, preventDefaultEvent } from './util';
import SelectTrigger from './SelectTrigger';

function noop() {}

function filterFn(input, child) {
  return String(getPropValue(child, this.props.optionFilterProp)).indexOf(input) > -1;
}

function saveRef(name, component) {
  this[name] = component;
}

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var value = [];
    if ('value' in props) {
      value = toArray(props.value);
    } else {
      value = toArray(props.defaultValue);
    }
    value = _this.addLabelToValue(props, value);
    var inputValue = '';
    if (props.combobox) {
      inputValue = value.length ? String(value[0].key) : '';
    }
    _this.saveInputRef = saveRef.bind(_this, 'inputInstance');
    var open = props.open;
    if (open === undefined) {
      open = props.defaultOpen;
    }

    _this.state = {
      value: value,
      inputValue: inputValue,
      open: open
    };
    return _this;
  }

  Select.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      var value = toArray(nextProps.value);
      value = this.addLabelToValue(nextProps, value);
      this.setState({
        value: value
      });
      if (nextProps.combobox) {
        this.setState({
          inputValue: value.length ? String(value[0].key) : ''
        });
      }
    }
  };

  Select.prototype.componentDidUpdate = function componentDidUpdate() {
    var state = this.state,
        props = this.props;

    if (state.open && (isMultipleOrTags(props) || props.showSearch)) {
      var inputNode = this.getInputDOMNode();
      if (inputNode.value) {
        inputNode.style.width = '';
        inputNode.style.width = inputNode.scrollWidth + 'px';
      } else {
        inputNode.style.width = '';
      }
    }
  };

  Select.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    if (this.dropdownContainer) {
      ReactDOM.unmountComponentAtNode(this.dropdownContainer);
      document.body.removeChild(this.dropdownContainer);
      this.dropdownContainer = null;
    }
  };

  // combobox ignore


  Select.prototype.render = function render() {
    var _rootCls;

    var props = this.props;
    var multiple = isMultipleOrTags(props);
    var state = this.state;
    var className = props.className,
        disabled = props.disabled,
        allowClear = props.allowClear,
        prefixCls = props.prefixCls;

    var ctrlNode = this.renderTopControlNode();
    var extraSelectionProps = {};
    var open = this.state.open;

    var options = [];
    if (open) {
      options = this.renderFilterOptions();
    }
    if (open && (isMultipleOrTagsOrCombobox(props) || !props.showSearch) && !options.length) {
      open = false;
    }
    if (!isMultipleOrTagsOrCombobox(props)) {
      extraSelectionProps = {
        onKeyDown: this.onKeyDown,
        tabIndex: 0
      };
    }
    var rootCls = (_rootCls = {}, _rootCls[className] = !!className, _rootCls[prefixCls] = 1, _rootCls[prefixCls + '-open'] = open, _rootCls[prefixCls + '-focused'] = open || !!this._focused, _rootCls[prefixCls + '-combobox'] = isCombobox(props), _rootCls[prefixCls + '-disabled'] = disabled, _rootCls[prefixCls + '-enabled'] = !disabled, _rootCls);

    var clear = React.createElement('span', {
      key: 'clear',
      className: prefixCls + '-selection__clear',
      onClick: this.onClearSelection });
    return React.createElement(
      SelectTrigger,
      {
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        multiple: multiple,
        disabled: disabled,
        visible: open,
        inputValue: state.inputValue,
        value: state.value,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        ref: 'trigger'
      },
      React.createElement(
        'div',
        {
          style: props.style,
          ref: 'root',
          onBlur: this.onOuterBlur,
          onFocus: this.onOuterFocus,
          className: classnames(rootCls)
        },
        React.createElement(
          'div',
          _extends({
            ref: 'selection',
            key: 'selection',
            className: prefixCls + '-selection\n            ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
            role: 'combobox',
            'aria-autocomplete': 'list',
            'aria-haspopup': 'true',
            'aria-expanded': open
          }, extraSelectionProps),
          ctrlNode,
          allowClear && !multiple ? clear : null,
          !props.showArrow ? null : React.createElement(
            'span',
            {
              key: 'arrow',
              className: prefixCls + '-arrow',
              style: { outline: 'none' }
            },
            React.createElement('b', null)
          ),
          this.getSearchPlaceholderElement(!!this.state.inputValue || this.state.value.length)
        )
      )
    );
  };

  return Select;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onInputChange = function (event) {
    var val = event.target.value;
    var props = _this2.props;

    _this2.setState({
      inputValue: val,
      open: true
    });
    if (isCombobox(props) && val !== '') {
      _this2.fireChange([{
        key: val
      }]);
    }
    if (val === '') {
      _this2.fireChange([]);
    }
    if (props.onSearch) {
      props.onSearch(val);
    }
  };

  this.onDropdownVisibleChange = function (open) {
    // selection inside combobox cause click
    if (!open && document.activeElement === _this2.getInputDOMNode()) {
      return;
    }
    _this2.setOpenState(open);
  };

  this.onKeyDown = function (event) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var keyCode = event.keyCode;
    if (_this2.state.open && !_this2.getInputDOMNode()) {
      _this2.onInputKeyDown(event);
    } else if (keyCode === KeyCode.ENTER || keyCode === KeyCode.DOWN) {
      _this2.setOpenState(true);
      event.preventDefault();
    }
  };

  this.onInputBlur = function () {
    if (isMultipleOrTagsOrCombobox(_this2.props)) {
      return;
    }
    _this2.clearDelayTimer();
    _this2.delayTimer = setTimeout(function () {
      _this2.setOpenState(false);
    }, 150);
  };

  this.onInputKeyDown = function (event) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var state = _this2.state;
    var keyCode = event.keyCode;
    if (isMultipleOrTags(props) && !event.target.value && keyCode === KeyCode.BACKSPACE) {
      var value = state.value.concat();
      if (value.length) {
        var popValue = value.pop();
        props.onDeselect(props.labelInValue ? popValue : popValue.key);
        _this2.fireChange(value);
      }
      return;
    }
    if (keyCode === KeyCode.DOWN) {
      if (!state.open) {
        _this2.openIfHasChildren();
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    } else if (keyCode === KeyCode.ESC) {
      if (state.open) {
        _this2.setOpenState(false);
        event.preventDefault();
        event.stopPropagation();
      }
      return;
    }

    if (state.open) {
      var menu = _this2.refs.trigger.getInnerMenu();
      if (menu && menu.onKeyDown(event)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  this.onMenuSelect = function (_ref) {
    var item = _ref.item;

    var value = _this2.state.value;
    var props = _this2.props;
    var selectedValue = getValuePropValue(item);
    var selectedLabel = _this2.getLabelFromOption(item);
    var event = selectedValue;
    if (props.labelInValue) {
      event = {
        key: event,
        label: selectedLabel
      };
    }
    props.onSelect(event, item);
    if (isMultipleOrTags(props)) {
      if (findIndexInValueByKey(value, selectedValue) !== -1) {
        return;
      }
      value = value.concat([{
        key: selectedValue,
        label: selectedLabel
      }]);
    } else {
      if (value.length && value[0].key === selectedValue) {
        _this2.setOpenState(false, true);
        return;
      }
      value = [{
        key: selectedValue,
        label: selectedLabel
      }];
      _this2.setOpenState(false, true);
    }
    _this2.fireChange(value);
    _this2.setState({
      inputValue: ''
    });
    if (isCombobox(props)) {
      _this2.setState({
        inputValue: getPropValue(item, props.optionLabelProp)
      });
    }
  };

  this.onMenuDeselect = function (_ref2) {
    var item = _ref2.item,
        domEvent = _ref2.domEvent;

    if (domEvent.type === 'click') {
      _this2.removeSelected(getValuePropValue(item));
    }
    _this2.setState({
      inputValue: ''
    });
  };

  this.onPlaceholderClick = function () {
    _this2.getInputDOMNode().focus();
  };

  this.onOuterFocus = function () {
    _this2._focused = true;
    _this2.updateFocusClassName();
  };

  this.onOuterBlur = function () {
    _this2._focused = false;
    _this2.updateFocusClassName();
  };

  this.onClearSelection = function (event) {
    var props = _this2.props;
    var state = _this2.state;
    if (props.disabled) {
      return;
    }
    event.stopPropagation();
    if (state.inputValue || state.value.length) {
      _this2.fireChange([]);
      _this2.setOpenState(false);
      _this2.setState({
        inputValue: ''
      });
    }
  };

  this.getLabelBySingleValue = function (children, value) {
    if (value === undefined) {
      return null;
    }
    var label = null;
    React.Children.forEach(children, function (child) {
      if (child.type === OptGroup) {
        var maybe = _this2.getLabelBySingleValue(child.props.children, value);
        if (maybe !== null) {
          label = maybe;
        }
      } else if (getValuePropValue(child) === value) {
        label = _this2.getLabelFromOption(child);
      }
    });
    return label;
  };

  this.getLabelFromOption = function (child) {
    return getPropValue(child, _this2.props.optionLabelProp);
  };

  this.getLabelFromProps = function (props, value) {
    return _this2.getLabelByValue(props.children, value);
  };

  this.getVLForOnChange = function (vls_) {
    var vls = vls_;
    if (vls !== undefined) {
      if (!_this2.props.labelInValue) {
        vls = vls.map(function (v) {
          return v.key;
        });
      }
      return isMultipleOrTags(_this2.props) ? vls : vls[0];
    }
    return vls;
  };

  this.getLabelByValue = function (children, value) {
    var label = _this2.getLabelBySingleValue(children, value);
    if (label === null) {
      return value;
    }
    return label;
  };

  this.getDropdownContainer = function () {
    if (!_this2.dropdownContainer) {
      _this2.dropdownContainer = document.createElement('div');
      document.body.appendChild(_this2.dropdownContainer);
    }
    return _this2.dropdownContainer;
  };

  this.getSearchPlaceholderElement = function (hidden) {
    var props = _this2.props;
    var placeholder = void 0;
    if (isMultipleOrTagsOrCombobox(props)) {
      placeholder = props.placeholder || props.searchPlaceholder;
    } else {
      placeholder = props.searchPlaceholder;
    }
    if (placeholder) {
      return React.createElement(
        'div',
        _extends({
          onMouseDown: preventDefaultEvent,
          style: _extends({
            display: hidden ? 'none' : 'block'
          }, UNSELECTABLE_STYLE)
        }, UNSELECTABLE_ATTRIBUTE, {
          onClick: _this2.onPlaceholderClick,
          className: props.prefixCls + '-search__field__placeholder'
        }),
        placeholder
      );
    }
    return null;
  };

  this.getInputElement = function () {
    var props = _this2.props;
    var shouldShowPlaceholder = isMultipleOrTags(props) || props.showSearch;
    return React.createElement(
      'div',
      { className: props.prefixCls + '-search__field__wrap' },
      React.createElement('input', {
        ref: _this2.saveInputRef,
        onBlur: _this2.onInputBlur,
        onChange: _this2.onInputChange,
        onKeyDown: _this2.onInputKeyDown,
        value: _this2.state.inputValue,
        disabled: props.disabled,
        className: props.prefixCls + '-search__field',
        role: 'textbox'
      }),
      shouldShowPlaceholder ? null : _this2.getSearchPlaceholderElement(!!_this2.state.inputValue)
    );
  };

  this.getInputDOMNode = function () {
    return _this2.inputInstance;
  };

  this.getPopupDOMNode = function () {
    return _this2.refs.trigger.getPopupDOMNode();
  };

  this.getPopupMenuComponent = function () {
    return _this2.refs.trigger.getInnerMenu();
  };

  this.setOpenState = function (open, needFocus) {
    _this2.clearDelayTimer();
    var props = _this2.props,
        state = _this2.state;

    if (state.open === open) {
      _this2.afterOpen(open, needFocus);
      return;
    }
    var nextState = {
      open: open
    };
    // clear search input value when open is false in singleMode.
    if (!open && isSingleMode(props) && props.showSearch) {
      nextState.inputValue = '';
    }
    _this2.setState(nextState, function () {
      _this2.afterOpen(open, needFocus);
    });
  };

  this.updateFocusClassName = function () {
    var refs = _this2.refs,
        props = _this2.props;
    // avoid setState and its side effect

    if (_this2._focused || _this2.state.open) {
      classes(refs.root).add(props.prefixCls + '-focused');
    } else {
      classes(refs.root).remove(props.prefixCls + '-focused');
    }
  };

  this.afterOpen = function (open, needFocus) {
    var props = _this2.props,
        refs = _this2.refs;

    if (needFocus || open) {
      if (open || isMultipleOrTagsOrCombobox(props)) {
        var input = _this2.getInputDOMNode();
        if (input && document.activeElement !== input) {
          input.focus();
        }
      } else if (refs.selection) {
        refs.selection.focus();
      }
    }
  };

  this.addLabelToValue = function (props, value_) {
    var value = value_;
    if (props.labelInValue) {
      value.forEach(function (v) {
        v.label = v.label || _this2.getLabelFromProps(props, v.key);
      });
    } else {
      value = value.map(function (v) {
        return {
          key: v,
          label: _this2.getLabelFromProps(props, v)
        };
      });
    }
    return value;
  };

  this.clearDelayTimer = function () {
    if (_this2.delayTimer) {
      clearTimeout(_this2.delayTimer);
      _this2.delayTimer = null;
    }
  };

  this.removeSelected = function (selectedKey) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var label = void 0;
    var value = _this2.state.value.filter(function (singleValue) {
      if (singleValue.key === selectedKey) {
        label = singleValue.label;
      }
      return singleValue.key !== selectedKey;
    });
    var canMultiple = isMultipleOrTags(props);

    if (canMultiple) {
      var event = selectedKey;
      if (props.labelInValue) {
        event = {
          key: selectedKey,
          label: label
        };
      }
      props.onDeselect(event);
    }
    _this2.fireChange(value);
  };

  this.openIfHasChildren = function () {
    var props = _this2.props;
    if (React.Children.count(props.children) || isSingleMode(props)) {
      _this2.setOpenState(true);
    }
  };

  this.fireChange = function (value) {
    var props = _this2.props;
    if (!('value' in props)) {
      _this2.setState({
        value: value
      });
    }
    props.onChange(_this2.getVLForOnChange(value));
  };

  this.renderTopControlNode = function () {
    var _state = _this2.state,
        value = _state.value,
        open = _state.open,
        inputValue = _state.inputValue;

    var props = _this2.props;
    var choiceTransitionName = props.choiceTransitionName,
        prefixCls = props.prefixCls,
        maxTagTextLength = props.maxTagTextLength,
        showSearch = props.showSearch;
    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13

    if (isSingleMode(props)) {
      var innerNode = null;
      var selectedValue = null;
      if (!value.length) {
        selectedValue = React.createElement(
          'div',
          {
            key: 'placeholder',
            className: prefixCls + '-selection__placeholder'
          },
          props.placeholder
        );
      } else {
        selectedValue = React.createElement(
          'div',
          { key: 'value', className: prefixCls + '-selection-selected-value' },
          value[0].label
        );
      }
      if (!showSearch || !open) {
        innerNode = selectedValue;
      } else {
        innerNode = React.createElement(
          'div',
          {
            className: prefixCls + '-search ' + prefixCls + '-search--inline',
            key: 'input'
          },
          !!inputValue ? null : selectedValue,
          _this2.getInputElement()
        );
      }
      return React.createElement(
        'div',
        { className: prefixCls + '-selection__rendered' },
        innerNode
      );
    }

    var selectedValueNodes = [];
    if (isMultipleOrTags(props)) {
      selectedValueNodes = value.map(function (singleValue) {
        var content = singleValue.label;
        var title = content;
        if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
          content = content.slice(0, maxTagTextLength) + '...';
        }
        return React.createElement(
          'li',
          _extends({
            style: UNSELECTABLE_STYLE
          }, UNSELECTABLE_ATTRIBUTE, {
            onMouseDown: preventDefaultEvent,
            className: prefixCls + '-selection__choice',
            key: singleValue.key,
            title: title
          }),
          React.createElement(
            'div',
            { className: prefixCls + '-selection__choice__content' },
            content
          ),
          React.createElement('span', {
            className: prefixCls + '-selection__choice__remove',
            onClick: _this2.removeSelected.bind(_this2, singleValue.key)
          })
        );
      });
    }
    selectedValueNodes.push(React.createElement(
      'li',
      {
        className: prefixCls + '-search ' + prefixCls + '-search--inline',
        key: '__input'
      },
      _this2.getInputElement()
    ));
    var className = prefixCls + '-selection__rendered';
    if (isMultipleOrTags(props) && choiceTransitionName) {
      return React.createElement(
        Animate,
        {
          className: className,
          component: 'ul',
          transitionName: choiceTransitionName
        },
        selectedValueNodes
      );
    }
    return React.createElement(
      'ul',
      { className: className },
      selectedValueNodes
    );
  };

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
};

Select.defaultProps = {
  prefixCls: 'rc-select',
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  searchPlaceholder: '',
  defaultValue: [],
  onChange: noop,
  onSelect: noop,
  onSearch: noop,
  onDeselect: noop,
  showArrow: true,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found'
};

export default Select;