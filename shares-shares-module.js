(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shares-shares-module"],{

/***/ "./src/app/shares/common-resolvers/share-account-actions.resolver.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shares/common-resolvers/share-account-actions.resolver.ts ***!
  \***************************************************************************/
/*! exports provided: ShareAccountActionsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareAccountActionsResolver", function() { return ShareAccountActionsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shares.service */ "./src/app/shares/shares.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * Shares Account Actions data resolver.
 */
var ShareAccountActionsResolver = /** @class */ (function () {
    /**
     * @param {sharesService} SharesService Shares service.
     */
    function ShareAccountActionsResolver(sharesService) {
        this.sharesService = sharesService;
    }
    /**
     * Returns the Shares account actions data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    ShareAccountActionsResolver.prototype.resolve = function (route) {
        var actionName = route.paramMap.get('name');
        var shareAccountId = route.paramMap.get('shareAccountId') || route.parent.parent.paramMap.get('shareAccountId');
        switch (actionName) {
            case 'Apply Additional Shares':
            case 'Redeem Shares':
            case 'Approve Additional Shares':
            case 'Reject Additional Shares':
                return this.sharesService.getSharesAccountData(shareAccountId, true);
            default:
                return undefined;
        }
    };
    ShareAccountActionsResolver.ɵfac = function ShareAccountActionsResolver_Factory(t) { return new (t || ShareAccountActionsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"])); };
    ShareAccountActionsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShareAccountActionsResolver, factory: ShareAccountActionsResolver.ɵfac });
    return ShareAccountActionsResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareAccountActionsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/common-resolvers/share-account-and-template.resolver.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shares/common-resolvers/share-account-and-template.resolver.ts ***!
  \********************************************************************************/
/*! exports provided: SharesAccountAndTemplateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountAndTemplateResolver", function() { return SharesAccountAndTemplateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shares.service */ "./src/app/shares/shares.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * Shares Account data and template resolver.
 */
var SharesAccountAndTemplateResolver = /** @class */ (function () {
    /**
     * @param {SharesService} SharesService Shares service.
     */
    function SharesAccountAndTemplateResolver(sharesService) {
        this.sharesService = sharesService;
    }
    /**
     * Returns the Shares Account data and template.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    SharesAccountAndTemplateResolver.prototype.resolve = function (route) {
        var shareAccountId = route.paramMap.get('shareAccountId');
        return this.sharesService.getSharesAccountData(shareAccountId, true);
    };
    SharesAccountAndTemplateResolver.ɵfac = function SharesAccountAndTemplateResolver_Factory(t) { return new (t || SharesAccountAndTemplateResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"])); };
    SharesAccountAndTemplateResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharesAccountAndTemplateResolver, factory: SharesAccountAndTemplateResolver.ɵfac });
    return SharesAccountAndTemplateResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesAccountAndTemplateResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/common-resolvers/share-account-view.resolver.ts":
/*!************************************************************************!*\
  !*** ./src/app/shares/common-resolvers/share-account-view.resolver.ts ***!
  \************************************************************************/
/*! exports provided: SharesAccountViewResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountViewResolver", function() { return SharesAccountViewResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shares.service */ "./src/app/shares/shares.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * Shares Account data resolver.
 */
var SharesAccountViewResolver = /** @class */ (function () {
    /**
     * @param {SharesService} SharesService Shares service.
     */
    function SharesAccountViewResolver(sharesService) {
        this.sharesService = sharesService;
    }
    /**
     * Returns the Shares Account data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    SharesAccountViewResolver.prototype.resolve = function (route) {
        var shareAccountId = route.paramMap.get('shareAccountId');
        return this.sharesService.getSharesAccountData(shareAccountId, false);
    };
    SharesAccountViewResolver.ɵfac = function SharesAccountViewResolver_Factory(t) { return new (t || SharesAccountViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"])); };
    SharesAccountViewResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharesAccountViewResolver, factory: SharesAccountViewResolver.ɵfac });
    return SharesAccountViewResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesAccountViewResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/common-resolvers/shares-account-template.resolver.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shares/common-resolvers/shares-account-template.resolver.ts ***!
  \*****************************************************************************/
/*! exports provided: SharesAccountTemplateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountTemplateResolver", function() { return SharesAccountTemplateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shares.service */ "./src/app/shares/shares.service.ts");
/** Angular Imports */

/** Custom Services */



/**
 * Shares Account Template resolver.
 */
var SharesAccountTemplateResolver = /** @class */ (function () {
    /**
     * @param {SharesService} SharesService Shares service.
     */
    function SharesAccountTemplateResolver(sharesService) {
        this.sharesService = sharesService;
    }
    /**
     * Returns the Shares Account Template.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    SharesAccountTemplateResolver.prototype.resolve = function (route) {
        var clientId = route.parent.parent.paramMap.get('clientId');
        return this.sharesService.getSharesAccountTemplate(clientId);
    };
    SharesAccountTemplateResolver.ɵfac = function SharesAccountTemplateResolver_Factory(t) { return new (t || SharesAccountTemplateResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"])); };
    SharesAccountTemplateResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharesAccountTemplateResolver, factory: SharesAccountTemplateResolver.ɵfac });
    return SharesAccountTemplateResolver;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesAccountTemplateResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/create-shares-account/create-shares-account.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shares/create-shares-account/create-shares-account.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateSharesAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSharesAccountComponent", function() { return CreateSharesAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares-account-stepper/shares-account-details-step/shares-account-details-step.component */ "./src/app/shares/shares-account-stepper/shares-account-details-step/shares-account-details-step.component.ts");
/* harmony import */ var _shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shares-account-stepper/shares-account-terms-step/shares-account-terms-step.component */ "./src/app/shares/shares-account-stepper/shares-account-terms-step/shares-account-terms-step.component.ts");
/* harmony import */ var _shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shares-account-stepper/shares-account-charges-step/shares-account-charges-step.component */ "./src/app/shares/shares-account-stepper/shares-account-charges-step/shares-account-charges-step.component.ts");
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm5/stepper.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _shares_account_stepper_shares_account_preview_step_shares_account_preview_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shares-account-stepper/shares-account-preview-step/shares-account-preview-step.component */ "./src/app/shares/shares-account-stepper/shares-account-preview-step/shares-account-preview-step.component.ts");

/** Angular Imports */



/** Custom Components */



/** Custom Services */











function CreateSharesAccountComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function CreateSharesAccountComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function CreateSharesAccountComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function CreateSharesAccountComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function CreateSharesAccountComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function CreateSharesAccountComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "DETAILS");
} }
function CreateSharesAccountComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "TERMS");
} }
function CreateSharesAccountComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "CHARGES");
} }
function CreateSharesAccountComponent_mat_step_38_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "PREVIEW");
} }
function CreateSharesAccountComponent_mat_step_38_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-step", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateSharesAccountComponent_mat_step_38_ng_template_2_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mifosx-shares-account-preview-step", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function CreateSharesAccountComponent_mat_step_38_Template_mifosx_shares_account_preview_step_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sharesAccountProductTemplate", ctx_r9.sharesAccountProductTemplate)("sharesAccountTemplate", ctx_r9.sharesAccountTemplate)("sharesAccountTermsForm", ctx_r9.sharesAccountTermsForm)("sharesAccount", ctx_r9.sharesAccount);
} }
/**
 * Create Shares Account Component
 */
var CreateSharesAccountComponent = /** @class */ (function () {
    /**
     * Fetches shares account template from `resolve`
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     * @param {DatePipe} datePipe Date Pipe
     * @param {SharesService} sharesService Shares Service
     */
    function CreateSharesAccountComponent(route, router, datePipe, sharesService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.datePipe = datePipe;
        this.sharesService = sharesService;
        this.route.data.subscribe(function (data) {
            _this.sharesAccountTemplate = data.sharesAccountTemplate;
        });
    }
    /**
     * Sets shares account product template.
     * @param {any} $event API response
     */
    CreateSharesAccountComponent.prototype.setTemplate = function ($event) {
        this.sharesAccountProductTemplate = $event;
    };
    Object.defineProperty(CreateSharesAccountComponent.prototype, "sharesAccountDetailsForm", {
        /**
         * Retrieves shares account details form.
         */
        get: function () {
            return this.sharesAccountDetailsStep.sharesAccountDetailsForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateSharesAccountComponent.prototype, "sharesAccountTermsForm", {
        /**
         * Retrieves shares account terms form.
         */
        get: function () {
            return this.sharesAccountTermsStep.sharesAccountTermsForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateSharesAccountComponent.prototype, "sharesAccountFormValid", {
        /**
         * Checks validity of overall shares account form.
         */
        get: function () {
            return (this.sharesAccountDetailsForm.valid &&
                this.sharesAccountTermsForm.valid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateSharesAccountComponent.prototype, "sharesAccount", {
        /**
         * Retrieves shares account object.
         */
        get: function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.sharesAccountDetailsStep.sharesAccountDetails), this.sharesAccountTermsStep.sharesAccountTerms), this.sharesAccountChargesStep.sharesAccountCharges);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new share account.
     */
    CreateSharesAccountComponent.prototype.submit = function () {
        var _this = this;
        // TODO: Update once language and date settings are setup
        var locale = 'en';
        var dateFormat = 'dd MMMM yyyy';
        var sharesAccount = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.sharesAccount), { clientId: this.sharesAccountTemplate.clientId, charges: this.sharesAccount.charges.map(function (charge) { return ({ chargeId: charge.chargeId, amount: charge.amount }); }), applicationDate: this.datePipe.transform(this.sharesAccount.applicationDate, dateFormat), submittedDate: this.datePipe.transform(this.sharesAccount.submittedDate, dateFormat), unitPrice: this.sharesAccountTermsForm.get('unitPrice').value, dateFormat: dateFormat,
            locale: locale });
        this.sharesService.createSharesAccount(sharesAccount).subscribe(function (response) {
            _this.router.navigate(['../', response.resourceId], { relativeTo: _this.route });
        });
    };
    CreateSharesAccountComponent.ɵfac = function CreateSharesAccountComponent_Factory(t) { return new (t || CreateSharesAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"])); };
    CreateSharesAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateSharesAccountComponent, selectors: [["mifosx-create-shares-account"]], viewQuery: function CreateSharesAccountComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_4__["SharesAccountDetailsStepComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_5__["SharesAccountTermsStepComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_6__["SharesAccountChargesStepComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sharesAccountDetailsStep = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sharesAccountTermsStep = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sharesAccountChargesStep = _t.first);
        } }, decls: 42, vars: 8, consts: [[1, "container"], ["labelPosition", "bottom", 1, "mat-elevation-z8"], ["shareProductStepper", ""], ["matStepperIcon", "number"], ["matStepperIcon", "edit"], ["matStepperIcon", "done"], ["matStepperIcon", "error"], ["matStepperIcon", "preview"], [3, "stepControl"], ["matStepLabel", ""], [3, "sharesAccountTemplate", "sharesAccountProductTemplate"], [3, "sharesAccountProductTemplate"], [3, "sharesAccountProductTemplate", "sharesAccountTemplate", "currencyCode"], ["completed", "", 4, "ngIf"], ["icon", "pencil-alt", "size", "sm"], ["icon", "check", "size", "sm"], ["icon", "exclamation-triangle", "size", "lg"], ["icon", "eye", "size", "sm"], ["completed", ""], [3, "sharesAccountProductTemplate", "sharesAccountTemplate", "sharesAccountTermsForm", "sharesAccount", "submit"]], template: function CreateSharesAccountComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-horizontal-stepper", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CreateSharesAccountComponent_ng_template_5_Template, 3, 0, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CreateSharesAccountComponent_ng_template_7_Template, 3, 0, "ng-template", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CreateSharesAccountComponent_ng_template_9_Template, 3, 0, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CreateSharesAccountComponent_ng_template_11_Template, 3, 0, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CreateSharesAccountComponent_ng_template_13_Template, 3, 0, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-step", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreateSharesAccountComponent_ng_template_17_Template, 1, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mifosx-shares-account-details-step", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sharesAccountProductTemplate", function CreateSharesAccountComponent_Template_mifosx_shares_account_details_step_sharesAccountProductTemplate_19_listener($event) { return ctx.setTemplate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-step", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CreateSharesAccountComponent_ng_template_25_Template, 1, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mifosx-shares-account-terms-step", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-step");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CreateSharesAccountComponent_ng_template_32_Template, 1, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mifosx-shares-account-charges-step", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CreateSharesAccountComponent_mat_step_38_Template, 7, 4, "mat-step", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.sharesAccountDetailsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sharesAccountTemplate", ctx.sharesAccountTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.sharesAccountTermsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sharesAccountProductTemplate", ctx.sharesAccountProductTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sharesAccountProductTemplate", ctx.sharesAccountProductTemplate)("sharesAccountTemplate", ctx.sharesAccountTemplate)("currencyCode", ctx.sharesAccountTermsForm.get("currencyCode"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sharesAccountFormValid);
        } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepLabel"], _shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_4__["SharesAccountDetailsStepComponent"], _shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_5__["SharesAccountTermsStepComponent"], _shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_6__["SharesAccountChargesStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _shares_account_stepper_shares_account_preview_step_shares_account_preview_step_component__WEBPACK_IMPORTED_MODULE_10__["SharesAccountPreviewStepComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9jcmVhdGUtc2hhcmVzLWFjY291bnQvY3JlYXRlLXNoYXJlcy1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CreateSharesAccountComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateSharesAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-create-shares-account',
                templateUrl: './create-shares-account.component.html',
                styleUrls: ['./create-shares-account.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"] }]; }, { sharesAccountDetailsStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_4__["SharesAccountDetailsStepComponent"], { static: true }]
        }], sharesAccountTermsStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_5__["SharesAccountTermsStepComponent"], { static: true }]
        }], sharesAccountChargesStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_6__["SharesAccountChargesStepComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shares/edit-shares-account/edit-shares-account.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shares/edit-shares-account/edit-shares-account.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditSharesAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSharesAccountComponent", function() { return EditSharesAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares-account-stepper/shares-account-details-step/shares-account-details-step.component */ "./src/app/shares/shares-account-stepper/shares-account-details-step/shares-account-details-step.component.ts");
/* harmony import */ var _shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shares-account-stepper/shares-account-terms-step/shares-account-terms-step.component */ "./src/app/shares/shares-account-stepper/shares-account-terms-step/shares-account-terms-step.component.ts");
/* harmony import */ var _shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shares-account-stepper/shares-account-charges-step/shares-account-charges-step.component */ "./src/app/shares/shares-account-stepper/shares-account-charges-step/shares-account-charges-step.component.ts");
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm5/stepper.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _shares_account_stepper_shares_account_preview_step_shares_account_preview_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shares-account-stepper/shares-account-preview-step/shares-account-preview-step.component */ "./src/app/shares/shares-account-stepper/shares-account-preview-step/shares-account-preview-step.component.ts");

/** Angular Imports */



/** Custom Components */



/** Custom Services */











function EditSharesAccountComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function EditSharesAccountComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function EditSharesAccountComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function EditSharesAccountComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function EditSharesAccountComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
} }
function EditSharesAccountComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "DETAILS");
} }
function EditSharesAccountComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "TERMS");
} }
function EditSharesAccountComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "CHARGES");
} }
function EditSharesAccountComponent_mat_step_39_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "PREVIEW");
} }
function EditSharesAccountComponent_mat_step_39_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-step", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditSharesAccountComponent_mat_step_39_ng_template_2_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mifosx-shares-account-preview-step", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditSharesAccountComponent_mat_step_39_Template_mifosx_shares_account_preview_step_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sharesAccountProductTemplate", ctx_r9.sharesAccountProductTemplate)("sharesAccountTemplate", ctx_r9.sharesAccountAndTemplate)("sharesAccountTermsForm", ctx_r9.sharesAccountTermsForm)("sharesAccount", ctx_r9.sharesAccount);
} }
/**
 * Edit Shares Account Component
 */
