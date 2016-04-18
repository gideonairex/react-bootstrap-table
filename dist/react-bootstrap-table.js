(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _BootstrapTable = __webpack_require__(1);
	
	var _BootstrapTable2 = _interopRequireDefault(_BootstrapTable);
	
	var _TableHeaderColumn = __webpack_require__(40);
	
	var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);
	
	var _storeTableDataStore = __webpack_require__(33);
	
	if (typeof window !== 'undefined') {
	  window.BootstrapTable = _BootstrapTable2['default'];
	  window.TableHeaderColumn = _TableHeaderColumn2['default'];
	  window.TableDataSet = _storeTableDataStore.TableDataSet;
	}
	exports['default'] = {
	  BootstrapTable: _BootstrapTable2['default'],
	  TableHeaderColumn: _TableHeaderColumn2['default'],
	  TableDataSet: _storeTableDataStore.TableDataSet
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _TableHeader = __webpack_require__(5);
	
	var _TableHeader2 = _interopRequireDefault(_TableHeader);
	
	var _TableBody = __webpack_require__(9);
	
	var _TableBody2 = _interopRequireDefault(_TableBody);
	
	var _paginationPaginationList = __webpack_require__(29);
	
	var _paginationPaginationList2 = _interopRequireDefault(_paginationPaginationList);
	
	var _toolbarToolBar = __webpack_require__(31);
	
	var _toolbarToolBar2 = _interopRequireDefault(_toolbarToolBar);
	
	var _TableFilter = __webpack_require__(32);
	
	var _TableFilter2 = _interopRequireDefault(_TableFilter);
	
	var _storeTableDataStore = __webpack_require__(33);
	
	var _csv_export_util = __webpack_require__(35);
	
	var _csv_export_util2 = _interopRequireDefault(_csv_export_util);
	
	var _Filter = __webpack_require__(39);
	
	var BootstrapTable = (function (_React$Component) {
	  _inherits(BootstrapTable, _React$Component);
	
	  function BootstrapTable(props) {
	    var _this = this;
	
	    _classCallCheck(this, BootstrapTable);
	
	    _get(Object.getPrototypeOf(BootstrapTable.prototype), 'constructor', this).call(this, props);
	
	    this._scrollHeader = function (e) {
	      _this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
	    };
	
	    this._adjustHeaderWidth = function () {
	      var tableHeaderDom = _this.refs.header.refs.container.childNodes[0];
	      var tableBodyDom = _this.refs.body.refs.container.childNodes[0];
	      if (tableHeaderDom.offsetWidth !== tableBodyDom.offsetWidth) {
	        tableHeaderDom.style.width = tableBodyDom.offsetWidth + "px";
	      }
	      var headerProps = _this.refs.body.getBodyHeaderDomProp();
	      _this.refs.header.fitHeader(headerProps, _this.refs.body.refs.container.scrollHeight > _this.refs.body.refs.container.clientHeight);
	    };
	
	    this._attachCellEditFunc();
	
	    if (!Array.isArray(this.props.data)) {
	      this.store = new _storeTableDataStore.TableDataStore(this.props.data.getData());
	      this.props.data.clear();
	      this.props.data.on('change', function (data) {
	        _this.store.setData(data);
	        _this.setState({
	          data: _this.getTableData()
	        });
	      });
	    } else {
	      var copy = this.props.data.slice();
	      this.store = new _storeTableDataStore.TableDataStore(copy);
	    }
	
	    this.initTable(this.props);
	
	    if (this.filter) {
	      (function () {
	        var self = _this;
	        _this.filter.on('onFilterChange', function (currentFilter) {
	          self.handleFilterData(currentFilter);
	        });
	      })();
	    }
	
	    if (this.props.selectRow && this.props.selectRow.selected) {
	      var copy = this.props.selectRow.selected.slice();
	      this.store.setSelectedRowKey(copy);
	    }
	
	    this.state = {
	      data: this.getTableData(),
	      currPage: this.props.options.page || 1,
	      sizePerPage: this.props.options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0],
	      selectedRowKeys: this.store.getSelectedRowKeys()
	    };
	  }
	
	  _createClass(BootstrapTable, [{
	    key: 'initTable',
	    value: function initTable(props) {
	      var _this2 = this;
	
	      var keyField = props.keyField;
	
	      var isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
	      _react2['default'].Children.forEach(props.children, function (column) {
	        if (column.props.isKey) {
	          if (keyField) {
	            throw "Error. Multiple key column be detected in TableHeaderColumn.";
	          }
	          keyField = column.props.dataField;
	        }
	        if (column.props.filter) {
	          // a column contains a filter
	          if (!_this2.filter) {
	            // first time create the filter on the BootstrapTable
	            _this2.filter = new _Filter.Filter();
	          }
	          // pass the filter to column with filter
	          column.props.filter.emitter = _this2.filter;
	        }
	      }, this);
	
	      var colInfos = this.getColumnsDescription(props).reduce(function (prev, curr) {
	        prev[curr.name] = curr;
	        return prev;
	      }, {});
	
	      if (!isKeyFieldDefined && !keyField) throw 'Error. No any key column defined in TableHeaderColumn.\n            Use \'isKey={true}\' to specify a unique column after version 0.5.4.';
	
	      this.store.setProps({
	        isPagination: props.pagination,
	        keyField: keyField,
	        colInfos: colInfos,
	        multiColumnSearch: props.multiColumnSearch,
	        remote: this.isRemoteDataSource()
	      });
	    }
	  }, {
	    key: 'getTableData',
	    value: function getTableData() {
	      var result = [];
	
	      if (this.props.options.sortName && this.props.options.sortOrder) this.store.sort(this.props.options.sortOrder, this.props.options.sortName);
	
	      if (this.props.pagination) {
	        var page = undefined,
	            sizePerPage = undefined;
	        if (this.store.isChangedPage()) {
	          sizePerPage = this.state.sizePerPage;
	          page = this.state.currPage;
	        } else {
	          sizePerPage = this.props.options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0];
	          page = this.props.options.page || 1;
	        }
	        result = this.store.page(page, sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      return result;
	    }
	  }, {
	    key: 'getColumnsDescription',
	    value: function getColumnsDescription(_ref) {
	      var children = _ref.children;
	
	      return _react2['default'].Children.map(children, function (column, i) {
	        return {
	          name: column.props.dataField,
	          align: column.props.dataAlign,
	          sort: column.props.dataSort,
	          format: column.props.dataFormat,
	          formatExtraData: column.props.formatExtraData,
	          filterFormatted: column.props.filterFormatted,
	          editable: column.props.editable,
	          hidden: column.props.hidden,
	          searchable: column.props.searchable,
	          className: column.props.columnClassName,
	          width: column.props.width,
	          text: column.props.children,
	          sortFunc: column.props.sortFunc,
	          index: i
	        };
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.initTable(nextProps);
	      if (Array.isArray(nextProps.data)) {
	        this.store.setData(nextProps.data.slice());
	        var page = nextProps.options.page || this.state.currPage;
	        var sizePerPage = nextProps.options.sizePerPage || this.state.sizePerPage;
	
	        // #125
	        if (!nextProps.options.page && page >= Math.ceil(nextProps.data.length / sizePerPage)) {
	          page = 1;
	        }
	        var sortInfo = this.store.getSortInfo();
	        var sortField = nextProps.options.sortName || (sortInfo ? sortInfo.sortField : undefined);
	        var sortOrder = nextProps.options.sortOrder || (sortInfo ? sortInfo.order : undefined);
	        if (sortField && sortOrder) this.store.sort(sortOrder, sortField);
	        var data = this.store.page(page, sizePerPage).get();
	        this.setState({
	          data: data,
	          currPage: page,
	          sizePerPage: sizePerPage
	        });
	      }
	      if (nextProps.selectRow && nextProps.selectRow.selected) {
	        //set default select rows to store.
	        var copy = nextProps.selectRow.selected.slice();
	        this.store.setSelectedRowKey(copy);
	        this.setState({
	          selectedRowKeys: copy
	        });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._adjustHeaderWidth();
	      window.addEventListener('resize', this._adjustHeaderWidth);
	      this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this._adjustHeaderWidth);
	      this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader);
	      if (this.filter) {
	        this.filter.removeAllListeners("onFilterChange");
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._adjustHeaderWidth();
	      this._attachCellEditFunc();
	      if (this.props.options.afterTableComplete) this.props.options.afterTableComplete();
	    }
	  }, {
	    key: '_attachCellEditFunc',
	    value: function _attachCellEditFunc() {
	      if (this.props.cellEdit) {
	        this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
	        if (this.props.cellEdit.mode !== _Const2['default'].CELL_EDIT_NONE) this.props.selectRow.clickToSelect = false;
	      }
	    }
	
	    /**
	     * Returns true if in the current configuration,
	     * the datagrid should load its data remotely.
	     *
	     * @param  {Object}  [props] Optional. If not given, this.props will be used
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isRemoteDataSource',
	    value: function isRemoteDataSource(props) {
	      return (props || this.props).remote;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var tableClass = (0, _classnames2['default'])("react-bs-table");
	      var childrens = this.props.children;
	      var style = {
	        height: this.props.height,
	        maxHeight: this.props.maxHeight
	      };
	      if (!Array.isArray(this.props.children)) {
	        childrens = [this.props.children];
	      }
	      var columns = this.getColumnsDescription(this.props);
	      var sortInfo = this.store.getSortInfo();
	      var pagination = this.renderPagination();
	      var toolBar = this.renderToolBar();
	      var tableFilter = this.renderTableFilter(columns);
	      var isSelectAll = this.isSelectAll();
	      var sortIndicator = this.props.options.sortIndicator;
	      if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;
	      return _react2['default'].createElement(
	        'div',
	        { className: 'react-bs-container', ref: 'table' },
	        toolBar,
	        _react2['default'].createElement(
	          'div',
	          { className: 'react-bs-table-container',
	            onMouseEnter: this.handleMouseEnter.bind(this),
	            onMouseLeave: this.handleMouseLeave.bind(this),
	            style: style },
	          _react2['default'].createElement(
	            _TableHeader2['default'],
	            {
	              ref: 'header',
	              rowSelectType: this.props.selectRow.mode,
	              hideSelectColumn: this.props.selectRow.hideSelectColumn,
	              sortName: sortInfo ? sortInfo.sortField : undefined,
	              sortOrder: sortInfo ? sortInfo.order : undefined,
	              sortIndicator: sortIndicator,
	              onSort: this.handleSort.bind(this),
	              onSelectAllRow: this.handleSelectAllRow.bind(this),
	              bordered: this.props.bordered,
	              condensed: this.props.condensed,
	              isFiltered: this.filter ? true : false,
	              isSelectAll: isSelectAll },
	            this.props.children
	          ),
	          _react2['default'].createElement(_TableBody2['default'], {
	            height: this.props.height,
	            maxHeight: this.props.maxHeight,
	            ref: 'body',
	            data: this.state.data,
	            columns: columns,
	            trClassName: this.props.trClassName,
	            striped: this.props.striped,
	            bordered: this.props.bordered,
	            hover: this.props.hover,
	            keyField: this.store.getKeyField(),
	            condensed: this.props.condensed,
	            selectRow: this.props.selectRow,
	            cellEdit: this.props.cellEdit,
	            selectedRowKeys: this.state.selectedRowKeys,
	            onRowClick: this.handleRowClick.bind(this),
	            onRowMouseOver: this.handleRowMouseOver.bind(this),
	            onRowMouseOut: this.handleRowMouseOut.bind(this),
	            onSelectRow: this.handleSelectRow.bind(this),
	            noDataText: this.props.options.noDataText
	          })
	        ),
	        tableFilter,
	        pagination
	      );
	    }
	  }, {
	    key: 'isSelectAll',
	    value: function isSelectAll() {
	      var defaultSelectRowKeys = this.store.getSelectedRowKeys();
	      var allRowKeys = this.store.getAllRowkey();
	      if (defaultSelectRowKeys.length !== allRowKeys.length) {
	        return defaultSelectRowKeys.length === 0 ? false : 'indeterminate';
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: 'cleanSelected',
	    value: function cleanSelected() {
	      this.store.setSelectedRowKey([]);
	      this.setState({
	        selectedRowKeys: []
	      });
	    }
	  }, {
	    key: 'handleSort',
	    value: function handleSort(order, sortField) {
	      if (this.props.options.onSortChange) {
	        this.props.options.onSortChange(sortField, order, this.props);
	      }
	
	      var result = this.store.sort(order, sortField).get();
	      this.setState({
	        data: result
	      });
	    }
	  }, {
	    key: 'handlePaginationData',
	    value: function handlePaginationData(page, sizePerPage) {
	      var onPageChange = this.props.options.onPageChange;
	
	      if (onPageChange) {
	        onPageChange(page, sizePerPage);
	      }
	
	      if (this.isRemoteDataSource()) {
	        return;
	      }
	
	      var result = this.store.page(page, sizePerPage).get();
	      this.setState({
	        data: result,
	        currPage: page,
	        sizePerPage: sizePerPage
	      });
	    }
	  }, {
	    key: 'handleMouseLeave',
	    value: function handleMouseLeave() {
	      if (this.props.options.onMouseLeave) {
	        this.props.options.onMouseLeave();
	      }
	    }
	  }, {
	    key: 'handleMouseEnter',
	    value: function handleMouseEnter() {
	      if (this.props.options.onMouseEnter) {
	        this.props.options.onMouseEnter();
	      }
	    }
	  }, {
	    key: 'handleRowMouseOut',
	    value: function handleRowMouseOut(row) {
	      if (this.props.options.onRowMouseOut) {
	        this.props.options.onRowMouseOut(row);
	      }
	    }
	  }, {
	    key: 'handleRowMouseOver',
	    value: function handleRowMouseOver(row) {
	      if (this.props.options.onRowMouseOver) {
	        this.props.options.onRowMouseOver(row);
	      }
	    }
	  }, {
	    key: 'handleRowClick',
	    value: function handleRowClick(row) {
	      if (this.props.options.onRowClick) {
	        this.props.options.onRowClick(row);
	      }
	    }
	  }, {
	    key: 'handleSelectAllRow',
	    value: function handleSelectAllRow(e) {
	      var isSelected = e.currentTarget.checked;
	      var selectedRowKeys = [];
	      var result = true;
	      if (this.props.selectRow.onSelectAll) {
	        result = this.props.selectRow.onSelectAll(isSelected, isSelected ? this.store.get() : []);
	      }
	
	      if (typeof result === 'undefined' || result !== false) {
	        if (isSelected) {
	          selectedRowKeys = this.store.getAllRowkey();
	        }
	
	        this.store.setSelectedRowKey(selectedRowKeys);
	        this.setState({
	          selectedRowKeys: selectedRowKeys
	        });
	      }
	    }
	  }, {
	    key: 'handleShowOnlySelected',
	    value: function handleShowOnlySelected() {
	      this.store.ignoreNonSelected();
	      var result = undefined;
	      if (this.props.pagination) {
	        result = this.store.page(1, this.state.sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      this.setState({
	        data: result,
	        currPage: 1
	      });
	    }
	  }, {
	    key: 'handleSelectRow',
	    value: function handleSelectRow(row, isSelected) {
	      var currSelected = this.store.getSelectedRowKeys();
	      var rowKey = row[this.store.getKeyField()];
	      var result = true;
	      if (this.props.selectRow.onSelect) {
	        result = this.props.selectRow.onSelect(row, isSelected);
	      }
	
	      if (typeof result === 'undefined' || result !== false) {
	        if (this.props.selectRow.mode === _Const2['default'].ROW_SELECT_SINGLE) {
	          currSelected = isSelected ? [rowKey] : [];
	        } else {
	          if (isSelected) {
	            currSelected.push(rowKey);
	          } else {
	            currSelected = currSelected.filter(function (key) {
	              return rowKey !== key;
	            });
	          }
	        }
	
	        this.store.setSelectedRowKey(currSelected);
	        this.setState({
	          selectedRowKeys: currSelected
	        });
	      }
	    }
	  }, {
	    key: 'handleEditCell',
	    value: function handleEditCell(newVal, rowIndex, colIndex) {
	      var fieldName = undefined;
	      _react2['default'].Children.forEach(this.props.children, function (column, i) {
	        if (i == colIndex) {
	          fieldName = column.props.dataField;
	          return false;
	        }
	      });
	
	      var result = this.store.edit(newVal, rowIndex, fieldName).get();
	      this.setState({
	        data: result
	      });
	
	      if (this.props.cellEdit.afterSaveCell) {
	        this.props.cellEdit.afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
	      }
	    }
	  }, {
	    key: 'handleAddRowBegin',
	    value: function handleAddRowBegin() {
	      if (this.refs.body) {
	        // this.refs.body.cancelEdit();
	      }
	    }
	  }, {
	    key: 'handleAddRowAtBegin',
	    value: function handleAddRowAtBegin(newObj) {
	      var result = undefined;
	      try {
	        this.store.addAtBegin(newObj);
	      } catch (e) {
	        return e;
	      }
	      this._handleAfterAddingRow(newObj);
	    }
	  }, {
	    key: 'handleAddRow',
	    value: function handleAddRow(newObj) {
	      var result = undefined;
	      try {
	        this.store.add(newObj);
	      } catch (e) {
	        return e;
	      }
	      this._handleAfterAddingRow(newObj);
	    }
	  }, {
	    key: 'getSizePerPage',
	    value: function getSizePerPage() {
	      return this.state.sizePerPage;
	    }
	  }, {
	    key: 'getCurrentPage',
	    value: function getCurrentPage() {
	      return this.state.currPage;
	    }
	  }, {
	    key: 'handleDropRow',
	    value: function handleDropRow(rowKeys) {
	      var that = this;
	      var dropRowKeys = rowKeys ? rowKeys : this.store.getSelectedRowKeys();
	      //add confirm before the delete action if that option is set.
	      if (dropRowKeys && dropRowKeys.length > 0) {
	        if (this.props.options.handleConfirmDeleteRow) {
	          this.props.options.handleConfirmDeleteRow(function () {
	            that.deleteRow(dropRowKeys);
	          });
	        } else if (confirm('Are you sure want delete?')) {
	          this.deleteRow(dropRowKeys);
	        }
	      }
	    }
	  }, {
	    key: 'deleteRow',
	    value: function deleteRow(dropRowKeys) {
	
	      var result = undefined;
	      this.store.remove(dropRowKeys); //remove selected Row
	      this.store.setSelectedRowKey([]); //clear selected row key
	
	      if (this.props.pagination) {
	        var sizePerPage = this.state.sizePerPage;
	        var currPage = this.state.currPage;
	
	        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
	        if (currPage > currLastPage) currPage = currLastPage;
	        result = this.store.page(currPage, sizePerPage).get();
	        this.setState({
	          data: result,
	          selectedRowKeys: this.store.getSelectedRowKeys(),
	          currPage: currPage
	        });
	      } else {
	        result = this.store.get();
	        this.setState({
	          data: result,
	          selectedRowKeys: this.store.getSelectedRowKeys()
	        });
	      }
	      if (this.props.options.afterDeleteRow) {
	        this.props.options.afterDeleteRow(dropRowKeys);
	      }
	    }
	  }, {
	    key: 'handleFilterData',
	    value: function handleFilterData(filterObj) {
	      this.store.filter(filterObj);
	      var result = undefined;
	      if (this.props.pagination) {
	        var sizePerPage = this.state.sizePerPage;
	
	        result = this.store.page(1, sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      if (this.props.options.afterColumnFilter) this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
	      this.setState({
	        data: result,
	        currPage: 1
	      });
	    }
	  }, {
	    key: 'handleExportCSV',
	    value: function handleExportCSV() {
	      var result = this.store.getDataIgnoringPagination();
	      var keys = [];
	      this.props.children.map(function (column) {
	        if (column.props.hidden === false) {
	          keys.push(column.props.dataField);
	        }
	      });
	      (0, _csv_export_util2['default'])(result, keys, this.props.csvFileName);
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(searchText) {
	      this.store.search(searchText);
	      var result = undefined;
	      if (this.props.pagination) {
	        var sizePerPage = this.state.sizePerPage;
	
	        result = this.store.page(1, sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      if (this.props.options.afterSearch) this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
	      this.setState({
	        data: result,
	        currPage: 1
	      });
	    }
	  }, {
	    key: 'renderPagination',
	    value: function renderPagination() {
	      if (this.props.pagination) {
	        var dataSize = undefined;
	        if (this.isRemoteDataSource()) {
	          dataSize = this.props.fetchInfo.dataTotalSize;
	        } else {
	          dataSize = this.store.getDataNum();
	        }
	        return _react2['default'].createElement(
	          'div',
	          { className: 'table-footer-pagination' },
	          _react2['default'].createElement(_paginationPaginationList2['default'], {
	            ref: 'pagination',
	            currPage: this.state.currPage,
	            changePage: this.handlePaginationData.bind(this),
	            sizePerPage: this.state.sizePerPage,
	            sizePerPageList: this.props.options.sizePerPageList || _Const2['default'].SIZE_PER_PAGE_LIST,
	            paginationSize: this.props.options.paginationSize || _Const2['default'].PAGINATION_SIZE,
	            remote: this.isRemoteDataSource(),
	            dataSize: dataSize,
	            onSizePerPageList: this.props.options.onSizePerPageList,
	            prePage: this.props.options.prePage || _Const2['default'].PRE_PAGE,
	            nextPage: this.props.options.nextPage || _Const2['default'].NEXT_PAGE,
	            firstPage: this.props.options.firstPage || _Const2['default'].FIRST_PAGE,
	            lastPage: this.props.options.lastPage || _Const2['default'].LAST_PAGE
	          })
	        );
	      }
	      return null;
	    }
	  }, {
	    key: 'renderToolBar',
	    value: function renderToolBar() {
	      var enableShowOnlySelected = this.props.selectRow && this.props.selectRow.showOnlySelected;
	      if (enableShowOnlySelected || this.props.insertRow || this.props.deleteRow || this.props.search || this.props.exportCSV) {
	        var columns = undefined;
	        if (Array.isArray(this.props.children)) {
	          columns = this.props.children.map(function (column) {
	            var props = column.props;
	            return {
	              name: props.children,
	              field: props.dataField,
	              //when you want same auto generate value and not allow edit, example ID field
	              autoValue: props.autoValue || false,
	              //for create editor, no params for column.editable() indicate that editor for new row
	              editable: props.editable && typeof props.editable === "function" ? props.editable() : props.editable,
	              format: props.dataFormat ? function (value) {
	                return props.dataFormat(value, null, props.formatExtraData).replace(/<.*?>/g, '');
	              } : false
	            };
	          });
	        } else {
	          columns = [{
	            name: this.props.children.props.children,
	            field: this.props.children.props.dataField,
	            editable: this.props.children.props.editable
	          }];
	        }
	        return _react2['default'].createElement(
	          'div',
	          { className: 'tool-bar' },
	          _react2['default'].createElement(_toolbarToolBar2['default'], {
	            clearSearch: this.props.options.clearSearch,
	            enableInsert: this.props.insertRow,
	            enableDelete: this.props.deleteRow,
	            enableSearch: this.props.search,
	            enableExportCSV: this.props.exportCSV,
	            enableShowOnlySelected: enableShowOnlySelected,
	            columns: columns,
	            searchPlaceholder: this.props.searchPlaceholder,
	            onAddRow: this.handleAddRow.bind(this),
	            onAddRowBegin: this.handleAddRowBegin.bind(this),
	            onDropRow: this.handleDropRow.bind(this),
	            onSearch: this.handleSearch.bind(this),
	            onExportCSV: this.handleExportCSV.bind(this),
	            onShowOnlySelected: this.handleShowOnlySelected.bind(this)
	          })
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'renderTableFilter',
	    value: function renderTableFilter(columns) {
	      if (this.props.columnFilter) {
	        return _react2['default'].createElement(_TableFilter2['default'], { columns: columns,
	          rowSelectType: this.props.selectRow.mode,
	          onFilter: this.handleFilterData.bind(this) });
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: '_handleAfterAddingRow',
	    value: function _handleAfterAddingRow(newObj) {
	      var result = undefined;
	      if (this.props.pagination) {
	        //if pagination is enabled and insert row be trigger, change to last page
	        var sizePerPage = this.state.sizePerPage;
	
	        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
	        result = this.store.page(currLastPage, sizePerPage).get();
	        this.setState({
	          data: result,
	          currPage: currLastPage
	        });
	      } else {
	        result = this.store.get();
	        this.setState({
	          data: result
	        });
	      }
	
	      if (this.props.options.afterInsertRow) {
	        this.props.options.afterInsertRow(newObj);
	      }
	    }
	  }]);
	
	  return BootstrapTable;
	})(_react2['default'].Component);
	
	BootstrapTable.propTypes = {
	  keyField: _react2['default'].PropTypes.string,
	  height: _react2['default'].PropTypes.string,
	  maxHeight: _react2['default'].PropTypes.string,
	  data: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]),
	  remote: _react2['default'].PropTypes.bool, // remote data, default is false
	  striped: _react2['default'].PropTypes.bool,
	  bordered: _react2['default'].PropTypes.bool,
	  hover: _react2['default'].PropTypes.bool,
	  condensed: _react2['default'].PropTypes.bool,
	  pagination: _react2['default'].PropTypes.bool,
	  searchPlaceholder: _react2['default'].PropTypes.string,
	  selectRow: _react2['default'].PropTypes.shape({
	    mode: _react2['default'].PropTypes.oneOf([_Const2['default'].ROW_SELECT_NONE, _Const2['default'].ROW_SELECT_SINGLE, _Const2['default'].ROW_SELECT_MULTI]),
	    bgColor: _react2['default'].PropTypes.string,
	    selected: _react2['default'].PropTypes.array,
	    onSelect: _react2['default'].PropTypes.func,
	    onSelectAll: _react2['default'].PropTypes.func,
	    clickToSelect: _react2['default'].PropTypes.bool,
	    hideSelectColumn: _react2['default'].PropTypes.bool,
	    clickToSelectAndEditCell: _react2['default'].PropTypes.bool,
	    showOnlySelected: _react2['default'].PropTypes.bool
	  }),
	  cellEdit: _react2['default'].PropTypes.shape({
	    mode: _react2['default'].PropTypes.string,
	    blurToSave: _react2['default'].PropTypes.bool,
	    afterSaveCell: _react2['default'].PropTypes.func
	  }),
	  insertRow: _react2['default'].PropTypes.bool,
	  deleteRow: _react2['default'].PropTypes.bool,
	  search: _react2['default'].PropTypes.bool,
	  columnFilter: _react2['default'].PropTypes.bool,
	  trClassName: _react2['default'].PropTypes.any,
	  options: _react2['default'].PropTypes.shape({
	    clearSearch: _react2['default'].PropTypes.bool,
	    sortName: _react2['default'].PropTypes.string,
	    sortOrder: _react2['default'].PropTypes.string,
	    sortIndicator: _react2['default'].PropTypes.bool,
	    afterTableComplete: _react2['default'].PropTypes.func,
	    afterDeleteRow: _react2['default'].PropTypes.func,
	    afterInsertRow: _react2['default'].PropTypes.func,
	    afterSearch: _react2['default'].PropTypes.func,
	    afterColumnFilter: _react2['default'].PropTypes.func,
	    onRowClick: _react2['default'].PropTypes.func,
	    page: _react2['default'].PropTypes.number,
	    sizePerPageList: _react2['default'].PropTypes.array,
	    sizePerPage: _react2['default'].PropTypes.number,
	    paginationSize: _react2['default'].PropTypes.number,
	    onSortChange: _react2['default'].PropTypes.func,
	    onPageChange: _react2['default'].PropTypes.func,
	    onSizePerPageList: _react2['default'].PropTypes.func,
	    noDataText: _react2['default'].PropTypes.string,
	    handleConfirmDeleteRow: _react2['default'].PropTypes.func,
	    prePage: _react2['default'].PropTypes.string,
	    nextPage: _react2['default'].PropTypes.string,
	    firstPage: _react2['default'].PropTypes.string,
	    lastPage: _react2['default'].PropTypes.string
	  }),
	  fetchInfo: _react2['default'].PropTypes.shape({
	    dataTotalSize: _react2['default'].PropTypes.number
	  }),
	  exportCSV: _react2['default'].PropTypes.bool,
	  csvFileName: _react2['default'].PropTypes.string
	};
	BootstrapTable.defaultProps = {
	  height: "100%",
	  maxHeight: undefined,
	  striped: false,
	  bordered: true,
	  hover: false,
	  condensed: false,
	  pagination: false,
	  searchPlaceholder: undefined,
	  selectRow: {
	    mode: _Const2['default'].ROW_SELECT_NONE,
	    bgColor: _Const2['default'].ROW_SELECT_BG_COLOR,
	    selected: [],
	    onSelect: undefined,
	    onSelectAll: undefined,
	    clickToSelect: false,
	    hideSelectColumn: false,
	    clickToSelectAndEditCell: false,
	    showOnlySelected: false
	  },
	  cellEdit: {
	    mode: _Const2['default'].CELL_EDIT_NONE,
	    blurToSave: false,
	    afterSaveCell: undefined
	  },
	  insertRow: false,
	  deleteRow: false,
	  search: false,
	  multiColumnSearch: false,
	  columnFilter: false,
	  trClassName: '',
	  options: {
	    clearSearch: false,
	    sortName: undefined,
	    sortOrder: undefined,
	    sortIndicator: true,
	    afterTableComplete: undefined,
	    afterDeleteRow: undefined,
	    afterInsertRow: undefined,
	    afterSearch: undefined,
	    afterColumnFilter: undefined,
	    onRowClick: undefined,
	    onMouseLeave: undefined,
	    onMouseEnter: undefined,
	    onRowMouseOut: undefined,
	    onRowMouseOver: undefined,
	    page: undefined,
	    sizePerPageList: _Const2['default'].SIZE_PER_PAGE_LIST,
	    sizePerPage: undefined,
	    paginationSize: _Const2['default'].PAGINATION_SIZE,
	    onSizePerPageList: undefined,
	    noDataText: undefined,
	    handleConfirmDeleteRow: undefined,
	    prePage: _Const2['default'].PRE_PAGE,
	    nextPage: _Const2['default'].NEXT_PAGE,
	    firstPage: _Const2['default'].FIRST_PAGE,
	    lastPage: _Const2['default'].LAST_PAGE
	  },
	  fetchInfo: {
	    dataTotalSize: 0
	  },
	  exportCSV: false,
	  csvFileName: undefined
	};
	
	exports['default'] = BootstrapTable;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  SORT_DESC: "desc",
	  SORT_ASC: "asc",
	  SIZE_PER_PAGE: 10,
	  NEXT_PAGE: ">",
	  LAST_PAGE: ">>",
	  PRE_PAGE: "<",
	  FIRST_PAGE: "<<",
	  ROW_SELECT_BG_COLOR: "",
	  ROW_SELECT_NONE: "none",
	  ROW_SELECT_SINGLE: "radio",
	  ROW_SELECT_MULTI: "checkbox",
	  CELL_EDIT_NONE: "none",
	  CELL_EDIT_CLICK: "click",
	  CELL_EDIT_DBCLICK: "dbclick",
	  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
	  PAGINATION_SIZE: 5,
	  NO_DATA_TEXT: "There is no data to display",
	  SHOW_ONLY_SELECT: "Show Selected Only",
	  SHOW_ALL: "Show All",
	  FILTER_DELAY: 500,
	  FILTER_TYPE: {
	    TEXT: "TextFilter",
	    SELECT: "SelectFilter",
	    NUMBER: "NumberFilter",
	    DATE: "DateFilter",
	    CUSTOM: "CustomFilter"
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(6);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _util = __webpack_require__(7);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _SelectRowHeaderColumn = __webpack_require__(8);
	
	var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);
	
	var Checkbox = (function (_React$Component) {
	  _inherits(Checkbox, _React$Component);
	
	  function Checkbox() {
	    _classCallCheck(this, Checkbox);
	
	    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Checkbox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.update(this.props.checked);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      this.update(props.checked);
	    }
	  }, {
	    key: 'update',
	    value: function update(checked) {
	      _reactDom2['default'].findDOMNode(this).indeterminate = checked === 'indeterminate';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('input', { className: 'react-bs-select-all', type: 'checkbox', checked: this.props.checked, onChange: this.props.onChange });
	    }
	  }]);
	
	  return Checkbox;
	})(_react2['default'].Component);
	
	var TableHeader = (function (_React$Component2) {
	  _inherits(TableHeader, _React$Component2);
	
	  function TableHeader(props) {
	    _classCallCheck(this, TableHeader);
	
	    _get(Object.getPrototypeOf(TableHeader.prototype), 'constructor', this).call(this, props);
	    this.selectRowColumnWidth = null;
	  }
	
	  _createClass(TableHeader, [{
	    key: 'render',
	    value: function render() {
	      var containerClasses = (0, _classnames2['default'])("table-header");
	      var tableClasses = (0, _classnames2['default'])("table", "table-hover", {
	        "table-bordered": this.props.bordered,
	        "table-condensed": this.props.condensed
	      });
	      var selectRowHeaderCol = this.props.hideSelectColumn ? null : this.renderSelectRowHeader();
	      this._attachClearSortCaretFunc();
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'table-header-wrapper' },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'container', className: containerClasses },
	          _react2['default'].createElement(
	            'table',
	            { className: tableClasses },
	            _react2['default'].createElement(
	              'thead',
	              null,
	              _react2['default'].createElement(
	                'tr',
	                { ref: 'header' },
	                selectRowHeaderCol,
	                this.props.children
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderSelectRowHeader',
	    value: function renderSelectRowHeader() {
	      if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE) {
	        return _react2['default'].createElement(_SelectRowHeaderColumn2['default'], { width: this.selectRowColumnWidth });
	      } else if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) {
	        return _react2['default'].createElement(
	          _SelectRowHeaderColumn2['default'],
	          { width: this.selectRowColumnWidth },
	          _react2['default'].createElement(Checkbox, { onChange: this.props.onSelectAllRow, checked: this.props.isSelectAll })
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: '_attachClearSortCaretFunc',
	    value: function _attachClearSortCaretFunc() {
	      var sortIndicator = this.props.sortIndicator;
	
	      if (Array.isArray(this.props.children)) {
	        for (var i = 0; i < this.props.children.length; i++) {
	          var field = this.props.children[i].props.dataField;
	          var sort = field === this.props.sortName ? this.props.sortOrder : undefined;
	          this.props.children[i] = _react2['default'].cloneElement(this.props.children[i], { key: i, onSort: this.props.onSort, sort: sort, sortIndicator: sortIndicator });
	        }
	      } else {
	        var field = this.props.children.props.dataField;
	        var sort = field === this.props.sortName ? this.props.sortOrder : undefined;
	        this.props.children = _react2['default'].cloneElement(this.props.children, { key: 0, onSort: this.props.onSort, sort: sort, sortIndicator: sortIndicator });
	      }
	    }
	  }, {
	    key: 'fitHeader',
	    value: function fitHeader(headerProps, isVerticalScrollBar) {
	      if (Array.isArray(this.props.children)) {
	        var startPosition = (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE || this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) && !this.props.hideSelectColumn ? 1 : 0;
	        if (startPosition == 1) this.selectRowColumnWidth = headerProps[0].width;
	        for (var i = 0; i < this.props.children.length; i++) {
	          this.props.children[i] = _react2['default'].cloneElement(this.props.children[i], { width: headerProps[i + startPosition].width + "px" });
	        }
	      } else {
	        this.props.children = _react2['default'].cloneElement(this.props.children, { width: headerProps[0].width + "px" });
	      }
	      if (this.props.condensed && !this.props.isFiltered) {
	        this.refs.container.style.height = "36px";
	      }
	      this.forceUpdate();
	      if (isVerticalScrollBar) this.refs.container.style.marginRight = _util2['default'].getScrollBarWidth() + "px";
	    }
	  }]);
	
	  return TableHeader;
	})(_react2['default'].Component);
	
	TableHeader.propTypes = {
	  rowSelectType: _react2['default'].PropTypes.string,
	  onSort: _react2['default'].PropTypes.func,
	  onSelectAllRow: _react2['default'].PropTypes.func,
	  sortName: _react2['default'].PropTypes.string,
	  sortOrder: _react2['default'].PropTypes.string,
	  hideSelectColumn: _react2['default'].PropTypes.bool,
	  bordered: _react2['default'].PropTypes.bool,
	  condensed: _react2['default'].PropTypes.bool,
	  isFiltered: _react2['default'].PropTypes.bool,
	  isSelectAll: _react2['default'].PropTypes.oneOf([true, 'indeterminate', false]),
	  sortIndicator: _react2['default'].PropTypes.bool
	};
	
	TableHeader.defaultProps = {};
	exports['default'] = TableHeader;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	exports['default'] = {
	
	  renderSortCaret: function renderSortCaret(order) {
	    var wrap = document.createElement("span");
	    wrap.className = "order";
	    if (order == _Const2['default'].SORT_ASC) wrap.className += " dropup";
	    var inner = document.createElement("span");
	    inner.className = "caret";
	    inner.style.margin = "10px 5px";
	    wrap.appendChild(inner);
	    return wrap;
	  },
	
	  renderReactSortCaret: function renderReactSortCaret(order) {
	    var orderClass = (0, _classnames2['default'])("order", {
	      'dropup': order == _Const2['default'].SORT_ASC
	    });
	    return _react2['default'].createElement(
	      'span',
	      { className: orderClass },
	      _react2['default'].createElement('span', { className: 'caret', style: { margin: '10px 5px' } })
	    );
	  },
	
	  getScrollBarWidth: function getScrollBarWidth() {
	    var inner = document.createElement('p');
	    inner.style.width = "100%";
	    inner.style.height = "200px";
	
	    var outer = document.createElement('div');
	    outer.style.position = "absolute";
	    outer.style.top = "0px";
	    outer.style.left = "0px";
	    outer.style.visibility = "hidden";
	    outer.style.width = "200px";
	    outer.style.height = "150px";
	    outer.style.overflow = "hidden";
	    outer.appendChild(inner);
	
	    document.body.appendChild(outer);
	    var w1 = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var w2 = inner.offsetWidth;
	    if (w1 == w2) w2 = outer.clientWidth;
	
	    document.body.removeChild(outer);
	
	    return w1 - w2;
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var SelectRowHeaderColumn = (function (_React$Component) {
	  _inherits(SelectRowHeaderColumn, _React$Component);
	
	  function SelectRowHeaderColumn() {
	    _classCallCheck(this, SelectRowHeaderColumn);
	
	    _get(Object.getPrototypeOf(SelectRowHeaderColumn.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(SelectRowHeaderColumn, [{
	    key: 'render',
	    value: function render() {
	      var thStyle = {
	        width: parseInt(this.props.width) ? this.props.width : 35
	      };
	
	      return _react2['default'].createElement(
	        'th',
	        { style: thStyle },
	        _react2['default'].createElement(
	          'div',
	          { className: 'th-inner table-header-column' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return SelectRowHeaderColumn;
	})(_react2['default'].Component);
	
	exports['default'] = SelectRowHeaderColumn;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _util = __webpack_require__(7);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _TableRow = __webpack_require__(10);
	
	var _TableRow2 = _interopRequireDefault(_TableRow);
	
	var _TableColumn = __webpack_require__(11);
	
	var _TableColumn2 = _interopRequireDefault(_TableColumn);
	
	var _TableEditColumn = __webpack_require__(12);
	
	var _TableEditColumn2 = _interopRequireDefault(_TableEditColumn);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var isFun = function isFun(obj) {
	  return obj && typeof obj === "function";
	};
	
	var TableBody = (function (_React$Component) {
	  _inherits(TableBody, _React$Component);
	
	  function TableBody(props) {
	    _classCallCheck(this, TableBody);
	
	    _get(Object.getPrototypeOf(TableBody.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      currEditCell: null
	    };
	    this.editing = false;
	  }
	
	  _createClass(TableBody, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.adjustBody();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.adjustBody();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var containerClasses = (0, _classnames2['default'])("table-container");
	
	      var tableClasses = (0, _classnames2['default'])("table", {
	        'table-striped': this.props.striped,
	        'table-bordered': this.props.bordered,
	        'table-hover': this.props.hover,
	        'table-condensed': this.props.condensed
	      });
	
	      var isSelectRowDefined = this._isSelectRowDefined();
	      var tableHeader = this.renderTableHeader(isSelectRowDefined);
	
	      var tableRows = this.props.data.map(function (data, r) {
	        var tableColumns = this.props.columns.map(function (column, i) {
	          var fieldValue = data[column.name];
	          if (this.editing && column.name !== this.props.keyField && // Key field can't be edit
	          column.editable && // column is editable? default is true, user can set it false
	          this.state.currEditCell != null && this.state.currEditCell.rid == r && this.state.currEditCell.cid == i) {
	            var format = column.format ? function (value) {
	              return column.format(value, data, column.formatExtraData).replace(/<.*?>/g, '');
	            } : false;
	
	            return _react2['default'].createElement(
	              _TableEditColumn2['default'],
	              { completeEdit: this.handleCompleteEditCell.bind(this),
	                //add by bluespring for column editor customize
	                editable: isFun(column.editable) ? column.editable(fieldValue, data, r, i) : column.editable,
	                format: column.format ? format : false,
	                key: i,
	                blurToSave: this.props.cellEdit.blurToSave,
	                rowIndex: r,
	                colIndex: i },
	              fieldValue
	            );
	          } else {
	            //add by bluespring for className customize
	            var tdClassName = isFun(column.className) ? column.className(fieldValue, data, r, i) : column.className;
	
	            if (typeof column.format !== "undefined") {
	              var formattedValue = column.format(fieldValue, data, column.formatExtraData);
	              if (!_react2['default'].isValidElement(formattedValue)) {
	                formattedValue = _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
	              }
	              return _react2['default'].createElement(
	                _TableColumn2['default'],
	                { dataAlign: column.align,
	                  key: i,
	                  className: tdClassName,
	                  cellEdit: this.props.cellEdit,
	                  hidden: column.hidden,
	                  onEdit: this.handleEditCell.bind(this),
	                  width: column.width },
	                formattedValue
	              );
	            } else {
	              return _react2['default'].createElement(
	                _TableColumn2['default'],
	                { dataAlign: column.align,
	                  key: i,
	                  className: tdClassName,
	                  cellEdit: this.props.cellEdit,
	                  hidden: column.hidden,
	                  onEdit: this.handleEditCell.bind(this),
	                  width: column.width },
	                fieldValue
	              );
	            }
	          }
	        }, this);
	        var selected = this.props.selectedRowKeys.indexOf(data[this.props.keyField]) != -1;
	        var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? this.renderSelectRowColumn(selected) : null;
	        //add by bluespring for className customize
	        var trClassName = isFun(this.props.trClassName) ? this.props.trClassName(data, r) : this.props.trClassName;
	        return _react2['default'].createElement(
	          _TableRow2['default'],
	          { isSelected: selected, key: r, className: trClassName,
	            selectRow: isSelectRowDefined ? this.props.selectRow : undefined,
	            enableCellEdit: this.props.cellEdit.mode !== _Const2['default'].CELL_EDIT_NONE,
	            onRowClick: this.handleRowClick.bind(this),
	            onRowMouseOver: this.handleRowMouseOver.bind(this),
	            onRowMouseOut: this.handleRowMouseOut.bind(this),
	            onSelectRow: this.handleSelectRow.bind(this) },
	          selectRowColumn,
	          tableColumns
	        );
	      }, this);
	
	      if (tableRows.length === 0) {
	        tableRows.push(_react2['default'].createElement(
	          _TableRow2['default'],
	          { key: '##table-empty##' },
	          _react2['default'].createElement(
	            'td',
	            { colSpan: this.props.columns.length + (isSelectRowDefined ? 1 : 0),
	              className: 'react-bs-table-no-data' },
	            this.props.noDataText || _Const2['default'].NO_DATA_TEXT
	          )
	        ));
	      }
	
	      this.editing = false;
	
	      var height = this.calculateContainerHeight().toString();
	
	      return _react2['default'].createElement(
	        'div',
	        { ref: 'container', className: containerClasses, style: { height: height } },
	        _react2['default'].createElement(
	          'table',
	          { ref: 'body', className: tableClasses },
	          tableHeader,
	          _react2['default'].createElement(
	            'tbody',
	            null,
	            tableRows
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderTableHeader',
	    value: function renderTableHeader(isSelectRowDefined) {
	      var selectRowHeader = null;
	
	      if (isSelectRowDefined) {
	        var style = {
	          width: 35,
	          minWidth: 35
	        };
	        selectRowHeader = this.props.selectRow.hideSelectColumn ? null : _react2['default'].createElement('th', { style: style, key: -1 });
	      }
	      var theader = this.props.columns.map(function (column, i) {
	        var width = column.width == null ? column.width : parseInt(column.width);
	        var style = {
	          display: column.hidden ? "none" : null,
	          width: width,
	          maxWidth: width
	          /** add min-wdth to fix user assign column width not eq offsetWidth in large column table **/
	        };
	        var sortCaert = column.sort ? _util2['default'].renderReactSortCaret(_Const2['default'].SORT_DESC) : null;
	        return _react2['default'].createElement(
	          'th',
	          { style: style, key: i, className: column.className },
	          column.text,
	          sortCaert
	        );
	      });
	
	      return _react2['default'].createElement(
	        'thead',
	        { ref: 'header' },
	        _react2['default'].createElement(
	          'tr',
	          null,
	          selectRowHeader,
	          theader
	        )
	      );
	    }
	  }, {
	    key: 'handleRowMouseOut',
	    value: function handleRowMouseOut(rowIndex) {
	      var targetRow = this.props.data[rowIndex - 1];
	      this.props.onRowMouseOut(targetRow);
	    }
	  }, {
	    key: 'handleRowMouseOver',
	    value: function handleRowMouseOver(rowIndex) {
	      var targetRow = this.props.data[rowIndex - 1];
	      this.props.onRowMouseOver(targetRow);
	    }
	  }, {
	    key: 'handleRowClick',
	    value: function handleRowClick(rowIndex) {
	      var key, selectedRow;
	      this.props.data.forEach(function (row, i) {
	        if (i == rowIndex - 1) {
	          key = row[this.props.keyField];
	          selectedRow = row;
	        }
	      }, this);
	      this.props.onRowClick(selectedRow);
	    }
	  }, {
	    key: 'handleSelectRow',
	    value: function handleSelectRow(rowIndex, isSelected) {
	      var key, selectedRow;
	      this.props.data.forEach(function (row, i) {
	        if (i == rowIndex - 1) {
	          key = row[this.props.keyField];
	          selectedRow = row;
	          return false;
	        }
	      }, this);
	      this.props.onSelectRow(selectedRow, isSelected);
	    }
	  }, {
	    key: 'handleSelectRowColumChange',
	    value: function handleSelectRowColumChange(e) {
	      if (!this.props.selectRow.clickToSelect || !this.props.selectRow.clickToSelectAndEditCell) {
	        this.handleSelectRow(e.currentTarget.parentElement.parentElement.rowIndex, e.currentTarget.checked);
	      }
	    }
	  }, {
	    key: 'handleEditCell',
	    value: function handleEditCell(rowIndex, columnIndex) {
	      this.editing = true;
	      if (this._isSelectRowDefined()) {
	        columnIndex--;
	        if (this.props.selectRow.hideSelectColumn) columnIndex++;
	      }
	      rowIndex--;
	      var stateObj = {
	        currEditCell: {
	          rid: rowIndex,
	          cid: columnIndex
	        }
	      };
	
	      if (this.props.selectRow.clickToSelectAndEditCell) {
	        this.handleSelectRow(rowIndex + 1, true);
	      }
	      this.setState(stateObj);
	    }
	  }, {
	    key: 'cancelEdit',
	    value: function cancelEdit() {
	      var currEditCell = this.state.currEditCell;
	      if (currEditCell) {
	        this.handleCompleteEditCell(null, currEditCell.rid, currEditCell.cid);
	      }
	    }
	  }, {
	    key: 'handleCompleteEditCell',
	    value: function handleCompleteEditCell(newVal, rowIndex, columnIndex) {
	      this.setState({ currEditCell: null });
	      if (null != newVal) this.props.cellEdit.__onCompleteEdit__(newVal, rowIndex, columnIndex);
	    }
	  }, {
	    key: 'renderSelectRowColumn',
	    value: function renderSelectRowColumn(selected) {
	      if (this.props.selectRow.mode == _Const2['default'].ROW_SELECT_SINGLE) {
	        return _react2['default'].createElement(
	          _TableColumn2['default'],
	          null,
	          _react2['default'].createElement('input', { type: 'radio', checked: selected, onChange: this.handleSelectRowColumChange.bind(this) })
	        );
	      } else {
	        return _react2['default'].createElement(
	          _TableColumn2['default'],
	          null,
	          _react2['default'].createElement('input', { type: 'checkbox', checked: selected, onChange: this.handleSelectRowColumChange.bind(this) })
	        );
	      }
	    }
	  }, {
	    key: 'getBodyHeaderDomProp',
	    value: function getBodyHeaderDomProp() {
	      var headers = this.refs.header.childNodes[0].childNodes;
	      var headerDomProps = [];
	      for (var i = 0; i < headers.length; i++) {
	        headerDomProps.push({
	          width: headers[i].offsetWidth
	        });
	      }
	      return headerDomProps;
	    }
	  }, {
	    key: 'adjustBody',
	    value: function adjustBody() {
	      this.hardFixHeaderWidth();
	      if (this.props.condensed) {
	        this.refs.body.style.marginTop = "-36px";
	      }
	
	      if (this.props.maxHeight && parseInt(this.props.maxHeight) < this.refs.container.offsetHeight) {
	        this.refs.container.style.height = this.props.maxHeight - 42 + "px";
	      }
	    }
	  }, {
	    key: 'hardFixHeaderWidth',
	    value: function hardFixHeaderWidth() {
	      var headers = this.refs.header.childNodes[0].childNodes;
	      for (var i = 0; i < headers.length; i++) {
	        headers[i].style.width = headers[i].offsetWidth + "px";
	      }
	    }
	  }, {
	    key: 'calculateContainerHeight',
	    value: function calculateContainerHeight() {
	      if (this.props.height == "100%") return this.props.height;else {
	        return parseInt(this.props.height) - 42;
	      }
	    }
	  }, {
	    key: '_isSelectRowDefined',
	    value: function _isSelectRowDefined() {
	      return this.props.selectRow.mode === _Const2['default'].ROW_SELECT_SINGLE || this.props.selectRow.mode === _Const2['default'].ROW_SELECT_MULTI;
	    }
	  }]);
	
	  return TableBody;
	})(_react2['default'].Component);
	
	TableBody.propTypes = {
	  height: _react2['default'].PropTypes.string,
	  data: _react2['default'].PropTypes.array,
	  columns: _react2['default'].PropTypes.array,
	  striped: _react2['default'].PropTypes.bool,
	  bordered: _react2['default'].PropTypes.bool,
	  hover: _react2['default'].PropTypes.bool,
	  condensed: _react2['default'].PropTypes.bool,
	  keyField: _react2['default'].PropTypes.string,
	  selectedRowKeys: _react2['default'].PropTypes.array,
	  onRowClick: _react2['default'].PropTypes.func,
	  onSelectRow: _react2['default'].PropTypes.func,
	  noDataText: _react2['default'].PropTypes.string
	};
	exports['default'] = TableBody;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var TableRow = (function (_React$Component) {
	  _inherits(TableRow, _React$Component);
	
	  function TableRow(props) {
	    _classCallCheck(this, TableRow);
	
	    _get(Object.getPrototypeOf(TableRow.prototype), 'constructor', this).call(this, props);
	    this.clickNum = 0;
	  }
	
	  _createClass(TableRow, [{
	    key: 'rowClick',
	    value: function rowClick(e) {
	      var _this = this;
	
	      if (e.target.tagName !== "INPUT" && e.target.tagName !== "SELECT" && e.target.tagName !== "TEXTAREA") {
	        (function () {
	          var rowIndex = e.currentTarget.rowIndex;
	          if (_this.props.selectRow) {
	            if (_this.props.selectRow.clickToSelect) {
	              _this.props.onSelectRow(rowIndex, !_this.props.isSelected);
	            } else if (_this.props.selectRow.clickToSelectAndEditCell) {
	              _this.clickNum++;
	              /** if clickToSelectAndEditCell is enabled,
	               *  there should be a delay to prevent a selection changed when
	               *  user dblick to edit cell on same row but different cell
	              **/
	              setTimeout(function () {
	                if (_this.clickNum === 1) {
	                  _this.props.onSelectRow(rowIndex, !_this.props.isSelected);
	                }
	                _this.clickNum = 0;
	              }, 200);
	            }
	          }
	          if (_this.props.onRowClick) _this.props.onRowClick(rowIndex);
	        })();
	      }
	    }
	  }, {
	    key: 'rowMouseOut',
	    value: function rowMouseOut(e) {
	      if (this.props.onRowMouseOut) {
	        this.props.onRowMouseOut(e.currentTarget.rowIndex);
	      }
	    }
	  }, {
	    key: 'rowMouseOver',
	    value: function rowMouseOver(e) {
	      if (this.props.onRowMouseOver) {
	        this.props.onRowMouseOver(e.currentTarget.rowIndex);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.clickNum = 0;
	      var trCss = {
	        style: {
	          backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null
	        },
	        className: (this.props.isSelected && this.props.selectRow.className ? this.props.selectRow.className : '') + (this.props.className || '')
	      };
	
	      if (this.props.selectRow && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell) || this.props.onRowClick) {
	        return _react2['default'].createElement(
	          'tr',
	          _extends({}, trCss, {
	            onMouseOver: this.rowMouseOver.bind(this),
	            onMouseOut: this.rowMouseOut.bind(this),
	            onClick: this.rowClick.bind(this) }),
	          this.props.children
	        );
	      } else {
	        return _react2['default'].createElement(
	          'tr',
	          trCss,
	          this.props.children
	        );
	      }
	    }
	  }]);
	
	  return TableRow;
	})(_react2['default'].Component);
	
	TableRow.propTypes = {
	  isSelected: _react2['default'].PropTypes.bool,
	  enableCellEdit: _react2['default'].PropTypes.bool,
	  onRowClick: _react2['default'].PropTypes.func,
	  onSelectRow: _react2['default'].PropTypes.func,
	  onRowMouseOut: _react2['default'].PropTypes.func,
	  onRowMouseOver: _react2['default'].PropTypes.func
	};
	TableRow.defaultProps = {
	  onRowClick: undefined
	};
	exports['default'] = TableRow;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var TableColumn = (function (_React$Component) {
	  _inherits(TableColumn, _React$Component);
	
	  function TableColumn(props) {
	    _classCallCheck(this, TableColumn);
	
	    _get(Object.getPrototypeOf(TableColumn.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(TableColumn, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var children = this.props.children;
	
	      var shouldUpdated = this.props.width !== nextProps.width || this.props.className !== nextProps.className || this.props.hidden !== nextProps.hidden || this.props.dataAlign !== nextProps.dataAlign || typeof children !== typeof nextProps.children || ('' + this.props.onEdit).toString() !== ('' + nextProps.onEdit).toString();
	
	      if (shouldUpdated) {
	        return shouldUpdated;
	      }
	
	      if (typeof children === 'object' && children !== null && children.props !== null) {
	        if (children.props.type === 'checkbox' || children.props.type === 'radio') {
	          shouldUpdated = shouldUpdated || children.props.type !== nextProps.children.props.type || children.props.checked !== nextProps.children.props.checked;
	        } else {
	          shouldUpdated = true;
	        }
	      } else {
	        shouldUpdated = shouldUpdated || children !== nextProps.children;
	      }
	
	      if (shouldUpdated) {
	        return shouldUpdated;
	      }
	
	      if (!(this.props.cellEdit && nextProps.cellEdit)) {
	        return false;
	      } else {
	        return shouldUpdated || this.props.cellEdit.mode !== nextProps.cellEdit.mode;
	      }
	    }
	  }, {
	    key: 'handleCellEdit',
	    value: function handleCellEdit(e) {
	      if (this.props.cellEdit.mode == _Const2['default'].CELL_EDIT_DBCLICK) {
	        if (document.selection && document.selection.empty) {
	          document.selection.empty();
	        } else if (window.getSelection) {
	          var sel = window.getSelection();
	          sel.removeAllRanges();
	        }
	      }
	      this.props.onEdit(e.currentTarget.parentElement.rowIndex, e.currentTarget.cellIndex);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var width = this.props.width == null ? this.props.width : parseInt(this.props.width);
	      var tdStyle = {
	        textAlign: this.props.dataAlign,
	        display: this.props.hidden ? "none" : null,
	        width: width,
	        maxWidth: width
	      };
	      var classname = this.props.className;
	      if (this.props.width) {
	        classname += " col-md-" + width;
	      }
	
	      var opts = {};
	      if (this.props.cellEdit) {
	        if (this.props.cellEdit.mode == _Const2['default'].CELL_EDIT_CLICK) {
	          opts.onClick = this.handleCellEdit.bind(this);
	        } else if (this.props.cellEdit.mode == _Const2['default'].CELL_EDIT_DBCLICK) {
	          opts.onDoubleClick = this.handleCellEdit.bind(this);
	        }
	      }
	      return _react2['default'].createElement(
	        'td',
	        _extends({ style: tdStyle, className: classname }, opts),
	        this.props.children
	      );
	    }
	  }]);
	
	  return TableColumn;
	})(_react2['default'].Component);
	
	TableColumn.propTypes = {
	  dataAlign: _react2['default'].PropTypes.string,
	  hidden: _react2['default'].PropTypes.bool,
	  className: _react2['default'].PropTypes.string
	};
	
	TableColumn.defaultProps = {
	  dataAlign: "left",
	  hidden: false,
	  className: ""
	};
	exports['default'] = TableColumn;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _Editor = __webpack_require__(13);
	
	var _Editor2 = _interopRequireDefault(_Editor);
	
	var _NotificationJs = __webpack_require__(14);
	
	var _NotificationJs2 = _interopRequireDefault(_NotificationJs);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var TableEditColumn = (function (_React$Component) {
	    _inherits(TableEditColumn, _React$Component);
	
	    function TableEditColumn(props) {
	        _classCallCheck(this, TableEditColumn);
	
	        _get(Object.getPrototypeOf(TableEditColumn.prototype), 'constructor', this).call(this, props);
	        this.timeouteClear = 0;
	        this.state = {
	            shakeEditor: false
	        };
	    }
	
	    _createClass(TableEditColumn, [{
	        key: 'handleKeyPress',
	        value: function handleKeyPress(e) {
	            if (e.keyCode == 13) {
	                //Pressed ENTER
	                var value = e.currentTarget.type == 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;
	
	                if (!this.validator(value)) {
	                    return;
	                }
	                this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
	            } else if (e.keyCode == 27) {
	                this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
	            }
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur(e) {
	            if (this.props.blurToSave) {
	                var value = e.currentTarget.type == 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;
	                if (!this.validator(value)) {
	                    return;
	                }
	                this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
	            }
	        }
	    }, {
	        key: 'validator',
	        value: function validator(value) {
	            var ts = this;
	            if (ts.props.editable.validator) {
	                var valid = ts.props.editable.validator(value);
	                if (valid !== true) {
	                    //ts.refs.notifier.notice('error',valid,"Pressed ESC can cancel");
	                    var input = ts.refs.inputRef;
	                    //animate input
	                    //ts.clearTimeout();
	                    //ts.setState({shakeEditor:true});
	                    //ts.timeouteClear=setTimeout(function(){ts.setState({shakeEditor:false});},300);
	                    input.focus();
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, {
	        key: 'clearTimeout',
	        value: (function (_clearTimeout) {
	            function clearTimeout() {
	                return _clearTimeout.apply(this, arguments);
	            }
	
	            clearTimeout.toString = function () {
	                return _clearTimeout.toString();
	            };
	
	            return clearTimeout;
	        })(function () {
	            if (this.timeouteClear != 0) {
	                clearTimeout(this.timeouteClear);
	                this.timeouteClear = 0;
	            }
	        })
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var input = this.refs.inputRef;
	            // input.value = this.props.children||'';
	            input.focus();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.clearTimeout();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var editable = this.props.editable,
	                format = this.props.format,
	                attr = {
	                ref: "inputRef",
	                onKeyDown: this.handleKeyPress.bind(this),
	                onBlur: this.handleBlur.bind(this)
	            };
	            //put placeholder if exist
	            editable.placeholder && (attr.placeholder = editable.placeholder);
	
	            var editorClass = (0, _classnames2['default'])({ 'animated': this.state.shakeEditor, 'shake': this.state.shakeEditor });
	            return _react2['default'].createElement(
	                'td',
	                { ref: 'td', style: { position: 'relative' } },
	                (0, _Editor2['default'])(editable, attr, format, editorClass, this.props.children || ''),
	                _react2['default'].createElement(_NotificationJs2['default'], { ref: 'notifier' })
	            );
	        }
	    }, {
	        key: '_getCheckBoxValue',
	        value: function _getCheckBoxValue(e) {
	            var value = '';
	            var values = e.currentTarget.value.split(':');
	            value = e.currentTarget.checked ? values[0] : values[1];
	            return value;
	        }
	    }]);
	
	    return TableEditColumn;
	})(_react2['default'].Component);
	
	TableEditColumn.propTypes = {
	    completeEdit: _react2['default'].PropTypes.func,
	    rowIndex: _react2['default'].PropTypes.number,
	    colIndex: _react2['default'].PropTypes.number,
	    blurToSave: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = TableEditColumn;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Editor = function Editor(editable, attr, format, editorClass, defaultValue) {
	
	    if (editable === true || typeof editable === "string") {
	        //simple declare
	        var type = editable === true ? 'text' : editable;
	        return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
	            className: (editorClass || "") + " form-control editor edit-text" }));
	    } else if (!editable) {
	        var type = editable === true ? 'text' : editable;
	        return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue, disabled: 'disabled',
	            className: (editorClass || "") + " form-control editor edit-text" }));
	    } else if (editable.type) {
	        //standard declare
	        //put style if exist
	        editable.style && (attr.style = editable.style);
	
	        //put class if exist
	        attr.className = (editorClass || "") + " form-control editor edit-" + editable.type + (editable.className ? " " + editable.className : "");
	
	        if (editable.type === 'select') {
	            //process select input
	            var options = [],
	                values = editable.options.values;
	            if (Array.isArray(values)) {
	                //only can use arrray data for options
	                var rowValue;
	                options = values.map(function (d, i) {
	                    rowValue = format ? format(d) : d;
	                    return _react2['default'].createElement(
	                        'option',
	                        { key: 'option' + i, value: d },
	                        rowValue
	                    );
	                });
	            }
	            return _react2['default'].createElement(
	                'select',
	                _extends({}, attr, { defaultValue: defaultValue }),
	                options
	            );
	        } else if (editable.type === 'textarea') {
	            //process textarea input
	            //put  other if exist
	            editable.cols && (attr.cols = editable.cols);
	            editable.rows && (attr.rows = editable.rows);
	            var keyUpHandler = attr.onKeyDown,
	                saveBtn = null;
	            if (keyUpHandler) {
	                attr.onKeyDown = function (e) {
	                    if (e.keyCode != 13) {
	                        //not Pressed ENTER
	                        keyUpHandler(e);
	                    }
	                };
	                saveBtn = _react2['default'].createElement(
	                    'butto',
	                    { className: 'btn btn-info btn-xs textarea-save-btn', onClick: keyUpHandler },
	                    'save'
	                );
	            }
	
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement('textarea', _extends({}, attr, { defaultValue: defaultValue })),
	                saveBtn
	            );
	        } else if (editable.type === 'checkbox') {
	            var _values = 'true:false';
	            if (editable.options && editable.options.values) {
	                // values = editable.options.values.split(':');
	                _values = editable.options.values;
	            }
	            attr.className = attr.className.replace('form-control', '');
	            attr.className += ' checkbox pull-right';
	
	            var checked = defaultValue && defaultValue.toString() == _values.split(':')[0] ? true : false;
	
	            return _react2['default'].createElement('input', _extends({}, attr, { type: 'checkbox', value: _values, defaultChecked: checked }));
	        } else {
	            //process other input type. as password,url,email...
	            return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue }));
	        }
	    }
	    //default return for other case of editable
	    return _react2['default'].createElement('input', _extends({}, attr, { defaultValue: defaultValue, type: 'text', className: (editorClass || "") + " form-control editor edit-text" }));
	};
	
	exports['default'] = Editor;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _reactToastr = __webpack_require__(15);
	
	var ToastrMessageFactory = _react2['default'].createFactory(_reactToastr.ToastMessage.animation);
	
	var Notification = (function (_React$Component) {
	  _inherits(Notification, _React$Component);
	
	  function Notification() {
	    _classCallCheck(this, Notification);
	
	    _get(Object.getPrototypeOf(Notification.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Notification, [{
	    key: 'notice',
	
	    // allow type is success,info,warning,error
	    value: function notice(type, msg, title) {
	      this.refs.toastr[type](msg, title, {
	        mode: 'single',
	        timeOut: 5000,
	        extendedTimeOut: 1000,
	        showAnimation: "animated  bounceIn",
	        hideAnimation: "animated bounceOut"
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_reactToastr.ToastContainer, { ref: 'toastr', toastMessageFactory: ToastrMessageFactory,
	        id: 'toast-container', className: 'toast-top-right' });
	    }
	  }]);
	
	  return Notification;
	})(_react2['default'].Component);
	
	exports['default'] = Notification;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ToastMessage = exports.ToastContainer = undefined;
	
	var _ToastContainer = __webpack_require__(16);
	
	var _ToastContainer2 = _interopRequireDefault(_ToastContainer);
	
	var _ToastMessage = __webpack_require__(23);
	
	var _ToastMessage2 = _interopRequireDefault(_ToastMessage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.ToastContainer = _ToastContainer2.default;
	exports.ToastMessage = _ToastMessage2.default;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsUpdate = __webpack_require__(17);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _ToastMessage = __webpack_require__(23);
	
	var _ToastMessage2 = _interopRequireDefault(_ToastMessage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ToastContainer = function (_Component) {
	  _inherits(ToastContainer, _Component);
	
	  function ToastContainer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ToastContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ToastContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      toasts: [],
	      toastId: 0,
	      previousMessage: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ToastContainer, [{
	    key: "error",
	    value: function error(message, title, optionsOverride) {
	      this._notify(this.props.toastType.error, message, title, optionsOverride);
	    }
	  }, {
	    key: "info",
	    value: function info(message, title, optionsOverride) {
	      this._notify(this.props.toastType.info, message, title, optionsOverride);
	    }
	  }, {
	    key: "success",
	    value: function success(message, title, optionsOverride) {
	      this._notify(this.props.toastType.success, message, title, optionsOverride);
	    }
	  }, {
	    key: "warning",
	    value: function warning(message, title, optionsOverride) {
	      this._notify(this.props.toastType.warning, message, title, optionsOverride);
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      var _this2 = this;
	
	      Object.keys(this.refs).forEach(function (key) {
	        _this2.refs[key].hideToast(false);
	      });
	    }
	  }, {
	    key: "_notify",
	    value: function _notify(type, message, title) {
	      var _this3 = this;
	
	      var optionsOverride = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      if (this.props.preventDuplicates) {
	        if (this.state.previousMessage === message) {
	          return;
	        }
	      }
	      var key = this.state.toastId++;
	      var toastId = key;
	      var newToast = (0, _reactAddonsUpdate2.default)(optionsOverride, {
	        $merge: {
	          type: type,
	          title: title,
	          message: message,
	          toastId: toastId,
	          key: key,
	          ref: "toasts__" + key,
	          handleOnClick: function handleOnClick(e) {
	            if ("function" === typeof optionsOverride.handleOnClick) {
	              optionsOverride.handleOnClick();
	            }
	            return _this3._handle_toast_on_click(e);
	          },
	          handleRemove: this._handle_toast_remove.bind(this)
	        }
	      });
	      var toastOperation = _defineProperty({}, "" + (this.props.newestOnTop ? "$unshift" : "$push"), [newToast]);
	
	      var nextState = (0, _reactAddonsUpdate2.default)(this.state, {
	        toasts: toastOperation,
	        previousMessage: { $set: message }
	      });
	      this.setState(nextState);
	    }
	  }, {
	    key: "_handle_toast_on_click",
	    value: function _handle_toast_on_click(event) {
	      this.props.onClick(event);
	      if (event.defaultPrevented) {
	        return;
	      }
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: "_handle_toast_remove",
	    value: function _handle_toast_remove(toastId) {
	      var _this4 = this;
	
	      var operationName = "" + (this.props.newestOnTop ? "reduceRight" : "reduce");
	      this.state.toasts[operationName](function (found, toast, index) {
	        if (found || toast.toastId !== toastId) {
	          return false;
	        }
	        _this4.setState((0, _reactAddonsUpdate2.default)(_this4.state, {
	          toasts: { $splice: [[index, 1]] }
	        }));
	        return true;
	      }, false);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this5 = this;
	
	      return _react2.default.createElement(
	        "div",
	        _extends({}, this.props, { "aria-live": "polite", role: "alert" }),
	        this.state.toasts.map(function (toast) {
	          return _this5.props.toastMessageFactory(toast);
	        })
	      );
	    }
	  }]);
	
	  return ToastContainer;
	}(_react.Component);
	
	ToastContainer.propTypes = {
	  toastType: _react.PropTypes.shape({
	    error: _react.PropTypes.string,
	    info: _react.PropTypes.string,
	    success: _react.PropTypes.string,
	    warning: _react.PropTypes.string
	  }).isRequired,
	  id: _react.PropTypes.string.isRequired,
	  toastMessageFactory: _react.PropTypes.func.isRequired,
	  preventDuplicates: _react.PropTypes.bool.isRequired,
	  newestOnTop: _react.PropTypes.bool.isRequired,
	  onClick: _react.PropTypes.func.isRequired
	};
	ToastContainer.defaultProps = {
	  toastType: {
	    error: "error",
	    info: "info",
	    success: "success",
	    warning: "warning"
	  },
	  id: "toast-container",
	  toastMessageFactory: _react2.default.createFactory(_ToastMessage2.default),
	  preventDuplicates: false,
	  newestOnTop: true,
	  onClick: function onClick() {}
	};
	exports.default = ToastContainer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var assign = __webpack_require__(20);
	var keyOf = __webpack_require__(21);
	var invariant = __webpack_require__(22);
	var hasOwnProperty = ({}).hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}
	
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
	
	'use strict';
	
	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }
	
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }
	
	    var from = Object(nextSource);
	
	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.
	
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }
	
	  return to;
	}
	
	module.exports = assign;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";
	
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.jQuery = exports.animation = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsUpdate = __webpack_require__(17);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _animationMixin = __webpack_require__(24);
	
	var _animationMixin2 = _interopRequireDefault(_animationMixin);
	
	var _jQueryMixin = __webpack_require__(28);
	
	var _jQueryMixin2 = _interopRequireDefault(_jQueryMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function noop() {}
	
	var ToastMessageSpec = {
	  displayName: "ToastMessage",
	
	  getDefaultProps: function getDefaultProps() {
	    var iconClassNames = {
	      error: "toast-error",
	      info: "toast-info",
	      success: "toast-success",
	      warning: "toast-warning"
	    };
	
	    return {
	      className: "toast",
	      iconClassNames: iconClassNames,
	      titleClassName: "toast-title",
	      messageClassName: "toast-message",
	      tapToDismiss: true,
	      closeButton: false
	    };
	  },
	  handleOnClick: function handleOnClick(event) {
	    this.props.handleOnClick(event);
	    if (this.props.tapToDismiss) {
	      this.hideToast(true);
	    }
	  },
	  _handle_close_button_click: function _handle_close_button_click(event) {
	    event.stopPropagation();
	    this.hideToast(true);
	  },
	  _handle_remove: function _handle_remove() {
	    this.props.handleRemove(this.props.toastId);
	  },
	  _render_close_button: function _render_close_button() {
	    return this.props.closeButton ? _react2.default.createElement("button", {
	      className: "toast-close-button", role: "button",
	      onClick: this._handle_close_button_click,
	      dangerouslySetInnerHTML: { __html: "&times;" }
	    }) : false;
	  },
	  _render_title_element: function _render_title_element() {
	    return this.props.title ? _react2.default.createElement(
	      "div",
	      { className: this.props.titleClassName },
	      this.props.title
	    ) : false;
	  },
	  _render_message_element: function _render_message_element() {
	    return this.props.message ? _react2.default.createElement(
	      "div",
	      { className: this.props.messageClassName },
	      this.props.message
	    ) : false;
	  },
	  render: function render() {
	    var iconClassName = this.props.iconClassName || this.props.iconClassNames[this.props.type];
	
	    return _react2.default.createElement(
	      "div",
	      {
	        className: (0, _classnames2.default)(this.props.className, iconClassName),
	        style: this.props.style,
	        onClick: this.handleOnClick,
	        onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave
	      },
	      this._render_close_button(),
	      this._render_title_element(),
	      this._render_message_element()
	    );
	  }
	};
	
	var animation = exports.animation = _react2.default.createClass((0, _reactAddonsUpdate2.default)(ToastMessageSpec, {
	  displayName: { $set: "ToastMessage.animation" },
	  mixins: { $set: [_animationMixin2.default] }
	}));
	
	var jQuery = exports.jQuery = _react2.default.createClass((0, _reactAddonsUpdate2.default)(ToastMessageSpec, {
	  displayName: { $set: "ToastMessage.jQuery" },
	  mixins: { $set: [_jQueryMixin2.default] }
	}));
	
	/*
	 * assign default noop functions
	 */
	ToastMessageSpec.handleMouseEnter = noop;
	ToastMessageSpec.handleMouseLeave = noop;
	ToastMessageSpec.hideToast = noop;
	
	var ToastMessage = _react2.default.createClass(ToastMessageSpec);
	
	ToastMessage.animation = animation;
	ToastMessage.jQuery = jQuery;
	
	exports.default = ToastMessage;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ReactTransitionEvents = __webpack_require__(25);
	
	var _ReactTransitionEvents2 = _interopRequireDefault(_ReactTransitionEvents);
	
	var _reactDom = __webpack_require__(6);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _elementClass = __webpack_require__(27);
	
	var _elementClass2 = _interopRequireDefault(_elementClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TICK = 17;
	var toString = Object.prototype.toString;
	exports.default = {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      transition: null, // some examples defined in index.scss (scale, fadeInOut, rotate)
	      showAnimation: "animated bounceIn", // or other animations from animate.css
	      hideAnimation: "animated bounceOut",
	      timeOut: 5000,
	      extendedTimeOut: 1000
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.classNameQueue = [];
	    this.isHiding = false;
	    this.intervalId = null;
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    this._is_mounted = true;
	    this._show();
	    var node = _reactDom2.default.findDOMNode(this);
	
	    var onHideComplete = function onHideComplete() {
	      if (_this.isHiding) {
	        _this._set_is_hiding(false);
	        _ReactTransitionEvents2.default.removeEndEventListener(node, onHideComplete);
	        _this._handle_remove();
	      }
	    };
	    _ReactTransitionEvents2.default.addEndEventListener(node, onHideComplete);
	
	    if (this.props.timeOut > 0) {
	      this._set_interval_id(setTimeout(this.hideToast, this.props.timeOut));
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._is_mounted = false;
	    if (this.intervalId) {
	      clearTimeout(this.intervalId);
	    }
	  },
	  _set_transition: function _set_transition(hide) {
	    var animationType = hide ? "leave" : "enter";
	    var node = _reactDom2.default.findDOMNode(this);
	    var className = this.props.transition + "-" + animationType;
	    var activeClassName = className + "-active";
	
	    var endListener = function endListener(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      var classList = (0, _elementClass2.default)(node);
	      classList.remove(className);
	      classList.remove(activeClassName);
	
	      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
	    };
	
	    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);
	
	    (0, _elementClass2.default)(node).add(className);
	
	    // Need to do this to actually trigger a transition.
	    this._queue_class(activeClassName);
	  },
	  _clear_transition: function _clear_transition(hide) {
	    var node = _reactDom2.default.findDOMNode(this);
	    var animationType = hide ? "leave" : "enter";
	    var className = this.props.transition + "-" + animationType;
	    var activeClassName = className + "-active";
	
	    var classList = (0, _elementClass2.default)(node);
	    classList.remove(className);
	    classList.remove(activeClassName);
	  },
	  _set_animation: function _set_animation(hide) {
	    var node = _reactDom2.default.findDOMNode(this);
	    var animations = this._get_animation_classes(hide);
	    var endListener = function endListener(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      animations.forEach(function (anim) {
	        return (0, _elementClass2.default)(node).remove(anim);
	      });
	
	      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
	    };
	
	    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);
	
	    animations.forEach(function (anim) {
	      return (0, _elementClass2.default)(node).add(anim);
	    });
	  },
	  _get_animation_classes: function _get_animation_classes(hide) {
	    var animations = hide ? this.props.hideAnimation : this.props.showAnimation;
	    if ("[object Array]" === toString.call(animations)) {
	      return animations;
	    } else if ("string" === typeof animations) {
	      return animations.split(" ");
	    }
	  },
	  _clear_animation: function _clear_animation(hide) {
	    var node = _reactDom2.default.findDOMNode(this);
	    var animations = this._get_animation_classes(hide);
	    animations.forEach(function (animation) {
	      return (0, _elementClass2.default)(node).remove(animation);
	    });
	  },
	  _queue_class: function _queue_class(className) {
	    this.classNameQueue.push(className);
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this._flush_class_name_queue, TICK);
	    }
	  },
	  _flush_class_name_queue: function _flush_class_name_queue() {
	    var _this2 = this;
	
	    if (this._is_mounted) {
	      (function () {
	        var node = _reactDom2.default.findDOMNode(_this2);
	        _this2.classNameQueue.forEach(function (className) {
	          return (0, _elementClass2.default)(node).add(className);
	        });
	      })();
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },
	  _show: function _show() {
	    if (this.props.transition) {
	      this._set_transition();
	    } else if (this.props.showAnimation) {
	      this._set_animation();
	    }
	  },
	  handleMouseEnter: function handleMouseEnter() {
	    clearTimeout(this.intervalId);
	    this._set_interval_id(null);
	    if (this.isHiding) {
	      this._set_is_hiding(false);
	
	      if (this.props.hideAnimation) {
	        this._clear_animation(true);
	      } else if (this.props.transition) {
	        this._clear_transition(true);
	      }
	    }
	  },
	  handleMouseLeave: function handleMouseLeave() {
	    if (!this.isHiding && (this.props.timeOut > 0 || this.props.extendedTimeOut > 0)) {
	      this._set_interval_id(setTimeout(this.hideToast, this.props.extendedTimeOut));
	    }
	  },
	  hideToast: function hideToast(override) {
	    if (this.isHiding || this.intervalId === null && !override) {
	      return;
	    }
	
	    this._set_is_hiding(true);
	    if (this.props.transition) {
	      this._set_transition(true);
	    } else if (this.props.hideAnimation) {
	      this._set_animation(true);
	    } else {
	      this._handle_remove();
	    }
	  },
	  _set_interval_id: function _set_interval_id(intervalId) {
	    this.intervalId = intervalId;
	  },
	  _set_is_hiding: function _set_is_hiding(isHiding) {
	    this.isHiding = isHiding;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(26);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(opts) {
	  return new ElementClass(opts)
	}
	
	function indexOf(arr, prop) {
	  if (arr.indexOf) return arr.indexOf(prop)
	  for (var i = 0, len = arr.length; i < len; i++)
	    if (arr[i] === prop) return i
	  return -1
	}
	
	function ElementClass(opts) {
	  if (!(this instanceof ElementClass)) return new ElementClass(opts)
	  var self = this
	  if (!opts) opts = {}
	
	  // similar doing instanceof HTMLElement but works in IE8
	  if (opts.nodeType) opts = {el: opts}
	
	  this.opts = opts
	  this.el = opts.el || document.body
	  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
	}
	
	ElementClass.prototype.add = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return el.className = className
	  var classes = el.className.split(' ')
	  if (indexOf(classes, className) > -1) return classes
	  classes.push(className)
	  el.className = classes.join(' ')
	  return classes
	}
	
	ElementClass.prototype.remove = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return
	  var classes = el.className.split(' ')
	  var idx = indexOf(classes, className)
	  if (idx > -1) classes.splice(idx, 1)
	  el.className = classes.join(' ')
	  return classes
	}
	
	ElementClass.prototype.has = function(className) {
	  var el = this.el
	  if (!el) return
	  var classes = el.className.split(' ')
	  return indexOf(classes, className) > -1
	}
	
	ElementClass.prototype.toggle = function(className) {
	  var el = this.el
	  if (!el) return
	  if (this.has(className)) this.remove(className)
	  else this.add(className)
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactDom = __webpack_require__(6);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function call_show_method($node, props) {
	  $node[props.showMethod]({
	    duration: props.showDuration,
	    easing: props.showEasing
	  });
	}
	
	exports.default = {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {
	        display: "none" },
	      // effective $.hide()
	      showMethod: "fadeIn", // slideDown, and show are built into jQuery
	      showDuration: 300,
	      showEasing: "swing", // and linear are built into jQuery
	      hideMethod: "fadeOut",
	      hideDuration: 1000,
	      hideEasing: "swing",
	      //
	      timeOut: 5000,
	      extendedTimeOut: 1000
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      intervalId: null,
	      isHiding: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    call_show_method(this._get_$_node(), this.props);
	    if (this.props.timeOut > 0) {
	      this._set_interval_id(setTimeout(this.hideToast, this.props.timeOut));
	    }
	  },
	  handleMouseEnter: function handleMouseEnter() {
	    clearTimeout(this.state.intervalId);
	    this._set_interval_id(null);
	    this._set_is_hiding(false);
	
	    call_show_method(this._get_$_node().stop(true, true), this.props);
	  },
	  handleMouseLeave: function handleMouseLeave() {
	    if (!this.state.isHiding && (this.props.timeOut > 0 || this.props.extendedTimeOut > 0)) {
	      this._set_interval_id(setTimeout(this.hideToast, this.props.extendedTimeOut));
	    }
	  },
	  hideToast: function hideToast(override) {
	    if (this.state.isHiding || this.state.intervalId === null && !override) {
	      return;
	    }
	    this.setState({ isHiding: true });
	
	    this._get_$_node()[this.props.hideMethod]({
	      duration: this.props.hideDuration,
	      easing: this.props.hideEasing,
	      complete: this._handle_remove
	    });
	  },
	  _get_$_node: function _get_$_node() {
	    /* eslint-disable no-undef */
	    return jQuery(_reactDom2.default.findDOMNode(this));
	    /* eslint-enable no-undef */
	  },
	  _set_interval_id: function _set_interval_id(intervalId) {
	    this.setState({
	      intervalId: intervalId
	    });
	  },
	  _set_is_hiding: function _set_is_hiding(isHiding) {
	    this.setState({
	      isHiding: isHiding
	    });
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PageButtonJs = __webpack_require__(30);
	
	var _PageButtonJs2 = _interopRequireDefault(_PageButtonJs);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var PaginationList = (function (_React$Component) {
	  _inherits(PaginationList, _React$Component);
	
	  function PaginationList() {
	    _classCallCheck(this, PaginationList);
	
	    _get(Object.getPrototypeOf(PaginationList.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(PaginationList, [{
	    key: 'changePage',
	    value: function changePage(page) {
	      if (page == this.props.prePage) {
	        page = this.props.currPage - 1 < 1 ? 1 : this.props.currPage - 1;
	      } else if (page == this.props.nextPage) {
	        page = this.props.currPage + 1 > this.totalPages ? this.totalPages : this.props.currPage + 1;
	      } else if (page == this.props.lastPage) {
	        page = this.totalPages;
	      } else if (page == this.props.firstPage) {
	        page = 1;
	      } else {
	        page = parseInt(page);
	      }
	
	      if (page != this.props.currPage) {
	        this.props.changePage(page, this.props.sizePerPage);
	      }
	    }
	  }, {
	    key: 'changeSizePerPage',
	    value: function changeSizePerPage(e) {
	      e.preventDefault();
	
	      var selectSize = parseInt(e.currentTarget.text);
	      var currPage = this.props.currPage;
	
	      if (selectSize != this.props.sizePerPage) {
	        this.totalPages = Math.ceil(this.props.dataSize / selectSize);
	        if (currPage > this.totalPages) currPage = this.totalPages;
	
	        this.props.changePage(currPage, selectSize);
	        if (this.props.onSizePerPageList) {
	          this.props.onSizePerPageList(selectSize);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      this.totalPages = Math.ceil(this.props.dataSize / this.props.sizePerPage);
	      var pageBtns = this.makePage();
	      var pageListStyle = {
	        float: "right",
	        marginTop: "0px" //override the margin-top defined in .pagination class in bootstrap.
	      };
	
	      var sizePerPageList = this.props.sizePerPageList.map(function (sizePerPage) {
	        return _react2['default'].createElement(
	          'li',
	          { key: sizePerPage, role: 'presentation' },
	          _react2['default'].createElement(
	            'a',
	            { role: 'menuitem', tabIndex: '-1', href: '#', onClick: _this.changeSizePerPage.bind(_this) },
	            sizePerPage
	          )
	        );
	      });
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'row', style: { marginTop: 15 } },
	        this.props.sizePerPageList.length > 1 ? _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-md-6' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'dropdown' },
	              _react2['default'].createElement(
	                'button',
	                { className: 'btn btn-default dropdown-toggle', type: 'button', id: 'pageDropDown', 'data-toggle': 'dropdown',
	                  'aria-expanded': 'true' },
	                this.props.sizePerPage,
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  " ",
	                  _react2['default'].createElement('span', { className: 'caret' })
	                )
	              ),
	              _react2['default'].createElement(
	                'ul',
	                { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
	                sizePerPageList
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-md-6' },
	            _react2['default'].createElement(
	              'ul',
	              { className: 'pagination', style: pageListStyle },
	              pageBtns
	            )
	          )
	        ) : _react2['default'].createElement(
	          'div',
	          { className: 'col-md-12' },
	          _react2['default'].createElement(
	            'ul',
	            { className: 'pagination', style: pageListStyle },
	            pageBtns
	          )
	        )
	      );
	    }
	  }, {
	    key: 'makePage',
	    value: function makePage() {
	      var pages = this.getPages();
	      return pages.map(function (page) {
	        var isActive = page === this.props.currPage;
	        var disabled = false;
	        var hidden = false;
	        if (this.props.currPage == 1 && (page === this.props.firstPage || page === this.props.prePage)) {
	          disabled = true;
	          hidden = true;
	        }
	        if (this.props.currPage == this.totalPages && (page === this.props.nextPage || page === this.props.lastPage)) {
	          disabled = true;
	          hidden = true;
	        }
	        return _react2['default'].createElement(
	          _PageButtonJs2['default'],
	          { changePage: this.changePage.bind(this), active: isActive, disable: disabled, hidden: hidden, key: page },
	          page
	        );
	      }, this);
	    }
	  }, {
	    key: 'getPages',
	    value: function getPages() {
	      var startPage = 1,
	          endPage = this.totalPages;
	
	      startPage = Math.max(this.props.currPage - Math.floor(this.props.paginationSize / 2), 1);
	      endPage = startPage + this.props.paginationSize - 1;
	
	      if (endPage > this.totalPages) {
	        endPage = this.totalPages;
	        startPage = endPage - this.props.paginationSize + 1;
	      }
	      var pages;
	      if (startPage != 1 && this.totalPages > this.props.paginationSize) {
	        pages = [this.props.firstPage, this.props.prePage];
	      } else if (this.totalPages > 1) {
	        pages = [this.props.prePage];
	      } else {
	        pages = [];
	      }
	      for (var i = startPage; i <= endPage; i++) {
	        if (i > 0) pages.push(i);
	      }
	      if (endPage != this.totalPages) {
	        pages.push(this.props.nextPage);
	        pages.push(this.props.lastPage);
	      } else if (this.totalPages > 1) {
	        pages.push(this.props.nextPage);
	      }
	      return pages;
	    }
	  }]);
	
	  return PaginationList;
	})(_react2['default'].Component);
	
	PaginationList.propTypes = {
	  currPage: _react2['default'].PropTypes.number,
	  sizePerPage: _react2['default'].PropTypes.number,
	  dataSize: _react2['default'].PropTypes.number,
	  changePage: _react2['default'].PropTypes.func,
	  sizePerPageList: _react2['default'].PropTypes.array,
	  paginationSize: _react2['default'].PropTypes.number,
	  remote: _react2['default'].PropTypes.bool,
	  onSizePerPageList: _react2['default'].PropTypes.func,
	  prePage: _react2['default'].PropTypes.string
	};
	
	PaginationList.defaultProps = {
	  sizePerPage: _Const2['default'].SIZE_PER_PAGE
	};
	
	exports['default'] = PaginationList;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var PageButton = (function (_React$Component) {
	  _inherits(PageButton, _React$Component);
	
	  function PageButton(props) {
	    _classCallCheck(this, PageButton);
	
	    _get(Object.getPrototypeOf(PageButton.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(PageButton, [{
	    key: 'pageBtnClick',
	    value: function pageBtnClick(e) {
	      e.preventDefault();
	      this.props.changePage(e.currentTarget.textContent);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'active': this.props.active,
	        'disabled': this.props.disable,
	        'hidden': this.props.hidden
	      });
	      return _react2['default'].createElement(
	        'li',
	        { className: classes },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', onClick: this.pageBtnClick.bind(this) },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return PageButton;
	})(_react2['default'].Component);
	
	PageButton.propTypes = {
	  changePage: _react2['default'].PropTypes.func,
	  active: _react2['default'].PropTypes.bool,
	  disable: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = PageButton;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _Editor = __webpack_require__(13);
	
	var _Editor2 = _interopRequireDefault(_Editor);
	
	var _NotificationJs = __webpack_require__(14);
	
	var _NotificationJs2 = _interopRequireDefault(_NotificationJs);
	
	var ToolBar = (function (_React$Component) {
	  _inherits(ToolBar, _React$Component);
	
	  function ToolBar(props) {
	    var _this = this;
	
	    _classCallCheck(this, ToolBar);
	
	    _get(Object.getPrototypeOf(ToolBar.prototype), 'constructor', this).call(this, props);
	
	    this.handleShowOnlyToggle = function (e) {
	      _this.setState({
	        showSelected: !_this.state.showSelected
	      });
	      _this.props.onShowOnlySelected();
	    };
	
	    this.handleClearBtnClick = function () {
	      _this.refs.seachInput.value = '';
	      _this.props.onSearch('');
	    };
	
	    this.timeouteClear = 0;
	    this.state = {
	      isInsertRowTrigger: true,
	      validateState: null,
	      shakeEditor: false,
	      showSelected: false
	    };
	  }
	
	  _createClass(ToolBar, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearTimeout();
	    }
	  }, {
	    key: 'clearTimeout',
	    value: (function (_clearTimeout) {
	      function clearTimeout() {
	        return _clearTimeout.apply(this, arguments);
	      }
	
	      clearTimeout.toString = function () {
	        return _clearTimeout.toString();
	      };
	
	      return clearTimeout;
	    })(function () {
	      if (this.timeouteClear) {
	        clearTimeout(this.timeouteClear);
	        this.timeouteClear = 0;
	      }
	    })
	  }, {
	    key: 'checkAndParseForm',
	    value: function checkAndParseForm() {
	      var ts = this,
	          newObj = {},
	          isValid = true,
	          tempValue,
	          tempMsg,
	          validateState = {};
	      this.props.columns.forEach(function (column, i) {
	        if (column.autoValue) {
	          //when you want same auto generate value and not allow edit, example ID field
	          tempValue = typeof column.autoValue == 'function' ? column.autoValue() : 'autovalue-' + new Date().getTime();
	        } else {
	          var dom = this.refs[column.field + i];
	          tempValue = dom.value;
	
	          if (column.editable && column.editable.type == 'checkbox') {
	            var values = dom.value.split(':');
	            tempValue = dom.checked ? values[0] : values[1];
	          }
	
	          if (column.editable && column.editable.validator) {
	            //process validate
	            tempMsg = column.editable.validator(tempValue);
	            if (tempMsg !== true) {
	              isValid = false;
	              validateState[column.field] = tempMsg;
	            }
	          }
	        }
	
	        newObj[column.field] = tempValue;
	      }, this);
	
	      if (isValid) {
	        return newObj;
	      } else {
	        ts.clearTimeout();
	        //show error in form and shake it
	        this.setState({ validateState: validateState, shakeEditor: true });
	        //notifier error
	        ts.refs.notifier.notice('error', "Form validate errors, please checking!", "Pressed ESC can cancel");
	        //clear animate class
	        ts.timeouteClear = setTimeout(function () {
	          ts.setState({ shakeEditor: false });
	        }, 300);
	        return null;
	      }
	    }
	  }, {
	    key: 'handleSaveBtnClick',
	    value: function handleSaveBtnClick(e) {
	      var newObj = this.checkAndParseForm();
	      if (!newObj) {
	        //validate errors
	        return;
	      }
	      var msg = this.props.onAddRow(newObj);
	      if (msg) {
	        var ts = this;
	        ts.refs.notifier.notice('error', msg, "Pressed ESC can cancel");
	        ts.clearTimeout();
	        //shake form and hack prevent modal hide
	        ts.setState({ shakeEditor: true, validateState: "this is hack for prevent bootstrap modal hide" });
	        //clear animate class
	        ts.timeouteClear = setTimeout(function () {
	          ts.setState({ shakeEditor: false });
	        }, 300);
	      } else {
	        //reset state and hide modal hide
	        this.setState({
	          validateState: null,
	          shakeEditor: false
	        }, function () {
	          document.querySelector("." + "modal-backdrop").click();
	        });
	        //reset form
	        this.refs.form.reset();
	      }
	    }
	  }, {
	    key: 'handleDropRowBtnClick',
	    value: function handleDropRowBtnClick(e) {
	      this.props.onDropRow();
	    }
	  }, {
	    key: 'handleCloseBtn',
	    value: function handleCloseBtn(e) {
	      this.refs.warning.style.display = "none";
	    }
	  }, {
	    key: 'handleKeyUp',
	    value: function handleKeyUp(e) {
	      this.props.onSearch(e.currentTarget.value);
	    }
	  }, {
	    key: 'handleExportCSV',
	    value: function handleExportCSV() {
	      this.props.onExportCSV();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var modalClassName = "bs-table-modal-sm" + new Date().getTime();
	      var insertBtn = this.props.enableInsert ? _react2['default'].createElement(
	        'button',
	        { type: 'button', onClick: this.props.onAddRowBegin, className: 'btn btn-info react-bs-table-add-btn', 'data-toggle': 'modal', 'data-target': '.' + modalClassName },
	        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-plus' }),
	        ' New'
	      ) : null;
	
	      var deleteBtn = this.props.enableDelete ? _react2['default'].createElement(
	        'button',
	        { type: 'button', className: 'btn btn-warning react-bs-table-del-btn', 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Drop selected row',
	          onClick: this.handleDropRowBtnClick.bind(this) },
	        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-trash' }),
	        ' Delete'
	      ) : null;
	
	      var searchTextInput = this.renderSearchPanel();
	
	      var showSelectedOnlyBtn = this.props.enableShowOnlySelected ? _react2['default'].createElement(
	        'button',
	        { type: 'button', onClick: this.handleShowOnlyToggle.bind(this), className: 'btn btn-primary', 'data-toggle': 'button', 'aria-pressed': 'false' },
	        this.state.showSelected ? _Const2['default'].SHOW_ALL : _Const2['default'].SHOW_ONLY_SELECT
	      ) : null;
	
	      var modal = this.props.enableInsert ? this.renderInsertRowModal(modalClassName) : null;
	      var warningStyle = {
	        display: "none",
	        marginBottom: 0
	      };
	
	      var exportCSV = this.props.enableExportCSV ? _react2['default'].createElement(
	        'button',
	        { type: 'button', className: 'btn btn-success', onClick: this.handleExportCSV.bind(this) },
	        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-export' }),
	        ' Export to CSV'
	      ) : null;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'row' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-8' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'btn-group btn-group-sm', role: 'group' },
	            exportCSV,
	            insertBtn,
	            deleteBtn,
	            showSelectedOnlyBtn
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-4' },
	          searchTextInput
	        ),
	        _react2['default'].createElement(_NotificationJs2['default'], { ref: 'notifier' }),
	        modal
	      );
	    }
	  }, {
	    key: 'renderSearchPanel',
	    value: function renderSearchPanel() {
	      if (this.props.enableSearch) {
	        var classNames = 'form-group form-group-sm';
	        var clearBtn = null;
	        if (this.props.clearSearch) {
	          clearBtn = _react2['default'].createElement(
	            'span',
	            { className: 'input-group-btn' },
	            _react2['default'].createElement(
	              'button',
	              {
	                className: 'btn btn-default',
	                type: 'button',
	                onClick: this.handleClearBtnClick },
	              'Clear'
	            )
	          );
	          classNames = 'form-group form-group-sm input-group input-group-sm';
	        }
	
	        return _react2['default'].createElement(
	          'div',
	          { className: classNames },
	          _react2['default'].createElement('input', { ref: 'seachInput', className: 'form-control', type: 'text',
	            placeholder: this.props.searchPlaceholder ? this.props.searchPlaceholder : 'Search',
	            onKeyUp: this.handleKeyUp.bind(this) }),
	          clearBtn
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'renderInsertRowModal',
	    value: function renderInsertRowModal(modalClassName) {
	      var validateState = this.state.validateState || {};
	      var inputField = this.props.columns.map(function (column, i) {
	        var editable = column.editable,
	            format = column.format,
	            attr = { ref: column.field + i, placeholder: editable.placeholder ? editable.placeholder : column.name };
	
	        if (column.autoValue) {
	          //when you want same auto generate value and not allow edit, example ID field
	          return null;
	        }
	        var error = validateState[column.field] ? _react2['default'].createElement(
	          'span',
	          { className: 'help-block bg-danger' },
	          validateState[column.field]
	        ) : null;
	
	        // let editor = Editor(editable,attr,format);
	        // if(editor.props.type && editor.props.type == 'checkbox'){
	        return _react2['default'].createElement(
	          'div',
	          { className: 'form-group', key: column.field },
	          _react2['default'].createElement(
	            'label',
	            null,
	            column.name
	          ),
	          (0, _Editor2['default'])(editable, attr, format, ''),
	          error
	        );
	      });
	      var modalClass = (0, _classnames2['default'])("modal", "fade", modalClassName, {
	        'in': this.state.shakeEditor || this.state.validateState //hack prevent bootstrap modal hide by reRender
	      });
	      var dialogClass = (0, _classnames2['default'])("modal-dialog", "modal-sm", {
	        "animated": this.state.shakeEditor,
	        "shake": this.state.shakeEditor
	      });
	      return _react2['default'].createElement(
	        'div',
	        { ref: 'modal', className: modalClass, tabIndex: '-1', role: 'dialog' },
	        _react2['default'].createElement(
	          'div',
	          { className: dialogClass },
	          _react2['default'].createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2['default'].createElement(
	                'button',
	                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                _react2['default'].createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '×'
	                )
	              ),
	              _react2['default'].createElement(
	                'h4',
	                { className: 'modal-title' },
	                'New Record'
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2['default'].createElement(
	                'form',
	                { ref: 'form' },
	                inputField
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2['default'].createElement(
	                'button',
	                { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
	                'Close'
	              ),
	              _react2['default'].createElement(
	                'button',
	                { type: 'button', className: 'btn btn-info', onClick: this.handleSaveBtnClick.bind(this) },
	                'Save'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ToolBar;
	})(_react2['default'].Component);
	
	ToolBar.propTypes = {
	  onAddRow: _react2['default'].PropTypes.func,
	  onDropRow: _react2['default'].PropTypes.func,
	  onShowOnlySelected: _react2['default'].PropTypes.func,
	  enableInsert: _react2['default'].PropTypes.bool,
	  enableDelete: _react2['default'].PropTypes.bool,
	  enableSearch: _react2['default'].PropTypes.bool,
	  enableShowOnlySelected: _react2['default'].PropTypes.bool,
	  columns: _react2['default'].PropTypes.array,
	  searchPlaceholder: _react2['default'].PropTypes.string,
	  clearSearch: _react2['default'].PropTypes.bool
	};
	
	ToolBar.defaultProps = {
	  enableInsert: false,
	  enableDelete: false,
	  enableSearch: false,
	  enableShowOnlySelected: false,
	  clearSearch: false
	};
	exports['default'] = ToolBar;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var TableFilter = (function (_React$Component) {
	  _inherits(TableFilter, _React$Component);
	
	  function TableFilter(props) {
	    _classCallCheck(this, TableFilter);
	
	    _get(Object.getPrototypeOf(TableFilter.prototype), 'constructor', this).call(this, props);
	    this.filterObj = {};
	  }
	
	  _createClass(TableFilter, [{
	    key: 'handleKeyUp',
	    value: function handleKeyUp(e) {
	      if (e.currentTarget.value.trim() === "") delete this.filterObj[e.currentTarget.name];else this.filterObj[e.currentTarget.name] = e.currentTarget.value;
	
	      this.props.onFilter(this.filterObj);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tableClasses = (0, _classnames2['default'])("table", {
	        'table-striped': this.props.striped,
	        'table-condensed': this.props.condensed
	      });
	      var selectRowHeader = null;
	
	      if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE || this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) {
	        var style = {
	          width: 35,
	          paddingLeft: 0,
	          paddingRight: 0
	        };
	        selectRowHeader = _react2['default'].createElement(
	          'th',
	          { style: style, key: -1 },
	          'Filter'
	        );
	      }
	      var filterField = this.props.columns.map(function (column) {
	        var thStyle = {
	          display: column.hidden ? "none" : null,
	          width: column.width
	        };
	        return _react2['default'].createElement(
	          'th',
	          { key: column.name, style: thStyle },
	          _react2['default'].createElement(
	            'div',
	            { className: 'th-inner table-header-column' },
	            _react2['default'].createElement('input', { size: '10', type: 'text', placeholder: column.name, name: column.name, onKeyUp: this.handleKeyUp.bind(this) })
	          )
	        );
	      }, this);
	      return _react2['default'].createElement(
	        'table',
	        { className: tableClasses, style: { marginTop: 5 } },
	        _react2['default'].createElement(
	          'thead',
	          null,
	          _react2['default'].createElement(
	            'tr',
	            { style: { borderBottomStyle: 'hidden' } },
	            selectRowHeader,
	            filterField
	          )
	        )
	      );
	    }
	  }]);
	
	  return TableFilter;
	})(_react2['default'].Component);
	
	TableFilter.propTypes = {
	  columns: _react2['default'].PropTypes.array,
	  rowSelectType: _react2['default'].PropTypes.string,
	  onFilter: _react2['default'].PropTypes.func
	};
	exports['default'] = TableFilter;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var EventEmitter = __webpack_require__(34).EventEmitter;
	
	function _sort(arr, sortField, order, sortFunc) {
	  order = order.toLowerCase();
	  arr.sort(function (a, b) {
	    if (sortFunc) {
	      return sortFunc(a, b, order, sortField);
	    } else {
	      if (order == _Const2['default'].SORT_DESC) {
	        return a[sortField] > b[sortField] ? -1 : a[sortField] < b[sortField] ? 1 : 0;
	      } else {
	        return a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
	      }
	    }
	  });
	
	  return arr;
	}
	
	var TableDataSet = (function (_EventEmitter) {
	  _inherits(TableDataSet, _EventEmitter);
	
	  function TableDataSet(data) {
	    _classCallCheck(this, TableDataSet);
	
	    _get(Object.getPrototypeOf(TableDataSet.prototype), 'constructor', this).call(this, data);
	    this.data = data;
	  }
	
	  _createClass(TableDataSet, [{
	    key: 'setData',
	    value: function setData(data) {
	      this.emit('change', data);
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.data = null;
	    }
	  }, {
	    key: 'getData',
	    value: function getData() {
	      return this.data;
	    }
	  }]);
	
	  return TableDataSet;
	})(EventEmitter);
	
	exports.TableDataSet = TableDataSet;
	
	var TableDataStore = (function () {
	  function TableDataStore(data) {
	    _classCallCheck(this, TableDataStore);
	
	    this.data = data;
	    this.colInfos = null;
	    this.filteredData = null;
	    this.isOnFilter = false;
	    this.filterObj = null;
	    this.searchText = null;
	    this.sortObj = null;
	    this.pageObj = {};
	    this.selected = [];
	    this.multiColumnSearch = false;
	    this.showOnlySelected = false;
	    this.remote = false; // remote data
	  }
	
	  _createClass(TableDataStore, [{
	    key: 'setProps',
	    value: function setProps(props) {
	      this.keyField = props.keyField;
	      this.enablePagination = props.isPagination;
	      this.colInfos = props.colInfos;
	      this.remote = props.remote;
	      this.multiColumnSearch = props.multiColumnSearch;
	    }
	  }, {
	    key: 'setData',
	    value: function setData(data) {
	      this.data = data;
	      if (this.isOnFilter) {
	        if (null !== this.filterObj) this.filter(this.filterObj);
	        if (null !== this.searchText) this.search(this.searchText);
	      }
	      if (this.sortObj) {
	        this.sort(this.sortObj.order, this.sortObj.sortField);
	      }
	    }
	  }, {
	    key: 'getSortInfo',
	    value: function getSortInfo() {
	      return this.sortObj;
	    }
	  }, {
	    key: 'setSelectedRowKey',
	    value: function setSelectedRowKey(selectedRowKeys) {
	      this.selected = selectedRowKeys;
	    }
	  }, {
	    key: 'getSelectedRowKeys',
	    value: function getSelectedRowKeys() {
	      return this.selected;
	    }
	  }, {
	    key: 'getCurrentDisplayData',
	    value: function getCurrentDisplayData() {
	      if (this.isOnFilter) return this.filteredData;else return this.data;
	    }
	  }, {
	    key: 'ignoreNonSelected',
	    value: function ignoreNonSelected() {
	      var _this = this;
	
	      this.showOnlySelected = !this.showOnlySelected;
	      if (this.showOnlySelected) {
	        this.isOnFilter = true;
	        this.filteredData = this.data.filter(function (row) {
	          var result = _this.selected.find(function (x) {
	            return row[_this.keyField] === x;
	          });
	          return typeof result !== 'undefined' ? true : false;
	        });
	      } else {
	        this.isOnFilter = false;
	      }
	    }
	  }, {
	    key: 'sort',
	    value: function sort(order, sortField) {
	      this.sortObj = {
	        order: order,
	        sortField: sortField
	      };
	
	      var currentDisplayData = this.getCurrentDisplayData();
	      if (!this.colInfos[sortField]) return this;
	
	      var sortFunc = this.colInfos[sortField].sortFunc;
	
	      currentDisplayData = _sort(currentDisplayData, sortField, order, sortFunc);
	
	      return this;
	    }
	  }, {
	    key: 'page',
	    value: function page(_page, sizePerPage) {
	      this.pageObj.end = _page * sizePerPage - 1;
	      this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
	      return this;
	    }
	  }, {
	    key: 'edit',
	    value: function edit(newVal, rowIndex, fieldName) {
	      var currentDisplayData = this.getCurrentDisplayData();
	      var rowKeyCache = undefined;
	      if (!this.enablePagination) {
	        currentDisplayData[rowIndex][fieldName] = newVal;
	        rowKeyCache = currentDisplayData[rowIndex][this.keyField];
	      } else {
	        currentDisplayData[this.pageObj.start + rowIndex][fieldName] = newVal;
	        rowKeyCache = currentDisplayData[this.pageObj.start + rowIndex][this.keyField];
	      }
	      if (this.isOnFilter) {
	        this.data.forEach(function (row) {
	          if (row[this.keyField] === rowKeyCache) {
	            row[fieldName] = newVal;
	          }
	        }, this);
	        if (null !== this.filterObj) this.filter(this.filterObj);
	        if (null !== this.searchText) this.search(this.searchText);
	      }
	      return this;
	    }
	  }, {
	    key: 'addAtBegin',
	    value: function addAtBegin(newObj) {
	      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
	        throw this.keyField + " can't be empty value.";
	      }
	      var currentDisplayData = this.getCurrentDisplayData();
	      currentDisplayData.forEach(function (row) {
	        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
	          throw this.keyField + " " + newObj[this.keyField] + " already exists";
	        }
	      }, this);
	      console.log('@@');
	      currentDisplayData.unshift(newObj);
	      if (this.isOnFilter) {
	        this.data.unshift(newObj);
	      }
	    }
	  }, {
	    key: 'add',
	    value: function add(newObj) {
	      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
	        throw this.keyField + " can't be empty value.";
	      }
	      var currentDisplayData = this.getCurrentDisplayData();
	      currentDisplayData.forEach(function (row) {
	        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
	          throw this.keyField + " " + newObj[this.keyField] + " already exists";
	        }
	      }, this);
	
	      currentDisplayData.push(newObj);
	      if (this.isOnFilter) {
	        this.data.push(newObj);
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove(rowKey) {
	      var currentDisplayData = this.getCurrentDisplayData();
	      var result = currentDisplayData.filter(function (row) {
	        return rowKey.indexOf(row[this.keyField]) == -1;
	      }, this);
	
	      if (this.isOnFilter) {
	        this.data = this.data.filter(function (row) {
	          return rowKey.indexOf(row[this.keyField]) == -1;
	        }, this);
	        this.filteredData = result;
	      } else {
	        this.data = result;
	      }
	    }
	  }, {
	    key: 'filter',
	    value: function filter(filterObj) {
	      var _this2 = this;
	
	      if (Object.keys(filterObj).length == 0) {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.filterObj = null;
	      } else {
	        this.filterObj = filterObj;
	        this.filteredData = this.data.filter(function (row) {
	          var valid = true;
	          var filterVal = undefined;
	          for (var key in filterObj) {
	            var targetVal = row[key];
	
	            switch (filterObj[key].type) {
	              case _Const2['default'].FILTER_TYPE.NUMBER:
	                {
	                  filterVal = filterObj[key].value.number;
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.CUSTOM:
	                {
	                  filterVal = typeof filterObj[key].value === "object" ? undefined : typeof filterObj[key].value === "string" ? filterObj[key].value.toLowerCase() : filterObj[key].value;
	                  break;
	                }
	              default:
	                {
	                  filterVal = typeof filterObj[key].value === "string" ? filterObj[key].value.toLowerCase() : filterObj[key].value;
	                  if (filterVal === undefined) {
	                    // Support old filter
	                    filterVal = filterObj[key].toLowerCase();
	                  }
	                  break;
	                }
	            }
	
	            if (_this2.colInfos[key]) {
	              var _colInfos$key = _this2.colInfos[key];
	              var format = _colInfos$key.format;
	              var filterFormatted = _colInfos$key.filterFormatted;
	              var formatExtraData = _colInfos$key.formatExtraData;
	
	              if (filterFormatted && format) {
	                targetVal = format(row[key], row, formatExtraData);
	              }
	            }
	
	            switch (filterObj[key].type) {
	              case _Const2['default'].FILTER_TYPE.NUMBER:
	                {
	                  valid = _this2.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.DATE:
	                {
	                  valid = _this2.filterDate(targetVal, filterVal);
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.CUSTOM:
	                {
	                  valid = _this2.filterCustom(targetVal, filterVal, filterObj[key].value);
	                  break;
	                }
	              default:
	                {
	                  valid = _this2.filterText(targetVal, filterVal);
	                  break;
	                }
	            }
	            if (!valid) {
	              break;
	            }
	          }
	          return valid;
	        });
	        this.isOnFilter = true;
	      }
	    }
	  }, {
	    key: 'filterNumber',
	    value: function filterNumber(targetVal, filterVal, comparator) {
	      var valid = true;
	      switch (comparator) {
	        case "=":
	          {
	            if (targetVal != filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case ">":
	          {
	            if (targetVal <= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case ">=":
	          {
	            if (targetVal < filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case "<":
	          {
	            if (targetVal >= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case "<=":
	          {
	            if (targetVal > filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case "!=":
	          {
	            if (targetVal == filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        default:
	          {
	            console.error("Number comparator provided is not supported");
	            break;
	          }
	      }
	      return valid;
	    }
	  }, {
	    key: 'filterDate',
	    value: function filterDate(targetVal, filterVal) {
	      return targetVal.getDate() == filterVal.getDate() && targetVal.getMonth() == filterVal.getMonth() && targetVal.getFullYear() == filterVal.getFullYear();
	    }
	  }, {
	    key: 'filterCustom',
	    value: function filterCustom(targetVal, filterVal, callbackInfo) {
	      if (callbackInfo != null && typeof callbackInfo === "object") {
	        return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
	      }
	
	      return filterText(targetVal, filterVal);
	    }
	  }, {
	    key: 'filterText',
	    value: function filterText(targetVal, filterVal) {
	      if (targetVal.toString().toLowerCase().indexOf(filterVal) == -1) {
	        return false;
	      }
	
	      return true;
	    }
	
	    /* General search function
	     * It will search for the text if the input includes that text;
	     * It will search for exact number if the input is that number
	     */
	  }, {
	    key: 'search',
	    value: function search(searchText) {
	      var _this3 = this;
	
	      if (searchText.trim() === "") {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.searchText = null;
	      } else {
	        (function () {
	          _this3.searchText = searchText;
	          var searchTextArray = [];
	
	          if (_this3.multiColumnSearch) {
	            searchTextArray = searchText.split(' ');
	          } else {
	            searchTextArray.push(searchText);
	          }
	
	          _this3.filteredData = _this3.data.filter(function (row) {
	            var keys = Object.keys(row);
	            var valid = false;
	            // for loops are ugly, but performance matters here.
	            // And you cant break from a forEach.
	            // http://jsperf.com/for-vs-foreach/66
	            for (var i = 0, keysLength = keys.length; i < keysLength; i++) {
	              var key = keys[i];
	              if (_this3.colInfos[key] && row[key]) {
	                var _colInfos$key2 = _this3.colInfos[key];
	                var format = _colInfos$key2.format;
	                var filterFormatted = _colInfos$key2.filterFormatted;
	                var formatExtraData = _colInfos$key2.formatExtraData;
	                var searchable = _colInfos$key2.searchable;
	                var hidden = _colInfos$key2.hidden;
	
	                var targetVal = row[key];
	                if (searchable) {
	                  if (filterFormatted && format) {
	                    targetVal = format(targetVal, row, formatExtraData);
	                  }
	                  for (var j = 0, textLength = searchTextArray.length; j < textLength; j++) {
	                    var filterVal = searchTextArray[j].toLowerCase();
	                    if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
	                      valid = true;
	                      break;
	                    }
	                  }
	                }
	              }
	            }
	            return valid;
	          });
	          _this3.isOnFilter = true;
	        })();
	      }
	    }
	  }, {
	    key: 'getDataIgnoringPagination',
	    value: function getDataIgnoringPagination() {
	      var _data = this.getCurrentDisplayData();
	      return _data;
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _data = this.getCurrentDisplayData();
	
	      if (_data.length == 0) return _data;
	
	      if (this.remote || !this.enablePagination) {
	        return _data;
	      } else {
	        var result = [];
	        for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
	          result.push(_data[i]);
	          if (i + 1 == _data.length) break;
	        }
	        return result;
	      }
	    }
	  }, {
	    key: 'getKeyField',
	    value: function getKeyField() {
	      return this.keyField;
	    }
	  }, {
	    key: 'getDataNum',
	    value: function getDataNum() {
	      return this.getCurrentDisplayData().length;
	    }
	  }, {
	    key: 'isChangedPage',
	    value: function isChangedPage() {
	      return this.pageObj.start && this.pageObj.end ? true : false;
	    }
	  }, {
	    key: 'getAllRowkey',
	    value: function getAllRowkey() {
	      return this.data.map(function (row) {
	        return row[this.keyField];
	      }, this);
	    }
	  }]);
	
	  return TableDataStore;
	})();
	
	exports.TableDataStore = TableDataStore;
	
	;

/***/ },
/* 34 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++)
	          args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++)
	      args[i - 1] = arguments[i];
	
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type])
	    ret = 0;
	  else if (isFunction(emitter._events[type]))
	    ret = 1;
	  else
	    ret = emitter._events[type].length;
	  return ret;
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	if (typeof window !== 'undefined') {
	  var filesaver = __webpack_require__(36);
	  var saveAs = filesaver.saveAs;
	}
	
	function toString(data, keys) {
	  var dataString = "";
	  if (data.length === 0) return dataString;
	
	  dataString += keys.join(',') + '\n';
	
	  data.map(function (row) {
	    keys.map(function (col, i) {
	      var cell = typeof row[col] !== 'undefined' ? '"' + row[col] + '"' : "";
	      dataString += cell;
	      if (i + 1 < keys.length) dataString += ',';
	    });
	
	    dataString += '\n';
	  });
	
	  return dataString;
	};
	
	var exportCSV = function exportCSV(data, keys, filename) {
	  var dataString = toString(data, keys);
	  if (typeof window !== 'undefined') {
	    saveAs(new Blob([dataString], { type: "text/plain;charset=utf-8" }), filename || 'spreadsheet.csv');
	  }
	};
	
	exports['default'] = exportCSV;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
	 * A saveAs() FileSaver implementation.
	 * 1.1.20151003
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: MIT
	 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
	 */
	
	/*global self */
	/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */
	
	/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
	
	"use strict";
	
	var saveAs = saveAs || (function (view) {
		"use strict";
		// IE <10 is explicitly unsupported
		if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
			return;
		}
		var doc = view.document,
		   
		// only get URL when necessary in case Blob.js hasn't overridden it yet
		get_URL = function get_URL() {
			return view.URL || view.webkitURL || view;
		},
		    save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
		    can_use_save_link = ("download" in save_link),
		    click = function click(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		},
		    is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
		    webkit_req_fs = view.webkitRequestFileSystem,
		    req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem,
		    throw_outside = function throw_outside(ex) {
			(view.setImmediate || view.setTimeout)(function () {
				throw ex;
			}, 0);
		},
		    force_saveable_type = "application/octet-stream",
		    fs_min_size = 0,
		   
		// See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
		// https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
		// for the reasoning behind the timeout and revocation flow
		arbitrary_revoke_timeout = 500,
		    // in ms
		revoke = function revoke(file) {
			var revoker = function revoker() {
				if (typeof file === "string") {
					// file is an object URL
					get_URL().revokeObjectURL(file);
				} else {
					// file is a File
					file.remove();
				}
			};
			if (view.chrome) {
				revoker();
			} else {
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
		},
		    dispatch = function dispatch(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		},
		    auto_bom = function auto_bom(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob(["﻿", blob], { type: blob.type });
			}
			return blob;
		},
		    FileSaver = function FileSaver(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var filesaver = this,
			    type = blob.type,
			    blob_changed = false,
			    object_url,
			    target_view,
			    dispatch_all = function dispatch_all() {
				dispatch(filesaver, "writestart progress write writeend".split(" "));
			},
			   
			// on any filesys errors revert to saving with object URLs
			fs_error = function fs_error() {
				if (target_view && is_safari && typeof FileReader !== "undefined") {
					// Safari doesn't allow downloading of blob urls
					var reader = new FileReader();
					reader.onloadend = function () {
						var base64Data = reader.result;
						target_view.location.href = "data:attachment/file" + base64Data.slice(base64Data.search(/[,;]/));
						filesaver.readyState = filesaver.DONE;
						dispatch_all();
					};
					reader.readAsDataURL(blob);
					filesaver.readyState = filesaver.INIT;
					return;
				}
				// don't create more object URLs than needed
				if (blob_changed || !object_url) {
					object_url = get_URL().createObjectURL(blob);
				}
				if (target_view) {
					target_view.location.href = object_url;
				} else {
					var new_tab = view.open(object_url, "_blank");
					if (new_tab == undefined && is_safari) {
						//Apple do not allow window.open, see http://bit.ly/1kZffRI
						view.location.href = object_url;
					}
				}
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				revoke(object_url);
			},
			    abortable = function abortable(func) {
				return function () {
					if (filesaver.readyState !== filesaver.DONE) {
						return func.apply(this, arguments);
					}
				};
			},
			    create_if_not_found = { create: true, exclusive: false },
			    slice;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				save_link.href = object_url;
				save_link.download = name;
				setTimeout(function () {
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			// Update: Google errantly closed 91158, I submitted it again:
			// https://code.google.com/p/chromium/issues/detail?id=389642
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function (dir) {
					var save = function save() {
						dir.getFile(name, create_if_not_found, abortable(function (file) {
							file.createWriter(abortable(function (writer) {
								writer.onwriteend = function (event) {
									target_view.location.href = file.toURL();
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
									revoke(file);
								};
								writer.onerror = function () {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function (event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function () {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, { create: false }, abortable(function (file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function (ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		},
		    FS_proto = FileSaver.prototype,
		    saveAs = function saveAs(blob, name, no_auto_bom) {
			return new FileSaver(blob, name, no_auto_bom);
		};
		// IE 10+ (native saveAs)
		if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
			return function (blob, name, no_auto_bom) {
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				return navigator.msSaveOrOpenBlob(blob, name || "download");
			};
		}
	
		FS_proto.abort = function () {
			var filesaver = this;
			filesaver.readyState = filesaver.DONE;
			dispatch(filesaver, "abort");
		};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;
	
		FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
	
		return saveAs;
	})(typeof self !== "undefined" && self || typeof window !== "undefined" && window || undefined.content);
	// `self` is undefined in Firefox for Android content script context
	// while `this` is nsIContentFrameMessageManager
	// with an attribute `content` that corresponds to the window
	
	if (typeof module !== "undefined" && module.exports) {
		module.exports.saveAs = saveAs;
	} else if ("function" !== "undefined" && __webpack_require__(37) !== null && __webpack_require__(38) != null) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return saveAs;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 38 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var EventEmitter = __webpack_require__(34).EventEmitter;
	
	var Filter = (function (_EventEmitter) {
	    _inherits(Filter, _EventEmitter);
	
	    function Filter(data) {
	        _classCallCheck(this, Filter);
	
	        _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).call(this, data);
	        this.currentFilter = {};
	    }
	
	    _createClass(Filter, [{
	        key: 'handleFilter',
	        value: function handleFilter(dataField, value, type) {
	            var filterType = type || _Const2['default'].FILTER_TYPE.CUSTOM;
	
	            if (value != null && typeof value === 'object') {
	                // value of the filter is an object
	                var hasValue = true;
	                for (var prop in value) {
	                    if (!value[prop] || value[prop] === "") {
	                        hasValue = false;
	                        break;
	                    }
	                }
	                // if one of the object properties is undefined or empty, we remove the filter
	                hasValue ? this.currentFilter[dataField] = { value: value, type: filterType } : delete this.currentFilter[dataField];
	            } else if (!value || value.trim() === "") {
	                delete this.currentFilter[dataField];
	            } else {
	                this.currentFilter[dataField] = { value: value.trim(), type: filterType };
	            }
	            this.emit('onFilterChange', this.currentFilter);
	        }
	    }]);
	
	    return Filter;
	})(EventEmitter);
	
	exports.Filter = Filter;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _util = __webpack_require__(7);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _filtersDate = __webpack_require__(41);
	
	var _filtersDate2 = _interopRequireDefault(_filtersDate);
	
	var _filtersText = __webpack_require__(42);
	
	var _filtersText2 = _interopRequireDefault(_filtersText);
	
	var _filtersSelect = __webpack_require__(43);
	
	var _filtersSelect2 = _interopRequireDefault(_filtersSelect);
	
	var _filtersNumber = __webpack_require__(44);
	
	var _filtersNumber2 = _interopRequireDefault(_filtersNumber);
	
	var TableHeaderColumn = (function (_React$Component) {
	  _inherits(TableHeaderColumn, _React$Component);
	
	  function TableHeaderColumn(props) {
	    _classCallCheck(this, TableHeaderColumn);
	
	    _get(Object.getPrototypeOf(TableHeaderColumn.prototype), 'constructor', this).call(this, props);
	    this.handleFilter = this.handleFilter.bind(this);
	  }
	
	  _createClass(TableHeaderColumn, [{
	    key: 'handleColumnClick',
	    value: function handleColumnClick(e) {
	      if (!this.props.dataSort) return;
	      var order = this.props.sort == _Const2['default'].SORT_DESC ? _Const2['default'].SORT_ASC : _Const2['default'].SORT_DESC;
	      this.props.onSort(order, this.props.dataField);
	    }
	  }, {
	    key: 'handleFilter',
	    value: function handleFilter(value, type) {
	      this.props.filter.emitter.handleFilter(this.props.dataField, value, type);
	    }
	  }, {
	    key: 'getFilters',
	    value: function getFilters() {
	      switch (this.props.filter.type) {
	        case _Const2['default'].FILTER_TYPE.TEXT:
	          {
	            return _react2['default'].createElement(_filtersText2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.SELECT:
	          {
	            return _react2['default'].createElement(_filtersSelect2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.NUMBER:
	          {
	            return _react2['default'].createElement(_filtersNumber2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.DATE:
	          {
	            return _react2['default'].createElement(_filtersDate2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.CUSTOM:
	          {
	            return this.props.filter.getElement(this.handleFilter, this.props.filter.customFilterParameters);
	          }
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.refs.innerDiv.setAttribute("data-field", this.props.dataField);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var defaultCaret = undefined;
	      var width = this.props.width !== null ? parseInt(this.props.width) : null;
	      var thStyle = {
	        textAlign: this.props.dataAlign,
	        display: this.props.hidden ? "none" : null,
	        width: width,
	        maxWidth: width
	      };
	      if (this.props.sortIndicator) {
	        defaultCaret = !this.props.dataSort ? null : _react2['default'].createElement(
	          'span',
	          { className: 'order' },
	          _react2['default'].createElement(
	            'span',
	            { className: 'dropdown' },
	            _react2['default'].createElement('span', { className: 'caret', style: { margin: '10px 0 10px 5px', color: '#ccc' } })
	          ),
	          _react2['default'].createElement(
	            'span',
	            { className: 'dropup' },
	            _react2['default'].createElement('span', { className: 'caret', style: { margin: '10px 0', color: '#ccc' } })
	          )
	        );
	      }
	      var sortCaret = this.props.sort ? _util2['default'].renderReactSortCaret(this.props.sort) : defaultCaret;
	
	      var classes = this.props.className + " " + (this.props.dataSort ? "sort-column" : "");
	      return _react2['default'].createElement(
	        'th',
	        { ref: 'header-col', className: classes, style: thStyle },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'innerDiv', className: 'th-inner table-header-column',
	            onClick: this.handleColumnClick.bind(this) },
	          this.props.children,
	          sortCaret
	        ),
	        this.props.filter ? this.getFilters() : null
	      );
	    }
	  }]);
	
	  return TableHeaderColumn;
	})(_react2['default'].Component);
	
	var filterTypeArray = [];
	for (var key in _Const2['default'].FILTER_TYPE) {
	  filterTypeArray.push(_Const2['default'].FILTER_TYPE[key]);
	}
	
	TableHeaderColumn.propTypes = {
	  dataField: _react2['default'].PropTypes.string,
	  dataAlign: _react2['default'].PropTypes.string,
	  dataSort: _react2['default'].PropTypes.bool,
	  onSort: _react2['default'].PropTypes.func,
	  dataFormat: _react2['default'].PropTypes.func,
	  isKey: _react2['default'].PropTypes.bool,
	  editable: _react2['default'].PropTypes.any,
	  hidden: _react2['default'].PropTypes.bool,
	  searchable: _react2['default'].PropTypes.bool,
	  className: _react2['default'].PropTypes.string,
	  width: _react2['default'].PropTypes.string,
	  sortFunc: _react2['default'].PropTypes.func,
	  columnClassName: _react2['default'].PropTypes.any,
	  filterFormatted: _react2['default'].PropTypes.bool,
	  sort: _react2['default'].PropTypes.string,
	  formatExtraData: _react2['default'].PropTypes.any,
	  filter: _react2['default'].PropTypes.shape({
	    type: _react2['default'].PropTypes.oneOf(filterTypeArray),
	    delay: _react2['default'].PropTypes.number,
	    options: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, // for SelectFilter
	    _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number) //for NumberFilter
	    ]),
	    numberComparators: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    emitter: _react2['default'].PropTypes.object,
	    placeholder: _react2['default'].PropTypes.string,
	    getElement: _react2['default'].PropTypes.func,
	    customFilterParameters: _react2['default'].PropTypes.object
	  }),
	  sortIndicator: _react2['default'].PropTypes.bool
	};
	
	TableHeaderColumn.defaultProps = {
	  dataAlign: "left",
	  dataSort: false,
	  dataFormat: undefined,
	  isKey: false,
	  editable: true,
	  onSort: undefined,
	  hidden: false,
	  searchable: true,
	  className: "",
	  width: null,
	  sortFunc: undefined,
	  columnClassName: '',
	  filterFormatted: false,
	  sort: undefined,
	  formatExtraData: undefined,
	  filter: undefined,
	  sortIndicator: true
	};
	
	exports['default'] = TableHeaderColumn;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var DateFilter = (function (_React$Component) {
	    _inherits(DateFilter, _React$Component);
	
	    function DateFilter(props) {
	        _classCallCheck(this, DateFilter);
	
	        _get(Object.getPrototypeOf(DateFilter.prototype), 'constructor', this).call(this, props);
	        this.filter = this.filter.bind(this);
	    }
	
	    _createClass(DateFilter, [{
	        key: 'setDefaultDate',
	        value: function setDefaultDate() {
	            var defaultDate = "";
	            if (this.props.defaultValue) {
	                // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
	                var defaultValue = new Date(this.props.defaultValue);
	                defaultDate = defaultValue.getFullYear() + '-' + ("0" + (defaultValue.getMonth() + 1)).slice(-2) + '-' + ("0" + defaultValue.getDate()).slice(-2);
	            }
	            return defaultDate;
	        }
	    }, {
	        key: 'filter',
	        value: function filter(event) {
	            var dateValue = event.target.value;
	            if (dateValue) {
	                this.props.filterHandler(new Date(dateValue), _Const2['default'].FILTER_TYPE.DATE);
	            } else {
	                this.props.filterHandler(null, _Const2['default'].FILTER_TYPE.DATE);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dateValue = this.refs.inputDate.defaultValue;
	            if (dateValue) {
	                this.props.filterHandler(new Date(dateValue), _Const2['default'].FILTER_TYPE.DATE);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('input', { ref: 'inputDate',
	                className: 'filter date-filter form-control',
	                type: 'date',
	                onChange: this.filter,
	                defaultValue: this.setDefaultDate() });
	        }
	    }]);
	
	    return DateFilter;
	})(_react2['default'].Component);
	
	;
	
	DateFilter.propTypes = {
	    filterHandler: _react2['default'].PropTypes.func.isRequired,
	    defaultValue: _react2['default'].PropTypes.object,
	    columnName: _react2['default'].PropTypes.string
	};
	
	exports['default'] = DateFilter;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var TextFilter = (function (_React$Component) {
		_inherits(TextFilter, _React$Component);
	
		function TextFilter(props) {
			_classCallCheck(this, TextFilter);
	
			_get(Object.getPrototypeOf(TextFilter.prototype), 'constructor', this).call(this, props);
			this.filter = this.filter.bind(this);
			this.timeout = null;
		}
	
		_createClass(TextFilter, [{
			key: 'filter',
			value: function filter(event) {
				if (this.timeout) {
					clearTimeout(this.timeout);
				}
				var self = this;
				var filterValue = event.target.value;
				this.timeout = setTimeout(function () {
					self.props.filterHandler(filterValue, _Const2['default'].FILTER_TYPE.TEXT);
				}, self.props.delay);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this.refs.inputText.defaultValue) {
					this.props.filterHandler(this.refs.inputText.defaultValue, _Const2['default'].FILTER_TYPE.TEXT);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				clearTimeout(this.timeout);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement('input', { ref: 'inputText',
					className: 'filter text-filter form-control',
					type: 'text',
					onChange: this.filter,
					placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
					defaultValue: this.props.defaultValue ? this.props.defaultValue : "" });
			}
		}]);
	
		return TextFilter;
	})(_react2['default'].Component);
	
	;
	
	TextFilter.propTypes = {
		filterHandler: _react2['default'].PropTypes.func.isRequired,
		defaultValue: _react2['default'].PropTypes.string,
		delay: _react2['default'].PropTypes.number,
		placeholder: _react2['default'].PropTypes.string,
		columnName: _react2['default'].PropTypes.string
	};
	
	TextFilter.defaultProps = {
		delay: _Const2['default'].FILTER_DELAY
	};
	
	exports['default'] = TextFilter;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var SelectFilter = (function (_React$Component) {
		_inherits(SelectFilter, _React$Component);
	
		function SelectFilter(props) {
			_classCallCheck(this, SelectFilter);
	
			_get(Object.getPrototypeOf(SelectFilter.prototype), 'constructor', this).call(this, props);
			this.filter = this.filter.bind(this);
			this.state = {
				isPlaceholderSelected: this.props.defaultValue == undefined || !this.props.options.hasOwnProperty(this.props.defaultValue)
			};
		}
	
		_createClass(SelectFilter, [{
			key: 'filter',
			value: function filter(event) {
				this.setState({ isPlaceholderSelected: event.target.value === "" });
				this.props.filterHandler(event.target.value, _Const2['default'].FILTER_TYPE.SELECT);
			}
		}, {
			key: 'getOptions',
			value: function getOptions() {
				var optionTags = [];
				var options = this.props.options;
				optionTags.push(_react2['default'].createElement(
					'option',
					{ key: '-1', value: '' },
					this.props.placeholder || 'Select ' + this.props.columnName + '...'
				));
				Object.keys(options).map(function (key) {
					optionTags.push(_react2['default'].createElement(
						'option',
						{ key: key, value: key },
						options[key]
					));
				});
				return optionTags;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this.refs.selectInput.value) {
					this.props.filterHandler(this.refs.selectInput.value, _Const2['default'].FILTER_TYPE.SELECT);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var selectClass = (0, _classnames2['default'])("filter", "select-filter", "form-control", { "placeholder-selected": this.state.isPlaceholderSelected });
	
				return _react2['default'].createElement(
					'select',
					{ ref: 'selectInput',
						className: selectClass,
						onChange: this.filter,
						defaultValue: this.props.defaultValue != undefined ? this.props.defaultValue : "" },
					this.getOptions()
				);
			}
		}]);
	
		return SelectFilter;
	})(_react2['default'].Component);
	
	;
	
	SelectFilter.propTypes = {
		filterHandler: _react2['default'].PropTypes.func.isRequired,
		options: _react2['default'].PropTypes.object.isRequired,
		placeholder: _react2['default'].PropTypes.string,
		columnName: _react2['default'].PropTypes.string
	};
	
	exports['default'] = SelectFilter;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var legalComparators = ["=", ">", ">=", "<", "<=", "!="];
	
	var NumberFilter = (function (_React$Component) {
	    _inherits(NumberFilter, _React$Component);
	
	    function NumberFilter(props) {
	        _classCallCheck(this, NumberFilter);
	
	        _get(Object.getPrototypeOf(NumberFilter.prototype), 'constructor', this).call(this, props);
	        this.numberComparators = this.props.numberComparators || legalComparators;
	        this.timeout = null;
	        this.state = {
	            isPlaceholderSelected: this.props.defaultValue == undefined || this.props.defaultValue.number == undefined || this.props.options && this.props.options.indexOf(this.props.defaultValue.number) == -1
	        };
	        this.onChangeNumber = this.onChangeNumber.bind(this);
	        this.onChangeNumberSet = this.onChangeNumberSet.bind(this);
	        this.onChangeComparator = this.onChangeComparator.bind(this);
	    }
	
	    _createClass(NumberFilter, [{
	        key: 'onChangeNumber',
	        value: function onChangeNumber(event) {
	            if (this.refs.numberFilterComparator.value === "") {
	                return;
	            }
	            if (this.timeout) {
	                clearTimeout(this.timeout);
	            }
	            var self = this;
	            var filterValue = event.target.value;
	            this.timeout = setTimeout(function () {
	                self.props.filterHandler({ number: filterValue, comparator: self.refs.numberFilterComparator.value }, _Const2['default'].FILTER_TYPE.NUMBER);
	            }, self.props.delay);
	        }
	    }, {
	        key: 'onChangeNumberSet',
	        value: function onChangeNumberSet(event) {
	            this.setState({ isPlaceholderSelected: event.target.value === "" });
	            if (this.refs.numberFilterComparator.value === "") {
	                return;
	            }
	            this.props.filterHandler({ number: event.target.value, comparator: this.refs.numberFilterComparator.value }, _Const2['default'].FILTER_TYPE.NUMBER);
	        }
	    }, {
	        key: 'onChangeComparator',
	        value: function onChangeComparator(event) {
	            if (this.refs.numberFilter.value === "") {
	                return;
	            }
	            this.props.filterHandler({ number: this.refs.numberFilter.value, comparator: event.target.value }, _Const2['default'].FILTER_TYPE.NUMBER);
	        }
	    }, {
	        key: 'getComparatorOptions',
	        value: function getComparatorOptions() {
	            var optionTags = [];
	            optionTags.push(_react2['default'].createElement('option', { key: '-1' }));
	            for (var i = 0; i < this.numberComparators.length; i++) {
	                optionTags.push(_react2['default'].createElement(
	                    'option',
	                    { key: i, value: this.numberComparators[i] },
	                    this.numberComparators[i]
	                ));
	            };
	            return optionTags;
	        }
	    }, {
	        key: 'getNumberOptions',
	        value: function getNumberOptions() {
	            var optionTags = [];
	            var options = this.props.options;
	
	            optionTags.push(_react2['default'].createElement(
	                'option',
	                { key: '-1', value: '' },
	                this.props.placeholder || 'Select ' + this.props.columnName + '...'
	            ));
	            for (var i = 0; i < options.length; i++) {
	                optionTags.push(_react2['default'].createElement(
	                    'option',
	                    { key: i, value: options[i] },
	                    options[i]
	                ));
	            };
	            return optionTags;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.refs.numberFilterComparator.value && this.refs.numberFilter.value) {
	                this.props.filterHandler({ number: this.refs.numberFilter.value,
	                    comparator: this.refs.numberFilterComparator.value }, _Const2['default'].FILTER_TYPE.NUMBER);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this.timeout);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var selectClass = (0, _classnames2['default'])("select-filter", "number-filter-input", "form-control", { "placeholder-selected": this.state.isPlaceholderSelected });
	
	            return _react2['default'].createElement(
	                'div',
	                { className: 'filter number-filter' },
	                _react2['default'].createElement(
	                    'select',
	                    { ref: 'numberFilterComparator',
	                        className: 'number-filter-comparator form-control',
	                        onChange: this.onChangeComparator,
	                        defaultValue: this.props.defaultValue ? this.props.defaultValue.comparator : "" },
	                    this.getComparatorOptions()
	                ),
	                this.props.options ? _react2['default'].createElement(
	                    'select',
	                    { ref: 'numberFilter',
	                        className: selectClass,
	                        onChange: this.onChangeNumberSet,
	                        defaultValue: this.props.defaultValue ? this.props.defaultValue.number : "" },
	                    this.getNumberOptions()
	                ) : _react2['default'].createElement('input', { ref: 'numberFilter',
	                    type: 'number',
	                    className: 'number-filter-input form-control',
	                    placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
	                    onChange: this.onChangeNumber,
	                    defaultValue: this.props.defaultValue ? this.props.defaultValue.number : "" })
	            );
	        }
	    }]);
	
	    return NumberFilter;
	})(_react2['default'].Component);
	
	;
	
	NumberFilter.propTypes = {
	    filterHandler: _react2['default'].PropTypes.func.isRequired,
	    options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
	    defaultValue: _react2['default'].PropTypes.shape({
	        number: _react2['default'].PropTypes.number,
	        comparator: _react2['default'].PropTypes.oneOf(legalComparators)
	    }),
	    delay: _react2['default'].PropTypes.number,
	    numberComparators: function numberComparators(props, propName) {
	        if (!props[propName]) {
	            return;
	        }
	        for (var i = 0; i < props[propName].length; i++) {
	            var comparatorIsValid = false;
	            for (var j = 0; j < legalComparators.length; j++) {
	                if (legalComparators[j] === props[propName][i]) {
	                    comparatorIsValid = true;
	                    break;
	                }
	            }
	            if (!comparatorIsValid) {
	                return new Error('Number comparator provided is not supported. Use only ' + legalComparators);
	            }
	        }
	    },
	    placeholder: _react2['default'].PropTypes.string,
	    columnName: _react2['default'].PropTypes.string
	};
	
	NumberFilter.defaultProps = {
	    delay: _Const2['default'].FILTER_DELAY
	};
	
	exports['default'] = NumberFilter;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzNzVlYWM0Y2M0NDgzMGI4NmViNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb3RzdHJhcFRhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9TZWxlY3RSb3dIZWFkZXJDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9UYWJsZUVkaXRDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtdG9hc3RyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1hZGRvbnMtdXBkYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIva2V5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2FuaW1hdGlvbk1peGluLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZWxlbWVudC1jbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2pRdWVyeU1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2luYXRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvVG9vbEJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1RhYmxlRGF0YVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3N2X2V4cG9ydF91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9maWxlc2F2ZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvTnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzJDQ3RDMkIsQ0FBa0I7Ozs7OENBQ2YsRUFBcUI7Ozs7Z0RBQ3hCLEVBQXdCOztBQUVuRCxLQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBQztBQUMvQixTQUFNLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUN2QyxTQUFNLENBQUMsaUJBQWlCLGlDQUFvQixDQUFDO0FBQzdDLFNBQU0sQ0FBQyxZQUFZLG9DQUFlLENBQUM7RUFDcEM7c0JBQ2M7QUFDYixpQkFBYztBQUNkLG9CQUFpQjtBQUNqQixlQUFZO0VBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2JpQixDQUFPOzs7O3VDQUNKLENBQVk7Ozs7a0NBQ2YsQ0FBUzs7Ozt3Q0FDSCxDQUFlOzs7O3NDQUNqQixDQUFhOzs7O3FEQUNSLEVBQTZCOzs7OzJDQUNwQyxFQUFtQjs7Ozt3Q0FDZixFQUFlOzs7O2dEQUNWLEVBQXdCOzs0Q0FDL0IsRUFBbUI7Ozs7bUNBQ3BCLEVBQVU7O0tBRXpCLGNBQWM7YUFBZCxjQUFjOztBQUVQLFlBRlAsY0FBYyxDQUVOLEtBQUssRUFBRTs7OzJCQUZmLGNBQWM7O0FBR2hCLGdDQUhFLGNBQWMsNkNBR1YsS0FBSyxFQUFFOztVQXlvQmYsYUFBYSxHQUFHLFVBQUMsQ0FBQyxFQUFLO0FBQ3JCLGFBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUN6RTs7VUFFRCxrQkFBa0IsR0FBRyxZQUFNO0FBQ3pCLFdBQUksY0FBYyxHQUFHLE1BQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxXQUFJLFlBQVksR0FBRyxNQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsV0FBRyxjQUFjLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxXQUFXLEVBQUM7QUFDekQsdUJBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzlEO0FBQ0QsV0FBTSxXQUFXLEdBQUcsTUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDMUQsYUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQ3BDLE1BQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxNQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztNQUM1Rjs7QUFwcEJDLFNBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztBQUUzQixTQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25DLFdBQUksQ0FBQyxLQUFLLEdBQUcsd0NBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDM0QsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEIsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUksRUFBSztBQUNyQyxlQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsZUFBSyxRQUFRLENBQUM7QUFDWixlQUFJLEVBQUUsTUFBSyxZQUFZLEVBQUU7VUFDMUIsQ0FBQztRQUNILENBQUMsQ0FBQztNQUNKLE1BQU07QUFDTCxXQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQyxXQUFJLENBQUMsS0FBSyxHQUFHLHdDQUFtQixJQUFJLENBQUMsQ0FBQztNQUN2Qzs7QUFFRCxTQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFM0IsU0FBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztBQUNmLGFBQU0sSUFBSSxRQUFPLENBQUM7QUFDbEIsZUFBSyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsYUFBYSxFQUFLO0FBQ2xELGVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztVQUN0QyxDQUFDLENBQUM7O01BQ0o7O0FBRUQsU0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7QUFDekQsV0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pELFdBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDcEM7O0FBRUQsU0FBSSxDQUFDLEtBQUssR0FBRztBQUNYLFdBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3pCLGVBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztBQUN0QyxrQkFBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxtQkFBTSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDMUUsc0JBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO01BQ2pELENBQUM7SUFDSDs7Z0JBekNHLGNBQWM7O1lBMkNULG1CQUFDLEtBQUssRUFBQzs7O1dBQ1QsUUFBUSxHQUFJLEtBQUssQ0FBakIsUUFBUTs7QUFFYixXQUFNLGlCQUFpQixHQUFHLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQzFFLDBCQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxnQkFBTSxFQUFHO0FBQzlDLGFBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDdEIsZUFBSSxRQUFRLEVBQUU7QUFDWixtQkFBTSw4REFBOEQsQ0FBQztZQUN0RTtBQUNELG1CQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7VUFDbkM7QUFDRCxhQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOztBQUV2QixlQUFJLENBQUMsT0FBSyxNQUFNLEVBQUU7O0FBRWhCLG9CQUFLLE1BQU0sR0FBRyxvQkFBWSxDQUFDO1lBQzVCOztBQUVELGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBSyxNQUFNLENBQUM7VUFDM0M7UUFDRixFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVULFdBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFNO0FBQ3hFLGFBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGdCQUFPLElBQUksQ0FBQztRQUNiLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRVAsV0FBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsUUFBUSxFQUNqQyxpSkFDMEU7O0FBRTVFLFdBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0FBQ2xCLHFCQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVU7QUFDOUIsaUJBQVEsRUFBRSxRQUFRO0FBQ2xCLGlCQUFRLEVBQUUsUUFBUTtBQUNsQiwwQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO0FBQzFDLGVBQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDbEMsQ0FBQyxDQUFDO01BQ0o7OztZQUVXLHdCQUFHO0FBQ1osV0FBSSxNQUFNLEdBQUcsRUFBRSxDQUFDOztBQUVoQixXQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFN0UsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtBQUN6QixhQUFJLElBQUk7YUFBRSxXQUFXLGFBQUM7QUFDdEIsYUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFO0FBQy9CLHNCQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDckMsZUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1VBQzNCLE1BQU07QUFDTCxzQkFBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxtQkFBTSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RSxlQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztVQUNyQztBQUNELGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkQsTUFBTTtBQUNMLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCO0FBQ0QsY0FBTyxNQUFNLENBQUM7TUFDaEI7OztZQUVvQiwrQkFBQyxJQUFZLEVBQUU7V0FBWixRQUFRLEdBQVYsSUFBWSxDQUFWLFFBQVE7O0FBQzlCLGNBQU8sbUJBQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFLO0FBQ2pELGdCQUFPO0FBQ0wsZUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUztBQUM1QixnQkFBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUztBQUM3QixlQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQzNCLGlCQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVO0FBQy9CLDBCQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlO0FBQzdDLDBCQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlO0FBQzdDLG1CQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQy9CLGlCQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQzNCLHFCQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVO0FBQ25DLG9CQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlO0FBQ3ZDLGdCQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO0FBQ3pCLGVBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7QUFDM0IsbUJBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7QUFDL0IsZ0JBQUssRUFBRSxDQUFDO1VBQ1QsQ0FBQztRQUNILENBQUMsQ0FBQztNQUNKOzs7WUFFd0IsbUNBQUMsU0FBUyxFQUFFO0FBQ25DLFdBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUIsV0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNqQyxhQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDM0MsYUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDekQsYUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUcxRSxhQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQ3hCLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxFQUFDO0FBQ3ZELGVBQUksR0FBRyxDQUFDLENBQUM7VUFDVjtBQUNELGFBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDeEMsYUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDMUYsYUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDdkYsYUFBRyxTQUFTLElBQUksU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNqRSxhQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsYUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGVBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVEsRUFBRSxJQUFJO0FBQ2Qsc0JBQVcsRUFBRSxXQUFXO1VBQ3pCLENBQUMsQ0FBQztRQUNKO0FBQ0QsV0FBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFOztBQUV2RCxhQUFJLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoRCxhQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWiwwQkFBZSxFQUFFLElBQUk7VUFDdEIsQ0FBQyxDQUFDO1FBQ0o7TUFDRjs7O1lBRWdCLDZCQUFHO0FBQ2xCLFdBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzFCLGFBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0QsV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO01BQzlFOzs7WUFFbUIsZ0NBQUc7QUFDckIsYUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5RCxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEYsV0FBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2YsYUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xEO01BQ0Y7OztZQUVpQiw4QkFBRztBQUNuQixXQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUMxQixXQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUMzQixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO01BQzNDOzs7WUFFa0IsK0JBQUc7QUFDcEIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUN2QixhQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4RSxhQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxtQkFBTSxjQUFjLEVBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDOUM7TUFDRjs7Ozs7Ozs7Ozs7WUFTaUIsNEJBQUMsS0FBSyxFQUFFO0FBQ3hCLGNBQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7TUFDckM7OztZQUVLLGtCQUFHOztBQUVQLFdBQUksVUFBVSxHQUFHLDZCQUFTLGdCQUFnQixDQUFDLENBQUM7QUFDNUMsV0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDcEMsV0FBSSxLQUFLLEdBQUc7QUFDVixlQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ3pCLGtCQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1FBQ2hDLENBQUM7QUFDRixXQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3ZDLGtCQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DO0FBQ0QsV0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyRCxXQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3hDLFdBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3pDLFdBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNuQyxXQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsV0FBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JDLFdBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUNyRCxXQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxLQUFLLFdBQVcsRUFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQ2pGLGNBQ0U7O1dBQUssU0FBUyxFQUFDLG9CQUFvQixFQUFDLEdBQUcsRUFBQyxPQUFPO1NBQzVDLE9BQU87U0FDUjs7YUFBSyxTQUFTLEVBQUMsMEJBQTBCO0FBQ3BDLHlCQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDL0MseUJBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtBQUMvQyxrQkFBSyxFQUFFLEtBQU07V0FDaEI7OztBQUNFLGtCQUFHLEVBQUMsUUFBUTtBQUNaLDRCQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSztBQUN6QywrQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBaUI7QUFDeEQsdUJBQVEsRUFBRSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFVO0FBQ3BELHdCQUFTLEVBQUUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBVTtBQUNqRCw0QkFBYSxFQUFFLGFBQWM7QUFDN0IscUJBQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDbkMsNkJBQWMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtBQUNuRCx1QkFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUztBQUM5Qix3QkFBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNoQyx5QkFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQU07QUFDdkMsMEJBQVcsRUFBRSxXQUFZO2FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUNSO1dBQ2Q7QUFDRSxtQkFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTztBQUMxQixzQkFBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNoQyxnQkFBRyxFQUFDLE1BQU07QUFDVixpQkFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSztBQUN0QixvQkFBTyxFQUFFLE9BQVE7QUFDakIsd0JBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVk7QUFDcEMsb0JBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVE7QUFDNUIscUJBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVM7QUFDOUIsa0JBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU07QUFDeEIscUJBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRztBQUNuQyxzQkFBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNoQyxzQkFBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNoQyxxQkFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUztBQUM5Qiw0QkFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZ0I7QUFDNUMsdUJBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDM0MsMkJBQWMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtBQUNuRCwwQkFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ2pELHdCQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQzdDLHVCQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVzthQUMxQztVQUNFO1NBQ0wsV0FBVztTQUNYLFVBQVU7UUFDUCxDQUNQO01BQ0Y7OztZQUVVLHVCQUFFO0FBQ1gsV0FBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDM0QsV0FBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMzQyxXQUFHLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsTUFBTSxFQUFDO0FBQ25ELGdCQUFPLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUNwRSxNQUFNO0FBQ0wsZ0JBQU8sSUFBSSxDQUFDO1FBQ2I7TUFDRjs7O1lBRVkseUJBQUc7QUFDZCxXQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWix3QkFBZSxFQUFFLEVBQUU7UUFDcEIsQ0FBQyxDQUFDO01BQ0o7OztZQUVTLG9CQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7QUFDM0IsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7QUFDbkMsYUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9EOztBQUVELFdBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyRCxXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osYUFBSSxFQUFFLE1BQU07UUFDYixDQUFDLENBQUM7TUFDSjs7O1lBRW1CLDhCQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7V0FDL0IsWUFBWSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFsQyxZQUFZOztBQUNuQixXQUFJLFlBQVksRUFBRTtBQUNoQixxQkFBWSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNqQzs7QUFFRCxXQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO0FBQzdCLGdCQUFPO1FBQ1I7O0FBRUQsV0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3RELFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixhQUFJLEVBQUUsTUFBTTtBQUNaLGlCQUFRLEVBQUUsSUFBSTtBQUNkLG9CQUFXLEVBQVgsV0FBVztRQUNaLENBQUMsQ0FBQztNQUNKOzs7WUFFZSw0QkFBRztBQUNqQixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtBQUNuQyxhQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQztNQUNGOzs7WUFFZSw0QkFBRztBQUNqQixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtBQUNuQyxhQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQztNQUNGOzs7WUFFZ0IsMkJBQUMsR0FBRyxFQUFFO0FBQ3JCLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO0FBQ3BDLGFBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QztNQUNGOzs7WUFFaUIsNEJBQUMsR0FBRyxFQUFFO0FBQ3RCLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO0FBQ3JDLGFBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QztNQUNGOzs7WUFFYSx3QkFBQyxHQUFHLEVBQUU7QUFDbEIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDakMsYUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDO01BQ0Y7OztZQUVpQiw0QkFBQyxDQUFDLEVBQUU7QUFDcEIsV0FBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDekMsV0FBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFdBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNsQixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtBQUNwQyxlQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFDbEQsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkM7O0FBRUQsV0FBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtBQUNyRCxhQUFJLFVBQVUsRUFBRTtBQUNkLDBCQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztVQUM3Qzs7QUFFRCxhQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzlDLGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWiwwQkFBZSxFQUFFLGVBQWU7VUFDakMsQ0FBQyxDQUFDO1FBQ0o7TUFDRjs7O1lBRXFCLGtDQUFHO0FBQ3ZCLFdBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUMvQixXQUFJLE1BQU0sYUFBQztBQUNYLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7QUFDekIsZUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNELE1BQU07QUFDTCxlQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQjtBQUNELFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixhQUFJLEVBQUUsTUFBTTtBQUNaLGlCQUFRLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQztNQUNKOzs7WUFFYyx5QkFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFO0FBQy9CLFdBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNuRCxXQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQzNDLFdBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNsQixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtBQUNqQyxlQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN6RDs7QUFFRCxXQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO0FBQ3JELGFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLG1CQUFNLGlCQUFpQixFQUFFO0FBQ3pELHVCQUFZLEdBQUcsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtVQUMxQyxNQUFNO0FBQ0wsZUFBSSxVQUFVLEVBQUU7QUFDZCx5QkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixNQUFNO0FBQ0wseUJBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ2hELHNCQUFPLE1BQU0sS0FBSyxHQUFHLENBQUM7Y0FDdkIsQ0FBQyxDQUFDO1lBQ0o7VUFDRjs7QUFFRCxhQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNDLGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWiwwQkFBZSxFQUFFLFlBQVk7VUFDOUIsQ0FBQyxDQUFDO1FBQ0o7TUFDRjs7O1lBRWEsd0JBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDekMsV0FBSSxTQUFTLGFBQUM7QUFDZCwwQkFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUMvRCxhQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7QUFDakIsb0JBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUNuQyxrQkFBTyxLQUFLLENBQUM7VUFDZDtRQUNGLENBQUMsQ0FBQzs7QUFFSCxXQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2hFLFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixhQUFJLEVBQUUsTUFBTTtRQUNiLENBQUMsQ0FBQzs7QUFFSCxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtBQUNyQyxhQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pGO01BQ0Y7OztZQUVnQiw2QkFBRztBQUNsQixXQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFOztRQUVuQjtNQUNGOzs7WUFFa0IsNkJBQUMsTUFBTSxFQUFFO0FBQzFCLFdBQUksTUFBTSxhQUFDO0FBQ1gsV0FBSTtBQUNGLGFBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDVixnQkFBTyxDQUFDLENBQUM7UUFDVjtBQUNELFdBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUNwQzs7O1lBRVcsc0JBQUMsTUFBTSxFQUFFO0FBQ25CLFdBQUksTUFBTSxhQUFDO0FBQ1gsV0FBSTtBQUNGLGFBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDVixnQkFBTyxDQUFDLENBQUM7UUFDVjtBQUNELFdBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUNwQzs7O1lBRWEsMEJBQUc7QUFDZixjQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO01BQy9COzs7WUFFYSwwQkFBRztBQUNmLGNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7TUFDNUI7OztZQUVZLHVCQUFDLE9BQU8sRUFBRTtBQUNyQixXQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsV0FBSSxXQUFXLEdBQUcsT0FBTyxHQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7O0FBRWxFLFdBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3pDLGFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUM7QUFDNUMsZUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQ3ZDLFlBQVU7QUFDUixpQkFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QixDQUNGLENBQUM7VUFDSCxNQUFNLElBQUksT0FBTyxDQUFDLDJCQUEyQixDQUFDLEVBQUU7QUFDL0MsZUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztVQUM3QjtRQUNGO01BQ0Y7OztZQUVRLG1CQUFDLFdBQVcsRUFBQzs7QUFFcEIsV0FBSSxNQUFNLGFBQUM7QUFDWCxXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixXQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUVqQyxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO2FBQ2pCLFdBQVcsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUExQixXQUFXO2FBQ2IsUUFBUSxHQUFLLElBQUksQ0FBQyxLQUFLLENBQXZCLFFBQVE7O0FBQ2QsYUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQ3BFLGFBQUksUUFBUSxHQUFHLFlBQVksRUFDekIsUUFBUSxHQUFHLFlBQVksQ0FBQztBQUMxQixlQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3RELGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixlQUFJLEVBQUUsTUFBTTtBQUNaLDBCQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtBQUNoRCxtQkFBUSxFQUFSLFFBQVE7VUFDVCxDQUFDLENBQUM7UUFDSixNQUFNO0FBQ0wsZUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsYUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGVBQUksRUFBRSxNQUFNO0FBQ1osMEJBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO1VBQ2pELENBQUMsQ0FBQztRQUNKO0FBQ0QsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7QUFDckMsYUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hEO01BRUY7OztZQUVlLDBCQUFDLFNBQVMsRUFBRTtBQUMxQixXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixXQUFJLE1BQU0sYUFBQztBQUNYLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7YUFDakIsV0FBVyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQTFCLFdBQVc7O0FBQ25CLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsTUFBTTtBQUNMLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCO0FBQ0QsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztBQUM1QyxXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osYUFBSSxFQUFFLE1BQU07QUFDWixpQkFBUSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUM7TUFDSjs7O1lBRWMsMkJBQUc7QUFDaEIsV0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0FBQ3BELFdBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLFdBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFTLE1BQU0sRUFBRTtBQUN2QyxhQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtBQUNqQyxlQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7VUFDbkM7UUFDRixDQUFDLENBQUM7QUFDSCx5Q0FBVSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDakQ7OztZQUVXLHNCQUFDLFVBQVUsRUFBRTtBQUN2QixXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixXQUFJLE1BQU0sYUFBQztBQUNYLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7YUFDakIsV0FBVyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQTFCLFdBQVc7O0FBQ25CLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsTUFBTTtBQUNMLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCO0FBQ0QsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUM7QUFDckYsV0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGFBQUksRUFBRSxNQUFNO0FBQ1osaUJBQVEsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDO01BQ0o7OztZQUVlLDRCQUFHO0FBQ2pCLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7QUFDekIsYUFBSSxRQUFRLGFBQUM7QUFDYixhQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO0FBQzdCLG1CQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1VBQy9DLE1BQU07QUFDTCxtQkFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7VUFDcEM7QUFDRCxnQkFDRTs7YUFBSyxTQUFTLEVBQUMseUJBQXlCO1dBQ3RDO0FBQ0UsZ0JBQUcsRUFBQyxZQUFZO0FBQ2hCLHFCQUFRLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFVO0FBQ2hDLHVCQUFVLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDakQsd0JBQVcsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQWE7QUFDdEMsNEJBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLElBQUksbUJBQU0sa0JBQW1CO0FBQ2hGLDJCQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxJQUFJLG1CQUFNLGVBQWdCO0FBQzNFLG1CQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFHO0FBQ2xDLHFCQUFRLEVBQUUsUUFBUztBQUNuQiw4QkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBa0I7QUFDeEQsb0JBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksbUJBQU0sUUFBUztBQUN0RCxxQkFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxtQkFBTSxTQUFVO0FBQ3pELHNCQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLG1CQUFNLFVBQVc7QUFDNUQscUJBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksbUJBQU0sU0FBVTthQUN6RDtVQUNFLENBQ047UUFDSDtBQUNELGNBQU8sSUFBSSxDQUFDO01BQ2I7OztZQUVZLHlCQUFHO0FBQ2QsV0FBSSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzRixXQUFJLHNCQUFzQixJQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUMzQixhQUFJLE9BQU8sYUFBQztBQUNaLGFBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3RDLGtCQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQ2xELGlCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3pCLG9CQUFPO0FBQ0wsbUJBQUksRUFBRSxLQUFLLENBQUMsUUFBUTtBQUNwQixvQkFBSyxFQUFFLEtBQUssQ0FBQyxTQUFTOztBQUV0Qix3QkFBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSzs7QUFFbkMsdUJBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFLLE9BQU8sS0FBSyxDQUFDLFFBQVEsS0FBSyxVQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRO0FBQ3RHLHFCQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFTLEtBQUssRUFBQztBQUN4Qyx3QkFBTyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xGLEdBQUcsS0FBSztjQUNWLENBQUM7WUFDSCxDQUFDLENBQUM7VUFDSixNQUFNO0FBQ0wsa0JBQU8sR0FBRyxDQUFDO0FBQ1QsaUJBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUTtBQUN4QyxrQkFBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTO0FBQzFDLHFCQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDN0MsQ0FBQyxDQUFDO1VBQ0o7QUFDRCxnQkFDRTs7YUFBSyxTQUFTLEVBQUMsVUFBVTtXQUN2QjtBQUNFLHdCQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBWTtBQUM1Qyx5QkFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNuQyx5QkFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNuQyx5QkFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTztBQUNoQyw0QkFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUN0QyxtQ0FBc0IsRUFBRSxzQkFBdUI7QUFDL0Msb0JBQU8sRUFBRSxPQUFRO0FBQ2pCLDhCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWtCO0FBQ2hELHFCQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3ZDLDBCQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDakQsc0JBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDekMscUJBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDdkMsd0JBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDN0MsK0JBQWtCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7YUFDM0Q7VUFDRSxDQUNQO1FBQ0YsTUFBTTtBQUNMLGdCQUFPLElBQUksQ0FBQztRQUNiO01BQ0Y7OztZQUVnQiwyQkFBQyxPQUFPLEVBQUU7QUFDekIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtBQUMzQixnQkFDRSw2REFBYSxPQUFPLEVBQUUsT0FBUTtBQUNqQix3QkFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUs7QUFDekMsbUJBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFFLENBQzFEO1FBQ0gsTUFBTTtBQUNMLGdCQUFPLElBQUksQ0FBQztRQUNiO01BQ0Y7OztZQWlCb0IsK0JBQUMsTUFBTSxFQUFFO0FBQzVCLFdBQUksTUFBTSxhQUFDO0FBQ1gsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTs7YUFFakIsV0FBVyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQTFCLFdBQVc7O0FBQ25CLGFBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQztBQUN0RSxlQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFELGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixlQUFJLEVBQUUsTUFBTTtBQUNaLG1CQUFRLEVBQUUsWUFBWTtVQUN2QixDQUFDLENBQUM7UUFDSixNQUFNO0FBQ0wsZUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsYUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGVBQUksRUFBRSxNQUFNO1VBQ2IsQ0FBQyxDQUFDO1FBQ0o7O0FBRUQsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7QUFDckMsYUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDO01BQ0Y7OztVQWhyQkcsY0FBYztJQUFTLG1CQUFNLFNBQVM7O0FBbXJCNUMsZUFBYyxDQUFDLFNBQVMsR0FBRztBQUN6QixXQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsU0FBTSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQzlCLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxPQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hGLFNBQU0sRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUM1QixVQUFPLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDN0IsV0FBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzlCLFFBQUssRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUMzQixZQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDL0IsYUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2hDLG9CQUFpQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ3pDLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQy9CLFNBQUksRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQzFCLG1CQUFNLGVBQWUsRUFDckIsbUJBQU0saUJBQWlCLEVBQ3ZCLG1CQUFNLGdCQUFnQixDQUN2QixDQUFDO0FBQ0YsWUFBTyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQy9CLGFBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSztBQUMvQixhQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDOUIsZ0JBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNqQyxrQkFBYSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ25DLHFCQUFnQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ3RDLDZCQUF3QixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzlDLHFCQUFnQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0lBQ3ZDLENBQUM7QUFDRixXQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEtBQUssQ0FBQztBQUM5QixTQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDNUIsZUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2hDLGtCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7SUFDcEMsQ0FBQztBQUNGLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUMvQixZQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDL0IsU0FBTSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzVCLGVBQVksRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNsQyxjQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEdBQUc7QUFDaEMsVUFBTyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDN0IsZ0JBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNqQyxhQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsY0FBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2pDLGtCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDbkMsdUJBQWtCLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDeEMsbUJBQWMsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNwQyxtQkFBYyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ3BDLGdCQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDakMsc0JBQWlCLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDdkMsZUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2hDLFNBQUksRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUM1QixvQkFBZSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLO0FBQ3RDLGdCQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDbkMsbUJBQWMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUN0QyxpQkFBWSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2xDLGlCQUFZLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDbEMsc0JBQWlCLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDdkMsZUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2xDLDJCQUFzQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzVDLFlBQU8sRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUMvQixhQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsY0FBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2pDLGFBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtJQUNqQyxDQUFDO0FBQ0YsWUFBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDL0Isa0JBQWEsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtJQUN0QyxDQUFDO0FBQ0YsWUFBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQy9CLGNBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtFQUNwQyxDQUFDO0FBQ0YsZUFBYyxDQUFDLFlBQVksR0FBRztBQUM1QixTQUFNLEVBQUUsTUFBTTtBQUNkLFlBQVMsRUFBRSxTQUFTO0FBQ3BCLFVBQU8sRUFBRSxLQUFLO0FBQ2QsV0FBUSxFQUFFLElBQUk7QUFDZCxRQUFLLEVBQUUsS0FBSztBQUNaLFlBQVMsRUFBRSxLQUFLO0FBQ2hCLGFBQVUsRUFBRSxLQUFLO0FBQ2pCLG9CQUFpQixFQUFFLFNBQVM7QUFDNUIsWUFBUyxFQUFFO0FBQ1QsU0FBSSxFQUFFLG1CQUFNLGVBQWU7QUFDM0IsWUFBTyxFQUFFLG1CQUFNLG1CQUFtQjtBQUNsQyxhQUFRLEVBQUUsRUFBRTtBQUNaLGFBQVEsRUFBRSxTQUFTO0FBQ25CLGdCQUFXLEVBQUUsU0FBUztBQUN0QixrQkFBYSxFQUFFLEtBQUs7QUFDcEIscUJBQWdCLEVBQUUsS0FBSztBQUN2Qiw2QkFBd0IsRUFBRSxLQUFLO0FBQy9CLHFCQUFnQixFQUFFLEtBQUs7SUFDeEI7QUFDRCxXQUFRLEVBQUU7QUFDUixTQUFJLEVBQUUsbUJBQU0sY0FBYztBQUMxQixlQUFVLEVBQUUsS0FBSztBQUNqQixrQkFBYSxFQUFFLFNBQVM7SUFDekI7QUFDRCxZQUFTLEVBQUUsS0FBSztBQUNoQixZQUFTLEVBQUUsS0FBSztBQUNoQixTQUFNLEVBQUUsS0FBSztBQUNiLG9CQUFpQixFQUFFLEtBQUs7QUFDeEIsZUFBWSxFQUFFLEtBQUs7QUFDbkIsY0FBVyxFQUFFLEVBQUU7QUFDZixVQUFPLEVBQUU7QUFDUCxnQkFBVyxFQUFFLEtBQUs7QUFDbEIsYUFBUSxFQUFFLFNBQVM7QUFDbkIsY0FBUyxFQUFFLFNBQVM7QUFDcEIsa0JBQWEsRUFBRSxJQUFJO0FBQ25CLHVCQUFrQixFQUFFLFNBQVM7QUFDN0IsbUJBQWMsRUFBRSxTQUFTO0FBQ3pCLG1CQUFjLEVBQUUsU0FBUztBQUN6QixnQkFBVyxFQUFFLFNBQVM7QUFDdEIsc0JBQWlCLEVBQUUsU0FBUztBQUM1QixlQUFVLEVBQUUsU0FBUztBQUNyQixpQkFBWSxFQUFFLFNBQVM7QUFDdkIsaUJBQVksRUFBRSxTQUFTO0FBQ3ZCLGtCQUFhLEVBQUUsU0FBUztBQUN4QixtQkFBYyxFQUFFLFNBQVM7QUFDekIsU0FBSSxFQUFFLFNBQVM7QUFDZixvQkFBZSxFQUFFLG1CQUFNLGtCQUFrQjtBQUN6QyxnQkFBVyxFQUFFLFNBQVM7QUFDdEIsbUJBQWMsRUFBRSxtQkFBTSxlQUFlO0FBQ3JDLHNCQUFpQixFQUFFLFNBQVM7QUFDNUIsZUFBVSxFQUFFLFNBQVM7QUFDckIsMkJBQXNCLEVBQUUsU0FBUztBQUNqQyxZQUFPLEVBQUUsbUJBQU0sUUFBUTtBQUN2QixhQUFRLEVBQUUsbUJBQU0sU0FBUztBQUN6QixjQUFTLEVBQUUsbUJBQU0sVUFBVTtBQUMzQixhQUFRLEVBQUUsbUJBQU0sU0FBUztJQUMxQjtBQUNELFlBQVMsRUFBRTtBQUNULGtCQUFhLEVBQUUsQ0FBQztJQUNqQjtBQUNELFlBQVMsRUFBRSxLQUFLO0FBQ2hCLGNBQVcsRUFBRSxTQUFTO0VBQ3ZCLENBQUM7O3NCQUVhLGNBQWM7Ozs7Ozs7QUNwMEI3QixnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWdCOztBQUVoQjtBQUNBOztBQUVBLGtCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7Ozs7Ozs7c0JDL0NjO0FBQ2IsWUFBUyxFQUFFLE1BQU07QUFDakIsV0FBUSxFQUFFLEtBQUs7QUFDZixnQkFBYSxFQUFFLEVBQUU7QUFDakIsWUFBUyxFQUFFLEdBQUc7QUFDZCxZQUFTLEVBQUUsSUFBSTtBQUNmLFdBQVEsRUFBRSxHQUFHO0FBQ2IsYUFBVSxFQUFFLElBQUk7QUFDaEIsc0JBQW1CLEVBQUUsRUFBRTtBQUN2QixrQkFBZSxFQUFFLE1BQU07QUFDdkIsb0JBQWlCLEVBQUUsT0FBTztBQUMxQixtQkFBZ0IsRUFBRSxVQUFVO0FBQzVCLGlCQUFjLEVBQUUsTUFBTTtBQUN0QixrQkFBZSxFQUFFLE9BQU87QUFDeEIsb0JBQWlCLEVBQUUsU0FBUztBQUM1QixxQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNwQyxrQkFBZSxFQUFFLENBQUM7QUFDbEIsZUFBWSxFQUFFLDZCQUE2QjtBQUMzQyxtQkFBZ0IsRUFBRSxvQkFBb0I7QUFDdEMsV0FBUSxFQUFFLFVBQVU7QUFDcEIsZUFBWSxFQUFFLEdBQUc7QUFDakIsY0FBVyxFQUFFO0FBQ1gsU0FBSSxFQUFFLFlBQVk7QUFDbEIsV0FBTSxFQUFFLGNBQWM7QUFDdEIsV0FBTSxFQUFFLGNBQWM7QUFDdEIsU0FBSSxFQUFFLFlBQVk7QUFDbEIsV0FBTSxFQUFFLGNBQWM7SUFDdkI7RUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDNUJpQixDQUFPOzs7O3FDQUNKLENBQVc7Ozs7a0NBQ2QsQ0FBUzs7OztpQ0FDVixDQUFROzs7O3VDQUNKLENBQVk7Ozs7a0RBQ0MsQ0FBeUI7Ozs7S0FFckQsUUFBUTthQUFSLFFBQVE7O1lBQVIsUUFBUTsyQkFBUixRQUFROztnQ0FBUixRQUFROzs7Z0JBQVIsUUFBUTs7WUFDSyw2QkFBRztBQUFFLFdBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUFFOzs7WUFDL0IsbUNBQUMsS0FBSyxFQUFFO0FBQUUsV0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7TUFBRTs7O1lBQzFELGdCQUFDLE9BQU8sRUFBRTtBQUNkLDZCQUFTLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxLQUFLLGVBQWUsQ0FBQztNQUN4RTs7O1lBRUssa0JBQUc7QUFDUCxjQUFPLDRDQUFPLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVEsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLEdBQUc7TUFDN0g7OztVQVRHLFFBQVE7SUFBUyxtQkFBTSxTQUFTOztLQVloQyxXQUFXO2FBQVgsV0FBVzs7QUFFSixZQUZQLFdBQVcsQ0FFSCxLQUFLLEVBQUU7MkJBRmYsV0FBVzs7QUFHYixnQ0FIRSxXQUFXLDZDQUdQLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDbEM7O2dCQUxHLFdBQVc7O1lBT1Qsa0JBQUU7QUFDTixXQUFJLGdCQUFnQixHQUFHLDZCQUFTLGNBQWMsQ0FBQyxDQUFDO0FBQ2hELFdBQUksWUFBWSxHQUFHLDZCQUFTLE9BQU8sRUFBRSxhQUFhLEVBQUU7QUFDaEQseUJBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQ3JDLDBCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztRQUMxQyxDQUFDLENBQUM7QUFDSCxXQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3ZGLFdBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDOztBQUVqQyxjQUNFOztXQUFLLFNBQVMsRUFBQyxzQkFBc0I7U0FDbkM7O2FBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUUsZ0JBQWlCO1dBQy9DOztlQUFPLFNBQVMsRUFBRSxZQUFhO2FBQzdCOzs7ZUFDRTs7bUJBQUksR0FBRyxFQUFDLFFBQVE7aUJBQ2Isa0JBQWtCO2lCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQ2pCO2NBQ0M7WUFDRjtVQUNKO1FBQ0YsQ0FDUDtNQUNGOzs7WUFFb0IsaUNBQUU7QUFDckIsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxtQkFBTSxpQkFBaUIsRUFBRTtBQUN0RCxnQkFBUSx1RUFBdUIsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBcUIsR0FBeUIsQ0FBRTtRQUM1RixNQUFLLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksbUJBQU0sZ0JBQWdCLEVBQUM7QUFDMUQsZ0JBQVE7O2FBQXVCLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQXFCO1dBQzVELGlDQUFDLFFBQVEsSUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFlLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBWSxHQUFFO1VBQzNELENBQ3hCO1FBQ0gsTUFBSTtBQUNILGdCQUFPLElBQUksQ0FBQztRQUNiO01BQ0Y7OztZQUV3QixxQ0FBRTtXQUNuQixhQUFhLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBNUIsYUFBYTs7QUFDbkIsV0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUM7QUFDcEMsY0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztBQUMzQyxlQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQ3JELGVBQU0sSUFBSSxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDOUUsZUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQ3BCLG1CQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFDdkMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLGFBQWEsRUFBYixhQUFhLEVBQUUsQ0FBQyxDQUFDO1VBQ2pFO1FBQ0YsTUFBTTtBQUNMLGFBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDbEQsYUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUM5RSxhQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FDakIsbUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBRSxhQUFhLEVBQWIsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUNyRztNQUNGOzs7WUFFUSxtQkFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUM7QUFDekMsV0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUM7QUFDcEMsYUFBSSxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxtQkFBTSxpQkFBaUIsSUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksbUJBQU0sZ0JBQWdCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsR0FBQyxDQUFDLENBQUM7QUFDbEgsYUFBRyxhQUFhLElBQUksQ0FBQyxFQUNuQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNuRCxjQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQzNDLGVBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUNwQixtQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztVQUNoRztRQUNGLE1BQU07QUFDTCxhQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FDakIsbUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMvRTtBQUNELFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtBQUNqRCxhQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMzQztBQUNELFdBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQixXQUFHLG1CQUFtQixFQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLGtCQUFLLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDO01BQzNFOzs7VUFuRkcsV0FBVztJQUFTLG1CQUFNLFNBQVM7O0FBcUZ6QyxZQUFXLENBQUMsU0FBUyxHQUFHO0FBQ3RCLGdCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDckMsU0FBTSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzVCLGlCQUFjLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDcEMsV0FBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2hDLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxtQkFBZ0IsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUN0QyxXQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDOUIsWUFBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQy9CLGFBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNoQyxjQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEUsZ0JBQWEsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtFQUNwQyxDQUFDOztBQUVGLFlBQVcsQ0FBQyxZQUFZLEdBQUcsRUFDMUIsQ0FBQztzQkFDYSxXQUFXOzs7Ozs7O0FDeEgxQixnRDs7Ozs7Ozs7Ozs7Ozs7a0NDQWtCLENBQU87Ozs7a0NBQ1AsQ0FBUzs7Ozt1Q0FDTixDQUFZOzs7O3NCQUNsQjs7QUFFYixrQkFBZSwyQkFBQyxLQUFLLEVBQUU7QUFDckIsU0FBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxQyxTQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUN6QixTQUFHLEtBQUssSUFBSSxtQkFBTSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7QUFDeEQsU0FBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxVQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUMxQixVQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFDaEMsU0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QixZQUFPLElBQUksQ0FBQztJQUNiOztBQUVELHVCQUFvQixnQ0FBQyxLQUFLLEVBQUM7QUFDekIsU0FBSSxVQUFVLEdBQUcsNkJBQVMsT0FBTyxFQUFFO0FBQ2pDLGVBQVEsRUFBRSxLQUFLLElBQUksbUJBQU0sUUFBUTtNQUNsQyxDQUFDLENBQUM7QUFDSCxZQUNFOztTQUFNLFNBQVMsRUFBRSxVQUFXO09BQzFCLDJDQUFNLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFRO01BQ3ZELENBQ1A7SUFDSDs7QUFFRCxvQkFBaUIsK0JBQUU7QUFDakIsU0FBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxVQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDM0IsVUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDOztBQUU3QixTQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLFVBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUNsQyxVQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDeEIsVUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLFVBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNsQyxVQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDNUIsVUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQzdCLFVBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNoQyxVQUFLLENBQUMsV0FBVyxDQUFFLEtBQUssQ0FBQyxDQUFDOztBQUUxQixhQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxLQUFLLENBQUMsQ0FBQztBQUNsQyxTQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQzNCLFVBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNoQyxTQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQzNCLFNBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7QUFFckMsYUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsS0FBSyxDQUFDLENBQUM7O0FBRWxDLFlBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBRTtJQUNsQjs7RUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDckRpQixDQUFPOzs7O3VDQUNKLENBQVk7Ozs7a0NBQ2YsQ0FBUzs7OztLQUVyQixxQkFBcUI7YUFBckIscUJBQXFCOztZQUFyQixxQkFBcUI7MkJBQXJCLHFCQUFxQjs7Z0NBQXJCLHFCQUFxQjs7O2dCQUFyQixxQkFBcUI7O1lBRW5CLGtCQUFFO0FBQ04sV0FBSSxPQUFPLEdBQUc7QUFDWixjQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsRUFBRTtRQUN0RCxDQUFDOztBQUVGLGNBQ0U7O1dBQUksS0FBSyxFQUFFLE9BQVE7U0FDakI7O2FBQUssU0FBUyxFQUFDLDhCQUE4QjtXQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7VUFDaEI7UUFDSCxDQUNOO01BQ0Y7OztVQWRHLHFCQUFxQjtJQUFTLG1CQUFNLFNBQVM7O3NCQWlCcEMscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NyQmxCLENBQU87Ozs7a0NBQ1AsQ0FBUzs7OztpQ0FDVixDQUFROzs7O3FDQUNKLEVBQVk7Ozs7d0NBQ1QsRUFBZTs7Ozs0Q0FDWCxFQUFtQjs7Ozt1Q0FDMUIsQ0FBWTs7OztBQUVqQyxLQUFJLEtBQUssR0FBQyxTQUFOLEtBQUssQ0FBVSxHQUFHLEVBQUM7QUFDckIsVUFBTyxHQUFHLElBQUcsT0FBTyxHQUFHLEtBQUcsVUFBVyxDQUFDO0VBRXZDLENBQUM7O0tBQ0ksU0FBUzthQUFULFNBQVM7O0FBRUYsWUFGUCxTQUFTLENBRUQsS0FBSyxFQUFFOzJCQUZmLFNBQVM7O0FBR1gsZ0NBSEUsU0FBUyw2Q0FHTCxLQUFLLEVBQUU7QUFDYixTQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsbUJBQVksRUFBRSxJQUFJO01BQ25CLENBQUM7QUFDRixTQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0Qjs7Z0JBUkcsU0FBUzs7WUFVSSw2QkFBRTtBQUNqQixXQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7TUFDbkI7OztZQUVpQiw4QkFBRTtBQUNsQixXQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7TUFDbkI7OztZQUVLLGtCQUFFO0FBQ04sV0FBSSxnQkFBZ0IsR0FBRyw2QkFBUyxpQkFBaUIsQ0FBQyxDQUFDOztBQUVuRCxXQUFJLFlBQVksR0FBRyw2QkFBUyxPQUFPLEVBQUU7QUFDbkMsd0JBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87QUFDbkMseUJBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQ3JDLHNCQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO0FBQy9CLDBCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztRQUN4QyxDQUFDLENBQUM7O0FBRUgsV0FBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUNwRCxXQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7QUFFN0QsV0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVMsSUFBSSxFQUFFLENBQUMsRUFBQztBQUNuRCxhQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBUyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0FBQzNELGVBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsZUFBRyxJQUFJLENBQUMsT0FBTyxJQUNiLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQ25DLGlCQUFNLENBQUMsUUFBUTtBQUNmLGVBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksSUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsSUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQztBQUMvQixpQkFBSSxNQUFNLEdBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxVQUFTLEtBQUssRUFBQztBQUN0QyxzQkFBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQUM7Y0FDaEYsR0FBQyxLQUFLLENBQUM7O0FBRVYsb0JBQ0k7O2lCQUFpQixZQUFZLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7O0FBRXJELHlCQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxRQUFTO0FBQ3RGLHVCQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBQyxNQUFNLEdBQUMsS0FBTTtBQUNuQyxvQkFBRyxFQUFFLENBQUU7QUFDUCwyQkFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVc7QUFDM0MseUJBQVEsRUFBRSxDQUFFO0FBQ1oseUJBQVEsRUFBRSxDQUFFO2VBQzFCLFVBQVU7Y0FDSyxDQUNuQjtZQUNKLE1BQUs7O0FBRUosaUJBQUksV0FBVyxHQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDOztBQUUvRixpQkFBRyxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFDO0FBQ3RDLG1CQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdFLG1CQUFJLENBQUMsbUJBQU0sY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQ3pDLCtCQUFjLEdBQUcsMENBQUssdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQU8sQ0FBQztnQkFDakY7QUFDRCxzQkFDRTs7bUJBQWEsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFNO0FBQ3hCLHNCQUFHLEVBQUUsQ0FBRTtBQUNQLDRCQUFTLEVBQUUsV0FBWTtBQUN2QiwyQkFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUztBQUM5Qix5QkFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFPO0FBQ3RCLHlCQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3ZDLHdCQUFLLEVBQUUsTUFBTSxDQUFDLEtBQU07aUJBQzlCLGNBQWM7Z0JBQ0gsQ0FDZjtjQUNGLE1BQUs7QUFDSixzQkFDRTs7bUJBQWEsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFNO0FBQ3hCLHNCQUFHLEVBQUUsQ0FBRTtBQUNQLDRCQUFTLEVBQUUsV0FBWTtBQUN2QiwyQkFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUztBQUM5Qix5QkFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFPO0FBQ3RCLHlCQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3ZDLHdCQUFLLEVBQUUsTUFBTSxDQUFDLEtBQU07aUJBQzlCLFVBQVU7Z0JBQ0MsQ0FDZjtjQUNGO1lBQ0Y7VUFDRixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1QsYUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkYsYUFBSSxlQUFlLEdBQUcsa0JBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FDMUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxHQUFDLElBQUksQ0FBQzs7QUFFbEUsYUFBSSxXQUFXLEdBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ3BHLGdCQUNFOzthQUFVLFVBQVUsRUFBRSxRQUFTLEVBQUMsR0FBRyxFQUFFLENBQUUsRUFBQyxTQUFTLEVBQUUsV0FBWTtBQUM3RCxzQkFBUyxFQUFFLGtCQUFrQixHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLFNBQVU7QUFDN0QsMkJBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssbUJBQU0sY0FBZTtBQUNsRSx1QkFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtBQUMzQywyQkFBYyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ25ELDBCQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDakQsd0JBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7V0FDNUMsZUFBZTtXQUNmLFlBQVk7VUFDSixDQUNaO1FBQ0YsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFVCxXQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO0FBQ3hCLGtCQUFTLENBQUMsSUFBSSxDQUNkOzthQUFVLEdBQUcsRUFBQyxpQkFBaUI7V0FDN0I7O2VBQUksT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBRSxrQkFBa0IsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFFO0FBQzVELHdCQUFTLEVBQUMsd0JBQXdCO2FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFFLG1CQUFNLFlBQVk7WUFDekM7VUFDSSxDQUFDLENBQUM7UUFDZDs7QUFFRCxXQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFckIsV0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7O0FBRXhELGNBQ0U7O1dBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUUsZ0JBQWlCLEVBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtTQUN4RTs7YUFBTyxHQUFHLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBRSxZQUFhO1dBQ3ZDLFdBQVc7V0FDWjs7O2FBQ0csU0FBUztZQUNKO1VBQ0Y7UUFDSixDQUNQO01BQ0Y7OztZQUVnQiwyQkFBQyxrQkFBa0IsRUFBQztBQUNuQyxXQUFJLGVBQWUsR0FBRyxJQUFJLENBQUM7O0FBRTNCLFdBQUcsa0JBQWtCLEVBQUM7QUFDcEIsYUFBSSxLQUFLLEdBQUc7QUFDVixnQkFBSyxFQUFDLEVBQUU7QUFDUixtQkFBUSxFQUFDLEVBQUU7VUFDWjtBQUNELHdCQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSxHQUFFLHlDQUFJLEtBQUssRUFBRSxLQUFNLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBRSxHQUFPLENBQUM7UUFDakc7QUFDRCxXQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBUyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0FBQ3RELGFBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxHQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyRSxhQUFJLEtBQUssR0FBQztBQUNSLGtCQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBQyxNQUFNLEdBQUMsSUFBSTtBQUNsQyxnQkFBSyxFQUFFLEtBQUs7QUFDWixtQkFBUSxFQUFFLEtBQUs7O1VBRWhCLENBQUM7QUFDRixhQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFFLGtCQUFLLG9CQUFvQixDQUFDLG1CQUFNLFNBQVMsQ0FBQyxHQUFFLElBQUksQ0FBQztBQUM5RSxnQkFBUTs7YUFBSSxLQUFLLEVBQUUsS0FBTSxFQUFDLEdBQUcsRUFBRSxDQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFVO1dBQUUsTUFBTSxDQUFDLElBQUk7V0FBRSxTQUFTO1VBQU0sQ0FBRTtRQUMvRixDQUFDLENBQUM7O0FBRUgsY0FDRTs7V0FBTyxHQUFHLEVBQUMsUUFBUTtTQUNqQjs7O1dBQUssZUFBZTtXQUFFLE9BQU87VUFBTTtRQUM3QixDQUNUO01BQ0Y7OztZQUVnQiwyQkFBQyxRQUFRLEVBQUM7QUFDekIsV0FBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlDLFdBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO01BQ3JDOzs7WUFFaUIsNEJBQUMsUUFBUSxFQUFDO0FBQzFCLFdBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxXQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztNQUN0Qzs7O1lBRWEsd0JBQUMsUUFBUSxFQUFDO0FBQ3RCLFdBQUksR0FBRyxFQUFFLFdBQVcsQ0FBQztBQUNyQixXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHLEVBQUUsQ0FBQyxFQUFDO0FBQ3RDLGFBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBQyxDQUFDLEVBQUM7QUFDakIsY0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLHNCQUFXLEdBQUcsR0FBRyxDQUFDO1VBQ25CO1FBQ0YsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULFdBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO01BQ3BDOzs7WUFFYyx5QkFBQyxRQUFRLEVBQUUsVUFBVSxFQUFDO0FBQ25DLFdBQUksR0FBRyxFQUFFLFdBQVcsQ0FBQztBQUNyQixXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHLEVBQUUsQ0FBQyxFQUFDO0FBQ3RDLGFBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBQyxDQUFDLEVBQUM7QUFDakIsY0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLHNCQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLGtCQUFPLEtBQUssQ0FBQztVQUNkO1FBQ0YsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULFdBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztNQUNqRDs7O1lBRXlCLG9DQUFDLENBQUMsRUFBQztBQUMzQixXQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUM7QUFDdkYsYUFBSSxDQUFDLGVBQWUsQ0FDbEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xGO01BQ0Y7OztZQUVhLHdCQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUM7QUFDbkMsV0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsV0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQztBQUM1QixvQkFBVyxFQUFFLENBQUM7QUFDZCxhQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUN0QyxXQUFXLEVBQUUsQ0FBQztRQUNqQjtBQUNELGVBQVEsRUFBRSxDQUFDO0FBQ1gsV0FBSSxRQUFRLEdBQUc7QUFDYixxQkFBWSxFQUFFO0FBQ1osY0FBRyxFQUFFLFFBQVE7QUFDYixjQUFHLEVBQUUsV0FBVztVQUNqQjtRQUNGLENBQUM7O0FBRUYsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBQztBQUMvQyxhQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEM7QUFDRCxXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO01BQ3pCOzs7WUFFUyxzQkFBRTtBQUNWLFdBQUksWUFBWSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0FBQ3pDLFdBQUcsWUFBWSxFQUFDO0FBQ2QsYUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBQyxZQUFZLENBQUMsR0FBRyxFQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRTtNQUNGOzs7WUFFcUIsZ0NBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUM7QUFDbkQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3BDLFdBQUcsSUFBSSxJQUFJLE1BQU0sRUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO01BQ3pFOzs7WUFFb0IsK0JBQUMsUUFBUSxFQUFDO0FBQzdCLFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLG1CQUFNLGlCQUFpQixFQUFFO0FBQ3ZELGdCQUFROzs7V0FBYSw0Q0FBTyxJQUFJLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxRQUFTLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEdBQUU7VUFBYyxDQUFFO1FBQ3BJLE1BQUs7QUFDSixnQkFBUTs7O1dBQWMsNENBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsUUFBUyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFFO1VBQWMsQ0FBRTtRQUN4STtNQUNGOzs7WUFFbUIsZ0NBQUU7QUFDcEIsV0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUN4RCxXQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDeEIsWUFBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFDL0IsdUJBQWMsQ0FBQyxJQUFJLENBQUM7QUFDbEIsZ0JBQUssRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztVQUM3QixDQUFDLENBQUM7UUFDSjtBQUNELGNBQU8sY0FBYyxDQUFDO01BQ3ZCOzs7WUFFUyxzQkFBRztBQUNYLFdBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzFCLFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7QUFDdkIsYUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDMUM7O0FBRUQsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO0FBQ25FLGFBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFJLElBQUksQ0FBQztRQUN2RTtNQUNGOzs7WUFFaUIsOEJBQUU7QUFDbEIsV0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUN4RCxZQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztBQUMvQixnQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEQ7TUFDRjs7O1lBRXVCLG9DQUFFO0FBQ3hCLFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FDckQ7QUFDRixnQkFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekM7TUFDRjs7O1lBRWtCLCtCQUFFO0FBQ25CLGNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLG1CQUFNLGlCQUFpQixJQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssbUJBQU0sZ0JBQWdCLENBQUM7TUFDNUQ7OztVQS9SRyxTQUFTO0lBQVMsbUJBQU0sU0FBUzs7QUFpU3ZDLFVBQVMsQ0FBQyxTQUFTLEdBQUc7QUFDcEIsU0FBTSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQzlCLE9BQUksRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSztBQUMzQixVQUFPLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEtBQUs7QUFDOUIsVUFBTyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzdCLFdBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUM5QixRQUFLLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDM0IsWUFBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQy9CLFdBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNoQyxrQkFBZSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLO0FBQ3RDLGFBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNoQyxjQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDakMsYUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0VBQ25DLENBQUM7c0JBQ2EsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0MzVE4sQ0FBTzs7OztrQ0FDUCxDQUFTOzs7O0tBRXJCLFFBQVE7YUFBUixRQUFROztBQUVELFlBRlAsUUFBUSxDQUVBLEtBQUssRUFBRTsyQkFGZixRQUFROztBQUdWLGdDQUhFLFFBQVEsNkNBR0osS0FBSyxFQUFFO0FBQ2IsU0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDbkI7O2dCQUxHLFFBQVE7O1lBT0osa0JBQUMsQ0FBQyxFQUFDOzs7QUFDVCxXQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sSUFDM0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUSxJQUM3QixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7O0FBQ25DLGVBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQzFDLGVBQUksTUFBSyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ3RCLGlCQUFJLE1BQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7QUFDdEMscUJBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUMxRCxNQUFNLElBQUksTUFBSyxLQUFLLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFO0FBQ3hELHFCQUFLLFFBQVEsRUFBRSxDQUFDOzs7OztBQUtoQix5QkFBVSxDQUFDLFlBQU07QUFDZixxQkFBRyxNQUFLLFFBQVEsS0FBSyxDQUFDLEVBQUU7QUFDdEIseUJBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztrQkFDMUQ7QUFDRCx1QkFBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2NBQ1Q7WUFDSjtBQUNELGVBQUksTUFBSyxLQUFLLENBQUMsVUFBVSxFQUFFLE1BQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFDNUQ7TUFDRjs7O1lBRVUscUJBQUMsQ0FBQyxFQUFFO0FBQ2IsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtBQUM1QixhQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BEO01BQ0Y7OztZQUVXLHNCQUFDLENBQUMsRUFBRTtBQUNkLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7QUFDN0IsYUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRDtNQUNGOzs7WUFFSyxrQkFBRTtBQUNOLFdBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLFdBQUksS0FBSyxHQUFDO0FBQ1IsY0FBSyxFQUFDO0FBQ0osMEJBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUMsSUFBSTtVQUN6RTtBQUNELGtCQUFTLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBRSxFQUFFLENBQUM7UUFDdkksQ0FBQzs7QUFFRixXQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQztBQUN4RSxnQkFDRTs7d0JBQVEsS0FBSztBQUNULHdCQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQzFDLHVCQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3hDLG9CQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO1dBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1VBQU0sQ0FDbEU7UUFDRixNQUFJO0FBQ0gsZ0JBQ0U7O1dBQVEsS0FBSztXQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtVQUFNLENBQzFDO1FBQ0Y7TUFDRjs7O1VBbkVHLFFBQVE7SUFBUyxtQkFBTSxTQUFTOztBQXFFdEMsU0FBUSxDQUFDLFNBQVMsR0FBRztBQUNuQixhQUFVLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDaEMsaUJBQWMsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNwQyxhQUFVLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDaEMsY0FBVyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2pDLGdCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDbkMsaUJBQWMsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtFQUNyQyxDQUFDO0FBQ0YsU0FBUSxDQUFDLFlBQVksR0FBRztBQUN0QixhQUFVLEVBQUUsU0FBUztFQUN0QjtzQkFDYyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ25GTCxDQUFPOzs7O2tDQUNQLENBQVM7Ozs7S0FFckIsV0FBVzthQUFYLFdBQVc7O0FBRUosWUFGUCxXQUFXLENBRUgsS0FBSyxFQUFFOzJCQUZmLFdBQVc7O0FBR2IsZ0NBSEUsV0FBVyw2Q0FHUCxLQUFLLEVBQUU7SUFDZDs7Z0JBSkcsV0FBVzs7WUFNTSwrQkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO1dBQ2xDLFFBQVEsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUF2QixRQUFROztBQUNoQixXQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxJQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsU0FBUyxJQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsTUFBTSxJQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsU0FBUyxJQUM1QyxPQUFPLFFBQVEsS0FBSyxPQUFPLFNBQVMsQ0FBQyxRQUFRLElBQzdDLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFOztBQUUzRSxXQUFHLGFBQWEsRUFBQztBQUNmLGdCQUFPLGFBQWEsQ0FBQztRQUN0Qjs7QUFFRCxXQUFHLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQy9FLGFBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtBQUN4RSx3QkFBYSxHQUFHLGFBQWEsSUFDM0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUNyRCxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7VUFDL0QsTUFBTTtBQUNMLHdCQUFhLEdBQUcsSUFBSSxDQUFDO1VBQ3RCO1FBQ0YsTUFBTTtBQUNMLHNCQUFhLEdBQUcsYUFBYSxJQUFJLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2xFOztBQUVELFdBQUcsYUFBYSxFQUFDO0FBQ2YsZ0JBQU8sYUFBYSxDQUFDO1FBQ3RCOztBQUVELFdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDL0MsZ0JBQU8sS0FBSyxDQUFDO1FBQ2QsTUFBTTtBQUNMLGdCQUFPLGFBQWEsSUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0Q7TUFDRjs7O1lBRWEsd0JBQUMsQ0FBQyxFQUFDO0FBQ2YsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksbUJBQU0saUJBQWlCLEVBQUM7QUFDckQsYUFBRyxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQ2pELG1CQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1VBQzVCLE1BQU0sSUFBRyxNQUFNLENBQUMsWUFBWSxFQUFFO0FBQzNCLGVBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNoQyxjQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7VUFDekI7UUFDRjtBQUNELFdBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUNmLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFDdEMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztNQUM5Qjs7O1lBRUssa0JBQUU7QUFDTixXQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLEdBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFELFdBQUksT0FBTyxHQUFHO0FBQ1osa0JBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7QUFDL0IsZ0JBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxNQUFNLEdBQUMsSUFBSTtBQUN0QyxjQUFLLEVBQUUsS0FBSztBQUNaLGlCQUFRLEVBQUUsS0FBSztRQUNoQixDQUFDO0FBQ0YsV0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDckMsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQztBQUNoQixrQkFBUyxJQUFJLFVBQVUsR0FBQyxLQUFLLENBQUM7UUFDakM7O0FBR0QsV0FBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQztBQUNyQixhQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxtQkFBTSxlQUFlLEVBQUM7QUFDbkQsZUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztVQUMvQyxNQUFLLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLG1CQUFNLGlCQUFpQixFQUFDO0FBQzNELGVBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7VUFDckQ7UUFDRjtBQUNELGNBQ0U7O29CQUFJLEtBQUssRUFBRSxPQUFRLEVBQUMsU0FBUyxFQUFFLFNBQVUsSUFBSyxJQUFJO1NBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUNqQixDQUNOO01BQ0Y7OztVQXJGRyxXQUFXO0lBQVMsbUJBQU0sU0FBUzs7QUF1RnpDLFlBQVcsQ0FBQyxTQUFTLEdBQUc7QUFDdEIsWUFBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2pDLFNBQU0sRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUM1QixZQUFTLEVBQUMsbUJBQU0sU0FBUyxDQUFDLE1BQU07RUFDakMsQ0FBQzs7QUFFRixZQUFXLENBQUMsWUFBWSxHQUFHO0FBQ3pCLFlBQVMsRUFBRSxNQUFNO0FBQ2pCLFNBQU0sRUFBRSxLQUFLO0FBQ2IsWUFBUyxFQUFDLEVBQUU7RUFDYjtzQkFDYyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NyR1IsQ0FBTzs7OztrQ0FDUCxDQUFTOzs7O21DQUNSLEVBQVU7Ozs7MkNBQ1IsRUFBbUI7Ozs7dUNBQ25CLENBQVk7Ozs7S0FFM0IsZUFBZTtlQUFmLGVBQWU7O0FBQ04sY0FEVCxlQUFlLENBQ0wsS0FBSyxFQUFDOytCQURoQixlQUFlOztBQUViLG9DQUZGLGVBQWUsNkNBRVAsS0FBSyxFQUFFO0FBQ2IsYUFBSSxDQUFDLGFBQWEsR0FBQyxDQUFDLENBQUM7QUFDckIsYUFBSSxDQUFDLEtBQUssR0FBQztBQUNQLHdCQUFXLEVBQUMsS0FBSztVQUNwQixDQUFDO01BQ0w7O2tCQVBDLGVBQWU7O2dCQVNMLHdCQUFDLENBQUMsRUFBQztBQUNmLGlCQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFOztBQUNuQixxQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksVUFBVSxHQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7O0FBRTlELHFCQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBQztBQUN0Qiw0QkFBTztrQkFDVjtBQUNELHFCQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Y0FDcEQsTUFBSyxJQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFDO0FBQ3ZCLHFCQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Y0FDbkQ7VUFDRjs7O2dCQUVTLG9CQUFDLENBQUMsRUFBQztBQUNYLGlCQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDO0FBQ3ZCLHFCQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxVQUFVLEdBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUM5RCxxQkFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUM7QUFDdEIsNEJBQU87a0JBQ1Y7QUFDRCxxQkFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ3REO1VBQ0Y7OztnQkFDUSxtQkFBQyxLQUFLLEVBQUM7QUFDWixpQkFBSSxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBQ1osaUJBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDO0FBQzNCLHFCQUFJLEtBQUssR0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0MscUJBQUcsS0FBSyxLQUFHLElBQUksRUFBQzs7QUFFWix5QkFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7O0FBSzdCLDBCQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDZCw0QkFBTyxLQUFLLENBQUM7a0JBQ2hCO2NBQ0o7QUFDRCxvQkFBTyxJQUFJLENBQUM7VUFFZjs7Ozs7Ozs7Ozs7OztZQUNXLFlBQUU7QUFDVixpQkFBRyxJQUFJLENBQUMsYUFBYSxJQUFFLENBQUMsRUFBQztBQUNyQiw2QkFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqQyxxQkFBSSxDQUFDLGFBQWEsR0FBQyxDQUFDLENBQUM7Y0FDeEI7VUFDSjs7O2dCQUNnQiw2QkFBRTtBQUNmLGlCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7QUFFL0Isa0JBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztVQUNqQjs7O2dCQUVtQixnQ0FBRztBQUNyQixpQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1VBQ3JCOzs7Z0JBRUssa0JBQUU7QUFDTixpQkFBSSxRQUFRLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2lCQUM1QixNQUFNLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2lCQUN4QixJQUFJLEdBQUM7QUFDRCxvQkFBRyxFQUFDLFVBQVU7QUFDZCwwQkFBUyxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN4Qyx1QkFBTSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztjQUNwQyxDQUFDOztBQUVGLHFCQUFRLENBQUMsV0FBVyxLQUFHLElBQUksQ0FBQyxXQUFXLEdBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUVsRSxpQkFBSSxXQUFXLEdBQUMsNkJBQVMsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztBQUM3RixvQkFDSTs7bUJBQUksR0FBRyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFFO2lCQUNyQyx5QkFBTyxRQUFRLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUUsRUFBRSxDQUFDO2lCQUNqRSxnRUFBVSxHQUFHLEVBQUMsVUFBVSxHQUFZO2NBQ25DLENBQ1I7VUFDRjs7O2dCQUVnQiwyQkFBQyxDQUFDLEVBQUM7QUFDbEIsaUJBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLGlCQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUMsa0JBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELG9CQUFPLEtBQUssQ0FBQztVQUNkOzs7WUEvRkcsZUFBZTtJQUFTLG1CQUFNLFNBQVM7O0FBa0c3QyxnQkFBZSxDQUFDLFNBQVMsR0FBRztBQUMxQixpQkFBWSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2xDLGFBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNoQyxhQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsZUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0VBQ2pDLENBQUM7O3NCQUdhLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2hIWixDQUFPOzs7O0FBQ3pCLEtBQUksTUFBTSxHQUFDLFNBQVAsTUFBTSxDQUFVLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUM7O0FBRWxFLFNBQUcsUUFBUSxLQUFHLElBQUksSUFBRSxPQUFPLFFBQVEsS0FBRyxRQUFRLEVBQUM7O0FBQzNDLGFBQUksSUFBSSxHQUFDLFFBQVEsS0FBRyxJQUFJLEdBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQztBQUN6QyxnQkFDSSx1REFBVyxJQUFJLElBQUUsSUFBSSxFQUFFLElBQUssRUFBQyxZQUFZLEVBQUUsWUFBYTtBQUNqRCxzQkFBUyxFQUFFLENBQUMsV0FBVyxJQUFFLEVBQUUsSUFBRSxnQ0FBaUMsSUFBRyxDQUMzRTtNQUNKLE1BQU0sSUFBRyxDQUFDLFFBQVEsRUFBQztBQUNsQixhQUFJLElBQUksR0FBQyxRQUFRLEtBQUcsSUFBSSxHQUFDLE1BQU0sR0FBQyxRQUFRLENBQUM7QUFDekMsZ0JBQ0ksdURBQVcsSUFBSSxJQUFFLElBQUksRUFBRSxJQUFLLEVBQUMsWUFBWSxFQUFFLFlBQWEsRUFBQyxRQUFRLEVBQUMsVUFBVTtBQUNyRSxzQkFBUyxFQUFFLENBQUMsV0FBVyxJQUFFLEVBQUUsSUFBRSxnQ0FBaUMsSUFBRyxDQUMzRTtNQUNGLE1BQU0sSUFBRyxRQUFRLENBQUMsSUFBSSxFQUFDOzs7QUFFcEIsaUJBQVEsQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7OztBQUc1QyxhQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsV0FBVyxJQUFFLEVBQUUsSUFDaEIsNEJBQTRCLEdBQzVCLFFBQVEsQ0FBQyxJQUFJLElBQ1osUUFBUSxDQUFDLFNBQVMsR0FBRSxHQUFHLEdBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRSxFQUFFLENBQUMsQ0FBQzs7QUFFbEUsYUFBRyxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBQzs7QUFDMUIsaUJBQUksT0FBTyxHQUFHLEVBQUU7aUJBQUUsTUFBTSxHQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ2pELGlCQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUM7O0FBQ3JCLHFCQUFJLFFBQVEsQ0FBQztBQUNiLHdCQUFPLEdBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFDNUIsNkJBQVEsR0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztBQUM1Qiw0QkFDSTs7MkJBQVEsR0FBRyxFQUFFLFFBQVEsR0FBQyxDQUFFLEVBQUMsS0FBSyxFQUFFLENBQUU7eUJBQUUsUUFBUTtzQkFBVSxDQUN6RDtrQkFDSixDQUFDLENBQUM7Y0FDTjtBQUNELG9CQUNJOzs4QkFBWSxJQUFJLElBQUUsWUFBWSxFQUFFLFlBQWE7aUJBQUUsT0FBTztjQUFVLENBQ2xFO1VBQ0wsTUFBTSxJQUFHLFFBQVEsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFDOzs7QUFFbkMscUJBQVEsQ0FBQyxJQUFJLEtBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMscUJBQVEsQ0FBQyxJQUFJLEtBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsaUJBQUksWUFBWSxHQUFDLElBQUksQ0FBQyxTQUFTO2lCQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7QUFDN0MsaUJBQUcsWUFBWSxFQUFDO0FBQ1oscUJBQUksQ0FBQyxTQUFTLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFDdEIseUJBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7O0FBQ2pCLHFDQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7c0JBQ25CO2tCQUNKLENBQUM7QUFDRix3QkFBTyxHQUFDOzt1QkFBTyxTQUFTLEVBQUMsdUNBQXVDLEVBQUMsT0FBTyxFQUFFLFlBQWE7O2tCQUFhO2NBQ3ZHOztBQUVELG9CQUNJOzs7aUJBQ0ksMERBQWMsSUFBSSxJQUFFLFlBQVksRUFBRSxZQUFhLElBQVk7aUJBQzFELE9BQU87Y0FDTixDQUVSO1VBQ0wsTUFBTSxJQUFHLFFBQVEsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFDO0FBQ3JDLGlCQUFJLE9BQU0sR0FBRyxZQUFZLENBQUM7QUFDMUIsaUJBQUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQzs7QUFFN0Msd0JBQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztjQUNsQztBQUNELGlCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBQyxFQUFFLENBQUMsQ0FBQztBQUMzRCxpQkFBSSxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsQ0FBQzs7QUFFekMsaUJBQUksT0FBTyxHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFDOztBQUV6RixvQkFDRSx1REFBVyxJQUFJLElBQUUsSUFBSSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLGNBQWMsRUFBRSxPQUFRLElBQUUsQ0FDMUU7VUFDSCxNQUFLOztBQUNGLG9CQUNJLHVEQUFXLElBQUksSUFBRSxJQUFJLEVBQUUsSUFBSyxFQUFDLFlBQVksRUFBRSxZQUFhLElBQUUsQ0FDN0Q7VUFDSjtNQUNKOztBQUVELFlBQ0ksdURBQVcsSUFBSSxJQUFFLFlBQVksRUFBRSxZQUFhLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLElBQUUsRUFBRSxJQUFFLGdDQUFpQyxJQUFFLENBQzVIO0VBQ0osQ0FBQzs7c0JBRWEsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDdEZILENBQU87Ozs7a0NBQ1AsQ0FBUzs7Ozt3Q0FLcEIsRUFBYzs7QUFHckIsS0FBSSxvQkFBb0IsR0FBQyxtQkFBTSxhQUFhLENBQUMsMEJBQWEsU0FBUyxDQUFDLENBQUM7O0tBRS9ELFlBQVk7YUFBWixZQUFZOztZQUFaLFlBQVk7MkJBQVosWUFBWTs7Z0NBQVosWUFBWTs7O2dCQUFaLFlBQVk7Ozs7WUFFVixnQkFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQztBQUNwQixXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDbEIsR0FBRyxFQUFDLEtBQUssRUFBRTtBQUNULGFBQUksRUFBQyxRQUFRO0FBQ2IsZ0JBQU8sRUFBRSxJQUFJO0FBQ2Isd0JBQWUsRUFBRSxJQUFJO0FBQ3JCLHNCQUFhLEVBQUUsb0JBQW9CO0FBQ25DLHNCQUFhLEVBQUUsb0JBQW9CO1FBQ3BDLENBQUMsQ0FBQztNQUNSOzs7WUFFSyxrQkFBRTtBQUNOLGNBQ0ksZ0VBQWdCLEdBQUcsRUFBQyxRQUFRLEVBQUMsbUJBQW1CLEVBQUUsb0JBQXFCO0FBQ3RELFdBQUUsRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUMsaUJBQWlCLEdBQWtCLENBQ3ZGO01BQ0Y7OztVQWxCRyxZQUFZO0lBQVMsbUJBQU0sU0FBUzs7c0JBcUIzQixZQUFZOzs7Ozs7O0FDaEMzQjs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBLCtDOzs7Ozs7QUNsQkE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsaUNBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw0Q0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL00sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0VBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxxRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFFBQU87QUFDUCw4Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUIsUUFBTztBQUNQO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkIsVUFBUztBQUNUO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLGVBQWUsdUNBQXVDO0FBQ3pFO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7OztBQy9MQSwwQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLDJCQUEwQixjQUFjO0FBQ3hDLDhCQUE2QixpQkFBaUI7QUFDOUMsNkJBQTRCLGdCQUFnQjtBQUM1QywwQkFBeUIsYUFBYTtBQUN0Qyw0QkFBMkIsZUFBZTtBQUMxQyw0QkFBMkIsZUFBZTs7QUFFMUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxvSUFBbUk7QUFDbkk7QUFDQSxzSUFBcUk7QUFDckk7O0FBRUE7QUFDQSx5TUFBd00sUUFBUTs7QUFFaE47QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0SkFBMko7QUFDM0osZ0tBQStKO0FBQy9KO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSx5SEFBd0g7QUFDeEgsNkpBQTRKO0FBQzVKO0FBQ0EsK0lBQThJO0FBQzlJO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsNkpBQTRKO0FBQzVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7O0FDMUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUMxRnRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQXlCLDhCQUE4QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JELE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsNEI7Ozs7Ozs7QUNqREE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MsaUJBQWlCO0FBQ2pELE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsUUFBTyx1Q0FBdUM7QUFDOUM7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFPLHlDQUF5QztBQUNoRDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBZ0IsaUNBQWlDO0FBQ2pELFlBQVc7QUFDWCxFQUFDOztBQUVEO0FBQ0EsaUJBQWdCLDhCQUE4QjtBQUM5QyxZQUFXO0FBQ1gsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDOUhBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDeE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUEsd0M7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Qzs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMURBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0gscUJBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1U0EsS0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUM7QUFDL0IsT0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxFQUFhLENBQUMsQ0FBQztBQUN2QyxPQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFB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QixFQUFFLDJCQUFTLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDekMsYUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNsQixvQkFBTztVQUNWO0FBQ0QsY0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsaUJBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0FBQzlCLGtCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzlDLHFCQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QyxzQ0FBaUIsR0FBRyxJQUFJLENBQUM7QUFDekIsMkJBQU07a0JBQ1Q7Y0FDSjtBQUNELGlCQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDcEIsd0JBQU8sSUFBSSxLQUFLLDREQUEwRCxnQkFBZ0IsQ0FBRyxDQUFDO2NBQ2pHO1VBQ0o7TUFDSjtBQUNELGdCQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDbkMsZUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0VBQ3JDLENBQUM7O0FBRUYsYUFBWSxDQUFDLFlBQVksR0FBRztBQUN4QixVQUFLLEVBQUUsbUJBQU0sWUFBWTtFQUM1QixDQUFDOztzQkFFYSxZQUFZIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC10YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Qm9vdHN0cmFwVGFibGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzNzVlYWM0Y2M0NDgzMGI4NmViNVxuICoqLyIsImltcG9ydCBCb290c3RyYXBUYWJsZSBmcm9tICcuL0Jvb3RzdHJhcFRhYmxlJztcbmltcG9ydCBUYWJsZUhlYWRlckNvbHVtbiBmcm9tICcuL1RhYmxlSGVhZGVyQ29sdW1uJztcbmltcG9ydCB7VGFibGVEYXRhU2V0fSBmcm9tICcuL3N0b3JlL1RhYmxlRGF0YVN0b3JlJztcblxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICB3aW5kb3cuQm9vdHN0cmFwVGFibGUgPSBCb290c3RyYXBUYWJsZTtcbiAgd2luZG93LlRhYmxlSGVhZGVyQ29sdW1uID0gVGFibGVIZWFkZXJDb2x1bW47XG4gIHdpbmRvdy5UYWJsZURhdGFTZXQgPSBUYWJsZURhdGFTZXQ7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gIEJvb3RzdHJhcFRhYmxlLFxuICBUYWJsZUhlYWRlckNvbHVtbixcbiAgVGFibGVEYXRhU2V0XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vVGFibGVIZWFkZXInO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keSc7XG5pbXBvcnQgUGFnaW5hdGlvbkxpc3QgZnJvbSAnLi9wYWdpbmF0aW9uL1BhZ2luYXRpb25MaXN0JztcbmltcG9ydCBUb29sQmFyIGZyb20gJy4vdG9vbGJhci9Ub29sQmFyJztcbmltcG9ydCBUYWJsZUZpbHRlciBmcm9tICcuL1RhYmxlRmlsdGVyJztcbmltcG9ydCB7VGFibGVEYXRhU3RvcmV9IGZyb20gJy4vc3RvcmUvVGFibGVEYXRhU3RvcmUnO1xuaW1wb3J0IGV4cG9ydENTViBmcm9tICcuL2Nzdl9leHBvcnRfdXRpbCc7XG5pbXBvcnQge0ZpbHRlcn0gZnJvbSAnLi9GaWx0ZXInO1xuXG5jbGFzcyBCb290c3RyYXBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLl9hdHRhY2hDZWxsRWRpdEZ1bmMoKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmRhdGEpKSB7XG4gICAgICB0aGlzLnN0b3JlID0gbmV3IFRhYmxlRGF0YVN0b3JlKHRoaXMucHJvcHMuZGF0YS5nZXREYXRhKCkpO1xuICAgICAgdGhpcy5wcm9wcy5kYXRhLmNsZWFyKCk7XG4gICAgICB0aGlzLnByb3BzLmRhdGEub24oJ2NoYW5nZScsIChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogdGhpcy5nZXRUYWJsZURhdGEoKVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb3B5ID0gdGhpcy5wcm9wcy5kYXRhLnNsaWNlKCk7XG4gICAgICB0aGlzLnN0b3JlID0gbmV3IFRhYmxlRGF0YVN0b3JlKGNvcHkpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdFRhYmxlKHRoaXMucHJvcHMpO1xuXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuZmlsdGVyLm9uKCdvbkZpbHRlckNoYW5nZScsIChjdXJyZW50RmlsdGVyKSA9PiB7XG4gICAgICAgIHNlbGYuaGFuZGxlRmlsdGVyRGF0YShjdXJyZW50RmlsdGVyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCkge1xuICAgICAgbGV0IGNvcHkgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZC5zbGljZSgpO1xuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjb3B5KTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogdGhpcy5nZXRUYWJsZURhdGEoKSxcbiAgICAgIGN1cnJQYWdlOiB0aGlzLnByb3BzLm9wdGlvbnMucGFnZSB8fCAxLFxuICAgICAgc2l6ZVBlclBhZ2U6IHRoaXMucHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZSB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1RbMF0sXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKClcbiAgICB9O1xuICB9XG5cbiAgaW5pdFRhYmxlKHByb3BzKXtcbiAgICBsZXQge2tleUZpZWxkfSA9IHByb3BzO1xuXG4gICAgY29uc3QgaXNLZXlGaWVsZERlZmluZWQgPSB0eXBlb2Yga2V5RmllbGQgPT09ICdzdHJpbmcnICYmIGtleUZpZWxkLmxlbmd0aDtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHByb3BzLmNoaWxkcmVuLCBjb2x1bW49PiB7XG4gICAgICBpZiAoY29sdW1uLnByb3BzLmlzS2V5KSB7XG4gICAgICAgIGlmIChrZXlGaWVsZCkge1xuICAgICAgICAgIHRocm93IFwiRXJyb3IuIE11bHRpcGxlIGtleSBjb2x1bW4gYmUgZGV0ZWN0ZWQgaW4gVGFibGVIZWFkZXJDb2x1bW4uXCI7XG4gICAgICAgIH1cbiAgICAgICAga2V5RmllbGQgPSBjb2x1bW4ucHJvcHMuZGF0YUZpZWxkO1xuICAgICAgfVxuICAgICAgaWYgKGNvbHVtbi5wcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgLy8gYSBjb2x1bW4gY29udGFpbnMgYSBmaWx0ZXJcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlcikge1xuICAgICAgICAgIC8vIGZpcnN0IHRpbWUgY3JlYXRlIHRoZSBmaWx0ZXIgb24gdGhlIEJvb3RzdHJhcFRhYmxlXG4gICAgICAgICAgdGhpcy5maWx0ZXIgPSBuZXcgRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFzcyB0aGUgZmlsdGVyIHRvIGNvbHVtbiB3aXRoIGZpbHRlclxuICAgICAgICBjb2x1bW4ucHJvcHMuZmlsdGVyLmVtaXR0ZXIgPSB0aGlzLmZpbHRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGxldCBjb2xJbmZvcyA9IHRoaXMuZ2V0Q29sdW1uc0Rlc2NyaXB0aW9uKHByb3BzKS5yZWR1Y2UoKCBwcmV2LCBjdXJyICkgPT4ge1xuICAgICAgcHJldltjdXJyLm5hbWVdID0gY3VycjtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcblxuICAgIGlmICghaXNLZXlGaWVsZERlZmluZWQgJiYgIWtleUZpZWxkKVxuICAgICAgdGhyb3cgYEVycm9yLiBObyBhbnkga2V5IGNvbHVtbiBkZWZpbmVkIGluIFRhYmxlSGVhZGVyQ29sdW1uLlxuICAgICAgICAgICAgVXNlICdpc0tleT17dHJ1ZX0nIHRvIHNwZWNpZnkgYSB1bmlxdWUgY29sdW1uIGFmdGVyIHZlcnNpb24gMC41LjQuYDtcblxuICAgIHRoaXMuc3RvcmUuc2V0UHJvcHMoe1xuICAgICAgaXNQYWdpbmF0aW9uOiBwcm9wcy5wYWdpbmF0aW9uLFxuICAgICAga2V5RmllbGQ6IGtleUZpZWxkLFxuICAgICAgY29sSW5mb3M6IGNvbEluZm9zLFxuICAgICAgbXVsdGlDb2x1bW5TZWFyY2g6IHByb3BzLm11bHRpQ29sdW1uU2VhcmNoLFxuICAgICAgcmVtb3RlOiB0aGlzLmlzUmVtb3RlRGF0YVNvdXJjZSgpXG4gICAgfSk7XG4gIH1cblxuICBnZXRUYWJsZURhdGEoKSB7XG4gICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICBpZih0aGlzLnByb3BzLm9wdGlvbnMuc29ydE5hbWUgJiYgdGhpcy5wcm9wcy5vcHRpb25zLnNvcnRPcmRlcilcbiAgICAgICB0aGlzLnN0b3JlLnNvcnQodGhpcy5wcm9wcy5vcHRpb25zLnNvcnRPcmRlciwgdGhpcy5wcm9wcy5vcHRpb25zLnNvcnROYW1lKTtcblxuICAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgbGV0IHBhZ2UsIHNpemVQZXJQYWdlO1xuICAgICAgIGlmICh0aGlzLnN0b3JlLmlzQ2hhbmdlZFBhZ2UoKSkge1xuICAgICAgICBzaXplUGVyUGFnZSA9IHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2U7XG4gICAgICAgIHBhZ2UgPSB0aGlzLnN0YXRlLmN1cnJQYWdlO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICBzaXplUGVyUGFnZSA9IHRoaXMucHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZSB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1RbMF07XG4gICAgICAgICBwYWdlID0gdGhpcy5wcm9wcy5vcHRpb25zLnBhZ2UgfHwgMTtcbiAgICAgICB9XG4gICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5wYWdlKHBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgICB9XG4gICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRDb2x1bW5zRGVzY3JpcHRpb24oeyBjaGlsZHJlbiB9KSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29sdW1uLnByb3BzLmRhdGFGaWVsZCxcbiAgICAgICAgYWxpZ246IGNvbHVtbi5wcm9wcy5kYXRhQWxpZ24sXG4gICAgICAgIHNvcnQ6IGNvbHVtbi5wcm9wcy5kYXRhU29ydCxcbiAgICAgICAgZm9ybWF0OiBjb2x1bW4ucHJvcHMuZGF0YUZvcm1hdCxcbiAgICAgICAgZm9ybWF0RXh0cmFEYXRhOiBjb2x1bW4ucHJvcHMuZm9ybWF0RXh0cmFEYXRhLFxuICAgICAgICBmaWx0ZXJGb3JtYXR0ZWQ6IGNvbHVtbi5wcm9wcy5maWx0ZXJGb3JtYXR0ZWQsXG4gICAgICAgIGVkaXRhYmxlOiBjb2x1bW4ucHJvcHMuZWRpdGFibGUsXG4gICAgICAgIGhpZGRlbjogY29sdW1uLnByb3BzLmhpZGRlbixcbiAgICAgICAgc2VhcmNoYWJsZTogY29sdW1uLnByb3BzLnNlYXJjaGFibGUsXG4gICAgICAgIGNsYXNzTmFtZTogY29sdW1uLnByb3BzLmNvbHVtbkNsYXNzTmFtZSxcbiAgICAgICAgd2lkdGg6IGNvbHVtbi5wcm9wcy53aWR0aCxcbiAgICAgICAgdGV4dDogY29sdW1uLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICBzb3J0RnVuYzogY29sdW1uLnByb3BzLnNvcnRGdW5jLFxuICAgICAgICBpbmRleDogaVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5pbml0VGFibGUobmV4dFByb3BzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuZXh0UHJvcHMuZGF0YSkpIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0RGF0YShuZXh0UHJvcHMuZGF0YS5zbGljZSgpKTtcbiAgICAgIGxldCBwYWdlID0gbmV4dFByb3BzLm9wdGlvbnMucGFnZSB8fCB0aGlzLnN0YXRlLmN1cnJQYWdlO1xuICAgICAgbGV0IHNpemVQZXJQYWdlID0gbmV4dFByb3BzLm9wdGlvbnMuc2l6ZVBlclBhZ2UgfHwgdGhpcy5zdGF0ZS5zaXplUGVyUGFnZTtcblxuICAgICAgLy8gIzEyNVxuICAgICAgaWYoIW5leHRQcm9wcy5vcHRpb25zLnBhZ2UgJiZcbiAgICAgICAgcGFnZSA+PSBNYXRoLmNlaWwobmV4dFByb3BzLmRhdGEubGVuZ3RoIC8gc2l6ZVBlclBhZ2UpKXtcbiAgICAgICAgcGFnZSA9IDE7XG4gICAgICB9XG4gICAgICBsZXQgc29ydEluZm8gPSB0aGlzLnN0b3JlLmdldFNvcnRJbmZvKCk7XG4gICAgICBsZXQgc29ydEZpZWxkID0gbmV4dFByb3BzLm9wdGlvbnMuc29ydE5hbWUgfHwgKHNvcnRJbmZvID8gc29ydEluZm8uc29ydEZpZWxkIDogdW5kZWZpbmVkKTtcbiAgICAgIGxldCBzb3J0T3JkZXIgPSBuZXh0UHJvcHMub3B0aW9ucy5zb3J0T3JkZXIgfHwgKHNvcnRJbmZvID8gc29ydEluZm8ub3JkZXIgOiB1bmRlZmluZWQpO1xuICAgICAgaWYoc29ydEZpZWxkICYmIHNvcnRPcmRlcikgdGhpcy5zdG9yZS5zb3J0KHNvcnRPcmRlciwgc29ydEZpZWxkKTtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5zdG9yZS5wYWdlKHBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjdXJyUGFnZTogcGFnZSxcbiAgICAgICAgc2l6ZVBlclBhZ2U6IHNpemVQZXJQYWdlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy5zZWxlY3RSb3cgJiYgbmV4dFByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCkge1xuICAgICAgLy9zZXQgZGVmYXVsdCBzZWxlY3Qgcm93cyB0byBzdG9yZS5cbiAgICAgIGxldCBjb3B5ID0gbmV4dFByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZC5zbGljZSgpO1xuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjb3B5KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGNvcHlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKTtcbiAgICB0aGlzLnJlZnMuYm9keS5yZWZzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxIZWFkZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKTtcbiAgICB0aGlzLnJlZnMuYm9keS5yZWZzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxIZWFkZXIpO1xuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5maWx0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKFwib25GaWx0ZXJDaGFuZ2VcIik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKCk7XG4gICAgdGhpcy5fYXR0YWNoQ2VsbEVkaXRGdW5jKCk7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlclRhYmxlQ29tcGxldGUpXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJUYWJsZUNvbXBsZXRlKCk7XG4gIH1cblxuICBfYXR0YWNoQ2VsbEVkaXRGdW5jKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0KSB7XG4gICAgICB0aGlzLnByb3BzLmNlbGxFZGl0Ll9fb25Db21wbGV0ZUVkaXRfXyA9IHRoaXMuaGFuZGxlRWRpdENlbGwuYmluZCh0aGlzKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgIT09IENvbnN0LkNFTExfRURJVF9OT05FKVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBpbiB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uLFxuICAgKiB0aGUgZGF0YWdyaWQgc2hvdWxkIGxvYWQgaXRzIGRhdGEgcmVtb3RlbHkuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIFtwcm9wc10gT3B0aW9uYWwuIElmIG5vdCBnaXZlbiwgdGhpcy5wcm9wcyB3aWxsIGJlIHVzZWRcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGlzUmVtb3RlRGF0YVNvdXJjZShwcm9wcykge1xuICAgIHJldHVybiAocHJvcHMgfHwgdGhpcy5wcm9wcykucmVtb3RlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRhYmxlQ2xhc3MgPSBjbGFzc1NldChcInJlYWN0LWJzLXRhYmxlXCIpO1xuICAgIHZhciBjaGlsZHJlbnMgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICBtYXhIZWlnaHQ6IHRoaXMucHJvcHMubWF4SGVpZ2h0XG4gICAgfTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgIGNoaWxkcmVucyA9IFt0aGlzLnByb3BzLmNoaWxkcmVuXTtcbiAgICB9XG4gICAgdmFyIGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnNEZXNjcmlwdGlvbih0aGlzLnByb3BzKTtcbiAgICB2YXIgc29ydEluZm8gPSB0aGlzLnN0b3JlLmdldFNvcnRJbmZvKCk7XG4gICAgdmFyIHBhZ2luYXRpb24gPSB0aGlzLnJlbmRlclBhZ2luYXRpb24oKTtcbiAgICB2YXIgdG9vbEJhciA9IHRoaXMucmVuZGVyVG9vbEJhcigpO1xuICAgIHZhciB0YWJsZUZpbHRlciA9IHRoaXMucmVuZGVyVGFibGVGaWx0ZXIoY29sdW1ucyk7XG4gICAgdmFyIGlzU2VsZWN0QWxsID0gdGhpcy5pc1NlbGVjdEFsbCgpO1xuICAgIGxldCBzb3J0SW5kaWNhdG9yID0gdGhpcy5wcm9wcy5vcHRpb25zLnNvcnRJbmRpY2F0b3I7XG4gICAgaWYodHlwZW9mIHRoaXMucHJvcHMub3B0aW9ucy5zb3J0SW5kaWNhdG9yID09PSAndW5kZWZpbmVkJykgc29ydEluZGljYXRvciA9IHRydWU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtYnMtY29udGFpbmVyXCIgcmVmPVwidGFibGVcIj5cbiAgICAgICAge3Rvb2xCYXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtYnMtdGFibGUtY29udGFpbmVyXCJcbiAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8VGFibGVIZWFkZXJcbiAgICAgICAgICAgIHJlZj1cImhlYWRlclwiXG4gICAgICAgICAgICByb3dTZWxlY3RUeXBlPXt0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlfVxuICAgICAgICAgICAgaGlkZVNlbGVjdENvbHVtbj17dGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbn1cbiAgICAgICAgICAgIHNvcnROYW1lPXtzb3J0SW5mbyA/IHNvcnRJbmZvLnNvcnRGaWVsZCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17c29ydEluZm8gPyBzb3J0SW5mby5vcmRlciA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHNvcnRJbmRpY2F0b3I9e3NvcnRJbmRpY2F0b3J9XG4gICAgICAgICAgICBvblNvcnQ9e3RoaXMuaGFuZGxlU29ydC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25TZWxlY3RBbGxSb3c9e3RoaXMuaGFuZGxlU2VsZWN0QWxsUm93LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBib3JkZXJlZD17dGhpcy5wcm9wcy5ib3JkZXJlZH1cbiAgICAgICAgICAgIGNvbmRlbnNlZD17dGhpcy5wcm9wcy5jb25kZW5zZWR9XG4gICAgICAgICAgICBpc0ZpbHRlcmVkPXt0aGlzLmZpbHRlciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsPXtpc1NlbGVjdEFsbH0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9XG4gICAgICAgICAgICBtYXhIZWlnaHQ9e3RoaXMucHJvcHMubWF4SGVpZ2h0fVxuICAgICAgICAgICAgcmVmPVwiYm9keVwiXG4gICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgdHJDbGFzc05hbWU9e3RoaXMucHJvcHMudHJDbGFzc05hbWV9XG4gICAgICAgICAgICBzdHJpcGVkPXt0aGlzLnByb3BzLnN0cmlwZWR9XG4gICAgICAgICAgICBib3JkZXJlZD17dGhpcy5wcm9wcy5ib3JkZXJlZH1cbiAgICAgICAgICAgIGhvdmVyPXt0aGlzLnByb3BzLmhvdmVyfVxuICAgICAgICAgICAga2V5RmllbGQ9e3RoaXMuc3RvcmUuZ2V0S2V5RmllbGQoKX1cbiAgICAgICAgICAgIGNvbmRlbnNlZD17dGhpcy5wcm9wcy5jb25kZW5zZWR9XG4gICAgICAgICAgICBzZWxlY3RSb3c9e3RoaXMucHJvcHMuc2VsZWN0Um93fVxuICAgICAgICAgICAgY2VsbEVkaXQ9e3RoaXMucHJvcHMuY2VsbEVkaXR9XG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb3dLZXlzfVxuICAgICAgICAgICAgb25Sb3dDbGljaz17dGhpcy5oYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Sb3dNb3VzZU92ZXI9e3RoaXMuaGFuZGxlUm93TW91c2VPdmVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblJvd01vdXNlT3V0PXt0aGlzLmhhbmRsZVJvd01vdXNlT3V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNlbGVjdFJvdz17dGhpcy5oYW5kbGVTZWxlY3RSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG5vRGF0YVRleHQ9e3RoaXMucHJvcHMub3B0aW9ucy5ub0RhdGFUZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGFibGVGaWx0ZXJ9XG4gICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaXNTZWxlY3RBbGwoKXtcbiAgICB2YXIgZGVmYXVsdFNlbGVjdFJvd0tleXMgPSB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpO1xuICAgIHZhciBhbGxSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRBbGxSb3drZXkoKTtcbiAgICBpZihkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggIT09IGFsbFJvd0tleXMubGVuZ3RoKXtcbiAgICAgIHJldHVybiBkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggPT09IDAgPyBmYWxzZSA6ICdpbmRldGVybWluYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KFtdKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUm93S2V5czogW11cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNvcnQob3JkZXIsIHNvcnRGaWVsZCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKHNvcnRGaWVsZCwgb3JkZXIsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnNvcnQob3JkZXIsIHNvcnRGaWVsZCkuZ2V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2luYXRpb25EYXRhKHBhZ2UsIHNpemVQZXJQYWdlKSB7XG4gICAgY29uc3Qge29uUGFnZUNoYW5nZX0gPSB0aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgaWYgKG9uUGFnZUNoYW5nZSkge1xuICAgICAgb25QYWdlQ2hhbmdlKHBhZ2UsIHNpemVQZXJQYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JlbW90ZURhdGFTb3VyY2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IHBhZ2UsXG4gICAgICBzaXplUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLm9uTW91c2VMZWF2ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm9uTW91c2VMZWF2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vbk1vdXNlRW50ZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dNb3VzZU91dChyb3cpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLm9uUm93TW91c2VPdXQpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vblJvd01vdXNlT3V0KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUm93TW91c2VPdmVyKHJvdykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dNb3VzZU92ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vblJvd01vdXNlT3Zlcihyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrKHJvdykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm9uUm93Q2xpY2socm93KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxSb3coZSkge1xuICAgIHZhciBpc1NlbGVjdGVkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XG4gICAgbGV0IHNlbGVjdGVkUm93S2V5cyA9IFtdO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdEFsbCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cub25TZWxlY3RBbGwoaXNTZWxlY3RlZCxcbiAgICAgICAgaXNTZWxlY3RlZCA/IHRoaXMuc3RvcmUuZ2V0KCkgOiBbXSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8IHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5cyA9IHRoaXMuc3RvcmUuZ2V0QWxsUm93a2V5KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoc2VsZWN0ZWRSb3dLZXlzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2hvd09ubHlTZWxlY3RlZCgpIHtcbiAgICB0aGlzLnN0b3JlLmlnbm9yZU5vblNlbGVjdGVkKCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgdGhpcy5zdGF0ZS5zaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IDEsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RSb3cocm93LCBpc1NlbGVjdGVkKSB7XG4gICAgbGV0IGN1cnJTZWxlY3RlZCA9IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKCk7XG4gICAgbGV0IHJvd0tleSA9IHJvd1t0aGlzLnN0b3JlLmdldEtleUZpZWxkKCldO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cub25TZWxlY3Qocm93LCBpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFKSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IGlzU2VsZWN0ZWQgPyBbcm93S2V5XSA6IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgIGN1cnJTZWxlY3RlZC5wdXNoKHJvd0tleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyclNlbGVjdGVkID0gY3VyclNlbGVjdGVkLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcm93S2V5ICE9PSBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjdXJyU2VsZWN0ZWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY3VyclNlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFZGl0Q2VsbChuZXdWYWwsIHJvd0luZGV4LCBjb2xJbmRleCkge1xuICAgIGxldCBmaWVsZE5hbWU7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG4gICAgICBpZiAoaSA9PSBjb2xJbmRleCkge1xuICAgICAgICBmaWVsZE5hbWUgPSBjb2x1bW4ucHJvcHMuZGF0YUZpZWxkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5zdG9yZS5lZGl0KG5ld1ZhbCwgcm93SW5kZXgsIGZpZWxkTmFtZSkuZ2V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0LmFmdGVyU2F2ZUNlbGwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2VsbEVkaXQuYWZ0ZXJTYXZlQ2VsbCh0aGlzLnN0YXRlLmRhdGFbcm93SW5kZXhdLCBmaWVsZE5hbWUsIG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkUm93QmVnaW4oKSB7XG4gICAgaWYgKHRoaXMucmVmcy5ib2R5KSB7XG4gICAgICAvLyB0aGlzLnJlZnMuYm9keS5jYW5jZWxFZGl0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkUm93QXRCZWdpbihuZXdPYmopIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0b3JlLmFkZEF0QmVnaW4obmV3T2JqKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgdGhpcy5faGFuZGxlQWZ0ZXJBZGRpbmdSb3cobmV3T2JqKTtcbiAgfVxuXG4gIGhhbmRsZUFkZFJvdyhuZXdPYmopIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0b3JlLmFkZChuZXdPYmopO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICB0aGlzLl9oYW5kbGVBZnRlckFkZGluZ1JvdyhuZXdPYmopO1xuICB9XG5cbiAgZ2V0U2l6ZVBlclBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2U7XG4gIH1cblxuICBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyUGFnZTtcbiAgfVxuXG4gIGhhbmRsZURyb3BSb3cocm93S2V5cykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZHJvcFJvd0tleXMgPSByb3dLZXlzP3Jvd0tleXM6dGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKTtcbiAgICAvL2FkZCBjb25maXJtIGJlZm9yZSB0aGUgZGVsZXRlIGFjdGlvbiBpZiB0aGF0IG9wdGlvbiBpcyBzZXQuXG4gICAgaWYgKGRyb3BSb3dLZXlzICYmIGRyb3BSb3dLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuaGFuZGxlQ29uZmlybURlbGV0ZVJvdyl7XG4gICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5oYW5kbGVDb25maXJtRGVsZXRlUm93KFxuICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGF0LmRlbGV0ZVJvdyhkcm9wUm93S2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgd2FudCBkZWxldGU/JykpIHtcbiAgICAgICAgdGhpcy5kZWxldGVSb3coZHJvcFJvd0tleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVJvdyhkcm9wUm93S2V5cyl7XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIHRoaXMuc3RvcmUucmVtb3ZlKGRyb3BSb3dLZXlzKTsgIC8vcmVtb3ZlIHNlbGVjdGVkIFJvd1xuICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoW10pOyAgLy9jbGVhciBzZWxlY3RlZCByb3cga2V5XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCB7IHNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgbGV0IHsgY3VyclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBsZXQgY3Vyckxhc3RQYWdlID0gTWF0aC5jZWlsKHRoaXMuc3RvcmUuZ2V0RGF0YU51bSgpIC8gc2l6ZVBlclBhZ2UpO1xuICAgICAgaWYgKGN1cnJQYWdlID4gY3Vyckxhc3RQYWdlKVxuICAgICAgICBjdXJyUGFnZSA9IGN1cnJMYXN0UGFnZTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShjdXJyUGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpLFxuICAgICAgICBjdXJyUGFnZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyRGVsZXRlUm93KSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJEZWxldGVSb3coZHJvcFJvd0tleXMpO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlRmlsdGVyRGF0YShmaWx0ZXJPYmopIHtcbiAgICB0aGlzLnN0b3JlLmZpbHRlcihmaWx0ZXJPYmopO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgeyBzaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZSgxLCBzaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgfVxuICAgIGlmKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckNvbHVtbkZpbHRlcilcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckNvbHVtbkZpbHRlcihmaWx0ZXJPYmosXG4gICAgICAgIHRoaXMuc3RvcmUuZ2V0RGF0YUlnbm9yaW5nUGFnaW5hdGlvbigpKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgIGN1cnJQYWdlOiAxXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFeHBvcnRDU1YoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0RGF0YUlnbm9yaW5nUGFnaW5hdGlvbigpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICBpZiAoY29sdW1uLnByb3BzLmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAga2V5cy5wdXNoKGNvbHVtbi5wcm9wcy5kYXRhRmllbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV4cG9ydENTVihyZXN1bHQsIGtleXMsIHRoaXMucHJvcHMuY3N2RmlsZU5hbWUpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHNlYXJjaFRleHQpIHtcbiAgICB0aGlzLnN0b3JlLnNlYXJjaChzZWFyY2hUZXh0KTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgIH1cbiAgICBpZih0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJTZWFyY2gpXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJTZWFyY2goc2VhcmNoVGV4dCwgdGhpcy5zdG9yZS5nZXREYXRhSWdub3JpbmdQYWdpbmF0aW9uKCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IDFcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclBhZ2luYXRpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgbGV0IGRhdGFTaXplO1xuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVEYXRhU291cmNlKCkpIHtcbiAgICAgICAgZGF0YVNpemUgPSB0aGlzLnByb3BzLmZldGNoSW5mby5kYXRhVG90YWxTaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVNpemUgPSB0aGlzLnN0b3JlLmdldERhdGFOdW0oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtZm9vdGVyLXBhZ2luYXRpb25cIj5cbiAgICAgICAgICA8UGFnaW5hdGlvbkxpc3RcbiAgICAgICAgICAgIHJlZj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgY3VyclBhZ2U9eyB0aGlzLnN0YXRlLmN1cnJQYWdlIH1cbiAgICAgICAgICAgIGNoYW5nZVBhZ2U9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkRhdGEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHNpemVQZXJQYWdlPXsgdGhpcy5zdGF0ZS5zaXplUGVyUGFnZSB9XG4gICAgICAgICAgICBzaXplUGVyUGFnZUxpc3Q9e3RoaXMucHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZUxpc3QgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUfVxuICAgICAgICAgICAgcGFnaW5hdGlvblNpemU9e3RoaXMucHJvcHMub3B0aW9ucy5wYWdpbmF0aW9uU2l6ZSB8fCBDb25zdC5QQUdJTkFUSU9OX1NJWkV9XG4gICAgICAgICAgICByZW1vdGU9e3RoaXMuaXNSZW1vdGVEYXRhU291cmNlKCl9XG4gICAgICAgICAgICBkYXRhU2l6ZT17ZGF0YVNpemV9XG4gICAgICAgICAgICBvblNpemVQZXJQYWdlTGlzdD17dGhpcy5wcm9wcy5vcHRpb25zLm9uU2l6ZVBlclBhZ2VMaXN0fVxuICAgICAgICAgICAgcHJlUGFnZT17dGhpcy5wcm9wcy5vcHRpb25zLnByZVBhZ2UgfHwgQ29uc3QuUFJFX1BBR0V9XG4gICAgICAgICAgICBuZXh0UGFnZT17dGhpcy5wcm9wcy5vcHRpb25zLm5leHRQYWdlIHx8IENvbnN0Lk5FWFRfUEFHRX1cbiAgICAgICAgICAgIGZpcnN0UGFnZT17dGhpcy5wcm9wcy5vcHRpb25zLmZpcnN0UGFnZSB8fCBDb25zdC5GSVJTVF9QQUdFfVxuICAgICAgICAgICAgbGFzdFBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5sYXN0UGFnZSB8fCBDb25zdC5MQVNUX1BBR0V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlclRvb2xCYXIoKSB7XG4gICAgbGV0IGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQgPSB0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5zaG93T25seVNlbGVjdGVkO1xuICAgIGlmIChlbmFibGVTaG93T25seVNlbGVjdGVkXG4gICAgICAgIHx8IHRoaXMucHJvcHMuaW5zZXJ0Um93XG4gICAgICAgIHx8IHRoaXMucHJvcHMuZGVsZXRlUm93XG4gICAgICAgIHx8IHRoaXMucHJvcHMuc2VhcmNoXG4gICAgICAgIHx8IHRoaXMucHJvcHMuZXhwb3J0Q1NWKSB7XG4gICAgICBsZXQgY29sdW1ucztcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIGNvbHVtbnMgPSB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgdmFyIHByb3BzID0gY29sdW1uLnByb3BzO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIGZpZWxkOiBwcm9wcy5kYXRhRmllbGQsXG4gICAgICAgICAgICAvL3doZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICAgICAgYXV0b1ZhbHVlOiBwcm9wcy5hdXRvVmFsdWUgfHwgZmFsc2UsXG4gICAgICAgICAgICAvL2ZvciBjcmVhdGUgZWRpdG9yLCBubyBwYXJhbXMgZm9yIGNvbHVtbi5lZGl0YWJsZSgpIGluZGljYXRlIHRoYXQgZWRpdG9yIGZvciBuZXcgcm93XG4gICAgICAgICAgICBlZGl0YWJsZTogcHJvcHMuZWRpdGFibGUgJiYgKHR5cGVvZiBwcm9wcy5lZGl0YWJsZSA9PT0gXCJmdW5jdGlvblwiKSA/IHByb3BzLmVkaXRhYmxlKCkgOiBwcm9wcy5lZGl0YWJsZSxcbiAgICAgICAgICAgIGZvcm1hdDogcHJvcHMuZGF0YUZvcm1hdCA/IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFGb3JtYXQodmFsdWUsIG51bGwsIHByb3BzLmZvcm1hdEV4dHJhRGF0YSkucmVwbGFjZSgvPC4qPz4vZywnJyk7XG4gICAgICAgICAgICB9IDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbnMgPSBbe1xuICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZmllbGQ6IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuZGF0YUZpZWxkLFxuICAgICAgICAgIGVkaXRhYmxlOiB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLmVkaXRhYmxlXG4gICAgICAgIH1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sLWJhclwiPlxuICAgICAgICAgIDxUb29sQmFyXG4gICAgICAgICAgICBjbGVhclNlYXJjaD17dGhpcy5wcm9wcy5vcHRpb25zLmNsZWFyU2VhcmNofVxuICAgICAgICAgICAgZW5hYmxlSW5zZXJ0PXt0aGlzLnByb3BzLmluc2VydFJvd31cbiAgICAgICAgICAgIGVuYWJsZURlbGV0ZT17dGhpcy5wcm9wcy5kZWxldGVSb3d9XG4gICAgICAgICAgICBlbmFibGVTZWFyY2g9e3RoaXMucHJvcHMuc2VhcmNofVxuICAgICAgICAgICAgZW5hYmxlRXhwb3J0Q1NWPXt0aGlzLnByb3BzLmV4cG9ydENTVn1cbiAgICAgICAgICAgIGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQ9e2VuYWJsZVNob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbkFkZFJvdz17dGhpcy5oYW5kbGVBZGRSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uQWRkUm93QmVnaW49e3RoaXMuaGFuZGxlQWRkUm93QmVnaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRHJvcFJvdz17dGhpcy5oYW5kbGVEcm9wUm93LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRXhwb3J0Q1NWPXt0aGlzLmhhbmRsZUV4cG9ydENTVi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVGFibGVGaWx0ZXIoY29sdW1ucykge1xuICAgIGlmICh0aGlzLnByb3BzLmNvbHVtbkZpbHRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhYmxlRmlsdGVyIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RUeXBlPXt0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlfVxuICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXI9e3RoaXMuaGFuZGxlRmlsdGVyRGF0YS5iaW5kKHRoaXMpfS8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfc2Nyb2xsSGVhZGVyID0gKGUpID0+IHtcbiAgICB0aGlzLnJlZnMuaGVhZGVyLnJlZnMuY29udGFpbmVyLnNjcm9sbExlZnQgPSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIF9hZGp1c3RIZWFkZXJXaWR0aCA9ICgpID0+IHtcbiAgICB2YXIgdGFibGVIZWFkZXJEb20gPSB0aGlzLnJlZnMuaGVhZGVyLnJlZnMuY29udGFpbmVyLmNoaWxkTm9kZXNbMF07XG4gICAgdmFyIHRhYmxlQm9keURvbSA9IHRoaXMucmVmcy5ib2R5LnJlZnMuY29udGFpbmVyLmNoaWxkTm9kZXNbMF07XG4gICAgaWYodGFibGVIZWFkZXJEb20ub2Zmc2V0V2lkdGggIT09IHRhYmxlQm9keURvbS5vZmZzZXRXaWR0aCl7XG4gICAgICB0YWJsZUhlYWRlckRvbS5zdHlsZS53aWR0aCA9IHRhYmxlQm9keURvbS5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyUHJvcHMgPSB0aGlzLnJlZnMuYm9keS5nZXRCb2R5SGVhZGVyRG9tUHJvcCgpO1xuICAgIHRoaXMucmVmcy5oZWFkZXIuZml0SGVhZGVyKGhlYWRlclByb3BzLFxuICAgICAgdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIuY2xpZW50SGVpZ2h0KTtcbiAgfVxuXG4gIF9oYW5kbGVBZnRlckFkZGluZ1JvdyhuZXdPYmopIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIC8vaWYgcGFnaW5hdGlvbiBpcyBlbmFibGVkIGFuZCBpbnNlcnQgcm93IGJlIHRyaWdnZXIsIGNoYW5nZSB0byBsYXN0IHBhZ2VcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBjdXJyTGFzdFBhZ2UgPSBNYXRoLmNlaWwodGhpcy5zdG9yZS5nZXREYXRhTnVtKCkgLyBzaXplUGVyUGFnZSk7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoY3Vyckxhc3RQYWdlLCBzaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBjdXJyUGFnZTogY3Vyckxhc3RQYWdlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVySW5zZXJ0Um93KSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJJbnNlcnRSb3cobmV3T2JqKTtcbiAgICB9XG4gIH1cbn1cblxuQm9vdHN0cmFwVGFibGUucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhIZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5hcnJheSwgUmVhY3QuUHJvcFR5cGVzLm9iamVjdF0pLFxuICByZW1vdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAvLyByZW1vdGUgZGF0YSwgZGVmYXVsdCBpcyBmYWxzZVxuICBzdHJpcGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmRlbnNlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHBhZ2luYXRpb246IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hQbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0Um93OiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1vZGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX05PTkUsXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSxcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfTVVMVElcbiAgICBdKSxcbiAgICBiZ0NvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QWxsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjbGlja1RvU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRlU2VsZWN0Q29sdW1uOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjbGlja1RvU2VsZWN0QW5kRWRpdENlbGw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0pLFxuICBjZWxsRWRpdDogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb2RlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJsdXJUb1NhdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFmdGVyU2F2ZUNlbGw6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0pLFxuICBpbnNlcnRSb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBkZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjb2x1bW5GaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB0ckNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjbGVhclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydE5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc29ydE9yZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNvcnRJbmRpY2F0b3I6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFmdGVyVGFibGVDb21wbGV0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJEZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGFmdGVySW5zZXJ0Um93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJDb2x1bW5GaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgc2l6ZVBlclBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnaW5hdGlvblNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb25Tb3J0Q2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblBhZ2VDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBub0RhdGFUZXh0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhhbmRsZUNvbmZpcm1EZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHByZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV4dFBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlyc3RQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhc3RQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pLFxuICBmZXRjaEluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YVRvdGFsU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGV4cG9ydENTVjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNzdkZpbGVOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuQm9vdHN0cmFwVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBtYXhIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgc3RyaXBlZDogZmFsc2UsXG4gIGJvcmRlcmVkOiB0cnVlLFxuICBob3ZlcjogZmFsc2UsXG4gIGNvbmRlbnNlZDogZmFsc2UsXG4gIHBhZ2luYXRpb246IGZhbHNlLFxuICBzZWFyY2hQbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICBzZWxlY3RSb3c6IHtcbiAgICBtb2RlOiBDb25zdC5ST1dfU0VMRUNUX05PTkUsXG4gICAgYmdDb2xvcjogQ29uc3QuUk9XX1NFTEVDVF9CR19DT0xPUixcbiAgICBzZWxlY3RlZDogW10sXG4gICAgb25TZWxlY3Q6IHVuZGVmaW5lZCxcbiAgICBvblNlbGVjdEFsbDogdW5kZWZpbmVkLFxuICAgIGNsaWNrVG9TZWxlY3Q6IGZhbHNlLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IGZhbHNlLFxuICAgIGNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbDogZmFsc2UsXG4gICAgc2hvd09ubHlTZWxlY3RlZDogZmFsc2VcbiAgfSxcbiAgY2VsbEVkaXQ6IHtcbiAgICBtb2RlOiBDb25zdC5DRUxMX0VESVRfTk9ORSxcbiAgICBibHVyVG9TYXZlOiBmYWxzZSxcbiAgICBhZnRlclNhdmVDZWxsOiB1bmRlZmluZWRcbiAgfSxcbiAgaW5zZXJ0Um93OiBmYWxzZSxcbiAgZGVsZXRlUm93OiBmYWxzZSxcbiAgc2VhcmNoOiBmYWxzZSxcbiAgbXVsdGlDb2x1bW5TZWFyY2g6IGZhbHNlLFxuICBjb2x1bW5GaWx0ZXI6IGZhbHNlLFxuICB0ckNsYXNzTmFtZTogJycsXG4gIG9wdGlvbnM6IHtcbiAgICBjbGVhclNlYXJjaDogZmFsc2UsXG4gICAgc29ydE5hbWU6IHVuZGVmaW5lZCxcbiAgICBzb3J0T3JkZXI6IHVuZGVmaW5lZCxcbiAgICBzb3J0SW5kaWNhdG9yOiB0cnVlLFxuICAgIGFmdGVyVGFibGVDb21wbGV0ZTogdW5kZWZpbmVkLFxuICAgIGFmdGVyRGVsZXRlUm93OiB1bmRlZmluZWQsXG4gICAgYWZ0ZXJJbnNlcnRSb3c6IHVuZGVmaW5lZCxcbiAgICBhZnRlclNlYXJjaDogdW5kZWZpbmVkLFxuICAgIGFmdGVyQ29sdW1uRmlsdGVyOiB1bmRlZmluZWQsXG4gICAgb25Sb3dDbGljazogdW5kZWZpbmVkLFxuICAgIG9uTW91c2VMZWF2ZTogdW5kZWZpbmVkLFxuICAgIG9uTW91c2VFbnRlcjogdW5kZWZpbmVkLFxuICAgIG9uUm93TW91c2VPdXQ6IHVuZGVmaW5lZCxcbiAgICBvblJvd01vdXNlT3ZlcjogdW5kZWZpbmVkLFxuICAgIHBhZ2U6IHVuZGVmaW5lZCxcbiAgICBzaXplUGVyUGFnZUxpc3Q6IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVCxcbiAgICBzaXplUGVyUGFnZTogdW5kZWZpbmVkLFxuICAgIHBhZ2luYXRpb25TaXplOiBDb25zdC5QQUdJTkFUSU9OX1NJWkUsXG4gICAgb25TaXplUGVyUGFnZUxpc3Q6IHVuZGVmaW5lZCxcbiAgICBub0RhdGFUZXh0OiB1bmRlZmluZWQsXG4gICAgaGFuZGxlQ29uZmlybURlbGV0ZVJvdzogdW5kZWZpbmVkLFxuICAgIHByZVBhZ2U6IENvbnN0LlBSRV9QQUdFLFxuICAgIG5leHRQYWdlOiBDb25zdC5ORVhUX1BBR0UsXG4gICAgZmlyc3RQYWdlOiBDb25zdC5GSVJTVF9QQUdFLFxuICAgIGxhc3RQYWdlOiBDb25zdC5MQVNUX1BBR0VcbiAgfSxcbiAgZmV0Y2hJbmZvOiB7XG4gICAgZGF0YVRvdGFsU2l6ZTogMCxcbiAgfSxcbiAgZXhwb3J0Q1NWOiBmYWxzZSxcbiAgY3N2RmlsZU5hbWU6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9vdHN0cmFwVGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Cb290c3RyYXBUYWJsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTT1JUX0RFU0M6IFwiZGVzY1wiLFxuICBTT1JUX0FTQzogXCJhc2NcIixcbiAgU0laRV9QRVJfUEFHRTogMTAsXG4gIE5FWFRfUEFHRTogXCI+XCIsXG4gIExBU1RfUEFHRTogXCI+PlwiLFxuICBQUkVfUEFHRTogXCI8XCIsXG4gIEZJUlNUX1BBR0U6IFwiPDxcIixcbiAgUk9XX1NFTEVDVF9CR19DT0xPUjogXCJcIixcbiAgUk9XX1NFTEVDVF9OT05FOiBcIm5vbmVcIixcbiAgUk9XX1NFTEVDVF9TSU5HTEU6IFwicmFkaW9cIixcbiAgUk9XX1NFTEVDVF9NVUxUSTogXCJjaGVja2JveFwiLFxuICBDRUxMX0VESVRfTk9ORTogXCJub25lXCIsXG4gIENFTExfRURJVF9DTElDSzogXCJjbGlja1wiLFxuICBDRUxMX0VESVRfREJDTElDSzogXCJkYmNsaWNrXCIsXG4gIFNJWkVfUEVSX1BBR0VfTElTVDogWzEwLCAyNSwgMzAsIDUwXSxcbiAgUEFHSU5BVElPTl9TSVpFOiA1LFxuICBOT19EQVRBX1RFWFQ6IFwiVGhlcmUgaXMgbm8gZGF0YSB0byBkaXNwbGF5XCIsXG4gIFNIT1dfT05MWV9TRUxFQ1Q6IFwiU2hvdyBTZWxlY3RlZCBPbmx5XCIsXG4gIFNIT1dfQUxMOiBcIlNob3cgQWxsXCIsXG4gIEZJTFRFUl9ERUxBWTogNTAwLFxuICBGSUxURVJfVFlQRToge1xuICAgIFRFWFQ6IFwiVGV4dEZpbHRlclwiLFxuICAgIFNFTEVDVDogXCJTZWxlY3RGaWx0ZXJcIixcbiAgICBOVU1CRVI6IFwiTnVtYmVyRmlsdGVyXCIsXG4gICAgREFURTogXCJEYXRlRmlsdGVyXCIsXG4gICAgQ1VTVE9NOiBcIkN1c3RvbUZpbHRlclwiXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvbnN0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBTZWxlY3RSb3dIZWFkZXJDb2x1bW4gZnJvbSAnLi9TZWxlY3RSb3dIZWFkZXJDb2x1bW4nO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7IHRoaXMudXBkYXRlKHRoaXMucHJvcHMuY2hlY2tlZCk7IH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykgeyB0aGlzLnVwZGF0ZShwcm9wcy5jaGVja2VkKTsgfVxuICB1cGRhdGUoY2hlY2tlZCkge1xuICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmluZGV0ZXJtaW5hdGUgPSBjaGVja2VkID09PSAnaW5kZXRlcm1pbmF0ZSc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxpbnB1dCBjbGFzc05hbWU9J3JlYWN0LWJzLXNlbGVjdC1hbGwnIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IC8+XG4gIH1cbn1cblxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZWxlY3RSb3dDb2x1bW5XaWR0aCA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgY29udGFpbmVyQ2xhc3NlcyA9IGNsYXNzU2V0KFwidGFibGUtaGVhZGVyXCIpO1xuICAgIHZhciB0YWJsZUNsYXNzZXMgPSBjbGFzc1NldChcInRhYmxlXCIsIFwidGFibGUtaG92ZXJcIiwge1xuICAgICAgICBcInRhYmxlLWJvcmRlcmVkXCI6IHRoaXMucHJvcHMuYm9yZGVyZWQsXG4gICAgICAgIFwidGFibGUtY29uZGVuc2VkXCI6IHRoaXMucHJvcHMuY29uZGVuc2VkXG4gICAgfSk7XG4gICAgdmFyIHNlbGVjdFJvd0hlYWRlckNvbCA9IHRoaXMucHJvcHMuaGlkZVNlbGVjdENvbHVtbj9udWxsOnRoaXMucmVuZGVyU2VsZWN0Um93SGVhZGVyKCk7XG4gICAgdGhpcy5fYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgcmVmPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfT5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZUNsYXNzZXN9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHIgcmVmPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge3NlbGVjdFJvd0hlYWRlckNvbH1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJTZWxlY3RSb3dIZWFkZXIoKXtcbiAgICBpZih0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcbiAgICAgIHJldHVybiAoPFNlbGVjdFJvd0hlYWRlckNvbHVtbiB3aWR0aD17dGhpcy5zZWxlY3RSb3dDb2x1bW5XaWR0aH0+PC9TZWxlY3RSb3dIZWFkZXJDb2x1bW4+KTtcbiAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9NVUxUSSl7XG4gICAgICByZXR1cm4gKDxTZWxlY3RSb3dIZWFkZXJDb2x1bW4gd2lkdGg9e3RoaXMuc2VsZWN0Um93Q29sdW1uV2lkdGh9PlxuICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdEFsbFJvd30gY2hlY2tlZD17dGhpcy5wcm9wcy5pc1NlbGVjdEFsbH0vPlxuICAgICAgICA8L1NlbGVjdFJvd0hlYWRlckNvbHVtbj5cbiAgICAgICk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCl7XG4gICAgbGV0IHsgc29ydEluZGljYXRvciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZihBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKXtcbiAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnByb3BzLmNoaWxkcmVuW2ldLnByb3BzLmRhdGFGaWVsZDtcbiAgICAgICAgY29uc3Qgc29ydCA9IGZpZWxkID09PSB0aGlzLnByb3BzLnNvcnROYW1lID8gdGhpcy5wcm9wcy5zb3J0T3JkZXIgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5baV0gPVxuICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuW2ldLFxuICAgICAgICAgICAgeyBrZXk6IGksIG9uU29ydDogdGhpcy5wcm9wcy5vblNvcnQsIHNvcnQsIHNvcnRJbmRpY2F0b3IgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5kYXRhRmllbGQ7XG4gICAgICBjb25zdCBzb3J0ID0gZmllbGQgPT09IHRoaXMucHJvcHMuc29ydE5hbWUgPyB0aGlzLnByb3BzLnNvcnRPcmRlciA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4gPVxuICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge2tleTogMCwgb25Tb3J0OiB0aGlzLnByb3BzLm9uU29ydCwgc29ydCwgc29ydEluZGljYXRvcn0pO1xuICAgIH1cbiAgfVxuXG4gIGZpdEhlYWRlcihoZWFkZXJQcm9wcywgaXNWZXJ0aWNhbFNjcm9sbEJhcil7XG4gICAgaWYoQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKSl7XG4gICAgICBsZXQgc3RhcnRQb3NpdGlvbiA9ICh0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PSBDb25zdC5ST1dfU0VMRUNUX01VTFRJKSAmJiAhdGhpcy5wcm9wcy5oaWRlU2VsZWN0Q29sdW1uID8gMTowO1xuICAgICAgaWYoc3RhcnRQb3NpdGlvbiA9PSAxKVxuICAgICAgICB0aGlzLnNlbGVjdFJvd0NvbHVtbldpZHRoID0gaGVhZGVyUHJvcHNbMF0ud2lkdGg7XG4gICAgICBmb3IobGV0IGk9MDtpPHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoO2krKyl7XG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5baV0gPVxuICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuW2ldLCB7d2lkdGg6IGhlYWRlclByb3BzW2krc3RhcnRQb3NpdGlvbl0ud2lkdGgrXCJweFwifSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4gPVxuICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge3dpZHRoOiBoZWFkZXJQcm9wc1swXS53aWR0aCtcInB4XCJ9KTtcbiAgICB9XG4gICAgaWYodGhpcy5wcm9wcy5jb25kZW5zZWQgJiYgIXRoaXMucHJvcHMuaXNGaWx0ZXJlZCkge1xuICAgICAgdGhpcy5yZWZzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjM2cHhcIjtcbiAgICB9XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIGlmKGlzVmVydGljYWxTY3JvbGxCYXIpXG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLnN0eWxlLm1hcmdpblJpZ2h0ID0gVXRpbC5nZXRTY3JvbGxCYXJXaWR0aCgpICsgXCJweFwiO1xuICB9XG59XG5UYWJsZUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHJvd1NlbGVjdFR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU29ydDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0QWxsUm93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc29ydE5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNvcnRPcmRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZVNlbGVjdENvbHVtbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGJvcmRlcmVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY29uZGVuc2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaXNGaWx0ZXJlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2VsZWN0QWxsOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW3RydWUsICdpbmRldGVybWluYXRlJywgZmFsc2VdKSxcbiAgc29ydEluZGljYXRvcjogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cblRhYmxlSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUhlYWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlSGVhZGVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHJlbmRlclNvcnRDYXJldChvcmRlcikge1xuICAgIHZhciB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgd3JhcC5jbGFzc05hbWUgPSBcIm9yZGVyXCI7XG4gICAgaWYob3JkZXIgPT0gQ29uc3QuU09SVF9BU0MpIHdyYXAuY2xhc3NOYW1lICs9IFwiIGRyb3B1cFwiO1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGlubmVyLmNsYXNzTmFtZSA9IFwiY2FyZXRcIjtcbiAgICBpbm5lci5zdHlsZS5tYXJnaW4gPSBcIjEwcHggNXB4XCI7XG4gICAgd3JhcC5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgcmV0dXJuIHdyYXA7XG4gIH0sXG5cbiAgcmVuZGVyUmVhY3RTb3J0Q2FyZXQob3JkZXIpe1xuICAgIHZhciBvcmRlckNsYXNzID0gY2xhc3NTZXQoXCJvcmRlclwiLCB7XG4gICAgICAnZHJvcHVwJzogb3JkZXIgPT0gQ29uc3QuU09SVF9BU0NcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtvcmRlckNsYXNzfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiBzdHlsZT17e21hcmdpbjogJzEwcHggNXB4J319Pjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9LFxuXG4gIGdldFNjcm9sbEJhcldpZHRoKCl7XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xuXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3V0ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgb3V0ZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMjAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5oZWlnaHQgPSBcIjE1MHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkIChpbm5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkIChvdXRlcik7XG4gICAgdmFyIHcxID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB2YXIgdzIgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBpZiAodzEgPT0gdzIpIHcyID0gb3V0ZXIuY2xpZW50V2lkdGg7XG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkIChvdXRlcik7XG5cbiAgICByZXR1cm4gKHcxIC0gdzIpO1xuICB9XG5cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcblxuY2xhc3MgU2VsZWN0Um93SGVhZGVyQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIHJlbmRlcigpe1xuICAgIHZhciB0aFN0eWxlID0ge1xuICAgICAgd2lkdGg6IHBhcnNlSW50KHRoaXMucHJvcHMud2lkdGgpP3RoaXMucHJvcHMud2lkdGg6MzVcbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aC1pbm5lciB0YWJsZS1oZWFkZXItY29sdW1uXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90aD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Um93SGVhZGVyQ29sdW1uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvU2VsZWN0Um93SGVhZGVyQ29sdW1uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi9UYWJsZUNvbHVtbic7XG5pbXBvcnQgVGFibGVFZGl0Q29sdW1uIGZyb20gJy4vVGFibGVFZGl0Q29sdW1uJztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIGlzRnVuPWZ1bmN0aW9uKG9iail7XG4gIHJldHVybiBvYmomJih0eXBlb2Ygb2JqPT09XCJmdW5jdGlvblwiKTtcblxufTtcbmNsYXNzIFRhYmxlQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VyckVkaXRDZWxsOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RCb2R5KCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICB0aGlzLmFkanVzdEJvZHkoKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciBjb250YWluZXJDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZS1jb250YWluZXJcIik7XG5cbiAgICB2YXIgdGFibGVDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZVwiLCB7XG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMucHJvcHMuc3RyaXBlZCxcbiAgICAgICd0YWJsZS1ib3JkZXJlZCc6IHRoaXMucHJvcHMuYm9yZGVyZWQsXG4gICAgICAndGFibGUtaG92ZXInOiB0aGlzLnByb3BzLmhvdmVyLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkXG4gICAgfSk7XG5cbiAgICB2YXIgaXNTZWxlY3RSb3dEZWZpbmVkID0gdGhpcy5faXNTZWxlY3RSb3dEZWZpbmVkKCk7XG4gICAgdmFyIHRhYmxlSGVhZGVyID0gdGhpcy5yZW5kZXJUYWJsZUhlYWRlcihpc1NlbGVjdFJvd0RlZmluZWQpO1xuXG4gICAgdmFyIHRhYmxlUm93cyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24oZGF0YSwgcil7XG4gICAgICB2YXIgdGFibGVDb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpe1xuICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGRhdGFbY29sdW1uLm5hbWVdO1xuICAgICAgICBpZih0aGlzLmVkaXRpbmcgJiZcbiAgICAgICAgICBjb2x1bW4ubmFtZSAhPT0gdGhpcy5wcm9wcy5rZXlGaWVsZCAmJiAvLyBLZXkgZmllbGQgY2FuJ3QgYmUgZWRpdFxuICAgICAgICAgIGNvbHVtbi5lZGl0YWJsZSAmJiAvLyBjb2x1bW4gaXMgZWRpdGFibGU/IGRlZmF1bHQgaXMgdHJ1ZSwgdXNlciBjYW4gc2V0IGl0IGZhbHNlXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwgIT0gbnVsbCAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VyckVkaXRDZWxsLnJpZCA9PSByICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwuY2lkID09IGkpe1xuICAgICAgICAgICAgdmFyIGZvcm1hdD1jb2x1bW4uZm9ybWF0P2Z1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5mb3JtYXQodmFsdWUsIGRhdGEsIGNvbHVtbi5mb3JtYXRFeHRyYURhdGEpLnJlcGxhY2UoLzwuKj8+L2csJycpO1xuICAgICAgICAgICAgfTpmYWxzZTtcblxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFRhYmxlRWRpdENvbHVtbiBjb21wbGV0ZUVkaXQ9e3RoaXMuaGFuZGxlQ29tcGxldGVFZGl0Q2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNvbHVtbiBlZGl0b3IgY3VzdG9taXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e2lzRnVuKGNvbHVtbi5lZGl0YWJsZSk/Y29sdW1uLmVkaXRhYmxlKGZpZWxkVmFsdWUsZGF0YSxyLGkpOmNvbHVtbi5lZGl0YWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2NvbHVtbi5mb3JtYXQ/Zm9ybWF0OmZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyVG9TYXZlPXt0aGlzLnByb3BzLmNlbGxFZGl0LmJsdXJUb1NhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg9e3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sSW5kZXg9e2l9PlxuICAgICAgICAgICAgICAgIHtmaWVsZFZhbHVlfVxuICAgICAgICAgICAgICA8L1RhYmxlRWRpdENvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNsYXNzTmFtZSBjdXN0b21pemVcbiAgICAgICAgICB2YXIgdGRDbGFzc05hbWU9aXNGdW4oY29sdW1uLmNsYXNzTmFtZSk/Y29sdW1uLmNsYXNzTmFtZShmaWVsZFZhbHVlLGRhdGEscixpKTpjb2x1bW4uY2xhc3NOYW1lO1xuXG4gICAgICAgICAgaWYodHlwZW9mIGNvbHVtbi5mb3JtYXQgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gY29sdW1uLmZvcm1hdChmaWVsZFZhbHVlLCBkYXRhLCBjb2x1bW4uZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZm9ybWF0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZm9ybWF0dGVkVmFsdWV9fT48L2Rpdj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBkYXRhQWxpZ249e2NvbHVtbi5hbGlnbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGRDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17Y29sdW1uLmhpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdD17dGhpcy5oYW5kbGVFZGl0Q2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH0+XG4gICAgICAgICAgICAgICAge2Zvcm1hdHRlZFZhbHVlfVxuICAgICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFRhYmxlQ29sdW1uIGRhdGFBbGlnbj17Y29sdW1uLmFsaWdufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0ZENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxFZGl0PXt0aGlzLnByb3BzLmNlbGxFZGl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtjb2x1bW4uaGlkZGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FZGl0PXt0aGlzLmhhbmRsZUVkaXRDZWxsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofT5cbiAgICAgICAgICAgICAgICB7ZmllbGRWYWx1ZX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5wcm9wcy5zZWxlY3RlZFJvd0tleXMuaW5kZXhPZihkYXRhW3RoaXMucHJvcHMua2V5RmllbGRdKSAhPSAtMTtcbiAgICAgIHZhciBzZWxlY3RSb3dDb2x1bW4gPSBpc1NlbGVjdFJvd0RlZmluZWQgJiYgIXRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdFJvd0NvbHVtbihzZWxlY3RlZCk6bnVsbDtcbiAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNsYXNzTmFtZSBjdXN0b21pemVcbiAgICAgIHZhciB0ckNsYXNzTmFtZT1pc0Z1bih0aGlzLnByb3BzLnRyQ2xhc3NOYW1lKT90aGlzLnByb3BzLnRyQ2xhc3NOYW1lKGRhdGEscik6dGhpcy5wcm9wcy50ckNsYXNzTmFtZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZVJvdyBpc1NlbGVjdGVkPXtzZWxlY3RlZH0ga2V5PXtyfSBjbGFzc05hbWU9e3RyQ2xhc3NOYW1lfVxuICAgICAgICAgIHNlbGVjdFJvdz17aXNTZWxlY3RSb3dEZWZpbmVkP3RoaXMucHJvcHMuc2VsZWN0Um93OnVuZGVmaW5lZH1cbiAgICAgICAgICBlbmFibGVDZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlICE9PSBDb25zdC5DRUxMX0VESVRfTk9ORX1cbiAgICAgICAgICBvblJvd0NsaWNrPXt0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Sb3dNb3VzZU92ZXI9e3RoaXMuaGFuZGxlUm93TW91c2VPdmVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Sb3dNb3VzZU91dD17dGhpcy5oYW5kbGVSb3dNb3VzZU91dC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uU2VsZWN0Um93PXt0aGlzLmhhbmRsZVNlbGVjdFJvdy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICB7c2VsZWN0Um93Q29sdW1ufVxuICAgICAgICAgIHt0YWJsZUNvbHVtbnN9XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICApXG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZih0YWJsZVJvd3MubGVuZ3RoID09PSAwKXtcbiAgICAgIHRhYmxlUm93cy5wdXNoKFxuICAgICAgPFRhYmxlUm93IGtleT1cIiMjdGFibGUtZW1wdHkjI1wiPlxuICAgICAgICA8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aCsoaXNTZWxlY3RSb3dEZWZpbmVkPzE6MCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1icy10YWJsZS1uby1kYXRhXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5ub0RhdGFUZXh0fHxDb25zdC5OT19EQVRBX1RFWFR9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L1RhYmxlUm93Pik7XG4gICAgfVxuXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG5cbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKS50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiByZWY9XCJjb250YWluZXJcIiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzZXN9IHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHR9fT5cbiAgICAgICAgPHRhYmxlIHJlZj1cImJvZHlcIiBjbGFzc05hbWU9e3RhYmxlQ2xhc3Nlc30+XG4gICAgICAgICAge3RhYmxlSGVhZGVyfVxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0YWJsZVJvd3N9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclRhYmxlSGVhZGVyKGlzU2VsZWN0Um93RGVmaW5lZCl7XG4gICAgdmFyIHNlbGVjdFJvd0hlYWRlciA9IG51bGw7XG5cbiAgICBpZihpc1NlbGVjdFJvd0RlZmluZWQpe1xuICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDozNSxcbiAgICAgICAgbWluV2lkdGg6MzVcbiAgICAgIH1cbiAgICAgIHNlbGVjdFJvd0hlYWRlciA9IHRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4/bnVsbDooPHRoIHN0eWxlPXtzdHlsZX0ga2V5PXstMX0+PC90aD4pO1xuICAgIH1cbiAgICB2YXIgdGhlYWRlciA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uLCBpKXtcbiAgICAgIGxldCB3aWR0aCA9IGNvbHVtbi53aWR0aCA9PSBudWxsP2NvbHVtbi53aWR0aDpwYXJzZUludChjb2x1bW4ud2lkdGgpO1xuICAgICAgbGV0IHN0eWxlPXtcbiAgICAgICAgZGlzcGxheTogY29sdW1uLmhpZGRlbj9cIm5vbmVcIjpudWxsLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIG1heFdpZHRoOiB3aWR0aFxuICAgICAgICAvKiogYWRkIG1pbi13ZHRoIHRvIGZpeCB1c2VyIGFzc2lnbiBjb2x1bW4gd2lkdGggbm90IGVxIG9mZnNldFdpZHRoIGluIGxhcmdlIGNvbHVtbiB0YWJsZSAqKi9cbiAgICAgIH07XG4gICAgICBsZXQgc29ydENhZXJ0ID0gY29sdW1uLnNvcnQ/KFV0aWwucmVuZGVyUmVhY3RTb3J0Q2FyZXQoQ29uc3QuU09SVF9ERVNDKSk6bnVsbDtcbiAgICAgIHJldHVybiAoPHRoIHN0eWxlPXtzdHlsZX0ga2V5PXtpfSBjbGFzc05hbWU9e2NvbHVtbi5jbGFzc05hbWV9Pntjb2x1bW4udGV4dH17c29ydENhZXJ0fTwvdGg+KTtcbiAgICB9KTtcblxuICAgIHJldHVybihcbiAgICAgIDx0aGVhZCByZWY9XCJoZWFkZXJcIj5cbiAgICAgICAgPHRyPntzZWxlY3RSb3dIZWFkZXJ9e3RoZWFkZXJ9PC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgKVxuICB9XG5cbiAgaGFuZGxlUm93TW91c2VPdXQocm93SW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldFJvdyA9IHRoaXMucHJvcHMuZGF0YVtyb3dJbmRleC0xXTtcbiAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdXQodGFyZ2V0Um93KTtcbiAgfVxuXG4gIGhhbmRsZVJvd01vdXNlT3Zlcihyb3dJbmRleCl7XG4gICAgY29uc3QgdGFyZ2V0Um93ID0gdGhpcy5wcm9wcy5kYXRhW3Jvd0luZGV4LTFdO1xuICAgIHRoaXMucHJvcHMub25Sb3dNb3VzZU92ZXIodGFyZ2V0Um93KTtcbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrKHJvd0luZGV4KXtcbiAgICB2YXIga2V5LCBzZWxlY3RlZFJvdztcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcbiAgICAgICAga2V5ID0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdO1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnByb3BzLm9uUm93Q2xpY2soc2VsZWN0ZWRSb3cpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0Um93KHJvd0luZGV4LCBpc1NlbGVjdGVkKXtcbiAgICB2YXIga2V5LCBzZWxlY3RlZFJvdztcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcbiAgICAgICAga2V5ID0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdO1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMucHJvcHMub25TZWxlY3RSb3coc2VsZWN0ZWRSb3csIGlzU2VsZWN0ZWQpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UoZSl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgfHwgIXRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCl7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdFJvdyhcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yb3dJbmRleCwgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVkaXRDZWxsKHJvd0luZGV4LCBjb2x1bW5JbmRleCl7XG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgICBpZih0aGlzLl9pc1NlbGVjdFJvd0RlZmluZWQoKSl7XG4gICAgICBjb2x1bW5JbmRleC0tO1xuICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbilcbiAgICAgICAgY29sdW1uSW5kZXgrKztcbiAgICB9XG4gICAgcm93SW5kZXgtLTtcbiAgICB2YXIgc3RhdGVPYmogPSB7XG4gICAgICBjdXJyRWRpdENlbGw6IHtcbiAgICAgICAgcmlkOiByb3dJbmRleCxcbiAgICAgICAgY2lkOiBjb2x1bW5JbmRleFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZih0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0QW5kRWRpdENlbGwpe1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3cocm93SW5kZXgrMSwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVPYmopO1xuICB9XG5cbiAgY2FuY2VsRWRpdCgpe1xuICAgIHZhciBjdXJyRWRpdENlbGw9dGhpcy5zdGF0ZS5jdXJyRWRpdENlbGw7XG4gICAgaWYoY3VyckVkaXRDZWxsKXtcbiAgICAgIHRoaXMuaGFuZGxlQ29tcGxldGVFZGl0Q2VsbChudWxsLGN1cnJFZGl0Q2VsbC5yaWQsY3VyckVkaXRDZWxsLmNpZCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ29tcGxldGVFZGl0Q2VsbChuZXdWYWwsIHJvd0luZGV4LCBjb2x1bW5JbmRleCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VyckVkaXRDZWxsOiBudWxsfSk7XG4gICAgaWYobnVsbCAhPSBuZXdWYWwpXG4gICAgICB0aGlzLnByb3BzLmNlbGxFZGl0Ll9fb25Db21wbGV0ZUVkaXRfXyhuZXdWYWwsIHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gIH1cblxuICByZW5kZXJTZWxlY3RSb3dDb2x1bW4oc2VsZWN0ZWQpe1xuICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcbiAgICAgIHJldHVybiAoPFRhYmxlQ29sdW1uPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXtzZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UuYmluZCh0aGlzKX0vPjwvVGFibGVDb2x1bW4+KTtcbiAgICB9ZWxzZSB7XG4gICAgICByZXR1cm4gKDxUYWJsZUNvbHVtbiA+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3NlbGVjdGVkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RSb3dDb2x1bUNoYW5nZS5iaW5kKHRoaXMpfS8+PC9UYWJsZUNvbHVtbj4pO1xuICAgIH1cbiAgfVxuXG4gIGdldEJvZHlIZWFkZXJEb21Qcm9wKCl7XG4gICAgdmFyIGhlYWRlcnMgPSB0aGlzLnJlZnMuaGVhZGVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2RlcztcbiAgICB2YXIgaGVhZGVyRG9tUHJvcHMgPSBbXTtcbiAgICBmb3IobGV0IGk9MDtpPGhlYWRlcnMubGVuZ3RoO2krKyl7XG4gICAgICBoZWFkZXJEb21Qcm9wcy5wdXNoKHtcbiAgICAgICAgd2lkdGg6aGVhZGVyc1tpXS5vZmZzZXRXaWR0aFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJEb21Qcm9wcztcbiAgfVxuXG4gIGFkanVzdEJvZHkoKSB7XG4gICAgdGhpcy5oYXJkRml4SGVhZGVyV2lkdGgoKTtcbiAgICBpZih0aGlzLnByb3BzLmNvbmRlbnNlZCkge1xuICAgICAgdGhpcy5yZWZzLmJvZHkuc3R5bGUubWFyZ2luVG9wID0gXCItMzZweFwiO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubWF4SGVpZ2h0ICYmXG4gICAgICBwYXJzZUludCh0aGlzLnByb3BzLm1heEhlaWdodCkgPCB0aGlzLnJlZnMuY29udGFpbmVyLm9mZnNldEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAodGhpcy5wcm9wcy5tYXhIZWlnaHQgLSA0MikgKyBcInB4XCI7XG4gICAgfVxuICB9XG5cbiAgaGFyZEZpeEhlYWRlcldpZHRoKCl7XG4gICAgdmFyIGhlYWRlcnMgPSB0aGlzLnJlZnMuaGVhZGVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2RlcztcbiAgICBmb3IobGV0IGk9MDtpPGhlYWRlcnMubGVuZ3RoO2krKyl7XG4gICAgICBoZWFkZXJzW2ldLnN0eWxlLndpZHRoID0gaGVhZGVyc1tpXS5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKXtcbiAgICBpZih0aGlzLnByb3BzLmhlaWdodCA9PSBcIjEwMCVcIikgcmV0dXJuIHRoaXMucHJvcHMuaGVpZ2h0O1xuICAgIGVsc2V7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wcm9wcy5oZWlnaHQpIC0gNDI7XG4gICAgfVxuICB9XG5cbiAgX2lzU2VsZWN0Um93RGVmaW5lZCgpe1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlID09PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSB8fFxuICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEk7XG4gIH1cbn1cblRhYmxlQm9keS5wcm9wVHlwZXMgPSB7XG4gIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBjb2x1bW5zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHN0cmlwZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBib3JkZXJlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGhvdmVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY29uZGVuc2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAga2V5RmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkUm93S2V5czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBvblJvd0NsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3RSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBub0RhdGFUZXh0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVCb2R5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVCb2R5LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcblxuY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbGlja051bSA9IDA7XG4gIH1cblxuICByb3dDbGljayhlKXtcbiAgICBpZihlLnRhcmdldC50YWdOYW1lICE9PSBcIklOUFVUXCIgJiZcbiAgICAgICAgZS50YXJnZXQudGFnTmFtZSAhPT0gXCJTRUxFQ1RcIiAmJlxuICAgICAgICBlLnRhcmdldC50YWdOYW1lICE9PSBcIlRFWFRBUkVBXCIpIHtcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LnJvd0luZGV4O1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93KSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RSb3cocm93SW5kZXgsICF0aGlzLnByb3BzLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrTnVtKys7XG4gICAgICAgICAgICAvKiogaWYgY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsIGlzIGVuYWJsZWQsXG4gICAgICAgICAgICAgKiAgdGhlcmUgc2hvdWxkIGJlIGEgZGVsYXkgdG8gcHJldmVudCBhIHNlbGVjdGlvbiBjaGFuZ2VkIHdoZW5cbiAgICAgICAgICAgICAqICB1c2VyIGRibGljayB0byBlZGl0IGNlbGwgb24gc2FtZSByb3cgYnV0IGRpZmZlcmVudCBjZWxsXG4gICAgICAgICAgICAqKi9cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZih0aGlzLmNsaWNrTnVtID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdFJvdyhyb3dJbmRleCwgIXRoaXMucHJvcHMuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUm93Q2xpY2spIHRoaXMucHJvcHMub25Sb3dDbGljayhyb3dJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcm93TW91c2VPdXQoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUm93TW91c2VPdXQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dNb3VzZU91dChlLmN1cnJlbnRUYXJnZXQucm93SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJvd01vdXNlT3ZlcihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Sb3dNb3VzZU92ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dNb3VzZU92ZXIoZS5jdXJyZW50VGFyZ2V0LnJvd0luZGV4KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICB2YXIgdHJDc3M9e1xuICAgICAgc3R5bGU6e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuaXNTZWxlY3RlZD90aGlzLnByb3BzLnNlbGVjdFJvdy5iZ0NvbG9yOm51bGxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWU6KHRoaXMucHJvcHMuaXNTZWxlY3RlZCAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGFzc05hbWUgOiAnJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnKVxuICAgIH07XG5cbiAgICBpZih0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiAodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsKSB8fCB0aGlzLnByb3BzLm9uUm93Q2xpY2spe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8dHIgey4uLnRyQ3NzfVxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMucm93TW91c2VPdmVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLnJvd01vdXNlT3V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJvd0NsaWNrLmJpbmQodGhpcyl9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdHI+XG4gICAgICApXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDx0ciB7Li4udHJDc3N9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdHI+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5UYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIGlzU2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBlbmFibGVDZWxsRWRpdDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUm93TW91c2VPdXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblJvd01vdXNlT3ZlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5UYWJsZVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uUm93Q2xpY2s6IHVuZGVmaW5lZFxufVxuZXhwb3J0IGRlZmF1bHQgVGFibGVSb3c7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZVJvdy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5cbmNsYXNzIFRhYmxlQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc2hvdWxkVXBkYXRlZCA9IHRoaXMucHJvcHMud2lkdGggIT09IG5leHRQcm9wcy53aWR0aFxuICAgICAgfHwgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWVcbiAgICAgIHx8IHRoaXMucHJvcHMuaGlkZGVuICE9PSBuZXh0UHJvcHMuaGlkZGVuXG4gICAgICB8fCB0aGlzLnByb3BzLmRhdGFBbGlnbiAhPT0gbmV4dFByb3BzLmRhdGFBbGlnblxuICAgICAgfHwgdHlwZW9mIGNoaWxkcmVuICE9PSB0eXBlb2YgbmV4dFByb3BzLmNoaWxkcmVuXG4gICAgICB8fCAoJycrdGhpcy5wcm9wcy5vbkVkaXQpLnRvU3RyaW5nKCkgIT09ICgnJytuZXh0UHJvcHMub25FZGl0KS50b1N0cmluZygpXG5cbiAgICBpZihzaG91bGRVcGRhdGVkKXtcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkO1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ29iamVjdCcgJiYgY2hpbGRyZW4gIT09IG51bGwgJiYgY2hpbGRyZW4ucHJvcHMgIT09IG51bGwpIHtcbiAgICAgIGlmKGNoaWxkcmVuLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCcgfHwgY2hpbGRyZW4ucHJvcHMudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBzaG91bGRVcGRhdGVkID0gc2hvdWxkVXBkYXRlZCB8fFxuICAgICAgICAgIGNoaWxkcmVuLnByb3BzLnR5cGUgIT09IG5leHRQcm9wcy5jaGlsZHJlbi5wcm9wcy50eXBlIHx8XG4gICAgICAgICAgY2hpbGRyZW4ucHJvcHMuY2hlY2tlZCAhPT0gbmV4dFByb3BzLmNoaWxkcmVuLnByb3BzLmNoZWNrZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG91bGRVcGRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdWxkVXBkYXRlZCA9IHNob3VsZFVwZGF0ZWQgfHwgY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICBpZihzaG91bGRVcGRhdGVkKXtcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkO1xuICAgIH1cblxuICAgIGlmKCEodGhpcy5wcm9wcy5jZWxsRWRpdCAmJiBuZXh0UHJvcHMuY2VsbEVkaXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkXG4gICAgICAgIHx8IHRoaXMucHJvcHMuY2VsbEVkaXQubW9kZSAhPT0gbmV4dFByb3BzLmNlbGxFZGl0Lm1vZGU7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2VsbEVkaXQoZSl7XG4gICAgaWYodGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlID09IENvbnN0LkNFTExfRURJVF9EQkNMSUNLKXtcbiAgICAgIGlmKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkpIHtcbiAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgICB9IGVsc2UgaWYod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uRWRpdChcbiAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnJvd0luZGV4LFxuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNlbGxJbmRleCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoID09IG51bGw/XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndpZHRoOnBhcnNlSW50KHRoaXMucHJvcHMud2lkdGgpO1xuICAgIHZhciB0ZFN0eWxlID0ge1xuICAgICAgdGV4dEFsaWduOiB0aGlzLnByb3BzLmRhdGFBbGlnbixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaGlkZGVuP1wibm9uZVwiOm51bGwsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBtYXhXaWR0aDogd2lkdGhcbiAgICB9O1xuICAgIHZhciBjbGFzc25hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICBpZih0aGlzLnByb3BzLndpZHRoKXtcbiAgICAgICAgY2xhc3NuYW1lICs9IFwiIGNvbC1tZC1cIit3aWR0aDtcbiAgICB9XG5cblxuICAgIHZhciBvcHRzID0ge307XG4gICAgaWYodGhpcy5wcm9wcy5jZWxsRWRpdCl7XG4gICAgICBpZih0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgPT0gQ29uc3QuQ0VMTF9FRElUX0NMSUNLKXtcbiAgICAgICAgb3B0cy5vbkNsaWNrID0gdGhpcy5oYW5kbGVDZWxsRWRpdC5iaW5kKHRoaXMpO1xuICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlID09IENvbnN0LkNFTExfRURJVF9EQkNMSUNLKXtcbiAgICAgICAgb3B0cy5vbkRvdWJsZUNsaWNrID0gdGhpcy5oYW5kbGVDZWxsRWRpdC5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzbmFtZX0gey4uLm9wdHN9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvdGQ+XG4gICAgKVxuICB9XG59XG5UYWJsZUNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGFBbGlnbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOlJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cblRhYmxlQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YUFsaWduOiBcImxlZnRcIixcbiAgaGlkZGVuOiBmYWxzZSxcbiAgY2xhc3NOYW1lOlwiXCJcbn1cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29sdW1uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVDb2x1bW4uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvcidcbmltcG9ydCBOb3RpZmllciBmcm9tICcuL05vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFRhYmxlRWRpdENvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy50aW1lb3V0ZUNsZWFyPTA7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2hha2VFZGl0b3I6ZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSl7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAxMykgeyAvL1ByZXNzZWQgRU5URVJcbiAgICAgIGxldCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC50eXBlID09ICdjaGVja2JveCc/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENoZWNrQm94VmFsdWUoZSk6ZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgICBpZighdGhpcy52YWxpZGF0b3IodmFsdWUpKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcbiAgICAgICAgdmFsdWUsIHRoaXMucHJvcHMucm93SW5kZXgsIHRoaXMucHJvcHMuY29sSW5kZXgpO1xuICAgIH1lbHNlIGlmKGUua2V5Q29kZSA9PSAyNyl7XG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcbiAgICAgICAgbnVsbCwgdGhpcy5wcm9wcy5yb3dJbmRleCwgdGhpcy5wcm9wcy5jb2xJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQmx1cihlKXtcbiAgICBpZih0aGlzLnByb3BzLmJsdXJUb1NhdmUpe1xuICAgICAgbGV0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnR5cGUgPT0gJ2NoZWNrYm94Jz9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2hlY2tCb3hWYWx1ZShlKTplLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICBpZighdGhpcy52YWxpZGF0b3IodmFsdWUpKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcbiAgICAgICAgICB2YWx1ZSwgdGhpcy5wcm9wcy5yb3dJbmRleCwgdGhpcy5wcm9wcy5jb2xJbmRleCk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRvcih2YWx1ZSl7XG4gICAgICB2YXIgdHM9dGhpcztcbiAgICAgIGlmKHRzLnByb3BzLmVkaXRhYmxlLnZhbGlkYXRvcil7XG4gICAgICAgICAgdmFyIHZhbGlkPXRzLnByb3BzLmVkaXRhYmxlLnZhbGlkYXRvcih2YWx1ZSk7XG4gICAgICAgICAgaWYodmFsaWQhPT10cnVlKXtcbiAgICAgICAgICAgICAgLy90cy5yZWZzLm5vdGlmaWVyLm5vdGljZSgnZXJyb3InLHZhbGlkLFwiUHJlc3NlZCBFU0MgY2FuIGNhbmNlbFwiKTtcbiAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdHMucmVmcy5pbnB1dFJlZjtcbiAgICAgICAgICAgICAgLy9hbmltYXRlIGlucHV0XG4gICAgICAgICAgICAgIC8vdHMuY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICAgIC8vdHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOnRydWV9KTtcbiAgICAgICAgICAgICAgLy90cy50aW1lb3V0ZUNsZWFyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0cy5zZXRTdGF0ZSh7c2hha2VFZGl0b3I6ZmFsc2V9KTt9LDMwMCk7XG4gICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICB9XG4gIGNsZWFyVGltZW91dCgpe1xuICAgICAgaWYodGhpcy50aW1lb3V0ZUNsZWFyIT0wKXtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0ZUNsZWFyKTtcbiAgICAgICAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcbiAgICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy5yZWZzLmlucHV0UmVmO1xuICAgICAgLy8gaW5wdXQudmFsdWUgPSB0aGlzLnByb3BzLmNoaWxkcmVufHwnJztcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIGVkaXRhYmxlPXRoaXMucHJvcHMuZWRpdGFibGUsXG4gICAgICAgIGZvcm1hdD10aGlzLnByb3BzLmZvcm1hdCxcbiAgICAgICAgYXR0cj17XG4gICAgICAgICAgICByZWY6XCJpbnB1dFJlZlwiLFxuICAgICAgICAgICAgb25LZXlEb3duOnRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9uQmx1cjp0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgICAgICAvL3B1dCBwbGFjZWhvbGRlciBpZiBleGlzdFxuICAgICAgICBlZGl0YWJsZS5wbGFjZWhvbGRlciYmKGF0dHIucGxhY2Vob2xkZXI9ZWRpdGFibGUucGxhY2Vob2xkZXIpO1xuXG4gICAgdmFyIGVkaXRvckNsYXNzPWNsYXNzU2V0KHsnYW5pbWF0ZWQnOnRoaXMuc3RhdGUuc2hha2VFZGl0b3IsJ3NoYWtlJzp0aGlzLnN0YXRlLnNoYWtlRWRpdG9yfSk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8dGQgcmVmPVwidGRcIiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZSd9fT5cbiAgICAgICAgICAgIHtFZGl0b3IoZWRpdGFibGUsYXR0cixmb3JtYXQsZWRpdG9yQ2xhc3MsdGhpcy5wcm9wcy5jaGlsZHJlbnx8JycpfVxuICAgICAgICAgICAgPE5vdGlmaWVyIHJlZj1cIm5vdGlmaWVyXCI+PC9Ob3RpZmllcj5cbiAgICAgICAgPC90ZD5cbiAgICApXG4gIH1cblxuICBfZ2V0Q2hlY2tCb3hWYWx1ZShlKXtcbiAgICBsZXQgdmFsdWUgPSAnJztcbiAgICBsZXQgdmFsdWVzID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZD92YWx1ZXNbMF06dmFsdWVzWzFdO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG5UYWJsZUVkaXRDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjb21wbGV0ZUVkaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICByb3dJbmRleDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgY29sSW5kZXg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGJsdXJUb1NhdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlRWRpdENvbHVtbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlRWRpdENvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgRWRpdG9yPWZ1bmN0aW9uKGVkaXRhYmxlLCBhdHRyLCBmb3JtYXQsIGVkaXRvckNsYXNzLCBkZWZhdWx0VmFsdWUpe1xuXG4gICAgaWYoZWRpdGFibGU9PT10cnVlfHx0eXBlb2YgZWRpdGFibGU9PT1cInN0cmluZ1wiKXsvL3NpbXBsZSBkZWNsYXJlXG4gICAgICAgIHZhciB0eXBlPWVkaXRhYmxlPT09dHJ1ZT8ndGV4dCc6ZWRpdGFibGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9e3R5cGV9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGVkaXRvckNsYXNzfHxcIlwiKStcIiBmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtdGV4dFwifSAvPlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmKCFlZGl0YWJsZSl7XG4gICAgICB2YXIgdHlwZT1lZGl0YWJsZT09PXRydWU/J3RleHQnOmVkaXRhYmxlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9e3R5cGV9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfSBkaXNhYmxlZD0nZGlzYWJsZWQnXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGVkaXRvckNsYXNzfHxcIlwiKStcIiBmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtdGV4dFwifSAvPlxuICAgICAgKVxuICAgIH0gZWxzZSBpZihlZGl0YWJsZS50eXBlKXsvL3N0YW5kYXJkIGRlY2xhcmVcbiAgICAgICAgLy9wdXQgc3R5bGUgaWYgZXhpc3RcbiAgICAgICAgZWRpdGFibGUuc3R5bGUmJihhdHRyLnN0eWxlPWVkaXRhYmxlLnN0eWxlKTtcblxuICAgICAgICAvL3B1dCBjbGFzcyBpZiBleGlzdFxuICAgICAgICBhdHRyLmNsYXNzTmFtZSA9IChlZGl0b3JDbGFzc3x8XCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGZvcm0tY29udHJvbCBlZGl0b3IgZWRpdC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGUudHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRhYmxlLmNsYXNzTmFtZT8oXCIgXCIrZWRpdGFibGUuY2xhc3NOYW1lKTpcIlwiKTtcblxuICAgICAgICBpZihlZGl0YWJsZS50eXBlID09PSAnc2VsZWN0Jyl7Ly9wcm9jZXNzIHNlbGVjdCBpbnB1dFxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBbXSwgdmFsdWVzPWVkaXRhYmxlLm9wdGlvbnMudmFsdWVzO1xuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKXsvL29ubHkgY2FuIHVzZSBhcnJyYXkgZGF0YSBmb3Igb3B0aW9uc1xuICAgICAgICAgICAgICAgIHZhciByb3dWYWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zPXZhbHVlcy5tYXAoZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICAgICAgcm93VmFsdWU9Zm9ybWF0P2Zvcm1hdChkKTpkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17J29wdGlvbicraX0gdmFsdWU9e2R9Pntyb3dWYWx1ZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgey4uLmF0dHJ9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfT57b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZihlZGl0YWJsZS50eXBlID09PSAndGV4dGFyZWEnKXsvL3Byb2Nlc3MgdGV4dGFyZWEgaW5wdXRcbiAgICAgICAgICAgIC8vcHV0ICBvdGhlciBpZiBleGlzdFxuICAgICAgICAgICAgZWRpdGFibGUuY29scyYmKGF0dHIuY29scz1lZGl0YWJsZS5jb2xzKTtcbiAgICAgICAgICAgIGVkaXRhYmxlLnJvd3MmJihhdHRyLnJvd3M9ZWRpdGFibGUucm93cyk7XG4gICAgICAgICAgICB2YXIga2V5VXBIYW5kbGVyPWF0dHIub25LZXlEb3duLHNhdmVCdG49bnVsbDtcbiAgICAgICAgICAgIGlmKGtleVVwSGFuZGxlcil7XG4gICAgICAgICAgICAgICAgYXR0ci5vbktleURvd249ZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgIT0gMTMpIHsgLy9ub3QgUHJlc3NlZCBFTlRFUlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VXBIYW5kbGVyKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzYXZlQnRuPTxidXR0byBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXhzIHRleHRhcmVhLXNhdmUtYnRuXCIgb25DbGljaz17a2V5VXBIYW5kbGVyfT5zYXZlPC9idXR0bz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB7Li4uYXR0cn0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIHtzYXZlQnRufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYoZWRpdGFibGUudHlwZSA9PT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgbGV0IHZhbHVlcyA9ICd0cnVlOmZhbHNlJztcbiAgICAgICAgICBpZihlZGl0YWJsZS5vcHRpb25zICYmIGVkaXRhYmxlLm9wdGlvbnMudmFsdWVzKXtcbiAgICAgICAgICAgIC8vIHZhbHVlcyA9IGVkaXRhYmxlLm9wdGlvbnMudmFsdWVzLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICB2YWx1ZXMgPSBlZGl0YWJsZS5vcHRpb25zLnZhbHVlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0ci5jbGFzc05hbWUgPSBhdHRyLmNsYXNzTmFtZS5yZXBsYWNlKCdmb3JtLWNvbnRyb2wnLCcnKTtcbiAgICAgICAgICBhdHRyLmNsYXNzTmFtZSArPSAnIGNoZWNrYm94IHB1bGwtcmlnaHQnO1xuXG4gICAgICAgICAgbGV0IGNoZWNrZWQgPSBkZWZhdWx0VmFsdWUgJiYgZGVmYXVsdFZhbHVlLnRvU3RyaW5nKCkgPT0gdmFsdWVzLnNwbGl0KCc6JylbMF0/dHJ1ZTpmYWxzZTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9J2NoZWNrYm94JyB2YWx1ZT17dmFsdWVzfSBkZWZhdWx0Q2hlY2tlZD17Y2hlY2tlZH0vPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZXsvL3Byb2Nlc3Mgb3RoZXIgaW5wdXQgdHlwZS4gYXMgcGFzc3dvcmQsdXJsLGVtYWlsLi4uXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5hdHRyfSB0eXBlPXt0eXBlfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0vPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vZGVmYXVsdCByZXR1cm4gZm9yIG90aGVyIGNhc2Ugb2YgZWRpdGFibGVcbiAgICByZXR1cm4oXG4gICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoZWRpdG9yQ2xhc3N8fFwiXCIpK1wiIGZvcm0tY29udHJvbCBlZGl0b3IgZWRpdC10ZXh0XCJ9Lz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9FZGl0b3IuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuXG5pbXBvcnQge1xuICBUb2FzdENvbnRhaW5lcixcbiAgVG9hc3RNZXNzYWdlLFxufSBmcm9tIFwicmVhY3QtdG9hc3RyXCI7XG5cblxudmFyIFRvYXN0ck1lc3NhZ2VGYWN0b3J5PVJlYWN0LmNyZWF0ZUZhY3RvcnkoVG9hc3RNZXNzYWdlLmFuaW1hdGlvbik7XG5cbmNsYXNzIE5vdGlmaWNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgLy8gYWxsb3cgdHlwZSBpcyBzdWNjZXNzLGluZm8sd2FybmluZyxlcnJvclxuICBub3RpY2UodHlwZSxtc2csdGl0bGUpe1xuICAgIHRoaXMucmVmcy50b2FzdHJbdHlwZV0oXG4gICAgICAgIG1zZyx0aXRsZSwge1xuICAgICAgICAgIG1vZGU6J3NpbmdsZScsXG4gICAgICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDAsXG4gICAgICAgICAgc2hvd0FuaW1hdGlvbjogXCJhbmltYXRlZCAgYm91bmNlSW5cIixcbiAgICAgICAgICBoaWRlQW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZU91dFwiXG4gICAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8VG9hc3RDb250YWluZXIgcmVmPVwidG9hc3RyXCIgdG9hc3RNZXNzYWdlRmFjdG9yeT17VG9hc3RyTWVzc2FnZUZhY3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2FzdC1jb250YWluZXJcIiAgY2xhc3NOYW1lPVwidG9hc3QtdG9wLXJpZ2h0XCI+PC9Ub2FzdENvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTm90aWZpY2F0aW9uLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRvYXN0TWVzc2FnZSA9IGV4cG9ydHMuVG9hc3RDb250YWluZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfVG9hc3RDb250YWluZXIgPSByZXF1aXJlKFwiLi9Ub2FzdENvbnRhaW5lclwiKTtcblxudmFyIF9Ub2FzdENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub2FzdENvbnRhaW5lcik7XG5cbnZhciBfVG9hc3RNZXNzYWdlID0gcmVxdWlyZShcIi4vVG9hc3RNZXNzYWdlXCIpO1xuXG52YXIgX1RvYXN0TWVzc2FnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub2FzdE1lc3NhZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLlRvYXN0Q29udGFpbmVyID0gX1RvYXN0Q29udGFpbmVyMi5kZWZhdWx0O1xuZXhwb3J0cy5Ub2FzdE1lc3NhZ2UgPSBfVG9hc3RNZXNzYWdlMi5kZWZhdWx0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy11cGRhdGVcIik7XG5cbnZhciBfcmVhY3RBZGRvbnNVcGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RBZGRvbnNVcGRhdGUpO1xuXG52YXIgX1RvYXN0TWVzc2FnZSA9IHJlcXVpcmUoXCIuL1RvYXN0TWVzc2FnZVwiKTtcblxudmFyIF9Ub2FzdE1lc3NhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9hc3RNZXNzYWdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVG9hc3RDb250YWluZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVG9hc3RDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvYXN0Q29udGFpbmVyKCkge1xuICAgIHZhciBfT2JqZWN0JGdldFByb3RvdHlwZU87XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvYXN0Q29udGFpbmVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9PYmplY3QkZ2V0UHJvdG90eXBlTyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihUb2FzdENvbnRhaW5lcikpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB0b2FzdHM6IFtdLFxuICAgICAgdG9hc3RJZDogMCxcbiAgICAgIHByZXZpb3VzTWVzc2FnZTogbnVsbFxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRvYXN0Q29udGFpbmVyLCBbe1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKSB7XG4gICAgICB0aGlzLl9ub3RpZnkodGhpcy5wcm9wcy50b2FzdFR5cGUuZXJyb3IsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8obWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLmluZm8sIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWNjZXNzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1Y2Nlc3MobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLnN1Y2Nlc3MsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3YXJuaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLndhcm5pbmcsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpczIucmVmc1trZXldLmhpZGVUb2FzdChmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX25vdGlmeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm90aWZ5KHR5cGUsIG1lc3NhZ2UsIHRpdGxlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnNPdmVycmlkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5wcmV2ZW50RHVwbGljYXRlcykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2aW91c01lc3NhZ2UgPT09IG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSB0aGlzLnN0YXRlLnRvYXN0SWQrKztcbiAgICAgIHZhciB0b2FzdElkID0ga2V5O1xuICAgICAgdmFyIG5ld1RvYXN0ID0gKDAsIF9yZWFjdEFkZG9uc1VwZGF0ZTIuZGVmYXVsdCkob3B0aW9uc092ZXJyaWRlLCB7XG4gICAgICAgICRtZXJnZToge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgdG9hc3RJZDogdG9hc3RJZCxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICByZWY6IFwidG9hc3RzX19cIiArIGtleSxcbiAgICAgICAgICBoYW5kbGVPbkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBvcHRpb25zT3ZlcnJpZGUuaGFuZGxlT25DbGljaykge1xuICAgICAgICAgICAgICBvcHRpb25zT3ZlcnJpZGUuaGFuZGxlT25DbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5faGFuZGxlX3RvYXN0X29uX2NsaWNrKGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlUmVtb3ZlOiB0aGlzLl9oYW5kbGVfdG9hc3RfcmVtb3ZlLmJpbmQodGhpcylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgdG9hc3RPcGVyYXRpb24gPSBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIgKyAodGhpcy5wcm9wcy5uZXdlc3RPblRvcCA/IFwiJHVuc2hpZnRcIiA6IFwiJHB1c2hcIiksIFtuZXdUb2FzdF0pO1xuXG4gICAgICB2YXIgbmV4dFN0YXRlID0gKDAsIF9yZWFjdEFkZG9uc1VwZGF0ZTIuZGVmYXVsdCkodGhpcy5zdGF0ZSwge1xuICAgICAgICB0b2FzdHM6IHRvYXN0T3BlcmF0aW9uLFxuICAgICAgICBwcmV2aW91c01lc3NhZ2U6IHsgJHNldDogbWVzc2FnZSB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhbmRsZV90b2FzdF9vbl9jbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlX3RvYXN0X29uX2NsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaGFuZGxlX3RvYXN0X3JlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlX3RvYXN0X3JlbW92ZSh0b2FzdElkKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIG9wZXJhdGlvbk5hbWUgPSBcIlwiICsgKHRoaXMucHJvcHMubmV3ZXN0T25Ub3AgPyBcInJlZHVjZVJpZ2h0XCIgOiBcInJlZHVjZVwiKTtcbiAgICAgIHRoaXMuc3RhdGUudG9hc3RzW29wZXJhdGlvbk5hbWVdKGZ1bmN0aW9uIChmb3VuZCwgdG9hc3QsIGluZGV4KSB7XG4gICAgICAgIGlmIChmb3VuZCB8fCB0b2FzdC50b2FzdElkICE9PSB0b2FzdElkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSgoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShfdGhpczQuc3RhdGUsIHtcbiAgICAgICAgICB0b2FzdHM6IHsgJHNwbGljZTogW1tpbmRleCwgMV1dIH1cbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIHJvbGU6IFwiYWxlcnRcIiB9KSxcbiAgICAgICAgdGhpcy5zdGF0ZS50b2FzdHMubWFwKGZ1bmN0aW9uICh0b2FzdCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUucHJvcHMudG9hc3RNZXNzYWdlRmFjdG9yeSh0b2FzdCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb2FzdENvbnRhaW5lcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRvYXN0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgdG9hc3RUeXBlOiBfcmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBlcnJvcjogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5mbzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3VjY2VzczogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2FybmluZzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZCxcbiAgaWQ6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvYXN0TWVzc2FnZUZhY3Rvcnk6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwcmV2ZW50RHVwbGljYXRlczogX3JlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG5ld2VzdE9uVG9wOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbGljazogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5Ub2FzdENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvYXN0VHlwZToge1xuICAgIGVycm9yOiBcImVycm9yXCIsXG4gICAgaW5mbzogXCJpbmZvXCIsXG4gICAgc3VjY2VzczogXCJzdWNjZXNzXCIsXG4gICAgd2FybmluZzogXCJ3YXJuaW5nXCJcbiAgfSxcbiAgaWQ6IFwidG9hc3QtY29udGFpbmVyXCIsXG4gIHRvYXN0TWVzc2FnZUZhY3Rvcnk6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVGYWN0b3J5KF9Ub2FzdE1lc3NhZ2UyLmRlZmF1bHQpLFxuICBwcmV2ZW50RHVwbGljYXRlczogZmFsc2UsXG4gIG5ld2VzdE9uVG9wOiB0cnVlLFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge31cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUb2FzdENvbnRhaW5lcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0Q29udGFpbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QvbGliL3VwZGF0ZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWFkZG9ucy11cGRhdGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHVwZGF0ZVxuICovXG5cbi8qIGdsb2JhbCBoYXNPd25Qcm9wZXJ0eTp0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vT2JqZWN0LmFzc2lnbicpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnZmJqcy9saWIva2V5T2YnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9ICh7fSkuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KHgpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4geC5jb25jYXQoKTtcbiAgfSBlbHNlIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBhc3NpZ24obmV3IHguY29uc3RydWN0b3IoKSwgeCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxudmFyIENPTU1BTkRfUFVTSCA9IGtleU9mKHsgJHB1c2g6IG51bGwgfSk7XG52YXIgQ09NTUFORF9VTlNISUZUID0ga2V5T2YoeyAkdW5zaGlmdDogbnVsbCB9KTtcbnZhciBDT01NQU5EX1NQTElDRSA9IGtleU9mKHsgJHNwbGljZTogbnVsbCB9KTtcbnZhciBDT01NQU5EX1NFVCA9IGtleU9mKHsgJHNldDogbnVsbCB9KTtcbnZhciBDT01NQU5EX01FUkdFID0ga2V5T2YoeyAkbWVyZ2U6IG51bGwgfSk7XG52YXIgQ09NTUFORF9BUFBMWSA9IGtleU9mKHsgJGFwcGx5OiBudWxsIH0pO1xuXG52YXIgQUxMX0NPTU1BTkRTX0xJU1QgPSBbQ09NTUFORF9QVVNILCBDT01NQU5EX1VOU0hJRlQsIENPTU1BTkRfU1BMSUNFLCBDT01NQU5EX1NFVCwgQ09NTUFORF9NRVJHRSwgQ09NTUFORF9BUFBMWV07XG5cbnZhciBBTExfQ09NTUFORFNfU0VUID0ge307XG5cbkFMTF9DT01NQU5EU19MSVNULmZvckVhY2goZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgQUxMX0NPTU1BTkRTX1NFVFtjb21tYW5kXSA9IHRydWU7XG59KTtcblxuZnVuY3Rpb24gaW52YXJpYW50QXJyYXlDYXNlKHZhbHVlLCBzcGVjLCBjb21tYW5kKSB7XG4gICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgdGFyZ2V0IG9mICVzIHRvIGJlIGFuIGFycmF5OyBnb3QgJXMuJywgY29tbWFuZCwgdmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgdmFyIHNwZWNWYWx1ZSA9IHNwZWNbY29tbWFuZF07XG4gICFBcnJheS5pc0FycmF5KHNwZWNWYWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXk7IGdvdCAlcy4gJyArICdEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgcGFyYW1ldGVyIGluIGFuIGFycmF5PycsIGNvbW1hbmQsIHNwZWNWYWx1ZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUodmFsdWUsIHNwZWMpIHtcbiAgISh0eXBlb2Ygc3BlYyA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBZb3UgcHJvdmlkZWQgYSBrZXkgcGF0aCB0byB1cGRhdGUoKSB0aGF0IGRpZCBub3QgY29udGFpbiBvbmUgJyArICdvZiAlcy4gRGlkIHlvdSBmb3JnZXQgdG8gaW5jbHVkZSB7JXM6IC4uLn0/JywgQUxMX0NPTU1BTkRTX0xJU1Quam9pbignLCAnKSwgQ09NTUFORF9TRVQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NFVCkpIHtcbiAgICAhKE9iamVjdC5rZXlzKHNwZWMpLmxlbmd0aCA9PT0gMSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBrZXkgaW4gYW4gb2JqZWN0IHdpdGggJXMnLCBDT01NQU5EX1NFVCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIHNwZWNbQ09NTUFORF9TRVRdO1xuICB9XG5cbiAgdmFyIG5leHRWYWx1ZSA9IHNoYWxsb3dDb3B5KHZhbHVlKTtcblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX01FUkdFKSkge1xuICAgIHZhciBtZXJnZU9iaiA9IHNwZWNbQ09NTUFORF9NRVJHRV07XG4gICAgIShtZXJnZU9iaiAmJiB0eXBlb2YgbWVyZ2VPYmogPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogJXMgZXhwZWN0cyBhIHNwZWMgb2YgdHlwZSBcXCdvYmplY3RcXCc7IGdvdCAlcycsIENPTU1BTkRfTUVSR0UsIG1lcmdlT2JqKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgIShuZXh0VmFsdWUgJiYgdHlwZW9mIG5leHRWYWx1ZSA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiAlcyBleHBlY3RzIGEgdGFyZ2V0IG9mIHR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJXMnLCBDT01NQU5EX01FUkdFLCBuZXh0VmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBhc3NpZ24obmV4dFZhbHVlLCBzcGVjW0NPTU1BTkRfTUVSR0VdKTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfUFVTSCkpIHtcbiAgICBpbnZhcmlhbnRBcnJheUNhc2UodmFsdWUsIHNwZWMsIENPTU1BTkRfUFVTSCk7XG4gICAgc3BlY1tDT01NQU5EX1BVU0hdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIG5leHRWYWx1ZS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9VTlNISUZUKSkge1xuICAgIGludmFyaWFudEFycmF5Q2FzZSh2YWx1ZSwgc3BlYywgQ09NTUFORF9VTlNISUZUKTtcbiAgICBzcGVjW0NPTU1BTkRfVU5TSElGVF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgbmV4dFZhbHVlLnVuc2hpZnQoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NQTElDRSkpIHtcbiAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRXhwZWN0ZWQgJXMgdGFyZ2V0IHRvIGJlIGFuIGFycmF5OyBnb3QgJXMnLCBDT01NQU5EX1NQTElDRSwgdmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICAhQXJyYXkuaXNBcnJheShzcGVjW0NPTU1BTkRfU1BMSUNFXSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXkgb2YgYXJyYXlzOyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgc3BlY1tDT01NQU5EX1NQTElDRV0uZm9yRWFjaChmdW5jdGlvbiAoYXJncykge1xuICAgICAgIUFycmF5LmlzQXJyYXkoYXJncykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXkgb2YgYXJyYXlzOyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgICBuZXh0VmFsdWUuc3BsaWNlLmFwcGx5KG5leHRWYWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX0FQUExZKSkge1xuICAgICEodHlwZW9mIHNwZWNbQ09NTUFORF9BUFBMWV0gPT09ICdmdW5jdGlvbicpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGEgZnVuY3Rpb247IGdvdCAlcy4nLCBDT01NQU5EX0FQUExZLCBzcGVjW0NPTU1BTkRfQVBQTFldKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgbmV4dFZhbHVlID0gc3BlY1tDT01NQU5EX0FQUExZXShuZXh0VmFsdWUpO1xuICB9XG5cbiAgZm9yICh2YXIgayBpbiBzcGVjKSB7XG4gICAgaWYgKCEoQUxMX0NPTU1BTkRTX1NFVC5oYXNPd25Qcm9wZXJ0eShrKSAmJiBBTExfQ09NTUFORFNfU0VUW2tdKSkge1xuICAgICAgbmV4dFZhbHVlW2tdID0gdXBkYXRlKHZhbHVlW2tdLCBzcGVjW2tdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dFZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvdXBkYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBPYmplY3QuYXNzaWduXG4gKi9cblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGtleU9mXG4gKi9cblxuLyoqXG4gKiBBbGxvd3MgZXh0cmFjdGlvbiBvZiBhIG1pbmlmaWVkIGtleS4gTGV0J3MgdGhlIGJ1aWxkIHN5c3RlbSBtaW5pZnkga2V5c1xuICogd2l0aG91dCBsb3NpbmcgdGhlIGFiaWxpdHkgdG8gZHluYW1pY2FsbHkgdXNlIGtleSBzdHJpbmdzIGFzIHZhbHVlc1xuICogdGhlbXNlbHZlcy4gUGFzcyBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBrZXkvdmFsIHBhaXIgYW5kIGl0IHdpbGwgcmV0dXJuXG4gKiB5b3UgdGhlIHN0cmluZyBrZXkgb2YgdGhhdCBzaW5nbGUgcmVjb3JkLiBTdXBwb3NlIHlvdSB3YW50IHRvIGdyYWIgdGhlXG4gKiB2YWx1ZSBmb3IgYSBrZXkgJ2NsYXNzTmFtZScgaW5zaWRlIG9mIGFuIG9iamVjdC4gS2V5L3ZhbCBtaW5pZmljYXRpb24gbWF5XG4gKiBoYXZlIGFsaWFzZWQgdGhhdCBrZXkgdG8gYmUgJ3hhMTInLiBrZXlPZih7Y2xhc3NOYW1lOiBudWxsfSkgd2lsbCByZXR1cm5cbiAqICd4YTEyJyBpbiB0aGF0IGNhc2UuIFJlc29sdmUga2V5cyB5b3Ugd2FudCB0byB1c2Ugb25jZSBhdCBzdGFydHVwIHRpbWUsIHRoZW5cbiAqIHJldXNlIHRob3NlIHJlc29sdXRpb25zLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGtleU9mID0gZnVuY3Rpb24gKG9uZUtleU9iaikge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBvbmVLZXlPYmopIHtcbiAgICBpZiAoIW9uZUtleU9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5T2Y7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmJqcy9saWIva2V5T2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2ludmFyaWFudC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMualF1ZXJ5ID0gZXhwb3J0cy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy11cGRhdGVcIik7XG5cbnZhciBfcmVhY3RBZGRvbnNVcGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RBZGRvbnNVcGRhdGUpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2FuaW1hdGlvbk1peGluID0gcmVxdWlyZShcIi4vYW5pbWF0aW9uTWl4aW5cIik7XG5cbnZhciBfYW5pbWF0aW9uTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0aW9uTWl4aW4pO1xuXG52YXIgX2pRdWVyeU1peGluID0gcmVxdWlyZShcIi4valF1ZXJ5TWl4aW5cIik7XG5cbnZhciBfalF1ZXJ5TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfalF1ZXJ5TWl4aW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIFRvYXN0TWVzc2FnZVNwZWMgPSB7XG4gIGRpc3BsYXlOYW1lOiBcIlRvYXN0TWVzc2FnZVwiLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHZhciBpY29uQ2xhc3NOYW1lcyA9IHtcbiAgICAgIGVycm9yOiBcInRvYXN0LWVycm9yXCIsXG4gICAgICBpbmZvOiBcInRvYXN0LWluZm9cIixcbiAgICAgIHN1Y2Nlc3M6IFwidG9hc3Qtc3VjY2Vzc1wiLFxuICAgICAgd2FybmluZzogXCJ0b2FzdC13YXJuaW5nXCJcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0b2FzdFwiLFxuICAgICAgaWNvbkNsYXNzTmFtZXM6IGljb25DbGFzc05hbWVzLFxuICAgICAgdGl0bGVDbGFzc05hbWU6IFwidG9hc3QtdGl0bGVcIixcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWU6IFwidG9hc3QtbWVzc2FnZVwiLFxuICAgICAgdGFwVG9EaXNtaXNzOiB0cnVlLFxuICAgICAgY2xvc2VCdXR0b246IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgaGFuZGxlT25DbGljazogZnVuY3Rpb24gaGFuZGxlT25DbGljayhldmVudCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlT25DbGljayhldmVudCk7XG4gICAgaWYgKHRoaXMucHJvcHMudGFwVG9EaXNtaXNzKSB7XG4gICAgICB0aGlzLmhpZGVUb2FzdCh0cnVlKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVfY2xvc2VfYnV0dG9uX2NsaWNrOiBmdW5jdGlvbiBfaGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuaGlkZVRvYXN0KHRydWUpO1xuICB9LFxuICBfaGFuZGxlX3JlbW92ZTogZnVuY3Rpb24gX2hhbmRsZV9yZW1vdmUoKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVSZW1vdmUodGhpcy5wcm9wcy50b2FzdElkKTtcbiAgfSxcbiAgX3JlbmRlcl9jbG9zZV9idXR0b246IGZ1bmN0aW9uIF9yZW5kZXJfY2xvc2VfYnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNsb3NlQnV0dG9uID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInRvYXN0LWNsb3NlLWJ1dHRvblwiLCByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdGhpcy5faGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljayxcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogXCImdGltZXM7XCIgfVxuICAgIH0pIDogZmFsc2U7XG4gIH0sXG4gIF9yZW5kZXJfdGl0bGVfZWxlbWVudDogZnVuY3Rpb24gX3JlbmRlcl90aXRsZV9lbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpdGxlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMudGl0bGVDbGFzc05hbWUgfSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICApIDogZmFsc2U7XG4gIH0sXG4gIF9yZW5kZXJfbWVzc2FnZV9lbGVtZW50OiBmdW5jdGlvbiBfcmVuZGVyX21lc3NhZ2VfZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tZXNzYWdlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMubWVzc2FnZUNsYXNzTmFtZSB9LFxuICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlXG4gICAgKSA6IGZhbHNlO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgaWNvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaWNvbkNsYXNzTmFtZSB8fCB0aGlzLnByb3BzLmljb25DbGFzc05hbWVzW3RoaXMucHJvcHMudHlwZV07XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGljb25DbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVPbkNsaWNrLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmVcbiAgICAgIH0sXG4gICAgICB0aGlzLl9yZW5kZXJfY2xvc2VfYnV0dG9uKCksXG4gICAgICB0aGlzLl9yZW5kZXJfdGl0bGVfZWxlbWVudCgpLFxuICAgICAgdGhpcy5fcmVuZGVyX21lc3NhZ2VfZWxlbWVudCgpXG4gICAgKTtcbiAgfVxufTtcblxudmFyIGFuaW1hdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKCgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKFRvYXN0TWVzc2FnZVNwZWMsIHtcbiAgZGlzcGxheU5hbWU6IHsgJHNldDogXCJUb2FzdE1lc3NhZ2UuYW5pbWF0aW9uXCIgfSxcbiAgbWl4aW5zOiB7ICRzZXQ6IFtfYW5pbWF0aW9uTWl4aW4yLmRlZmF1bHRdIH1cbn0pKTtcblxudmFyIGpRdWVyeSA9IGV4cG9ydHMualF1ZXJ5ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKCgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKFRvYXN0TWVzc2FnZVNwZWMsIHtcbiAgZGlzcGxheU5hbWU6IHsgJHNldDogXCJUb2FzdE1lc3NhZ2UualF1ZXJ5XCIgfSxcbiAgbWl4aW5zOiB7ICRzZXQ6IFtfalF1ZXJ5TWl4aW4yLmRlZmF1bHRdIH1cbn0pKTtcblxuLypcbiAqIGFzc2lnbiBkZWZhdWx0IG5vb3AgZnVuY3Rpb25zXG4gKi9cblRvYXN0TWVzc2FnZVNwZWMuaGFuZGxlTW91c2VFbnRlciA9IG5vb3A7XG5Ub2FzdE1lc3NhZ2VTcGVjLmhhbmRsZU1vdXNlTGVhdmUgPSBub29wO1xuVG9hc3RNZXNzYWdlU3BlYy5oaWRlVG9hc3QgPSBub29wO1xuXG52YXIgVG9hc3RNZXNzYWdlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKFRvYXN0TWVzc2FnZVNwZWMpO1xuXG5Ub2FzdE1lc3NhZ2UuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuVG9hc3RNZXNzYWdlLmpRdWVyeSA9IGpRdWVyeTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVG9hc3RNZXNzYWdlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1JlYWN0VHJhbnNpdGlvbkV2ZW50cyA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uRXZlbnRzXCIpO1xuXG52YXIgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWFjdFRyYW5zaXRpb25FdmVudHMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfZWxlbWVudENsYXNzID0gcmVxdWlyZShcImVsZW1lbnQtY2xhc3NcIik7XG5cbnZhciBfZWxlbWVudENsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VsZW1lbnRDbGFzcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUSUNLID0gMTc7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogbnVsbCwgLy8gc29tZSBleGFtcGxlcyBkZWZpbmVkIGluIGluZGV4LnNjc3MgKHNjYWxlLCBmYWRlSW5PdXQsIHJvdGF0ZSlcbiAgICAgIHNob3dBbmltYXRpb246IFwiYW5pbWF0ZWQgYm91bmNlSW5cIiwgLy8gb3Igb3RoZXIgYW5pbWF0aW9ucyBmcm9tIGFuaW1hdGUuY3NzXG4gICAgICBoaWRlQW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZU91dFwiLFxuICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgIGV4dGVuZGVkVGltZU91dDogMTAwMFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUgPSBbXTtcbiAgICB0aGlzLmlzSGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9pc19tb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zaG93KCk7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICB2YXIgb25IaWRlQ29tcGxldGUgPSBmdW5jdGlvbiBvbkhpZGVDb21wbGV0ZSgpIHtcbiAgICAgIGlmIChfdGhpcy5pc0hpZGluZykge1xuICAgICAgICBfdGhpcy5fc2V0X2lzX2hpZGluZyhmYWxzZSk7XG4gICAgICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBvbkhpZGVDb21wbGV0ZSk7XG4gICAgICAgIF90aGlzLl9oYW5kbGVfcmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgb25IaWRlQ29tcGxldGUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudGltZU91dCA+IDApIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLnRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc19tb3VudGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgfVxuICB9LFxuICBfc2V0X3RyYW5zaXRpb246IGZ1bmN0aW9uIF9zZXRfdHJhbnNpdGlvbihoaWRlKSB7XG4gICAgdmFyIGFuaW1hdGlvblR5cGUgPSBoaWRlID8gXCJsZWF2ZVwiIDogXCJlbnRlclwiO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLnRyYW5zaXRpb24gKyBcIi1cIiArIGFuaW1hdGlvblR5cGU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiLWFjdGl2ZVwiO1xuXG4gICAgdmFyIGVuZExpc3RlbmVyID0gZnVuY3Rpb24gZW5kTGlzdGVuZXIoZSkge1xuICAgICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xhc3NMaXN0ID0gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpO1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuXG4gICAgKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChjbGFzc05hbWUpO1xuXG4gICAgLy8gTmVlZCB0byBkbyB0aGlzIHRvIGFjdHVhbGx5IHRyaWdnZXIgYSB0cmFuc2l0aW9uLlxuICAgIHRoaXMuX3F1ZXVlX2NsYXNzKGFjdGl2ZUNsYXNzTmFtZSk7XG4gIH0sXG4gIF9jbGVhcl90cmFuc2l0aW9uOiBmdW5jdGlvbiBfY2xlYXJfdHJhbnNpdGlvbihoaWRlKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGFuaW1hdGlvblR5cGUgPSBoaWRlID8gXCJsZWF2ZVwiIDogXCJlbnRlclwiO1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLnRyYW5zaXRpb24gKyBcIi1cIiArIGFuaW1hdGlvblR5cGU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiLWFjdGl2ZVwiO1xuXG4gICAgdmFyIGNsYXNzTGlzdCA9ICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKTtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuICB9LFxuICBfc2V0X2FuaW1hdGlvbjogZnVuY3Rpb24gX3NldF9hbmltYXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5fZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpO1xuICAgIHZhciBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGVuZExpc3RlbmVyKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkucmVtb3ZlKGFuaW0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRMaXN0ZW5lcik7XG4gICAgfTtcblxuICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRMaXN0ZW5lcik7XG5cbiAgICBhbmltYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGFuaW0pIHtcbiAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkuYWRkKGFuaW0pO1xuICAgIH0pO1xuICB9LFxuICBfZ2V0X2FuaW1hdGlvbl9jbGFzc2VzOiBmdW5jdGlvbiBfZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpIHtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGhpZGUgPyB0aGlzLnByb3BzLmhpZGVBbmltYXRpb24gOiB0aGlzLnByb3BzLnNob3dBbmltYXRpb247XG4gICAgaWYgKFwiW29iamVjdCBBcnJheV1cIiA9PT0gdG9TdHJpbmcuY2FsbChhbmltYXRpb25zKSkge1xuICAgICAgcmV0dXJuIGFuaW1hdGlvbnM7XG4gICAgfSBlbHNlIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgYW5pbWF0aW9ucykge1xuICAgICAgcmV0dXJuIGFuaW1hdGlvbnMuc3BsaXQoXCIgXCIpO1xuICAgIH1cbiAgfSxcbiAgX2NsZWFyX2FuaW1hdGlvbjogZnVuY3Rpb24gX2NsZWFyX2FuaW1hdGlvbihoaWRlKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSB0aGlzLl9nZXRfYW5pbWF0aW9uX2NsYXNzZXMoaGlkZSk7XG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRpb24pIHtcbiAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkucmVtb3ZlKGFuaW1hdGlvbik7XG4gICAgfSk7XG4gIH0sXG4gIF9xdWV1ZV9jbGFzczogZnVuY3Rpb24gX3F1ZXVlX2NsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUucHVzaChjbGFzc05hbWUpO1xuXG4gICAgaWYgKCF0aGlzLnRpbWVvdXQpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5fZmx1c2hfY2xhc3NfbmFtZV9xdWV1ZSwgVElDSyk7XG4gICAgfVxuICB9LFxuICBfZmx1c2hfY2xhc3NfbmFtZV9xdWV1ZTogZnVuY3Rpb24gX2ZsdXNoX2NsYXNzX25hbWVfcXVldWUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5faXNfbW91bnRlZCkge1xuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMyKTtcbiAgICAgICAgX3RoaXMyLmNsYXNzTmFtZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc05hbWVRdWV1ZS5sZW5ndGggPSAwO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH0sXG4gIF9zaG93OiBmdW5jdGlvbiBfc2hvdygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfdHJhbnNpdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zaG93QW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfYW5pbWF0aW9uKCk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVNb3VzZUVudGVyOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChudWxsKTtcbiAgICBpZiAodGhpcy5pc0hpZGluZykge1xuICAgICAgdGhpcy5fc2V0X2lzX2hpZGluZyhmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmhpZGVBbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY2xlYXJfYW5pbWF0aW9uKHRydWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fY2xlYXJfdHJhbnNpdGlvbih0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKCF0aGlzLmlzSGlkaW5nICYmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwIHx8IHRoaXMucHJvcHMuZXh0ZW5kZWRUaW1lT3V0ID4gMCkpIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCkpO1xuICAgIH1cbiAgfSxcbiAgaGlkZVRvYXN0OiBmdW5jdGlvbiBoaWRlVG9hc3Qob3ZlcnJpZGUpIHtcbiAgICBpZiAodGhpcy5pc0hpZGluZyB8fCB0aGlzLmludGVydmFsSWQgPT09IG51bGwgJiYgIW92ZXJyaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0X2lzX2hpZGluZyh0cnVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfdHJhbnNpdGlvbih0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaGlkZUFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0X2FuaW1hdGlvbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFuZGxlX3JlbW92ZSgpO1xuICAgIH1cbiAgfSxcbiAgX3NldF9pbnRlcnZhbF9pZDogZnVuY3Rpb24gX3NldF9pbnRlcnZhbF9pZChpbnRlcnZhbElkKSB7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gaW50ZXJ2YWxJZDtcbiAgfSxcbiAgX3NldF9pc19oaWRpbmc6IGZ1bmN0aW9uIF9zZXRfaXNfaGlkaW5nKGlzSGlkaW5nKSB7XG4gICAgdGhpcy5pc0hpZGluZyA9IGlzSGlkaW5nO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2FuaW1hdGlvbk1peGluLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFRyYW5zaXRpb25FdmVudHNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbi8qKlxuICogRVZFTlRfTkFNRV9NQVAgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hpY2ggZXZlbnQgZmlyZWQgd2hlbiBhXG4gKiB0cmFuc2l0aW9uL2FuaW1hdGlvbiBlbmRzLCBiYXNlZCBvbiB0aGUgc3R5bGUgcHJvcGVydHkgdXNlZCB0b1xuICogZGVmaW5lIHRoYXQgZXZlbnQuXG4gKi9cbnZhciBFVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbmVuZDoge1xuICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ21velRyYW5zaXRpb25FbmQnLFxuICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgJ21zVHJhbnNpdGlvbic6ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnLFxuICAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAnTW96QW5pbWF0aW9uJzogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgJ21zQW5pbWF0aW9uJzogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgLy8gT24gc29tZSBwbGF0Zm9ybXMsIGluIHBhcnRpY3VsYXIgc29tZSByZWxlYXNlcyBvZiBBbmRyb2lkIDQueCxcbiAgLy8gdGhlIHVuLXByZWZpeGVkIFwiYW5pbWF0aW9uXCIgYW5kIFwidHJhbnNpdGlvblwiIHByb3BlcnRpZXMgYXJlIGRlZmluZWQgb24gdGhlXG4gIC8vIHN0eWxlIG9iamVjdCBidXQgdGhlIGV2ZW50cyB0aGF0IGZpcmUgd2lsbCBzdGlsbCBiZSBwcmVmaXhlZCwgc28gd2UgbmVlZFxuICAvLyB0byBjaGVjayBpZiB0aGUgdW4tcHJlZml4ZWQgZXZlbnRzIGFyZSB1c2VhYmxlLCBhbmQgaWYgbm90IHJlbW92ZSB0aGVtXG4gIC8vIGZyb20gdGhlIG1hcFxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgZW5kRXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbi8vIFdlIHVzZSB0aGUgcmF3IHthZGR8cmVtb3ZlfUV2ZW50TGlzdGVuZXIoKSBjYWxsIGJlY2F1c2UgRXZlbnRMaXN0ZW5lclxuLy8gZG9lcyBub3Qga25vdyBob3cgdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhbmQgd2UgcmVhbGx5IHNob3VsZFxuLy8gY2xlYW4gdXAuIEFsc28sIHRoZXNlIGV2ZW50cyBhcmUgbm90IHRyaWdnZXJlZCBpbiBvbGRlciBicm93c2Vyc1xuLy8gc28gd2Ugc2hvdWxkIGJlIEEtT0sgaGVyZS5cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBSZWFjdFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIChub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIElmIENTUyB0cmFuc2l0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCwgdHJpZ2dlciBhbiBcImVuZCBhbmltYXRpb25cIlxuICAgICAgLy8gZXZlbnQgaW1tZWRpYXRlbHkuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RUcmFuc2l0aW9uRXZlbnRzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdFRyYW5zaXRpb25FdmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV4ZWN1dGlvbkVudmlyb25tZW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBTaW1wbGUsIGxpZ2h0d2VpZ2h0IG1vZHVsZSBhc3Npc3Rpbmcgd2l0aCB0aGUgZGV0ZWN0aW9uIGFuZCBjb250ZXh0IG9mXG4gKiBXb3JrZXIuIEhlbHBzIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBhbmQgYWxsb3dzIGNvZGUgdG8gcmVhc29uIGFib3V0XG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBpbiBhIFdvcmtlciwgZXZlbiBpZiB0aGV5IG5ldmVyIGluY2x1ZGUgdGhlIG1haW5cbiAqIGBSZWFjdFdvcmtlcmAgZGVwZW5kZW5jeS5cbiAqL1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG4gIGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG4gIGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG4gIGNhblVzZUV2ZW50TGlzdGVuZXJzOiBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICByZXR1cm4gbmV3IEVsZW1lbnRDbGFzcyhvcHRzKVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKGFyciwgcHJvcCkge1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihwcm9wKVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgIGlmIChhcnJbaV0gPT09IHByb3ApIHJldHVybiBpXG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBFbGVtZW50Q2xhc3Mob3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRWxlbWVudENsYXNzKSkgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG5cbiAgLy8gc2ltaWxhciBkb2luZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IGJ1dCB3b3JrcyBpbiBJRThcbiAgaWYgKG9wdHMubm9kZVR5cGUpIG9wdHMgPSB7ZWw6IG9wdHN9XG5cbiAgdGhpcy5vcHRzID0gb3B0c1xuICB0aGlzLmVsID0gb3B0cy5lbCB8fCBkb2N1bWVudC5ib2R5XG4gIGlmICh0eXBlb2YgdGhpcy5lbCAhPT0gJ29iamVjdCcpIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWwpXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVybiBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICBpZiAoaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpID4gLTEpIHJldHVybiBjbGFzc2VzXG4gIGNsYXNzZXMucHVzaChjbGFzc05hbWUpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHZhciBpZHggPSBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgaWYgKGlkeCA+IC0xKSBjbGFzc2VzLnNwbGljZShpZHgsIDEpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgcmV0dXJuIGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmICh0aGlzLmhhcyhjbGFzc05hbWUpKSB0aGlzLnJlbW92ZShjbGFzc05hbWUpXG4gIGVsc2UgdGhpcy5hZGQoY2xhc3NOYW1lKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZWxlbWVudC1jbGFzcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjYWxsX3Nob3dfbWV0aG9kKCRub2RlLCBwcm9wcykge1xuICAkbm9kZVtwcm9wcy5zaG93TWV0aG9kXSh7XG4gICAgZHVyYXRpb246IHByb3BzLnNob3dEdXJhdGlvbixcbiAgICBlYXNpbmc6IHByb3BzLnNob3dFYXNpbmdcbiAgfSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiIH0sXG4gICAgICAvLyBlZmZlY3RpdmUgJC5oaWRlKClcbiAgICAgIHNob3dNZXRob2Q6IFwiZmFkZUluXCIsIC8vIHNsaWRlRG93biwgYW5kIHNob3cgYXJlIGJ1aWx0IGludG8galF1ZXJ5XG4gICAgICBzaG93RHVyYXRpb246IDMwMCxcbiAgICAgIHNob3dFYXNpbmc6IFwic3dpbmdcIiwgLy8gYW5kIGxpbmVhciBhcmUgYnVpbHQgaW50byBqUXVlcnlcbiAgICAgIGhpZGVNZXRob2Q6IFwiZmFkZU91dFwiLFxuICAgICAgaGlkZUR1cmF0aW9uOiAxMDAwLFxuICAgICAgaGlkZUVhc2luZzogXCJzd2luZ1wiLFxuICAgICAgLy9cbiAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDBcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZXJ2YWxJZDogbnVsbCxcbiAgICAgIGlzSGlkaW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjYWxsX3Nob3dfbWV0aG9kKHRoaXMuX2dldF8kX25vZGUoKSwgdGhpcy5wcm9wcyk7XG4gICAgaWYgKHRoaXMucHJvcHMudGltZU91dCA+IDApIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLnRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5fc2V0X2ludGVydmFsX2lkKG51bGwpO1xuICAgIHRoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuXG4gICAgY2FsbF9zaG93X21ldGhvZCh0aGlzLl9nZXRfJF9ub2RlKCkuc3RvcCh0cnVlLCB0cnVlKSwgdGhpcy5wcm9wcyk7XG4gIH0sXG4gIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzSGlkaW5nICYmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwIHx8IHRoaXMucHJvcHMuZXh0ZW5kZWRUaW1lT3V0ID4gMCkpIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCkpO1xuICAgIH1cbiAgfSxcbiAgaGlkZVRvYXN0OiBmdW5jdGlvbiBoaWRlVG9hc3Qob3ZlcnJpZGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0hpZGluZyB8fCB0aGlzLnN0YXRlLmludGVydmFsSWQgPT09IG51bGwgJiYgIW92ZXJyaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hpZGluZzogdHJ1ZSB9KTtcblxuICAgIHRoaXMuX2dldF8kX25vZGUoKVt0aGlzLnByb3BzLmhpZGVNZXRob2RdKHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmhpZGVEdXJhdGlvbixcbiAgICAgIGVhc2luZzogdGhpcy5wcm9wcy5oaWRlRWFzaW5nLFxuICAgICAgY29tcGxldGU6IHRoaXMuX2hhbmRsZV9yZW1vdmVcbiAgICB9KTtcbiAgfSxcbiAgX2dldF8kX25vZGU6IGZ1bmN0aW9uIF9nZXRfJF9ub2RlKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgcmV0dXJuIGpRdWVyeShfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykpO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbiAgfSxcbiAgX3NldF9pbnRlcnZhbF9pZDogZnVuY3Rpb24gX3NldF9pbnRlcnZhbF9pZChpbnRlcnZhbElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRlcnZhbElkOiBpbnRlcnZhbElkXG4gICAgfSk7XG4gIH0sXG4gIF9zZXRfaXNfaGlkaW5nOiBmdW5jdGlvbiBfc2V0X2lzX2hpZGluZyhpc0hpZGluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNIaWRpbmc6IGlzSGlkaW5nXG4gICAgfSk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL2xpYi9Ub2FzdE1lc3NhZ2UvalF1ZXJ5TWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlQnV0dG9uIGZyb20gJy4vUGFnZUJ1dHRvbi5qcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBQYWdpbmF0aW9uTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5wcmVQYWdlKSB7XG4gICAgICBwYWdlID0gdGhpcy5wcm9wcy5jdXJyUGFnZSAtIDEgPCAxID8gMSA6IHRoaXMucHJvcHMuY3VyclBhZ2UgLSAxO1xuICAgIH0gZWxzZSBpZiAocGFnZSA9PSB0aGlzLnByb3BzLm5leHRQYWdlKSB7XG4gICAgICBwYWdlID0gdGhpcy5wcm9wcy5jdXJyUGFnZSArIDEgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB0aGlzLnByb3BzLmN1cnJQYWdlICsgMTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5sYXN0UGFnZSkge1xuICAgICAgcGFnZSA9IHRoaXMudG90YWxQYWdlcztcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5maXJzdFBhZ2UpIHtcbiAgICAgIHBhZ2UgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlID0gcGFyc2VJbnQocGFnZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2UgIT0gdGhpcy5wcm9wcy5jdXJyUGFnZSkge1xuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKHBhZ2UsIHRoaXMucHJvcHMuc2l6ZVBlclBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVNpemVQZXJQYWdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzZWxlY3RTaXplID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnRleHQpO1xuICAgIGxldCB7IGN1cnJQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzZWxlY3RTaXplICE9IHRoaXMucHJvcHMuc2l6ZVBlclBhZ2UpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGFTaXplIC8gc2VsZWN0U2l6ZSk7XG4gICAgICBpZiAoY3VyclBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMpXG4gICAgICAgIGN1cnJQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuXG4gICAgICB0aGlzLnByb3BzLmNoYW5nZVBhZ2UoY3VyclBhZ2UsIHNlbGVjdFNpemUpO1xuICAgICAgaWYodGhpcy5wcm9wcy5vblNpemVQZXJQYWdlTGlzdCl7XG4gICAgICAgIHRoaXMucHJvcHMub25TaXplUGVyUGFnZUxpc3Qoc2VsZWN0U2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGFTaXplIC8gdGhpcy5wcm9wcy5zaXplUGVyUGFnZSk7XG4gICAgdmFyIHBhZ2VCdG5zID0gdGhpcy5tYWtlUGFnZSgpO1xuICAgIHZhciBwYWdlTGlzdFN0eWxlID0ge1xuICAgICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICAgIG1hcmdpblRvcDogXCIwcHhcIiAgLy9vdmVycmlkZSB0aGUgbWFyZ2luLXRvcCBkZWZpbmVkIGluIC5wYWdpbmF0aW9uIGNsYXNzIGluIGJvb3RzdHJhcC5cbiAgICB9XG5cbiAgICB2YXIgc2l6ZVBlclBhZ2VMaXN0ID0gdGhpcy5wcm9wcy5zaXplUGVyUGFnZUxpc3QubWFwKChzaXplUGVyUGFnZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17c2l6ZVBlclBhZ2V9IHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgICA8YSByb2xlPVwibWVudWl0ZW1cIiB0YWJJbmRleD1cIi0xXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmNoYW5nZVNpemVQZXJQYWdlLmJpbmQodGhpcyl9PntzaXplUGVyUGFnZX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNSB9fT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuc2l6ZVBlclBhZ2VMaXN0Lmxlbmd0aCA+IDFcbiAgICAgICAgICA/IDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwicGFnZURyb3BEb3duXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaXplUGVyUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJwYWdlRHJvcERvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c2l6ZVBlclBhZ2VMaXN0fVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIiBzdHlsZT17cGFnZUxpc3RTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtwYWdlQnRuc31cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIiBzdHlsZT17cGFnZUxpc3RTdHlsZX0+XG4gICAgICAgICAgICAgICAge3BhZ2VCdG5zfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIG1ha2VQYWdlKCkge1xuICAgIHZhciBwYWdlcyA9IHRoaXMuZ2V0UGFnZXMoKTtcbiAgICByZXR1cm4gcGFnZXMubWFwKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICB2YXIgaXNBY3RpdmUgPSBwYWdlID09PSB0aGlzLnByb3BzLmN1cnJQYWdlO1xuICAgICAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gICAgICB2YXIgaGlkZGVuID0gZmFsc2U7XG4gICAgICBpZih0aGlzLnByb3BzLmN1cnJQYWdlID09IDEgJiZcbiAgICAgICAgKHBhZ2UgPT09IHRoaXMucHJvcHMuZmlyc3RQYWdlIHx8IHBhZ2UgPT09IHRoaXMucHJvcHMucHJlUGFnZSkpe1xuICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5wcm9wcy5jdXJyUGFnZSA9PSB0aGlzLnRvdGFsUGFnZXMgJiZcbiAgICAgICAgKHBhZ2UgPT09IHRoaXMucHJvcHMubmV4dFBhZ2UgfHwgcGFnZSA9PT0gdGhpcy5wcm9wcy5sYXN0UGFnZSkpe1xuICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2VCdXR0b24gY2hhbmdlUGFnZT17dGhpcy5jaGFuZ2VQYWdlLmJpbmQodGhpcyl9IGFjdGl2ZT17aXNBY3RpdmV9IGRpc2FibGU9e2Rpc2FibGVkfSBoaWRkZW49e2hpZGRlbn0ga2V5PXtwYWdlfT57cGFnZX08L1BhZ2VCdXR0b24+XG4gICAgICApXG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICBnZXRQYWdlcygpIHtcbiAgICB2YXIgc3RhcnRQYWdlID0gMSwgZW5kUGFnZSA9IHRoaXMudG90YWxQYWdlcztcblxuICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KHRoaXMucHJvcHMuY3VyclBhZ2UgLSBNYXRoLmZsb29yKHRoaXMucHJvcHMucGFnaW5hdGlvblNpemUgLyAyKSwgMSk7XG4gICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMucHJvcHMucGFnaW5hdGlvblNpemUgLSAxO1xuXG4gICAgaWYgKGVuZFBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgIGVuZFBhZ2UgPSB0aGlzLnRvdGFsUGFnZXM7XG4gICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSArIDE7XG4gICAgfVxuICAgIHZhciBwYWdlcztcbiAgICBpZihzdGFydFBhZ2UgIT0gMSAmJiB0aGlzLnRvdGFsUGFnZXMgPiB0aGlzLnByb3BzLnBhZ2luYXRpb25TaXplKSB7XG4gICAgICBwYWdlcyA9IFt0aGlzLnByb3BzLmZpcnN0UGFnZSwgdGhpcy5wcm9wcy5wcmVQYWdlXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxQYWdlcyA+IDEpIHtcbiAgICAgIHBhZ2VzID0gW3RoaXMucHJvcHMucHJlUGFnZV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcGFnZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gc3RhcnRQYWdlOyBpIDw9IGVuZFBhZ2U7IGkrKykge1xuICAgICAgaWYgKGkgPiAwKXBhZ2VzLnB1c2goaSk7XG4gICAgfVxuICAgIGlmIChlbmRQYWdlICE9IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgcGFnZXMucHVzaCh0aGlzLnByb3BzLm5leHRQYWdlKTtcbiAgICAgIHBhZ2VzLnB1c2godGhpcy5wcm9wcy5sYXN0UGFnZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgIHBhZ2VzLnB1c2godGhpcy5wcm9wcy5uZXh0UGFnZSk7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfVxufVxuUGFnaW5hdGlvbkxpc3QucHJvcFR5cGVzID0ge1xuICBjdXJyUGFnZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgc2l6ZVBlclBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGRhdGFTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBjaGFuZ2VQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHBhZ2luYXRpb25TaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICByZW1vdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblNpemVQZXJQYWdlTGlzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHByZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cblBhZ2luYXRpb25MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZVBlclBhZ2U6IENvbnN0LlNJWkVfUEVSX1BBR0Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25MaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uTGlzdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFBhZ2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuICBwYWdlQnRuQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlUGFnZShlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIGNsYXNzZXMgPSBjbGFzc1NldCh7XG4gICAgICAgICdhY3RpdmUnOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlLFxuICAgICAgICAnaGlkZGVuJzogdGhpcy5wcm9wcy5oaWRkZW5cbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzfT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucGFnZUJ0bkNsaWNrLmJpbmQodGhpcyl9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvYT48L2xpPlxuICAgIClcbiAgfVxufVxuUGFnZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoYW5nZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBhY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUJ1dHRvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BhZ2luYXRpb24vUGFnZUJ1dHRvbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9FZGl0b3InO1xuaW1wb3J0IE5vdGlmaWVyIGZyb20gJy4uL05vdGlmaWNhdGlvbi5qcyc7XG5cbmNsYXNzIFRvb2xCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50aW1lb3V0ZUNsZWFyPTA7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzSW5zZXJ0Um93VHJpZ2dlcjogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlU3RhdGU6bnVsbCxcbiAgICAgIHNoYWtlRWRpdG9yOmZhbHNlLFxuICAgICAgc2hvd1NlbGVjdGVkOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB9XG4gIGNsZWFyVGltZW91dCgpIHtcbiAgICBpZih0aGlzLnRpbWVvdXRlQ2xlYXIpe1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dGVDbGVhcik7XG4gICAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcbiAgICB9XG4gIH1cblxuICBjaGVja0FuZFBhcnNlRm9ybSgpe1xuICAgIHZhciB0cz10aGlzLG5ld09iaiA9IHt9LGlzVmFsaWQ9dHJ1ZSx0ZW1wVmFsdWUsdGVtcE1zZyx2YWxpZGF0ZVN0YXRlPXt9O1xuICAgIHRoaXMucHJvcHMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgaSl7XG4gICAgICBpZihjb2x1bW4uYXV0b1ZhbHVlKXsvL3doZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICB0ZW1wVmFsdWU9dHlwZW9mIGNvbHVtbi5hdXRvVmFsdWU9PSdmdW5jdGlvbic/Y29sdW1uLmF1dG9WYWx1ZSgpOignYXV0b3ZhbHVlLScrbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBkb20gPSB0aGlzLnJlZnNbY29sdW1uLmZpZWxkK2ldO1xuICAgICAgICB0ZW1wVmFsdWUgPSBkb20udmFsdWU7XG5cbiAgICAgICAgaWYoY29sdW1uLmVkaXRhYmxlICYmIGNvbHVtbi5lZGl0YWJsZS50eXBlID09ICdjaGVja2JveCcpe1xuICAgICAgICAgIGxldCB2YWx1ZXMgPSBkb20udmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgICB0ZW1wVmFsdWUgPSBkb20uY2hlY2tlZD8gdmFsdWVzWzBdOnZhbHVlc1sxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvbHVtbi5lZGl0YWJsZSYmY29sdW1uLmVkaXRhYmxlLnZhbGlkYXRvcil7Ly9wcm9jZXNzIHZhbGlkYXRlXG4gICAgICAgICAgdGVtcE1zZz0gY29sdW1uLmVkaXRhYmxlLnZhbGlkYXRvcih0ZW1wVmFsdWUpXG4gICAgICAgICAgaWYodGVtcE1zZyE9PXRydWUpe1xuICAgICAgICAgICAgaXNWYWxpZD1mYWxzZTtcbiAgICAgICAgICAgIHZhbGlkYXRlU3RhdGVbY29sdW1uLmZpZWxkXT10ZW1wTXNnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXdPYmpbY29sdW1uLmZpZWxkXSA9dGVtcFZhbHVlO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYoaXNWYWxpZCl7XG4gICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1lbHNle1xuICAgICAgdHMuY2xlYXJUaW1lb3V0KCk7XG4gICAgICAvL3Nob3cgZXJyb3IgaW4gZm9ybSBhbmQgc2hha2UgaXRcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlU3RhdGU6dmFsaWRhdGVTdGF0ZSxzaGFrZUVkaXRvcjp0cnVlfSk7XG4gICAgICAvL25vdGlmaWVyIGVycm9yXG4gICAgICB0cy5yZWZzLm5vdGlmaWVyLm5vdGljZSgnZXJyb3InLFwiRm9ybSB2YWxpZGF0ZSBlcnJvcnMsIHBsZWFzZSBjaGVja2luZyFcIixcIlByZXNzZWQgRVNDIGNhbiBjYW5jZWxcIik7XG4gICAgICAvL2NsZWFyIGFuaW1hdGUgY2xhc3NcbiAgICAgIHRzLnRpbWVvdXRlQ2xlYXI9c2V0VGltZW91dChmdW5jdGlvbigpe3RzLnNldFN0YXRlKHtzaGFrZUVkaXRvcjpmYWxzZX0pO30sMzAwKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNhdmVCdG5DbGljayhlKXtcbiAgICB2YXIgbmV3T2JqID0gdGhpcy5jaGVja0FuZFBhcnNlRm9ybSgpO1xuICAgIGlmKCFuZXdPYmopey8vdmFsaWRhdGUgZXJyb3JzXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBtc2cgPSB0aGlzLnByb3BzLm9uQWRkUm93KG5ld09iaik7XG4gICAgaWYobXNnKSB7XG4gICAgICB2YXIgdHM9dGhpcztcbiAgICAgIHRzLnJlZnMubm90aWZpZXIubm90aWNlKCdlcnJvcicsbXNnLFwiUHJlc3NlZCBFU0MgY2FuIGNhbmNlbFwiKTtcbiAgICAgIHRzLmNsZWFyVGltZW91dCgpO1xuICAgICAgLy9zaGFrZSBmb3JtIGFuZCBoYWNrIHByZXZlbnQgbW9kYWwgaGlkZVxuICAgICAgdHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOnRydWUsdmFsaWRhdGVTdGF0ZTpcInRoaXMgaXMgaGFjayBmb3IgcHJldmVudCBib290c3RyYXAgbW9kYWwgaGlkZVwifSk7XG4gICAgICAvL2NsZWFyIGFuaW1hdGUgY2xhc3NcbiAgICAgIHRzLnRpbWVvdXRlQ2xlYXI9c2V0VGltZW91dChmdW5jdGlvbigpe3RzLnNldFN0YXRlKHtzaGFrZUVkaXRvcjpmYWxzZX0pO30sMzAwKTtcbiAgICB9IGVsc2V7XG4gICAgICAvL3Jlc2V0IHN0YXRlIGFuZCBoaWRlIG1vZGFsIGhpZGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWxpZGF0ZVN0YXRlOm51bGwsXG4gICAgICAgIHNoYWtlRWRpdG9yOmZhbHNlXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrXCJtb2RhbC1iYWNrZHJvcFwiKS5jbGljaygpO1xuICAgICAgfSk7XG4gICAgICAvL3Jlc2V0IGZvcm1cbiAgICAgIHRoaXMucmVmcy5mb3JtLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2hvd09ubHlUb2dnbGUgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dTZWxlY3RlZDogIXRoaXMuc3RhdGUuc2hvd1NlbGVjdGVkXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vblNob3dPbmx5U2VsZWN0ZWQoKTtcbiAgfVxuXG4gIGhhbmRsZURyb3BSb3dCdG5DbGljayhlKXtcbiAgICB0aGlzLnByb3BzLm9uRHJvcFJvdygpO1xuICB9XG5cbiAgaGFuZGxlQ2xvc2VCdG4oZSl7XG4gICAgdGhpcy5yZWZzLndhcm5pbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgaGFuZGxlS2V5VXAoZSl7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaChlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRXhwb3J0Q1NWKCkge1xuICAgIHRoaXMucHJvcHMub25FeHBvcnRDU1YoKTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWZzLnNlYWNoSW5wdXQudmFsdWUgPSAnJztcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKCcnKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciBtb2RhbENsYXNzTmFtZSA9IFwiYnMtdGFibGUtbW9kYWwtc21cIituZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgaW5zZXJ0QnRuID0gdGhpcy5wcm9wcy5lbmFibGVJbnNlcnQ/XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkFkZFJvd0JlZ2lufSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gcmVhY3QtYnMtdGFibGUtYWRkLWJ0blwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD17Jy4nK21vZGFsQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvaT4gTmV3PC9idXR0b24+Om51bGw7XG5cbiAgICB2YXIgZGVsZXRlQnRuID0gdGhpcy5wcm9wcy5lbmFibGVEZWxldGU/XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIHJlYWN0LWJzLXRhYmxlLWRlbC1idG5cIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cInJpZ2h0XCIgdGl0bGU9XCJEcm9wIHNlbGVjdGVkIHJvd1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURyb3BSb3dCdG5DbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcIj48L2k+IERlbGV0ZVxuICAgICAgICAgIDwvYnV0dG9uPjpudWxsO1xuXG4gICAgdmFyIHNlYXJjaFRleHRJbnB1dCA9IHRoaXMucmVuZGVyU2VhcmNoUGFuZWwoKTtcblxuICAgIHZhciBzaG93U2VsZWN0ZWRPbmx5QnRuID0gdGhpcy5wcm9wcy5lbmFibGVTaG93T25seVNlbGVjdGVkP1xuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93T25seVRvZ2dsZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cImZhbHNlXCI+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5zaG93U2VsZWN0ZWQ/IENvbnN0LlNIT1dfQUxMIDogQ29uc3QuU0hPV19PTkxZX1NFTEVDVCB9XG4gICAgICA8L2J1dHRvbj46bnVsbDtcblxuICAgIHZhciBtb2RhbCA9IHRoaXMucHJvcHMuZW5hYmxlSW5zZXJ0P3RoaXMucmVuZGVySW5zZXJ0Um93TW9kYWwobW9kYWxDbGFzc05hbWUpOm51bGw7XG4gICAgdmFyIHdhcm5pbmdTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgfTtcblxuICAgIHZhciBleHBvcnRDU1YgPSB0aGlzLnByb3BzLmVuYWJsZUV4cG9ydENTViA/XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17dGhpcy5oYW5kbGVFeHBvcnRDU1YuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZXhwb3J0XCI+PC9pPiBFeHBvcnQgdG8gQ1NWPC9idXR0b24+IDogbnVsbDtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXNtXCIgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgICAgICB7ZXhwb3J0Q1NWfVxuICAgICAgICAgICAge2luc2VydEJ0bn1cbiAgICAgICAgICAgIHtkZWxldGVCdG59XG4gICAgICAgICAgICB7c2hvd1NlbGVjdGVkT25seUJ0bn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy00XCI+XG4gICAgICAgICAge3NlYXJjaFRleHRJbnB1dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOb3RpZmllciByZWY9XCJub3RpZmllclwiPjwvTm90aWZpZXI+XG4gICAgICAgIHttb2RhbH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclNlYXJjaFBhbmVsKCkge1xuICAgIGlmKHRoaXMucHJvcHMuZW5hYmxlU2VhcmNoKSB7XG4gICAgICBsZXQgY2xhc3NOYW1lcyA9ICdmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc20nO1xuICAgICAgbGV0IGNsZWFyQnRuID0gbnVsbDtcbiAgICAgIGlmKHRoaXMucHJvcHMuY2xlYXJTZWFyY2gpIHtcbiAgICAgICAgY2xlYXJCdG4gPSAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGVhckJ0bkNsaWNrIH0+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICAgIGNsYXNzTmFtZXMgPSAnZm9ybS1ncm91cCBmb3JtLWdyb3VwLXNtIGlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuICAgICAgICAgIDxpbnB1dCByZWY9J3NlYWNoSW5wdXQnIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZWhvbGRlcj90aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyOidTZWFyY2gnfVxuICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICB7IGNsZWFyQnRuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJbnNlcnRSb3dNb2RhbChtb2RhbENsYXNzTmFtZSl7XG4gICAgdmFyIHZhbGlkYXRlU3RhdGU9dGhpcy5zdGF0ZS52YWxpZGF0ZVN0YXRlfHx7fTtcbiAgICB2YXIgaW5wdXRGaWVsZCA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uLCBpKXtcbiAgICAgIHZhciBlZGl0YWJsZT1jb2x1bW4uZWRpdGFibGUsXG4gICAgICAgICAgZm9ybWF0PWNvbHVtbi5mb3JtYXQsXG4gICAgICAgICAgYXR0cj17cmVmOmNvbHVtbi5maWVsZCtpLHBsYWNlaG9sZGVyOmVkaXRhYmxlLnBsYWNlaG9sZGVyP2VkaXRhYmxlLnBsYWNlaG9sZGVyOmNvbHVtbi5uYW1lfTtcblxuICAgICAgaWYoY29sdW1uLmF1dG9WYWx1ZSl7Ly93aGVuIHlvdSB3YW50IHNhbWUgYXV0byBnZW5lcmF0ZSB2YWx1ZSBhbmQgbm90IGFsbG93IGVkaXQsIGV4YW1wbGUgSUQgZmllbGRcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgZXJyb3I9dmFsaWRhdGVTdGF0ZVtjb2x1bW4uZmllbGRdPyg8c3BhbiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrIGJnLWRhbmdlclwiPnt2YWxpZGF0ZVN0YXRlW2NvbHVtbi5maWVsZF19PC9zcGFuPik6bnVsbDtcblxuICAgICAgLy8gbGV0IGVkaXRvciA9IEVkaXRvcihlZGl0YWJsZSxhdHRyLGZvcm1hdCk7XG4gICAgICAvLyBpZihlZGl0b3IucHJvcHMudHlwZSAmJiBlZGl0b3IucHJvcHMudHlwZSA9PSAnY2hlY2tib3gnKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIga2V5PXtjb2x1bW4uZmllbGR9PlxuICAgICAgICAgIDxsYWJlbD57Y29sdW1uLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICB7RWRpdG9yKGVkaXRhYmxlLGF0dHIsZm9ybWF0LCcnKX1cbiAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgICB2YXIgbW9kYWxDbGFzcyA9IGNsYXNzU2V0KFwibW9kYWxcIiwgXCJmYWRlXCIgLCBtb2RhbENsYXNzTmFtZSx7XG4gICAgICAnaW4nOnRoaXMuc3RhdGUuc2hha2VFZGl0b3J8fHRoaXMuc3RhdGUudmFsaWRhdGVTdGF0ZS8vaGFjayBwcmV2ZW50IGJvb3RzdHJhcCBtb2RhbCBoaWRlIGJ5IHJlUmVuZGVyXG4gICAgfSk7XG4gICAgdmFyIGRpYWxvZ0NsYXNzPWNsYXNzU2V0KFwibW9kYWwtZGlhbG9nXCIsXCJtb2RhbC1zbVwiLHtcbiAgICAgIFwiYW5pbWF0ZWRcIjp0aGlzLnN0YXRlLnNoYWtlRWRpdG9yLFxuICAgICAgXCJzaGFrZVwiOnRoaXMuc3RhdGUuc2hha2VFZGl0b3JcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJtb2RhbFwiICBjbGFzc05hbWU9e21vZGFsQ2xhc3N9IHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGlhbG9nQ2xhc3N9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPk5ldyBSZWNvcmQ8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiPlxuICAgICAgICAgICAgICB7aW5wdXRGaWVsZH1cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmVCdG5DbGljay5iaW5kKHRoaXMpfT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblRvb2xCYXIucHJvcFR5cGVzID0ge1xuICBvbkFkZFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRHJvcFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2hvd09ubHlTZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGVuYWJsZUluc2VydDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGVuYWJsZURlbGV0ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGVuYWJsZVNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjb2x1bW5zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHNlYXJjaFBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGVhclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cblRvb2xCYXIuZGVmYXVsdFByb3BzID0ge1xuICBlbmFibGVJbnNlcnQ6IGZhbHNlLFxuICBlbmFibGVEZWxldGU6IGZhbHNlLFxuICBlbmFibGVTZWFyY2g6IGZhbHNlLFxuICBlbmFibGVTaG93T25seVNlbGVjdGVkOiBmYWxzZSxcbiAgY2xlYXJTZWFyY2g6IGZhbHNlXG59XG5leHBvcnQgZGVmYXVsdCBUb29sQmFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdG9vbGJhci9Ub29sQmFyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgVGFibGVGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5maWx0ZXJPYmogPSB7fTtcbiAgfVxuXG4gIGhhbmRsZUtleVVwKGUpe1xuICAgIGlmKGUuY3VycmVudFRhcmdldC52YWx1ZS50cmltKCkgPT09IFwiXCIpXG4gICAgICBkZWxldGUgdGhpcy5maWx0ZXJPYmpbZS5jdXJyZW50VGFyZ2V0Lm5hbWVdO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZmlsdGVyT2JqW2UuY3VycmVudFRhcmdldC5uYW1lXSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcblxuICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5maWx0ZXJPYmopO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIHRhYmxlQ2xhc3NlcyA9IGNsYXNzU2V0KFwidGFibGVcIiwge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiB0aGlzLnByb3BzLnN0cmlwZWQsXG4gICAgICAndGFibGUtY29uZGVuc2VkJzogdGhpcy5wcm9wcy5jb25kZW5zZWRcbiAgICB9KTtcbiAgICB2YXIgc2VsZWN0Um93SGVhZGVyID0gbnVsbDtcblxuICAgIGlmKHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSB8fFxuICAgICAgICB0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9NVUxUSSl7XG4gICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOjM1LFxuICAgICAgICBwYWRkaW5nTGVmdDogMCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAwXG4gICAgICB9XG4gICAgICBzZWxlY3RSb3dIZWFkZXIgPSAoPHRoIHN0eWxlPXtzdHlsZX0ga2V5PXstMX0+RmlsdGVyPC90aD4pO1xuICAgIH1cbiAgICB2YXIgZmlsdGVyRmllbGQgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbil7XG4gICAgICB2YXIgdGhTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogY29sdW1uLmhpZGRlbj9cIm5vbmVcIjpudWxsLFxuICAgICAgICB3aWR0aDogY29sdW1uLndpZHRoXG4gICAgICB9O1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8dGgga2V5PXtjb2x1bW4ubmFtZX0gc3R5bGU9e3RoU3R5bGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGgtaW5uZXIgdGFibGUtaGVhZGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgPGlucHV0IHNpemU9XCIxMFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e2NvbHVtbi5uYW1lfSBuYW1lPXtjb2x1bW4ubmFtZX0gb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGg+XG4gICAgICApXG4gICAgfSwgdGhpcyk7XG4gICAgcmV0dXJuKFxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dGFibGVDbGFzc2VzfSBzdHlsZT17e21hcmdpblRvcDo1fX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHIgc3R5bGU9e3tib3JkZXJCb3R0b21TdHlsZTogJ2hpZGRlbid9fT5cbiAgICAgICAgICAgIHtzZWxlY3RSb3dIZWFkZXJ9e2ZpbHRlckZpZWxkfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuVGFibGVGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBjb2x1bW5zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHJvd1NlbGVjdFR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG9uRmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlRmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVGaWx0ZXIuanNcbiAqKi8iLCJpbXBvcnQgQ29uc3QgZnJvbSBcIi4uL0NvbnN0XCI7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuXG5mdW5jdGlvbiBfc29ydChhcnIsIHNvcnRGaWVsZCwgb3JkZXIsIHNvcnRGdW5jKSB7XG4gIG9yZGVyID0gb3JkZXIudG9Mb3dlckNhc2UoKTtcbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoc29ydEZ1bmMpIHtcbiAgICAgIHJldHVybiBzb3J0RnVuYyhhLCBiLCBvcmRlciwgc29ydEZpZWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9yZGVyID09IENvbnN0LlNPUlRfREVTQykge1xuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdIDwgYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA+IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIGRhdGEpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY29sSW5mb3MgPSBudWxsO1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gbnVsbDtcbiAgICB0aGlzLmlzT25GaWx0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICB0aGlzLnNvcnRPYmogPSBudWxsO1xuICAgIHRoaXMucGFnZU9iaiA9IHt9O1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICB0aGlzLm11bHRpQ29sdW1uU2VhcmNoID0gZmFsc2U7XG4gICAgdGhpcy5zaG93T25seVNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdGUgPSBmYWxzZTsgLy8gcmVtb3RlIGRhdGFcbiAgfVxuXG4gIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5rZXlGaWVsZCA9IHByb3BzLmtleUZpZWxkO1xuICAgIHRoaXMuZW5hYmxlUGFnaW5hdGlvbiA9IHByb3BzLmlzUGFnaW5hdGlvbjtcbiAgICB0aGlzLmNvbEluZm9zID0gcHJvcHMuY29sSW5mb3M7XG4gICAgdGhpcy5yZW1vdGUgPSBwcm9wcy5yZW1vdGU7XG4gICAgdGhpcy5tdWx0aUNvbHVtblNlYXJjaCA9IHByb3BzLm11bHRpQ29sdW1uU2VhcmNoO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSB7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5maWx0ZXJPYmopIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLnNlYXJjaFRleHQpIHRoaXMuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnRPYmopIHtcbiAgICAgIHRoaXMuc29ydCh0aGlzLnNvcnRPYmoub3JkZXIsIHRoaXMuc29ydE9iai5zb3J0RmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNvcnRJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLnNvcnRPYmo7XG4gIH1cblxuICBzZXRTZWxlY3RlZFJvd0tleShzZWxlY3RlZFJvd0tleXMpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRSb3dLZXlzO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRSb3dLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgZ2V0Q3VycmVudERpc3BsYXlEYXRhKCkge1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHJldHVybiB0aGlzLmZpbHRlcmVkRGF0YTtcbiAgICBlbHNlIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBpZ25vcmVOb25TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnNob3dPbmx5U2VsZWN0ZWQgPSAhdGhpcy5zaG93T25seVNlbGVjdGVkO1xuICAgIGlmKHRoaXMuc2hvd09ubHlTZWxlY3RlZCl7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKCByb3cgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZC5maW5kKHggPT4gcm93W3RoaXMua2V5RmllbGRdID09PSB4KVxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc29ydChvcmRlciwgc29ydEZpZWxkKSB7XG4gICAgdGhpcy5zb3J0T2JqID0ge1xuICAgICAgb3JkZXI6IG9yZGVyLFxuICAgICAgc29ydEZpZWxkOiBzb3J0RmllbGRcbiAgICB9O1xuXG4gICAgbGV0IGN1cnJlbnREaXNwbGF5RGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgaWYoIXRoaXMuY29sSW5mb3Nbc29ydEZpZWxkXSkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCB7IHNvcnRGdW5jIH0gPSB0aGlzLmNvbEluZm9zW3NvcnRGaWVsZF07XG4gICAgY3VycmVudERpc3BsYXlEYXRhID0gX3NvcnQoY3VycmVudERpc3BsYXlEYXRhLCBzb3J0RmllbGQsIG9yZGVyLCBzb3J0RnVuYyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpIHtcbiAgICB0aGlzLnBhZ2VPYmouZW5kID0gcGFnZSAqIHNpemVQZXJQYWdlIC0gMTtcbiAgICB0aGlzLnBhZ2VPYmouc3RhcnQgPSB0aGlzLnBhZ2VPYmouZW5kIC0gKHNpemVQZXJQYWdlIC0gMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlZGl0KG5ld1ZhbCwgcm93SW5kZXgsIGZpZWxkTmFtZSkge1xuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGxldCByb3dLZXlDYWNoZTtcbiAgICBpZiAoIXRoaXMuZW5hYmxlUGFnaW5hdGlvbikge1xuICAgICAgY3VycmVudERpc3BsYXlEYXRhW3Jvd0luZGV4XVtmaWVsZE5hbWVdID0gbmV3VmFsO1xuICAgICAgcm93S2V5Q2FjaGUgPSBjdXJyZW50RGlzcGxheURhdGFbcm93SW5kZXhdW3RoaXMua2V5RmllbGRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50RGlzcGxheURhdGFbdGhpcy5wYWdlT2JqLnN0YXJ0ICsgcm93SW5kZXhdW2ZpZWxkTmFtZV0gPSBuZXdWYWw7XG4gICAgICByb3dLZXlDYWNoZSA9IGN1cnJlbnREaXNwbGF5RGF0YVt0aGlzLnBhZ2VPYmouc3RhcnQgKyByb3dJbmRleF1bdGhpcy5rZXlGaWVsZF07XG4gICAgfVxuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKHJvd1t0aGlzLmtleUZpZWxkXSA9PT0gcm93S2V5Q2FjaGUpIHtcbiAgICAgICAgICByb3dbZmllbGROYW1lXSA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5maWx0ZXJPYmopIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLnNlYXJjaFRleHQpIHRoaXMuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQXRCZWdpbihuZXdPYmopIHtcbiAgICBpZiAoIW5ld09ialt0aGlzLmtleUZpZWxkXSB8fCBuZXdPYmpbdGhpcy5rZXlGaWVsZF0udG9TdHJpbmcoKSA9PT0gJycpIHtcbiAgICAgIHRocm93IHRoaXMua2V5RmllbGQgKyBcIiBjYW4ndCBiZSBlbXB0eSB2YWx1ZS5cIjtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnREaXNwbGF5RGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgY3VycmVudERpc3BsYXlEYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgaWYgKHJvd1t0aGlzLmtleUZpZWxkXS50b1N0cmluZygpID09PSBuZXdPYmpbdGhpcy5rZXlGaWVsZF0udG9TdHJpbmcoKSkge1xuICAgICAgICB0aHJvdyB0aGlzLmtleUZpZWxkICsgXCIgXCIgKyBuZXdPYmpbdGhpcy5rZXlGaWVsZF0gKyBcIiBhbHJlYWR5IGV4aXN0c1wiO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKCdAQCcpO1xuICAgIGN1cnJlbnREaXNwbGF5RGF0YS51bnNoaWZ0KG5ld09iaik7XG4gICAgaWYgKHRoaXMuaXNPbkZpbHRlcikge1xuICAgICAgdGhpcy5kYXRhLnVuc2hpZnQobmV3T2JqKTtcbiAgICB9XG4gIH1cblxuICBhZGQobmV3T2JqKSB7XG4gICAgaWYgKCFuZXdPYmpbdGhpcy5rZXlGaWVsZF0gfHwgbmV3T2JqW3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09ICcnKSB7XG4gICAgICB0aHJvdyB0aGlzLmtleUZpZWxkICsgXCIgY2FuJ3QgYmUgZW1wdHkgdmFsdWUuXCI7XG4gICAgfVxuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGN1cnJlbnREaXNwbGF5RGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIGlmIChyb3dbdGhpcy5rZXlGaWVsZF0udG9TdHJpbmcoKSA9PT0gbmV3T2JqW3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5rZXlGaWVsZCArIFwiIFwiICsgbmV3T2JqW3RoaXMua2V5RmllbGRdICsgXCIgYWxyZWFkeSBleGlzdHNcIjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGN1cnJlbnREaXNwbGF5RGF0YS5wdXNoKG5ld09iaik7XG4gICAgaWYgKHRoaXMuaXNPbkZpbHRlcikge1xuICAgICAgdGhpcy5kYXRhLnB1c2gobmV3T2JqKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUocm93S2V5KSB7XG4gICAgbGV0IGN1cnJlbnREaXNwbGF5RGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgbGV0IHJlc3VsdCA9IGN1cnJlbnREaXNwbGF5RGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIHJvd0tleS5pbmRleE9mKHJvd1t0aGlzLmtleUZpZWxkXSkgPT0gLTE7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSB7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgcmV0dXJuIHJvd0tleS5pbmRleE9mKHJvd1t0aGlzLmtleUZpZWxkXSkgPT0gLTE7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyKGZpbHRlck9iaikge1xuICAgIGlmIChPYmplY3Qua2V5cyhmaWx0ZXJPYmopLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IG51bGw7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsdGVyT2JqID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJPYmogPSBmaWx0ZXJPYmo7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoIHJvdyA9PiB7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIGxldCBmaWx0ZXJWYWw7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmaWx0ZXJPYmopIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0VmFsID0gcm93W2tleV07XG5cbiAgICAgICAgICBzd2l0Y2ggKGZpbHRlck9ialtrZXldLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSBmaWx0ZXJPYmpba2V5XS52YWx1ZS5udW1iZXI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5DVVNUT006XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGZpbHRlclZhbCA9ICh0eXBlb2YgZmlsdGVyT2JqW2tleV0udmFsdWUgPT09IFwib2JqZWN0XCIpID9cbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICAgICAgICAodHlwZW9mIGZpbHRlck9ialtrZXldLnZhbHVlID09PSBcInN0cmluZ1wiKSA/IGZpbHRlck9ialtrZXldLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiBmaWx0ZXJPYmpba2V5XS52YWx1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgIGZpbHRlclZhbCA9ICh0eXBlb2YgZmlsdGVyT2JqW2tleV0udmFsdWUgPT09IFwic3RyaW5nXCIpID8gZmlsdGVyT2JqW2tleV0udmFsdWUudG9Mb3dlckNhc2UoKSA6IGZpbHRlck9ialtrZXldLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZmlsdGVyVmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IG9sZCBmaWx0ZXJcbiAgICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSBmaWx0ZXJPYmpba2V5XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmNvbEluZm9zW2tleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9ybWF0LCBmaWx0ZXJGb3JtYXR0ZWQsIGZvcm1hdEV4dHJhRGF0YSB9ID0gdGhpcy5jb2xJbmZvc1trZXldO1xuICAgICAgICAgICAgaWYoZmlsdGVyRm9ybWF0dGVkICYmIGZvcm1hdCkge1xuICAgICAgICAgICAgICB0YXJnZXRWYWwgPSBmb3JtYXQocm93W2tleV0sIHJvdywgZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzd2l0Y2ggKGZpbHRlck9ialtrZXldLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuZmlsdGVyTnVtYmVyKHRhcmdldFZhbCwgZmlsdGVyVmFsLCBmaWx0ZXJPYmpba2V5XS52YWx1ZS5jb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLkRBVEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJEYXRlKHRhcmdldFZhbCwgZmlsdGVyVmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLkNVU1RPTTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmZpbHRlckN1c3RvbSh0YXJnZXRWYWwsIGZpbHRlclZhbCwgZmlsdGVyT2JqW2tleV0udmFsdWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmZpbHRlclRleHQodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJOdW1iZXIodGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGNvbXBhcmF0b3IpIHtcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgIHN3aXRjaCAoY29tcGFyYXRvcikge1xuICAgICAgY2FzZSBcIj1cIjpcbiAgICAgIHtcbiAgICAgICAgaWYgKHRhcmdldFZhbCAhPSBmaWx0ZXJWYWwpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcIj5cIjpcbiAgICAgIHtcbiAgICAgICAgaWYgKHRhcmdldFZhbCA8PSBmaWx0ZXJWYWwpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcIj49XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPCBmaWx0ZXJWYWwpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcIjxcIjpcbiAgICAgIHtcbiAgICAgICAgaWYgKHRhcmdldFZhbCA+PSBmaWx0ZXJWYWwpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcIjw9XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPiBmaWx0ZXJWYWwpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcIiE9XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPT0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOdW1iZXIgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgZmlsdGVyRGF0ZSh0YXJnZXRWYWwsIGZpbHRlclZhbCkge1xuICAgIHJldHVybiAodGFyZ2V0VmFsLmdldERhdGUoKSA9PSBmaWx0ZXJWYWwuZ2V0RGF0ZSgpICYmXG4gICAgICAgIHRhcmdldFZhbC5nZXRNb250aCgpID09IGZpbHRlclZhbC5nZXRNb250aCgpICYmXG4gICAgICAgIHRhcmdldFZhbC5nZXRGdWxsWWVhcigpID09IGZpbHRlclZhbC5nZXRGdWxsWWVhcigpKTtcbiAgfVxuXG4gIGZpbHRlckN1c3RvbSh0YXJnZXRWYWwsIGZpbHRlclZhbCwgY2FsbGJhY2tJbmZvKSB7XG4gICAgaWYgKGNhbGxiYWNrSW5mbyAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFja0luZm8gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBjYWxsYmFja0luZm8uY2FsbGJhY2sodGFyZ2V0VmFsLCBjYWxsYmFja0luZm8uY2FsbGJhY2tQYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyVGV4dCh0YXJnZXRWYWwsIGZpbHRlclZhbCk7XG4gIH1cblxuICBmaWx0ZXJUZXh0KHRhcmdldFZhbCwgZmlsdGVyVmFsKSB7XG4gICAgaWYgKHRhcmdldFZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWwpID09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiBHZW5lcmFsIHNlYXJjaCBmdW5jdGlvblxuICAgKiBJdCB3aWxsIHNlYXJjaCBmb3IgdGhlIHRleHQgaWYgdGhlIGlucHV0IGluY2x1ZGVzIHRoYXQgdGV4dDtcbiAgICogSXQgd2lsbCBzZWFyY2ggZm9yIGV4YWN0IG51bWJlciBpZiB0aGUgaW5wdXQgaXMgdGhhdCBudW1iZXJcbiAgICovXG4gIHNlYXJjaChzZWFyY2hUZXh0KSB7XG4gICAgaWYgKHNlYXJjaFRleHQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IG51bGw7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICBsZXQgc2VhcmNoVGV4dEFycmF5ID0gW107XG5cbiAgICAgIGlmICh0aGlzLm11bHRpQ29sdW1uU2VhcmNoKSB7XG4gICAgICAgIHNlYXJjaFRleHRBcnJheSA9IHNlYXJjaFRleHQuc3BsaXQoJyAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFRleHRBcnJheS5wdXNoKHNlYXJjaFRleHQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoIHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb3cpO1xuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgLy8gZm9yIGxvb3BzIGFyZSB1Z2x5LCBidXQgcGVyZm9ybWFuY2UgbWF0dGVycyBoZXJlLlxuICAgICAgICAvLyBBbmQgeW91IGNhbnQgYnJlYWsgZnJvbSBhIGZvckVhY2guXG4gICAgICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Zvci12cy1mb3JlYWNoLzY2XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBrZXlzTGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBrZXlzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmICh0aGlzLmNvbEluZm9zW2tleV0gJiYgcm93W2tleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9ybWF0LCBmaWx0ZXJGb3JtYXR0ZWQsIGZvcm1hdEV4dHJhRGF0YSwgc2VhcmNoYWJsZSwgaGlkZGVuIH0gPSB0aGlzLmNvbEluZm9zW2tleV07XG4gICAgICAgICAgICBsZXQgdGFyZ2V0VmFsID0gcm93W2tleV07XG4gICAgICAgICAgICBpZiAoc2VhcmNoYWJsZSkge1xuICAgICAgICAgICAgICBpZiAoZmlsdGVyRm9ybWF0dGVkICYmIGZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFZhbCA9IGZvcm1hdCh0YXJnZXRWYWwsIHJvdywgZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgdGV4dExlbmd0aCA9IHNlYXJjaFRleHRBcnJheS5sZW5ndGg7IGogPCB0ZXh0TGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJWYWwgPSBzZWFyY2hUZXh0QXJyYXlbal0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKSB7XG4gICAgbGV0IF9kYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgbGV0IF9kYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcblxuICAgIGlmIChfZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIF9kYXRhO1xuXG4gICAgaWYgKHRoaXMucmVtb3RlIHx8ICF0aGlzLmVuYWJsZVBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiBfZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMucGFnZU9iai5zdGFydDsgaSA8PSB0aGlzLnBhZ2VPYmouZW5kOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goX2RhdGFbaV0pO1xuICAgICAgICBpZiAoaSArIDEgPT0gX2RhdGEubGVuZ3RoKWJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBnZXRLZXlGaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlGaWVsZDtcbiAgfVxuXG4gIGdldERhdGFOdW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCkubGVuZ3RoO1xuICB9XG5cbiAgaXNDaGFuZ2VkUGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlT2JqLnN0YXJ0ICYmIHRoaXMucGFnZU9iai5lbmQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBnZXRBbGxSb3drZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIHJvd1t0aGlzLmtleUZpZWxkXTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG59XG47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdG9yZS9UYWJsZURhdGFTdG9yZS5qc1xuICoqLyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2V2ZW50cy9ldmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICB2YXIgZmlsZXNhdmVyID0gcmVxdWlyZSgnLi9maWxlc2F2ZXInKTtcbiAgdmFyIHNhdmVBcyA9IGZpbGVzYXZlci5zYXZlQXNcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcoZGF0YSwga2V5cykge1xuICB2YXIgZGF0YVN0cmluZyA9IFwiXCI7XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRhdGFTdHJpbmc7XG5cbiAgZGF0YVN0cmluZyArPSBrZXlzLmpvaW4oJywnKSArICdcXG4nXG5cbiAgZGF0YS5tYXAoZnVuY3Rpb24ocm93KSB7XG4gICAga2V5cy5tYXAoZnVuY3Rpb24oY29sLCBpKSB7XG4gICAgICBsZXQgY2VsbCA9IHR5cGVvZiByb3dbY29sXSAhPT0gJ3VuZGVmaW5lZCcgPyAoJ1wiJytyb3dbY29sXSsnXCInKSA6IFwiXCI7XG4gICAgICBkYXRhU3RyaW5nICs9IGNlbGw7XG4gICAgICBpZiAoaSsxIDwga2V5cy5sZW5ndGgpXG4gICAgICAgIGRhdGFTdHJpbmcgKz0gJywnO1xuICAgIH0pO1xuXG4gICAgZGF0YVN0cmluZyArPSAnXFxuJztcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGFTdHJpbmc7XG59O1xuXG52YXIgZXhwb3J0Q1NWID0gZnVuY3Rpb24oZGF0YSwga2V5cywgZmlsZW5hbWUpIHtcbiAgdmFyIGRhdGFTdHJpbmcgPSB0b1N0cmluZyhkYXRhLCBrZXlzKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2F2ZUFzKCBuZXcgQmxvYihbZGF0YVN0cmluZ10sIHt0eXBlOiBcInRleHQvcGxhaW47Y2hhcnNldD11dGYtOFwifSksIGZpbGVuYW1lIHx8ICdzcHJlYWRzaGVldC5jc3YnICk7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0Q1NWO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY3N2X2V4cG9ydF91dGlsLmpzXG4gKiovIiwiLyogRmlsZVNhdmVyLmpzXG4gKiBBIHNhdmVBcygpIEZpbGVTYXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMS4yMDE1MTAwM1xuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IE1JVFxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmICovXG4vKmpzbGludCBiaXR3aXNlOiB0cnVlLCBpbmRlbnQ6IDQsIGxheGJyZWFrOiB0cnVlLCBsYXhjb21tYTogdHJ1ZSwgc21hcnR0YWJzOiB0cnVlLCBwbHVzcGx1czogdHJ1ZSAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0ZpbGVTYXZlci5qcyAqL1xuXG52YXIgc2F2ZUFzID0gc2F2ZUFzIHx8IChmdW5jdGlvbih2aWV3KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHQvLyBJRSA8MTAgaXMgZXhwbGljaXRseSB1bnN1cHBvcnRlZFxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiAvTVNJRSBbMS05XVxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXJcblx0XHQgIGRvYyA9IHZpZXcuZG9jdW1lbnRcblx0XHQgIC8vIG9ubHkgZ2V0IFVSTCB3aGVuIG5lY2Vzc2FyeSBpbiBjYXNlIEJsb2IuanMgaGFzbid0IG92ZXJyaWRkZW4gaXQgeWV0XG5cdFx0LCBnZXRfVVJMID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdmlldy5VUkwgfHwgdmlldy53ZWJraXRVUkwgfHwgdmlldztcblx0XHR9XG5cdFx0LCBzYXZlX2xpbmsgPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLCBcImFcIilcblx0XHQsIGNhbl91c2Vfc2F2ZV9saW5rID0gXCJkb3dubG9hZFwiIGluIHNhdmVfbGlua1xuXHRcdCwgY2xpY2sgPSBmdW5jdGlvbihub2RlKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIpO1xuXHRcdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0XHR9XG5cdFx0LCBpc19zYWZhcmkgPSAvVmVyc2lvblxcL1tcXGRcXC5dKy4qU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cdFx0LCB3ZWJraXRfcmVxX2ZzID0gdmlldy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbVxuXHRcdCwgcmVxX2ZzID0gdmlldy5yZXF1ZXN0RmlsZVN5c3RlbSB8fCB3ZWJraXRfcmVxX2ZzIHx8IHZpZXcubW96UmVxdWVzdEZpbGVTeXN0ZW1cblx0XHQsIHRocm93X291dHNpZGUgPSBmdW5jdGlvbihleCkge1xuXHRcdFx0KHZpZXcuc2V0SW1tZWRpYXRlIHx8IHZpZXcuc2V0VGltZW91dCkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRocm93IGV4O1xuXHRcdFx0fSwgMCk7XG5cdFx0fVxuXHRcdCwgZm9yY2Vfc2F2ZWFibGVfdHlwZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcblx0XHQsIGZzX21pbl9zaXplID0gMFxuXHRcdC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc1Mjk3I2M3IGFuZFxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9jb21taXQvNDg1OTMwYSNjb21taXRjb21tZW50LTg3NjgwNDdcblx0XHQvLyBmb3IgdGhlIHJlYXNvbmluZyBiZWhpbmQgdGhlIHRpbWVvdXQgYW5kIHJldm9jYXRpb24gZmxvd1xuXHRcdCwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0ID0gNTAwIC8vIGluIG1zXG5cdFx0LCByZXZva2UgPSBmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHR2YXIgcmV2b2tlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGZpbGUgPT09IFwic3RyaW5nXCIpIHsgLy8gZmlsZSBpcyBhbiBvYmplY3QgVVJMXG5cdFx0XHRcdFx0Z2V0X1VSTCgpLnJldm9rZU9iamVjdFVSTChmaWxlKTtcblx0XHRcdFx0fSBlbHNlIHsgLy8gZmlsZSBpcyBhIEZpbGVcblx0XHRcdFx0XHRmaWxlLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aWYgKHZpZXcuY2hyb21lKSB7XG5cdFx0XHRcdHJldm9rZXIoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmV2b2tlciwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LCBkaXNwYXRjaCA9IGZ1bmN0aW9uKGZpbGVzYXZlciwgZXZlbnRfdHlwZXMsIGV2ZW50KSB7XG5cdFx0XHRldmVudF90eXBlcyA9IFtdLmNvbmNhdChldmVudF90eXBlcyk7XG5cdFx0XHR2YXIgaSA9IGV2ZW50X3R5cGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0dmFyIGxpc3RlbmVyID0gZmlsZXNhdmVyW1wib25cIiArIGV2ZW50X3R5cGVzW2ldXTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGwoZmlsZXNhdmVyLCBldmVudCB8fCBmaWxlc2F2ZXIpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdFx0XHR0aHJvd19vdXRzaWRlKGV4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LCBhdXRvX2JvbSA9IGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXG5cdFx0XHRpZiAoL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYmxvYi50eXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IEJsb2IoW1wiXFx1ZmVmZlwiLCBibG9iXSwge3R5cGU6IGJsb2IudHlwZX0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJsb2I7XG5cdFx0fVxuXHRcdCwgRmlsZVNhdmVyID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdGlmICghbm9fYXV0b19ib20pIHtcblx0XHRcdFx0YmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRmlyc3QgdHJ5IGEuZG93bmxvYWQsIHRoZW4gd2ViIGZpbGVzeXN0ZW0sIHRoZW4gb2JqZWN0IFVSTHNcblx0XHRcdHZhclxuXHRcdFx0XHQgIGZpbGVzYXZlciA9IHRoaXNcblx0XHRcdFx0LCB0eXBlID0gYmxvYi50eXBlXG5cdFx0XHRcdCwgYmxvYl9jaGFuZ2VkID0gZmFsc2Vcblx0XHRcdFx0LCBvYmplY3RfdXJsXG5cdFx0XHRcdCwgdGFyZ2V0X3ZpZXdcblx0XHRcdFx0LCBkaXNwYXRjaF9hbGwgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChmaWxlc2F2ZXIsIFwid3JpdGVzdGFydCBwcm9ncmVzcyB3cml0ZSB3cml0ZWVuZFwiLnNwbGl0KFwiIFwiKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gb24gYW55IGZpbGVzeXMgZXJyb3JzIHJldmVydCB0byBzYXZpbmcgd2l0aCBvYmplY3QgVVJMc1xuXHRcdFx0XHQsIGZzX2Vycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHRhcmdldF92aWV3ICYmIGlzX3NhZmFyaSAmJiB0eXBlb2YgRmlsZVJlYWRlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdFx0Ly8gU2FmYXJpIGRvZXNuJ3QgYWxsb3cgZG93bmxvYWRpbmcgb2YgYmxvYiB1cmxzXG5cdFx0XHRcdFx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0XHRcdHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGJhc2U2NERhdGEgPSByZWFkZXIucmVzdWx0O1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gXCJkYXRhOmF0dGFjaG1lbnQvZmlsZVwiICsgYmFzZTY0RGF0YS5zbGljZShiYXNlNjREYXRhLnNlYXJjaCgvWyw7XS8pKTtcblx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBkb24ndCBjcmVhdGUgbW9yZSBvYmplY3QgVVJMcyB0aGFuIG5lZWRlZFxuXHRcdFx0XHRcdGlmIChibG9iX2NoYW5nZWQgfHwgIW9iamVjdF91cmwpIHtcblx0XHRcdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGFyZ2V0X3ZpZXcpIHtcblx0XHRcdFx0XHRcdHRhcmdldF92aWV3LmxvY2F0aW9uLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgbmV3X3RhYiA9IHZpZXcub3BlbihvYmplY3RfdXJsLCBcIl9ibGFua1wiKTtcblx0XHRcdFx0XHRcdGlmIChuZXdfdGFiID09IHVuZGVmaW5lZCAmJiBpc19zYWZhcmkpIHtcblx0XHRcdFx0XHRcdFx0Ly9BcHBsZSBkbyBub3QgYWxsb3cgd2luZG93Lm9wZW4sIHNlZSBodHRwOi8vYml0Lmx5LzFrWmZmUklcblx0XHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQsIGFib3J0YWJsZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoZmlsZXNhdmVyLnJlYWR5U3RhdGUgIT09IGZpbGVzYXZlci5ET05FKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHQsIGNyZWF0ZV9pZl9ub3RfZm91bmQgPSB7Y3JlYXRlOiB0cnVlLCBleGNsdXNpdmU6IGZhbHNlfVxuXHRcdFx0XHQsIHNsaWNlXG5cdFx0XHQ7XG5cdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXHRcdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRcdG5hbWUgPSBcImRvd25sb2FkXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FuX3VzZV9zYXZlX2xpbmspIHtcblx0XHRcdFx0b2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdHNhdmVfbGluay5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0c2F2ZV9saW5rLmRvd25sb2FkID0gbmFtZTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjbGljayhzYXZlX2xpbmspO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gT2JqZWN0IGFuZCB3ZWIgZmlsZXN5c3RlbSBVUkxzIGhhdmUgYSBwcm9ibGVtIHNhdmluZyBpbiBHb29nbGUgQ2hyb21lIHdoZW5cblx0XHRcdC8vIHZpZXdlZCBpbiBhIHRhYiwgc28gSSBmb3JjZSBzYXZlIHdpdGggYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXG5cdFx0XHQvLyBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MTE1OFxuXHRcdFx0Ly8gVXBkYXRlOiBHb29nbGUgZXJyYW50bHkgY2xvc2VkIDkxMTU4LCBJIHN1Ym1pdHRlZCBpdCBhZ2Fpbjpcblx0XHRcdC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zODk2NDJcblx0XHRcdGlmICh2aWV3LmNocm9tZSAmJiB0eXBlICYmIHR5cGUgIT09IGZvcmNlX3NhdmVhYmxlX3R5cGUpIHtcblx0XHRcdFx0c2xpY2UgPSBibG9iLnNsaWNlIHx8IGJsb2Iud2Via2l0U2xpY2U7XG5cdFx0XHRcdGJsb2IgPSBzbGljZS5jYWxsKGJsb2IsIDAsIGJsb2Iuc2l6ZSwgZm9yY2Vfc2F2ZWFibGVfdHlwZSk7XG5cdFx0XHRcdGJsb2JfY2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBTaW5jZSBJIGNhbid0IGJlIHN1cmUgdGhhdCB0aGUgZ3Vlc3NlZCBtZWRpYSB0eXBlIHdpbGwgdHJpZ2dlciBhIGRvd25sb2FkXG5cdFx0XHQvLyBpbiBXZWJLaXQsIEkgYXBwZW5kIC5kb3dubG9hZCB0byB0aGUgZmlsZW5hbWUuXG5cdFx0XHQvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjU0NDBcblx0XHRcdGlmICh3ZWJraXRfcmVxX2ZzICYmIG5hbWUgIT09IFwiZG93bmxvYWRcIikge1xuXHRcdFx0XHRuYW1lICs9IFwiLmRvd25sb2FkXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZSA9PT0gZm9yY2Vfc2F2ZWFibGVfdHlwZSB8fCB3ZWJraXRfcmVxX2ZzKSB7XG5cdFx0XHRcdHRhcmdldF92aWV3ID0gdmlldztcblx0XHRcdH1cblx0XHRcdGlmICghcmVxX2ZzKSB7XG5cdFx0XHRcdGZzX2Vycm9yKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZzX21pbl9zaXplICs9IGJsb2Iuc2l6ZTtcblx0XHRcdHJlcV9mcyh2aWV3LlRFTVBPUkFSWSwgZnNfbWluX3NpemUsIGFib3J0YWJsZShmdW5jdGlvbihmcykge1xuXHRcdFx0XHRmcy5yb290LmdldERpcmVjdG9yeShcInNhdmVkXCIsIGNyZWF0ZV9pZl9ub3RfZm91bmQsIGFib3J0YWJsZShmdW5jdGlvbihkaXIpIHtcblx0XHRcdFx0XHR2YXIgc2F2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0ZGlyLmdldEZpbGUobmFtZSwgY3JlYXRlX2lmX25vdF9mb3VuZCwgYWJvcnRhYmxlKGZ1bmN0aW9uKGZpbGUpIHtcblx0XHRcdFx0XHRcdFx0ZmlsZS5jcmVhdGVXcml0ZXIoYWJvcnRhYmxlKGZ1bmN0aW9uKHdyaXRlcikge1xuXHRcdFx0XHRcdFx0XHRcdHdyaXRlci5vbndyaXRlZW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldF92aWV3LmxvY2F0aW9uLmhyZWYgPSBmaWxlLnRvVVJMKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlZW5kXCIsIGV2ZW50KTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldm9rZShmaWxlKTtcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdHdyaXRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSB3cml0ZXIuZXJyb3I7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IuY29kZSAhPT0gZXJyb3IuQUJPUlRfRVJSKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZzX2Vycm9yKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgYWJvcnRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d3JpdGVyW1wib25cIiArIGV2ZW50XSA9IGZpbGVzYXZlcltcIm9uXCIgKyBldmVudF07XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0d3JpdGVyLndyaXRlKGJsb2IpO1xuXHRcdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d3JpdGVyLmFib3J0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuV1JJVElORztcblx0XHRcdFx0XHRcdFx0fSksIGZzX2Vycm9yKTtcblx0XHRcdFx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRkaXIuZ2V0RmlsZShuYW1lLCB7Y3JlYXRlOiBmYWxzZX0sIGFib3J0YWJsZShmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHRcdFx0XHQvLyBkZWxldGUgZmlsZSBpZiBpdCBhbHJlYWR5IGV4aXN0c1xuXHRcdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdHNhdmUoKTtcblx0XHRcdFx0XHR9KSwgYWJvcnRhYmxlKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdFx0XHRpZiAoZXguY29kZSA9PT0gZXguTk9UX0ZPVU5EX0VSUikge1xuXHRcdFx0XHRcdFx0XHRzYXZlKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRmc19lcnJvcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0fSksIGZzX2Vycm9yKTtcblx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0fVxuXHRcdCwgRlNfcHJvdG8gPSBGaWxlU2F2ZXIucHJvdG90eXBlXG5cdFx0LCBzYXZlQXMgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0cmV0dXJuIG5ldyBGaWxlU2F2ZXIoYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pO1xuXHRcdH1cblx0O1xuXHQvLyBJRSAxMCsgKG5hdGl2ZSBzYXZlQXMpXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihibG9iLCBuYW1lIHx8IFwiZG93bmxvYWRcIik7XG5cdFx0fTtcblx0fVxuXG5cdEZTX3Byb3RvLmFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGZpbGVzYXZlciA9IHRoaXM7XG5cdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRkaXNwYXRjaChmaWxlc2F2ZXIsIFwiYWJvcnRcIik7XG5cdH07XG5cdEZTX3Byb3RvLnJlYWR5U3RhdGUgPSBGU19wcm90by5JTklUID0gMDtcblx0RlNfcHJvdG8uV1JJVElORyA9IDE7XG5cdEZTX3Byb3RvLkRPTkUgPSAyO1xuXG5cdEZTX3Byb3RvLmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZXN0YXJ0ID1cblx0RlNfcHJvdG8ub25wcm9ncmVzcyA9XG5cdEZTX3Byb3RvLm9ud3JpdGUgPVxuXHRGU19wcm90by5vbmFib3J0ID1cblx0RlNfcHJvdG8ub25lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVlbmQgPVxuXHRcdG51bGw7XG5cblx0cmV0dXJuIHNhdmVBcztcbn0oXG5cdCAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGZcblx0fHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dcblx0fHwgdGhpcy5jb250ZW50XG4pKTtcbi8vIGBzZWxmYCBpcyB1bmRlZmluZWQgaW4gRmlyZWZveCBmb3IgQW5kcm9pZCBjb250ZW50IHNjcmlwdCBjb250ZXh0XG4vLyB3aGlsZSBgdGhpc2AgaXMgbnNJQ29udGVudEZyYW1lTWVzc2FnZU1hbmFnZXJcbi8vIHdpdGggYW4gYXR0cmlidXRlIGBjb250ZW50YCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB3aW5kb3dcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMuc2F2ZUFzID0gc2F2ZUFzO1xufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwpICYmIChkZWZpbmUuYW1kICE9IG51bGwpKSB7XG4gIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNhdmVBcztcbiAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWxlc2F2ZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIHRoaXMuY3VycmVudEZpbHRlciA9IHt9O1xuICAgIH1cblxuICAgIGhhbmRsZUZpbHRlcihkYXRhRmllbGQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclR5cGUgPSB0eXBlIHx8IENvbnN0LkZJTFRFUl9UWVBFLkNVU1RPTTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyB2YWx1ZSBvZiB0aGUgZmlsdGVyIGlzIGFuIG9iamVjdFxuICAgICAgICAgICAgbGV0IGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlW3Byb3BdIHx8IHZhbHVlW3Byb3BdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgb2JqZWN0IHByb3BlcnRpZXMgaXMgdW5kZWZpbmVkIG9yIGVtcHR5LCB3ZSByZW1vdmUgdGhlIGZpbHRlclxuICAgICAgICAgICAgKGhhc1ZhbHVlKSA/IHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdID0ge3ZhbHVlOiB2YWx1ZSwgdHlwZTogZmlsdGVyVHlwZX0gOiBkZWxldGUgdGhpcy5jdXJyZW50RmlsdGVyW2RhdGFGaWVsZF07XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyW2RhdGFGaWVsZF0gPSB7dmFsdWU6IHZhbHVlLnRyaW0oKSwgdHlwZTogZmlsdGVyVHlwZX07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdvbkZpbHRlckNoYW5nZScsIHRoaXMuY3VycmVudEZpbHRlcik7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRmlsdGVyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgRGF0ZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvRGF0ZSc7XG5pbXBvcnQgVGV4dEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVGV4dCc7XG5pbXBvcnQgU2VsZWN0RmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZWxlY3QnO1xuaW1wb3J0IE51bWJlckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvTnVtYmVyJztcblxuY2xhc3MgVGFibGVIZWFkZXJDb2x1bW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIgPSB0aGlzLmhhbmRsZUZpbHRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ29sdW1uQ2xpY2soZSl7XG4gICAgaWYoIXRoaXMucHJvcHMuZGF0YVNvcnQpcmV0dXJuO1xuICAgIGxldCBvcmRlciA9IHRoaXMucHJvcHMuc29ydCA9PSBDb25zdC5TT1JUX0RFU0M/Q29uc3QuU09SVF9BU0M6Q29uc3QuU09SVF9ERVNDO1xuICAgIHRoaXMucHJvcHMub25Tb3J0KG9yZGVyLCB0aGlzLnByb3BzLmRhdGFGaWVsZCk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXIodmFsdWUsIHR5cGUpIHtcbiAgICB0aGlzLnByb3BzLmZpbHRlci5lbWl0dGVyLmhhbmRsZUZpbHRlcih0aGlzLnByb3BzLmRhdGFGaWVsZCwgdmFsdWUsIHR5cGUpO1xuICB9XG5cbiAgZ2V0RmlsdGVycygpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuZmlsdGVyLnR5cGUpIHtcbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuVEVYVDoge1xuICAgICAgICByZXR1cm4gPFRleHRGaWx0ZXIgey4uLnRoaXMucHJvcHMuZmlsdGVyfSBjb2x1bW5OYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVufSBmaWx0ZXJIYW5kbGVyPXt0aGlzLmhhbmRsZUZpbHRlcn0gLz47XG4gICAgICB9XG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLlNFTEVDVDoge1xuICAgICAgICByZXR1cm4gPFNlbGVjdEZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSOiB7XG4gICAgICAgIHJldHVybiA8TnVtYmVyRmlsdGVyIHsuLi50aGlzLnByb3BzLmZpbHRlcn0gY29sdW1uTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbn0gZmlsdGVySGFuZGxlcj17dGhpcy5oYW5kbGVGaWx0ZXJ9IC8+O1xuICAgICAgfVxuICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5EQVRFOiB7XG4gICAgICAgIHJldHVybiA8RGF0ZUZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuQ1VTVE9NOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlci5nZXRFbGVtZW50KHRoaXMuaGFuZGxlRmlsdGVyLCB0aGlzLnByb3BzLmZpbHRlci5jdXN0b21GaWx0ZXJQYXJhbWV0ZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucmVmcy5pbm5lckRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkXCIsIHRoaXMucHJvcHMuZGF0YUZpZWxkKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGxldCBkZWZhdWx0Q2FyZXQ7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCE9PW51bGw/cGFyc2VJbnQodGhpcy5wcm9wcy53aWR0aCk6bnVsbDtcbiAgICB2YXIgdGhTdHlsZSA9IHtcbiAgICAgIHRleHRBbGlnbjogdGhpcy5wcm9wcy5kYXRhQWxpZ24sXG4gICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLmhpZGRlbj9cIm5vbmVcIjpudWxsLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgbWF4V2lkdGg6IHdpZHRoXG4gICAgfTtcbiAgICBpZih0aGlzLnByb3BzLnNvcnRJbmRpY2F0b3IpIHtcbiAgICAgIGRlZmF1bHRDYXJldCA9ICghdGhpcy5wcm9wcy5kYXRhU29ydCkgPyBudWxsIDogKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcmRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIHN0eWxlPXt7bWFyZ2luOiAnMTBweCAwIDEwcHggNXB4JywgY29sb3I6ICcjY2NjJ319Pjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcHVwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIHN0eWxlPXt7bWFyZ2luOiAnMTBweCAwJywgY29sb3I6ICcjY2NjJ319Pjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHNvcnRDYXJldCA9IHRoaXMucHJvcHMuc29ydCA/IFV0aWwucmVuZGVyUmVhY3RTb3J0Q2FyZXQodGhpcy5wcm9wcy5zb3J0KSA6IGRlZmF1bHRDYXJldDtcblxuICAgIHZhciBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc05hbWUrXCIgXCIrKHRoaXMucHJvcHMuZGF0YVNvcnQ/XCJzb3J0LWNvbHVtblwiOlwiXCIpO1xuICAgIHJldHVybihcbiAgICAgIDx0aCByZWY9J2hlYWRlci1jb2wnIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e3RoU3R5bGV9PlxuICAgICAgICA8ZGl2IHJlZj1cImlubmVyRGl2XCIgY2xhc3NOYW1lPVwidGgtaW5uZXIgdGFibGUtaGVhZGVyLWNvbHVtblwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb2x1bW5DbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn17c29ydENhcmV0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuZmlsdGVyID8gdGhpcy5nZXRGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgPC90aD5cbiAgICApXG4gIH1cbn1cblxudmFyIGZpbHRlclR5cGVBcnJheSA9IFtdO1xuZm9yIChsZXQga2V5IGluIENvbnN0LkZJTFRFUl9UWVBFKSB7XG4gIGZpbHRlclR5cGVBcnJheS5wdXNoKENvbnN0LkZJTFRFUl9UWVBFW2tleV0pO1xufVxuXG5UYWJsZUhlYWRlckNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGFGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YUFsaWduOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhU29ydDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uU29ydDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGFGb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBpc0tleTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGVkaXRhYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBoaWRkZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hhYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0RnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbHVtbkNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgZmlsdGVyRm9ybWF0dGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgc29ydDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZm9ybWF0RXh0cmFEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBmaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKGZpbHRlclR5cGVBcnJheSksXG4gICAgZGVsYXk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAvLyBmb3IgU2VsZWN0RmlsdGVyXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMubnVtYmVyKSAvL2ZvciBOdW1iZXJGaWx0ZXJcbiAgICAgICAgXSksXG4gICAgbnVtYmVyQ29tcGFyYXRvcnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zdHJpbmcpLFxuICAgIGVtaXR0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2V0RWxlbWVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY3VzdG9tRmlsdGVyUGFyYW1ldGVyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICB9KSxcbiAgc29ydEluZGljYXRvcjogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cblRhYmxlSGVhZGVyQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YUFsaWduOiBcImxlZnRcIixcbiAgZGF0YVNvcnQ6IGZhbHNlLFxuICBkYXRhRm9ybWF0OiB1bmRlZmluZWQsXG4gIGlzS2V5OiBmYWxzZSxcbiAgZWRpdGFibGU6IHRydWUsXG4gIG9uU29ydDogdW5kZWZpbmVkLFxuICBoaWRkZW46IGZhbHNlLFxuICBzZWFyY2hhYmxlOiB0cnVlLFxuICBjbGFzc05hbWU6IFwiXCIsXG4gIHdpZHRoOiBudWxsLFxuICBzb3J0RnVuYzogdW5kZWZpbmVkLFxuICBjb2x1bW5DbGFzc05hbWU6ICcnLFxuICBmaWx0ZXJGb3JtYXR0ZWQ6IGZhbHNlLFxuICBzb3J0OiB1bmRlZmluZWQsXG4gIGZvcm1hdEV4dHJhRGF0YTogdW5kZWZpbmVkLFxuICBmaWx0ZXI6IHVuZGVmaW5lZCxcbiAgc29ydEluZGljYXRvcjogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVIZWFkZXJDb2x1bW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUhlYWRlckNvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBEYXRlRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXREZWZhdWx0RGF0ZSgpIHtcbiAgICAgICAgbGV0IGRlZmF1bHREYXRlICA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBhcHByb3ByaWF0ZSBmb3JtYXQgZm9yIHRoZSBpbnB1dCB0eXBlPWRhdGUsIGkuZS4gXCJZWVlZLU1NLUREXCJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHREYXRlID0gYCR7ZGVmYXVsdFZhbHVlLmdldEZ1bGxZZWFyKCl9LSR7KFwiMFwiICsgKGRlZmF1bHRWYWx1ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0tJHsoXCIwXCIgKyBkZWZhdWx0VmFsdWUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGU7XG4gICAgfVxuXG4gICAgZmlsdGVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgaWYgKGRhdGVWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKG5ldyBEYXRlKGRhdGVWYWx1ZSksIENvbnN0LkZJTFRFUl9UWVBFLkRBVEUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKG51bGwsIENvbnN0LkZJTFRFUl9UWVBFLkRBVEUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRoaXMucmVmcy5pbnB1dERhdGUuZGVmYXVsdFZhbHVlO1xuICAgICAgICBpZiAoZGF0ZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIobmV3IERhdGUoZGF0ZVZhbHVlKSwgQ29uc3QuRklMVEVSX1RZUEUuREFURSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgcmVmPVwiaW5wdXREYXRlXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXIgZGF0ZS1maWx0ZXIgZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zZXREZWZhdWx0RGF0ZSgpfSAvPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbkRhdGVGaWx0ZXIucHJvcFR5cGVzID0ge1xuICAgIGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbHVtbk5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL0RhdGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcblxuY2xhc3MgVGV4dEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRpbWVvdXQgPSBudWxsO1xuXHR9XG5cblx0ZmlsdGVyKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMudGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLnByb3BzLmZpbHRlckhhbmRsZXIoZmlsdGVyVmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlRFWFQpO1xuXHRcdH0sIHNlbGYucHJvcHMuZGVsYXkpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHRoaXMucmVmcy5pbnB1dFRleHQuZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIodGhpcy5yZWZzLmlucHV0VGV4dC5kZWZhdWx0VmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlRFWFQpO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW5wdXQgcmVmPVwiaW5wdXRUZXh0XCJcblx0XHRcdFx0ICAgY2xhc3NOYW1lPVwiZmlsdGVyIHRleHQtZmlsdGVyIGZvcm0tY29udHJvbFwiXG5cdFx0XHRcdCAgIHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0ICAgb25DaGFuZ2U9e3RoaXMuZmlsdGVyfVxuXHRcdFx0XHQgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCBgRW50ZXIgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH1cblx0XHRcdFx0ICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiBcIlwifSAvPlxuXHRcdCk7XG5cdH1cbn07XG5cblRleHRGaWx0ZXIucHJvcFR5cGVzID0ge1xuXHRmaWx0ZXJIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdGRlbGF5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXHRwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0Y29sdW1uTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVGV4dEZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGRlbGF5OiBDb25zdC5GSUxURVJfREVMQVlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvVGV4dC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBTZWxlY3RGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLmZpbHRlciA9IHRoaXMuZmlsdGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzUGxhY2Vob2xkZXJTZWxlY3RlZDogKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlID09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0IXRoaXMucHJvcHMub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkpXG5cdFx0fTtcblx0fVxuXG5cdGZpbHRlcihldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2lzUGxhY2Vob2xkZXJTZWxlY3RlZDogKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJcIil9KTtcblx0XHR0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoZXZlbnQudGFyZ2V0LnZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5TRUxFQ1QpO1xuXHR9XG5cblx0Z2V0T3B0aW9ucygpIHtcblx0XHRsZXQgb3B0aW9uVGFncyA9IFtdO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XG5cdFx0b3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PVwiLTFcIiB2YWx1ZT1cIlwiPnt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBTZWxlY3QgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH08L29wdGlvbj4pO1xuXHRcdE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2tleX0+e29wdGlvbnNba2V5XX08L29wdGlvbj4pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBvcHRpb25UYWdzO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHRoaXMucmVmcy5zZWxlY3RJbnB1dC52YWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHRoaXMucmVmcy5zZWxlY3RJbnB1dC52YWx1ZSwgQ29uc3QuRklMVEVSX1RZUEUuU0VMRUNUKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGVjdENsYXNzID0gY2xhc3NTZXQoXCJmaWx0ZXJcIiwgXCJzZWxlY3QtZmlsdGVyXCIsIFwiZm9ybS1jb250cm9sXCIsXG5cdFx0XHRcdFx0XHRcdHtcInBsYWNlaG9sZGVyLXNlbGVjdGVkXCI6IHRoaXMuc3RhdGUuaXNQbGFjZWhvbGRlclNlbGVjdGVkfSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlbGVjdCByZWY9XCJzZWxlY3RJbnB1dFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzZWxlY3RDbGFzc31cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5maWx0ZXJ9XG5cdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgIT0gdW5kZWZpbmVkKSA/IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIDogXCJcIn0+XG5cdFx0XHRcdHt0aGlzLmdldE9wdGlvbnMoKX1cblx0XHRcdDwvc2VsZWN0PlxuXHRcdCk7XG5cdH1cbn07XG5cblNlbGVjdEZpbHRlci5wcm9wVHlwZXMgPSB7XG5cdGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblx0cGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdGNvbHVtbk5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvU2VsZWN0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5cbmNvbnN0IGxlZ2FsQ29tcGFyYXRvcnMgPSBbXCI9XCIsIFwiPlwiLCBcIj49XCIsIFwiPFwiLCBcIjw9XCIsIFwiIT1cIl07XG5cbmNsYXNzIE51bWJlckZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm51bWJlckNvbXBhcmF0b3JzID0gdGhpcy5wcm9wcy5udW1iZXJDb21wYXJhdG9ycyB8fCBsZWdhbENvbXBhcmF0b3JzO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNQbGFjZWhvbGRlclNlbGVjdGVkOiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vcHRpb25zICYmIHRoaXMucHJvcHMub3B0aW9ucy5pbmRleE9mKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLm51bWJlcikgPT0gLTEpKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTnVtYmVyID0gdGhpcy5vbkNoYW5nZU51bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTnVtYmVyU2V0ID0gdGhpcy5vbkNoYW5nZU51bWJlclNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvciA9IHRoaXMub25DaGFuZ2VDb21wYXJhdG9yLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VOdW1iZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IGZpbHRlclZhbHVlLCBjb21wYXJhdG9yOiBzZWxmLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZX0sXG4gICAgICAgICAgICAgICAgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSKTtcbiAgICAgICAgfSwgc2VsZi5wcm9wcy5kZWxheSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VOdW1iZXJTZXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNQbGFjZWhvbGRlclNlbGVjdGVkOiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIlwiKX0pO1xuICAgICAgICBpZiAodGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoe251bWJlcjogZXZlbnQudGFyZ2V0LnZhbHVlLCBjb21wYXJhdG9yOiB0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZX0sXG4gICAgICAgICAgICBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVIpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlQ29tcGFyYXRvcihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLm51bWJlckZpbHRlci52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcih7bnVtYmVyOiB0aGlzLnJlZnMubnVtYmVyRmlsdGVyLnZhbHVlLCBjb21wYXJhdG9yOiBldmVudC50YXJnZXQudmFsdWV9LFxuICAgICAgICAgICAgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSKTtcbiAgICB9XG5cbiAgICBnZXRDb21wYXJhdG9yT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PVwiLTFcIj48L29wdGlvbj4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVyQ29tcGFyYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT17aX0gdmFsdWU9e3RoaXMubnVtYmVyQ29tcGFyYXRvcnNbaV19Pnt0aGlzLm51bWJlckNvbXBhcmF0b3JzW2ldfTwvb3B0aW9uPik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvcHRpb25UYWdzO1xuICAgIH1cblxuICAgIGdldE51bWJlck9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBvcHRpb25UYWdzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XG5cbiAgICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PVwiLTFcIiB2YWx1ZT1cIlwiPnt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBTZWxlY3QgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH08L29wdGlvbj4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbnNbaV19PntvcHRpb25zW2ldfTwvb3B0aW9uPik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvcHRpb25UYWdzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWUgJiYgdGhpcy5yZWZzLm51bWJlckZpbHRlci52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IHRoaXMucmVmcy5udW1iZXJGaWx0ZXIudmFsdWUsXG4gICAgICAgICAgICAgICAgY29tcGFyYXRvcjogdGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWV9LFxuICAgICAgICAgICAgICAgIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgc2VsZWN0Q2xhc3MgPSBjbGFzc1NldChcInNlbGVjdC1maWx0ZXJcIiwgXCJudW1iZXItZmlsdGVyLWlucHV0XCIsIFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcInBsYWNlaG9sZGVyLXNlbGVjdGVkXCI6IHRoaXMuc3RhdGUuaXNQbGFjZWhvbGRlclNlbGVjdGVkIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBudW1iZXItZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCByZWY9XCJudW1iZXJGaWx0ZXJDb21wYXJhdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm51bWJlci1maWx0ZXItY29tcGFyYXRvciBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VDb21wYXJhdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUuY29tcGFyYXRvciA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRDb21wYXJhdG9yT3B0aW9ucygpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIHsodGhpcy5wcm9wcy5vcHRpb25zKSA/IDxzZWxlY3QgcmVmPVwibnVtYmVyRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0Q2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZU51bWJlclNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17KHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0TnVtYmVyT3B0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiA6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPVwibnVtYmVyRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm51bWJlci1maWx0ZXItaW5wdXQgZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgYEVudGVyICR7dGhpcy5wcm9wcy5jb2x1bW5OYW1lfS4uLmB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLm51bWJlciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIn0gLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5OdW1iZXJGaWx0ZXIucHJvcFR5cGVzID0ge1xuICAgIGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLm51bWJlciksXG4gICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBudW1iZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNvbXBhcmF0b3I6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihsZWdhbENvbXBhcmF0b3JzKVxuICAgIH0pLFxuICAgIGRlbGF5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG51bWJlckNvbXBhcmF0b3JzOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKCFwcm9wc1twcm9wTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzW3Byb3BOYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbXBhcmF0b3JJc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlZ2FsQ29tcGFyYXRvcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGVnYWxDb21wYXJhdG9yc1tqXSA9PT0gcHJvcHNbcHJvcE5hbWVdW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmF0b3JJc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb21wYXJhdG9ySXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYE51bWJlciBjb21wYXJhdG9yIHByb3ZpZGVkIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBvbmx5ICR7bGVnYWxDb21wYXJhdG9yc31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sdW1uTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuTnVtYmVyRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWxheTogQ29uc3QuRklMVEVSX0RFTEFZXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL051bWJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=