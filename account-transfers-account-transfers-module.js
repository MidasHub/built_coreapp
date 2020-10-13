(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-transfers-account-transfers-module"],{

/***/ "./src/app/account-transfers/account-transfers-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/account-transfers/account-transfers-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AccountTransfersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTransfersRoutingModule", function() { return AccountTransfersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
/* harmony import */ var _view_standing_instructions_view_standing_instructions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-standing-instructions/view-standing-instructions.component */ "./src/app/account-transfers/view-standing-instructions/view-standing-instructions.component.ts");
/* harmony import */ var _edit_standing_instructions_edit_standing_instructions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-standing-instructions/edit-standing-instructions.component */ "./src/app/account-transfers/edit-standing-instructions/edit-standing-instructions.component.ts");
/* harmony import */ var _create_standing_instructions_create_standing_instructions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-standing-instructions/create-standing-instructions.component */ "./src/app/account-transfers/create-standing-instructions/create-standing-instructions.component.ts");
/* harmony import */ var _make_account_transfers_make_account_transfers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./make-account-transfers/make-account-transfers.component */ "./src/app/account-transfers/make-account-transfers/make-account-transfers.component.ts");
/* harmony import */ var _list_standing_instructions_list_standing_instructions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-standing-instructions/list-standing-instructions.component */ "./src/app/account-transfers/list-standing-instructions/list-standing-instructions.component.ts");
/* harmony import */ var _list_transactions_list_transactions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-transactions/list-transactions.component */ "./src/app/account-transfers/list-transactions/list-transactions.component.ts");
/* harmony import */ var _view_account_transfer_view_account_transfer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-account-transfer/view-account-transfer.component */ "./src/app/account-transfers/view-account-transfer/view-account-transfer.component.ts");
/* harmony import */ var _common_resolvers_view_standing_instructions_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common-resolvers/view-standing-instructions.resolver */ "./src/app/account-transfers/common-resolvers/view-standing-instructions.resolver.ts");
/* harmony import */ var _common_resolvers_standing_instructions_data_and_template_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common-resolvers/standing-instructions-data-and-template.resolver */ "./src/app/account-transfers/common-resolvers/standing-instructions-data-and-template.resolver.ts");
/* harmony import */ var _common_resolvers_standing_instructions_template_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common-resolvers/standing-instructions-template.resolver */ "./src/app/account-transfers/common-resolvers/standing-instructions-template.resolver.ts");
/* harmony import */ var _common_resolvers_make_account_transfer_template_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common-resolvers/make-account-transfer-template.resolver */ "./src/app/account-transfers/common-resolvers/make-account-transfer-template.resolver.ts");
/* harmony import */ var _common_resolvers_list_transactions_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common-resolvers/list-transactions.resolver */ "./src/app/account-transfers/common-resolvers/list-transactions.resolver.ts");
/* harmony import */ var _common_resolvers_view_account_transfer_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common-resolvers/view-account-transfer.resolver */ "./src/app/account-transfers/common-resolvers/view-account-transfer.resolver.ts");
/** Angular Imports */


/** Translation Imports */

/** Custom Components */







/** Custom Resolvers */








/** Loans Route. */
var routes = [
    {
        path: '',
        children: [
            {
                path: 'create-standing-instructions',
                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Create Standing Instructions'), breadcrumb: 'Create Standing Instructions', routeParamBreadcrumb: 'Create Standing Instructions' },
                component: _create_standing_instructions_create_standing_instructions_component__WEBPACK_IMPORTED_MODULE_5__["CreateStandingInstructionsComponent"],
                resolve: {
                    standingIntructionsTemplate: _common_resolvers_standing_instructions_template_resolver__WEBPACK_IMPORTED_MODULE_12__["StandingInstructionsTemplateResolver"]
                }
            },
            {
                path: 'make-account-transfer',
                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Account Transfer'), breadcrumb: 'Account Transfer', routeParamBreadcrumb: 'Account Transfer' },
                component: _make_account_transfers_make_account_transfers_component__WEBPACK_IMPORTED_MODULE_6__["MakeAccountTransfersComponent"],
                resolve: {
                    accountTransferTemplate: _common_resolvers_make_account_transfer_template_resolver__WEBPACK_IMPORTED_MODULE_13__["MakeAccountTransferTemplateResolver"]
                }
            },
            {
                path: 'list-standing-instructions',
                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('List Standing Instructions'), breadcrumb: 'List Standing Instructions', routeParamBreadcrumb: 'List Standing Instructions' },
                component: _list_standing_instructions_list_standing_instructions_component__WEBPACK_IMPORTED_MODULE_7__["ListStandingInstructionsComponent"],
                resolve: {
                    standingIntructionsTemplate: _common_resolvers_standing_instructions_template_resolver__WEBPACK_IMPORTED_MODULE_12__["StandingInstructionsTemplateResolver"]
                }
            },
            {
                path: 'account-transfers',
                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('View Account Transfer'), breadcrumb: 'Account Transfers', routeParamBreadcrumb: false },
                children: [
                    {
                        path: ':transferid',
                        data: { routeParamBreadcrumb: 'transferid' },
                        component: _view_account_transfer_view_account_transfer_component__WEBPACK_IMPORTED_MODULE_9__["ViewAccountTransferComponent"],
                        resolve: {
                            viewAccountTransferData: _common_resolvers_view_account_transfer_resolver__WEBPACK_IMPORTED_MODULE_15__["ViewAccountTransferResolver"]
                        }
                    }
                ]
            },
            {
                path: ':standingInstructionsId',
                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Standing Instructions'), routeParamBreadcrumb: 'standingInstructionsId' },
                children: [
                    {
                        path: 'view',
                        data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('View Standing Instructions'), breadcrumb: 'view', routeParamBreadcrumb: false },
                        component: _view_standing_instructions_view_standing_instructions_component__WEBPACK_IMPORTED_MODULE_3__["ViewStandingInstructionsComponent"],
                        resolve: {
                            standingInstructionsData: _common_resolvers_view_standing_instructions_resolver__WEBPACK_IMPORTED_MODULE_10__["ViewStandingInstructionsResolver"],
                        },
                    },
                    {
                        path: 'edit',
                        data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Edit Standing Instructions'), breadcrumb: 'edit', routeParamBreadcrumb: false },
                        component: _edit_standing_instructions_edit_standing_instructions_component__WEBPACK_IMPORTED_MODULE_4__["EditStandingInstructionsComponent"],
                        resolve: {
                            standingInstructionsDataAndTemplate: _common_resolvers_standing_instructions_data_and_template_resolver__WEBPACK_IMPORTED_MODULE_11__["StandingInstructionsDataAndTemplateResolver"],
                        },
                    },
                    {
                        path: 'list-account-transactions',
                        data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('List Account Transactions'), breadcrumb: 'List Account Transactions', routeParamBreadcrumb: 'List Account Transactions' },
                        component: _list_transactions_list_transactions_component__WEBPACK_IMPORTED_MODULE_8__["ListTransactionsComponent"],
                        resolve: {
                            listTransactionData: _common_resolvers_list_transactions_resolver__WEBPACK_IMPORTED_MODULE_14__["ListTransactionsResolver"]
                        }
                    },
                ]
            },
        ]
    },
];
var AccountTransfersRoutingModule = /** @class */ (function () {
    function AccountTransfersRoutingModule() {
    }
    AccountTransfersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountTransfersRoutingModule });
    AccountTransfersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountTransfersRoutingModule_Factory(t) { return new (t || AccountTransfersRoutingModule)(); }, providers: [
            _common_resolvers_view_standing_instructions_resolver__WEBPACK_IMPORTED_MODULE_10__["ViewStandingInstructionsResolver"],
            _common_resolvers_standing_instructions_data_and_template_resolver__WEBPACK_IMPORTED_MODULE_11__["StandingInstructionsDataAndTemplateResolver"],
            _common_resolvers_standing_instructions_template_resolver__WEBPACK_IMPORTED_MODULE_12__["StandingInstructionsTemplateResolver"],
            _common_resolvers_make_account_transfer_template_resolver__WEBPACK_IMPORTED_MODULE_13__["MakeAccountTransferTemplateResolver"],
            _common_resolvers_list_transactions_resolver__WEBPACK_IMPORTED_MODULE_14__["ListTransactionsResolver"],
            _common_resolvers_view_account_transfer_resolver__WEBPACK_IMPORTED_MODULE_15__["ViewAccountTransferResolver"]
        ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AccountTransfersRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountTransfersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountTransfersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: [],
                providers: [
                    _common_resolvers_view_standing_instructions_resolver__WEBPACK_IMPORTED_MODULE_10__["ViewStandingInstructionsResolver"],
                    _common_resolvers_standing_instructions_data_and_template_resolver__WEBPACK_IMPORTED_MODULE_11__["StandingInstructionsDataAndTemplateResolver"],
                    _common_resolvers_standing_instructions_template_resolver__WEBPACK_IMPORTED_MODULE_12__["StandingInstructionsTemplateResolver"],
                    _common_resolvers_make_account_transfer_template_resolver__WEBPACK_IMPORTED_MODULE_13__["MakeAccountTransferTemplateResolver"],
                    _common_resolvers_list_transactions_resolver__WEBPACK_IMPORTED_MODULE_14__["ListTransactionsResolver"],
                    _common_resolvers_view_account_transfer_resolver__WEBPACK_IMPORTED_MODULE_15__["ViewAccountTransferResolver"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/account-transfers/account-transfers.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/account-transfers/account-transfers.module.ts ***!
  \***************************************************************/
/*! exports provided: AccountTransfersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTransfersModule", function() { return AccountTransfersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_transfers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-transfers-routing.module */ "./src/app/account-transfers/account-transfers-routing.module.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _view_standing_instructions_view_standing_instructions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-standing-instructions/view-standing-instructions.component */ "./src/app/account-transfers/view-standing-instructions/view-standing-instructions.component.ts");
/* harmony import */ var _edit_standing_instructions_edit_standing_instructions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-standing-instructions/edit-standing-instructions.component */ "./src/app/account-transfers/edit-standing-instructions/edit-standing-instructions.component.ts");
/* harmony import */ var _create_standing_instructions_create_standing_instructions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-standing-instructions/create-standing-instructions.component */ "./src/app/account-transfers/create-standing-instructions/create-standing-instructions.component.ts");
/* harmony import */ var _make_account_transfers_make_account_transfers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./make-account-transfers/make-account-transfers.component */ "./src/app/account-transfers/make-account-transfers/make-account-transfers.component.ts");
/* harmony import */ var _list_standing_instructions_list_standing_instructions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-standing-instructions/list-standing-instructions.component */ "./src/app/account-transfers/list-standing-instructions/list-standing-instructions.component.ts");
/* harmony import */ var _list_transactions_list_transactions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-transactions/list-transactions.component */ "./src/app/account-transfers/list-transactions/list-transactions.component.ts");
/* harmony import */ var _view_account_transfer_view_account_transfer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-account-transfer/view-account-transfer.component */ "./src/app/account-transfers/view-account-transfer/view-account-transfer.component.ts");
/** Angular Imports */


/** Custom Modules */




/** Custom Components */








/**
 * Account Transfers Module
 *
 * All components related to Account Transfers functions should be declared here.
 */