var EditSharesAccountComponent = /** @class */ (function () {
    /**
     * Fetches shares account template from `resolve`
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     * @param {DatePipe} datePipe Date Pipe
     * @param {SharesService} sharesService Shares Service
     */
    function EditSharesAccountComponent(route, router, datePipe, sharesService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.datePipe = datePipe;
        this.sharesService = sharesService;
        this.route.data.subscribe(function (data) {
            _this.sharesAccountAndTemplate = data.sharesAccountAndTemplate;
        });
    }
    /**
     * Sets shares account product template.
     * @param {any} $event API response
     */
    EditSharesAccountComponent.prototype.setTemplate = function ($event) {
        this.sharesAccountProductTemplate = $event;
    };
    Object.defineProperty(EditSharesAccountComponent.prototype, "sharesAccountDetailsForm", {
        /**
         * Retrieves shares account details form.
         */
        get: function () {
            return this.sharesAccountDetailsStep.sharesAccountDetailsForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSharesAccountComponent.prototype, "sharesAccountTermsForm", {
        /**
         * Retrieves shares account terms form.
         */
        get: function () {
            return this.sharesAccountTermsStep.sharesAccountTermsForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSharesAccountComponent.prototype, "sharesAccountFormValidAndNotPristine", {
        /**
         * Checks validity and pristinity of overall shares account form .
         */
        get: function () {
            return (this.sharesAccountDetailsForm.valid &&
                this.sharesAccountTermsForm.valid &&
                (!this.sharesAccountDetailsForm.pristine ||
                    !this.sharesAccountTermsForm.pristine ||
                    !this.sharesAccountChargesStep.pristine));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSharesAccountComponent.prototype, "sharesAccount", {
        /**
         * Retrieves shares account object.
         */
        get: function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.sharesAccountDetailsStep.sharesAccountDetails), this.sharesAccountTermsStep.sharesAccountTerms), this.sharesAccountChargesStep.sharesAccountCharges);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates a share account.
     */
    EditSharesAccountComponent.prototype.submit = function () {
        var _this = this;
        // TODO: Update once language and date settings are setup
        var locale = 'en';
        var dateFormat = 'dd MMMM yyyy';
        var sharesAccount = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.sharesAccount), { clientId: this.sharesAccountAndTemplate.clientId, charges: this.sharesAccount.charges.map(function (charge) { return ({ chargeId: charge.chargeId, amount: charge.amount }); }), applicationDate: this.datePipe.transform(this.sharesAccount.applicationDate, dateFormat), submittedDate: this.datePipe.transform(this.sharesAccount.submittedDate, dateFormat), unitPrice: this.sharesAccountTermsForm.get('unitPrice').value, dateFormat: dateFormat,
            locale: locale });
        this.sharesService.updateSharesAccount(this.sharesAccountAndTemplate.id, sharesAccount).subscribe(function (response) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    EditSharesAccountComponent.ɵfac = function EditSharesAccountComponent_Factory(t) { return new (t || EditSharesAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"])); };
    EditSharesAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditSharesAccountComponent, selectors: [["mifosx-edit-shares-account"]], viewQuery: function EditSharesAccountComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_4__["SharesAccountDetailsStepComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_5__["SharesAccountTermsStepComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_6__["SharesAccountChargesStepComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sharesAccountDetailsStep = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sharesAccountTermsStep = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sharesAccountChargesStep = _t.first);
        } }, decls: 43, vars: 9, consts: [[1, "container"], ["labelPosition", "bottom", 1, "mat-elevation-z8"], ["shareProductStepper", ""], ["matStepperIcon", "number"], ["matStepperIcon", "edit"], ["matStepperIcon", "done"], ["matStepperIcon", "error"], ["matStepperIcon", "preview"], [3, "stepControl"], ["matStepLabel", ""], [3, "sharesAccountTemplate", "sharesAccountProductTemplate"], [3, "sharesAccountProductTemplate", "sharesAccountTemplate"], [3, "sharesAccountProductTemplate", "sharesAccountTemplate", "currencyCode"], ["completed", "", 4, "ngIf"], ["icon", "pencil-alt", "size", "sm"], ["icon", "check", "size", "sm"], ["icon", "exclamation-triangle", "size", "lg"], ["icon", "eye", "size", "sm"], ["completed", ""], [3, "sharesAccountProductTemplate", "sharesAccountTemplate", "sharesAccountTermsForm", "sharesAccount", "submit"]], template: function EditSharesAccountComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-horizontal-stepper", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditSharesAccountComponent_ng_template_5_Template, 3, 0, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditSharesAccountComponent_ng_template_7_Template, 3, 0, "ng-template", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditSharesAccountComponent_ng_template_9_Template, 3, 0, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EditSharesAccountComponent_ng_template_11_Template, 3, 0, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditSharesAccountComponent_ng_template_13_Template, 3, 0, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-step", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EditSharesAccountComponent_ng_template_17_Template, 1, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mifosx-shares-account-details-step", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sharesAccountProductTemplate", function EditSharesAccountComponent_Template_mifosx_shares_account_details_step_sharesAccountProductTemplate_19_listener($event) { return ctx.setTemplate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-step", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, EditSharesAccountComponent_ng_template_25_Template, 1, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mifosx-shares-account-terms-step", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-step");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, EditSharesAccountComponent_ng_template_33_Template, 1, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mifosx-shares-account-charges-step", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, EditSharesAccountComponent_mat_step_39_Template, 7, 4, "mat-step", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.sharesAccountDetailsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sharesAccountTemplate", ctx.sharesAccountAndTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.sharesAccountTermsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sharesAccountProductTemplate", ctx.sharesAccountProductTemplate)("sharesAccountTemplate", ctx.sharesAccountAndTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sharesAccountProductTemplate", ctx.sharesAccountProductTemplate)("sharesAccountTemplate", ctx.sharesAccountAndTemplate)("currencyCode", ctx.sharesAccountTermsForm.get("currencyCode"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sharesAccountFormValidAndNotPristine);
        } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepLabel"], _shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_4__["SharesAccountDetailsStepComponent"], _shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_5__["SharesAccountTermsStepComponent"], _shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_6__["SharesAccountChargesStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _shares_account_stepper_shares_account_preview_step_shares_account_preview_step_component__WEBPACK_IMPORTED_MODULE_10__["SharesAccountPreviewStepComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9lZGl0LXNoYXJlcy1hY2NvdW50L2VkaXQtc2hhcmVzLWFjY291bnQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return EditSharesAccountComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditSharesAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-edit-shares-account',
                templateUrl: './edit-shares-account.component.html',
                styleUrls: ['./edit-shares-account.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"] }]; }, { sharesAccountDetailsStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_4__["SharesAccountDetailsStepComponent"], { static: true }]
        }], sharesAccountTermsStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_5__["SharesAccountTermsStepComponent"], { static: true }]
        }], sharesAccountChargesStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_6__["SharesAccountChargesStepComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/activate-shares-account/activate-shares-account.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/activate-shares-account/activate-shares-account.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ActivateSharesAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateSharesAccountComponent", function() { return ActivateSharesAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");

/** Angular Imports */




/** Custom Services */












function ActivateSharesAccountComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Activated On Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["../../"]; };
/**
 * Activate Shares Account Component
 */
var ActivateSharesAccountComponent = /** @class */ (function () {
    /**
     * @param {FormBuilder} formBuilder Form Builder
     * @param {SharesService} sharesService Shares Service
     * @param {DatePipe} datePipe Date Pipe
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     */
    function ActivateSharesAccountComponent(formBuilder, sharesService, datePipe, route, router) {
        this.formBuilder = formBuilder;
        this.sharesService = sharesService;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
    }
    /**
     * Creates the activate shares form.
     */
    ActivateSharesAccountComponent.prototype.ngOnInit = function () {
        this.createActivateSharesAccountForm();
    };
    /**
     * Creates the activate shares account form.
     */
    ActivateSharesAccountComponent.prototype.createActivateSharesAccountForm = function () {
        this.activateSharesAccountForm = this.formBuilder.group({
            'activatedDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    /**
     * Submits the form and activates the share account,
     * if successful redirects to the share account.
     */
    ActivateSharesAccountComponent.prototype.submit = function () {
        var _this = this;
        // TODO: Update once language and date settings are setup
        var locale = 'en';
        var dateFormat = 'dd MMMM yyyy';
        var prevActivatedDate = this.activateSharesAccountForm.value.activatedDate;
        this.activateSharesAccountForm.patchValue({
            activatedDate: this.datePipe.transform(prevActivatedDate, dateFormat),
        });
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.activateSharesAccountForm.value), { dateFormat: dateFormat,
            locale: locale });
        this.sharesService.executeSharesAccountCommand(this.accountId, 'activate', data).subscribe(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    ActivateSharesAccountComponent.ɵfac = function ActivateSharesAccountComponent_Factory(t) { return new (t || ActivateSharesAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    ActivateSharesAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActivateSharesAccountComponent, selectors: [["mifosx-activate-shares-account"]], decls: 36, vars: 9, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], ["fxFlex", ""], ["matInput", "", "required", "", "formControlName", "activatedDate", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["activatedDatePicker", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "accent", 3, "disabled"]], template: function ActivateSharesAccountComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ActivateSharesAccountComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Activated On Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-datepicker-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker", null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ActivateSharesAccountComponent_mat_error_20_Template, 5, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card-actions", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.activateSharesAccountForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activateSharesAccountForm.controls.activatedDate.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.activateSharesAccountForm.valid);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvYWN0aXZhdGUtc2hhcmVzLWFjY291bnQvQzpcXEdpdEh1Ylxcd2ViLWFwcC9zcmNcXGFwcFxcc2hhcmVzXFxzaGFyZXMtYWNjb3VudC1hY3Rpb25zXFxhY3RpdmF0ZS1zaGFyZXMtYWNjb3VudFxcYWN0aXZhdGUtc2hhcmVzLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL2FjdGl2YXRlLXNoYXJlcy1hY2NvdW50L2FjdGl2YXRlLXNoYXJlcy1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL2FjdGl2YXRlLXNoYXJlcy1hY2NvdW50L2FjdGl2YXRlLXNoYXJlcy1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAzN3JlbTtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzN3JlbTtcbn0iXX0= */"] });
    return ActivateSharesAccountComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActivateSharesAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-activate-shares-account',
                templateUrl: './activate-shares-account.component.html',
                styleUrls: ['./activate-shares-account.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/apply-shares/apply-shares.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/apply-shares/apply-shares.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ApplySharesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplySharesComponent", function() { return ApplySharesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");

/** Angular Imports */




/** Custom Services */












function ApplySharesComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Request Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ApplySharesComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Requested Shares is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["../../"]; };
/**
 * Apply Shares Component
 */
var ApplySharesComponent = /** @class */ (function () {
    /**
     * @param {FormBuilder} formBuilder Form Builder
     * @param {SharesService} sharesService Shares Service
     * @param {DatePipe} datePipe Date Pipe
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     */
    function ApplySharesComponent(formBuilder, sharesService, datePipe, route, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.sharesService = sharesService;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
        this.route.data.subscribe(function (data) {
            _this.sharesAccountData = data.shareAccountActionData;
        });
    }
    /**
     * Creates the apply shares form.
     * Fetching data from service as action buttons malfunction
     * in clients view upon using a common resolver.
     */
    ApplySharesComponent.prototype.ngOnInit = function () {
        this.createApplySharesAccountForm();
        this.applySharesForm.get('unitPrice').patchValue(this.sharesAccountData.currentMarketPrice || '');
    };
    /**
     * Creates the apply shares form.
     */
    ApplySharesComponent.prototype.createApplySharesAccountForm = function () {
        this.applySharesForm = this.formBuilder.group({
            'requestedDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'requestedShares': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'unitPrice': [{ value: '', disabled: true }]
        });
    };
    /**
     * Submits the form and applies additional shares to the share account,
     * if successful redirects to the share account.
     */
    ApplySharesComponent.prototype.submit = function () {
        var _this = this;
        // TODO: Update once language and date settings are setup
        var locale = 'en';
        var dateFormat = 'dd MMMM yyyy';
        var prevRequestedDate = this.applySharesForm.value.requestedDate;
        this.applySharesForm.patchValue({
            requestedDate: this.datePipe.transform(prevRequestedDate, dateFormat),
        });
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.applySharesForm.value), { unitPrice: this.applySharesForm.get('unitPrice').value, dateFormat: dateFormat,
            locale: locale });
        this.sharesService.executeSharesAccountCommand(this.accountId, 'applyadditionalshares', data).subscribe(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    ApplySharesComponent.ɵfac = function ApplySharesComponent_Factory(t) { return new (t || ApplySharesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    ApplySharesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ApplySharesComponent, selectors: [["mifosx-apply-shares"]], decls: 57, vars: 10, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["matInput", "", "required", "", "formControlName", "requestedDate", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["requestedDatePicker", ""], [4, "ngIf"], ["matInput", "", "required", "", "formControlName", "requestedShares"], ["matInput", "", "required", "", "formControlName", "unitPrice"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "accent", 3, "disabled"]], template: function ApplySharesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ApplySharesComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Request Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-datepicker", null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ApplySharesComponent_mat_error_22_Template, 5, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total No. of Shares");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ApplySharesComponent_mat_error_32_Template, 5, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Today's Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-card-actions", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.applySharesForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.applySharesForm.controls.requestedDate.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.applySharesForm.controls.requestedShares.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.applySharesForm.valid);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvYXBwbHktc2hhcmVzL0M6XFxHaXRIdWJcXHdlYi1hcHAvc3JjXFxhcHBcXHNoYXJlc1xcc2hhcmVzLWFjY291bnQtYWN0aW9uc1xcYXBwbHktc2hhcmVzXFxhcHBseS1zaGFyZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL2FwcGx5LXNoYXJlcy9hcHBseS1zaGFyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvYXBwbHktc2hhcmVzL2FwcGx5LXNoYXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMzdyZW07XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzdyZW07XG59Il19 */"] });
    return ApplySharesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApplySharesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-apply-shares',
                templateUrl: './apply-shares.component.html',
                styleUrls: ['./apply-shares.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/approve-shares-account/approve-shares-account.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/approve-shares-account/approve-shares-account.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ApproveSharesAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveSharesAccountComponent", function() { return ApproveSharesAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");

/** Angular Imports */




/** Custom Services */












function ApproveSharesAccountComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Approved On Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["../../"]; };
/**
 * Approve Shares Account Component
 */
var ApproveSharesAccountComponent = /** @class */ (function () {
    /**
     * @param {FormBuilder} formBuilder Form Builder
     * @param {SharesService} sharesService Shares Service
     * @param {DatePipe} datePipe Date Pipe
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     */
    function ApproveSharesAccountComponent(formBuilder, sharesService, datePipe, route, router) {
        this.formBuilder = formBuilder;
        this.sharesService = sharesService;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
    }
    /**
     * Creates the approve shares form.
     */
    ApproveSharesAccountComponent.prototype.ngOnInit = function () {
        this.createApproveSharesAccountForm();
    };
    /**
     * Creates the approve shares account form.
     */
    ApproveSharesAccountComponent.prototype.createApproveSharesAccountForm = function () {
        this.approveSharesAccountForm = this.formBuilder.group({
            'approvedDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'note': ['']
        });
    };
    /**
     * Submits the form and approves the share account,
     * if successful redirects to the share account.
     */
    ApproveSharesAccountComponent.prototype.submit = function () {
        var _this = this;
        // TODO: Update once language and date settings are setup
        var locale = 'en';
        var dateFormat = 'dd MMMM yyyy';
        var prevApprovedDate = this.approveSharesAccountForm.value.approvedDate;
        this.approveSharesAccountForm.patchValue({
            approvedDate: this.datePipe.transform(prevApprovedDate, dateFormat),
        });
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.approveSharesAccountForm.value), { dateFormat: dateFormat,
            locale: locale });
        this.sharesService.executeSharesAccountCommand(this.accountId, 'approve', data).subscribe(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    ApproveSharesAccountComponent.ɵfac = function ApproveSharesAccountComponent_Factory(t) { return new (t || ApproveSharesAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    ApproveSharesAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ApproveSharesAccountComponent, selectors: [["mifosx-approve-shares-account"]], decls: 47, vars: 9, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["matInput", "", "required", "", "formControlName", "approvedDate", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["approvedDatePicker", ""], [4, "ngIf"], ["matInput", "", "formControlName", "note"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "accent", 3, "disabled"]], template: function ApproveSharesAccountComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ApproveSharesAccountComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Approved On Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-datepicker", null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ApproveSharesAccountComponent_mat_error_22_Template, 5, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Note");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "textarea", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-card-actions", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.approveSharesAccountForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.approveSharesAccountForm.controls.approvedDate.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.approveSharesAccountForm.valid);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvYXBwcm92ZS1zaGFyZXMtYWNjb3VudC9DOlxcR2l0SHViXFx3ZWItYXBwL3NyY1xcYXBwXFxzaGFyZXNcXHNoYXJlcy1hY2NvdW50LWFjdGlvbnNcXGFwcHJvdmUtc2hhcmVzLWFjY291bnRcXGFwcHJvdmUtc2hhcmVzLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL2FwcHJvdmUtc2hhcmVzLWFjY291bnQvYXBwcm92ZS1zaGFyZXMtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZXMvc2hhcmVzLWFjY291bnQtYWN0aW9ucy9hcHByb3ZlLXNoYXJlcy1hY2NvdW50L2FwcHJvdmUtc2hhcmVzLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDM3cmVtO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDM3cmVtO1xufSJdfQ== */"] });
    return ApproveSharesAccountComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApproveSharesAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-approve-shares-account',
                templateUrl: './approve-shares-account.component.html',
                styleUrls: ['./approve-shares-account.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/approve-shares/approve-share-dialog/approve-share-dialog.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/approve-shares/approve-share-dialog/approve-share-dialog.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ApproveShareDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveShareDialogComponent", function() { return ApproveShareDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/** Angular Imports */





var _c0 = function () { return { approve: true }; };
/**
 * Approve share dialog component.
 */
var ApproveShareDialogComponent = /** @class */ (function () {
    /**
     * @param {MatDialogRef} dialogRef Component reference to dialog.
     * @param {any} data Provides a deleteContext.
     */
    function ApproveShareDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ApproveShareDialogComponent.ɵfac = function ApproveShareDialogComponent_Factory(t) { return new (t || ApproveShareDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    ApproveShareDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApproveShareDialogComponent, selectors: [["mifosx-approve-share-dialog"]], decls: 18, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["align", "end"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "accent", 3, "mat-dialog-close"]], template: function ApproveShareDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approve Share");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to approve share with id: ", ctx.data.shareId, " ?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL2FwcHJvdmUtc2hhcmVzL2FwcHJvdmUtc2hhcmUtZGlhbG9nL2FwcHJvdmUtc2hhcmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ApproveShareDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApproveShareDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-approve-share-dialog',
                templateUrl: './approve-share-dialog.component.html',
                styleUrls: ['./approve-share-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/approve-shares/approve-shares.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/approve-shares/approve-shares.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ApproveSharesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveSharesComponent", function() { return ApproveSharesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm5/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _approve_share_dialog_approve_share_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approve-share-dialog/approve-share-dialog.component */ "./src/app/shares/shares-account-actions/approve-shares/approve-share-dialog/approve-share-dialog.component.ts");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm5/tooltip.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _pipes_status_lookup_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pipes/status-lookup.pipe */ "./src/app/pipes/status-lookup.pipe.ts");
/** Angular Imports */







/** Custom Dialogs */

/** Custom Serices */













var _c0 = ["sharesTable"];
function ApproveSharesComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Transaction Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveSharesComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var share_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, share_r13.purchasedDate), "");
} }
function ApproveSharesComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Shares ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveSharesComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var share_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", share_r14.numberOfShares, " ");
} }
function ApproveSharesComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Purchased/Redeemed Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveSharesComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var share_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", share_r15.purchasedPrice, " ");
} }
function ApproveSharesComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveSharesComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "statusLookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var share_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, share_r16.status.code))("matTooltip", share_r16.status.value);
} }
function ApproveSharesComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveSharesComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApproveSharesComponent_td_39_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var share_r17 = ctx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.approve(share_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveSharesComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function ApproveSharesComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
var _c1 = function () { return [10, 25, 50, 100]; };
/**
 * Approve shares component.
 */
var ApproveSharesComponent = /** @class */ (function () {
    /**
     * @param {SharesService} sharesService Shares Service
     */
    function ApproveSharesComponent(sharesService, route, dialog) {
        var _this = this;
        this.sharesService = sharesService;
        this.route = route;
        this.dialog = dialog;
        /** Columns to be displayed in shares table. */
        this.displayedColumns = ['transactionDate', 'totalShares', 'redeemedPrice', 'status', 'approve'];
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
        this.route.data.subscribe(function (data) {
            _this.sharesAccountData = data.shareAccountActionData;
        });
    }
    /**
     * Sets the shares table.
     */
    ApproveSharesComponent.prototype.ngOnInit = function () {
        this.sharesData = this.sharesAccountData.purchasedShares
            .filter(function (share) { return share.status.value === 'Pending Approval'; });
        this.setShares();
    };
    /**
     * Initializes the data source, paginator and sorter for shares table.
     */
    ApproveSharesComponent.prototype.setShares = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.sharesData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    /**
     * Approves a share
     * @param {any} id Share Id
     */
    ApproveSharesComponent.prototype.approve = function (id) {
        var _this = this;
        var approveSharesDialogRef = this.dialog.open(_approve_share_dialog_approve_share_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ApproveShareDialogComponent"], {
            data: { shareId: id }
        });
        approveSharesDialogRef.afterClosed().subscribe(function (response) {
            if (response.approve) {
                var locale = 'en';
                var dateFormat = 'dd MMMM yyyy';
                var data = {
                    requestedShares: [{ id: id }],
                    dateFormat: dateFormat,
                    locale: locale
                };
                _this.sharesService.executeSharesAccountCommand(_this.accountId, 'approveadditionalshares', data).subscribe(function () {
                    var share = _this.sharesData.find(function (element) { return element.id === id; });
                    var index = _this.sharesData.indexOf(share);
                    _this.sharesData.splice(index, 1);
                    _this.dataSource.data = _this.sharesData;
                    _this.sharesTableRef.renderRows();
                });
            }
        });
    };
    ApproveSharesComponent.ɵfac = function ApproveSharesComponent_Factory(t) { return new (t || ApproveSharesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    ApproveSharesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApproveSharesComponent, selectors: [["mifosx-approve-shares"]], viewQuery: function ApproveSharesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sharesTableRef = _t.first);
        } }, decls: 51, vars: 5, consts: [[1, "container"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["sharesTable", ""], ["matColumnDef", "transactionDate"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalShares"], ["matColumnDef", "redeemedPrice"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "approve"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "fa", "fa-stop", 3, "ngClass", "matTooltip"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Approve Share", 1, "share-action-button", 3, "click"], [1, "fa", "fa-check"], ["mat-header-row", ""], ["mat-row", ""]], template: function ApproveSharesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApproveSharesComponent_th_9_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ApproveSharesComponent_td_11_Template, 3, 3, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ApproveSharesComponent_th_16_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ApproveSharesComponent_td_18_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ApproveSharesComponent_th_23_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ApproveSharesComponent_td_25_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ApproveSharesComponent_th_30_Template, 2, 0, "th", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ApproveSharesComponent_td_32_Template, 5, 4, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ApproveSharesComponent_th_37_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ApproveSharesComponent_td_39_Template, 7, 0, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ApproveSharesComponent_tr_42_Template, 1, 0, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ApproveSharesComponent_tr_44_Template, 1, 0, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-paginator", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _pipes_status_lookup_pipe__WEBPACK_IMPORTED_MODULE_12__["StatusLookupPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   .share-action-button[_ngcontent-%COMP%] {\n  min-width: 26px;\n  padding: 0 6px;\n  margin: 4px;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvYXBwcm92ZS1zaGFyZXMvQzpcXEdpdEh1Ylxcd2ViLWFwcC9zcmNcXGFwcFxcc2hhcmVzXFxzaGFyZXMtYWNjb3VudC1hY3Rpb25zXFxhcHByb3ZlLXNoYXJlc1xcYXBwcm92ZS1zaGFyZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL2FwcHJvdmUtc2hhcmVzL2FwcHJvdmUtc2hhcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0FDRUo7QURBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZXMvc2hhcmVzLWFjY291bnQtYWN0aW9ucy9hcHByb3ZlLXNoYXJlcy9hcHByb3ZlLXNoYXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBpOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnNoYXJlLWFjdGlvbi1idXR0b257XHJcbiAgICBtaW4td2lkdGg6IDI2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSBpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxudGFibGUgLnNoYXJlLWFjdGlvbi1idXR0b24ge1xuICBtaW4td2lkdGg6IDI2cHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBtYXJnaW46IDRweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59Il19 */"] });
    return ApproveSharesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApproveSharesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-approve-shares',
                templateUrl: './approve-shares.component.html',
                styleUrls: ['./approve-shares.component.scss']
            }]
    }], function () { return [{ type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }], sharesTableRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sharesTable', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/close-shares-account/close-shares-account.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/close-shares-account/close-shares-account.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CloseSharesAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseSharesAccountComponent", function() { return CloseSharesAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");

/** Angular Imports */




/** Custom Services */












function CloseSharesAccountComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Closed On Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["../../"]; };
/**
 * Close Shares Account Component
 */
var CloseSharesAccountComponent = /** @class */ (function () {
    /**
     * @param {FormBuilder} formBuilder Form Builder
     * @param {SharesService} sharesService Shares Service
     * @param {DatePipe} datePipe Date Pipe
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     */
    function CloseSharesAccountComponent(formBuilder, sharesService, datePipe, route, router) {
        this.formBuilder = formBuilder;
        this.sharesService = sharesService;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
    }
    /**
     * Creates the close shares form.
     */
    CloseSharesAccountComponent.prototype.ngOnInit = function () {
        this.createCloseSharesAccountForm();
    };
    /**
     * Creates the close shares account form.
     */
    CloseSharesAccountComponent.prototype.createCloseSharesAccountForm = function () {
        this.closeSharesAccountForm = this.formBuilder.group({
            'closedDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'note': ['']
        });
    };
    /**
     * Submits the form and closes the share account,
     * if successful redirects to the share account.
     */
    CloseSharesAccountComponent.prototype.submit = function () {
        var _this = this;
        // TODO: Update once language and date settings are setup
        var locale = 'en';
        var dateFormat = 'dd MMMM yyyy';
        var prevClosedDate = this.closeSharesAccountForm.value.closedDate;
        this.closeSharesAccountForm.patchValue({
            closedDate: this.datePipe.transform(prevClosedDate, dateFormat),
        });
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.closeSharesAccountForm.value), { dateFormat: dateFormat,
            locale: locale });
        this.sharesService.executeSharesAccountCommand(this.accountId, 'close', data).subscribe(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    CloseSharesAccountComponent.ɵfac = function CloseSharesAccountComponent_Factory(t) { return new (t || CloseSharesAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    CloseSharesAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CloseSharesAccountComponent, selectors: [["mifosx-close-shares-account"]], decls: 47, vars: 9, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["matInput", "", "required", "", "formControlName", "closedDate", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["closedDatePicker", ""], [4, "ngIf"], ["matInput", "", "formControlName", "note"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 3, "disabled"]], template: function CloseSharesAccountComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CloseSharesAccountComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Closed On Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-datepicker", null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CloseSharesAccountComponent_mat_error_22_Template, 5, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Note");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "textarea", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-card-actions", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.closeSharesAccountForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.closeSharesAccountForm.controls.closedDate.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.closeSharesAccountForm.valid);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvY2xvc2Utc2hhcmVzLWFjY291bnQvQzpcXEdpdEh1Ylxcd2ViLWFwcC9zcmNcXGFwcFxcc2hhcmVzXFxzaGFyZXMtYWNjb3VudC1hY3Rpb25zXFxjbG9zZS1zaGFyZXMtYWNjb3VudFxcY2xvc2Utc2hhcmVzLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL2Nsb3NlLXNoYXJlcy1hY2NvdW50L2Nsb3NlLXNoYXJlcy1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL2Nsb3NlLXNoYXJlcy1hY2NvdW50L2Nsb3NlLXNoYXJlcy1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAzN3JlbTtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzN3JlbTtcbn0iXX0= */"] });
    return CloseSharesAccountComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CloseSharesAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-close-shares-account',
                templateUrl: './close-shares-account.component.html',
                styleUrls: ['./close-shares-account.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/redeem-shares/redeem-shares.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/redeem-shares/redeem-shares.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RedeemSharesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemSharesComponent", function() { return RedeemSharesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");

/** Angular Imports */




/** Custom Services */












function RedeemSharesComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Request Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RedeemSharesComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Requested Shares is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["../../"]; };
/**
 * Redeem Shares Component
 */
var RedeemSharesComponent = /** @class */ (function () {
    /**
     * @param {FormBuilder} formBuilder Form Builder
     * @param {SharesService} sharesService Shares Service
     * @param {DatePipe} datePipe Date Pipe
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     */
    function RedeemSharesComponent(formBuilder, sharesService, datePipe, route, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.sharesService = sharesService;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
        this.route.data.subscribe(function (data) {
            _this.sharesAccountData = data.shareAccountActionData;
        });
    }
    /**
     * Creates the apply shares form.
     * Fetching data from service as action buttons malfunction
     * in clients view upon using a common resolver.
     */
    RedeemSharesComponent.prototype.ngOnInit = function () {
        this.createRedeemSharesAccountForm();
        this.redeemSharesForm.get('unitPrice').patchValue(this.sharesAccountData.currentMarketPrice || '');
    };
    /**
     * Creates the apply shares form.
     */
    RedeemSharesComponent.prototype.createRedeemSharesAccountForm = function () {
        this.redeemSharesForm = this.formBuilder.group({
            'requestedDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'requestedShares': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'unitPrice': [{ value: '', disabled: true }]
        });
    };
    /**
     * Submits the form and applies additional shares to the share account,
     * if successful redirects to the share account.
     */
    RedeemSharesComponent.prototype.submit = function () {
        var _this = this;
        // TODO: Update once language and date settings are setup
        var locale = 'en';
        var dateFormat = 'dd MMMM yyyy';
        var prevRequestedDate = this.redeemSharesForm.value.requestedDate;
        this.redeemSharesForm.patchValue({
            requestedDate: this.datePipe.transform(prevRequestedDate, dateFormat),
        });
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.redeemSharesForm.value), { unitPrice: this.redeemSharesForm.get('unitPrice').value, dateFormat: dateFormat,
            locale: locale });
        this.sharesService.executeSharesAccountCommand(this.accountId, 'redeemshares', data).subscribe(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    RedeemSharesComponent.ɵfac = function RedeemSharesComponent_Factory(t) { return new (t || RedeemSharesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    RedeemSharesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RedeemSharesComponent, selectors: [["mifosx-redeem-shares"]], decls: 57, vars: 10, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["matInput", "", "required", "", "formControlName", "requestedDate", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["requestedDatePicker", ""], [4, "ngIf"], ["matInput", "", "required", "", "formControlName", "requestedShares"], ["matInput", "", "required", "", "formControlName", "unitPrice"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 3, "disabled"]], template: function RedeemSharesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RedeemSharesComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Request Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-datepicker", null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RedeemSharesComponent_mat_error_22_Template, 5, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total No. of Shares");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RedeemSharesComponent_mat_error_32_Template, 5, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Today's Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-card-actions", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.redeemSharesForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.redeemSharesForm.controls.requestedDate.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.redeemSharesForm.controls.requestedShares.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.redeemSharesForm.valid);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvcmVkZWVtLXNoYXJlcy9DOlxcR2l0SHViXFx3ZWItYXBwL3NyY1xcYXBwXFxzaGFyZXNcXHNoYXJlcy1hY2NvdW50LWFjdGlvbnNcXHJlZGVlbS1zaGFyZXNcXHJlZGVlbS1zaGFyZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL3JlZGVlbS1zaGFyZXMvcmVkZWVtLXNoYXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZXMvc2hhcmVzLWFjY291bnQtYWN0aW9ucy9yZWRlZW0tc2hhcmVzL3JlZGVlbS1zaGFyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDM3cmVtO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDM3cmVtO1xufSJdfQ== */"] });
    return RedeemSharesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RedeemSharesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-redeem-shares',
                templateUrl: './redeem-shares.component.html',
                styleUrls: ['./redeem-shares.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/reject-shares-account/reject-shares-account.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/reject-shares-account/reject-shares-account.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: RejectSharesAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectSharesAccountComponent", function() { return RejectSharesAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");

/** Angular Imports */




/** Custom Services */












function RejectSharesAccountComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Rejected On Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["../../"]; };
/**
 * Reject Shares Account Component
 */
var RejectSharesAccountComponent = /** @class */ (function () {
    /**
     * @param {FormBuilder} formBuilder Form Builder
     * @param {SharesService} sharesService Shares Service
     * @param {DatePipe} datePipe Date Pipe
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     */
    function RejectSharesAccountComponent(formBuilder, sharesService, datePipe, route, router) {
        this.formBuilder = formBuilder;
        this.sharesService = sharesService;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
    }
    /**
     * Creates the reject shares form.
     */
    RejectSharesAccountComponent.prototype.ngOnInit = function () {
        this.createRejectSharesAccountForm();
    };
    /**
     * Creates the reject shares account form.
     */
    RejectSharesAccountComponent.prototype.createRejectSharesAccountForm = function () {
        this.rejectSharesAccountForm = this.formBuilder.group({
            'rejectedDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'note': ['']
        });
    };
    /**
     * Submits the form and rejects the share account,
     * if successful redirects to the share account.
     */
    RejectSharesAccountComponent.prototype.submit = function () {
        var _this = this;
        // TODO: Update once language and date settings are setup
        var locale = 'en';
        var dateFormat = 'dd MMMM yyyy';
        var prevRejectedDate = this.rejectSharesAccountForm.value.rejectedDate;
        this.rejectSharesAccountForm.patchValue({
            rejectedDate: this.datePipe.transform(prevRejectedDate, dateFormat),
        });
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.rejectSharesAccountForm.value), { dateFormat: dateFormat,
            locale: locale });
        this.sharesService.executeSharesAccountCommand(this.accountId, 'reject', data).subscribe(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    RejectSharesAccountComponent.ɵfac = function RejectSharesAccountComponent_Factory(t) { return new (t || RejectSharesAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    RejectSharesAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RejectSharesAccountComponent, selectors: [["mifosx-reject-shares-account"]], decls: 47, vars: 9, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["matInput", "", "required", "", "formControlName", "rejectedDate", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["rejectedDatePicker", ""], [4, "ngIf"], ["matInput", "", "formControlName", "note"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 3, "disabled"]], template: function RejectSharesAccountComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RejectSharesAccountComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rejected On Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-datepicker", null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RejectSharesAccountComponent_mat_error_22_Template, 5, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Note");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "textarea", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-card-actions", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.rejectSharesAccountForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rejectSharesAccountForm.controls.rejectedDate.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.rejectSharesAccountForm.valid);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvcmVqZWN0LXNoYXJlcy1hY2NvdW50L0M6XFxHaXRIdWJcXHdlYi1hcHAvc3JjXFxhcHBcXHNoYXJlc1xcc2hhcmVzLWFjY291bnQtYWN0aW9uc1xccmVqZWN0LXNoYXJlcy1hY2NvdW50XFxyZWplY3Qtc2hhcmVzLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL3JlamVjdC1zaGFyZXMtYWNjb3VudC9yZWplY3Qtc2hhcmVzLWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvcmVqZWN0LXNoYXJlcy1hY2NvdW50L3JlamVjdC1zaGFyZXMtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMzdyZW07XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzdyZW07XG59Il19 */"] });
    return RejectSharesAccountComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RejectSharesAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-reject-shares-account',
                templateUrl: './reject-shares-account.component.html',
                styleUrls: ['./reject-shares-account.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_5__["SharesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/reject-shares/reject-share-dialog/reject-share-dialog.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/reject-shares/reject-share-dialog/reject-share-dialog.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: RejectShareDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectShareDialogComponent", function() { return RejectShareDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/** Angular Imports */





var _c0 = function () { return { reject: true }; };
/**
 * Reject share dialog component.
 */
var RejectShareDialogComponent = /** @class */ (function () {
    /**
     * @param {MatDialogRef} dialogRef Component reference to dialog.
     * @param {any} data Provides a deleteContext.
     */
    function RejectShareDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RejectShareDialogComponent.ɵfac = function RejectShareDialogComponent_Factory(t) { return new (t || RejectShareDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    RejectShareDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RejectShareDialogComponent, selectors: [["mifosx-reject-share-dialog"]], decls: 18, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["align", "end"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function RejectShareDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reject Share");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to reject share with id: ", ctx.data.shareId, " ?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL3JlamVjdC1zaGFyZXMvcmVqZWN0LXNoYXJlLWRpYWxvZy9yZWplY3Qtc2hhcmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return RejectShareDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RejectShareDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-reject-share-dialog',
                templateUrl: './reject-share-dialog.component.html',
                styleUrls: ['./reject-share-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/reject-shares/reject-shares.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/reject-shares/reject-shares.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RejectSharesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectSharesComponent", function() { return RejectSharesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm5/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _reject_share_dialog_reject_share_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reject-share-dialog/reject-share-dialog.component */ "./src/app/shares/shares-account-actions/reject-shares/reject-share-dialog/reject-share-dialog.component.ts");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm5/tooltip.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _pipes_status_lookup_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pipes/status-lookup.pipe */ "./src/app/pipes/status-lookup.pipe.ts");
/** Angular Imports */







/** Custom Dialogs */

/** Custom Serices */













var _c0 = ["sharesTable"];
function RejectSharesComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Transaction Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RejectSharesComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var share_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, share_r13.purchasedDate), "");
} }
function RejectSharesComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Shares ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RejectSharesComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var share_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", share_r14.numberOfShares, " ");
} }
function RejectSharesComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Purchased/Redeemed Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RejectSharesComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var share_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", share_r15.purchasedPrice, " ");
} }
function RejectSharesComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RejectSharesComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "statusLookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var share_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, share_r16.status.code))("matTooltip", share_r16.status.value);
} }
function RejectSharesComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RejectSharesComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RejectSharesComponent_td_39_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var share_r17 = ctx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.reject(share_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RejectSharesComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function RejectSharesComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
var _c1 = function () { return [10, 25, 50, 100]; };
/**
 * Reject shares component.
 */
var RejectSharesComponent = /** @class */ (function () {
    /**
     * @param {SharesService} sharesService Shares Service
     * @param {ActivatedRoute} route Activated Route
     * @param {MatDialog} dialog Mat Dialog
     */
    function RejectSharesComponent(sharesService, route, dialog) {
        var _this = this;
        this.sharesService = sharesService;
        this.route = route;
        this.dialog = dialog;
        /** Columns to be displayed in shares table. */
        this.displayedColumns = ['transactionDate', 'totalShares', 'redeemedPrice', 'status', 'reject'];
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
        this.route.data.subscribe(function (data) {
            _this.sharesAccountData = data.shareAccountActionData;
        });
    }
    /**
     * Sets the shares table.
     */
    RejectSharesComponent.prototype.ngOnInit = function () {
        this.sharesData = this.sharesAccountData.purchasedShares
            .filter(function (share) { return share.status.value === 'Pending Approval'; });
        this.setShares();
    };
    /**
     * Initializes the data source, paginator and sorter for shares table.
     */
    RejectSharesComponent.prototype.setShares = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.sharesData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    /**
     * Rejects a share
     * @param {any} id Share Id
     */
    RejectSharesComponent.prototype.reject = function (id) {
        var _this = this;
        var rejectSharesDialogRef = this.dialog.open(_reject_share_dialog_reject_share_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RejectShareDialogComponent"], {
            data: { shareId: id }
        });
        rejectSharesDialogRef.afterClosed().subscribe(function (response) {
            if (response.reject) {
                var locale = 'en';
                var dateFormat = 'dd MMMM yyyy';
                var data = {
                    requestedShares: [{ id: id }],
                    dateFormat: dateFormat,
                    locale: locale
                };
                _this.sharesService.executeSharesAccountCommand(_this.accountId, 'rejectadditionalshares', data).subscribe(function () {
                    var share = _this.sharesData.find(function (element) { return element.id === id; });
                    var index = _this.sharesData.indexOf(share);
                    _this.sharesData.splice(index, 1);
                    _this.dataSource.data = _this.sharesData;
                    _this.sharesTableRef.renderRows();
                });
            }
        });
    };
    RejectSharesComponent.ɵfac = function RejectSharesComponent_Factory(t) { return new (t || RejectSharesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    RejectSharesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RejectSharesComponent, selectors: [["mifosx-reject-shares"]], viewQuery: function RejectSharesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sharesTableRef = _t.first);
        } }, decls: 51, vars: 5, consts: [[1, "container"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["sharesTable", ""], ["matColumnDef", "transactionDate"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalShares"], ["matColumnDef", "redeemedPrice"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "reject"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "fa", "fa-stop", 3, "ngClass", "matTooltip"], ["mat-raised-button", "", "color", "warn", "matTooltip", "Reject Share", 1, "share-action-button", 3, "click"], [1, "fa", "fa-times"], ["mat-header-row", ""], ["mat-row", ""]], template: function RejectSharesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RejectSharesComponent_th_9_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RejectSharesComponent_td_11_Template, 3, 3, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RejectSharesComponent_th_16_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RejectSharesComponent_td_18_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RejectSharesComponent_th_23_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RejectSharesComponent_td_25_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RejectSharesComponent_th_30_Template, 2, 0, "th", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RejectSharesComponent_td_32_Template, 5, 4, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RejectSharesComponent_th_37_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RejectSharesComponent_td_39_Template, 7, 0, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RejectSharesComponent_tr_42_Template, 1, 0, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RejectSharesComponent_tr_44_Template, 1, 0, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-paginator", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _pipes_status_lookup_pipe__WEBPACK_IMPORTED_MODULE_12__["StatusLookupPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   .share-action-button[_ngcontent-%COMP%] {\n  min-width: 26px;\n  padding: 0 6px;\n  margin: 4px;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvcmVqZWN0LXNoYXJlcy9DOlxcR2l0SHViXFx3ZWItYXBwL3NyY1xcYXBwXFxzaGFyZXNcXHNoYXJlcy1hY2NvdW50LWFjdGlvbnNcXHJlamVjdC1zaGFyZXNcXHJlamVjdC1zaGFyZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL3JlamVjdC1zaGFyZXMvcmVqZWN0LXNoYXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvcmVqZWN0LXNoYXJlcy9yZWplY3Qtc2hhcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGk6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuc2hhcmUtYWN0aW9uLWJ1dHRvbntcclxuICAgIG1pbi13aWR0aDogMjZweDtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG50YWJsZSAuc2hhcmUtYWN0aW9uLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbjogNHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn0iXX0= */"] });
    return RejectSharesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RejectSharesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-reject-shares',
                templateUrl: './reject-shares.component.html',
                styleUrls: ['./reject-shares.component.scss']
            }]
    }], function () { return [{ type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }], sharesTableRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sharesTable', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/shares-account-actions.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/shares-account-actions.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SharesAccountActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountActionsComponent", function() { return SharesAccountActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _approve_shares_account_approve_shares_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approve-shares-account/approve-shares-account.component */ "./src/app/shares/shares-account-actions/approve-shares-account/approve-shares-account.component.ts");
/* harmony import */ var _reject_shares_account_reject_shares_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reject-shares-account/reject-shares-account.component */ "./src/app/shares/shares-account-actions/reject-shares-account/reject-shares-account.component.ts");
/* harmony import */ var _close_shares_account_close_shares_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./close-shares-account/close-shares-account.component */ "./src/app/shares/shares-account-actions/close-shares-account/close-shares-account.component.ts");
/* harmony import */ var _activate_shares_account_activate_shares_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activate-shares-account/activate-shares-account.component */ "./src/app/shares/shares-account-actions/activate-shares-account/activate-shares-account.component.ts");
/* harmony import */ var _undo_approval_shares_account_undo_approval_shares_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./undo-approval-shares-account/undo-approval-shares-account.component */ "./src/app/shares/shares-account-actions/undo-approval-shares-account/undo-approval-shares-account.component.ts");
/* harmony import */ var _apply_shares_apply_shares_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apply-shares/apply-shares.component */ "./src/app/shares/shares-account-actions/apply-shares/apply-shares.component.ts");
/* harmony import */ var _redeem_shares_redeem_shares_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redeem-shares/redeem-shares.component */ "./src/app/shares/shares-account-actions/redeem-shares/redeem-shares.component.ts");
/* harmony import */ var _approve_shares_approve_shares_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./approve-shares/approve-shares.component */ "./src/app/shares/shares-account-actions/approve-shares/approve-shares.component.ts");
/* harmony import */ var _reject_shares_reject_shares_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reject-shares/reject-shares.component */ "./src/app/shares/shares-account-actions/reject-shares/reject-shares.component.ts");
/** Angular Imports */














