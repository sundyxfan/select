webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(353);


/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _soSelect = __webpack_require__(179);
	
	var _soSelect2 = _interopRequireDefault(_soSelect);
	
	__webpack_require__(342);
	
	var _rcDialog = __webpack_require__(354);
	
	var _rcDialog2 = _interopRequireDefault(_rcDialog);
	
	__webpack_require__(360);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Test = _react2.default.createClass({
	  displayName: 'Test',
	  getInitialState: function getInitialState() {
	    return {
	      open: false,
	      destroy: false
	    };
	  },
	  getPopupContainer: function getPopupContainer(node) {
	    return node.parentNode;
	  },
	  setVisible: function setVisible(open) {
	    this.setState({
	      open: open
	    });
	  },
	  open: function open() {
	    this.setVisible(true);
	  },
	  close: function close() {
	    this.setVisible(false);
	  },
	  destroy: function destroy() {
	    this.setState({
	      destroy: true
	    });
	  },
	  render: function render() {
	    if (this.state.destroy) {
	      return null;
	    }
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.open },
	        'open'
	      ),
	      '\xA0',
	      _react2.default.createElement(
	        'button',
	        { onClick: this.destroy },
	        'destroy'
	      ),
	      _react2.default.createElement(
	        _rcDialog2.default,
	        { visible: this.state.open, onClose: this.close },
	        _react2.default.createElement(
	          'div',
	          { style: { marginTop: 20, position: 'relative' } },
	          _react2.default.createElement(
	            _soSelect2.default,
	            {
	              placeholder: 'placeholder',
	              searchPlaceholder: 'searchPlaceholder',
	              style: { width: 200 },
	              getPopupContainer: this.getPopupContainer
	            },
	            _react2.default.createElement(
	              _soSelect.Option,
	              { value: '1' },
	              '1'
	            ),
	            _react2.default.createElement(
	              _soSelect.Option,
	              { value: '2' },
	              '2'
	            ),
	            _react2.default.createElement(
	              _soSelect.Option,
	              { value: '3' },
	              '3'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dialog = __webpack_require__(355);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _getContainerRenderMixin = __webpack_require__(359);
	
	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var DialogWrap = _react2["default"].createClass({
	    displayName: 'DialogWrap',
	
	    mixins: [(0, _getContainerRenderMixin2["default"])({
	        isVisible: function isVisible(instance) {
	            return instance.props.visible;
	        },
	
	        autoDestroy: false,
	        getComponent: function getComponent(instance, extra) {
	            return _react2["default"].createElement(_Dialog2["default"], __assign({}, instance.props, extra, { key: "dialog" }));
	        }
	    })],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            visible: false
	        };
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(_ref) {
	        var visible = _ref.visible;
	
	        return !!(this.props.visible || visible);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.props.visible) {
	            this.renderComponent({
	                afterClose: this.removeContainer,
	                onClose: function onClose() {},
	
	                visible: false
	            });
	        } else {
	            this.removeContainer();
	        }
	    },
	    getElement: function getElement(part) {
	        return this._component.getElement(part);
	    },
	    render: function render() {
	        return null;
	    }
	});
	exports["default"] = DialogWrap;
	module.exports = exports['default'];

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _KeyCode = __webpack_require__(356);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _rcAnimate = __webpack_require__(291);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _LazyRenderBox = __webpack_require__(357);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	var _getScrollBarSize = __webpack_require__(358);
	
	var _getScrollBarSize2 = _interopRequireDefault(_getScrollBarSize);
	
	var _objectAssign = __webpack_require__(5);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var uuid = 0;
	var openCount = 0;
	/* eslint react/no-is-mounted:0 */
	function noop() {}
	function getScroll(w, top) {
	    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	    var method = 'scroll' + (top ? 'Top' : 'Left');
	    if (typeof ret !== 'number') {
	        var d = w.document;
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	            ret = d.body[method];
	        }
	    }
	    return ret;
	}
	function setTransformOrigin(node, value) {
	    var style = node.style;
	    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	        style[prefix + 'TransformOrigin'] = value;
	    });
	    style['transformOrigin'] = value;
	}
	function offset(el) {
	    var rect = el.getBoundingClientRect();
	    var pos = {
	        left: rect.left,
	        top: rect.top
	    };
	    var doc = el.ownerDocument;
	    var w = doc.defaultView || doc.parentWindow;
	    pos.left += getScroll(w);
	    pos.top += getScroll(w, true);
	    return pos;
	}
	var Dialog = _react2["default"].createClass({
	    displayName: 'Dialog',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            afterClose: noop,
	            className: '',
	            mask: true,
	            visible: false,
	            keyboard: true,
	            closable: true,
	            maskClosable: true,
	            prefixCls: 'rc-dialog',
	            onClose: noop
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        this.inTransition = false;
	        this.titleId = 'rcDialogTitle' + uuid++;
	    },
	    componentDidMount: function componentDidMount() {
	        this.componentDidUpdate({});
	    },
	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        var props = this.props;
	        var mousePosition = this.props.mousePosition;
	        if (props.visible) {
	            // first show
	            if (!prevProps.visible) {
	                this.openTime = Date.now();
	                this.lastOutSideFocusNode = document.activeElement;
	                this.addScrollingEffect();
	                this.refs.wrap.focus();
	                var dialogNode = _reactDom2["default"].findDOMNode(this.refs.dialog);
	                if (mousePosition) {
	                    var elOffset = offset(dialogNode);
	                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
	                } else {
	                    setTransformOrigin(dialogNode, '');
	                }
	            }
	        } else if (prevProps.visible) {
	            this.inTransition = true;
	            if (props.mask && this.lastOutSideFocusNode) {
	                try {
	                    this.lastOutSideFocusNode.focus();
	                } catch (e) {
	                    this.lastOutSideFocusNode = null;
	                }
	                this.lastOutSideFocusNode = null;
	            }
	        }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.props.visible || this.inTransition) {
	            this.removeScrollingEffect();
	        }
	    },
	    onAnimateLeave: function onAnimateLeave() {
	        // need demo?
	        // https://github.com/react-component/dialog/pull/28
	        if (this.refs.wrap) {
	            this.refs.wrap.style.display = 'none';
	        }
	        this.inTransition = false;
	        this.removeScrollingEffect();
	        this.props.afterClose();
	    },
	    onMaskClick: function onMaskClick(e) {
	        // android trigger click on open (fastclick??)
	        if (Date.now() - this.openTime < 300) {
	            return;
	        }
	        if (e.target === e.currentTarget) {
	            this.close(e);
	        }
	    },
	    onKeyDown: function onKeyDown(e) {
	        var props = this.props;
	        if (props.keyboard && e.keyCode === _KeyCode2["default"].ESC) {
	            this.close(e);
	        }
	        // keep focus inside dialog
	        if (props.visible) {
	            if (e.keyCode === _KeyCode2["default"].TAB) {
	                var activeElement = document.activeElement;
	                var dialogRoot = this.refs.wrap;
	                var sentinel = this.refs.sentinel;
	                if (e.shiftKey) {
	                    if (activeElement === dialogRoot) {
	                        sentinel.focus();
	                    }
	                } else if (activeElement === this.refs.sentinel) {
	                    dialogRoot.focus();
	                }
	            }
	        }
	    },
	    getDialogElement: function getDialogElement() {
	        var props = this.props;
	        var closable = props.closable;
	        var prefixCls = props.prefixCls;
	        var dest = {};
	        if (props.width !== undefined) {
	            dest.width = props.width;
	        }
	        if (props.height !== undefined) {
	            dest.height = props.height;
	        }
	        var footer = void 0;
	        if (props.footer) {
	            footer = _react2["default"].createElement("div", { className: prefixCls + '-footer', ref: "footer" }, props.footer);
	        }
	        var header = void 0;
	        if (props.title) {
	            header = _react2["default"].createElement("div", { className: prefixCls + '-header', ref: "header" }, _react2["default"].createElement("div", { className: prefixCls + '-title', id: this.titleId }, props.title));
	        }
	        var closer = void 0;
	        if (closable) {
	            closer = _react2["default"].createElement("button", { onClick: this.close, "aria-label": "Close", className: prefixCls + '-close' }, _react2["default"].createElement("span", { className: prefixCls + '-close-x' }));
	        }
	        var style = (0, _objectAssign2["default"])({}, props.style, dest);
	        var transitionName = this.getTransitionName();
	        var dialogElement = _react2["default"].createElement(_LazyRenderBox2["default"], { key: "dialog-element", role: "document", ref: "dialog", style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, _react2["default"].createElement("div", { className: prefixCls + '-content' }, closer, header, _react2["default"].createElement("div", __assign({ className: prefixCls + '-body', style: props.bodyStyle, ref: "body" }, props.bodyProps), props.children), footer), _react2["default"].createElement("div", { tabIndex: 0, ref: "sentinel", style: { width: 0, height: 0, overflow: 'hidden' } }, "sentinel"));
	        return _react2["default"].createElement(_rcAnimate2["default"], { key: "dialog", showProp: "visible", onLeave: this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
	    },
	    getZIndexStyle: function getZIndexStyle() {
	        var style = {};
	        var props = this.props;
	        if (props.zIndex !== undefined) {
	            style.zIndex = props.zIndex;
	        }
	        return style;
	    },
	    getWrapStyle: function getWrapStyle() {
	        return (0, _objectAssign2["default"])({}, this.getZIndexStyle(), this.props.wrapStyle);
	    },
	    getMaskStyle: function getMaskStyle() {
	        return (0, _objectAssign2["default"])({}, this.getZIndexStyle(), this.props.maskStyle);
	    },
	    getMaskElement: function getMaskElement() {
	        var props = this.props;
	        var maskElement = void 0;
	        if (props.mask) {
	            var maskTransition = this.getMaskTransitionName();
	            maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], __assign({ style: this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
	            if (maskTransition) {
	                maskElement = _react2["default"].createElement(_rcAnimate2["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
	            }
	        }
	        return maskElement;
	    },
	    getMaskTransitionName: function getMaskTransitionName() {
	        var props = this.props;
	        var transitionName = props.maskTransitionName;
	        var animation = props.maskAnimation;
	        if (!transitionName && animation) {
	            transitionName = props.prefixCls + '-' + animation;
	        }
	        return transitionName;
	    },
	    getTransitionName: function getTransitionName() {
	        var props = this.props;
	        var transitionName = props.transitionName;
	        var animation = props.animation;
	        if (!transitionName && animation) {
	            transitionName = props.prefixCls + '-' + animation;
	        }
	        return transitionName;
	    },
	    getElement: function getElement(part) {
	        return this.refs[part];
	    },
	    setScrollbar: function setScrollbar() {
	        if (this.bodyIsOverflowing && this.scrollbarWidth !== undefined) {
	            document.body.style.paddingRight = this.scrollbarWidth + 'px';
	        }
	    },
	    addScrollingEffect: function addScrollingEffect() {
	        openCount++;
	        if (openCount !== 1) {
	            return;
	        }
	        this.checkScrollbar();
	        this.setScrollbar();
	        document.body.style.overflow = 'hidden';
	        // this.adjustDialog();
	    },
	    removeScrollingEffect: function removeScrollingEffect() {
	        openCount--;
	        if (openCount !== 0) {
	            return;
	        }
	        document.body.style.overflow = '';
	        this.resetScrollbar();
	        // this.resetAdjustments();
	    },
	    close: function close(e) {
	        this.props.onClose(e);
	    },
	    checkScrollbar: function checkScrollbar() {
	        var fullWindowWidth = window.innerWidth;
	        if (!fullWindowWidth) {
	            var documentElementRect = document.documentElement.getBoundingClientRect();
	            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	        }
	        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	        if (this.bodyIsOverflowing) {
	            this.scrollbarWidth = (0, _getScrollBarSize2["default"])();
	        }
	    },
	    resetScrollbar: function resetScrollbar() {
	        document.body.style.paddingRight = '';
	    },
	    adjustDialog: function adjustDialog() {
	        if (this.refs.wrap && this.scrollbarWidth !== undefined) {
	            var modalIsOverflowing = this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
	            this.refs.wrap.style.paddingLeft = (!this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	            this.refs.wrap.style.paddingRight = (this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	        }
	    },
	    resetAdjustments: function resetAdjustments() {
	        if (this.refs.wrap) {
	            this.refs.wrap.style.paddingLeft = this.refs.wrap.style.paddingLeft = '';
	        }
	    },
	    render: function render() {
	        var props = this.props;
	        var prefixCls = props.prefixCls,
	            maskClosable = props.maskClosable;
	
	        var style = this.getWrapStyle();
	        // clear hide display
	        // and only set display after async anim, not here for hide
	        if (props.visible) {
	            style.display = null;
	        }
	        return _react2["default"].createElement("div", null, this.getMaskElement(), _react2["default"].createElement("div", __assign({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: "wrap", onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
	    }
	});
	exports["default"] = Dialog;
	module.exports = exports['default'];

/***/ },

/***/ 356:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	exports["default"] = KeyCode;
	module.exports = exports['default'];

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(5);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var LazyRenderBox = _react2["default"].createClass({
	    displayName: 'LazyRenderBox',
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return !!nextProps.hiddenClassName || !!nextProps.visible;
	    },
	    render: function render() {
	        var className = this.props.className;
	        if (!!this.props.hiddenClassName && !this.props.visible) {
	            className += ' ' + this.props.hiddenClassName;
	        }
	        var props = (0, _objectAssign2["default"])({}, this.props);
	        delete props.hiddenClassName;
	        delete props.visible;
	        props.className = className;
	        return _react2["default"].createElement("div", __assign({}, props));
	    }
	});
	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },

/***/ 358:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getScrollBarSize;
	var cached = void 0;
	
	function getScrollBarSize(fresh) {
	  if (fresh || cached === undefined) {
	    var inner = document.createElement('div');
	    inner.style.width = '100%';
	    inner.style.height = '200px';
	
	    var outer = document.createElement('div');
	    var outerStyle = outer.style;
	
	    outerStyle.position = 'absolute';
	    outerStyle.top = 0;
	    outerStyle.left = 0;
	    outerStyle.pointerEvents = 'none';
	    outerStyle.visibility = 'hidden';
	    outerStyle.width = '200px';
	    outerStyle.height = '150px';
	    outerStyle.overflow = 'hidden';
	
	    outer.appendChild(inner);
	
	    document.body.appendChild(outer);
	
	    var widthContained = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var widthScroll = inner.offsetWidth;
	
	    if (widthContained === widthScroll) {
	      widthScroll = outer.clientWidth;
	    }
	
	    document.body.removeChild(outer);
	
	    cached = widthContained - widthScroll;
	  }
	  return cached;
	}
	module.exports = exports['default'];

/***/ },

/***/ 359:
338,

/***/ 360:
342

});
//# sourceMappingURL=getPopupContainer.js.map