var AccountTransfersModule = /** @class */ (function () {
    function AccountTransfersModule() {
    }
    AccountTransfersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountTransfersModule });
    AccountTransfersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountTransfersModule_Factory(t) { return new (t || AccountTransfersModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"], _account_transfers_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountTransfersRoutingModule"]]] });
    return AccountTransfersModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountTransfersModule, { declarations: [_view_standing_instructions_view_standing_instructions_component__WEBPACK_IMPORTED_MODULE_6__["ViewStandingInstructionsComponent"],
        _edit_standing_instructions_edit_standing_instructions_component__WEBPACK_IMPORTED_MODULE_7__["EditStandingInstructionsComponent"],
        _create_standing_instructions_create_standing_instructions_component__WEBPACK_IMPORTED_MODULE_8__["CreateStandingInstructionsComponent"],
        _make_account_transfers_make_account_transfers_component__WEBPACK_IMPORTED_MODULE_9__["MakeAccountTransfersComponent"],
        _list_standing_instructions_list_standing_instructions_component__WEBPACK_IMPORTED_MODULE_10__["ListStandingInstructionsComponent"],
        _list_transactions_list_transactions_component__WEBPACK_IMPORTED_MODULE_11__["ListTransactionsComponent"],
        _view_account_transfer_view_account_transfer_component__WEBPACK_IMPORTED_MODULE_12__["ViewAccountTransferComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"], _account_transfers_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountTransfersRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountTransfersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"], _account_transfers_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountTransfersRoutingModule"]],
                declarations: [
                    _view_standing_instructions_view_standing_instructions_component__WEBPACK_IMPORTED_MODULE_6__["ViewStandingInstructionsComponent"],
                    _edit_standing_instructions_edit_standing_instructions_component__WEBPACK_IMPORTED_MODULE_7__["EditStandingInstructionsComponent"],
                    _create_standing_instructions_create_standing_instructions_component__WEBPACK_IMPORTED_MODULE_8__["CreateStandingInstructionsComponent"],
                    _make_account_transfers_make_account_transfers_component__WEBPACK_IMPORTED_MODULE_9__["MakeAccountTransfersComponent"],
                    _list_standing_instructions_list_standing_instructions_component__WEBPACK_IMPORTED_MODULE_10__["ListStandingInstructionsComponent"],
                    _list_transactions_list_transactions_component__WEBPACK_IMPORTED_MODULE_11__["ListTransactionsComponent"],
                    _view_account_transfer_view_account_transfer_component__WEBPACK_IMPORTED_MODULE_12__["ViewAccountTransferComponent"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/account-transfers/account-transfers.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/account-transfers/account-transfers.service.ts ***!
  \****************************************************************/
/*! exports provided: AccountTransfersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTransfersService", function() { return AccountTransfersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/** Angular Imports */




/**
 * Account Transfers Service.
 */
var AccountTransfersService = /** @class */ (function () {
    function AccountTransfersService(http) {
        this.http = http;
    }
    /**
     * @params standingInstructionsId
     * Returns the details of a particular Standing Instruction
     */
    AccountTransfersService.prototype.getStandingInstructionsData = function (standingInstructionsId) {
        return this.http.get("/standinginstructions/" + standingInstructionsId);
    };
    AccountTransfersService.prototype.getStandingInstructionsDataAndTemplate = function (standingInstructionsId) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('associations', 'template');
        return this.http.get("/standinginstructions/" + standingInstructionsId, { params: httpParams });
    };
    AccountTransfersService.prototype.updateStandingInstructionsData = function (standinginstructionsId, data) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('command', 'update');
        return this.http.put("/standinginstructions/" + standinginstructionsId, data, { params: httpParams });
    };
    AccountTransfersService.prototype.getStandingInstructionsTemplate = function (clientId, officeId, accountTypeId, formValue) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('fromAccountType', accountTypeId)
            .set('fromClientId', clientId)
            .set('fromOfficeId', officeId);
        if (formValue) {
            var propNames = Object.getOwnPropertyNames(formValue);
            for (var i = 0; i < propNames.length; i++) {
                var propName = propNames[i];
                httpParams = httpParams.set(propName, formValue[propName]);
            }
        }
        return this.http.get("/standinginstructions/template", { params: httpParams });
    };
    AccountTransfersService.prototype.createStandingInstructions = function (data) {
        return this.http.post("/standinginstructions", data);
    };
    AccountTransfersService.prototype.newAccountTranferResource = function (id, accountTypeId, formValue) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('fromAccountId', id)
            .set('fromAccountType', accountTypeId);
        if (formValue) {
            var propNames = Object.getOwnPropertyNames(formValue);
            for (var i = 0; i < propNames.length; i++) {
                var propName = propNames[i];
                httpParams = httpParams.set(propName, formValue[propName]);
            }
        }
        return this.http.get("/accounttransfers/template", { params: httpParams });
    };
    AccountTransfersService.prototype.createAccountTransfer = function (data) {
        return this.http.post("/accounttransfers", data);
    };
    /**
     * @param clientId Client Id
     * @param clientName Client Name
     * @param fromAccountId Account Id
     * @param locale Locale
     * @param dateFormat Date Format
     * @returns {Observable<any>} Standing Instructions
     */
    AccountTransfersService.prototype.getStandingInstructions = function (searchData) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var propNames = Object.getOwnPropertyNames(searchData);
        for (var i = 0; i < propNames.length; i++) {
            var propName = propNames[i];
            if (!(searchData[propName] === '' || searchData[propName] === undefined || searchData[propName] === null)) {
                httpParams = httpParams.set(propName, searchData[propName]);
            }
        }
        return this.http.get("/standinginstructions", { params: httpParams });
    };
    AccountTransfersService.prototype.deleteStandingInstrucions = function (id) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('command', 'delete');
        return this.http.delete("/standinginstructions/" + id, { params: httpParams });
    };
    AccountTransfersService.prototype.getStandingInstructionsTransactions = function (standingInstructionsId, dateFormat, locale) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('associations', 'transactions')
            .set('dateFormat', dateFormat)
            .set('limit', '14')
            .set('locale', locale)
            .set('offset', '0');
        return this.http.get("/standinginstructions/" + standingInstructionsId, { params: httpParams });
    };
    AccountTransfersService.prototype.getViewAccountTransferDetails = function (transferId) {
        return this.http.get("/accounttransfers/" + transferId);
    };
    AccountTransfersService.ɵfac = function AccountTransfersService_Factory(t) { return new (t || AccountTransfersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    AccountTransfersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountTransfersService, factory: AccountTransfersService.ɵfac, providedIn: 'root' });
    return AccountTransfersService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountTransfersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/common-resolvers/list-transactions.resolver.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/account-transfers/common-resolvers/list-transactions.resolver.ts ***!
  \**********************************************************************************/
/*! exports provided: ListTransactionsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTransactionsResolver", function() { return ListTransactionsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/* harmony import */ var app_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/** Angular Imports */

/** Custom Services */





/**
 * View Standing Instructions resolver.
 */