function SharesAccountActionsComponent_mifosx_approve_shares_account_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-approve-shares-account");
} }
function SharesAccountActionsComponent_mifosx_reject_shares_account_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-reject-shares-account");
} }
function SharesAccountActionsComponent_mifosx_close_shares_account_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-close-shares-account");
} }
function SharesAccountActionsComponent_mifosx_activate_shares_account_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-activate-shares-account");
} }
function SharesAccountActionsComponent_mifosx_undo_approval_shares_account_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-undo-approval-shares-account");
} }
function SharesAccountActionsComponent_mifosx_apply_shares_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-apply-shares");
} }
function SharesAccountActionsComponent_mifosx_redeem_shares_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-redeem-shares");
} }
function SharesAccountActionsComponent_mifosx_approve_shares_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-approve-shares");
} }
function SharesAccountActionsComponent_mifosx_reject_shares_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mifosx-reject-shares");
} }
/**
 * Shares Account Actions Component
 */
var SharesAccountActionsComponent = /** @class */ (function () {
    /**
     * @param {ActivatedRoute} route Activated Route
     */
    function SharesAccountActionsComponent(route) {
        this.route = route;
        /** Flag object to store possible actions and render appropriate UI to the user */
        this.actions = {
            'Approve': false,
            'Reject': false,
            'Close': false,
            'Activate': false,
            'Undo Approval': false,
            'Apply Additional Shares': false,
            'Redeem Shares': false,
            'Approve Additional Shares': false,
            'Reject Additional Shares': false
        };
        var name = this.route.snapshot.params['name'];
        this.actions[name] = true;
    }
    SharesAccountActionsComponent.ɵfac = function SharesAccountActionsComponent_Factory(t) { return new (t || SharesAccountActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    SharesAccountActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharesAccountActionsComponent, selectors: [["mifosx-shares-account-actions"]], decls: 17, vars: 9, consts: [[4, "ngIf"]], template: function SharesAccountActionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SharesAccountActionsComponent_mifosx_approve_shares_account_0_Template, 1, 0, "mifosx-approve-shares-account", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SharesAccountActionsComponent_mifosx_reject_shares_account_2_Template, 1, 0, "mifosx-reject-shares-account", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SharesAccountActionsComponent_mifosx_close_shares_account_4_Template, 1, 0, "mifosx-close-shares-account", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SharesAccountActionsComponent_mifosx_activate_shares_account_6_Template, 1, 0, "mifosx-activate-shares-account", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SharesAccountActionsComponent_mifosx_undo_approval_shares_account_8_Template, 1, 0, "mifosx-undo-approval-shares-account", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SharesAccountActionsComponent_mifosx_apply_shares_10_Template, 1, 0, "mifosx-apply-shares", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SharesAccountActionsComponent_mifosx_redeem_shares_12_Template, 1, 0, "mifosx-redeem-shares", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SharesAccountActionsComponent_mifosx_approve_shares_14_Template, 1, 0, "mifosx-approve-shares", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SharesAccountActionsComponent_mifosx_reject_shares_16_Template, 1, 0, "mifosx-reject-shares", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Approve"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Reject"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Close"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Activate"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Undo Approval"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Apply Additional Shares"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Redeem Shares"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Approve Additional Shares"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions["Reject Additional Shares"]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _approve_shares_account_approve_shares_account_component__WEBPACK_IMPORTED_MODULE_3__["ApproveSharesAccountComponent"], _reject_shares_account_reject_shares_account_component__WEBPACK_IMPORTED_MODULE_4__["RejectSharesAccountComponent"], _close_shares_account_close_shares_account_component__WEBPACK_IMPORTED_MODULE_5__["CloseSharesAccountComponent"], _activate_shares_account_activate_shares_account_component__WEBPACK_IMPORTED_MODULE_6__["ActivateSharesAccountComponent"], _undo_approval_shares_account_undo_approval_shares_account_component__WEBPACK_IMPORTED_MODULE_7__["UndoApprovalSharesAccountComponent"], _apply_shares_apply_shares_component__WEBPACK_IMPORTED_MODULE_8__["ApplySharesComponent"], _redeem_shares_redeem_shares_component__WEBPACK_IMPORTED_MODULE_9__["RedeemSharesComponent"], _approve_shares_approve_shares_component__WEBPACK_IMPORTED_MODULE_10__["ApproveSharesComponent"], _reject_shares_reject_shares_component__WEBPACK_IMPORTED_MODULE_11__["RejectSharesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SharesAccountActionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesAccountActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-shares-account-actions',
                templateUrl: './shares-account-actions.component.html',
                styleUrls: ['./shares-account-actions.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-actions/undo-approval-shares-account/undo-approval-shares-account.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-actions/undo-approval-shares-account/undo-approval-shares-account.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: UndoApprovalSharesAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoApprovalSharesAccountComponent", function() { return UndoApprovalSharesAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/** Angular Imports */


/** Custom Services */








var _c0 = function () { return ["../../"]; };
/**
 * Undo Approval Shares Account Component
 */
var UndoApprovalSharesAccountComponent = /** @class */ (function () {
    /**
     * @param {SharesService} sharesService Shares Service
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     */
    function UndoApprovalSharesAccountComponent(sharesService, route, router) {
        this.sharesService = sharesService;
        this.route = route;
        this.router = router;
        this.accountId = this.route.parent.snapshot.params['shareAccountId'];
    }
    /**
     * Submits the form and undo the approval of share account,
     * if successful redirects to the share account.
     */
    UndoApprovalSharesAccountComponent.prototype.submit = function () {
        var _this = this;
        this.sharesService.executeSharesAccountCommand(this.accountId, 'undoapproval', {}).subscribe(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    UndoApprovalSharesAccountComponent.ɵfac = function UndoApprovalSharesAccountComponent_Factory(t) { return new (t || UndoApprovalSharesAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_2__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    UndoApprovalSharesAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UndoApprovalSharesAccountComponent, selectors: [["mifosx-undo-approval-shares-account"]], decls: 27, vars: 3, consts: [[1, "container"], [3, "ngSubmit"], [1, "mat-typography", "confirm-text"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "5px"], ["type", "button", "mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]], template: function UndoApprovalSharesAccountComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UndoApprovalSharesAccountComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            Are you sure you want to undo approval of shares account with ID: ", ctx.accountId, " ?\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37rem;\n}\n.container[_ngcontent-%COMP%]   .confirm-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvdW5kby1hcHByb3ZhbC1zaGFyZXMtYWNjb3VudC9DOlxcR2l0SHViXFx3ZWItYXBwL3NyY1xcYXBwXFxzaGFyZXNcXHNoYXJlcy1hY2NvdW50LWFjdGlvbnNcXHVuZG8tYXBwcm92YWwtc2hhcmVzLWFjY291bnRcXHVuZG8tYXBwcm92YWwtc2hhcmVzLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1hY3Rpb25zL3VuZG8tYXBwcm92YWwtc2hhcmVzLWFjY291bnQvdW5kby1hcHByb3ZhbC1zaGFyZXMtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LWFjdGlvbnMvdW5kby1hcHByb3ZhbC1zaGFyZXMtYWNjb3VudC91bmRvLWFwcHJvdmFsLXNoYXJlcy1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAzN3JlbTtcclxuICAuY29uZmlybS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzdyZW07XG59XG4uY29udGFpbmVyIC5jb25maXJtLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
    return UndoApprovalSharesAccountComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UndoApprovalSharesAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-undo-approval-shares-account',
                templateUrl: './undo-approval-shares-account.component.html',
                styleUrls: ['./undo-approval-shares-account.component.scss']
            }]
    }], function () { return [{ type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_2__["SharesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-stepper/shares-account-charges-step/shares-account-charges-step.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-stepper/shares-account-charges-step/shares-account-charges-step.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SharesAccountChargesStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountChargesStepComponent", function() { return SharesAccountChargesStepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/delete-dialog/delete-dialog.component */ "./src/app/shared/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var app_shared_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/form-dialog/form-dialog.component */ "./src/app/shared/form-dialog/form-dialog.component.ts");
/* harmony import */ var app_shared_form_dialog_formfield_model_input_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/form-dialog/formfield/model/input-base */ "./src/app/shared/form-dialog/formfield/model/input-base.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm5/stepper.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");
/* harmony import */ var _pipes_charges_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../pipes/charges-filter.pipe */ "./src/app/pipes/charges-filter.pipe.ts");

/** Angular Imports */



/** Custom Dialogs */















function SharesAccountChargesStepComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", charge_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n        ", charge_r14.name, "\n      ");
} }
function SharesAccountChargesStepComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SharesAccountChargesStepComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n        ", charge_r15.name + ", " + charge_r15.currency.displaySymbol, "\n      ");
} }
function SharesAccountChargesStepComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SharesAccountChargesStepComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n        ", charge_r16.chargeCalculationType.value, "\n      ");
} }
function SharesAccountChargesStepComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SharesAccountChargesStepComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SharesAccountChargesStepComponent_td_43_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); var charge_r17 = ctx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.editCharge(charge_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n        ", charge_r17.amount || charge_r17.amountOrPercentage, " \n        ");
} }
function SharesAccountChargesStepComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Collected On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SharesAccountChargesStepComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n        ", charge_r20.chargeTimeType.value, "\n      ");
} }
function SharesAccountChargesStepComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SharesAccountChargesStepComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SharesAccountChargesStepComponent_td_57_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); var charge_r21 = ctx.$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.deleteCharge(charge_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SharesAccountChargesStepComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 29);
} }
function SharesAccountChargesStepComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 30);
} }
/**
 * Shares Account Charges Step
 */
