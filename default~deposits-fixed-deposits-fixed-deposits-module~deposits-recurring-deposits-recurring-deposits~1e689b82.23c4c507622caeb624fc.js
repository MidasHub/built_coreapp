(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~deposits-fixed-deposits-fixed-deposits-module~deposits-recurring-deposits-recurring-deposits~1e689b82"],{

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

/***/ "./src/app/savings/common-resolvers/savings-datatable.resolver.ts":
/*!************************************************************************!*\
  !*** ./src/app/savings/common-resolvers/savings-datatable.resolver.ts ***!
  \************************************************************************/
/*! exports provided: SavingsDatatableResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsDatatableResolver", function() { return SavingsDatatableResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _savings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../savings.service */ "./src/app/savings/savings.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * Savings Datatable data resolver.
 */
var SavingsDatatableResolver = /** @class */ (function () {
    /**
     * @param {SavingsService} SavingsService Savings service.
     */
    function SavingsDatatableResolver(savingsService) {
        this.savingsService = savingsService;
    }
    /**
     * Returns the Savings Account's Datatable data.
     * @returns {Observable<any>}
     */
    SavingsDatatableResolver.prototype.resolve = function (route) {
        var accountId = route.parent.parent.paramMap.get('savingAccountId') || route.parent.parent.paramMap.get('fixedDepositAccountId') || route.parent.parent.paramMap.get('recurringDepositAccountId');
        var datatableName = route.paramMap.get('datatableName');
        return this.savingsService.getSavingsDatatable(accountId, datatableName);
    };
    SavingsDatatableResolver.ɵfac = function SavingsDatatableResolver_Factory(t) { return new (t || SavingsDatatableResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_savings_service__WEBPACK_IMPORTED_MODULE_1__["SavingsService"])); };
    SavingsDatatableResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SavingsDatatableResolver, factory: SavingsDatatableResolver.ɵfac });
    return SavingsDatatableResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingsDatatableResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _savings_service__WEBPACK_IMPORTED_MODULE_1__["SavingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/savings/common-resolvers/savings-datatables.resolver.ts":
/*!*************************************************************************!*\
  !*** ./src/app/savings/common-resolvers/savings-datatables.resolver.ts ***!
  \*************************************************************************/
/*! exports provided: SavingsDatatablesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsDatatablesResolver", function() { return SavingsDatatablesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _savings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../savings.service */ "./src/app/savings/savings.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * Saving Accounts Datatables data resolver.
 */
var SavingsDatatablesResolver = /** @class */ (function () {
    /**
     * @param {SavingsService} SavingsService Savings service.
     */
    function SavingsDatatablesResolver(savingsService) {
        this.savingsService = savingsService;
    }
    /**
     * Returns the Saving Account's Datatables data.
     * @returns {Observable<any>}
     */
    SavingsDatatablesResolver.prototype.resolve = function () {
        return this.savingsService.getSavingsDatatables();
    };
    SavingsDatatablesResolver.ɵfac = function SavingsDatatablesResolver_Factory(t) { return new (t || SavingsDatatablesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_savings_service__WEBPACK_IMPORTED_MODULE_1__["SavingsService"])); };
    SavingsDatatablesResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SavingsDatatablesResolver, factory: SavingsDatatablesResolver.ɵfac });
    return SavingsDatatablesResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingsDatatablesResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _savings_service__WEBPACK_IMPORTED_MODULE_1__["SavingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/savings/savings.service.ts":
/*!********************************************!*\
  !*** ./src/app/savings/savings.service.ts ***!
  \********************************************/
/*! exports provided: SavingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsService", function() { return SavingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/** Angular Imports */




/**
 * Savings Service.
 */
var SavingsService = /** @class */ (function () {
    function SavingsService(http) {
        this.http = http;
    }
    /**
     * @param {string} savingAccountId is saving account's Id.
     * @returns {Observable<any>}
     */
    SavingsService.prototype.getSavingsTransactionTemplateResource = function (savingAccountId) {
        return this.http.get("/savingsaccounts/" + savingAccountId + "/transactions/template");
    };
    /**
     * @param {string} savingAccountId saving account id.
     * @returns {Observable<any>}
     */
    SavingsService.prototype.getSavingsChargeTemplateResource = function (savingAccountId) {
        return this.http.get("/savingsaccounts/" + savingAccountId + "/charges/template");
    };
    /**
     * @param {any} savingsCharge to apply on a savings Account.
     * @returns {Observable<any>}
     */
    SavingsService.prototype.createSavingsCharge = function (savingAccountId, resourceType, savingsCharge) {
        return this.http.post("/savingsaccounts/" + savingAccountId + "/" + resourceType, savingsCharge);
    };
    /**
     * @param {string} chargeId Charge ID of charge.
     * @returns {Observable<any>} Charge.
     */
    SavingsService.prototype.getChargeTemplate = function (chargeId) {
        var params = { template: 'true' };
        return this.http.get("/charges/" + chargeId, { params: params });
    };
    /**
     * @param accountId Savings Account Id of account to get data for.
     * @returns {Observable<any>} Savings data.
     */
    SavingsService.prototype.getSavingsAccountData = function (accountId) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('associations', 'all');
        return this.http.get("/savingsaccounts/" + accountId, { params: httpParams });
    };
    /**
     * @param accountId Savings Account Id of account to get data for.
     * @returns {Observable<any>} Savings account and template.
     */
    SavingsService.prototype.getSavingsAccountAndTemplate = function (accountId, template) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('template', template.toString())
            .set('associations', 'charges');
        return this.http.get("/savingsaccounts/" + accountId, { params: httpParams });
    };
    /**
     * @param clientId Client Id
     * @param clientName Client Name
     * @param fromAccountId Account Id
     * @param locale Locale
     * @param dateFormat Date Format
     * @returns {Observable<any>} Standing Instructions
     */
    SavingsService.prototype.getStandingInstructions = function (clientId, clientName, fromAccountId, locale, dateFormat) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('clientId', clientId)
            .set('clientName', clientName)
            .set('fromAccountId', fromAccountId)
            .set('fromAccountType', '2')
            .set('locale', locale)
            .set('dateFormat', dateFormat);
        return this.http.get("/standinginstructions", { params: httpParams });
    };
    /**
     * @returns {Observable<any>}
     */
    SavingsService.prototype.getSavingsDatatables = function () {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apptable', 'm_savings_account');
        return this.http.get("/datatables", { params: httpParams });
    };
    /**
     * @param accountId account Id of savings account to get datatable for.
     * @param datatableName Data table name.
     * @returns {Observable<any>}
     */
    SavingsService.prototype.getSavingsDatatable = function (accountId, datatableName) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('genericResultSet', 'true');
        return this.http.get("/datatables/" + datatableName + "/" + accountId, { params: httpParams });
    };
    /**
     * @param accountId account Id of savings account to get add datatable entry for.
     * @param datatableName Data Table name.
     * @param data Data.
     * @returns {Observable<any>}
     */
    SavingsService.prototype.addSavingsDatatableEntry = function (accountId, datatableName, data) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('genericResultSet', 'true');
        return this.http.post("/datatables/" + datatableName + "/" + accountId, data, { params: httpParams });
    };
    /**
     * @param accountId account Id of savings account to get add datatable entry for.
     * @param datatableName Data Table name.
     * @param data Data.
     * @returns {Observable<any>}
     */
    SavingsService.prototype.editSavingsDatatableEntry = function (accountId, datatableName, data) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('genericResultSet', 'true');
        return this.http.put("/datatables/" + datatableName + "/" + accountId, data, { params: httpParams });
    };
    /**
     * @param accountId account Id of savings account to get add datatable entry for.
     * @param datatableName Data Table name.
     * @returns {Observable<any>}
     */
    SavingsService.prototype.deleteDatatableContent = function (accountId, datatableName) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('genericResultSet', 'true');
        return this.http.delete("/datatables/" + datatableName + "/" + accountId, { params: httpParams });
    };
    /**
     * @param entityId Entity Id assosciated with savings account.
     * @returns {Observable<any>} Savings account template.
     */
    SavingsService.prototype.getSavingsAccountTemplate = function (entityId, productId, isGroup) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set(isGroup ? 'groupId' : 'clientId', entityId);
        httpParams = productId ? httpParams.set('productId', productId) : httpParams;
        return this.http.get('/savingsaccounts/template', { params: httpParams });
    };
    /**
     * @param {any} savingsAccount Savings Account
     * @returns {Observable<any>}
     */
    SavingsService.prototype.createSavingsAccount = function (savingsAccount) {
        return this.http.post('/savingsaccounts', savingsAccount);
    };
    /**
     * @param {any} savingsAccount Savings Account
     * @returns {Observable<any>}
     */
    SavingsService.prototype.updateSavingsAccount = function (accountId, savingsAccount) {
        return this.http.put("/savingsaccounts/" + accountId, savingsAccount);
    };
    /**
     * @param {string} accountId savings account Id
     * @returns {Observable<any>}
     */
    SavingsService.prototype.deleteSavingsAccount = function (accountId) {
        return this.http.delete("/savingsaccounts/" + accountId);
    };
    /**
     * @param {string} accountId Savings Account Id
     * @param {string} command Command
     * @param {any} data Data
     * @returns {Observable<any>}
     */
    SavingsService.prototype.executeSavingsAccountCommand = function (accountId, command, data) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('command', command);
        return this.http.post("/savingsaccounts/" + accountId, data, { params: httpParams });
    };
    /**
     * @param {string} accountId Savings Account Id
     * @param {string} command Command
     * @param {any} data Data
     * @returns {Observable<any>}
     */
    SavingsService.prototype.executeSavingsAccountUpdateCommand = function (accountId, command, data) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('command', command);
        return this.http.put("/savingsaccounts/" + accountId, data, { params: httpParams });
    };
    /**
     * @param {string} accountId Savings Account Id
     * @param {string} transactionId Transaction Id
     * @returns {Observable<any>}
     */
    SavingsService.prototype.getSavingsAccountTransaction = function (accountId, transactionId) {
        return this.http.get("/savingsaccounts/" + accountId + "/transactions/" + transactionId);
    };
    /**
     * @param {string} accountId Savings Account Id
     * @param {string} transactionId Transaction Id
     * @returns {Observable<any>}
     */
    SavingsService.prototype.getSavingsAccountTransactionTemplate = function (accountId, transactionId) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('template', 'true');
        return this.http.get("/savingsaccounts/" + accountId + "/transactions/" + transactionId, { params: httpParams });
    };
    /**
     * @param {string} accountId Savings Account Id
     * @param {string} command Command
     * @param {any} data Data
     * @param {string} transactionId Transaction Id
     * @returns {Observable<any>}
     */
    SavingsService.prototype.executeSavingsAccountTransactionsCommand = function (accountId, command, data, transactionId) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('command', command);
        if (transactionId) {
            return this.http.post("/savingsaccounts/" + accountId + "/transactions/" + transactionId, data, { params: httpParams });
        }
        return this.http.post("/savingsaccounts/" + accountId + "/transactions", data, { params: httpParams });
    };
    /**
     * @param {string} accountId savings account Id
     * @param {string} chargeId savings charge Id
     * @returns {Observable<any>}
     */
    SavingsService.prototype.getSavingsAccountCharge = function (accountId, chargeId) {
        return this.http.get("/savingsaccounts/" + accountId + "/charges/" + chargeId);
    };
    /**
     * @param {string} accountId Savings Account Id
     * @param {string} command Command
     * @param {any} data Data
     * @param {string} chargeId Charge Id
     * @returns {Observable<any>}
     */
    SavingsService.prototype.executeSavingsAccountChargesCommand = function (accountId, command, data, chargeId) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('command', command);
        return this.http.post("/savingsaccounts/" + accountId + "/charges/" + chargeId, data, { params: httpParams });
    };
    /**
     * @param {string} accountId  Savings Account Id
     * @param {any} data Charge Data
     * @param {any} chargeId Charge Id
     * @returns {Observable<any>}
     */
    SavingsService.prototype.editSavingsAccountCharge = function (accountId, data, chargeId) {
        return this.http.put("/savingsaccounts/" + accountId + "/charges/" + chargeId, data);
    };
    /**
     * @param {string} accountId  Savings Account Id
     * @param {any} chargeId Charge Id
     * @returns {Observable<any>}
     */
    SavingsService.prototype.deleteSavingsAccountCharge = function (accountId, chargeId) {
        return this.http.delete("/savingsaccounts/" + accountId + "/charges/" + chargeId);
    };
    SavingsService.ɵfac = function SavingsService_Factory(t) { return new (t || SavingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    SavingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SavingsService, factory: SavingsService.ɵfac, providedIn: 'root' });
    return SavingsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~deposits-fixed-deposits-fixed-deposits-module~deposits-recurring-deposits-recurring-deposits~1e689b82.23c4c507622caeb624fc.js.map