var ListTransactionsResolver = /** @class */ (function () {
    /**
     * @param {AccountTransfersService} accountTransfersService Account Transfers service.
     * @param {SettingsService} settingsService Settings Service.
     */
    function ListTransactionsResolver(accountTransfersService, settingsService) {
        this.accountTransfersService = accountTransfersService;
        this.settingsService = settingsService;
    }
    /**
     * Returns the Standing Instructions Data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    ListTransactionsResolver.prototype.resolve = function (route) {
        var id = route.parent.paramMap.get('standingInstructionsId');
        var dateFormat = this.settingsService.dateFormat;
        var locale = this.settingsService.language.code;
        return this.accountTransfersService.getStandingInstructionsTransactions(id, dateFormat, locale);
    };
    ListTransactionsResolver.ɵfac = function ListTransactionsResolver_Factory(t) { return new (t || ListTransactionsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"])); };
    ListTransactionsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListTransactionsResolver, factory: ListTransactionsResolver.ɵfac });
    return ListTransactionsResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTransactionsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"] }, { type: app_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/common-resolvers/make-account-transfer-template.resolver.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/account-transfers/common-resolvers/make-account-transfer-template.resolver.ts ***!
  \***********************************************************************************************/
/*! exports provided: MakeAccountTransferTemplateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeAccountTransferTemplateResolver", function() { return MakeAccountTransferTemplateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * View Standing Instructions resolver.
 */
var MakeAccountTransferTemplateResolver = /** @class */ (function () {
    /**
     * @param {accountTransfersService} AccountTransfersService Account Transfers service.
     */
    function MakeAccountTransferTemplateResolver(accountTransfersService) {
        this.accountTransfersService = accountTransfersService;
    }
    /**
     * Returns the Standing Instructions Data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    MakeAccountTransferTemplateResolver.prototype.resolve = function (route) {
        var accountType = route.queryParamMap.get('accountType');
        switch (accountType) {
            case 'fromloans':
                this.accountTypeId = '1';
                this.id = route.queryParamMap.get('loanId');
                break;
            case 'fromsavings':
                this.accountTypeId = '2';
                this.id = route.queryParamMap.get('savingsId');
                break;
            default:
                this.accountTypeId = '0';
        }
        return this.accountTransfersService.newAccountTranferResource(this.id, this.accountTypeId);
    };
    MakeAccountTransferTemplateResolver.ɵfac = function MakeAccountTransferTemplateResolver_Factory(t) { return new (t || MakeAccountTransferTemplateResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"])); };
    MakeAccountTransferTemplateResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MakeAccountTransferTemplateResolver, factory: MakeAccountTransferTemplateResolver.ɵfac });
    return MakeAccountTransferTemplateResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakeAccountTransferTemplateResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/common-resolvers/standing-instructions-data-and-template.resolver.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/account-transfers/common-resolvers/standing-instructions-data-and-template.resolver.ts ***!
  \********************************************************************************************************/
/*! exports provided: StandingInstructionsDataAndTemplateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingInstructionsDataAndTemplateResolver", function() { return StandingInstructionsDataAndTemplateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * View Standing Instructions resolver.
 */
var StandingInstructionsDataAndTemplateResolver = /** @class */ (function () {
    /**
     * @param {accountTransfersService} AccountTransfersService Account Transfers service.
     */
    function StandingInstructionsDataAndTemplateResolver(accountTransfersService) {
        this.accountTransfersService = accountTransfersService;
    }
    /**
     * Returns the Standing Instructions Data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    StandingInstructionsDataAndTemplateResolver.prototype.resolve = function (route) {
        var standingInstructionsId = route.parent.paramMap.get('standingInstructionsId');
        return this.accountTransfersService.getStandingInstructionsDataAndTemplate(standingInstructionsId);
    };
    StandingInstructionsDataAndTemplateResolver.ɵfac = function StandingInstructionsDataAndTemplateResolver_Factory(t) { return new (t || StandingInstructionsDataAndTemplateResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"])); };
    StandingInstructionsDataAndTemplateResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StandingInstructionsDataAndTemplateResolver, factory: StandingInstructionsDataAndTemplateResolver.ɵfac });
    return StandingInstructionsDataAndTemplateResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StandingInstructionsDataAndTemplateResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/common-resolvers/standing-instructions-template.resolver.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/account-transfers/common-resolvers/standing-instructions-template.resolver.ts ***!
  \***********************************************************************************************/
/*! exports provided: StandingInstructionsTemplateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingInstructionsTemplateResolver", function() { return StandingInstructionsTemplateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * View Standing Instructions resolver.
 */
var StandingInstructionsTemplateResolver = /** @class */ (function () {
    /**
     * @param {accountTransfersService} AccountTransfersService Account Transfers service.
     */
    function StandingInstructionsTemplateResolver(accountTransfersService) {
        this.accountTransfersService = accountTransfersService;
    }
    /**
     * Returns the Standing Instructions Data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    StandingInstructionsTemplateResolver.prototype.resolve = function (route) {
        var officeId = route.queryParamMap.get('officeId');
        var accountType = route.queryParamMap.get('accountType');
        var clientId = route.parent.paramMap.get('clientId');
        switch (accountType) {
            case 'fromloans':
                this.accountTypeId = '1';
                break;
            case 'fromsavings':
                this.accountTypeId = '2';
                break;
            default:
                this.accountTypeId = '0';
        }
        return this.accountTransfersService.getStandingInstructionsTemplate(clientId, officeId, this.accountTypeId);
    };
    StandingInstructionsTemplateResolver.ɵfac = function StandingInstructionsTemplateResolver_Factory(t) { return new (t || StandingInstructionsTemplateResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"])); };
    StandingInstructionsTemplateResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StandingInstructionsTemplateResolver, factory: StandingInstructionsTemplateResolver.ɵfac });
    return StandingInstructionsTemplateResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StandingInstructionsTemplateResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/common-resolvers/view-account-transfer.resolver.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/account-transfers/common-resolvers/view-account-transfer.resolver.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewAccountTransferResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAccountTransferResolver", function() { return ViewAccountTransferResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * View Account Transfer data resolver.
 */
var ViewAccountTransferResolver = /** @class */ (function () {
    /**
     * @param {AccountTransfersService} AccountTransfersService Savings service.
     */
    function ViewAccountTransferResolver(accountTransfersService) {
        this.accountTransfersService = accountTransfersService;
    }
    /**
     * Returns the View Account Transfer data.
     * @returns {Observable<any>}
     */
    ViewAccountTransferResolver.prototype.resolve = function (route) {
        var transferId = route.paramMap.get('transferid');
        return this.accountTransfersService.getViewAccountTransferDetails(transferId);
    };
    ViewAccountTransferResolver.ɵfac = function ViewAccountTransferResolver_Factory(t) { return new (t || ViewAccountTransferResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"])); };
    ViewAccountTransferResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewAccountTransferResolver, factory: ViewAccountTransferResolver.ɵfac });
    return ViewAccountTransferResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewAccountTransferResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/common-resolvers/view-standing-instructions.resolver.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/account-transfers/common-resolvers/view-standing-instructions.resolver.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewStandingInstructionsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStandingInstructionsResolver", function() { return ViewStandingInstructionsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * View Standing Instructions resolver.
 */
var ViewStandingInstructionsResolver = /** @class */ (function () {
    /**
     * @param {accountTransfersService} AccountTransfersService Account Transfers service.
     */
    function ViewStandingInstructionsResolver(accountTransfersService) {
        this.accountTransfersService = accountTransfersService;
    }
    /**
     * Returns the Standing Instructions Data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    ViewStandingInstructionsResolver.prototype.resolve = function (route) {
        var standingInstructionsId = route.parent.paramMap.get('standingInstructionsId');
        return this.accountTransfersService.getStandingInstructionsData(standingInstructionsId);
    };
    ViewStandingInstructionsResolver.ɵfac = function ViewStandingInstructionsResolver_Factory(t) { return new (t || ViewStandingInstructionsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"])); };
    ViewStandingInstructionsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewStandingInstructionsResolver, factory: ViewStandingInstructionsResolver.ɵfac });
    return ViewStandingInstructionsResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewStandingInstructionsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_1__["AccountTransfersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/create-standing-instructions/create-standing-instructions.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/account-transfers/create-standing-instructions/create-standing-instructions.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CreateStandingInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStandingInstructionsComponent", function() { return CreateStandingInstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/* harmony import */ var app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../directives/has-permission/has-permission.directive */ "./src/app/directives/has-permission/has-permission.directive.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");

/** Angular Imports */




/** Custom Services */

















function CreateStandingInstructionsComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transferType_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", transferType_r36.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", transferType_r36.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Transfer Type is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var priorityType_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", priorityType_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", priorityType_r37.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Priority is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var statusType_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", statusType_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", statusType_r38.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Status is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var fromAccountType_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fromAccountType_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", fromAccountType_r39.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              From Account Type is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var fromAccount_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fromAccount_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n                ", fromAccount_r40.productName, " - ", fromAccount_r40.accountNo, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              From Account is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var destinationType_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", destinationType_r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", destinationType_r41.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Destination is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var toOfficeType_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", toOfficeType_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", toOfficeType_r42.name, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              To Office is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var toClientType_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", toClientType_r43.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", toClientType_r43.displayName, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Beneficiary is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var toAccountType_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", toAccountType_r44.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", toAccountType_r44.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              To Account Type is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var toAccount_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", toAccount_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n                ", toAccount_r45.productName, " - ", toAccount_r45.accountNo, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              To Account is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instructionsType_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", instructionsType_r46.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", instructionsType_r46.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Standing Instruction Type is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_error_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Amount is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_error_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Valid From Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_error_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Valid Till Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var recurrenceType_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", recurrenceType_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", recurrenceType_r47.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_221_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Recurrence Type is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_error_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Recurrence Interval is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_option_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var recurrenceFrequencyType_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", recurrenceFrequencyType_r48.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", recurrenceFrequencyType_r48.value, "\n              ");
} }
function CreateStandingInstructionsComponent_mat_error_244_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Recurrence Frequency is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_mat_error_259_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              On Month Day is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateStandingInstructionsComponent_button_269_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateStandingInstructionsComponent_button_269_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r35.createStandingInstructionsForm.valid);
} }
var _c0 = function () { return ["../"]; };
/**
 * Create Standing Instructions
 */
var CreateStandingInstructionsComponent = /** @class */ (function () {
    /**
     * Retrieves the standing instructions template from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     * @param {FormBuilder} formBuilder Form Builder
     * @param {Router} router Router
     * @param {AccountTransfersService} accountTransfersService Account Transfers Service
     * @param {SettingsService} settingsService Settings Service
     * @param {DatePipe} datePipe Date Pipe
     */
    function CreateStandingInstructionsComponent(formBuilder, route, router, accountTransfersService, settingsService, datePipe) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountTransfersService = accountTransfersService;
        this.settingsService = settingsService;
        this.datePipe = datePipe;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date(2100, 0, 1);
        /** Allow Client Edit */
        this.allowclientedit = true;
        this.route.data.subscribe(function (data) {
            _this.standingIntructionsTemplate = data.standingIntructionsTemplate;
            _this.setParams();
            _this.setOptions();
        });
    }
    /** Sets the value from the URL */
    CreateStandingInstructionsComponent.prototype.setParams = function () {
        this.officeId = this.route.snapshot.queryParams['officeId'];
        this.accountType = this.route.snapshot.queryParams['accountType'];
        this.clientId = this.route.parent.snapshot.params['clientId'];
        switch (this.accountType) {
            case 'fromloans':
                this.accountTypeId = '1';
                break;
            case 'fromsavings':
                this.accountTypeId = '2';
                break;
            default:
                this.accountTypeId = '0';
        }
    };
    /**
     * Creates and sets the create standing instructions form.
     */
    CreateStandingInstructionsComponent.prototype.ngOnInit = function () {
        this.createCreateStandingInstructionsForm();
        this.buildDependencies();
        this.createStandingInstructionsForm.patchValue({
            'applicant': this.standingIntructionsTemplate.fromClient.displayName
        });
    };
    /**
     * Creates the standing instruction form.
     */
    CreateStandingInstructionsComponent.prototype.createCreateStandingInstructionsForm = function () {
        this.createStandingInstructionsForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'applicant': [{ value: '', disabled: true }],
            'transferType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'priority': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'status': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'fromAccountType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'fromAccountId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'destination': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'toOfficeId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'toClientId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'toAccountType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'toAccountId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'instructionType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'amount': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'validFrom': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'validTill': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'recurrenceType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'recurrenceInterval': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'recurrenceFrequency': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'recurrenceOnMonthDay': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    /** Sets options value */
    CreateStandingInstructionsComponent.prototype.setOptions = function () {
        this.transferTypeData = this.standingIntructionsTemplate.transferTypeOptions;
        this.priorityTypeData = this.standingIntructionsTemplate.priorityOptions;
        this.statusTypeData = this.standingIntructionsTemplate.statusOptions;
        this.fromAccountTypeData = this.standingIntructionsTemplate.fromAccountTypeOptions;
        this.fromAccountData = this.standingIntructionsTemplate.fromAccountOptions;
        this.destinationTypeData = [{ id: 1, value: 'own account' }, { id: 2, value: 'with in bank' }];
        this.toOfficeTypeData = this.standingIntructionsTemplate.toOfficeOptions;
        this.toClientTypeData = this.standingIntructionsTemplate.toClientOptions;
        this.toAccountTypeData = this.standingIntructionsTemplate.toAccountTypeOptions;
        this.toAccountData = this.standingIntructionsTemplate.toAccountOptions;
        this.instructionTypeData = this.standingIntructionsTemplate.instructionTypeOptions;
        this.recurrenceTypeData = this.standingIntructionsTemplate.recurrenceTypeOptions;
        this.recurrenceFrequencyTypeData = this.standingIntructionsTemplate.recurrenceFrequencyOptions;
    };
    /**
     * Changes the value on change of destination value
     */
    CreateStandingInstructionsComponent.prototype.buildDependencies = function () {
        var _this = this;
        this.createStandingInstructionsForm.get('destination').valueChanges.subscribe(function (destination) {
            if (destination === 1) {
                _this.allowclientedit = false;
                _this.createStandingInstructionsForm.patchValue({
                    'toOfficeId': _this.officeId,
                    'toClientId': _this.clientId
                });
                _this.createStandingInstructionsForm.controls['toOfficeId'].disable();
                _this.createStandingInstructionsForm.controls['toClientId'].disable();
                _this.changeEvent();
            }
            else {
                _this.allowclientedit = true;
                _this.createStandingInstructionsForm.patchValue({
                    'toOfficeId': '',
                    'toClientId': ''
                });
                _this.createStandingInstructionsForm.controls['toOfficeId'].enable();
                _this.createStandingInstructionsForm.controls['toClientId'].enable();
            }
        });
    };
    /** Executes on change of various select options */
    CreateStandingInstructionsComponent.prototype.changeEvent = function () {
        var _this = this;
        var formValue = this.refineObject(this.createStandingInstructionsForm.value);
        this.accountTransfersService.getStandingInstructionsTemplate(this.clientId, this.officeId, this.accountTypeId, formValue).subscribe(function (response) {
            _this.standingIntructionsTemplate = response;
            _this.setOptions();
        });
    };
    /** Refine Object
     * Removes the object param with null or '' values
     */
    CreateStandingInstructionsComponent.prototype.refineObject = function (dataObj) {
        var propNames = Object.getOwnPropertyNames(dataObj);
        for (var i = 0; i < propNames.length; i++) {
            var propName = propNames[i];
            if (dataObj[propName] === null || dataObj[propName] === undefined || dataObj[propName] === '') {
                delete dataObj[propName];
            }
        }
        return dataObj;
    };
    /**
     * Submits the standing instructions form
     */
    CreateStandingInstructionsComponent.prototype.submit = function () {
        var _this = this;
        var dateFormat = this.settingsService.dateFormat;
        var locale = this.settingsService.language.code;
        var standingInstructionData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.createStandingInstructionsForm.value), { dateFormat: dateFormat,
            locale: locale, monthDayFormat: 'dd MMMM', fromClientId: this.clientId, fromOfficeId: this.officeId, validFrom: this.datePipe.transform(this.createStandingInstructionsForm.value.validFrom, dateFormat), validTill: this.datePipe.transform(this.createStandingInstructionsForm.value.validTill, dateFormat), recurrenceOnMonthDay: this.datePipe.transform(this.createStandingInstructionsForm.value.recurrenceOnMonthDay, 'dd MMMM') });
        delete standingInstructionData['destination'];
        delete standingInstructionData['applicant'];
        this.accountTransfersService.createStandingInstructions(standingInstructionData).subscribe(function (response) {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    CreateStandingInstructionsComponent.ɵfac = function CreateStandingInstructionsComponent_Factory(t) { return new (t || CreateStandingInstructionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_5__["AccountTransfersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"])); };
    CreateStandingInstructionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateStandingInstructionsComponent, selectors: [["mifosx-create-standing-instructions"]], decls: 275, vars: 48, consts: [[1, "container"], [3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "2%", "fxLayout.lt-md", "column"], ["fxFlex", "48%"], ["matInput", "", "required", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "applicant"], ["required", "", "formControlName", "transferType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", "formControlName", "priority"], ["required", "", "formControlName", "status"], ["required", "", "formControlName", "fromAccountType", 3, "selectionChange"], ["required", "", "formControlName", "fromAccountId", 3, "selectionChange"], ["required", "", "formControlName", "destination"], ["required", "", "formControlName", "toOfficeId", 3, "selectionChange"], ["required", "", "formControlName", "toClientId", 3, "selectionChange"], ["required", "", "formControlName", "toAccountType", 3, "selectionChange"], ["required", "", "formControlName", "toAccountId", 3, "selectionChange"], ["formControlName", "instructionType"], ["type", "number", "matInput", "", "required", "", "formControlName", "amount"], ["matInput", "", "required", "", "formControlName", "validFrom", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["validFromDatePicker", ""], ["matInput", "", "required", "", "formControlName", "validTill", 3, "min", "max", "matDatepicker"], ["validTillDatePicker", ""], ["required", "", "formControlName", "recurrenceType"], ["type", "number", "matInput", "", "required", "", "formControlName", "recurrenceInterval"], ["required", "", "formControlName", "recurrenceFrequency"], ["required", "", "matInput", "", "formControlName", "recurrenceOnMonthDay", 3, "min", "max", "matDatepicker"], ["recurrenceOnMonthDayDatePicker", ""], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "mifosxHasPermission"], [3, "value"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function CreateStandingInstructionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreateStandingInstructionsComponent_mat_error_17_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Applicant");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CreateStandingInstructionsComponent_Template_mat_select_selectionChange_33_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CreateStandingInstructionsComponent_mat_option_35_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CreateStandingInstructionsComponent_mat_error_38_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CreateStandingInstructionsComponent_mat_option_48_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, CreateStandingInstructionsComponent_mat_error_51_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, CreateStandingInstructionsComponent_mat_option_61_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CreateStandingInstructionsComponent_mat_error_64_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "From Account Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CreateStandingInstructionsComponent_Template_mat_select_selectionChange_72_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, CreateStandingInstructionsComponent_mat_option_74_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, CreateStandingInstructionsComponent_mat_error_77_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "From Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CreateStandingInstructionsComponent_Template_mat_select_selectionChange_85_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, CreateStandingInstructionsComponent_mat_option_87_Template, 2, 3, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, CreateStandingInstructionsComponent_mat_error_90_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Destination");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, CreateStandingInstructionsComponent_mat_option_100_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, CreateStandingInstructionsComponent_mat_error_103_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "To Office");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "mat-select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CreateStandingInstructionsComponent_Template_mat_select_selectionChange_111_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, CreateStandingInstructionsComponent_mat_option_113_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, CreateStandingInstructionsComponent_mat_error_116_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Beneficiary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "mat-select", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CreateStandingInstructionsComponent_Template_mat_select_selectionChange_124_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, CreateStandingInstructionsComponent_mat_option_126_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, CreateStandingInstructionsComponent_mat_error_129_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "To Account Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "mat-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CreateStandingInstructionsComponent_Template_mat_select_selectionChange_137_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, CreateStandingInstructionsComponent_mat_option_139_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, CreateStandingInstructionsComponent_mat_error_142_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "To Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "mat-select", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CreateStandingInstructionsComponent_Template_mat_select_selectionChange_150_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, CreateStandingInstructionsComponent_mat_option_152_Template, 2, 3, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, CreateStandingInstructionsComponent_mat_error_155_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Standing Instruction Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "mat-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](165, CreateStandingInstructionsComponent_mat_option_165_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](168, CreateStandingInstructionsComponent_mat_error_168_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](178, CreateStandingInstructionsComponent_mat_error_178_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Validity From");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "mat-datepicker-toggle", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "mat-datepicker", null, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](193, CreateStandingInstructionsComponent_mat_error_193_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Validity To");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "mat-datepicker-toggle", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "mat-datepicker", null, 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](208, CreateStandingInstructionsComponent_mat_error_208_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Recurrence Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "mat-select", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](218, CreateStandingInstructionsComponent_mat_option_218_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](221, CreateStandingInstructionsComponent_mat_error_221_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Interval");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](231, CreateStandingInstructionsComponent_mat_error_231_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Recurrence Frequency");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "mat-select", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](241, CreateStandingInstructionsComponent_mat_option_241_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](244, CreateStandingInstructionsComponent_mat_error_244_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "On Month Day");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "mat-datepicker-toggle", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "mat-datepicker", null, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](259, CreateStandingInstructionsComponent_mat_error_259_Template, 5, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "mat-card-actions", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](269, CreateStandingInstructionsComponent_button_269_Template, 2, 1, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "\n");
        } if (rf & 2) {
            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](191);
            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](206);
            var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](257);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createStandingInstructionsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.name.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.transferTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.transferType.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.priorityTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.priority.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statusTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.status.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fromAccountTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.fromAccountType.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fromAccountData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.fromAccountId.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.destinationTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.destination.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toOfficeTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.toOfficeId.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toClientTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.toClientId.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toAccountTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.toAccountType.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toAccountData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.toAccountId.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.instructionTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.instructionType.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.amount.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.validFrom.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.validTill.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recurrenceTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.recurrenceType.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.recurrenceInterval.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recurrenceFrequencyTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.recurrenceFrequency.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createStandingInstructionsForm.controls.recurrenceOnMonthDay.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](47, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mifosxHasPermission", "CREATE_STANDINGINSTRUCTION");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_14__["HasPermissionDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtdHJhbnNmZXJzL2NyZWF0ZS1zdGFuZGluZy1pbnN0cnVjdGlvbnMvY3JlYXRlLXN0YW5kaW5nLWluc3RydWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return CreateStandingInstructionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateStandingInstructionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-create-standing-instructions',
                templateUrl: './create-standing-instructions.component.html',
                styleUrls: ['./create-standing-instructions.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_5__["AccountTransfersService"] }, { type: app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/edit-standing-instructions/edit-standing-instructions.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/account-transfers/edit-standing-instructions/edit-standing-instructions.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EditStandingInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStandingInstructionsComponent", function() { return EditStandingInstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/* harmony import */ var app_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../directives/has-permission/has-permission.directive */ "./src/app/directives/has-permission/has-permission.directive.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");
/** Angular Imports */




/** Custom Services */

















function EditStandingInstructionsComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var priorityType_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", priorityType_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", priorityType_r14.value, "\n              ");
} }
function EditStandingInstructionsComponent_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              Priority is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditStandingInstructionsComponent_mat_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var statusType_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", statusType_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", statusType_r15.value, "\n              ");
} }
function EditStandingInstructionsComponent_mat_error_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              Status is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditStandingInstructionsComponent_mat_option_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instructionsType_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", instructionsType_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", instructionsType_r16.value, "\n              ");
} }
function EditStandingInstructionsComponent_mat_error_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              Valid From Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditStandingInstructionsComponent_mat_error_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              Valid Till Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditStandingInstructionsComponent_mat_option_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var recurrenceType_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", recurrenceType_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", recurrenceType_r17.value, "\n              ");
} }
function EditStandingInstructionsComponent_mat_error_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              Recurrence Type is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditStandingInstructionsComponent_mat_option_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var recurrenceFrequencyType_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", recurrenceFrequencyType_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", recurrenceFrequencyType_r18.value, "\n              ");
} }
function EditStandingInstructionsComponent_button_217_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditStandingInstructionsComponent_button_217_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r13.editStandingInstructionsForm.valid);
} }
var _c0 = function () { return ["../view"]; };
/**
 * Edit Standing Instructions
 */