var SharesAccountChargesStepComponent = /** @class */ (function () {
    /**
     * @param {MatDialog} dialog Mat Dialog
     */
    function SharesAccountChargesStepComponent(dialog) {
        this.dialog = dialog;
        /** Charge Data */
        this.chargeData = [];
        /** Charges Data Source */
        this.chargesDataSource = [];
        /** Component is pristine if there has been no changes by user interaction */
        this.pristine = true;
        /** For Edit Shares Account Form */
        this.isChargesPatched = false;
        /** Display columns for charges table */
        this.displayedColumns = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType', 'action'];
    }
    SharesAccountChargesStepComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currencyCode.valueChanges.subscribe(function () {
            if (!_this.isChargesPatched && _this.sharesAccountTemplate.charges) {
                _this.chargesDataSource = _this.sharesAccountTemplate.charges;
                _this.isChargesPatched = true;
            }
            else {
                _this.chargesDataSource = [];
            }
        });
    };
    SharesAccountChargesStepComponent.prototype.ngOnChanges = function () {
        if (this.sharesAccountProductTemplate) {
            this.chargeData = this.sharesAccountProductTemplate.charges;
        }
    };
    /**
     * Adds the charge to charges table
     * @param {any} charge Charge
     */
    SharesAccountChargesStepComponent.prototype.addCharge = function (charge) {
        this.chargesDataSource = this.chargesDataSource.concat([charge.value]);
        charge.value = '';
        this.pristine = false;
    };
    /**
     * Edits Charge Amount
     * @param {any} charge Charge
     */
    SharesAccountChargesStepComponent.prototype.editCharge = function (charge) {
        var _this = this;
        var formfields = [
            new app_shared_form_dialog_formfield_model_input_base__WEBPACK_IMPORTED_MODULE_6__["InputBase"]({
                controlName: 'amount',
                label: 'Amount',
                value: charge.amount || charge.amountOrPercentage,
                type: 'number',
                required: false,
            }),
        ];
        var data = {
            title: 'Edit Charge',
            layout: { addButtonText: 'Confirm' },
            formfields: formfields
        };
        var editNoteDialogRef = this.dialog.open(app_shared_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FormDialogComponent"], { data: data });
        editNoteDialogRef.afterClosed().subscribe(function (response) {
            if (response.data) {
                var newCharge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, charge), { amount: response.data.value.amount });
                _this.chargesDataSource.splice(_this.chargesDataSource.indexOf(charge), 1, newCharge);
                _this.chargesDataSource = _this.chargesDataSource.concat([]);
            }
        });
        this.pristine = false;
    };
    /**
     * Removes the charge from charges table
     * @param {any} charge Charge
     */
    SharesAccountChargesStepComponent.prototype.deleteCharge = function (charge) {
        var _this = this;
        var deleteChargeDialogRef = this.dialog.open(app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"], {
            data: { deleteContext: "charge " + charge.name }
        });
        deleteChargeDialogRef.afterClosed().subscribe(function (response) {
            if (response.delete) {
                _this.chargesDataSource.splice(_this.chargesDataSource.indexOf(charge), 1);
                _this.chargesDataSource = _this.chargesDataSource.concat([]);
            }
        });
        this.pristine = false;
    };
    Object.defineProperty(SharesAccountChargesStepComponent.prototype, "sharesAccountCharges", {
        /**
         * Returns shares account charges
         */
        get: function () {
            return { charges: this.chargesDataSource };
        },
        enumerable: true,
        configurable: true
    });
    SharesAccountChargesStepComponent.ɵfac = function SharesAccountChargesStepComponent_Factory(t) { return new (t || SharesAccountChargesStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
    SharesAccountChargesStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SharesAccountChargesStepComponent, selectors: [["mifosx-shares-account-charges-step"]], inputs: { sharesAccountProductTemplate: "sharesAccountProductTemplate", sharesAccountTemplate: "sharesAccountTemplate", currencyCode: "currencyCode" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 79, vars: 10, consts: [["fxLayout", "row wrap", "fxLayoutGap", "2%", "fxLayout.lt-md", "column"], ["fxFlex", "48%"], ["charge", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "48%", "fxFlexAlign", "center"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["icon", "plus"], ["fxFlex", "98%", "mat-table", "", 1, "mat-elevation-z1", 3, "dataSource", "hidden"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "chargeCalculationType"], ["matColumnDef", "amount"], ["matColumnDef", "chargeTimeType"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "2%", 1, "margin-t"], ["mat-raised-button", "", "matStepperPrevious", ""], ["icon", "arrow-left"], ["mat-raised-button", "", "matStepperNext", ""], ["icon", "arrow-right"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["icon", "pen"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["icon", "trash"], ["mat-header-row", ""], ["mat-row", ""]], template: function SharesAccountChargesStepComponent_Template(rf, ctx) { if (rf & 1) {
            var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Charge");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", null, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SharesAccountChargesStepComponent_mat_option_10_Template, 2, 2, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "chargesFilter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SharesAccountChargesStepComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.addCharge(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "fa-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0\n      Add\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SharesAccountChargesStepComponent_th_27_Template, 2, 0, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SharesAccountChargesStepComponent_td_29_Template, 2, 1, "td", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SharesAccountChargesStepComponent_th_34_Template, 2, 0, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SharesAccountChargesStepComponent_td_36_Template, 2, 1, "td", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, SharesAccountChargesStepComponent_th_41_Template, 2, 0, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SharesAccountChargesStepComponent_td_43_Template, 7, 1, "td", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, SharesAccountChargesStepComponent_th_48_Template, 2, 0, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, SharesAccountChargesStepComponent_td_50_Template, 2, 1, "td", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](53, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, SharesAccountChargesStepComponent_th_55_Template, 2, 0, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, SharesAccountChargesStepComponent_td_57_Template, 7, 0, "td", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, SharesAccountChargesStepComponent_tr_60_Template, 1, 0, "tr", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, SharesAccountChargesStepComponent_tr_62_Template, 1, 0, "tr", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "fa-icon", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u00A0\u00A0\n    Previous\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n    Next\u00A0\u00A0\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "fa-icon", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 6, ctx.chargeData, ctx.chargesDataSource, ctx.currencyCode.value));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.chargesDataSource)("hidden", ctx.chargesDataSource.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperNext"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"]], pipes: [_pipes_charges_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["ChargesFilterPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-elevation-z1[_ngcontent-%COMP%] {\n  margin: 1em 0 1.5em 0;\n}\n\n.margin-t[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXN0ZXBwZXIvc2hhcmVzLWFjY291bnQtY2hhcmdlcy1zdGVwL0M6XFxHaXRIdWJcXHdlYi1hcHAvc3JjXFxhcHBcXHNoYXJlc1xcc2hhcmVzLWFjY291bnQtc3RlcHBlclxcc2hhcmVzLWFjY291bnQtY2hhcmdlcy1zdGVwXFxzaGFyZXMtYWNjb3VudC1jaGFyZ2VzLXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1zdGVwcGVyL3NoYXJlcy1hY2NvdW50LWNoYXJnZXMtc3RlcC9zaGFyZXMtYWNjb3VudC1jaGFyZ2VzLXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXN0ZXBwZXIvc2hhcmVzLWFjY291bnQtY2hhcmdlcy1zdGVwL3NoYXJlcy1hY2NvdW50LWNoYXJnZXMtc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejEge1xyXG4gIG1hcmdpbjogMWVtIDAgMS41ZW0gMDtcclxufVxyXG5cclxuLm1hcmdpbi10IHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejEge1xuICBtYXJnaW46IDFlbSAwIDEuNWVtIDA7XG59XG5cbi5tYXJnaW4tdCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn0iXX0= */"] });
    return SharesAccountChargesStepComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharesAccountChargesStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mifosx-shares-account-charges-step',
                templateUrl: './shares-account-charges-step.component.html',
                styleUrls: ['./shares-account-charges-step.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { sharesAccountProductTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sharesAccountTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currencyCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shares/shares-account-stepper/shares-account-details-step/shares-account-details-step.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-stepper/shares-account-details-step/shares-account-details-step.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SharesAccountDetailsStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountDetailsStepComponent", function() { return SharesAccountDetailsStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shares_shares_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shares/shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm5/stepper.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");
/** Angular Imports */


/** Custom Services */














function SharesAccountDetailsStepComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", product_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", product_r2.name, "\n        ");
} }
/**
 * Shares Account Details Step
 */
var SharesAccountDetailsStepComponent = /** @class */ (function () {
    /**
     * Sets share account details form.
     * @param {FormBuilder} formBuilder Form Builder.
     * @param {SharesService} sharesService Shares Service.
     */
    function SharesAccountDetailsStepComponent(formBuilder, sharesService) {
        this.formBuilder = formBuilder;
        this.sharesService = sharesService;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        /** Shares Account Template with product data  */
        this.sharesAccountProductTemplate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createSharesAccountDetailsForm();
    }
    SharesAccountDetailsStepComponent.prototype.ngOnInit = function () {
        this.buildDependencies();
        if (this.sharesAccountTemplate) {
            this.productData = this.sharesAccountTemplate.productOptions;
            if (this.sharesAccountTemplate.productId) {
                this.sharesAccountDetailsForm.patchValue({
                    'productId': this.sharesAccountTemplate.productId,
                    'submittedDate': this.sharesAccountTemplate.timeline.submittedOnDate && new Date(this.sharesAccountTemplate.timeline.submittedOnDate),
                    'externalId': this.sharesAccountTemplate.externalId
                });
            }
        }
    };
    /**
     * Creates shares account details form.
     */
    SharesAccountDetailsStepComponent.prototype.createSharesAccountDetailsForm = function () {
        this.sharesAccountDetailsForm = this.formBuilder.group({
            'productId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'submittedDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'externalId': ['']
        });
    };
    /**
     * Fetches shares account product template on productId value changes
     */
    SharesAccountDetailsStepComponent.prototype.buildDependencies = function () {
        var _this = this;
        var clientId = this.sharesAccountTemplate.clientId;
        this.sharesAccountDetailsForm.get('productId').valueChanges.subscribe(function (productId) {
            _this.sharesService.getSharesAccountTemplate(clientId, productId).subscribe(function (response) {
                _this.sharesAccountProductTemplate.emit(response);
            });
        });
    };
    Object.defineProperty(SharesAccountDetailsStepComponent.prototype, "sharesAccountDetails", {
        /**
         * Returns shares account form value.
         */
        get: function () {
            return this.sharesAccountDetailsForm.value;
        },
        enumerable: true,
        configurable: true
    });
    SharesAccountDetailsStepComponent.ɵfac = function SharesAccountDetailsStepComponent_Factory(t) { return new (t || SharesAccountDetailsStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shares_shares_service__WEBPACK_IMPORTED_MODULE_2__["SharesService"])); };
    SharesAccountDetailsStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharesAccountDetailsStepComponent, selectors: [["mifosx-shares-account-details-step"]], inputs: { sharesAccountTemplate: "sharesAccountTemplate" }, outputs: { sharesAccountProductTemplate: "sharesAccountProductTemplate" }, decls: 63, vars: 6, consts: [[3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "2%", "fxLayout.lt-md", "column"], ["fxFlex", "48%"], ["formControlName", "productId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "submittedDate", "required", "", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["submittedOnDatePicker", ""], ["matInput", "", "formControlName", "externalId"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "2%", 1, "margin-t"], ["mat-raised-button", "", "matStepperPrevious", "", "disabled", ""], ["icon", "arrow-left"], ["mat-raised-button", "", "matStepperNext", ""], ["icon", "arrow-right"], [3, "value"]], template: function SharesAccountDetailsStepComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SharesAccountDetailsStepComponent_mat_option_11_Template, 2, 2, "mat-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        Product Name is ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submitted On");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-datepicker-toggle", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker", null, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n        Submission Date is ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "External ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "fa-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u00A0\u00A0\n      Previous\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n      Next\u00A0\u00A0\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "fa-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n");
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sharesAccountDetailsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperPrevious"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperNext"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1zdGVwcGVyL3NoYXJlcy1hY2NvdW50LWRldGFpbHMtc3RlcC9zaGFyZXMtYWNjb3VudC1kZXRhaWxzLXN0ZXAuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SharesAccountDetailsStepComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesAccountDetailsStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-shares-account-details-step',
                templateUrl: './shares-account-details-step.component.html',
                styleUrls: ['./shares-account-details-step.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shares_shares_service__WEBPACK_IMPORTED_MODULE_2__["SharesService"] }]; }, { sharesAccountTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sharesAccountProductTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shares/shares-account-stepper/shares-account-preview-step/shares-account-preview-step.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-stepper/shares-account-preview-step/shares-account-preview-step.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SharesAccountPreviewStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountPreviewStepComponent", function() { return SharesAccountPreviewStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm5/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm5/stepper.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _pipes_find_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/find.pipe */ "./src/app/pipes/find.pipe.ts");
/** Angular Imports */











function SharesAccountPreviewStepComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Minimum Active Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "find");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.sharesAccount.minimumActivePeriod, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 2, ctx_r0.sharesAccount.minimumActivePeriodFrequencyType, ctx_r0.sharesAccountProductTemplate.minimumActivePeriodFrequencyTypeOptions, "id", "value"), "");
} }
function SharesAccountPreviewStepComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lock-in Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "find");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.sharesAccount.lockinPeriodFrequency, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 2, ctx_r1.sharesAccount.lockinPeriodFrequencyType, ctx_r1.sharesAccountProductTemplate.lockinPeriodFrequencyTypeOptions, "id", "value"), "");
} }
function SharesAccountPreviewStepComponent_div_120_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesAccountPreviewStepComponent_div_120_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", charge_r13.name + ", " + charge_r13.currency.displaySymbol, "\n        ");
} }
function SharesAccountPreviewStepComponent_div_120_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesAccountPreviewStepComponent_div_120_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", charge_r14.chargeCalculationType.value, "\n        ");
} }
function SharesAccountPreviewStepComponent_div_120_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesAccountPreviewStepComponent_div_120_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", charge_r15.amount || charge_r15.amountOrPercentage, "\n        ");
} }
function SharesAccountPreviewStepComponent_div_120_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Collected On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesAccountPreviewStepComponent_div_120_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", charge_r16.chargeTimeType.value, "\n        ");
} }
function SharesAccountPreviewStepComponent_div_120_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function SharesAccountPreviewStepComponent_div_120_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function SharesAccountPreviewStepComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SharesAccountPreviewStepComponent_div_120_th_11_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SharesAccountPreviewStepComponent_div_120_td_13_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SharesAccountPreviewStepComponent_div_120_th_18_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SharesAccountPreviewStepComponent_div_120_td_20_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SharesAccountPreviewStepComponent_div_120_th_25_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SharesAccountPreviewStepComponent_div_120_td_27_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SharesAccountPreviewStepComponent_div_120_th_32_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SharesAccountPreviewStepComponent_div_120_td_34_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SharesAccountPreviewStepComponent_div_120_tr_37_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SharesAccountPreviewStepComponent_div_120_tr_39_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r2.sharesAccount.charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.chargesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r2.chargesDisplayedColumns);
} }
var _c0 = function (a0) { return [a0]; };
var _c1 = function () { return ["../"]; };
/**
 * Shares account preview step
 */
var SharesAccountPreviewStepComponent = /** @class */ (function () {
    function SharesAccountPreviewStepComponent() {
        /** Display columns for charges table. */
        this.chargesDisplayedColumns = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];
        /** Form submission event */
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SharesAccountPreviewStepComponent.ɵfac = function SharesAccountPreviewStepComponent_Factory(t) { return new (t || SharesAccountPreviewStepComponent)(); };
    SharesAccountPreviewStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharesAccountPreviewStepComponent, selectors: [["mifosx-shares-account-preview-step"]], inputs: { sharesAccountProductTemplate: "sharesAccountProductTemplate", sharesAccountTemplate: "sharesAccountTemplate", sharesAccountTermsForm: "sharesAccountTermsForm", sharesAccount: "sharesAccount" }, outputs: { submit: "submit" }, decls: 137, vars: 37, consts: [["fxLayout", "row wrap", "fxLayout.lt-md", "column"], ["fxFlexFill", "", 1, "mat-h3"], ["fxFlexFill", ""], ["fxFlex", "40%"], ["fxFlex", "60%"], ["fxFlexFill", "", 4, "ngIf"], ["fxFlexFill", "", "fxLayout", "row wrap", "fxLayout.lt-md", "column", 4, "ngIf"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "2%", 1, "margin-t"], ["mat-raised-button", "", "matStepperPrevious", ""], ["icon", "arrow-left"], ["mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxFlexFill", "", "fxLayout", "row wrap", "fxLayout.lt-md", "column"], ["fxFlexFill", "", "mat-table", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "chargeCalculationType"], ["matColumnDef", "amount"], ["matColumnDef", "chargeTimeType"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function SharesAccountPreviewStepComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "find");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submitted On");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "External Id");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Terms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-divider", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "find");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Decimal Places");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Total Number of Shares");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Today's Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Currency in multiples of");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Default Savings Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "find");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, SharesAccountPreviewStepComponent_div_97_Template, 9, 7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SharesAccountPreviewStepComponent_div_99_Template, 9, 7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Application Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Allow dividends for inactive clients");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, SharesAccountPreviewStepComponent_div_120_Template, 42, 3, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "fa-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u00A0\u00A0\n    Previous\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n    Cancel\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharesAccountPreviewStepComponent_Template_button_click_133_listener() { return ctx.submit.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n    Submit\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](14, 15, ctx.sharesAccount.productId, ctx.sharesAccountTemplate.productOptions, "id", "name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 20, ctx.sharesAccount.submittedDate));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccount.externalId || "Unassigned");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](48, 22, ctx.sharesAccountTermsForm.get("currencyCode").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.sharesAccountProductTemplate.currency), "code", "displayLabel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccountTermsForm.get("decimal").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccount.requestedShares);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccountTermsForm.get("unitPrice").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccountTermsForm.get("currencyMultiple").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](94, 27, ctx.sharesAccount.savingsAccountId, ctx.sharesAccountProductTemplate.clientSavingsAccounts, "id", "accountNo"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sharesAccount.minimumActivePeriod);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sharesAccount.lockinPeriodFrequency);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 32, ctx.sharesAccount.applicationDate));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccount.allowDividendCalculationForInactiveClients);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sharesAccount.charges.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c1));
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], pipes: [_pipes_find_pipe__WEBPACK_IMPORTED_MODULE_9__["FindPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-elevation-z1[_ngcontent-%COMP%] {\n  margin: 1em 0 1.5em 0;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin: 0 0 0.5em 0;\n}\n\n.margin-t[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXN0ZXBwZXIvc2hhcmVzLWFjY291bnQtcHJldmlldy1zdGVwL0M6XFxHaXRIdWJcXHdlYi1hcHAvc3JjXFxhcHBcXHNoYXJlc1xcc2hhcmVzLWFjY291bnQtc3RlcHBlclxcc2hhcmVzLWFjY291bnQtcHJldmlldy1zdGVwXFxzaGFyZXMtYWNjb3VudC1wcmV2aWV3LXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1zdGVwcGVyL3NoYXJlcy1hY2NvdW50LXByZXZpZXctc3RlcC9zaGFyZXMtYWNjb3VudC1wcmV2aWV3LXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXN0ZXBwZXIvc2hhcmVzLWFjY291bnQtcHJldmlldy1zdGVwL3NoYXJlcy1hY2NvdW50LXByZXZpZXctc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejEge1xyXG4gIG1hcmdpbjogMWVtIDAgMS41ZW0gMDtcclxufVxyXG5cclxuaDIsIGgzLCBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIG1hcmdpbjogMC41ZW0gMDtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcbn1cclxuXHJcbi5tYXJnaW4tdCB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxIHtcbiAgbWFyZ2luOiAxZW0gMCAxLjVlbSAwO1xufVxuXG5oMiwgaDMsIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5zcGFuIHtcbiAgbWFyZ2luOiAwLjVlbSAwO1xufVxuXG5tYXQtZGl2aWRlciB7XG4gIG1hcmdpbjogMCAwIDAuNWVtIDA7XG59XG5cbi5tYXJnaW4tdCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn0iXX0= */"] });
    return SharesAccountPreviewStepComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesAccountPreviewStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-shares-account-preview-step',
                templateUrl: './shares-account-preview-step.component.html',
                styleUrls: ['./shares-account-preview-step.component.scss']
            }]
    }], function () { return []; }, { sharesAccountProductTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sharesAccountTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sharesAccountTermsForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sharesAccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shares/shares-account-stepper/shares-account-terms-step/shares-account-terms-step.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shares/shares-account-stepper/shares-account-terms-step/shares-account-terms-step.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: SharesAccountTermsStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountTermsStepComponent", function() { return SharesAccountTermsStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm5/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm5/stepper.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");
/** Angular Imports */















function SharesAccountTermsStepComponent_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var account_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", account_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", account_r4.accountNo, "\n        ");
} }
function SharesAccountTermsStepComponent_mat_option_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var minimumActivePeriodFrequencyType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", minimumActivePeriodFrequencyType_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", minimumActivePeriodFrequencyType_r5.value, "\n        ");
} }
function SharesAccountTermsStepComponent_mat_option_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lockinPeriodFrequencyType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lockinPeriodFrequencyType_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", lockinPeriodFrequencyType_r6.value, "\n        ");
} }
/**
 * Shares Account Terms Step
 */