var EditStandingInstructionsComponent = /** @class */ (function () {
    /**
     * Retrieves the standing instructions template from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     * @param {FormBuilder} formBuilder Form Builder
     * @param {Router} router Router
     * @param {AccountTransfersService} accountTransfersService Account Transfers Service
     * @param {SettingsService} settingsService Settings Service
     * @param {DatePipe} datePipe Date Pipe
     */
    function EditStandingInstructionsComponent(formBuilder, route, router, accountTransfersService, settingsService, datePipe) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountTransfersService = accountTransfersService;
        this.settingsService = settingsService;
        this.datePipe = datePipe;
        /** Allow Client Edit */
        this.allowclientedit = false;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        this.route.data.subscribe(function (data) {
            _this.standingInstructionsData = data.standingInstructionsDataAndTemplate;
            _this.standingInstructionsId = data.standingInstructionsDataAndTemplate.id;
            if (_this.standingInstructionsData.fromClient.id === _this.standingInstructionsData.toClient.id) {
                _this.allowclientedit = false;
            }
            _this.setOptions();
        });
    }
    /**
     * Creates and sets the edit standing instructions form.
     */
    EditStandingInstructionsComponent.prototype.ngOnInit = function () {
        this.createEditStandingInstructionsForm();
        var presentDate = new Date();
        var n = presentDate.getFullYear();
        if (this.standingInstructionsData.recurrenceOnMonthDay) {
            this.standingInstructionsData.recurrenceOnMonthDay.push(n);
        }
        this.editStandingInstructionsForm.patchValue({
            'name': this.standingInstructionsData.name,
            'applicant': this.standingInstructionsData.fromClient.displayName,
            'type': this.standingInstructionsData.transferType.value,
            'priority': this.standingInstructionsData.priority.id,
            'status': this.standingInstructionsData.status.id,
            'fromAccountType': this.standingInstructionsData.fromAccountType.value,
            'fromAccount': this.standingInstructionsData.fromAccount.productName,
            'destination': this.allowclientedit ? 'Within Bank' : 'Own Account',
            'toOffice': this.standingInstructionsData.toOffice.name,
            'toClientId': this.standingInstructionsData.toClient.displayName,
            'toAccountType': this.standingInstructionsData.toAccountType.value,
            'toAccount': this.standingInstructionsData.toAccount.productName,
            'instructionType': this.standingInstructionsData.instructionType.id,
            'amount': this.standingInstructionsData.amount,
            'validFrom': this.standingInstructionsData.validFrom && new Date(this.standingInstructionsData.validFrom),
            'validTill': this.standingInstructionsData.validTill && new Date(this.standingInstructionsData.validTill),
            'recurrenceType': this.standingInstructionsData.recurrenceType.id,
            'recurrenceInterval': this.standingInstructionsData.recurrenceInterval,
            'recurrenceFrequency': this.standingInstructionsData.recurrenceFrequency.id,
            'recurrenceOnMonthDay': this.standingInstructionsData.recurrenceOnMonthDay && new Date(this.standingInstructionsData.recurrenceOnMonthDay)
        });
    };
    /**
     * Creates the standing instructions form.
     */
    EditStandingInstructionsComponent.prototype.createEditStandingInstructionsForm = function () {
        this.editStandingInstructionsForm = this.formBuilder.group({
            'name': [{ value: '', disabled: true }],
            'applicant': [{ value: '', disabled: true }],
            'type': [{ value: '', disabled: true }],
            'priority': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'status': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'fromAccountType': [{ value: '', disabled: true }],
            'fromAccount': [{ value: '', disabled: true }],
            'destination': [{ value: '', disabled: true }],
            'toOffice': [{ value: '', disabled: true }],
            'toClientId': [{ value: '', disabled: true }],
            'toAccountType': [{ value: '', disabled: true }],
            'toAccount': [{ value: '', disabled: true }],
            'instructionType': '',
            'amount': '',
            'validFrom': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'validTill': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'recurrenceType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'recurrenceInterval': '',
            'recurrenceFrequency': '',
            'recurrenceOnMonthDay': ''
        });
    };
    EditStandingInstructionsComponent.prototype.setOptions = function () {
        this.priorityTypeData = this.standingInstructionsData.priorityOptions;
        this.statusTypeData = this.standingInstructionsData.statusOptions;
        this.instructionTypeData = this.standingInstructionsData.instructionTypeOptions;
        this.recurrenceTypeData = this.standingInstructionsData.recurrenceTypeOptions;
        this.recurrenceFrequencyTypeData = this.standingInstructionsData.recurrenceFrequencyOptions;
    };
    /**
     * Submits the standing instructions form
     */
    EditStandingInstructionsComponent.prototype.submit = function () {
        var _this = this;
        var dateFormat = this.settingsService.dateFormat;
        var locale = this.settingsService.language.code;
        var standingInstructionData = {
            amount: this.editStandingInstructionsForm.value.amount,
            dateFormat: dateFormat,
            instructionType: this.editStandingInstructionsForm.value.instructionType,
            locale: locale,
            monthDayFormat: 'dd MMMM',
            priority: this.editStandingInstructionsForm.value.priority,
            recurrenceFrequency: this.editStandingInstructionsForm.value.recurrenceFrequency,
            recurrenceInterval: this.editStandingInstructionsForm.value.recurrenceInterval,
            recurrenceOnMonthDay: this.datePipe.transform(this.editStandingInstructionsForm.value.recurrenceOnMonthDay, 'dd MMMM'),
            recurrenceType: this.editStandingInstructionsForm.value.recurrenceType,
            status: this.editStandingInstructionsForm.value.status,
            validFrom: this.datePipe.transform(this.editStandingInstructionsForm.value.validFrom, dateFormat),
            validTill: this.datePipe.transform(this.editStandingInstructionsForm.value.validTill, dateFormat)
        };
        this.accountTransfersService.updateStandingInstructionsData(this.standingInstructionsId, standingInstructionData).subscribe(function (response) {
            _this.router.navigate(['../view'], { relativeTo: _this.route });
        });
    };
    EditStandingInstructionsComponent.ɵfac = function EditStandingInstructionsComponent_Factory(t) { return new (t || EditStandingInstructionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_4__["AccountTransfersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"])); };
    EditStandingInstructionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditStandingInstructionsComponent, selectors: [["mifosx-edit-standing-instructions"]], decls: 223, vars: 26, consts: [[1, "container"], [3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "2%", "fxLayout.lt-md", "column"], ["fxFlex", "48%"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "applicant"], ["matInput", "", "formControlName", "type"], ["matInput", "", "formControlName", "fromAccountType"], ["required", "", "formControlName", "priority"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["required", "", "formControlName", "status"], ["matInput", "", "formControlName", "fromAccount"], ["matInput", "", "formControlName", "destination"], ["matInput", "", "formControlName", "toOffice"], ["matInput", "", "formControlName", "toClientId"], ["matInput", "", "formControlName", "toAccountType"], ["matInput", "", "formControlName", "toAccount"], ["formControlName", "instructionType"], ["matInput", "", "formControlName", "amount"], ["matInput", "", "required", "", "formControlName", "validFrom", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["validFromDatePicker", ""], ["matInput", "", "required", "", "formControlName", "validTill", 3, "min", "max", "matDatepicker"], ["validTillDatePicker", ""], ["required", "", "formControlName", "recurrenceType"], ["matInput", "", "formControlName", "recurrenceInterval"], ["formControlName", "recurrenceFrequency"], ["matInput", "", "formControlName", "recurrenceOnMonthDay", 3, "min", "max", "matDatepicker"], ["recurrenceOnMonthDayDatePicker", ""], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "mifosxHasPermission"], [3, "value"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function EditStandingInstructionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Applicant");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "From Account Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, EditStandingInstructionsComponent_mat_option_49_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, EditStandingInstructionsComponent_mat_error_52_Template, 5, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EditStandingInstructionsComponent_mat_option_62_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, EditStandingInstructionsComponent_mat_error_65_Template, 5, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "From Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Destination");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "To Office");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Beneficiary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "To Account Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "To Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Standing Instruction Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, EditStandingInstructionsComponent_mat_option_123_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Validity From");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "mat-datepicker-toggle", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "mat-datepicker", null, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, EditStandingInstructionsComponent_mat_error_147_Template, 5, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Validity To");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "mat-datepicker-toggle", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "mat-datepicker", null, 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, EditStandingInstructionsComponent_mat_error_162_Template, 5, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Recurrence Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-select", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, EditStandingInstructionsComponent_mat_option_172_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, EditStandingInstructionsComponent_mat_error_175_Template, 5, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Interval");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Recurrence Frequency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-select", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, EditStandingInstructionsComponent_mat_option_193_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "On Month Day");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "mat-datepicker-toggle", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "mat-datepicker", null, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "mat-card-actions", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](217, EditStandingInstructionsComponent_button_217_Template, 2, 1, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "\n");
        } if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](145);
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](160);
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](207);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editStandingInstructionsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.priorityTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editStandingInstructionsForm.controls.priority.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editStandingInstructionsForm.controls.status.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.instructionTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editStandingInstructionsForm.controls.validFrom.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editStandingInstructionsForm.controls.validTill.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recurrenceTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editStandingInstructionsForm.controls.recurrenceType.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recurrenceFrequencyTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "UPDATE_STANDINGINSTRUCTION");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_13__["HasPermissionDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtdHJhbnNmZXJzL2VkaXQtc3RhbmRpbmctaW5zdHJ1Y3Rpb25zL2VkaXQtc3RhbmRpbmctaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return EditStandingInstructionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditStandingInstructionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-edit-standing-instructions',
                templateUrl: './edit-standing-instructions.component.html',
                styleUrls: ['./edit-standing-instructions.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_4__["AccountTransfersService"] }, { type: app_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/list-standing-instructions/list-standing-instructions.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/account-transfers/list-standing-instructions/list-standing-instructions.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ListStandingInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStandingInstructionsComponent", function() { return ListStandingInstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/* harmony import */ var app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/delete-dialog/delete-dialog.component */ "./src/app/shared/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var app_settings_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm5/divider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../directives/has-permission/has-permission.directive */ "./src/app/directives/has-permission/has-permission.directive.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm5/tooltip.js");
/** Angular Imports */






/** Custom Services */

/** Dialog Components */





















var _c0 = ["instructionsTable"];
function ListStandingInstructionsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.clientName);
} }
function ListStandingInstructionsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.clientNameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.fromClientId);
} }
function ListStandingInstructionsComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transferTypeData_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", transferTypeData_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", transferTypeData_r21.value, "\n        ");
} }
function ListStandingInstructionsComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListStandingInstructionsComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.filterStandingInstructions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      \u00A0\u00A0Filter\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListStandingInstructionsComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListStandingInstructionsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", instruction_r24.fromClient.displayName, "-", instruction_r24.fromClient.id, "\n      ");
} }
function ListStandingInstructionsComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " From Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListStandingInstructionsComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", instruction_r25.fromAccount.accountNo, "\n        (", instruction_r25.fromAccountType.value, ")");
} }
function ListStandingInstructionsComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Beneficiary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListStandingInstructionsComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r26.toClient.displayName);
} }
function ListStandingInstructionsComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListStandingInstructionsComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", instruction_r27.toAccount.accountNo, "\n        (", instruction_r27.toAccountType.value, ")");
} }
function ListStandingInstructionsComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListStandingInstructionsComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", instruction_r28.instructionType.value, "/", instruction_r28.amount, "");
} }
function ListStandingInstructionsComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Validity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListStandingInstructionsComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, instruction_r29.validFrom), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, instruction_r29.validTill), "\n      ");
} }
function ListStandingInstructionsComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c1 = function (a1) { return ["../", a1, "edit"]; };
function ListStandingInstructionsComponent_td_78_span_2_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, instruction_r30.id));
} }
function ListStandingInstructionsComponent_td_78_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListStandingInstructionsComponent_td_78_span_2_button_2_Template, 4, 3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "UPDATE_STANDINGINSTRUCTION");
} }
function ListStandingInstructionsComponent_td_78_span_4_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListStandingInstructionsComponent_td_78_span_4_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var instruction_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.deleteStandingInstruction(instruction_r30.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListStandingInstructionsComponent_td_78_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListStandingInstructionsComponent_td_78_span_4_button_2_Template, 4, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "DELETE_STANDINGINSTRUCTION");
} }
var _c2 = function (a1) { return ["../", a1, "view"]; };
function ListStandingInstructionsComponent_td_78_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, instruction_r30.id));
} }
function ListStandingInstructionsComponent_td_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListStandingInstructionsComponent_td_78_span_2_Template, 4, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListStandingInstructionsComponent_td_78_span_4_Template, 4, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListStandingInstructionsComponent_td_78_button_6_Template, 4, 3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var instruction_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", instruction_r30.status.value !== "Deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", instruction_r30.status.value !== "Deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "READ_STANDINGINSTRUCTION");
} }
function ListStandingInstructionsComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
} }
function ListStandingInstructionsComponent_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
} }
var _c3 = function () { return [10, 25, 50, 100]; };
/**
 * Lists all the standing intructions of particular ID
 */