var SharesAccountTermsStepComponent = /** @class */ (function () {
    /**
     * @param {FormBuilder} formBuilder Form Builder
     */
    function SharesAccountTermsStepComponent(formBuilder) {
        this.formBuilder = formBuilder;
        /** Minimum date allowed. */
        this.minDate = new Date(2000, 0, 1);
        /** Maximum date allowed. */
        this.maxDate = new Date();
        /** For Edit Shares Account Form */
        this.isSavingsPatched = false;
        this.createSharesAccountTermsForm();
    }
    SharesAccountTermsStepComponent.prototype.ngOnChanges = function () {
        if (this.sharesAccountProductTemplate) {
            this.sharesAccountTermsForm.patchValue({
                'currencyCode': this.sharesAccountProductTemplate.currency.code,
                'decimal': this.sharesAccountProductTemplate.currency.decimalPlaces,
                'currencyMultiple': this.sharesAccountProductTemplate.currency.inMultiplesOf,
                'unitPrice': this.sharesAccountProductTemplate.currentMarketPrice,
                'savingsAccountId': ''
            });
            this.setOptions();
            if (this.sharesAccountTemplate) {
                if (!this.isSavingsPatched && this.sharesAccountTemplate.savingsAccountId) {
                    this.sharesAccountTermsForm.get('savingsAccountId').patchValue(this.sharesAccountTemplate.savingsAccountId);
                    this.isSavingsPatched = true;
                }
            }
        }
    };
    SharesAccountTermsStepComponent.prototype.ngOnInit = function () {
        if (this.sharesAccountTemplate) {
            this.sharesAccountTermsForm.patchValue({
                'requestedShares': this.sharesAccountTemplate.summary.totalPendingForApprovalShares,
                'minimumActivePeriod': this.sharesAccountTemplate.minimumActivePeriod,
                'minimumActivePeriodFrequencyType': this.sharesAccountTemplate.minimumActivePeriod && this.sharesAccountTemplate.minimumActivePeriodTypeEnum.id,
                'lockinPeriodFrequency': this.sharesAccountTemplate.lockinPeriod,
                'lockinPeriodFrequencyType': this.sharesAccountTemplate.lockinPeriod && this.sharesAccountTemplate.lockPeriodTypeEnum.id,
                'applicationDate': this.sharesAccountTemplate.purchasedShares[0].purchasedDate && new Date(this.sharesAccountTemplate.purchasedShares[0].purchasedDate),
                'allowDividendCalculationForInactiveClients': this.sharesAccountTemplate.allowDividendCalculationForInactiveClients
            });
        }
    };
    /**
     * Creates shares account terms form.
     */
    SharesAccountTermsStepComponent.prototype.createSharesAccountTermsForm = function () {
        this.sharesAccountTermsForm = this.formBuilder.group({
            'currencyCode': [{ value: '', disabled: true }],
            'decimal': [{ value: '', disabled: true }],
            'requestedShares': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'unitPrice': [{ value: '', disabled: true }],
            'currencyMultiple': [{ value: '', disabled: true }],
            'savingsAccountId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'minimumActivePeriod': [''],
            'minimumActivePeriodFrequencyType': [''],
            'lockinPeriodFrequency': [''],
            'lockinPeriodFrequencyType': [''],
            'applicationDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'allowDividendCalculationForInactiveClients': [false]
        });
    };
    /**
     * Sets all select dropdown options.
     */
    SharesAccountTermsStepComponent.prototype.setOptions = function () {
        this.minimumActivePeriodFrequencyTypeData = this.sharesAccountProductTemplate.minimumActivePeriodFrequencyTypeOptions;
        this.lockinPeriodFrequencyTypeData = this.sharesAccountProductTemplate.lockinPeriodFrequencyTypeOptions;
        this.savingsAccountsData = this.sharesAccountProductTemplate.clientSavingsAccounts;
    };
    Object.defineProperty(SharesAccountTermsStepComponent.prototype, "sharesAccountTerms", {
        /**
         * Returns shares account terms form value.
         */
        get: function () {
            return this.sharesAccountTermsForm.value;
        },
        enumerable: true,
        configurable: true
    });
    SharesAccountTermsStepComponent.ɵfac = function SharesAccountTermsStepComponent_Factory(t) { return new (t || SharesAccountTermsStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    SharesAccountTermsStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharesAccountTermsStepComponent, selectors: [["mifosx-shares-account-terms-step"]], inputs: { sharesAccountProductTemplate: "sharesAccountProductTemplate", sharesAccountTemplate: "sharesAccountTemplate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 148, vars: 8, consts: [[3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "2%", "fxLayout.lt-md", "column", "fxLayoutAlign.gt-sm", "start center"], ["fxFlex", "48%"], ["matInput", "", "formControlName", "currencyCode"], ["type", "number", "matInput", "", "formControlName", "decimal"], ["type", "number", "matInput", "", "formControlName", "requestedShares", "required", ""], ["type", "number", "matInput", "", "formControlName", "unitPrice"], ["type", "number", "matInput", "", "formControlName", "currencyMultiple"], ["formControlName", "savingsAccountId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "applicationDate", "required", "", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["applicationDatePicker", ""], ["labelPosition", "before", "formControlName", "allowDividendCalculationForInactiveClients", "fxFlex", "48%"], ["fxFlex", "98%", 1, "mat-h4"], ["type", "number", "matInput", "", "formControlName", "minimumActivePeriod"], ["formControlName", "minimumActivePeriodFrequencyType"], ["type", "number", "matInput", "", "formControlName", "lockinPeriodFrequency"], ["formControlName", "lockinPeriodFrequencyType"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "2%", 1, "margin-t"], ["mat-raised-button", "", "matStepperPrevious", "", "disabled", ""], ["icon", "arrow-left"], ["mat-raised-button", "", "matStepperNext", ""], ["icon", "arrow-right"], [3, "value"]], template: function SharesAccountTermsStepComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Decimal Places");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Number of Shares");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n        Total Number of Shares is ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Today's Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Currency in multiples of");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Default Savings Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, SharesAccountTermsStepComponent_mat_option_57_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n        Default Savings Account is ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Application Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-datepicker-toggle", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "mat-datepicker", null, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n        Application Date is ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-checkbox", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n      Allow dividends for inactive clients\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Minimum Active Period");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Frequency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, SharesAccountTermsStepComponent_mat_option_107_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Lock-in Period");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Frequency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, SharesAccountTermsStepComponent_mat_option_129_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "fa-icon", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u00A0\u00A0\n      Previous\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\n      Next\u00A0\u00A0\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "fa-icon", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\n");
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sharesAccountTermsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.savingsAccountsData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.minimumActivePeriodFrequencyTypeData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lockinPeriodFrequencyTypeData);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperPrevious"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperNext"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: ["h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 1em 0;\n}\n\n.margin-t[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXN0ZXBwZXIvc2hhcmVzLWFjY291bnQtdGVybXMtc3RlcC9DOlxcR2l0SHViXFx3ZWItYXBwL3NyY1xcYXBwXFxzaGFyZXNcXHNoYXJlcy1hY2NvdW50LXN0ZXBwZXJcXHNoYXJlcy1hY2NvdW50LXRlcm1zLXN0ZXBcXHNoYXJlcy1hY2NvdW50LXRlcm1zLXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC1zdGVwcGVyL3NoYXJlcy1hY2NvdW50LXRlcm1zLXN0ZXAvc2hhcmVzLWFjY291bnQtdGVybXMtc3RlcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXN0ZXBwZXIvc2hhcmVzLWFjY291bnQtdGVybXMtc3RlcC9zaGFyZXMtYWNjb3VudC10ZXJtcy1zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxufVxyXG5cclxuLm1hcmdpbi10IHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuIiwiaDQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG4ubWFyZ2luLXQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59Il19 */"] });
    return SharesAccountTermsStepComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesAccountTermsStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-shares-account-terms-step',
                templateUrl: './shares-account-terms-step.component.html',
                styleUrls: ['./shares-account-terms-step.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { sharesAccountProductTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sharesAccountTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shares/shares-account-view/charges-tab/charges-tab.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shares/shares-account-view/charges-tab/charges-tab.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChargesTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargesTabComponent", function() { return ChargesTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/** Angular Imports */






function ChargesTabComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargesTabComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", charge_r18.name, " ");
} }
function ChargesTabComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fee/Penalty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargesTabComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", charge_r19.penalty === true ? "Penalty" : "Fee", " ");
} }
function ChargesTabComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Payment Due At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargesTabComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", charge_r20.chargeTimeType.value, " ");
} }
function ChargesTabComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Calculation Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargesTabComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", charge_r21.chargeCalculationType.value, " ");
} }
function ChargesTabComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Due ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargesTabComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", charge_r22.currency.displaySymbol, "\u00A0", charge_r22.amount, " ");
} }
function ChargesTabComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Paid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargesTabComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", charge_r23.currency.displaySymbol, "\u00A0", charge_r23.amountPaid, " ");
} }
function ChargesTabComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Waived ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargesTabComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", charge_r24.currency.displaySymbol, "\u00A0", charge_r24.amountWaived, " ");
} }
function ChargesTabComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Outstanding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargesTabComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var charge_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", charge_r25.currency.displaySymbol, "\u00A0", charge_r25.amountOutstanding, " ");
} }
function ChargesTabComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ChargesTabComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
/**
 * Charges Tab Component
 */
var ChargesTabComponent = /** @class */ (function () {
    /**
     * Retrieves shares account aata from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     */
    function ChargesTabComponent(route) {
        var _this = this;
        this.route = route;
        /** Columns to be displayed in charges table. */
        this.displayedColumns = [
            'name',
            'feeOrPenalty',
            'paymentDueAt',
            'calculationType',
            'due',
            'paid',
            'waived',
            'outstanding',
        ];
        this.route.parent.data.subscribe(function (data) {
            _this.sharesAccountData = data.sharesAccountData;
            _this.chargesData = _this.sharesAccountData.charges;
        });
    }
    ChargesTabComponent.prototype.ngOnInit = function () {
        var activeCharges = this.chargesData ? this.chargesData.filter(function (charge) { return charge.isActive; }) : [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](activeCharges);
    };
    ChargesTabComponent.ɵfac = function ChargesTabComponent_Factory(t) { return new (t || ChargesTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    ChargesTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChargesTabComponent, selectors: [["mifosx-charges-tab"]], decls: 75, vars: 3, consts: [[1, "tab-container", "mat-typography"], [1, "m-b-10"], [1, "mat-elevation-z1", "m-b-25"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "feeOrPenalty"], ["matColumnDef", "paymentDueAt"], ["matColumnDef", "calculationType"], ["matColumnDef", "due"], ["matColumnDef", "paid"], ["matColumnDef", "waived"], ["matColumnDef", "outstanding"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ChargesTabComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Charges");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChargesTabComponent_th_14_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChargesTabComponent_td_16_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ChargesTabComponent_th_21_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChargesTabComponent_td_23_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChargesTabComponent_th_28_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ChargesTabComponent_td_30_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ChargesTabComponent_th_35_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ChargesTabComponent_td_37_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ChargesTabComponent_th_42_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ChargesTabComponent_td_44_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ChargesTabComponent_th_49_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ChargesTabComponent_td_51_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ChargesTabComponent_th_56_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ChargesTabComponent_td_58_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ChargesTabComponent_th_63_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ChargesTabComponent_td_65_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ChargesTabComponent_tr_68_Template, 1, 0, "tr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ChargesTabComponent_tr_70_Template, 1, 0, "tr", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".tab-container[_ngcontent-%COMP%] {\n  padding: 1%;\n  margin: 1%;\n}\n.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1% auto;\n}\n.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXZpZXcvY2hhcmdlcy10YWIvQzpcXEdpdEh1Ylxcd2ViLWFwcC9zcmNcXGFwcFxcc2hhcmVzXFxzaGFyZXMtYWNjb3VudC12aWV3XFxjaGFyZ2VzLXRhYlxcY2hhcmdlcy10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC12aWV3L2NoYXJnZXMtdGFiL2NoYXJnZXMtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtBQ0VKO0FEQUU7RUFDRSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZXMvc2hhcmVzLWFjY291bnQtdmlldy9jaGFyZ2VzLXRhYi9jaGFyZ2VzLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxJTtcclxuICBtYXJnaW46IDElO1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbjoxJSBhdXRvO1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLnRhYi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cbi50YWItY29udGFpbmVyIGgzIHtcbiAgbWFyZ2luOiAxJSBhdXRvO1xufVxuLnRhYi1jb250YWluZXIgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
    return ChargesTabComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargesTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-charges-tab',
                templateUrl: './charges-tab.component.html',
                styleUrls: ['./charges-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-view/dividends-tab/dividends-tab.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shares/shares-account-view/dividends-tab/dividends-tab.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DividendsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendsTabComponent", function() { return DividendsTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/** Angular Imports */







function DividendsTabComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Transaction Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendsTabComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dividend_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, dividend_r10.postedDate), " ");
} }
function DividendsTabComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendsTabComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dividend_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r3.shareAccountData.currency.displaySymbol, "\u00A0", dividend_r11.amount, " ");
} }
function DividendsTabComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Transaction Reference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendsTabComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dividend_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dividend_r12.savingsTransactionId, " ");
} }
function DividendsTabComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendsTabComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dividend_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dividend_r13.status.value, " ");
} }
function DividendsTabComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function DividendsTabComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
/**
 * Dividends Tab Component.
 */
var DividendsTabComponent = /** @class */ (function () {
    /**
     * Retrieves shares account data from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     */
    function DividendsTabComponent(route) {
        var _this = this;
        this.route = route;
        /** Columns to be displayed in dividends table. */
        this.displayedColumns = [
            'transactionDate',
            'amount',
            'transactionReference',
            'status'
        ];
        this.route.parent.data.subscribe(function (data) {
            _this.shareAccountData = data.sharesAccountData;
            _this.dividendsData = _this.shareAccountData.dividends;
        });
    }
    DividendsTabComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.dividendsData);
    };
    DividendsTabComponent.ɵfac = function DividendsTabComponent_Factory(t) { return new (t || DividendsTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    DividendsTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DividendsTabComponent, selectors: [["mifosx-dividends-tab"]], decls: 47, vars: 3, consts: [[1, "tab-container", "mat-typography"], [1, "m-b-10"], [1, "mat-elevation-z1", "m-b-25"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "transactionDate"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "amount"], ["matColumnDef", "transactionReference"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DividendsTabComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Dividends");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DividendsTabComponent_th_14_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DividendsTabComponent_td_16_Template, 3, 3, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DividendsTabComponent_th_21_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DividendsTabComponent_td_23_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DividendsTabComponent_th_28_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DividendsTabComponent_td_30_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DividendsTabComponent_th_35_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DividendsTabComponent_td_37_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DividendsTabComponent_tr_40_Template, 1, 0, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DividendsTabComponent_tr_42_Template, 1, 0, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".tab-container[_ngcontent-%COMP%] {\n  padding: 1%;\n  margin: 1%;\n}\n.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1% auto;\n}\n.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXZpZXcvZGl2aWRlbmRzLXRhYi9DOlxcR2l0SHViXFx3ZWItYXBwL3NyY1xcYXBwXFxzaGFyZXNcXHNoYXJlcy1hY2NvdW50LXZpZXdcXGRpdmlkZW5kcy10YWJcXGRpdmlkZW5kcy10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC12aWV3L2RpdmlkZW5kcy10YWIvZGl2aWRlbmRzLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSjtBREFFO0VBQ0UsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXZpZXcvZGl2aWRlbmRzLXRhYi9kaXZpZGVuZHMtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOjElIGF1dG87XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIudGFiLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuLnRhYi1jb250YWluZXIgaDMge1xuICBtYXJnaW46IDElIGF1dG87XG59XG4udGFiLWNvbnRhaW5lciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
    return DividendsTabComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendsTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-dividends-tab',
                templateUrl: './dividends-tab.component.html',
                styleUrls: ['./dividends-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-view/shares-account-view.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shares/shares-account-view/shares-account-view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SharesAccountViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesAccountViewComponent", function() { return SharesAccountViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/delete-dialog/delete-dialog.component */ "./src/app/shared/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _shares_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares.service */ "./src/app/shares/shares.service.ts");
/* harmony import */ var _shares_buttons_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shares-buttons.config */ "./src/app/shares/shares-account-view/shares-buttons.config.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm5/tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm5/tabs.js");
/* harmony import */ var _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/has-permission/has-permission.directive */ "./src/app/directives/has-permission/has-permission.directive.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm5/menu.js");
/* harmony import */ var _pipes_status_lookup_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/status-lookup.pipe */ "./src/app/pipes/status-lookup.pipe.ts");
/** Angular Imports */



/** Custom Dialogs */

/** Custom Services */

/** Custom Buttons Configuration */















function SharesAccountViewComponent_ng_container_39_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharesAccountViewComponent_ng_container_39_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var button_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.doAction(button_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](button_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r5.name, "");
} }
function SharesAccountViewComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SharesAccountViewComponent_ng_container_39_button_2_Template, 4, 4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var button_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", button_r5.taskPermissionName);
} }
function SharesAccountViewComponent_ng_container_41_span_8_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharesAccountViewComponent_ng_container_41_span_8_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var option_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.doAction(option_r13.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r13.name);
} }
function SharesAccountViewComponent_ng_container_41_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SharesAccountViewComponent_ng_container_41_span_8_button_2_Template, 2, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", option_r13.taskPermissionName);
} }
function SharesAccountViewComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SharesAccountViewComponent_ng_container_41_span_8_Template, 4, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.buttonConfig.options);
} }
var _c0 = function () { return ["./transactions"]; };
function SharesAccountViewComponent_a_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        Transactions\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("active", _r19.isActive);
} }
var _c1 = function () { return ["./charges"]; };
function SharesAccountViewComponent_a_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        Charges\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("active", _r20.isActive);
} }
var _c2 = function () { return ["./dividends"]; };
function SharesAccountViewComponent_a_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        Dividends\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2))("active", _r21.isActive);
} }
/**
 * Shares Account View
 */