var ListStandingInstructionsComponent = /** @class */ (function () {
    /**
     * Retrieves Standing Instructions Data from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     * @param {MatDialog} route Mat Dialog
     * @param {SettingsService} settingsService Settings Service
     * @param {AccountTransfersService} accountTransfersService Account Transfers Service
     */
    function ListStandingInstructionsComponent(route, accountTransfersService, settingsService, dialog) {
        var _this = this;
        this.route = route;
        this.accountTransfersService = accountTransfersService;
        this.settingsService = settingsService;
        this.dialog = dialog;
        /** Name form control. */
        this.transferType = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        /** ExternalId form control. */
        this.fromAccountId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        /** Name form control. */
        this.clientNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        /** ExternalId form control. */
        this.fromClientId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        /** Data source for instructions table. */
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        /** Columns to be displayed in instructions table. */
        this.displayedColumns = ['client', 'fromAccount', 'beneficiary', 'toAccount', 'amount', 'validity', 'actions'];
        this.route.data.subscribe(function (data) {
            _this.standingIntructionsTemplateData = data.standingIntructionsTemplate;
            if (data.standingIntructionsTemplate.fromClient) {
                _this.clientName = _this.standingIntructionsTemplateData.fromClient.displayName;
                _this.getStandingInstructions();
            }
            _this.setParams();
            _this.transferTypeDatas = _this.standingIntructionsTemplateData.transferTypeOptions;
        });
    }
    ListStandingInstructionsComponent.prototype.ngOnInit = function () {
    };
    ListStandingInstructionsComponent.prototype.setParams = function () {
        this.accountType = this.route.snapshot.queryParams['accountType'];
        switch (this.accountType) {
            case 'fromloans':
                this.accountTypeId = '1';
                break;
            case 'fromsavings':
                this.accountTypeId = '2';
                break;
            default:
                this.accountTypeId = '0';
        }
        this.isFromClient = this.route.parent.parent.snapshot.params['clientId'] ? true : false;
    };
    ListStandingInstructionsComponent.prototype.filterStandingInstructions = function () {
        this.getStandingInstructions();
    };
    /**
     * Retrieves standing instructions and initializes instructions table.
     */
    ListStandingInstructionsComponent.prototype.getStandingInstructions = function () {
        var _this = this;
        var dateFormat = this.settingsService.dateFormat;
        var locale = this.settingsService.language.code;
        var searchData = {
            clientId: this.standingIntructionsTemplateData.fromClient.id || this.fromClientId.value,
            clientName: this.standingIntructionsTemplateData.fromClient.displayName || this.clientNameControl.value,
            locale: locale,
            dateFormat: dateFormat,
            limit: 14,
            offset: 0,
            fromAccountType: this.accountTypeId,
            fromAccountId: this.fromAccountId.value,
            fromTransferType: this.transferType.value
        };
        this.accountTransfersService.getStandingInstructions(searchData).subscribe(function (response) {
            _this.instructionsData = response.pageItems;
            _this.dataSource.data = _this.instructionsData;
            _this.instructionTableRef.renderRows();
        });
    };
    /** Deletes selected Standing Instruction */
    ListStandingInstructionsComponent.prototype.deleteStandingInstruction = function (instructionId) {
        var _this = this;
        var deleteStandingInstructionDialogRef = this.dialog.open(app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialogComponent"], {
            data: { deleteContext: "standing instruction id: " + instructionId }
        });
        deleteStandingInstructionDialogRef.afterClosed().subscribe(function (response) {
            if (response.delete) {
                _this.accountTransfersService.deleteStandingInstrucions(instructionId)
                    .subscribe(function () { });
            }
        });
    };
    ListStandingInstructionsComponent.ɵfac = function ListStandingInstructionsComponent_Factory(t) { return new (t || ListStandingInstructionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_6__["AccountTransfersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_settings_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
    ListStandingInstructionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListStandingInstructionsComponent, selectors: [["mifosx-list-standing-instructions"]], viewQuery: function ListStandingInstructionsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.instructionTableRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        } }, decls: 89, vars: 13, consts: [[1, "container"], ["fxLayout", "row wrap", "fxLayoutGap", "2%", "fxLayout.lt-md", "column"], ["fxFlexFill", "", 4, "ngIf"], [3, "inset"], ["fxFlex", "30%"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "From Account Id", 3, "formControl"], ["mat-raised-button", "", "color", "primary", "class", "filter-button", 3, "click", 4, "mifosxHasPermission"], ["mat-table", "", 3, "dataSource"], ["instructionsTable", ""], ["matColumnDef", "client"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fromAccount"], ["matColumnDef", "beneficiary"], ["matColumnDef", "toAccount"], ["matColumnDef", "amount"], ["matColumnDef", "validity"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["fxFlexFill", ""], ["fxFlex", "40%"], [1, "mat-h3"], ["fxFlex", "60%"], ["matInput", "", "placeholder", "ClientName", 3, "formControl"], ["matInput", "", "placeholder", "From Client Id", 3, "formControl"], [3, "value"], ["mat-raised-button", "", "color", "primary", 1, "filter-button", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["class", "account-action-button", "mat-raised-button", "", "color", "primary", "matTooltip", "View Standing Instruction", 3, "routerLink", 4, "mifosxHasPermission"], ["class", "account-action-button", "mat-raised-button", "", "color", "primary", "matTooltip", "Edit Standing Instruction", 3, "routerLink", 4, "mifosxHasPermission"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Edit Standing Instruction", 1, "account-action-button", 3, "routerLink"], [1, "fa", "fa-edit"], ["class", "account-action-button", "mat-raised-button", "", "color", "warn", "matTooltip", "Delete Standing Instruction", 3, "click", 4, "mifosxHasPermission"], ["mat-raised-button", "", "color", "warn", "matTooltip", "Delete Standing Instruction", 1, "account-action-button", 3, "click"], [1, "fa", "fa-times"], ["mat-raised-button", "", "color", "primary", "matTooltip", "View Standing Instruction", 1, "account-action-button", 3, "routerLink"], [1, "fa", "fa-eye"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListStandingInstructionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListStandingInstructionsComponent_div_4_Template, 14, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListStandingInstructionsComponent_div_6_Template, 12, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListStandingInstructionsComponent_mat_option_17_Template, 2, 2, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListStandingInstructionsComponent_button_26_Template, 2, 0, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ListStandingInstructionsComponent_th_34_Template, 2, 0, "th", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ListStandingInstructionsComponent_td_36_Template, 2, 2, "td", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ListStandingInstructionsComponent_th_41_Template, 2, 0, "th", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ListStandingInstructionsComponent_td_43_Template, 2, 2, "td", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ListStandingInstructionsComponent_th_48_Template, 2, 0, "th", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ListStandingInstructionsComponent_td_50_Template, 2, 1, "td", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ListStandingInstructionsComponent_th_55_Template, 2, 0, "th", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ListStandingInstructionsComponent_td_57_Template, 2, 2, "td", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ListStandingInstructionsComponent_th_62_Template, 2, 0, "th", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ListStandingInstructionsComponent_td_64_Template, 2, 2, "td", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](67, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ListStandingInstructionsComponent_th_69_Template, 2, 0, "th", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ListStandingInstructionsComponent_td_71_Template, 4, 6, "td", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ListStandingInstructionsComponent_th_76_Template, 2, 0, "th", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ListStandingInstructionsComponent_td_78_Template, 8, 3, "td", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ListStandingInstructionsComponent_tr_81_Template, 1, 0, "tr", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ListStandingInstructionsComponent_tr_83_Template, 1, 0, "tr", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "mat-paginator", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFromClient);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFromClient);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.transferType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transferTypeDatas);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.fromAccountId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "READ_STANDINGINSTRUCTION");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_16__["HasPermissionDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["FlexFillDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".container[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  margin-top: 1rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%] {\n  min-width: 26px;\n  padding: 0 6px;\n  margin: 4px;\n  line-height: 25px;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC10cmFuc2ZlcnMvbGlzdC1zdGFuZGluZy1pbnN0cnVjdGlvbnMvQzpcXEdpdEh1Ylxcd2ViYXBwX2FuZ3VsYXI5L3NyY1xcYXBwXFxhY2NvdW50LXRyYW5zZmVyc1xcbGlzdC1zdGFuZGluZy1pbnN0cnVjdGlvbnNcXGxpc3Qtc3RhbmRpbmctaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50LXRyYW5zZmVycy9saXN0LXN0YW5kaW5nLWluc3RydWN0aW9ucy9saXN0LXN0YW5kaW5nLWluc3RydWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBREVJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBTjs7QURJQTtFQUNFLHlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LXRyYW5zZmVycy9saXN0LXN0YW5kaW5nLWluc3RydWN0aW9ucy9saXN0LXN0YW5kaW5nLWluc3RydWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIC5maWx0ZXItYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgLmFjY291bnQtYWN0aW9uLWJ1dHRvbntcclxuICAgICAgbWluLXdpZHRoOiAyNnB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWRpdmlkZXIge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuZmlsdGVyLWJ1dHRvbiB7XG4gIGhlaWdodDogMi41cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgLmFjY291bnQtYWN0aW9uLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbjogNHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"] });
    return ListStandingInstructionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListStandingInstructionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-list-standing-instructions',
                templateUrl: './list-standing-instructions.component.html',
                styleUrls: ['./list-standing-instructions.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_6__["AccountTransfersService"] }, { type: app_settings_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { instructionTableRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['instructionsTable', { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/account-transfers/list-transactions/list-transactions.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/account-transfers/list-transactions/list-transactions.component.ts ***!
  \************************************************************************************/
/*! exports provided: ListTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTransactionsComponent", function() { return ListTransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/** Angular Imports */











function ListTransactionsComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Transaction Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListTransactionsComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transaction_r10.transferDate), " ");
} }
function ListTransactionsComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListTransactionsComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r11.transferAmount, " ");
} }
function ListTransactionsComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListTransactionsComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r12.transferDescription, " ");
} }
function ListTransactionsComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reversed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListTransactionsComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r13.reversed ? "Yes" : "No", " ");
} }
function ListTransactionsComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ListTransactionsComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function () { return [5, 10, 25, 50, 100]; };
/**
 * Recurring Deposits Standing Instructions Tab
 */
var ListTransactionsComponent = /** @class */ (function () {
    /**
     * Retrieves Recurring Deposits Account Data from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     */
    function ListTransactionsComponent(route) {
        var _this = this;
        this.route = route;
        /** Data source for instructions table. */
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        /** Columns to be displayed in instructions table. */
        this.displayedColumns = ['transactionDate', 'amount', 'notes', 'reversed'];
        this.route.data.subscribe(function (data) {
            _this.listTransactionData = data.listTransactionData;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.listTransactionData.transactions.pageItems);
            _this.dataSource.paginator = _this.paginator;
        });
    }
    ListTransactionsComponent.ɵfac = function ListTransactionsComponent_Factory(t) { return new (t || ListTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    ListTransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListTransactionsComponent, selectors: [["mifosx-list-transactions"]], viewQuery: function ListTransactionsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        } }, decls: 70, vars: 10, consts: [[1, "container", "m-b-20"], [1, "mat-elevation-z8"], ["fxLayout", "row wrap", 1, "content"], ["fxFlex", "25%", "fxFlex.lt-md", "50%", 1, "header"], ["fxFlex", "25%", "fxFlex.lt-md", "50%"], [1, "mat-elevation-z8", "container"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "transactionDate"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "amount"], ["matColumnDef", "notes"], ["matColumnDef", "reversed"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ListTransactionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          From Account\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n          To Account\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n          Destination\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ListTransactionsComponent_th_36_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ListTransactionsComponent_td_38_Template, 3, 3, "td", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ListTransactionsComponent_th_43_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ListTransactionsComponent_td_45_Template, 2, 1, "td", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ListTransactionsComponent_th_50_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ListTransactionsComponent_td_52_Template, 2, 1, "td", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ListTransactionsComponent_th_57_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ListTransactionsComponent_td_59_Template, 2, 1, "td", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ListTransactionsComponent_tr_62_Template, 1, 0, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ListTransactionsComponent_tr_64_Template, 2, 0, "tr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "mat-paginator", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n          ", ctx.listTransactionData.fromAccount.accountNo, "(", ctx.listTransactionData.fromAccountType.value, ")\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n          ", ctx.listTransactionData.toAccount.accountNo, "(", ctx.listTransactionData.toAccountType.value, ")\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", ctx.listTransactionData.toClient.displayName, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  line-height: 3rem;\n}\n.content[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   .select-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC10cmFuc2ZlcnMvbGlzdC10cmFuc2FjdGlvbnMvQzpcXEdpdEh1Ylxcd2ViYXBwX2FuZ3VsYXI5L3NyY1xcYXBwXFxhY2NvdW50LXRyYW5zZmVyc1xcbGlzdC10cmFuc2FjdGlvbnNcXGxpc3QtdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50LXRyYW5zZmVycy9saXN0LXRyYW5zYWN0aW9ucy9saXN0LXRyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FDQUo7QURFSTtFQUNFLGdCQUFBO0FDQU47QURLQTtFQUNFLFdBQUE7QUNGRjtBRElFO0VBQ0UsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC10cmFuc2ZlcnMvbGlzdC10cmFuc2FjdGlvbnMvbGlzdC10cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgZGl2IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG5cclxuICAgICYuaGVhZGVyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnNlbGVjdC1yb3c6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCIuY29udGVudCBkaXYge1xuICBsaW5lLWhlaWdodDogM3JlbTtcbn1cbi5jb250ZW50IGRpdi5oZWFkZXIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgLnNlbGVjdC1yb3c6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
    return ListTransactionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-list-transactions',
                templateUrl: './list-transactions.component.html',
                styleUrls: ['./list-transactions.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/account-transfers/make-account-transfers/make-account-transfers.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/account-transfers/make-account-transfers/make-account-transfers.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MakeAccountTransfersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeAccountTransfersComponent", function() { return MakeAccountTransfersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account-transfers.service */ "./src/app/account-transfers/account-transfers.service.ts");
/* harmony import */ var app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var app_clients_clients_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/clients/clients.service */ "./src/app/clients/clients.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm5/divider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/fesm5/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../directives/has-permission/has-permission.directive */ "./src/app/directives/has-permission/has-permission.directive.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");

/** Angular Imports */




/** Custom Services */





















function MakeAccountTransfersComponent_mat_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var toOfficeType_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", toOfficeType_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", toOfficeType_r14.name, "\n              ");
} }
function MakeAccountTransfersComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Office is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MakeAccountTransfersComponent_mat_error_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Client is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MakeAccountTransfersComponent_mat_option_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var client_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", client_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n              ", client_r15.id, " - ", client_r15.displayName, "\n            ");
} }
function MakeAccountTransfersComponent_mat_option_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var toAccountType_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", toAccountType_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", toAccountType_r16.value, "\n              ");
} }
function MakeAccountTransfersComponent_mat_error_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Account Type is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MakeAccountTransfersComponent_mat_option_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var toAccount_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", toAccount_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n                ", toAccount_r17.productName, " - ", toAccount_r17.accountNo, "\n              ");
} }
function MakeAccountTransfersComponent_mat_error_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Account is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MakeAccountTransfersComponent_mat_error_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Amount is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MakeAccountTransfersComponent_mat_error_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Transactions Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MakeAccountTransfersComponent_mat_error_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Transfer Description is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MakeAccountTransfersComponent_button_166_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MakeAccountTransfersComponent_button_166_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r13.makeAccountTransferForm.valid);
} }
var _c0 = function () { return ["../../general"]; };
/**
 * Create account transfers
 */