var SharesAccountViewComponent = /** @class */ (function () {
    /**
     * Fetches shares account data from `resolve`
     * @param {ActivatedRoute} route Activated Route
     * @param {Router} router Router
     * @param {SharesService} sharesService Shares Service
     * @param {MatDialog} dialog Mat Dialog
     */
    function SharesAccountViewComponent(route, router, sharesService, dialog) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.sharesService = sharesService;
        this.dialog = dialog;
        this.route.data.subscribe(function (data) {
            _this.sharesAccountData = data.sharesAccountData;
        });
    }
    SharesAccountViewComponent.prototype.ngOnInit = function () {
        this.setConditionalButtons();
    };
    /**
     * Adds options to button config. conditionaly.
     */
    SharesAccountViewComponent.prototype.setConditionalButtons = function () {
        var _this = this;
        var status = this.sharesAccountData.status.value;
        this.buttonConfig = new _shares_buttons_config__WEBPACK_IMPORTED_MODULE_5__["SharesButtonsConfiguration"](status);
        if (this.sharesAccountData.charges) {
            var charges = this.sharesAccountData.charges;
            charges.forEach(function (charge) {
                if (charge.name === 'Annual fee - INR') {
                    _this.buttonConfig.addOption({
                        name: 'Apply Anuual Fees',
                        taskPermissionName: 'APPLYANNUALFEE_SAVINGSACCOUNT'
                    });
                }
            });
        }
        if (status === 'Active') {
            var purchasedShares = this.sharesAccountData.purchasedShares;
            var sharesPendingForApproval_1 = false;
            purchasedShares.forEach(function (share) {
                if (share.status.code === 'purchasedSharesStatusType.applied' && share.type.code === 'purchasedSharesType.purchased') {
                    sharesPendingForApproval_1 = true;
                }
            });
            if (!sharesPendingForApproval_1) {
                this.buttonConfig.removeButton('Approve Additional Shares');
                this.buttonConfig.removeButton('Reject Additional Shares');
            }
        }
    };
    /**
     * Performs button action
     * @param {string} name Action name
     */
    SharesAccountViewComponent.prototype.doAction = function (name) {
        switch (name) {
            case 'Approve':
            case 'Reject':
            case 'Close':
            case 'Activate':
            case 'Undo Approval':
            case 'Apply Additional Shares':
            case 'Redeem Shares':
            case 'Approve Additional Shares':
            case 'Reject Additional Shares':
                this.router.navigate(["actions/" + name], { relativeTo: this.route });
                break;
            case 'Modify Application':
                this.router.navigate(['edit'], { relativeTo: this.route });
                break;
            case 'Delete':
                this.deleteSharesAccount();
                break;
        }
    };
    /**
     * Deletes Shares Account.
     */
    SharesAccountViewComponent.prototype.deleteSharesAccount = function () {
        var _this = this;
        var deleteSharesAccountDialogRef = this.dialog.open(app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DeleteDialogComponent"], {
            data: { deleteContext: "shares account with id: " + this.sharesAccountData.id }
        });
        deleteSharesAccountDialogRef.afterClosed().subscribe(function (response) {
            if (response.delete) {
                _this.sharesService.deleteSharesAccount(_this.sharesAccountData.id).subscribe(function () {
                    _this.router.navigate(['../../'], { relativeTo: _this.route });
                });
            }
        });
    };
    SharesAccountViewComponent.ɵfac = function SharesAccountViewComponent_Factory(t) { return new (t || SharesAccountViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shares_service__WEBPACK_IMPORTED_MODULE_4__["SharesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
    SharesAccountViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharesAccountViewComponent, selectors: [["mifosx-shares-account-view"]], decls: 142, vars: 25, consts: [[1, "shares-account-card"], ["fxLayout", "column", 1, "header"], [1, "header-title-group"], [1, "profile-image-container"], ["mat-card-md-image", "", "matTooltip", "Shares Account", "src", "assets/images/shares_account_placeholder.png", 1, "profile-image"], [1, "mat-typography", "account-card-title"], [1, "fa", "fa-stop", 3, "ngClass", "matTooltip"], [1, "account-actions"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "content"], ["fxLayout", "row", "fxLayoutGap", "2%", 1, "shares-account-tables"], ["fxFlex", "49%"], [1, "table-headers"], ["mat-tab-nav-bar", "", 1, "navigation-tabs"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "mifosxHasPermission"], ["mat-raised-button", "", 3, "click", 4, "mifosxHasPermission"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["More", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "mifosxHasPermission"], ["mat-menu-item", "", 3, "click"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["transactions", "routerLinkActive"], ["charges", "routerLinkActive"], ["dividends", "routerLinkActive"]], template: function SharesAccountViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title-group", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "statusLookup");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-actions", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SharesAccountViewComponent_ng_container_39_Template, 4, 1, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n  \n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SharesAccountViewComponent_ng_container_41_Template, 11, 2, "ng-container", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n  \n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-content", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Shares Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Activated On");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "External Id");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Linked Savings Account(Dividend Posting)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Account Summary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Approved Shares");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Pending for Approval Shares");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n              ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nav", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, SharesAccountViewComponent_a_131_Template, 3, 3, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, SharesAccountViewComponent_a_133_Template, 3, 3, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, SharesAccountViewComponent_a_135_Template, 3, 3, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, ctx.sharesAccountData.status.code))("matTooltip", ctx.sharesAccountData.status.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n              Account Name : ", ctx.sharesAccountData.productName, "\n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n            Account #: ", ctx.sharesAccountData.accountNo, " | Client Name: ", ctx.sharesAccountData.clientName, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n            Current Market Price: ", ctx.sharesAccountData.currency.displaySymbol, "\u00A0", ctx.sharesAccountData.currentMarketPrice, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n            Lockin Period: ", ctx.sharesAccountData.lockinPeriod ? ctx.sharesAccountData.lockinPeriod : "N/A", " \n            ", ctx.sharesAccountData.lockinPeriod ? ctx.sharesAccountData.lockPeriodTypeEnum.value : "", " \n          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttonConfig.singleButtons);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonConfig.options.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccountData.timeline.activatedOnDate ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 23, ctx.sharesAccountData.timeline.activatedOnDate) : "Not Activated");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.sharesAccountData.currency.name, " [", ctx.sharesAccountData.currency.code, "]");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccountData.externalId ? ctx.sharesAccountData.externalId : "Not Provided");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccountData.savingsAccountNumber ? ctx.sharesAccountData.savingsAccountNumber : "Unassigned");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccountData.summary.totalApprovedShares);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sharesAccountData.summary.totalPendingForApprovalShares);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "READ_SHAREACCOUNTPURCHASE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "READ_SHAREACCOUNTCHARGE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mifosxHasPermission", "READ_SHAREACCOUNTDIVIDENDS");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardMdImage"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabNav"], _directives_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_12__["HasPermissionDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], pipes: [_pipes_status_lookup_pipe__WEBPACK_IMPORTED_MODULE_15__["StatusLookupPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".shares-account-card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 80rem;\n  width: 90%;\n  padding: 0;\n}\n.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding: 1%;\n}\n.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]   .account-card-title[_ngcontent-%COMP%] {\n  color: white;\n  width: 90%;\n}\n.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]   .account-card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 20px;\n}\n.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .account-actions[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin: 0 1%;\n}\n.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .account-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  margin-right: 4px;\n}\n.shares-account-card[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  overflow: auto;\n}\n.shares-account-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .shares-account-tables[_ngcontent-%COMP%] {\n  padding: 1%;\n  margin: 1%;\n}\n.shares-account-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .shares-account-tables[_ngcontent-%COMP%]   .table-headers[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 6px;\n}\n.shares-account-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .shares-account-tables[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.shares-account-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .shares-account-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXZpZXcvQzpcXEdpdEh1Ylxcd2ViLWFwcC9zcmNcXGFwcFxcc2hhcmVzXFxzaGFyZXMtYWNjb3VudC12aWV3XFxzaGFyZXMtYWNjb3VudC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZXMvc2hhcmVzLWFjY291bnQtdmlldy9zaGFyZXMtYWNjb3VudC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FEQU07RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0VSO0FERFE7RUFDRSxZQUFBO0FDR1Y7QURDSTtFQUNFLFVBQUE7QUNDTjtBREFNO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0FDRVI7QURDSTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQU07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDRVI7QURFRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0k7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0ROO0FERU07RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERU07RUFDRSxZQUFBO0FDQVI7QURJRTtFQUNFLGVBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC12aWV3L3NoYXJlcy1hY2NvdW50LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hhcmVzLWFjY291bnQtY2FyZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4MHJlbTtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIC5oZWFkZXItdGl0bGUtZ3JvdXAge1xyXG4gICAgICAuYWNjb3VudC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9maWxlLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogMSU7XHJcbiAgICAgIC5wcm9maWxlLWltYWdlIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudC1hY3Rpb25zIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgIG1hcmdpbjogMCAxJTtcclxuICAgICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXZpZ2F0aW9uLXRhYnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICAuc2hhcmVzLWFjY291bnQtdGFibGVzIHtcclxuICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgIG1hcmdpbjogMSU7XHJcbiAgICAgIC50YWJsZS1oZWFkZXJzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfVxyXG4gIGksIGltZzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5zaGFyZXMtYWNjb3VudC1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogODByZW07XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2hhcmVzLWFjY291bnQtY2FyZCAuaGVhZGVyIHtcbiAgcGFkZGluZzogMSU7XG59XG4uc2hhcmVzLWFjY291bnQtY2FyZCAuaGVhZGVyIC5oZWFkZXItdGl0bGUtZ3JvdXAgLmFjY291bnQtY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDkwJTtcbn1cbi5zaGFyZXMtYWNjb3VudC1jYXJkIC5oZWFkZXIgLmhlYWRlci10aXRsZS1ncm91cCAuYWNjb3VudC1jYXJkLXRpdGxlIHAge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2hhcmVzLWFjY291bnQtY2FyZCAuaGVhZGVyIC5wcm9maWxlLWltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMSU7XG59XG4uc2hhcmVzLWFjY291bnQtY2FyZCAuaGVhZGVyIC5wcm9maWxlLWltYWdlLWNvbnRhaW5lciAucHJvZmlsZS1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnNoYXJlcy1hY2NvdW50LWNhcmQgLmhlYWRlciAuYWNjb3VudC1hY3Rpb25zIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbjogMCAxJTtcbn1cbi5zaGFyZXMtYWNjb3VudC1jYXJkIC5oZWFkZXIgLmFjY291bnQtYWN0aW9ucyBpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5zaGFyZXMtYWNjb3VudC1jYXJkIC5uYXZpZ2F0aW9uLXRhYnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5zaGFyZXMtYWNjb3VudC1jYXJkIC5jb250ZW50IC5zaGFyZXMtYWNjb3VudC10YWJsZXMge1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cbi5zaGFyZXMtYWNjb3VudC1jYXJkIC5jb250ZW50IC5zaGFyZXMtYWNjb3VudC10YWJsZXMgLnRhYmxlLWhlYWRlcnMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDZweDtcbn1cbi5zaGFyZXMtYWNjb3VudC1jYXJkIC5jb250ZW50IC5zaGFyZXMtYWNjb3VudC10YWJsZXMgdGQge1xuICBwYWRkaW5nOiAzcHg7XG59XG4uc2hhcmVzLWFjY291bnQtY2FyZCBpLCAuc2hhcmVzLWFjY291bnQtY2FyZCBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
    return SharesAccountViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesAccountViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-shares-account-view',
                templateUrl: './shares-account-view.component.html',
                styleUrls: ['./shares-account-view.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shares_service__WEBPACK_IMPORTED_MODULE_4__["SharesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-account-view/shares-buttons.config.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shares/shares-account-view/shares-buttons.config.ts ***!
  \*********************************************************************/
/*! exports provided: SharesButtonsConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesButtonsConfiguration", function() { return SharesButtonsConfiguration; });
/** Shares Account Buttons Configuration */
var SharesButtonsConfiguration = /** @class */ (function () {
    function SharesButtonsConfiguration(status) {
        this.setOptions(status);
        this.setButtons(status);
    }
    Object.defineProperty(SharesButtonsConfiguration.prototype, "singleButtons", {
        get: function () {
            return this.buttonsArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharesButtonsConfiguration.prototype, "options", {
        get: function () {
            return this.optionArray;
        },
        enumerable: true,
        configurable: true
    });
    SharesButtonsConfiguration.prototype.setButtons = function (status) {
        switch (status) {
            case 'Active':
                this.buttonsArray = [
                    {
                        name: 'Apply Additional Shares',
                        icon: 'fa fa-arrow-right',
                        taskPermissionName: 'APPLYADDITIONAL_SHAREACCOUNT'
                    },
                    {
                        name: 'Approve Additional Shares',
                        icon: 'fa fa-arrow-right',
                        taskPermissionName: 'APPROVEADDITIONAL_SHAREACCOUNT'
                    },
                    {
                        name: 'Reject Additional Shares',
                        icon: 'fa fa-arrow-left',
                        taskPermissionName: 'REJECTADDITIONAL_SHAREACCOUNT'
                    },
                    {
                        name: 'Redeem Shares',
                        icon: 'fa fa-arrow-left',
                        taskPermissionName: 'WITHDRAW_SAVINGSACCOUNT'
                    }
                ];
                break;
            case 'Submitted and pending approval':
                this.buttonsArray = [
                    {
                        name: 'Modify Application',
                        icon: 'fa fa-pencil ',
                        taskPermissionName: 'UPDATE_SHAREACCOUNT'
                    },
                    {
                        name: 'Approve',
                        icon: 'fa fa-check',
                        taskPermissionName: 'APPROVE_SHAREACCOUNT'
                    }
                ];
                break;
            case 'Approved':
                this.buttonsArray = [
                    {
                        name: 'Undo Approval',
                        icon: 'fa fa-undo',
                        taskPermissionName: 'APPROVALUNDO_SHAREACCOUNT'
                    },
                    {
                        name: 'Activate',
                        icon: 'fa fa-check',
                        taskPermissionName: 'ACTIVATE_SHAREACCOUNT'
                    }
                ];
                break;
            default:
                this.buttonsArray = [];
        }
    };
    SharesButtonsConfiguration.prototype.setOptions = function (status) {
        switch (status) {
            case 'Active':
                this.optionArray = [
                    {
                        name: 'Close',
                        taskPermissionName: 'CLOSE_SHAREACCOUNT'
                    }
                ];
                break;
            case 'Submitted and pending approval':
                this.optionArray = [
                    {
                        name: 'Reject',
                        taskPermissionName: 'REJECT_SHAREACCOUNT'
                    },
                    {
                        name: 'Delete',
                        taskPermissionName: 'DELETE_SHAREACCOUNT'
                    }
                ];
                break;
            case 'Approved':
            default:
                this.optionArray = [];
        }
    };
    SharesButtonsConfiguration.prototype.addOption = function (option) {
        this.optionArray.push(option);
    };
    SharesButtonsConfiguration.prototype.removeButton = function (name) {
        var buttonNames = this.buttonsArray.map(function (entry) { return entry.name; });
        var index = buttonNames.indexOf(name);
        this.buttonsArray.splice(index, 1);
    };
    return SharesButtonsConfiguration;
}());



/***/ }),

/***/ "./src/app/shares/shares-account-view/transactions-tab/transactions-tab.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shares/shares-account-view/transactions-tab/transactions-tab.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransactionsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsTabComponent", function() { return TransactionsTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/** Angular Imports */







function TransactionsTabComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Transaction Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionsTabComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transaction_r14.purchasedDate), " ");
} }
function TransactionsTabComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Transaction Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionsTabComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", transaction_r15.type.value, " ", transaction_r15.type.value !== "Charge Payment" ? "(" + transaction_r15.status.value + ")" : "", "");
} }
function TransactionsTabComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Shares ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionsTabComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r16.numberOfShares, " ");
} }
function TransactionsTabComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Purhcased/Redeemed Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionsTabComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r17 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r7.shareAccountData.currency.displaySymbol, "\u00A0", transaction_r17.purchasedPrice, "");
} }
function TransactionsTabComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Charge Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionsTabComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r18 = ctx.$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r9.shareAccountData.currency.displaySymbol, "\u00A0", transaction_r18.type.value === "Charge Payment" ? transaction_r18.amount : transaction_r18.chargeAmount, "");
} }
function TransactionsTabComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount Recieved/Returned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionsTabComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transaction_r19 = ctx.$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r11.shareAccountData.currency.displaySymbol, "\u00A0", transaction_r19.amount, "");
} }
function TransactionsTabComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function TransactionsTabComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
/**
 * Transactions Tab Component.
 */
var TransactionsTabComponent = /** @class */ (function () {
    /**
     * Retrieves shares account data from `resolve`.
     * @param {ActivatedRoute} route Activated Route.
     */
    function TransactionsTabComponent(route) {
        var _this = this;
        this.route = route;
        /** Columns to be displayed in transactions table. */
        this.displayedColumns = [
            'transactionDate',
            'transactionType',
            'totalShares',
            'purchasedOrRedeemedPrice',
            'chargeAmount',
            'amountRecievedOrReturned'
        ];
        this.route.parent.data.subscribe(function (data) {
            _this.shareAccountData = data.sharesAccountData;
            _this.transactionsData = _this.shareAccountData.purchasedShares;
        });
    }
    TransactionsTabComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.transactionsData);
    };
    TransactionsTabComponent.ɵfac = function TransactionsTabComponent_Factory(t) { return new (t || TransactionsTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    TransactionsTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionsTabComponent, selectors: [["mifosx-transactions-tab"]], decls: 61, vars: 3, consts: [[1, "tab-container", "mat-typography"], [1, "m-b-10"], [1, "mat-elevation-z1", "m-b-25"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "transactionDate"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "transactionType"], ["matColumnDef", "totalShares"], ["matColumnDef", "purchasedOrRedeemedPrice"], ["matColumnDef", "chargeAmount"], ["matColumnDef", "amountRecievedOrReturned"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TransactionsTabComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TransactionsTabComponent_th_14_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TransactionsTabComponent_td_16_Template, 3, 3, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TransactionsTabComponent_th_21_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TransactionsTabComponent_td_23_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TransactionsTabComponent_th_28_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TransactionsTabComponent_td_30_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TransactionsTabComponent_th_35_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TransactionsTabComponent_td_37_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TransactionsTabComponent_th_42_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TransactionsTabComponent_td_44_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TransactionsTabComponent_th_49_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TransactionsTabComponent_td_51_Template, 2, 2, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TransactionsTabComponent_tr_54_Template, 1, 0, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TransactionsTabComponent_tr_56_Template, 1, 0, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".tab-container[_ngcontent-%COMP%] {\n  padding: 1%;\n  margin: 1%;\n}\n.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1% auto;\n}\n.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXZpZXcvdHJhbnNhY3Rpb25zLXRhYi9DOlxcR2l0SHViXFx3ZWItYXBwL3NyY1xcYXBwXFxzaGFyZXNcXHNoYXJlcy1hY2NvdW50LXZpZXdcXHRyYW5zYWN0aW9ucy10YWJcXHRyYW5zYWN0aW9ucy10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlcy9zaGFyZXMtYWNjb3VudC12aWV3L3RyYW5zYWN0aW9ucy10YWIvdHJhbnNhY3Rpb25zLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSjtBREFFO0VBQ0UsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL3NoYXJlcy1hY2NvdW50LXZpZXcvdHJhbnNhY3Rpb25zLXRhYi90cmFuc2FjdGlvbnMtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOjElIGF1dG87XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIudGFiLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuLnRhYi1jb250YWluZXIgaDMge1xuICBtYXJnaW46IDElIGF1dG87XG59XG4udGFiLWNvbnRhaW5lciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
    return TransactionsTabComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mifosx-transactions-tab',
                templateUrl: './transactions-tab.component.html',
                styleUrls: ['./transactions-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shares/shares-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shares/shares-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesRoutingModule", function() { return SharesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
/* harmony import */ var _shares_account_view_shares_account_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shares-account-view/shares-account-view.component */ "./src/app/shares/shares-account-view/shares-account-view.component.ts");
/* harmony import */ var _shares_account_view_transactions_tab_transactions_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shares-account-view/transactions-tab/transactions-tab.component */ "./src/app/shares/shares-account-view/transactions-tab/transactions-tab.component.ts");
/* harmony import */ var _shares_account_view_charges_tab_charges_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shares-account-view/charges-tab/charges-tab.component */ "./src/app/shares/shares-account-view/charges-tab/charges-tab.component.ts");
/* harmony import */ var _shares_account_view_dividends_tab_dividends_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shares-account-view/dividends-tab/dividends-tab.component */ "./src/app/shares/shares-account-view/dividends-tab/dividends-tab.component.ts");
/* harmony import */ var _create_shares_account_create_shares_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-shares-account/create-shares-account.component */ "./src/app/shares/create-shares-account/create-shares-account.component.ts");
/* harmony import */ var _edit_shares_account_edit_shares_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-shares-account/edit-shares-account.component */ "./src/app/shares/edit-shares-account/edit-shares-account.component.ts");
/* harmony import */ var _shares_account_actions_shares_account_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shares-account-actions/shares-account-actions.component */ "./src/app/shares/shares-account-actions/shares-account-actions.component.ts");
/* harmony import */ var _common_resolvers_share_account_view_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common-resolvers/share-account-view.resolver */ "./src/app/shares/common-resolvers/share-account-view.resolver.ts");
/* harmony import */ var _common_resolvers_share_account_actions_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common-resolvers/share-account-actions.resolver */ "./src/app/shares/common-resolvers/share-account-actions.resolver.ts");
/* harmony import */ var _common_resolvers_shares_account_template_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common-resolvers/shares-account-template.resolver */ "./src/app/shares/common-resolvers/shares-account-template.resolver.ts");
/* harmony import */ var _common_resolvers_share_account_and_template_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common-resolvers/share-account-and-template.resolver */ "./src/app/shares/common-resolvers/share-account-and-template.resolver.ts");
/** Angular Imports */


/** Translation Imports */

/** Custom Components */







/** Custom Resolvers */






/** Shares Routes */
var routes = [
    {
        path: '',
        data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Shares'), breadcrumb: 'Shares', routeParamBreadcrumb: false },
        children: [
            {
                path: 'create',
                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Create Shares Account'), breadcrumb: 'Create Shares Account' },
                component: _create_shares_account_create_shares_account_component__WEBPACK_IMPORTED_MODULE_7__["CreateSharesAccountComponent"],
                resolve: {
                    sharesAccountTemplate: _common_resolvers_shares_account_template_resolver__WEBPACK_IMPORTED_MODULE_12__["SharesAccountTemplateResolver"]
                }
            },
            {
                path: ':shareAccountId',
                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Shares Account View'), routeParamBreadcrumb: 'shareAccountId' },
                children: [
                    {
                        path: '',
                        component: _shares_account_view_shares_account_view_component__WEBPACK_IMPORTED_MODULE_3__["SharesAccountViewComponent"],
                        resolve: {
                            sharesAccountData: _common_resolvers_share_account_view_resolver__WEBPACK_IMPORTED_MODULE_10__["SharesAccountViewResolver"]
                        },
                        children: [
                            {
                                path: 'transactions',
                                component: _shares_account_view_transactions_tab_transactions_tab_component__WEBPACK_IMPORTED_MODULE_4__["TransactionsTabComponent"],
                                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Shares Account Transactions'), breadcrumb: 'Transactions', routeParamBreadcrumb: false }
                            },
                            {
                                path: 'charges',
                                component: _shares_account_view_charges_tab_charges_tab_component__WEBPACK_IMPORTED_MODULE_5__["ChargesTabComponent"],
                                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Shares Account Charges'), breadcrumb: 'Charges', routeParamBreadcrumb: false }
                            },
                            {
                                path: 'dividends',
                                component: _shares_account_view_dividends_tab_dividends_tab_component__WEBPACK_IMPORTED_MODULE_6__["DividendsTabComponent"],
                                data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Shares Account Dividends'), breadcrumb: 'Dividends', routeParamBreadcrumb: false }
                            }
                        ]
                    },
                    {
                        path: 'edit',
                        data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Edit Shares Account'), breadcrumb: 'Edit', routeParamBreadcrumb: false },
                        component: _edit_shares_account_edit_shares_account_component__WEBPACK_IMPORTED_MODULE_8__["EditSharesAccountComponent"],
                        resolve: {
                            sharesAccountAndTemplate: _common_resolvers_share_account_and_template_resolver__WEBPACK_IMPORTED_MODULE_13__["SharesAccountAndTemplateResolver"]
                        }
                    },
                    {
                        path: 'actions/:name',
                        data: { title: Object(_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__["extract"])('Shares Account Actions'), breadcrumb: 'Actions', routeParamBreadcrumb: 'name' },
                        component: _shares_account_actions_shares_account_actions_component__WEBPACK_IMPORTED_MODULE_9__["SharesAccountActionsComponent"],
                        resolve: {
                            shareAccountActionData: _common_resolvers_share_account_actions_resolver__WEBPACK_IMPORTED_MODULE_11__["ShareAccountActionsResolver"]
                        }
                    }
                ]
            },
        ]
    }
];
/**
 * Shares Routinf Module
 */
var SharesRoutingModule = /** @class */ (function () {
    function SharesRoutingModule() {
    }
    SharesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesRoutingModule });
    SharesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesRoutingModule_Factory(t) { return new (t || SharesRoutingModule)(); }, providers: [
            _common_resolvers_share_account_view_resolver__WEBPACK_IMPORTED_MODULE_10__["SharesAccountViewResolver"],
            _common_resolvers_shares_account_template_resolver__WEBPACK_IMPORTED_MODULE_12__["SharesAccountTemplateResolver"],
            _common_resolvers_share_account_and_template_resolver__WEBPACK_IMPORTED_MODULE_13__["SharesAccountAndTemplateResolver"],
            _common_resolvers_share_account_actions_resolver__WEBPACK_IMPORTED_MODULE_11__["ShareAccountActionsResolver"]
        ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SharesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [
                    _common_resolvers_share_account_view_resolver__WEBPACK_IMPORTED_MODULE_10__["SharesAccountViewResolver"],
                    _common_resolvers_shares_account_template_resolver__WEBPACK_IMPORTED_MODULE_12__["SharesAccountTemplateResolver"],
                    _common_resolvers_share_account_and_template_resolver__WEBPACK_IMPORTED_MODULE_13__["SharesAccountAndTemplateResolver"],
                    _common_resolvers_share_account_actions_resolver__WEBPACK_IMPORTED_MODULE_11__["ShareAccountActionsResolver"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shares/shares.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shares/shares.module.ts ***!
  \*****************************************/
/*! exports provided: SharesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesModule", function() { return SharesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shares_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares-routing.module */ "./src/app/shares/shares-routing.module.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _shares_account_view_shares_account_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shares-account-view/shares-account-view.component */ "./src/app/shares/shares-account-view/shares-account-view.component.ts");
/* harmony import */ var _shares_account_view_transactions_tab_transactions_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shares-account-view/transactions-tab/transactions-tab.component */ "./src/app/shares/shares-account-view/transactions-tab/transactions-tab.component.ts");
/* harmony import */ var _shares_account_view_dividends_tab_dividends_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shares-account-view/dividends-tab/dividends-tab.component */ "./src/app/shares/shares-account-view/dividends-tab/dividends-tab.component.ts");
/* harmony import */ var _shares_account_view_charges_tab_charges_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shares-account-view/charges-tab/charges-tab.component */ "./src/app/shares/shares-account-view/charges-tab/charges-tab.component.ts");
/* harmony import */ var _create_shares_account_create_shares_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-shares-account/create-shares-account.component */ "./src/app/shares/create-shares-account/create-shares-account.component.ts");
/* harmony import */ var _shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shares-account-stepper/shares-account-details-step/shares-account-details-step.component */ "./src/app/shares/shares-account-stepper/shares-account-details-step/shares-account-details-step.component.ts");
/* harmony import */ var _shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shares-account-stepper/shares-account-terms-step/shares-account-terms-step.component */ "./src/app/shares/shares-account-stepper/shares-account-terms-step/shares-account-terms-step.component.ts");
/* harmony import */ var _shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shares-account-stepper/shares-account-charges-step/shares-account-charges-step.component */ "./src/app/shares/shares-account-stepper/shares-account-charges-step/shares-account-charges-step.component.ts");
/* harmony import */ var _shares_account_stepper_shares_account_preview_step_shares_account_preview_step_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shares-account-stepper/shares-account-preview-step/shares-account-preview-step.component */ "./src/app/shares/shares-account-stepper/shares-account-preview-step/shares-account-preview-step.component.ts");
/* harmony import */ var _edit_shares_account_edit_shares_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-shares-account/edit-shares-account.component */ "./src/app/shares/edit-shares-account/edit-shares-account.component.ts");
/* harmony import */ var _shares_account_actions_shares_account_actions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shares-account-actions/shares-account-actions.component */ "./src/app/shares/shares-account-actions/shares-account-actions.component.ts");
/* harmony import */ var _shares_account_actions_approve_shares_account_approve_shares_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shares-account-actions/approve-shares-account/approve-shares-account.component */ "./src/app/shares/shares-account-actions/approve-shares-account/approve-shares-account.component.ts");
/* harmony import */ var _shares_account_actions_reject_shares_account_reject_shares_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shares-account-actions/reject-shares-account/reject-shares-account.component */ "./src/app/shares/shares-account-actions/reject-shares-account/reject-shares-account.component.ts");
/* harmony import */ var _shares_account_actions_close_shares_account_close_shares_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shares-account-actions/close-shares-account/close-shares-account.component */ "./src/app/shares/shares-account-actions/close-shares-account/close-shares-account.component.ts");
/* harmony import */ var _shares_account_actions_activate_shares_account_activate_shares_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shares-account-actions/activate-shares-account/activate-shares-account.component */ "./src/app/shares/shares-account-actions/activate-shares-account/activate-shares-account.component.ts");
/* harmony import */ var _shares_account_actions_undo_approval_shares_account_undo_approval_shares_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shares-account-actions/undo-approval-shares-account/undo-approval-shares-account.component */ "./src/app/shares/shares-account-actions/undo-approval-shares-account/undo-approval-shares-account.component.ts");
/* harmony import */ var _shares_account_actions_apply_shares_apply_shares_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shares-account-actions/apply-shares/apply-shares.component */ "./src/app/shares/shares-account-actions/apply-shares/apply-shares.component.ts");
/* harmony import */ var _shares_account_actions_redeem_shares_redeem_shares_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shares-account-actions/redeem-shares/redeem-shares.component */ "./src/app/shares/shares-account-actions/redeem-shares/redeem-shares.component.ts");
/* harmony import */ var _shares_account_actions_approve_shares_approve_shares_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shares-account-actions/approve-shares/approve-shares.component */ "./src/app/shares/shares-account-actions/approve-shares/approve-shares.component.ts");
/* harmony import */ var _shares_account_actions_approve_shares_approve_share_dialog_approve_share_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shares-account-actions/approve-shares/approve-share-dialog/approve-share-dialog.component */ "./src/app/shares/shares-account-actions/approve-shares/approve-share-dialog/approve-share-dialog.component.ts");
/* harmony import */ var _shares_account_actions_reject_shares_reject_shares_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shares-account-actions/reject-shares/reject-shares.component */ "./src/app/shares/shares-account-actions/reject-shares/reject-shares.component.ts");
/* harmony import */ var _shares_account_actions_reject_shares_reject_share_dialog_reject_share_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shares-account-actions/reject-shares/reject-share-dialog/reject-share-dialog.component */ "./src/app/shares/shares-account-actions/reject-shares/reject-share-dialog/reject-share-dialog.component.ts");
/** Angular Imports */


/** Custom Modules */



























/**
 * Shares Module
 *
 * All components related to Shares functions should be declared here.
 */
var SharesModule = /** @class */ (function () {
    function SharesModule() {
    }
    SharesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesModule });
    SharesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesModule_Factory(t) { return new (t || SharesModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"],
                _shares_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharesRoutingModule"]
            ]] });
    return SharesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesModule, { declarations: [_shares_account_view_shares_account_view_component__WEBPACK_IMPORTED_MODULE_6__["SharesAccountViewComponent"],
        _shares_account_view_transactions_tab_transactions_tab_component__WEBPACK_IMPORTED_MODULE_7__["TransactionsTabComponent"],
        _shares_account_view_dividends_tab_dividends_tab_component__WEBPACK_IMPORTED_MODULE_8__["DividendsTabComponent"],
        _shares_account_view_charges_tab_charges_tab_component__WEBPACK_IMPORTED_MODULE_9__["ChargesTabComponent"],
        _create_shares_account_create_shares_account_component__WEBPACK_IMPORTED_MODULE_10__["CreateSharesAccountComponent"],
        _shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_11__["SharesAccountDetailsStepComponent"],
        _shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_12__["SharesAccountTermsStepComponent"],
        _shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_13__["SharesAccountChargesStepComponent"],
        _shares_account_stepper_shares_account_preview_step_shares_account_preview_step_component__WEBPACK_IMPORTED_MODULE_14__["SharesAccountPreviewStepComponent"],
        _edit_shares_account_edit_shares_account_component__WEBPACK_IMPORTED_MODULE_15__["EditSharesAccountComponent"],
        _shares_account_actions_shares_account_actions_component__WEBPACK_IMPORTED_MODULE_16__["SharesAccountActionsComponent"],
        _shares_account_actions_approve_shares_account_approve_shares_account_component__WEBPACK_IMPORTED_MODULE_17__["ApproveSharesAccountComponent"],
        _shares_account_actions_reject_shares_account_reject_shares_account_component__WEBPACK_IMPORTED_MODULE_18__["RejectSharesAccountComponent"],
        _shares_account_actions_close_shares_account_close_shares_account_component__WEBPACK_IMPORTED_MODULE_19__["CloseSharesAccountComponent"],
        _shares_account_actions_activate_shares_account_activate_shares_account_component__WEBPACK_IMPORTED_MODULE_20__["ActivateSharesAccountComponent"],
        _shares_account_actions_undo_approval_shares_account_undo_approval_shares_account_component__WEBPACK_IMPORTED_MODULE_21__["UndoApprovalSharesAccountComponent"],
        _shares_account_actions_apply_shares_apply_shares_component__WEBPACK_IMPORTED_MODULE_22__["ApplySharesComponent"],
        _shares_account_actions_redeem_shares_redeem_shares_component__WEBPACK_IMPORTED_MODULE_23__["RedeemSharesComponent"],
        _shares_account_actions_approve_shares_approve_shares_component__WEBPACK_IMPORTED_MODULE_24__["ApproveSharesComponent"],
        _shares_account_actions_approve_shares_approve_share_dialog_approve_share_dialog_component__WEBPACK_IMPORTED_MODULE_25__["ApproveShareDialogComponent"],
        _shares_account_actions_reject_shares_reject_shares_component__WEBPACK_IMPORTED_MODULE_26__["RejectSharesComponent"],
        _shares_account_actions_reject_shares_reject_share_dialog_reject_share_dialog_component__WEBPACK_IMPORTED_MODULE_27__["RejectShareDialogComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
        _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"],
        _shares_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                    _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"],
                    _shares_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharesRoutingModule"]
                ],
                declarations: [
                    _shares_account_view_shares_account_view_component__WEBPACK_IMPORTED_MODULE_6__["SharesAccountViewComponent"],
                    _shares_account_view_transactions_tab_transactions_tab_component__WEBPACK_IMPORTED_MODULE_7__["TransactionsTabComponent"],
                    _shares_account_view_dividends_tab_dividends_tab_component__WEBPACK_IMPORTED_MODULE_8__["DividendsTabComponent"],
                    _shares_account_view_charges_tab_charges_tab_component__WEBPACK_IMPORTED_MODULE_9__["ChargesTabComponent"],
                    _create_shares_account_create_shares_account_component__WEBPACK_IMPORTED_MODULE_10__["CreateSharesAccountComponent"],
                    _shares_account_stepper_shares_account_details_step_shares_account_details_step_component__WEBPACK_IMPORTED_MODULE_11__["SharesAccountDetailsStepComponent"],
                    _shares_account_stepper_shares_account_terms_step_shares_account_terms_step_component__WEBPACK_IMPORTED_MODULE_12__["SharesAccountTermsStepComponent"],
                    _shares_account_stepper_shares_account_charges_step_shares_account_charges_step_component__WEBPACK_IMPORTED_MODULE_13__["SharesAccountChargesStepComponent"],
                    _shares_account_stepper_shares_account_preview_step_shares_account_preview_step_component__WEBPACK_IMPORTED_MODULE_14__["SharesAccountPreviewStepComponent"],
                    _edit_shares_account_edit_shares_account_component__WEBPACK_IMPORTED_MODULE_15__["EditSharesAccountComponent"],
                    _shares_account_actions_shares_account_actions_component__WEBPACK_IMPORTED_MODULE_16__["SharesAccountActionsComponent"],
                    _shares_account_actions_approve_shares_account_approve_shares_account_component__WEBPACK_IMPORTED_MODULE_17__["ApproveSharesAccountComponent"],
                    _shares_account_actions_reject_shares_account_reject_shares_account_component__WEBPACK_IMPORTED_MODULE_18__["RejectSharesAccountComponent"],
                    _shares_account_actions_close_shares_account_close_shares_account_component__WEBPACK_IMPORTED_MODULE_19__["CloseSharesAccountComponent"],
                    _shares_account_actions_activate_shares_account_activate_shares_account_component__WEBPACK_IMPORTED_MODULE_20__["ActivateSharesAccountComponent"],
                    _shares_account_actions_undo_approval_shares_account_undo_approval_shares_account_component__WEBPACK_IMPORTED_MODULE_21__["UndoApprovalSharesAccountComponent"],
                    _shares_account_actions_apply_shares_apply_shares_component__WEBPACK_IMPORTED_MODULE_22__["ApplySharesComponent"],
                    _shares_account_actions_redeem_shares_redeem_shares_component__WEBPACK_IMPORTED_MODULE_23__["RedeemSharesComponent"],
                    _shares_account_actions_approve_shares_approve_shares_component__WEBPACK_IMPORTED_MODULE_24__["ApproveSharesComponent"],
                    _shares_account_actions_approve_shares_approve_share_dialog_approve_share_dialog_component__WEBPACK_IMPORTED_MODULE_25__["ApproveShareDialogComponent"],
                    _shares_account_actions_reject_shares_reject_shares_component__WEBPACK_IMPORTED_MODULE_26__["RejectSharesComponent"],
                    _shares_account_actions_reject_shares_reject_share_dialog_reject_share_dialog_component__WEBPACK_IMPORTED_MODULE_27__["RejectShareDialogComponent"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shares/shares.service.ts":
/*!******************************************!*\
  !*** ./src/app/shares/shares.service.ts ***!
  \******************************************/
/*! exports provided: SharesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesService", function() { return SharesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/** Angular Imports */




/**
 * Shares Service.
 */
var SharesService = /** @class */ (function () {
    /**
     * @param {HttpClient} http Http Client
     */
    function SharesService(http) {
        this.http = http;
    }
    /**
     * @param {string} accountId Shares Account Id of account to get data for.
     * @param {boolean} template Shares account template required?.
     * @returns {Observable<any>} Shares data.
     */
    SharesService.prototype.getSharesAccountData = function (accountId, template) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('template', template.toString());
        return this.http.get("/accounts/share/" + accountId, { params: httpParams });
    };
    /**
     * @param {string} clientId Client Id assosciated with shares account.
     * @param {string} productId Product Id
     * @returns {Observable<any>} Shares account template.
     */
    SharesService.prototype.getSharesAccountTemplate = function (clientId, productId) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('clientId', clientId);
        httpParams = productId ? httpParams.set('productId', productId) : httpParams;
        return this.http.get('/accounts/share/template', { params: httpParams });
    };
    /**
     * @param {any} sharesAccount Shares Account
     * @returns {Observable<any>}
     */
    SharesService.prototype.createSharesAccount = function (sharesAccount) {
        return this.http.post('/accounts/share', sharesAccount);
    };
    /**
     * @param {string} accountId: Shares account Id.
     * @param {any} sharesAccount Shares Account
     * @returns {Observable<any>}
     */
    SharesService.prototype.updateSharesAccount = function (accountId, sharesAccount) {
        return this.http.put("/accounts/share/" + accountId, sharesAccount);
    };
    /**
     * @param {string} accountId shares account Id
     * @returns {Observable<any>}
     */
    SharesService.prototype.deleteSharesAccount = function (accountId) {
        return this.http.delete("/accounts/share/" + accountId);
    };
    /**
     * @param {string} accountId Shares Account Id
     * @param {string} command Command
     * @param {any} data Data
     * @returns {Observable<any>} Shares data.
     */
    SharesService.prototype.executeSharesAccountCommand = function (accountId, command, data) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('command', command);
        return this.http.post("/accounts/share/" + accountId, data, { params: httpParams });
    };
    SharesService.ɵfac = function SharesService_Factory(t) { return new (t || SharesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    SharesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharesService, factory: SharesService.ɵfac, providedIn: 'root' });
    return SharesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=shares-shares-module.js.map