var MakeAccountTransfersComponent = /** @class */ (function () {
    /**
     * Retrieves the standing instructions template from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     * @param {FormBuilder} formBuilder Form Builder
     * @param {Router} router Router
     * @param {AccountTransfersService} accountTransfersService Account Transfers Service
     * @param {DatePipe} datePipe Date Pipe
     * @param {SettingsService} settingsService Settings Service
     * @param {ClientsService} clientsService Clients Service
     */
    function MakeAccountTransfersComponent(formBuilder, route, router, accountTransfersService, datePipe, settingsService, clientsService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountTransfersService = accountTransfersService;
        this.datePipe = datePipe;
        this.settingsService = settingsService;
        this.clientsService = clientsService;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date(2100, 0, 1);
        this.route.data.subscribe(function (data) {
            _this.accountTransferTemplateData = data.accountTransferTemplate;
            _this.setParams();
            _this.setOptions();
        });
    }
    /** Sets the value from the URL */
    MakeAccountTransfersComponent.prototype.setParams = function () {
        this.accountType = this.route.snapshot.queryParams['accountType'];
        switch (this.accountType) {
            case 'fromloans':
                this.accountTypeId = '1';
                this.id = this.route.snapshot.queryParams['loanId'];
                break;
            case 'fromsavings':
                this.accountTypeId = '2';
                this.id = this.route.snapshot.queryParams['savingsId'];
                break;
            default:
                this.accountTypeId = '0';
        }
    };
    /**
     * Creates and sets the create standing instructions form.
     */
    MakeAccountTransfersComponent.prototype.ngOnInit = function () {
        this.createMakeAccountTransferForm();
    };
    /**
     * Creates the standing instruction form.
     */
    MakeAccountTransfersComponent.prototype.createMakeAccountTransferForm = function () {
        this.makeAccountTransferForm = this.formBuilder.group({
            'toOfficeId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'toClientId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'toAccountType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'toAccountId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'transferAmount': [this.accountTransferTemplateData.transferAmount, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'transferDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'transferDescription': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    /** Sets options value */
    MakeAccountTransfersComponent.prototype.setOptions = function () {
        this.toOfficeTypeData = this.accountTransferTemplateData.toOfficeOptions;
        this.toAccountTypeData = this.accountTransferTemplateData.toAccountTypeOptions;
        this.toAccountData = this.accountTransferTemplateData.toAccountOptions;
    };
    /** Executes on change of various select options */
    MakeAccountTransfersComponent.prototype.changeEvent = function () {
        var _this = this;
        var formValue = this.refineObject(this.makeAccountTransferForm.value);
        this.accountTransfersService.newAccountTranferResource(this.id, this.accountTypeId, formValue).subscribe(function (response) {
            _this.accountTransferTemplateData = response;
            _this.toClientTypeData = response.toClientOptions;
            _this.setOptions();
        });
    };
    /** Refine Object
     * Removes the object param with null or '' values
     */
    MakeAccountTransfersComponent.prototype.refineObject = function (dataObj) {
        delete dataObj.transferAmount;
        delete dataObj.transferDate;
        delete dataObj.transferDescription;
        if (dataObj.toClientId) {
            dataObj.toClientId = dataObj.toClientId.id;
        }
        var propNames = Object.getOwnPropertyNames(dataObj);
        for (var i = 0; i < propNames.length; i++) {
            var propName = propNames[i];
            if (dataObj[propName] === null || dataObj[propName] === undefined || dataObj[propName] === '') {
                delete dataObj[propName];
            }
        }
        return dataObj;
    };
    /**
     * Subscribes to Clients search filter:
     */
    MakeAccountTransfersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.makeAccountTransferForm.controls.toClientId.valueChanges.subscribe(function (value) {
            if (value.length >= 2) {
                _this.clientsService.getFilteredClients('displayName', 'ASC', true, value)
                    .subscribe(function (data) {
                    _this.clientsData = data.pageItems;
                });
                _this.changeEvent();
            }
        });
    };
    /**
     * Displays Client name in form control input.
     * @param {any} client Client data.
     * @returns {string} Client name if valid otherwise undefined.
     */
    MakeAccountTransfersComponent.prototype.displayClient = function (client) {
        return client ? client.displayName : undefined;
    };
    /**
     * Submits the standing instructions form
     */
    MakeAccountTransfersComponent.prototype.submit = function () {
        var _this = this;
        var dateFormat = this.settingsService.dateFormat;
        var locale = this.settingsService.language.code;
        var makeAccountTransferData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.makeAccountTransferForm.value), { transferDate: this.datePipe.transform(this.makeAccountTransferForm.value.transferDate, dateFormat), dateFormat: dateFormat,
            locale: locale, toClientId: this.makeAccountTransferForm.controls.toClientId.value.id, fromAccountId: this.id, fromAccountType: this.accountTypeId, fromClientId: this.accountTransferTemplateData.fromClient.id, fromOfficeId: this.accountTransferTemplateData.fromClient.officeId });
        this.accountTransfersService.createAccountTransfer(makeAccountTransferData).subscribe(function () {
            _this.router.navigate(['../../general'], { relativeTo: _this.route });
        });
    };
    MakeAccountTransfersComponent.ɵfac = function MakeAccountTransfersComponent_Factory(t) { return new (t || MakeAccountTransfersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_transfers_service__WEBPACK_IMPORTED_MODULE_5__["AccountTransfersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_clients_clients_service__WEBPACK_IMPORTED_MODULE_7__["ClientsService"])); };
    MakeAccountTransfersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MakeAccountTransfersComponent, selectors: [["mifosx-make-account-transfers"]], decls: 171, vars: 29, consts: [[1, "container"], ["fxLayout", "row wrap", "fxLayout.lt-md", "column"], ["fxFlexFill", "", 1, "mat-h3"], [3, "inset"], ["fxFlexFill", ""], ["fxFlex", "40%"], ["fxFlex", "60%"], [3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "2%", "fxLayout.lt-md", "column"], ["fxFlex", "98%"], ["required", "", "formControlName", "toOfficeId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "formControlName", "toClientId", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["clientsAutocomplete", "matAutocomplete"], ["required", "", "formControlName", "toAccountType", 3, "selectionChange"], ["required", "", "formControlName", "toAccountId", 3, "selectionChange"], ["type", "number", "matInput", "", "required", "", "formControlName", "transferAmount"], ["matInput", "", "required", "", "formControlName", "transferDate", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["transferDatePicker", ""], ["matInput", "", "formControlName", "transferDescription"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "mifosxHasPermission"], [3, "value"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function MakeAccountTransfersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Transferring From Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-divider", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Applicant");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Office");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "From Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "From Account Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Transferring To");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "mat-divider", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Office");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MakeAccountTransfersComponent_Template_mat_select_selectionChange_73_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, MakeAccountTransfersComponent_mat_option_75_Template, 2, 2, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, MakeAccountTransfersComponent_mat_error_78_Template, 5, 0, "mat-error", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Client");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, MakeAccountTransfersComponent_mat_error_88_Template, 5, 0, "mat-error", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-autocomplete", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, MakeAccountTransfersComponent_mat_option_94_Template, 2, 3, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Account Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mat-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MakeAccountTransfersComponent_Template_mat_select_selectionChange_102_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, MakeAccountTransfersComponent_mat_option_104_Template, 2, 2, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, MakeAccountTransfersComponent_mat_error_107_Template, 5, 0, "mat-error", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-select", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MakeAccountTransfersComponent_Template_mat_select_selectionChange_115_listener() { return ctx.changeEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, MakeAccountTransfersComponent_mat_option_117_Template, 2, 3, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, MakeAccountTransfersComponent_mat_error_120_Template, 5, 0, "mat-error", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, MakeAccountTransfersComponent_mat_error_130_Template, 5, 0, "mat-error", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Transaction Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "mat-datepicker-toggle", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "mat-datepicker", null, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, MakeAccountTransfersComponent_mat_error_145_Template, 5, 0, "mat-error", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "textarea", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, MakeAccountTransfersComponent_mat_error_155_Template, 5, 0, "mat-error", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "mat-card-actions", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](166, MakeAccountTransfersComponent_button_166_Template, 2, 1, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "\n");
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](92);
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](143);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inset", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.accountTransferTemplateData.fromClient.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.accountTransferTemplateData.fromOffice.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.accountTransferTemplateData.fromAccount.productName, "\u00A0-\u00A0#", ctx.accountTransferTemplateData.fromAccount.accountNo, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.accountTransferTemplateData.fromAccountType.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.accountTransferTemplateData.currency.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inset", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.makeAccountTransferForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toOfficeTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.makeAccountTransferForm.controls.toOfficeId.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.makeAccountTransferForm.controls.toClientId.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayClient);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clientsData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toAccountTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.makeAccountTransferForm.controls.toAccountType.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toAccountData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.makeAccountTransferForm.controls.toAccountId.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.makeAccountTransferForm.controls.transferAmount.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.makeAccountTransferForm.controls.transferDate.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.makeAccountTransferForm.controls.transferDescription.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mifosxHasPermission", "CREATE_ACCOUNTTRANSFER");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexFillDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_17__["HasPermissionDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], styles: ["h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n\n.margin-t[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin: 0 0 0.5em 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 37rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC10cmFuc2ZlcnMvbWFrZS1hY2NvdW50LXRyYW5zZmVycy9DOlxcR2l0SHViXFx3ZWJhcHBfYW5ndWxhcjkvc3JjXFxhcHBcXGFjY291bnQtdHJhbnNmZXJzXFxtYWtlLWFjY291bnQtdHJhbnNmZXJzXFxtYWtlLWFjY291bnQtdHJhbnNmZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50LXRyYW5zZmVycy9tYWtlLWFjY291bnQtdHJhbnNmZXJzL21ha2UtYWNjb3VudC10cmFuc2ZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC10cmFuc2ZlcnMvbWFrZS1hY2NvdW50LXRyYW5zZmVycy9tYWtlLWFjY291bnQtdHJhbnNmZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIsIGgzLCBoNCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIG1hcmdpbjogMC41ZW0gMDtcclxufVxyXG5cclxuLm1hcmdpbi10IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzN3JlbTtcclxufVxyXG4iLCJoMiwgaDMsIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5zcGFuIHtcbiAgbWFyZ2luOiAwLjVlbSAwO1xufVxuXG4ubWFyZ2luLXQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzdyZW07XG59Il19 */"] });
    return MakeAccountTransfersComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MakeAccountTransfersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-make-account-transfers',
                templateUrl: './make-account-transfers.component.html',
                styleUrls: ['./make-account-transfers.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _account_transfers_service__WEBPACK_IMPORTED_MODULE_5__["AccountTransfersService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }, { type: app_clients_clients_service__WEBPACK_IMPORTED_MODULE_7__["ClientsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/view-account-transfer/view-account-transfer.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/account-transfers/view-account-transfer/view-account-transfer.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ViewAccountTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAccountTransferComponent", function() { return ViewAccountTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm5/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/** Angular Imports */








var ViewAccountTransferComponent = /** @class */ (function () {
    /**
     * Retrieves the view account transfer data from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     */
    function ViewAccountTransferComponent(route) {
        var _this = this;
        this.route = route;
        this.route.data.subscribe(function (data) {
            _this.viewAccountTransferData = data.viewAccountTransferData;
        });
    }
    ViewAccountTransferComponent.ɵfac = function ViewAccountTransferComponent_Factory(t) { return new (t || ViewAccountTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    ViewAccountTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewAccountTransferComponent, selectors: [["mifosx-view-account-transfer"]], decls: 127, vars: 16, consts: [[1, "container"], ["fxLayout", "row wrap", "fxLayout.lt-md", "column"], ["fxFlexFill", "", 1, "mat-h3"], [3, "inset"], ["fxFlexFill", ""], ["fxFlex", "40%"], ["fxFlex", "60%"]], template: function ViewAccountTransferComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Transaction Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Transaction Amount:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Transaction Date:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Description:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Transferred From");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-divider", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Office:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Client:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Account Type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Account #:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Transferred To");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "mat-divider", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Office:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Client:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Account Type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Account #:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.transferAmount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 14, ctx.viewAccountTransferData.transferDate));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.transferDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.fromOffice.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.fromClient.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.fromAccountType.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.fromAccount.accountNo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.toOffice.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.toClient.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.toAccountType.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewAccountTransferData.toAccount.accountNo);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexFillDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin: 0 0 0.5em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC10cmFuc2ZlcnMvdmlldy1hY2NvdW50LXRyYW5zZmVyL0M6XFxHaXRIdWJcXHdlYmFwcF9hbmd1bGFyOS9zcmNcXGFwcFxcYWNjb3VudC10cmFuc2ZlcnNcXHZpZXctYWNjb3VudC10cmFuc2Zlclxcdmlldy1hY2NvdW50LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50LXRyYW5zZmVycy92aWV3LWFjY291bnQtdHJhbnNmZXIvdmlldy1hY2NvdW50LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC10cmFuc2ZlcnMvdmlldy1hY2NvdW50LXRyYW5zZmVyL3ZpZXctYWNjb3VudC10cmFuc2Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwO1xyXG59XHJcblxyXG5tYXQtZGl2aWRlciB7XHJcbiAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcclxufVxyXG4iLCJoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuc3BhbiB7XG4gIG1hcmdpbjogMC41ZW0gMDtcbn1cblxubWF0LWRpdmlkZXIge1xuICBtYXJnaW46IDAgMCAwLjVlbSAwO1xufSJdfQ== */"] });
    return ViewAccountTransferComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewAccountTransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-view-account-transfer',
                templateUrl: './view-account-transfer.component.html',
                styleUrls: ['./view-account-transfer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account-transfers/view-standing-instructions/view-standing-instructions.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/account-transfers/view-standing-instructions/view-standing-instructions.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ViewStandingInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStandingInstructionsComponent", function() { return ViewStandingInstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/has-permission/has-permission.directive */ "./src/app/directives/has-permission/has-permission.directive.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm5/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/** Angular Imports */











var _c0 = function () { return ["../", "list-account-transactions"]; };
function ViewStandingInstructionsComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    View Transactions History\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ViewStandingInstructionsComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Within Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewStandingInstructionsComponent_span_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Own Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c1 = function () { return ["../", "edit"]; };
var ViewStandingInstructionsComponent = /** @class */ (function () {
    /**
     * Retrieves the standing instructions data from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     */
    function ViewStandingInstructionsComponent(route) {
        var _this = this;
        this.route = route;
        /** Allow Client Edit */
        this.allowclientedit = false;
        this.route.data.subscribe(function (data) {
            _this.standingInstructionsData = data.standingInstructionsData;
            if (_this.standingInstructionsData.fromClient.id === _this.standingInstructionsData.toClient.id) {
                _this.allowclientedit = false;
            }
        });
    }
    ViewStandingInstructionsComponent.ɵfac = function ViewStandingInstructionsComponent_Factory(t) { return new (t || ViewStandingInstructionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    ViewStandingInstructionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewStandingInstructionsComponent, selectors: [["mifosx-view-standing-instructions"]], decls: 196, vars: 33, consts: [["fxLayout", "row", "fxLayoutAlign", "end", "fxLayoutGap", "2%", "fxLayout.lt-md", "column", 1, "container", "m-b-20"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["icon", "edit"], ["mat-raised-button", "", "color", "primary", 3, "routerLink", 4, "mifosxHasPermission"], [1, "container"], ["fxLayout", "row wrap", "fxLayout.lt-md", "column"], ["fxFlexFill", "", 1, "mat-h2"], [3, "inset"], ["fxFlexFill", ""], ["fxFlex", "40%"], ["fxFlex", "60%"], [4, "ngIf"]], template: function ViewStandingInstructionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0\n    Edit\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewStandingInstructionsComponent_button_7_Template, 2, 2, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Applicant:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Priority:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Status:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "From Account Type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "From Account:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Destination:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ViewStandingInstructionsComponent_span_84_Template, 2, 0, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ViewStandingInstructionsComponent_span_86_Template, 2, 0, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "To Office:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Beneficiary:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "To Account Type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "To Account:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Standing Instruction Type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Amount:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Validity:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](151, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](152, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Recurrence type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Interval:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Recurrence Frequency:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "On Month Day:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](189, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "READ_ACCOUNTTRANSFER");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.fromClient.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.transferType.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.priority.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.status.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.fromAccountType.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.standingInstructionsData.fromAccount.productName, " - ", ctx.standingInstructionsData.fromAccount.accountNo, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowclientedit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allowclientedit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.toOffice.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.toClient.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.toAccountType.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.standingInstructionsData.toAccount.productName, " - ", ctx.standingInstructionsData.toAccount.accountNo, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.instructionType.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.amount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](151, 26, ctx.standingInstructionsData.validFrom), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](152, 28, ctx.standingInstructionsData.validTill), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.recurrenceType.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.recurrenceInterval);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standingInstructionsData.recurrenceFrequency.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](189, 30, ctx.standingInstructionsData.recurrenceOnMonthDay));
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_5__["HasPermissionDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".mat-elevation-z1[_ngcontent-%COMP%] {\n  margin: 1em 0 1.5em 0;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n\n.margin-t[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin: 0 0 1em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC10cmFuc2ZlcnMvdmlldy1zdGFuZGluZy1pbnN0cnVjdGlvbnMvQzpcXEdpdEh1Ylxcd2ViYXBwX2FuZ3VsYXI5L3NyY1xcYXBwXFxhY2NvdW50LXRyYW5zZmVyc1xcdmlldy1zdGFuZGluZy1pbnN0cnVjdGlvbnNcXHZpZXctc3RhbmRpbmctaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50LXRyYW5zZmVycy92aWV3LXN0YW5kaW5nLWluc3RydWN0aW9ucy92aWV3LXN0YW5kaW5nLWluc3RydWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNDLGlCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LXRyYW5zZmVycy92aWV3LXN0YW5kaW5nLWluc3RydWN0aW9ucy92aWV3LXN0YW5kaW5nLWluc3RydWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZWxldmF0aW9uLXoxIHtcclxuICAgIG1hcmdpbjogMWVtIDAgMS41ZW0gMDtcclxufVxyXG5cclxuaDIsIGgzLCBoNCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIG1hcmdpbjogMC41ZW0gMDtcclxufVxyXG5cclxuLm1hcmdpbi10IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG5cdG1hcmdpbjogMCAwIDFlbSAwO1xyXG59XHJcbiIsIi5tYXQtZWxldmF0aW9uLXoxIHtcbiAgbWFyZ2luOiAxZW0gMCAxLjVlbSAwO1xufVxuXG5oMiwgaDMsIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5zcGFuIHtcbiAgbWFyZ2luOiAwLjVlbSAwO1xufVxuXG4ubWFyZ2luLXQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XG59Il19 */"] });
    return ViewStandingInstructionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewStandingInstructionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-view-standing-instructions',
                templateUrl: './view-standing-instructions.component.html',
                styleUrls: ['./view-standing-instructions.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=account-transfers-account-transfers-module.js.map