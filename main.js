"use strict";
(self["webpackChunkdriver_routes"] = self["webpackChunkdriver_routes"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/driver-route/driver-route.component */ 1820);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_order_links_order_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/order-links/order-links.component */ 633);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/logout/logout.component */ 9543);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ 6827);
/* harmony import */ var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order-confirmation/order-confirmation.component */ 2235);
/* harmony import */ var _components_order_exists_order_exists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/order-exists/order-exists.component */ 5289);
/* harmony import */ var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-form/order-form.component */ 6501);
/* harmony import */ var _components_data_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/data/data.component */ 2871);
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/orders/orders.component */ 6493);
/* harmony import */ var _components_preorder_links_preorder_links_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/preorder-links/preorder-links.component */ 1153);
/* harmony import */ var _components_preorder_form_preorder_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/preorder-form/preorder-form.component */ 7145);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _components_password_request_password_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/password-request/password-request.component */ 5593);
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/password-reset/password-reset.component */ 6881);
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reports/reports.component */ 8952);
/* harmony import */ var _components_employee_application_employee_application_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/employee-application/employee-application.component */ 8465);
/* harmony import */ var _components_hire_checklist_hire_checklist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/hire-checklist/hire-checklist.component */ 4593);
/* harmony import */ var _components_employment_verification_employment_verification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/employment-verification/employment-verification.component */ 7537);
/* harmony import */ var _components_withholding_withholding_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/withholding/withholding.component */ 849);
/* harmony import */ var _components_w4_form_w4_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/w4-form/w4-form.component */ 8249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 7580);

// Regular component imports

















// HR Components




// Standalone component import



const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  title: 'Home',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'driver',
  component: _components_driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_0__.DriverRouteComponent,
  title: "Drivers' Routes",
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'order-links',
  component: _components_order_links_order_links_component__WEBPACK_IMPORTED_MODULE_2__.OrderLinksComponent,
  title: 'Order Links'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
  title: 'Login'
}, {
  path: 'logout',
  component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__.LogoutComponent,
  title: 'Logout'
}, {
  path: 'password-request',
  component: _components_password_request_password_request_component__WEBPACK_IMPORTED_MODULE_14__.PasswordRequestComponent,
  title: 'Password Request'
}, {
  path: 'password-reset/:token',
  component: _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_15__.PasswordResetComponent,
  title: 'Password Reset'
}, {
  path: 'products',
  component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent,
  title: 'Products',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'customer/:id/order-confirmation',
  component: _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_6__.OrderConfirmationComponent,
  title: 'Order Confirmation'
}, {
  path: 'customer/:id/order-exists',
  component: _components_order_exists_order_exists_component__WEBPACK_IMPORTED_MODULE_7__.OrderExistsComponent,
  title: 'Order Exists'
}, {
  path: 'customer/:id/order-form',
  component: _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_8__.OrderFormComponent,
  title: 'Order Form'
}, {
  path: 'data',
  component: _components_data_data_component__WEBPACK_IMPORTED_MODULE_9__.DataComponent,
  title: 'Data',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'orders',
  component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_10__.OrdersComponent,
  title: 'Orders',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'preorder-links',
  component: _components_preorder_links_preorder_links_component__WEBPACK_IMPORTED_MODULE_11__.VendorLinksComponent,
  title: 'Vendor Links',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'preorder-form/:vendorId',
  component: _components_preorder_form_preorder_form_component__WEBPACK_IMPORTED_MODULE_12__.PreorderFormComponent,
  title: 'Preorder Form'
}, {
  path: 'reports',
  component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_16__.ReportsComponent,
  title: 'Reports',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
},
// HR-related routes
{
  path: 'employee-application',
  component: _components_employee_application_employee_application_component__WEBPACK_IMPORTED_MODULE_17__.EmployeeApplicationComponent,
  title: 'Employee Application',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'new-hire-checklist',
  component: _components_hire_checklist_hire_checklist_component__WEBPACK_IMPORTED_MODULE_18__.HireChecklistComponent,
  title: 'New Hire Checklist',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'employment-verification',
  component: _components_employment_verification_employment_verification_component__WEBPACK_IMPORTED_MODULE_19__.EmploymentVerificationComponent,
  title: 'Employment Verification',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'w4-form',
  component: _components_w4_form_w4_form_component__WEBPACK_IMPORTED_MODULE_21__.W4FormComponent,
  title: 'W4 Form',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: 'withholding',
  component: _components_withholding_withholding_component__WEBPACK_IMPORTED_MODULE_20__.WithholdingComponent,
  title: 'Withholding',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__.AuthGuard]
}, {
  path: '**',
  redirectTo: 'login'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ 6140);











function AppComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "UAT ENVIRONMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.apiUrl);
  }
}
class AppComponent {
  //isOrderForm: boolean = false;
  constructor(router, title, meta, swUpdate) {
    this.router = router;
    this.title = title;
    this.meta = meta;
    this.swUpdate = swUpdate;
    this.isDevMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)();
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.showWarning = false;
    // Check that UAT is not using the prod backend
    if (this.isDevMode && this.apiUrl.includes('prod')) {
      this.showWarning = true;
      alert('WARNING: Angular is in Dev mode but connected to production !!!');
    }
  }
  ngOnInit() {
    this.title.setTitle('Pacific Fresh Fish Company App');
    this.meta.addTags([{
      name: 'description',
      content: 'Pacific Fresh Fish Company application created by lb-advisors'
    }, {
      name: 'keywords',
      content: 'PFF, lb-advisors, allintel'
    }, {
      name: 'robots',
      content: 'index, follow'
    }]);
    this.checkForUpdate();
  }
  checkForUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(isUpdateAvailable => {
        if (isUpdateAvailable) {
          const confirmUpdate = confirm('A new version is available. Do you want to load it?');
          if (confirmUpdate) {
            this.swUpdate.activateUpdate().then(() => {
              window.location.reload();
            });
          }
        }
      }).catch(error => {
        console.error('Error while checking for updates:', error);
      });
    }
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__.SwUpdate));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 2,
      consts: [[1, "mat-drawer-container"], [1, "container"], [1, "text-align-center"], ["class", "dev-mode", 4, "ngIf"], [1, "dev-mode"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "footer", 0)(3, "div", 1)(4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A9 2024 - Pacific Fresh Fish Company ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 0, "div", 3)(7, AppComponent_div_7_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDevMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDevMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: [".tabs[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n    margin-top: 1em;\n}\n\n.active-link[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    color: #333 !important;\n}\n\na[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-decoration: none;\n    color: #333;\n    \n\n    font-size: 14px;\n    \n\n    display: flex;\n    align-items: center;\n}\n\na[_ngcontent-%COMP%]:hover, \na[_ngcontent-%COMP%]:active {\n    color: #333;\n    \n\n}\n\na.active-link[_ngcontent-%COMP%] {\n    background-color: #d3d3d3 !important;\n    \n\n}\n\n.valign-center[_ngcontent-%COMP%] {\n    display: inline-flex;\n    vertical-align: middle;\n    align-items: center;\n}\n\n#a[_ngcontent-%COMP%] {\n    display: inline;\n}\n\n#a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    margin-right: 5px;\n    \n\n}\n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n\n    background-color: #ffffff;\n    width: 100%;\n    padding: 5px 0;\n    \n\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: 100%;\n    color: #333;\n    \n\n}\n\n.text-align-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.nav-links-center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    \n\n    align-items: center;\n    \n\n    width: 100%;\n}\n\n.gs-logo[_ngcontent-%COMP%] {\n    height: 50px;\n    \n\n    border-radius: 10%;\n}\n\n.gs-logo-link[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n}\n\n\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    min-height: 95%;\n}\n\n.home-link[_ngcontent-%COMP%] {\n    display: none;\n    \n\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    margin-right: 5px;\n    \n\n}\n\n.dev-mode[_ngcontent-%COMP%] {\n    color: darkblue;\n    ;\n}\n\n.warning[_ngcontent-%COMP%] {\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yICovXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8qIFNtYWxsZXIgZm9udCBzaXplICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hOmhvdmVyLFxuYTphY3RpdmUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yICovXG59XG5cbmEuYWN0aXZlLWxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDMgIWltcG9ydGFudDtcbiAgICAvKiBMaWdodCBncmV5IGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIGxpbmsgKi9cbn1cblxuLnZhbGlnbi1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Ege1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuI2EgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBDZW50ZXIgdGhlIG5hdiBsaW5rcyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgLyogUmVkdWNlIHBhZGRpbmcgdG8gbWFrZSB0aGUgbmF2IGJhciBsZXNzIHRhbGwgKi9cbn1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgLyogRGFyayBncmV5IHRleHQgY29sb3IgKi9cbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXYtbGlua3MtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8qIENlbnRlciB0aGUgbGlua3MgaG9yaXpvbnRhbGx5ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBDZW50ZXIgdGhlIGxpbmtzIHZlcnRpY2FsbHkgKi9cbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmdzLWxvZ28ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICAvKiBJbmNyZWFzZSB0aGUgc2l6ZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLmdzLWxvZ28tbGluayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuXG5cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA5NSU7XG59XG5cbi5ob21lLWxpbmsge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogSGlkZSBvcmlnaW5hbCBIb21lIGxpbmsgKi9cbn1cblxuLm5hdi1pY29uIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXG59XG5cbi5kZXYtbW9kZSB7XG4gICAgY29sb3I6IGRhcmtibHVlO1xuICAgIDtcbn1cblxuLndhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4535:
/*!*******************************************************************************!*\
  !*** ./src/app/components/app-install-prompt/app-install-prompt.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInstallPromptComponent: () => (/* binding */ AppInstallPromptComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_pwa_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/pwa.service */ 366);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);






function AppInstallPromptComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppInstallPromptComponent_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.promptInstall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Install as an Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AppInstallPromptComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppInstallPromptComponent_Conditional_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showIosInstructions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Install as an Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class AppInstallPromptComponent {
  constructor(pwaService, snackbarService, platform) {
    this.pwaService = pwaService;
    this.snackbarService = snackbarService;
    this.platform = platform;
    this.deferredPrompt = null;
    this.userAgent = window.navigator.userAgent.toLowerCase();
    this.isPwa$ = this.pwaService.isPwa$;
    this.isPwa = this.isRunningAsPWA();
    this.isIosButNotPwa = this.isIOS() && !this.isRunningAsPWA();
    this.plat = this.isIOS();
  }
  ngOnInit() {
    this.beforeInstallPromptHandler = event => {
      // Prevent the mini-infobar from appearing
      event.preventDefault();
      this.deferredPrompt = event;
      this.pwaService.updateValue(true);
    };
    window.addEventListener('beforeinstallprompt', this.beforeInstallPromptHandler);
  }
  ngOnDestroy() {
    window.removeEventListener('beforeinstallprompt', this.beforeInstallPromptHandler);
    this.pwaService.updateValue(false);
  }
  promptInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt(); // Show the install prompt
      this.deferredPrompt.userChoice.then(() => {
        this.deferredPrompt = null;
        this.pwaService.updateValue(false);
      });
    }
  }
  showIosInstructions() {
    this.snackbarService.showInfo("To install this web app on your device, tap the Menu button and then 'Add to Home Screen' button", 20000);
  }
  isIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod|mac/.test(userAgent) || this.platform.IOS;
  }
  isRunningAsPWA() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = navigator.standalone === true;
    const isFullscreen = window.innerHeight === screen.height;
    return isStandalone || isIOSStandalone || isFullscreen;
  }
  static {
    this.ɵfac = function AppInstallPromptComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppInstallPromptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_pwa_service__WEBPACK_IMPORTED_MODULE_0__.PwaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppInstallPromptComponent,
      selectors: [["app-install-prompt"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [[1, "install-banner"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function AppInstallPromptComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppInstallPromptComponent_Conditional_0_Template, 3, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppInstallPromptComponent_Conditional_2_Template, 3, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.isPwa$) === true ? 0 : ctx.isIosButNotPwa ? 2 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: [".install-banner[_ngcontent-%COMP%] {\n     text-align: center;\n     padding-top: 0px;\n     padding-bottom: 10px;\n }\n\n button[mat-raised-button][_ngcontent-%COMP%] {\n     font-size: 14px;\n     font-family: inherit;\n     background-color: #003366;\n     padding: 8px;\n     color: white;\n     border: none;\n     border-radius: 4px;\n     cursor: pointer;\n }\n\n button[mat-raised-button][_ngcontent-%COMP%]:hover {\n     background-color: #002855;\n }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAtaW5zdGFsbC1wcm9tcHQvYXBwLWluc3RhbGwtcHJvbXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7S0FDSSxrQkFBa0I7S0FDbEIsZ0JBQWdCO0tBQ2hCLG9CQUFvQjtDQUN4Qjs7Q0FFQTtLQUNJLGVBQWU7S0FDZixvQkFBb0I7S0FDcEIseUJBQXlCO0tBQ3pCLFlBQVk7S0FDWixZQUFZO0tBQ1osWUFBWTtLQUNaLGtCQUFrQjtLQUNsQixlQUFlO0NBQ25COztDQUVBO0tBQ0kseUJBQXlCO0NBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiIC5pbnN0YWxsLWJhbm5lciB7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gfVxuXG4gYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMzNjY7XG4gICAgIHBhZGRpbmc6IDhweDtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cblxuIGJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl06aG92ZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODU1O1xuIH0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2871:
/*!***************************************************!*\
  !*** ./src/app/components/data/data.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataComponent: () => (/* binding */ DataComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
 // Import the environment configuration



class DataComponent {
  constructor(http, snackBar) {
    this.http = http;
    this.snackBar = snackBar;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.uploadUrl = `${this.apiUrl}/database/csv/upload/profiles`;
  }
  downloadOrders() {
    const url = `${this.apiUrl}/database/csv/download/orders`;
    this.http.get(url, {
      responseType: 'blob'
    }).subscribe(response => {
      const blob = new Blob([response], {
        type: 'text/csv'
      });
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'orders.csv';
      link.click();
      window.URL.revokeObjectURL(downloadURL);
    }, error => {
      console.error('Download failed:', error);
      this.snackBar.open('Failed to download orders. Please try again later.', 'Close', {
        duration: 3000
      });
    });
  }
  onFileSelected(event) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.uploadFile(file);
    }
  }
  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    this.snackBar.open('Processing your CSV file', '', {
      duration: 20000
    });
    this.http.post(this.uploadUrl, formData).subscribe({
      next: () => {
        this.snackBar.open('All Done', '', {
          duration: 3000
        });
      }
    });
  }
  static {
    this.ɵfac = function DataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataComponent,
      selectors: [["app-data"]],
      decls: 49,
      vars: 0,
      consts: [["fileInput", ""], [1, "data-container"], [1, "action-button", "download-button", 3, "click"], [1, "action-button", "upload-button", 3, "click"], ["type", "file", "accept", ".csv", 2, "display", "none", 3, "change"], [1, "upload-instructions"]],
      template: function DataComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataComponent_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.downloadOrders());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Download Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](fileInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Upload Profiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataComponent_Template_input_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "CSV file required");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "File with these columns, in this order required:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul")(13, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ProfileDID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "SalesRepName");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "SalesRepCell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "SalesRepEmail");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "ProfileID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CustomerID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "CustomerName");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "CompItemID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "ProfileDescription");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "ProfileInstruction");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "UnitTypePD");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "PackSizePD");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "SalesPrice");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "CustomerContactName");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "CustomerCell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "CustomerEmail");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Company");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "CompanyID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      styles: [".data-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n    max-width: 800px;\n    margin: 50px auto;\n    padding: 20px;\n    background-color: #ffffff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.action-button[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    color: #fff;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n    max-width: 350px;\n    \n\n    width: 100%;\n    \n\n    max-width: 350px;\n    text-align: center;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n    background-color: #4caf50;\n    \n\n}\n\n.download-button[_ngcontent-%COMP%] {\n    background-color: #2196f3;\n    \n\n}\n\n.upload-button[_ngcontent-%COMP%]:hover {\n    background-color: #45a049;\n}\n\n.download-button[_ngcontent-%COMP%]:hover {\n    background-color: #1e88e5;\n}\n\n.upload-instructions[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-size: 16px;\n    color: #333;\n    text-align: center;\n}\n\n.upload-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 5px 0;\n    font-weight: bold;\n}\n\n.upload-instructions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: disc;\n    padding-left: 0;\n    margin: 10px auto;\n    display: inline-block;\n    \n\n    text-align: left;\n    \n\n}\n\n.upload-instructions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n@media (max-width: 600px) {\n    .data-container[_ngcontent-%COMP%] {\n        gap: 20px;\n    }\n\n    .action-button[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .upload-instructions[_ngcontent-%COMP%] {\n        font-size: 14px;\n        \n\n        padding: 0 10px;\n        \n\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhL2RhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsc0RBQXNEO0lBQ3RELFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHlDQUF5QztRQUN6QyxlQUFlO1FBQ2Ysd0RBQXdEO0lBQzVEO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgLyogT3B0aW9uYWw6IFJlc3RyaWN0IGJ1dHRvbiB3aWR0aCBvbiBsYXJnZXIgc2NyZWVucyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIEZ1bGwgd2lkdGggYnV0dG9uICovXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cGxvYWQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgIC8qIEdyZWVuIGNvbG9yIGZvciB1cGxvYWQgYnV0dG9uICovXG59XG5cbi5kb3dubG9hZC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgLyogQmx1ZSBjb2xvciBmb3IgZG93bmxvYWQgYnV0dG9uICovXG59XG5cbi51cGxvYWQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG4uZG93bmxvYWQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4OGU1O1xufVxuXG4udXBsb2FkLWluc3RydWN0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXBsb2FkLWluc3RydWN0aW9ucyBwIHtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXBsb2FkLWluc3RydWN0aW9ucyB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogQ2VudGVycyB0aGUgbGlzdCBob3Jpem9udGFsbHkgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC8qIEFsaWducyB0ZXh0IHdpdGhpbiB0aGUgbGlzdCBpdGVtcyAqL1xufVxuXG4udXBsb2FkLWluc3RydWN0aW9ucyBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuZGF0YS1jb250YWluZXIge1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudXBsb2FkLWluc3RydWN0aW9ucyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgLyogQWRkIHBhZGRpbmcgZm9yIGJldHRlciByZWFkYWJpbGl0eSBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1820:
/*!*******************************************************************!*\
  !*** ./src/app/components/driver-route/driver-route.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriverRouteComponent: () => (/* binding */ DriverRouteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _image_thumbnail_image_thumbnail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image-thumbnail/image-thumbnail.component */ 4133);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_driver_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/driver-route.service */ 1444);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);






 // Import RouterModule







const _c0 = () => ["/home"];
const _c1 = a0 => ({
  "arrived-row": a0
});
function DriverRouteComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const driverNames_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", driverNames_r4.name)("selected", i_r5 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](driverNames_r4.name);
  }
}
function DriverRouteComponent_table_18_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_18_td_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const dataSource_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", dataSource_r7[dataSource_r7.indexOf(element_r6) + 1].timeDifference + " m", "");
  }
}
function DriverRouteComponent_table_18_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DriverRouteComponent_table_18_td_3_div_2_Template, 4, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    const dataSource_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r6.deliveryAddress1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r6 !== dataSource_r7[dataSource_r7.length - 1]);
  }
}
function DriverRouteComponent_table_18_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_18_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39)(1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r8.getGoogleMapsUrl(element_r8.deliveryAddress2, element_r8.deliveryAddress3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", element_r8.deliveryAddress2, " ", element_r8.deliveryAddress3, " ");
  }
}
function DriverRouteComponent_table_18_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Customer Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_18_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 42)(1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "tel:+1", element_r10.customerPhone, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r10.customerPhone, "");
  }
}
function DriverRouteComponent_table_18_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_18_td_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46)(1, "input", 47, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DriverRouteComponent_table_18_td_12_div_1_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onFileSelected(element_r12, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DriverRouteComponent_table_18_td_12_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const fileInput_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](fileInput_r13.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Arrived");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DriverRouteComponent_table_18_td_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-image-thumbnail", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageUrl", element_r12.fileUrl)("title", element_r12.deliveryAddress2 + " " + element_r12.deliveryAddress3 + " (" + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, element_r12.actualArrivalTime, "medium") + ")");
  }
}
function DriverRouteComponent_table_18_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DriverRouteComponent_table_18_td_12_div_1_Template, 5, 0, "div", 45)(2, DriverRouteComponent_table_18_td_12_ng_template_2_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const alreadyArrivedBlock_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !element_r12.actualArrivalTime || !element_r12.fileUrl)("ngIfElse", alreadyArrivedBlock_r14);
  }
}
function DriverRouteComponent_table_18_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 50);
  }
}
function DriverRouteComponent_table_18_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 51);
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, row_r15.actualArrivalTime));
  }
}
function DriverRouteComponent_table_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DriverRouteComponent_table_18_th_2_Template, 2, 0, "th", 20)(3, DriverRouteComponent_table_18_td_3_Template, 3, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DriverRouteComponent_table_18_th_5_Template, 2, 0, "th", 23)(6, DriverRouteComponent_table_18_td_6_Template, 3, 3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DriverRouteComponent_table_18_th_8_Template, 2, 0, "th", 26)(9, DriverRouteComponent_table_18_td_9_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DriverRouteComponent_table_18_th_11_Template, 2, 0, "th", 23)(12, DriverRouteComponent_table_18_td_12_Template, 4, 2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DriverRouteComponent_table_18_tr_13_Template, 1, 0, "tr", 30)(14, DriverRouteComponent_table_18_tr_14_Template, 1, 3, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataSource_r7 = ctx.ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", dataSource_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
  }
}
class DriverRouteComponent {
  constructor(driverRouteService, snackBarService, sanitizer, cdr) {
    this.driverRouteService = driverRouteService;
    this.snackBarService = snackBarService;
    this.sanitizer = sanitizer;
    this.cdr = cdr;
    this.maxFileSize = 4 * 1024 * 1024; // 4 MB
    this.selectedFile = null;
    this.displayedColumns = ['deliveryAddress1', 'address', 'customerPhone', 'actualArrivalTime'];
    this.today = this.formatDate(new Date());
  }
  ngOnInit() {
    this.driverNames$ = this.driverRouteService.getDrivers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
      if (data && data.length > 0) {
        this.refreshDeliverRoute(data[0].name, this.today);
      }
    }));
  }
  formatDate(date) {
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  refreshDeliverRoute(driverName, deliveryDate) {
    const formattedDate = new Date(deliveryDate).toISOString().split('T')[0]; // Ensure date is formatted as YYYY-MM-DD
    this.deliveryRoute$ = this.driverRouteService.getDeliveryRoute(driverName, formattedDate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(deliveryStops => this.calculateTimeDifferences(deliveryStops)));
  }
  onFileSelected(deliveryRoute, event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file && file.type.startsWith('image/')) {
        if (file.size <= this.maxFileSize) {
          this.selectedFile = file;
          this.uploadFile(deliveryRoute, file);
        } else {
          this.snackBarService.showError('File size exceeds 4 MB.');
        }
      } else {
        this.snackBarService.showError('Please select an image file');
        this.selectedFile = null;
      }
    }
  }
  uploadFile(deliveryRoute, file) {
    this.snackBarService.showSuccess('Your file is being uploaded');
    this.driverRouteService.uploadPhoto(deliveryRoute.id, file).subscribe({
      next: event => {
        switch (event.type) {
          case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpEventType.Response:
            {
              const updatedDeliveryStop = event.body;
              Object.assign(deliveryRoute, updatedDeliveryStop);
              this.snackBarService.closeSnackBar();
              this.cdr.detectChanges();
            }
        }
      }
    });
  }
  getGoogleMapsUrl(address2, address3) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address2 + ' ' + address3)}`;
    const sanitizedUrl = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_3__.SecurityContext.URL, url);
    if (sanitizedUrl) {
      return this.sanitizer.bypassSecurityTrustUrl(sanitizedUrl);
    } else {
      return '';
    }
  }
  calculateTimeDifferences(deliveryStops) {
    for (let i = deliveryStops.length - 1; i > 0; i--) {
      const currentStop = deliveryStops[i];
      const previousStop = deliveryStops[i - 1];
      const currentTime = new Date(currentStop.plannedArrivalTime).getTime();
      const previousTime = new Date(previousStop.plannedArrivalTime).getTime();
      const timeDifferenceInMinutes = Math.round((currentTime - previousTime) / 60000);
      currentStop.timeDifference = timeDifferenceInMinutes;
    }
    if (deliveryStops.length > 0) {
      deliveryStops[0].timeDifference = undefined; // First row will have no time difference
    }
    return deliveryStops;
  }
  static {
    this.ɵfac = function DriverRouteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DriverRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_driver_route_service__WEBPACK_IMPORTED_MODULE_1__.DriverRouteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DriverRouteComponent,
      selectors: [["app-driver-route"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 9,
      consts: [["driverName", ""], ["deliveryDate2", ""], ["alreadyArrivedBlock", ""], ["fileInput", ""], [1, "container"], [1, "image-container", 3, "routerLink"], ["src", "assets/logo.png", "alt", "Company Logo"], [1, "driver-routes-title"], [1, "filters"], [1, "driver-filter"], ["for", "driver-name"], ["id", "driver-name", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "delivery-date-filter"], ["for", "delivery-date"], ["type", "text", "id", "delivery-date", "readonly", "", 1, "delivery-date-input", 3, "value"], ["mat-table", "", "class", "mat-elevation-z8 driver-routes-grid", "matSort", "", 3, "dataSource", 4, "ngIf"], [3, "value", "selected"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "driver-routes-grid", 3, "dataSource"], ["matColumnDef", "deliveryAddress1"], ["mat-header-cell", "", "class", "no-bottom-border", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "no-bottom-border", 4, "matCellDef"], ["matColumnDef", "address"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "address-column", 4, "matCellDef"], ["matColumnDef", "customerPhone"], ["mat-header-cell", "", "class", "wrap", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "customerPhone", 4, "matCellDef"], ["matColumnDef", "actualArrivalTime"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "no-bottom-border"], ["mat-cell", "", 1, "no-bottom-border"], ["class", "arrow-container", 4, "ngIf"], [1, "arrow-container"], [1, "fas", "fa-arrow-down"], [1, "time-difference-arrow"], ["mat-header-cell", ""], ["mat-cell", "", 1, "address-column"], ["target", "_blank", 3, "href"], ["mat-header-cell", "", 1, "wrap"], ["mat-cell", "", 1, "customerPhone"], [3, "href"], ["mat-cell", ""], ["class", "custom-file-input", 4, "ngIf", "ngIfElse"], [1, "custom-file-input"], ["type", "file", "id", "file", "accept", "image/*", "required", "", "hidden", "", 3, "change"], ["type", "button", 1, "button", 3, "click"], [3, "imageUrl", "title"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass"]],
      template: function DriverRouteComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Driver's Routes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8)(6, "div", 9)(7, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Driver Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "select", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DriverRouteComponent_Template_select_change_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const driverName_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
            const deliveryDate2_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.refreshDeliverRoute(driverName_r2.value, deliveryDate2_r3.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DriverRouteComponent_option_11_Template, 2, 3, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13)(14, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Delivery Date:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 15, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DriverRouteComponent_table_18_Template, 15, 3, "table", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 4, ctx.driverNames$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.today);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 6, ctx.deliveryRoute$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _image_thumbnail_image_thumbnail_component__WEBPACK_IMPORTED_MODULE_0__.ImageThumbnailComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
      styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0;\n    \n\n    color: #000000;\n    \n\n}\n\n.arrived-row[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #d3d3d3;\n    \n\n}\n\n.driver-routes-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    \n\n    margin: 20px 0;\n    \n\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff;\n    \n\n    color: #000000;\n    \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 16, 46, 1);\n    \n\n    padding: 10px;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    \n\n    border-radius: 8px;\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    justify-content: space-between;\n    \n\n    align-items: center;\n    font-size: 18px;\n    \n\n}\n\n.filters[_ngcontent-%COMP%]   .driver-filter[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.filters[_ngcontent-%COMP%]   .delivery-date-filter[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-right: 5px;\n    \n\n    margin-left: 10px;\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 18px;\n    \n\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: auto;\n    \n\n    min-width: 80px;\n    \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%] {\n    width: fit-content;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.button[_ngcontent-%COMP%] {\n    background-color: green;\n    color: white;\n    border: none;\n    padding: 10px 15px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 16px;\n    transition: background-color 0.3s ease;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n    background-color: darkgreen;\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-align: center;\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    font-weight: bold;\n    \n\n    \n\n    min-width: 75px;\n    \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td.wrap[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    white-space: normal;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    \n\n}\n\n.arrived[_ngcontent-%COMP%] {\n    background-color: #eeedeb;\n    font-weight: bold;\n}\n\n.nowrap[_ngcontent-%COMP%] {\n    white-space: nowrap;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        border: 0px;\n    }\n\n    .mdc-data-table__cell[_ngcontent-%COMP%], \n   .mdc-data-table__header-cell[_ngcontent-%COMP%] {\n        padding: 0 0px;\n    }\n\n    .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        padding: 10px;\n    }\n\n    .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n        background-color: #d3d3d3;\n        \n\n        font-size: 14px;\n        \n\n        min-width: 75px;\n        \n\n    }\n\n    .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 11px;\n        \n\n    }\n\n    .filters[_ngcontent-%COMP%]   .driver-filter[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   .delivery-date-filter[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 10px;\n    }\n\n    .address-column[_ngcontent-%COMP%] {\n        white-space: normal;\n        \n\n        word-wrap: break-word;\n        overflow-wrap: break-word;\n        \n\n        \n\n        padding-left: 50px;\n        \n\n        padding-right: 50px;\n        \n\n    }\n\n    .customerPhone[_ngcontent-%COMP%] {\n        white-space: normal;\n        word-wrap: break-word;\n        overflow-wrap: break-word;\n        \n\n        word-break: break-all;\n        \n\n    }\n\n    .nowrap[_ngcontent-%COMP%] {\n        white-space: normal;\n\n        .driver-routes-grid th:nth-child(2),\n        .driver-routes-grid td:nth-child(2) {\n            width: 40%;\n            \n\n        }\n\n        .driver-routes-grid th:nth-child(3),\n        .driver-routes-grid td:nth-child(3) {\n            width: 5%;\n            \n\n        }\n    }\n}\n\n.hidden-column[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.no-bottom-border[_ngcontent-%COMP%] {\n    border-bottom: none !important;\n}\n\n.arrow-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    margin-top: 10px;\n    \n\n}\n\n.arrow-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 19px;\n    \n\n    margin-right: 10px;\n    \n\n}\n\n.time-difference-arrow[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: darkgreen;\n    font-weight: bold;\n    margin-left: 5px;\n}\n\n#delivery-date[_ngcontent-%COMP%] {\n    width: 120px;\n    \n\n    text-align: left;\n    \n\n    cursor: default;\n    \n\n    background-color: white;\n    \n\n    border: 1px solid white;\n    \n\n    font-size: medium;\n    padding: 0;\n    margin: 0;\n}\n\n.custom-file-input[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.custom-file-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #0056b3;\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n}\n\n.custom-file-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: green;\n}\n\n.custom-file-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kcml2ZXItcm91dGUvZHJpdmVyLXJvdXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsaURBQWlEO0lBQ2pELGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsdUNBQXVDO0lBQ3ZDLCtDQUErQztJQUMvQyxlQUFlO0lBQ2YsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTs7UUFFSSxjQUFjO0lBQ2xCOztJQUVBOztRQUVJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6Qix1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsMkNBQTJDO0lBQy9DOztJQUVBO1FBQ0ksZUFBZTtRQUNmLDJCQUEyQjtJQUMvQjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QiwyREFBMkQ7UUFDM0Qsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsOEJBQThCO1FBQzlCLHFCQUFxQjtRQUNyQixzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSxtQkFBbUI7O1FBRW5COztZQUVJLFVBQVU7WUFDViw4Q0FBOEM7UUFDbEQ7O1FBRUE7O1lBRUksU0FBUztZQUNULHFEQUFxRDtRQUN6RDtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscURBQXFEO0lBQ3JELGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGhlIGJvZHkgKi9cbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAvKiBCbGFjayB0ZXh0IGNvbG9yICovXG59XG5cbi5hcnJpdmVkLXJvdyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgICAvKiBMaWdodGVyIGdyZXkgZm9yIGFycml2ZWQgcm93cyAqL1xufVxuXG4uZHJpdmVyLXJvdXRlcy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIC8qIFNldCBmb250IHNpemUgdG8gMzBweCAqL1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIC8qIEFkZCBlcXVhbCBtYXJnaW4gdG8gdG9wIGFuZCBib3R0b20gKi9cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLyogV2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIC8qIEJsYWNrIHRleHQgY29sb3IgZm9yIHRoZSBjb250YWluZXIgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7XG4gICAgLyogRGFyayBibHVlIGJhY2tncm91bmQgZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvKiBBZGp1c3QgdGhlIGxvZ28gc2l6ZSBhcyBuZWVkZWQgKi9cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5maWx0ZXJzIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvKiBTcGFjZSBiZXR3ZWVuIGZvciBmaWx0ZXJzICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5maWx0ZXJzIC5kcml2ZXItZmlsdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWx0ZXJzIC5kZWxpdmVyeS1kYXRlLWZpbHRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmlsdGVycyBsYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgLyogU3BhY2UgYmV0d2VlbiBsYWJlbCBhbmQgc2VsZWN0L2lucHV0ICovXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5maWx0ZXJzIHNlbGVjdCxcbi5maWx0ZXJzIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLyogTWF0Y2ggZm9udCBzaXplICovXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZmlsdGVycyBpbnB1dCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLyogQWRqdXN0IHRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgKi9cbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgLyogTWluaW11bSB3aWR0aCBmb3IgdGhlIGRlbGl2ZXJ5IGRhdGUgaW5wdXQgKi9cbn1cblxuLmRyaXZlci1yb3V0ZXMtZ3JpZCB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbn1cblxuLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aCxcbi5kcml2ZXItcm91dGVzLWdyaWQgdGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBXaGl0ZSB0ZXh0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgLypmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCBmb250IGZvciBoZWFkZXJzICovXG4gICAgbWluLXdpZHRoOiA3NXB4O1xuICAgIC8qIFByZXZlbnQgaGVhZGVycyBmcm9tIHdyYXBwaW5nIHRvbyBtdWNoICovXG59XG5cbi5kcml2ZXItcm91dGVzLWdyaWQgdGQud3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAvKiBFbnN1cmUgd3JhcHBpbmcgd2l0aGluIGNlbGxzICovXG59XG5cbi5kcml2ZXItcm91dGVzLWdyaWQgdGQge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIEVuc3VyZSB3cmFwcGluZyB3aXRoaW4gY2VsbHMgKi9cbn1cblxuLmFycml2ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVkZWI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuXG4gICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLFxuICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwge1xuICAgICAgICBwYWRkaW5nOiAwIDBweDtcbiAgICB9XG5cbiAgICAuZHJpdmVyLXJvdXRlcy1ncmlkIHRoLFxuICAgIC5kcml2ZXItcm91dGVzLWdyaWQgdGQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5kcml2ZXItcm91dGVzLWdyaWQgdGgsXG4gICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZHJpdmVyLXJvdXRlcy1ncmlkIHRoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgICAgICAgLyogV2hpdGUgdGV4dCBjb2xvciBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC8qIEluY3JlYXNlIHRoZSBmb250IHNpemUgKi9cbiAgICAgICAgbWluLXdpZHRoOiA3NXB4O1xuICAgICAgICAvKiBQcmV2ZW50IGhlYWRlcnMgZnJvbSB3cmFwcGluZyB0b28gbXVjaCAqL1xuICAgIH1cblxuICAgIC5kcml2ZXItcm91dGVzLWdyaWQgdGQge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIC8qIEluY3JlYXNlIHRoZSBmb250IHNpemUgKi9cbiAgICB9XG5cbiAgICAuZmlsdGVycyAuZHJpdmVyLWZpbHRlcixcbiAgICAuZmlsdGVycyAuZGVsaXZlcnktZGF0ZS1maWx0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuYWRkcmVzcy1jb2x1bW4ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAvKiBFbnN1cmUgYWRkcmVzcyB0ZXh0IHdyYXBzICovXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgLyogRW5zdXJlIGxvbmcgd29yZHMgYnJlYWsgKi9cbiAgICAgICAgLyptYXgtd2lkdGg6IDEwMCU7IC8qIEFsbG93IHRoZSBjb2x1bW4gdG8gdGFrZSBmdWxsIHdpZHRoICovXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgLyogQWRkIGxlZnQgcGFkZGluZyAqL1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICAgICAvKiBBZGQgcmlnaHQgcGFkZGluZyAqL1xuICAgIH1cblxuICAgIC5jdXN0b21lclBob25lIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAvKiBFbnN1cmUgcGhvbmUgbnVtYmVycyB3cmFwICovXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgLyogQnJlYWsgbG9uZyB3b3JkcyBhdCBhbnkgY2hhcmFjdGVyICovXG4gICAgfVxuXG4gICAgLm5vd3JhcCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cbiAgICAgICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aDpudGgtY2hpbGQoMiksXG4gICAgICAgIC5kcml2ZXItcm91dGVzLWdyaWQgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAvKiBBZGp1c3Qgd2lkdGggZm9yIGFkZHJlc3MgY29sdW1uIG9uIG1vYmlsZSAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aDpudGgtY2hpbGQoMyksXG4gICAgICAgIC5kcml2ZXItcm91dGVzLWdyaWQgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgY3VzdG9tZXIgcGhvbmUgY29sdW1uIG9uIG1vYmlsZSAqL1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGlkZGVuLWNvbHVtbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5vLWJvdHRvbS1ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmFycm93LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8qIE1vdmUgZG93biB0aGUgZW50aXJlIGFycm93IGNvbnRhaW5lciAqL1xufVxuXG4uYXJyb3ctY29udGFpbmVyIGkge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAvKiBGb250IEF3ZXNvbWUgaWNvbiBzaXplICovXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIC8qIEFkZCBzcGFjZSB0byB0aGUgcmlnaHQgb2YgdGhlIGFycm93ICovXG59XG5cbi50aW1lLWRpZmZlcmVuY2UtYXJyb3cge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogZGFya2dyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNkZWxpdmVyeS1kYXRlIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgLyogRW5zdXJlcyB0aGUgd2lkdGggaXMgb25seSBhcyB3aWRlIGFzIHRoZSBjb250ZW50ICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvKiBDZW50ZXJzIHRoZSB0ZXh0IGluc2lkZSB0aGUgdGV4dCBib3ggKi9cbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgLyogUHJldmVudCB0aGUgdGV4dCBjdXJzb3IgZnJvbSBhcHBlYXJpbmcgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gd2hpdGUgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAvKiBTZXQgdGhlIGJvcmRlciBjb2xvciB0byB3aGl0ZSAqL1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5jdXN0b20tZmlsZS1pbnB1dCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8465:
/*!***********************************************************************************!*\
  !*** ./src/app/components/employee-application/employee-application.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeApplicationComponent: () => (/* binding */ EmployeeApplicationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);






function EmployeeApplicationComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "label")(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_84_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.employee.authorizedToWork, $event) || (ctx_r1.employee.authorizedToWork = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " If no, are you authorized to work in the U.S.? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.employee.authorizedToWork);
  }
}
function EmployeeApplicationComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "If yes, when?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_89_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.employee.workedBeforeWhen, $event) || (ctx_r1.employee.workedBeforeWhen = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.employee.workedBeforeWhen);
  }
}
function EmployeeApplicationComponent_div_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_157_Template_input_ngModelChange_4_listener($event) {
      const reference_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](reference_r5.fullName, $event) || (reference_r5.fullName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Relationship");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_157_Template_input_ngModelChange_7_listener($event) {
      const reference_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](reference_r5.relationship, $event) || (reference_r5.relationship = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_157_Template_input_ngModelChange_10_listener($event) {
      const reference_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](reference_r5.company, $event) || (reference_r5.company = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_157_Template_input_ngModelChange_13_listener($event) {
      const reference_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](reference_r5.phone, $event) || (reference_r5.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_157_Template_input_ngModelChange_16_listener($event) {
      const reference_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](reference_r5.address, $event) || (reference_r5.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const reference_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", reference_r5.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", reference_r5.relationship);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", reference_r5.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", reference_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", reference_r5.address);
  }
}
function EmployeeApplicationComponent_div_162_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_4_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.company, $event) || (job_r7.company = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_7_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.phone, $event) || (job_r7.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_10_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.address, $event) || (job_r7.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_13_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.supervisor, $event) || (job_r7.supervisor = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Job Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_16_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.jobTitle, $event) || (job_r7.jobTitle = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Starting Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_19_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.startingSalary, $event) || (job_r7.startingSalary = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ending Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_22_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.endingSalary, $event) || (job_r7.endingSalary = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Responsibilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_25_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.responsibilities, $event) || (job_r7.responsibilities = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_28_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.from, $event) || (job_r7.from = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_31_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.to, $event) || (job_r7.to = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Reason for Leaving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_34_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.reasonForLeaving, $event) || (job_r7.reasonForLeaving = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label")(36, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_div_162_Template_input_ngModelChange_36_listener($event) {
      const job_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](job_r7.contactSupervisor, $event) || (job_r7.contactSupervisor = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " May we contact your previous supervisor for a reference? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const job_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.supervisor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.jobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.startingSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.endingSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.responsibilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.reasonForLeaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", job_r7.contactSupervisor);
  }
}
function EmployeeApplicationComponent_button_222_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_button_222_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.nextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function EmployeeApplicationComponent_button_223_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_button_223_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.submitApplication());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class EmployeeApplicationComponent {
  constructor(router) {
    this.router = router;
    this.currentStep = 1;
    this.employee = {
      fullName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
      dateAvailable: '',
      socialSecurityNumber: '',
      desiredSalary: '',
      positionApplied: '',
      isCitizen: false,
      authorizedToWork: false,
      workedBefore: false,
      workedBeforeWhen: '',
      education: {
        highSchool: {
          name: '',
          address: '',
          from: '',
          to: '',
          graduated: false,
          degree: ''
        },
        college: {
          name: '',
          address: '',
          from: '',
          to: '',
          graduated: false,
          degree: ''
        },
        other: {
          name: '',
          address: '',
          from: '',
          to: '',
          graduated: false,
          degree: ''
        }
      },
      references: [{
        fullName: '',
        relationship: '',
        company: '',
        phone: '',
        address: ''
      }, {
        fullName: '',
        relationship: '',
        company: '',
        phone: '',
        address: ''
      }, {
        fullName: '',
        relationship: '',
        company: '',
        phone: '',
        address: ''
      }],
      previousEmployment: [{
        company: '',
        phone: '',
        address: '',
        supervisor: '',
        jobTitle: '',
        startingSalary: '',
        endingSalary: '',
        responsibilities: '',
        from: '',
        to: '',
        reasonForLeaving: '',
        contactSupervisor: false
      }, {
        company: '',
        phone: '',
        address: '',
        supervisor: '',
        jobTitle: '',
        startingSalary: '',
        endingSalary: '',
        responsibilities: '',
        from: '',
        to: '',
        reasonForLeaving: '',
        contactSupervisor: false
      }, {
        company: '',
        phone: '',
        address: '',
        supervisor: '',
        jobTitle: '',
        startingSalary: '',
        endingSalary: '',
        responsibilities: '',
        from: '',
        to: '',
        reasonForLeaving: '',
        contactSupervisor: false
      }],
      militaryService: {
        branch: '',
        from: '',
        to: '',
        rankAtDischarge: '',
        typeOfDischarge: '',
        explanation: ''
      },
      disclaimer: {
        signature: '',
        date: ''
      }
    };
  }
  goToStep(step) {
    // Basic form validation before allowing navigation
    if (step >= 1 && step <= 6) {
      // Optional: Add validation logic here if needed
      // For example, checking if required fields are filled before allowing to proceed
      this.currentStep = step;
    }
  }
  nextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  submitApplication() {
    console.log('Application submitted:', this.employee);
    // Add your API submission logic here
  }
  static {
    this.ɵfac = function EmployeeApplicationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EmployeeApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeApplicationComponent,
      selectors: [["app-employee-application"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 224,
      vars: 78,
      consts: [[1, "container"], [1, "logo-container"], ["src", "assets/goldenstateseafood.png", "alt", "GS Image", 1, "logo-image", 3, "click"], [1, "step-indicator"], [3, "click"], [1, "step"], [1, "form-row"], [1, "form-group"], ["type", "text", 3, "ngModelChange", "ngModel"], ["type", "email", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "number", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], ["class", "reference-section", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "review-section"], [1, "button-group"], [3, "click", "disabled"], [3, "click", 4, "ngIf"], [1, "reference-section"]],
      template: function EmployeeApplicationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employment Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_Template_img_click_4_listener() {
            return ctx.goToHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_Template_div_click_6_listener() {
            return ctx.goToStep(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Personal Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_Template_div_click_8_listener() {
            return ctx.goToStep(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_Template_div_click_10_listener() {
            return ctx.goToStep(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "References");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_Template_div_click_12_listener() {
            return ctx.goToStep(4);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Previous Employment");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_Template_div_click_14_listener() {
            return ctx.goToStep(5);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Military Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_Template_div_click_16_listener() {
            return ctx.goToStep(6);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Review & Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5)(19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Personal Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6)(22, "div", 7)(23, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Full Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.fullName, $event) || (ctx.employee.fullName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7)(27, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.phone, $event) || (ctx.employee.phone = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6)(31, "div", 7)(32, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.email, $event) || (ctx.employee.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7)(36, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Social Security Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.socialSecurityNumber, $event) || (ctx.employee.socialSecurityNumber = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6)(43, "div", 7)(44, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Street Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.address, $event) || (ctx.employee.address = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6)(48, "div", 7)(49, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.city, $event) || (ctx.employee.city = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7)(53, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.state, $event) || (ctx.employee.state = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7)(57, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "ZIP Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.zip, $event) || (ctx.employee.zip = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Employment Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6)(64, "div", 7)(65, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Position Applied For");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.positionApplied, $event) || (ctx.employee.positionApplied = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7)(69, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Date Available");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_71_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.dateAvailable, $event) || (ctx.employee.dateAvailable = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6)(73, "div", 7)(74, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Desired Salary");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_76_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.desiredSalary, $event) || (ctx.employee.desiredSalary = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Additional Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 7)(81, "label")(82, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_82_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.isCitizen, $event) || (ctx.employee.isCitizen = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Are you a citizen of the United States? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, EmployeeApplicationComponent_div_84_Template, 4, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7)(86, "label")(87, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_87_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.workedBefore, $event) || (ctx.employee.workedBefore = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Have you ever worked for this company? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, EmployeeApplicationComponent_div_89_Template, 4, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 0)(91, "div", 5)(92, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 7)(95, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "High School Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_97_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.highSchool.name, $event) || (ctx.employee.education.highSchool.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_100_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.highSchool.address, $event) || (ctx.employee.education.highSchool.address = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "From");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_103_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.highSchool.from, $event) || (ctx.employee.education.highSchool.from = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "To");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_106_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.highSchool.to, $event) || (ctx.employee.education.highSchool.to = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label")(108, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_108_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.highSchool.graduated, $event) || (ctx.employee.education.highSchool.graduated = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Did you graduate? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Degree");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_112_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.highSchool.degree, $event) || (ctx.employee.education.highSchool.degree = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 7)(115, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "College Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_117_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.college.name, $event) || (ctx.employee.education.college.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_120_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.college.address, $event) || (ctx.employee.education.college.address = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "From");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_123_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.college.from, $event) || (ctx.employee.education.college.from = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "To");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_126_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.college.to, $event) || (ctx.employee.education.college.to = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label")(128, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_128_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.college.graduated, $event) || (ctx.employee.education.college.graduated = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Did you graduate? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Degree");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_132_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.college.degree, $event) || (ctx.employee.education.college.degree = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 7)(135, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Other Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_137_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.other.name, $event) || (ctx.employee.education.other.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_140_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.other.address, $event) || (ctx.employee.education.other.address = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "From");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_143_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.other.from, $event) || (ctx.employee.education.other.from = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "To");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_146_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.other.to, $event) || (ctx.employee.education.other.to = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label")(148, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_148_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.other.graduated, $event) || (ctx.employee.education.other.graduated = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Did you graduate? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Degree");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_152_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.education.other.degree, $event) || (ctx.employee.education.other.degree = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 0)(154, "div", 5)(155, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "References");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, EmployeeApplicationComponent_div_157_Template, 17, 5, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 0)(159, "div", 5)(160, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Previous Employment");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, EmployeeApplicationComponent_div_162_Template, 38, 12, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 0)(164, "div", 5)(165, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Military Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 7)(168, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Branch");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_170_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.militaryService.branch, $event) || (ctx.employee.militaryService.branch = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "From");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_173_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.militaryService.from, $event) || (ctx.employee.militaryService.from = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "To");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_176_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.militaryService.to, $event) || (ctx.employee.militaryService.to = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Rank at Discharge");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_179_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.militaryService.rankAtDischarge, $event) || (ctx.employee.militaryService.rankAtDischarge = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Type of Discharge");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_182_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.militaryService.typeOfDischarge, $event) || (ctx.employee.militaryService.typeOfDischarge = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "If other than honorable, explain:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_185_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.militaryService.explanation, $event) || (ctx.employee.militaryService.explanation = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 0)(187, "div", 5)(188, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Review Your Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 16)(191, "p")(192, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Full Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p")(196, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p")(200, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Phone:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p")(204, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p")(208, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Position Applied:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p")(212, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Signature:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_214_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.disclaimer.signature, $event) || (ctx.employee.disclaimer.signature = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p")(216, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Date:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmployeeApplicationComponent_Template_input_ngModelChange_218_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.employee.disclaimer.date, $event) || (ctx.employee.disclaimer.date = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 17)(220, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeApplicationComponent_Template_button_click_220_listener() {
            return ctx.prevStep();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](222, EmployeeApplicationComponent_button_222_Template, 2, 0, "button", 19)(223, EmployeeApplicationComponent_button_223_Template, 2, 0, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.fullName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.socialSecurityNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.city);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.state);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.zip);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.positionApplied);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.dateAvailable);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.desiredSalary);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.isCitizen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.employee.isCitizen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.workedBefore);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee.workedBefore);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.highSchool.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.highSchool.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.highSchool.from);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.highSchool.to);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.highSchool.graduated);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.highSchool.degree);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.college.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.college.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.college.from);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.college.to);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.college.graduated);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.college.degree);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.other.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.other.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.other.from);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.other.to);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.other.graduated);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.education.other.degree);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employee.references);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employee.previousEmployment);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.militaryService.branch);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.militaryService.from);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.militaryService.to);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.militaryService.rankAtDischarge);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.militaryService.typeOfDischarge);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.militaryService.explanation);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep === 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employee.fullName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx.employee.address, ", ", ctx.employee.city, ", ", ctx.employee.state, " ", ctx.employee.zip, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employee.phone, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employee.email, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employee.positionApplied, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.disclaimer.signature);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.employee.disclaimer.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentStep === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep < 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: ["\n\n.container[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: #f9f9f9;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 10px;\n}\n\n\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 15px;\n}\n\n.form-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n}\n\ninput[type=\"text\"][_ngcontent-%COMP%], \ninput[type=\"email\"][_ngcontent-%COMP%], \ninput[type=\"date\"][_ngcontent-%COMP%], \ninput[type=\"number\"][_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\n    margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-color: #1c294c;\n    box-shadow: 0 0 5px #1c294c;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n    background-color: #1c294c;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin: 10px 5px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: #1c294c;\n}\n\n.button-group[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.home-button-container[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n\n\n.step-indicator[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 5px;\n    gap: 10px;\n    font-weight: bold;\n}\n\n.step-indicator[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    flex: 1;\n    text-align: center;\n    padding: 10px;\n    background-color: #1c294c;\n    border-radius: 4px;\n    color: white;\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n.step-indicator[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n    background-color: #f2b705;\n    color: black;\n}\n\n\n\n.step[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.step.active[_ngcontent-%COMP%] {\n    display: block;\n}\n\n\n\n.reference-section[_ngcontent-%COMP%] {\n    border-top: 1px solid #ccc;\n    padding-top: 10px;\n    margin-top: 10px;\n}\n\n\n\n.review-section[_ngcontent-%COMP%] {\n    background-color: #ccc;\n    padding: 15px;\n    border-radius: 4px;\n}\n\n.review-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: 0;\n}\n\n.review-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 5px 0;\n}\n\n.review-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 150px;\n}\n\n\n\n.error[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 0.9em;\n}\n\nhr[_ngcontent-%COMP%] {\n    border: none;\n    height: 2px;  \n\n    background-color: #1c294c;  \n\n    margin: 20px 0;  \n\n}\n\nh3[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 5px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-weight: bold;\n    \n}\n\n.logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;  \n\n    cursor: pointer;  \n\n}\n\n.logo-image[_ngcontent-%COMP%] {\n    max-width: 300px;  \n\n    height: auto;\n    transition: transform 0.2s;  \n\n}\n\n.logo-image[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS1hcHBsaWNhdGlvbi9lbXBsb3llZS1hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQjtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBLFlBQVk7QUFDWjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXLEdBQUcsMkJBQTJCO0lBQ3pDLHlCQUF5QixHQUFHLHFDQUFxQztJQUNqRSxjQUFjLEdBQUcsK0JBQStCO0FBQ3BEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWMsR0FBRywrQkFBK0I7SUFDaEQsZUFBZSxHQUFHLCtCQUErQjtBQUNyRDs7QUFFQTtJQUNJLGdCQUFnQixHQUFHLHVEQUF1RDtJQUMxRSxZQUFZO0lBQ1osMEJBQTBCLEdBQUcsdUNBQXVDO0FBQ3hFOztBQUVBO0lBQ0ksc0JBQXNCLEdBQUcsK0NBQStDO0FBQzVFIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29udGFpbmVyIHN0eWxlcyAqL1xuLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLyogRm9ybSBsYXlvdXQgKi9cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLXJvdyA+IGRpdiB7XG4gICAgZmxleDogMTtcbn1cblxuLyogRm9ybSBlbGVtZW50cyAqL1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG5zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pbnB1dDpmb2N1cywgXG5zZWxlY3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWMyOTRjO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzFjMjk0Yztcbn1cblxuLyogQnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyOTRjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyOTRjO1xufVxuXG4uYnV0dG9uLWdyb3VwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLWJ1dHRvbi1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4vKiBTdGVwIGluZGljYXRvciAqL1xuLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3RlcC1pbmRpY2F0b3IgZGl2IHtcbiAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzI5NGM7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4uc3RlcC1pbmRpY2F0b3IgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYjcwNTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIFN0ZXBzICovXG4uc3RlcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN0ZXAuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogUmVmZXJlbmNlIHNlY3Rpb24gKi9cbi5yZWZlcmVuY2Utc2VjdGlvbiB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLyogUmV2aWV3IHNlY3Rpb24gKi9cbi5yZXZpZXctc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnJldmlldy1zZWN0aW9uIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucmV2aWV3LXNlY3Rpb24gcCB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLnJldmlldy1zZWN0aW9uIHN0cm9uZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLyogRXJyb3IgbWVzc2FnZXMgKi9cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG5ociB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMnB4OyAgLyogTWFrZXMgdGhlIGxpbmUgdGhpY2tlciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzI5NGM7ICAvKiBNYXRjaGVzIHlvdXIgZm9ybSdzIGNvbG9yIHNjaGVtZSAqL1xuICAgIG1hcmdpbjogMjBweCAwOyAgLyogQWRkcyBzcGFjZSBhYm92ZSBhbmQgYmVsb3cgKi9cbn1cblxuaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmgyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwOyAgLyogQWRkcyBzb21lIHZlcnRpY2FsIHNwYWNpbmcgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAvKiBTaG93cyBoYW5kIGN1cnNvciBvbiBob3ZlciAqL1xufVxuXG4ubG9nby1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDsgIC8qIEFkanVzdCB0aGlzIHZhbHVlIGJhc2VkIG9uIHlvdXIgZGVzaXJlZCBpbWFnZSBzaXplICovXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzOyAgLyogT3B0aW9uYWw6IGFkZHMgc21vb3RoIGhvdmVyIGVmZmVjdCAqL1xufVxuXG4ubG9nby1pbWFnZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgIC8qIE9wdGlvbmFsOiBzbGlnaHRseSBlbmxhcmdlcyBpbWFnZSBvbiBob3ZlciAqL1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7537:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/employment-verification/employment-verification.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmploymentVerificationComponent: () => (/* binding */ EmploymentVerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);






function EmploymentVerificationComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76)(1, "div", 4)(2, "div", 5)(3, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "USCIS Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class EmploymentVerificationComponent {
  constructor(fb) {
    this.fb = fb;
    this.verificationForm = this.fb.group({
      // Section 1: Employee Information
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      middleInitial: [''],
      otherNames: [''],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      aptNumber: [''],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      socialSecurity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      email: [''],
      telephone: [''],
      // Citizenship Status
      citizenshipStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      uscisNumber: [''],
      i94Number: [''],
      passportNumber: [''],
      countryOfIssuance: [''],
      // Employee Signature Section
      employeeSignature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      employeeSignatureDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      // Section 2: Employer Review
      documentTitleA: [''],
      issuingAuthorityA: [''],
      documentNumberA: [''],
      expirationDateA: [''],
      documentTitleB: [''],
      issuingAuthorityB: [''],
      documentNumberB: [''],
      expirationDateB: [''],
      documentTitleC: [''],
      issuingAuthorityC: [''],
      documentNumberC: [''],
      expirationDateC: [''],
      // Additional Information
      additionalInformation: [''],
      alternativeProcedure: [false],
      // Employer Certification
      firstDayOfEmployment: [''],
      employerTitle: [''],
      employerName: [''],
      employerSignature: [''],
      employerSignatureDate: [''],
      businessName: [''],
      businessAddress: ['']
    });
  }
  ngOnInit() {
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    this.verificationForm.patchValue({
      employeeSignatureDate: today,
      employerSignatureDate: today
    });
  }
  onSubmit() {
    if (this.verificationForm.valid) {
      console.log(this.verificationForm.value);
    } else {
      Object.keys(this.verificationForm.controls).forEach(key => {
        const control = this.verificationForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
  static {
    this.ɵfac = function EmploymentVerificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EmploymentVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmploymentVerificationComponent,
      selectors: [["app-employment-verification"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 201,
      vars: 2,
      consts: [[1, "i9-form", 3, "ngSubmit", "formGroup"], [1, "form-header"], [1, "form-subtitle"], [1, "section"], [1, "form-row"], [1, "form-group"], ["for", "lastName"], ["id", "lastName", "type", "text", "formControlName", "lastName"], ["for", "firstName"], ["id", "firstName", "type", "text", "formControlName", "firstName"], [1, "form-group", "small"], ["for", "middleInitial"], ["id", "middleInitial", "type", "text", "formControlName", "middleInitial"], ["for", "otherNames"], ["id", "otherNames", "type", "text", "formControlName", "otherNames"], [1, "form-group", "large"], ["for", "address"], ["id", "address", "type", "text", "formControlName", "address"], ["for", "aptNumber"], ["id", "aptNumber", "type", "text", "formControlName", "aptNumber"], ["for", "city"], ["id", "city", "type", "text", "formControlName", "city"], ["for", "state"], ["id", "state", "type", "text", "formControlName", "state"], ["for", "zipCode"], ["id", "zipCode", "type", "text", "formControlName", "zipCode"], ["for", "dateOfBirth"], ["id", "dateOfBirth", "type", "date", "formControlName", "dateOfBirth"], ["for", "socialSecurity"], ["id", "socialSecurity", "type", "text", "formControlName", "socialSecurity"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["for", "telephone"], ["id", "telephone", "type", "tel", "formControlName", "telephone"], [1, "citizenship-section"], [1, "radio-group"], ["type", "radio", "formControlName", "citizenshipStatus", "value", "citizen"], ["type", "radio", "formControlName", "citizenshipStatus", "value", "noncitizen"], ["type", "radio", "formControlName", "citizenshipStatus", "value", "permanent"], ["type", "radio", "formControlName", "citizenshipStatus", "value", "authorized"], ["class", "documents-section", 4, "ngIf"], [1, "signature-section"], ["for", "employeeSignature"], ["id", "employeeSignature", "type", "text", "formControlName", "employeeSignature"], ["for", "employeeSignatureDate"], ["id", "employeeSignatureDate", "type", "date", "formControlName", "employeeSignatureDate"], [1, "documents-grid"], [1, "document-column"], ["type", "text", "formControlName", "documentTitleA"], ["type", "text", "formControlName", "issuingAuthorityA"], ["type", "text", "formControlName", "documentNumberA"], ["type", "date", "formControlName", "expirationDateA"], ["type", "text", "formControlName", "documentTitleB"], ["type", "text", "formControlName", "issuingAuthorityB"], ["type", "text", "formControlName", "documentNumberB"], ["type", "date", "formControlName", "expirationDateB"], ["type", "text", "formControlName", "documentTitleC"], ["type", "text", "formControlName", "issuingAuthorityC"], ["type", "text", "formControlName", "documentNumberC"], ["type", "date", "formControlName", "expirationDateC"], [1, "additional-info"], ["for", "additionalInformation"], ["id", "additionalInformation", "formControlName", "additionalInformation"], [1, "form-group", "checkbox"], ["type", "checkbox", "formControlName", "alternativeProcedure"], [1, "certification-section"], ["type", "date", "formControlName", "firstDayOfEmployment"], ["type", "text", "formControlName", "employerTitle"], ["type", "text", "formControlName", "employerName"], ["type", "text", "formControlName", "employerSignature"], ["type", "date", "formControlName", "employerSignatureDate"], ["type", "text", "formControlName", "businessName"], ["type", "text", "formControlName", "businessAddress"], [1, "button-group"], ["type", "submit"], ["type", "reset"], [1, "documents-section"], ["for", "uscisNumber"], ["id", "uscisNumber", "type", "text", "formControlName", "uscisNumber"]],
      template: function EmploymentVerificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmploymentVerificationComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Employment Eligibility Verification");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Department of Homeland Security");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "U.S. Citizenship and Immigration Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Section 1. Employee Information and Attestation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "div", 5)(13, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name (Family Name)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5)(17, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10)(21, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Middle Initial");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5)(25, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Other Names Used");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4)(29, "div", 15)(30, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Address (Street Number and Name)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10)(34, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Apt. Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4)(38, "div", 5)(39, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "City or Town");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10)(43, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5)(47, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ZIP Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4)(51, "div", 5)(52, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Date of Birth (mm/dd/yyyy)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5)(56, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "U.S. Social Security Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5)(60, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Employee's Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5)(64, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Employee's Telephone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34)(68, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Employee attestation (check one):");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35)(71, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " A citizen of the United States ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " A noncitizen national of the United States ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " A lawful permanent resident ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " An alien authorized to work ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, EmploymentVerificationComponent_div_83_Template, 6, 0, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 41)(85, "div", 5)(86, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Signature of Employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5)(90, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Today's Date (mm/dd/yyyy)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3)(94, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Section 2. Employer Review and Verification");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 46)(97, "div", 47)(98, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "List A");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 5)(101, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Document Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 5)(105, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Issuing Authority");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 5)(109, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Document Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 5)(113, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Expiration Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 47)(117, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "List B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 5)(120, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Document Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 5)(124, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Issuing Authority");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 5)(128, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Document Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 5)(132, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Expiration Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 47)(136, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "List C");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 5)(139, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Document Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 5)(143, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Issuing Authority");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 5)(147, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Document Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 5)(151, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Expiration Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 60)(155, "div", 5)(156, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Additional Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "textarea", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 63)(160, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Check here if you used an alternative procedure ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 65)(164, "div", 4)(165, "div", 5)(166, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "First Day of Employment (mm/dd/yyyy)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "input", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 4)(170, "div", 5)(171, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Employer Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 5)(175, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Last Name, First Name of Employer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 4)(179, "div", 5)(180, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Signature of Employer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 5)(184, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Today's Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 4)(188, "div", 5)(189, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Business Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "input", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 5)(193, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Business Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "input", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 73)(197, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Submit Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "button", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Reset Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.verificationForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.verificationForm.get("citizenshipStatus")) == null ? null : tmp_1_0.value) === "permanent");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: [".i9-form[_ngcontent-%COMP%] {\n    max-width: 900px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #fff;\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  }\n  \n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    border-bottom: 2px solid #333;\n  }\n  \n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  \n  .form-subtitle[_ngcontent-%COMP%] {\n    margin: 5px 0;\n    color: #666;\n  }\n  \n  .section[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n  \n  .section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    color: #333;\n    font-size: 1.2em;\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 15px;\n    flex-wrap: wrap;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    flex: 1 1 200px;\n    min-width: 200px;\n  }\n  \n  .form-group.small[_ngcontent-%COMP%] {\n    flex: 0 1 100px;\n    min-width: 100px;\n  }\n  \n  .form-group.large[_ngcontent-%COMP%] {\n    flex: 2 1 400px;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 0.9em;\n    color: #444;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    font-size: 1em;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    min-height: 100px;\n    resize: vertical;\n  }\n  \n  .citizenship-section[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    padding: 15px;\n    background-color: #f9f9f9;\n    border-radius: 4px;\n  }\n  \n  .radio-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n  }\n  \n  .radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n  }\n  \n  .documents-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 20px;\n    margin: 20px 0;\n  }\n  \n  .document-column[_ngcontent-%COMP%] {\n    padding: 15px;\n    background-color: #f9f9f9;\n    border-radius: 4px;\n  }\n  \n  .document-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    color: #333;\n  }\n  \n  .additional-info[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 15px;\n    background-color: #f9f9f9;\n    border-radius: 4px;\n  }\n  \n  .checkbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-top: 10px;\n  }\n  \n  .checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    width: auto;\n    margin-right: 10px;\n  }\n  \n  .certification-section[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    padding: 20px;\n    background-color: #f9f9f9;\n    border-radius: 4px;\n  }\n  \n  .button-group[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 15px;\n    justify-content: flex-end;\n    margin-top: 20px;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;\n    transition: background-color 0.3s ease;\n  }\n  \n  button[type=\"submit\"][_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n  }\n  \n  button[type=\"reset\"][_ngcontent-%COMP%] {\n    background-color: #f44336;\n    color: white;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    opacity: 0.9;\n  }\n  \n  \n\n  @media (max-width: 768px) {\n    .form-row[_ngcontent-%COMP%] {\n      flex-direction: column;\n      gap: 10px;\n    }\n    \n    .form-group[_ngcontent-%COMP%] {\n      min-width: 100%;\n    }\n    \n    .documents-grid[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3ltZW50LXZlcmlmaWNhdGlvbi9lbXBsb3ltZW50LXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBOztJQUVFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUEsMkJBQTJCO0VBQzNCO0lBQ0U7TUFDRSxzQkFBc0I7TUFDdEIsU0FBUztJQUNYOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLDBCQUEwQjtJQUM1QjtFQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmk5LWZvcm0ge1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICBcbiAgLmZvcm0taGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcbiAgfVxuICBcbiAgLmZvcm0taGVhZGVyIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuZm9ybS1zdWJ0aXRsZSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxuICBcbiAgLnNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLnNlY3Rpb24gaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuICBcbiAgLmZvcm0tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXAge1xuICAgIGZsZXg6IDEgMSAyMDBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9XG4gIFxuICAuZm9ybS1ncm91cC5zbWFsbCB7XG4gICAgZmxleDogMCAxIDEwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwLmxhcmdlIHtcbiAgICBmbGV4OiAyIDEgNDAwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXAgaW5wdXQsXG4gIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG4gIFxuICAuY2l0aXplbnNoaXAtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLnJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5yYWRpby1ncm91cCBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5kb2N1bWVudHMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbiAgXG4gIC5kb2N1bWVudC1jb2x1bW4ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIC5kb2N1bWVudC1jb2x1bW4gaDQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5hZGRpdGlvbmFsLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLmNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBcbiAgLmNlcnRpZmljYXRpb24tc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIFxuICAuYnV0dG9uLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICB9XG4gIFxuICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGJ1dHRvblt0eXBlPVwicmVzZXRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICBcbiAgLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyAqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZm9ybS1yb3cge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuZG9jdW1lbnRzLWdyaWQge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4593:
/*!***********************************************************************!*\
  !*** ./src/app/components/hire-checklist/hire-checklist.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HireChecklistComponent: () => (/* binding */ HireChecklistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class HireChecklistComponent {
  constructor(fb) {
    this.fb = fb;
    this.checklistForm = this.fb.group({
      name: [''],
      title: [''],
      department: [''],
      // Forms Completed Section
      employmentApplication: [false],
      other1: [false],
      // New Employee Paperwork Section
      w4Form: [false],
      i9Form: [false],
      directDeposit: [false],
      statusChange: [false],
      handbookAcknowledgement: [false],
      harassmentPolicy: [false],
      propertyReturn: [false],
      wageProtection: [false],
      // New Hire Packet Section
      employeeHandbook: [false],
      jobDescription: [false],
      insuranceInfo: [false],
      holidaySchedule: [false],
      brochures: [false],
      harassmentPamphlet: [false],
      workersComp: [false],
      disabilityInfo: [false],
      phoneList: [false],
      other2: [false],
      // Manager Discussion Section
      companyHistory: [false],
      orientationPeriod: [false],
      departmentResponsibilities: [false],
      positionDuties: [false],
      workHours: [false],
      attendance: [false],
      timeOffProcedure: [false],
      timeRecords: [false],
      safetyRequirements: [false],
      dressCode: [false],
      other3: [false],
      // Acknowledgment Section
      employeeSignature: [''],
      signatureDate: ['']
    });
  }
  ngOnInit() {
    // Set default date to today
    this.checklistForm.patchValue({
      signatureDate: new Date().toISOString().split('T')[0]
    });
  }
  onSubmit() {
    if (this.checklistForm.valid) {
      console.log(this.checklistForm.value);
    }
  }
  static {
    this.ɵfac = function HireChecklistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HireChecklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HireChecklistComponent,
      selectors: [["app-hire-checklist"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 149,
      vars: 1,
      consts: [[1, "checklist-form", 3, "ngSubmit", "formGroup"], [1, "header-info"], [1, "form-row"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title"], ["for", "department"], ["type", "text", "id", "department", "formControlName", "department"], [1, "section"], [1, "checkbox-group"], ["type", "checkbox", "formControlName", "employmentApplication"], ["type", "checkbox", "formControlName", "other1"], ["type", "checkbox", "formControlName", "w4Form"], ["type", "checkbox", "formControlName", "i9Form"], ["type", "checkbox", "formControlName", "directDeposit"], ["type", "checkbox", "formControlName", "statusChange"], ["type", "checkbox", "formControlName", "handbookAcknowledgement"], ["type", "checkbox", "formControlName", "harassmentPolicy"], ["type", "checkbox", "formControlName", "propertyReturn"], ["type", "checkbox", "formControlName", "wageProtection"], ["type", "checkbox", "formControlName", "employeeHandbook"], ["type", "checkbox", "formControlName", "jobDescription"], ["type", "checkbox", "formControlName", "insuranceInfo"], ["type", "checkbox", "formControlName", "holidaySchedule"], ["type", "checkbox", "formControlName", "brochures"], ["type", "checkbox", "formControlName", "harassmentPamphlet"], ["type", "checkbox", "formControlName", "workersComp"], ["type", "checkbox", "formControlName", "disabilityInfo"], ["type", "checkbox", "formControlName", "phoneList"], ["type", "checkbox", "formControlName", "other2"], ["type", "checkbox", "formControlName", "companyHistory"], ["type", "checkbox", "formControlName", "orientationPeriod"], ["type", "checkbox", "formControlName", "departmentResponsibilities"], ["type", "checkbox", "formControlName", "positionDuties"], ["type", "checkbox", "formControlName", "workHours"], ["type", "checkbox", "formControlName", "attendance"], ["type", "checkbox", "formControlName", "timeOffProcedure"], ["type", "checkbox", "formControlName", "timeRecords"], ["type", "checkbox", "formControlName", "safetyRequirements"], ["type", "checkbox", "formControlName", "dressCode"], ["type", "checkbox", "formControlName", "other3"], [1, "section", "acknowledgment-section"], [1, "acknowledgment-header"], [1, "form-row", "acknowledgment-row"], ["for", "employeeSignature"], ["type", "text", "id", "employeeSignature", "formControlName", "employeeSignature", 1, "signature-input"], ["for", "signatureDate"], ["type", "date", "id", "signatureDate", "formControlName", "signatureDate", 1, "date-input"], [1, "acknowledgment-note"], [1, "button-group"], ["type", "submit"], ["type", "reset"]],
      template: function HireChecklistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HireChecklistComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "div", 3)(13, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Department:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forms Completed by Job Candidate for Employee File");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11)(20, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Employment application and resume (if any) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Other ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10)(27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "New Employee to Complete New Hire Paperwork and Return to Accounting/HR");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11)(30, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " W-4 Form (withholdings) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " I-9 Form (employment eligibility verification to be completed no later than 3 days from hire date) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Direct deposit authorization ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Employee status change form and new employee information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Employee handbook acknowledgement & agreement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Acknowledgement of receipt of Company's policy against harassment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Employer property return agreement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Ca. DLSE 2810.5 wage protection/disclosure form ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10)(55, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "New Employee Given New Hire Packet That Includes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11)(58, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Employee Handbook ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Job description ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Information on current group insurance plans ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Holiday schedule for current year ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Various brochures and pamphlets ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Sexual harassment pamphlet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " California workers' compensation pamphlet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " EDD's State Disability Insurance and Paid Family Leave pamphlets ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " List of telephone extensions and e-mail addresses ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Other ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 10)(89, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Manager to Discuss with New Employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 11)(92, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " History, mission and purpose of the Company ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 90-day new employee orientation period ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Department's responsibilities and assigned office/workstation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " The responsibilities and duties of the position ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Hours of work, rest breaks, lunch/meal period ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " The importance of maintaining regular attendance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Proper procedure for requesting time off ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Instructions on completing time records ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Workplace safety and security requirements ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Proper dress and grooming requirements ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Other ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 43)(126, "h3", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "EMPLOYEE ACKNOWLEDGES RECEIPT OR DISCUSSION OF THE ABOVE ITEMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 45)(129, "div", 3)(130, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "EMPLOYEE:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3)(134, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "DATE:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "(Please return this form with completed new hire paperwork to Human Resources)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 51)(140, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 51)(145, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checklistForm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: [".checklist-form[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #fff;\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  }\n  \n  .header-info[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 10px;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n  \n  .section[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 20px;\n  }\n  \n  .section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    color: #333;\n    font-size: 1.1em;\n    font-weight: bold;\n  }\n  \n  .checkbox-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  \n  .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    gap: 10px;\n    cursor: pointer;\n  }\n  \n  .checkbox-group[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    margin-top: 3px;\n  }\n  \n  .button-group[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n    justify-content: flex-end;\n    margin-top: 20px;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;\n  }\n  \n  button[type=\"submit\"][_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n  }\n  \n  button[type=\"reset\"][_ngcontent-%COMP%] {\n    background-color: #f44336;\n    color: white;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    opacity: 0.9;\n  }\n\n  .acknowledgment-section[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    border-top: 2px solid #333;\n    padding-top: 20px;\n  }\n  \n  .acknowledgment-header[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 30px;\n    font-size: 1.1em;\n  }\n  \n  .acknowledgment-row[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    justify-content: space-between;\n  }\n  \n  .acknowledgment-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    flex: 0 0 45%;\n  }\n  \n  .signature-input[_ngcontent-%COMP%], .date-input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n  \n  .acknowledgment-note[_ngcontent-%COMP%] {\n    font-style: italic;\n    text-align: center;\n    margin-top: 15px;\n    color: #666;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oaXJlLWNoZWNrbGlzdC9oaXJlLWNoZWNrbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tsaXN0LWZvcm0ge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICBcbiAgLmhlYWRlci1pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuZm9ybS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIFxuICAuZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuZm9ybS1ncm91cCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIFxuICAuc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnNlY3Rpb24gaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmNoZWNrYm94LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICB9XG4gIFxuICAuY2hlY2tib3gtZ3JvdXAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmNoZWNrYm94LWdyb3VwIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG4gIFxuICAuYnV0dG9uLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGJ1dHRvblt0eXBlPVwicmVzZXRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuXG4gIC5hY2tub3dsZWRnbWVudC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuYWNrbm93bGVkZ21lbnQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG4gIFxuICAuYWNrbm93bGVkZ21lbnQtcm93IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBcbiAgLmFja25vd2xlZGdtZW50LXJvdyAuZm9ybS1ncm91cCB7XG4gICAgZmxleDogMCAwIDQ1JTtcbiAgfVxuICBcbiAgLnNpZ25hdHVyZS1pbnB1dCwgLmRhdGUtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLmFja25vd2xlZGdtZW50LW5vdGUge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);





function HomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("order-links"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "New Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("orders"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Existing Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("preorder-links"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Preorders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("employee-application"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Employee Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_13_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("new-hire-checklist"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "New Hire Check List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_13_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("employment-verification"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Employment Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_13_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("w4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "W4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_13_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("withholding"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Withholding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_13_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("at-will-employment"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "At Will Employment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_13_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateTo("self-identification"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Self Identification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class HomeComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.isHROpen = false;
    this.isSalesOpen = false;
  }
  ngOnInit() {
    this.username = this.authService.getFullname();
  }
  navigateTo(page) {
    this.router.navigate([`/${page}`]);
    if (this.isHROpen) {
      this.isHROpen = false; // Close HR dropdown after navigation
    }
  }
  toggleHR() {
    this.isHROpen = !this.isHROpen;
  }
  // Optional: Close HR dropdown when clicking outside
  closeHR() {
    if (this.isHROpen) {
      this.isHROpen = false;
    }
  }
  toggleSales() {
    this.isSalesOpen = !this.isSalesOpen;
    // Optionally close HR dropdown when opening Sales
    if (this.isSalesOpen) {
      this.isHROpen = false;
    }
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 3,
      consts: [[1, "page", "container"], [1, "button-container"], [1, "nav-button", 3, "click"], [1, "sales-section"], ["class", "sales-dropdown", 4, "ngIf"], [1, "hr-section"], ["class", "hr-dropdown", 4, "ngIf"], [1, "nav-button", "logout-button", 3, "click"], [1, "button-container", "user-info"], [1, "image-grid"], ["src", "assets/goldenstateseafood.png", "alt", "GS Image", 1, "grid-image", "image1"], ["src", "assets/logo.png", "alt", "Logo Image", 1, "grid-image", "image2"], ["src", "assets/fogriver3.png", "alt", "Fog River Image", 1, "grid-image", "image3"], ["src", "assets/naturecure.png", "alt", "Nature Cure Image", 1, "grid-image", "image4"], [1, "sales-dropdown"], [1, "hr-dropdown"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() {
            return ctx.navigateTo("products");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() {
            return ctx.toggleSales();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 7, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() {
            return ctx.navigateTo("driver");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Routes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() {
            return ctx.toggleHR();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "HR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 15, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_14_listener() {
            return ctx.navigateTo("reports");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_16_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 10)(22, "img", 11)(23, "img", 12)(24, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSalesOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isHROpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Welcome, ", ctx.username, "! ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      styles: [".button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n}\n\n.nav-button[_ngcontent-%COMP%] {\n  background-color: rgba(0, 16, 46, 1);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 1.2em;\n  margin: 0 10px;\n  transition: background-color 0.3s;\n}\n\n.nav-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 16, 46, 1);\n}\n\n.user-info[_ngcontent-%COMP%] {\n  margin-left: 20px; \n\n  font-size: 1.1em;\n  color: rgba(0, 16, 46, 1); \n\n  padding: 10px 0;\n}\n\n.image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  width: 100%;\n  max-width: 400px;\n  margin: 20px auto;\n}\n\n.grid-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 65px; \n\n  margin-left: 50px;\n  transform: scale(0.8);\n  background-color: rgba(0, 16, 46, 1);\n  transform: scale(1.4); \n\n}\n\n.image4[_ngcontent-%COMP%] {\n  transform: scale(1.4); \n\n  margin-top: 10px;\n  margin-left: 50px;\n}\n\n.image3[_ngcontent-%COMP%] {\n  transform: scale(1); \n\n  margin-left: 0px;\n  border: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #ffffff;\n  color: #000000;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n\n\n@media (max-width: 768px) {\n  .button-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .nav-button[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 10px 0;\n  }\n\n  \n  .grid-image[_ngcontent-%COMP%] {\n    width: 90%; \n\n    height: auto; \n\n    margin: 0 auto; \n\n  }\n\n  .image-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr; \n\n    gap: 10px; \n\n  }\n\n  \n\n  .image1[_ngcontent-%COMP%] {\n    width: 90%; \n\n    height: auto; \n\n    margin: 0 auto; \n\n  }\n\n  \n\n  .image2[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    margin: 0 auto;\n    transform: scale(1); \n\n  }\n\n  \n\n  .image3[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    margin: 0 auto;\n    transform: scale(1); \n\n  }\n\n  \n\n  .image4[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    margin: 0 auto;\n    transform: scale(1); \n\n  }\n}\n\n\n.hr-section[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.hr-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 8px;\n  z-index: 1000;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n  min-width: 200px;\n}\n\n.hr-dropdown[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: 4px 0;\n  text-align: left;\n}\n\n.sales-section[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\n\n.sales-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  background-color: inherit;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsK0JBQStCO0VBQ2xELGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBRSx5Q0FBeUM7RUFDcEUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxnQkFBZ0IsRUFBRSxtQ0FBbUM7RUFDckQsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMscUJBQXFCLEVBQUUsNkNBQTZDO0FBQ3RFOztBQUVBO0VBQ0UscUJBQXFCLEVBQUUsNkNBQTZDO0VBQ3BFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSw2Q0FBNkM7RUFDbEUsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjs7O0VBR0E7SUFDRSxVQUFVLEVBQUUsb0RBQW9EO0lBQ2hFLFlBQVksRUFBRSw4QkFBOEI7SUFDNUMsY0FBYyxFQUFFLHNCQUFzQjtFQUN4Qzs7RUFFQTtJQUNFLGFBQWE7SUFDYiwwQkFBMEIsRUFBRSxrQ0FBa0M7SUFDOUQsU0FBUyxFQUFFLDJCQUEyQjtFQUN4Qzs7RUFFQSxZQUFZO0VBQ1o7SUFDRSxVQUFVLEVBQUUsNkNBQTZDO0lBQ3pELFlBQVksRUFBRSwwQkFBMEI7SUFDeEMsY0FBYyxFQUFFLHFCQUFxQjtFQUN2Qzs7RUFFQSxZQUFZO0VBQ1o7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUIsRUFBRSw2QkFBNkI7RUFDcEQ7O0VBRUEsWUFBWTtFQUNaO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CLEVBQUUsNkJBQTZCO0VBQ3BEOztFQUVBLFlBQVk7RUFDWjtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQixFQUFFLDZCQUE2QjtFQUNwRDtBQUNGOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ubmF2LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMCAxMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbi5uYXYtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xufVxuXG4udXNlci1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7IC8qIEluZGVudHMgdGhlIHVzZXItaW5mbyB0ZXh0ICovXG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7IC8qIE1hdGNoZXMgYnV0dG9uIGNvbG9yIGZvciBjb25zaXN0ZW5jeSAqL1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5pbWFnZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmdyaWQtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBBZGp1c3RtZW50cyBmb3IgaW5kaXZpZHVhbCBpbWFnZXMgKi9cbi5pbWFnZTIge1xuICBtYXJnaW4tdG9wOiA2NXB4OyAvKiBNb3ZlcyB0aGUgc21hbGxsb2dvIGltYWdlIGRvd24gKi9cbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7IC8qIFNjYWxlcyB1cCB0aGUgbmF0dXJlIGN1cmUgaW1hZ2Ugc2xpZ2h0bHkgKi9cbn1cblxuLmltYWdlNCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTsgLyogU2NhbGVzIHVwIHRoZSBuYXR1cmUgY3VyZSBpbWFnZSBzbGlnaHRseSAqL1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmltYWdlMyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7IC8qIFNjYWxlcyB1cCB0aGUgbmF0dXJlIGN1cmUgaW1hZ2Ugc2xpZ2h0bHkgKi9cbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciBNb2JpbGUgT3B0aW1pemF0aW9uICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5uYXYtYnV0dG9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5cbiAgXG4gIC5ncmlkLWltYWdlIHtcbiAgICB3aWR0aDogOTAlOyAvKiBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGltYWdlcyB0byBmaXQgdGhlIHNjcmVlbiAqL1xuICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gdGhlIGFzcGVjdCByYXRpbyAqL1xuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXIgdGhlIGltYWdlcyAqL1xuICB9XG5cbiAgLmltYWdlLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IC8qIFNpbmdsZS1jb2x1bW4gZ3JpZCBmb3IgbW9iaWxlICovXG4gICAgZ2FwOiAxMHB4OyAvKiBTcGFjaW5nIGJldHdlZW4gaW1hZ2VzICovXG4gIH1cblxuICAvKiBJbWFnZSAxICovXG4gIC5pbWFnZTEge1xuICAgIHdpZHRoOiA5MCU7IC8qIEFkanVzdCB0aGUgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSBzY3JlZW4gKi9cbiAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXG4gIH1cblxuICAvKiBJbWFnZSAyICovXG4gIC5pbWFnZTIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IC8qIFJlc2V0IHNjYWxpbmcgZm9yIG1vYmlsZSAqL1xuICB9XG5cbiAgLyogSW1hZ2UgMyAqL1xuICAuaW1hZ2UzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyAvKiBSZXNldCBzY2FsaW5nIGZvciBtb2JpbGUgKi9cbiAgfVxuXG4gIC8qIEltYWdlIDQgKi9cbiAgLmltYWdlNCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgLyogUmVzZXQgc2NhbGluZyBmb3IgbW9iaWxlICovXG4gIH1cbn1cblxuXG4uaHItc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaHItZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogOHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjIpO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uaHItZHJvcGRvd24gLm5hdi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zYWxlcy1zZWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zYWxlcy1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAvKiBNYXRjaCB5b3VyIGV4aXN0aW5nIGRyb3Bkb3duIHN0eWxlcyAqL1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4133:
/*!*************************************************************************!*\
  !*** ./src/app/components/image-thumbnail/image-thumbnail.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageThumbnailComponent: () => (/* binding */ ImageThumbnailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 2457);


function ImageThumbnailComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageThumbnailComponent_ng_template_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7)(7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageThumbnailComponent_ng_template_2_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.modalRef.hide());
    })("keyup", function ImageThumbnailComponent_ng_template_2_Template_img_keyup_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class ImageThumbnailComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.imageUrl = '';
    this.title = ' ';
  }
  openModal(template) {
    this.modalRef = this.modalService.show(template, Object.assign({}, {
      class: 'modal-lg'
    }));
  }
  static {
    this.ɵfac = function ImageThumbnailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImageThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageThumbnailComponent,
      selectors: [["app-image-thumbnail"]],
      inputs: {
        imageUrl: "imageUrl",
        title: "title"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 1,
      consts: [["imageModal", ""], [3, "click"], ["alt", "Image Thumbnail", "title", "Click to enlarge", 1, "thumbnail", 3, "keyup", "src"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "text-center"], ["alt", "Full Image", 1, "full-image", 3, "click", "keyup", "src"]],
      template: function ImageThumbnailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageThumbnailComponent_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const imageModal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openModal(imageModal_r2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ImageThumbnailComponent_Template_img_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.modalRef.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageThumbnailComponent_ng_template_2_Template, 8, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".thumbnail[_ngcontent-%COMP%] {\n    cursor: pointer;;\n    height: 50px;\n}\n\n.full-image[_ngcontent-%COMP%] {\n    width: -webkit-fill-available;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbWFnZS10aHVtYm5haWwvaW1hZ2UtdGh1bWJuYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi50aHVtYm5haWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjs7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZnVsbC1pbWFnZSB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 205:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _app_install_prompt_app_install_prompt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-install-prompt/app-install-prompt.component */ 4535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);

















const _c0 = () => ["/password-request"];
function LoginComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logging in...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class LoginComponent {
  constructor(router, cdr, formBuilder, authService) {
    this.router = router;
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.loading = false;
    this.errorMessage = null;
    this.loginForm = this.formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.errorMessage = null;
    const {
      username,
      password
    } = this.loginForm.value;
    this.authService.login(username, password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(loginError => {
      const errorCode = loginError.status;
      let errorMessage = loginError.error?.message || 'Please check your username and password';
      if (errorCode == 401) {
        errorMessage = 'Please check your username and password';
      }
      this.loading = false;
      this.errorMessage = `Login failed. ${errorMessage}.`;
      this.cdr.markForCheck();
      // Rethrow the error for the global error handler
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => loginError);
    })).subscribe({
      next: loginResponse => {
        const fullname = `${loginResponse.firstName ?? ''} ${loginResponse.lastName ?? ''}`.trim();
        this.authService.saveFullnameAndToken(fullname, loginResponse.token);
        this.router.navigate(['/products']);
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 7,
      consts: [[1, "container"], [1, "login-container"], [1, "logo-container"], ["src", "assets/logo.png", "alt", "Company Logo", 1, "logo"], [3, "ngSubmit", "formGroup"], ["appearance", "fill"], ["matInput", "", "type", "text", "formControlName", "username", "placeholder", "Enter your username", "autocomplete", "username"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password"], [3, "routerLink"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 5)(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Forgot password? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 2, 0, "span", 10)(19, LoginComponent_span_19_Template, 2, 0, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-install-prompt");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading || ctx.loginForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _app_install_prompt_app_install_prompt_component__WEBPACK_IMPORTED_MODULE_0__.AppInstallPromptComponent],
      styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 20px 0;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n\n.logo[_ngcontent-%COMP%] {\n    height: 80px;\n    width: auto;\n}\n\n.login-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px;\n    max-width: 300px;\n    background-color: #ffffff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0 0 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px;\n    font-size: 18px;\n    background-color: #003366;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n    background-color: #002855;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: #ff0000;\n    margin-top: 16px;\n    font-size: 14px;\n    text-align: center;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        padding: 0 10px;\n    }\n\n    .login-container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n        box-shadow: none;\n    }\n\n    mat-form-field[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsU0FBUztRQUNULGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTtcbn1cblxuLmxvZ28tY29udGFpbmVyIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xufVxuXG4ubG9nby1jb250YWluZXIgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMzNjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbmJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDI4NTU7XG59XG5cbmJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl06ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG5cbiAgICAubG9naW4tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3721:
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);






const _c0 = () => ["/home"];
const _c1 = a0 => ({
  "background-color": a0
});
function LogoComponent_Conditional_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r0.imageBackgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LogoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogoComponent_Conditional_0_div_1_Template, 2, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.companyId);
  }
}
function LogoComponent_Conditional_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r0.imageBackgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LogoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LogoComponent_Conditional_1_div_0_Template, 2, 4, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.companyId);
  }
}
class LogoComponent {
  constructor(authService) {
    this.authService = authService;
    this.companyId = 1;
    this.imageSrc = 'assets/logo.png';
    this.imageBackgroundColor = '#000000';
    this.isLoggedIn = false;
    this.isLoggedIn = authService.isLoggedIn();
  }
  ngOnInit() {
    this.updateLogo();
  }
  ngOnChanges() {
    this.updateLogo();
  }
  updateLogo() {
    if (this.companyId === 14) {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000'; // Black background
    } else {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }
  static {
    this.ɵfac = function LogoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LogoComponent,
      selectors: [["app-logo"]],
      inputs: {
        companyId: "companyId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      consts: [[3, "routerLink"], [1, "image-container", 3, "ngStyle"], ["class", "image-container", 3, "ngStyle", 4, "ngIf"], ["alt", "Company Logo", 3, "src"]],
      template: function LogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LogoComponent_Conditional_0_Template, 2, 3, "a", 0)(1, LogoComponent_Conditional_1_Template, 1, 1, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isLoggedIn ? 0 : 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".image-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: var(--image-background-color);\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    \n\n    border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgLyogQWRqdXN0IGhlaWdodCB0byBtYXRjaCB0aGUgb3JkZXIgcGFnZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9543:
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);


class LogoutComponent {
  constructor(authService) {
    this.authService = authService;
    this.authService.logout();
  }
  static {
    this.ɵfac = function LogoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 0,
      consts: [[2, "padding-left", "200px"]],
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br")(1, "br")(2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "You have been logged out.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br")(6, "br")(7, "br")(8, "br")(9, "br")(10, "br")(11, "br")(12, "br")(13, "br")(14, "br")(15, "br")(16, "br")(17, "br")(18, "br")(19, "br")(20, "br")(21, "br")(22, "br")(23, "br")(24, "br")(25, "br");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2235:
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderConfirmationComponent: () => (/* binding */ OrderConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.component */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);





function OrderConfirmationComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 5, product_r1.salesPrice, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.quantity);
  }
}
function OrderConfirmationComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Delivery location: ", ctx_r1.orderData.shipToName, "");
  }
}
class OrderConfirmationComponent {
  constructor(router, location) {
    this.router = router;
    this.location = location;
  }
  ngOnInit() {
    this.orderData = history.state['order']; // Access the passed data here'
    this.companyId = history.state['companyId'];
  }
  goBack() {
    this.router.navigate([`/customer/${this.orderData.customerId}/order-form`]);
  }
  static {
    this.ɵfac = function OrderConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderConfirmationComponent,
      selectors: [["app-order-confirmation"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 13,
      consts: [[1, "container"], [3, "companyId"], ["id", "order-grid", 1, "order-grid"], [1, "sticky"], [4, "ngFor", "ngForOf"], [1, "total"], ["id", "total-amount"], [4, "ngIf"], [1, "button", 3, "click"], [1, "price"]],
      template: function OrderConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-logo", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Thank you for your order. Here are the details of your order:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 2)(8, "thead", 3)(9, "tr")(10, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Unit Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pack Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderConfirmationComponent_tr_21_Template, 12, 8, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "div", 5)(24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Total: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, OrderConfirmationComponent_div_33_Template, 3, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Thank you,");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Your Sales Team");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderConfirmationComponent_Template_button_click_38_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("companyId", ctx.companyId);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hello ", ctx.orderData.customerName, ",");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orderData.profiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](28, 6, ctx.orderData.totalPrice, "USD", true));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Delivery date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 10, ctx.orderData.deliveryDate, "MM/dd/yyyy"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderData.shipToId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
      styles: [".container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 97%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: rgba(0, 16, 46, 1);\n    \n\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    \n\n    border-radius: 8px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    text-align: center;\n    margin: 10px 0;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 10px 0;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n    font-size: 16px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    word-wrap: break-word;\n}\n\n.total[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-align: right;\n    font-size: 18px;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n    table-layout: fixed;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n    word-wrap: break-word;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    \n\n    color: #333;\n    \n\n    font-weight: bold;\n    font-size: 14px;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 14px;\n    \n\n}\n\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n    width: 40%;\n    \n\n}\n\n\n\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n\n    p[_ngcontent-%COMP%], \n   ul[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n        word-wrap: break-word;\n    }\n\n    .order-grid[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin: 0;\n        \n\n        border: 0;\n        \n\n        display: table;\n        \n\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin: 0;\n        \n\n        padding: 0;\n        \n\n        border: 0;\n        \n\n    }\n\n    .table[_ngcontent-%COMP%] {\n        width: 100%;\n        display: table;\n    }\n\n\n    .profiles[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .table[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n        width: 17%;\n        \n\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n        width: 17%;\n        \n\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n        width: 17%;\n        \n\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n        width: 17%;\n        \n\n    }\n}\n\n\n\n.order-grid[_ngcontent-%COMP%]   tr.bold-row[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #dedede;\n}\n\n\n.error-message[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n.submitted-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 6px;\n}\n\n\n.button[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    color: 333;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.no-wrap[_ngcontent-%COMP%] {\n    white-space: nowrap;\n}\n\n.sticky[_ngcontent-%COMP%] {\n    top: 0px;\n    position: sticky;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsMkNBQTJDO0lBQzNDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztBQUMzQzs7O0FBR0E7O0lBRUksVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7Ozs7QUFLQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7O1FBRUksZUFBZTtRQUNmLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQ0FBa0M7UUFDbEMsU0FBUztRQUNULGtCQUFrQjtRQUNsQixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCwrQkFBK0I7SUFDbkM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsdUNBQXVDO1FBQ3ZDLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7SUFDbEI7OztJQUdBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBOztRQUVJLFVBQVU7UUFDVixrQ0FBa0M7SUFDdEM7O0lBRUE7O1FBRUksVUFBVTtRQUNWLGtDQUFrQztJQUN0Qzs7SUFFQTs7UUFFSSxVQUFVO1FBQ1Ysa0NBQWtDO0lBQ3RDOztJQUVBOztRQUVJLFVBQVU7UUFDVixrQ0FBa0M7SUFDdEM7QUFDSjs7QUFFQSwyREFBMkQ7QUFDM0Q7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFFBQVE7SUFFUixnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTtcbiAgICAvKiBEYXJrIGJsdWUgYmFja2dyb3VuZCAqL1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgLyogQWRqdXN0IGhlaWdodCB0byBtYXRjaCB0aGUgb3JkZXIgcGFnZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbnVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnRvdGFsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kZWxpdmVyeS1kYXRlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yZGVyLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIC8qIEZpeGVkIHRhYmxlIGxheW91dCAqL1xufVxuXG4ub3JkZXItZ3JpZCB0aCxcbi5vcmRlci1ncmlkIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIEVuc3VyZSBjb250ZW50IHdyYXBzICovXG59XG5cbi5vcmRlci1ncmlkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8qIE1hdGNoIHRoZSBpbnZlbnRvcnkgZ3JpZCBmb250IHNpemUgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvKiBNYXRjaCB0aGUgaW52ZW50b3J5IGdyaWQgZm9udCBzaXplICovXG59XG5cblxuLm9yZGVyLWdyaWQgdGg6bnRoLWNoaWxkKDEpLFxuLm9yZGVyLWdyaWQgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIC8qIFdpZGVyIGRlc2NyaXB0aW9uIGNvbHVtbiAqL1xufVxuXG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIHAsXG4gICAgdWwge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgdWwgbGkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm9yZGVyLWdyaWQgdGgsXG4gICAgLm9yZGVyLWdyaWQgdGQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB9XG5cbiAgICAub3JkZXItZ3JpZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBGdWxsIHdpZHRoIGZvciBncmlkIG9uIG1vYmlsZSAqL1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8qIFJlbW92ZSBtYXJnaW4gKi9cbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAvKiBSZW1vdmUgYm9yZGVyICovXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAvKiBFbnN1cmUgcHJvcGVyIHRhYmxlIGxheW91dCAqL1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogRnVsbCB3aWR0aCBmb3IgY29udGFpbmVyIG9uIG1vYmlsZSAqL1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8qIFJlbW92ZSBtYXJnaW4gKi9cbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLyogUmVtb3ZlIHBhZGRpbmcgKi9cbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAvKiBSZW1vdmUgYm9yZGVyICovXG4gICAgfVxuXG4gICAgLnRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIH1cblxuXG4gICAgLnByb2ZpbGVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRhYmxlIHRoOm50aC1jaGlsZCgyKSxcbiAgICAudGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgd2lkdGg6IDE3JTtcbiAgICAgICAgLyogQWRqdXN0IHdpZHRoIGZvciBwcmljZSBjb2x1bW4gKi9cbiAgICB9XG5cbiAgICAudGFibGUgdGg6bnRoLWNoaWxkKDMpLFxuICAgIC50YWJsZSB0ZDpudGgtY2hpbGQoMykge1xuICAgICAgICB3aWR0aDogMTclO1xuICAgICAgICAvKiBBZGp1c3Qgd2lkdGggZm9yIHByaWNlIGNvbHVtbiAqL1xuICAgIH1cblxuICAgIC50YWJsZSB0aDpudGgtY2hpbGQoNCksXG4gICAgLnRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgICAgIHdpZHRoOiAxNyU7XG4gICAgICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG4gICAgfVxuXG4gICAgLnRhYmxlIHRoOm50aC1jaGlsZCg1KSxcbiAgICAudGFibGUgdGQ6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgd2lkdGg6IDE3JTtcbiAgICAgICAgLyogQWRqdXN0IHdpZHRoIGZvciBwcmljZSBjb2x1bW4gKi9cbiAgICB9XG59XG5cbi8qIEFkZGl0aW9uYWwgc3R5bGVzIGZvciBib2xkIGFuZCBsaWdodGVyIGdyZXkgYmFja2dyb3VuZCAqL1xuLm9yZGVyLWdyaWQgdHIuYm9sZC1yb3cge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG59XG5cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN1Ym1pdHRlZC1kYXRlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgY29sb3I6IDMzMztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5vLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zdGlja3kge1xuICAgIHRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 5199:
/*!***********************************************************************************!*\
  !*** ./src/app/components/order-details-dialog/order-details-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderDetailsDialogComponent: () => (/* binding */ OrderDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);







function OrderDetailsDialogComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const profile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r1.profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r1.unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r1.packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, profile_r1.salesPrice));
  }
}
class OrderDetailsDialogComponent {
  constructor(order, dialogRef) {
    this.order = order;
    this.dialogRef = dialogRef;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function OrderDetailsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderDetailsDialogComponent,
      selectors: [["app-order-details-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 51,
      vars: 11,
      consts: [["mat-dialog-title", ""], [1, "profile-table"], [1, "description-column"], [4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function OrderDetailsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "p")(4, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Customer Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p")(8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Order Date:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p")(13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Customer PO:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p")(17, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sales Rep:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p")(21, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ship To:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p")(25, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total Price:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Profiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 1)(32, "thead")(33, "tr")(34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Unit Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Pack Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sales Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrderDetailsDialogComponent_tr_47_Template, 14, 8, "tr", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-dialog-actions", 4)(49, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.customerName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx.order.deliveryDate), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.customerPo, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.salesRepName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.order.shipToName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 9, ctx.order.totalPrice), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.profiles);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
      styles: [".profile-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-top: 15px;\n  }\n  \n  .profile-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .profile-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    border: 1px solid #ddd;\n    text-align: left;\n  }\n  \n  \n\n  .description-column[_ngcontent-%COMP%] {\n    width: 50%; \n\n  }\n  \n  .profile-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #f2f2f2;\n    font-weight: bold;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1kZXRhaWxzLWRpYWxvZy9vcmRlci1kZXRhaWxzLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7RUFFQSw4Q0FBOEM7RUFDOUM7SUFDRSxVQUFVLEVBQUUsc0RBQXNEO0VBQ3BFOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXRhYmxlIHRoLCAucHJvZmlsZS10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLyogR2l2ZSBtb3JlIHNwYWNlIHRvIHRoZSBEZXNjcmlwdGlvbiBjb2x1bW4gKi9cbiAgLmRlc2NyaXB0aW9uLWNvbHVtbiB7XG4gICAgd2lkdGg6IDUwJTsgLyogSW5jcmVhc2Ugd2lkdGggZnVydGhlciBmb3IgdGhlIERlc2NyaXB0aW9uIGNvbHVtbiAqL1xuICB9XG4gIFxuICAucHJvZmlsZS10YWJsZSB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5289:
/*!*******************************************************************!*\
  !*** ./src/app/components/order-exists/order-exists.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderExistsComponent: () => (/* binding */ OrderExistsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.component */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);





function OrderExistsComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const profile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](profile_r1.profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](profile_r1.unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](profile_r1.packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 5, profile_r1.salesPrice, "USD", true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](profile_r1.quantity);
  }
}
function OrderExistsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Delivery location: ", ctx_r1.orderData.shipToName, "");
  }
}
class OrderExistsComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.orderData = history.state['order']; // Access the passed data here
    this.companyId = history.state['companyId'];
  }
  goBack() {
    window.history.back();
  }
  static {
    this.ɵfac = function OrderExistsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderExistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderExistsComponent,
      selectors: [["app-order-exists"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 39,
      vars: 13,
      consts: [[1, "container"], [3, "companyId"], [1, "error-message", 2, "color", "red"], ["id", "order-grid", 1, "order-grid"], ["sticky", "", 1, ""], [4, "ngFor", "ngForOf"], [1, "total"], ["id", "total-amount"], [4, "ngIf"], [1, "button", 3, "click"], [1, "price"]],
      template: function OrderExistsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-logo", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Existing Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " We already have an order for you placed on this delivery date. If you would like it changed please contact your sales rep. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 3)(8, "thead", 4)(9, "tr")(10, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Product Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Unit Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pack Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderExistsComponent_tr_21_Template, 12, 9, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "div", 6)(24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Total: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, OrderExistsComponent_div_36_Template, 3, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderExistsComponent_Template_button_click_37_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("companyId", ctx.companyId);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orderData.profiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](28, 6, ctx.orderData.totalPrice, "USD", true));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sales rep: ", ctx.orderData.salesRepName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Delivery date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](35, 10, ctx.orderData.deliveryDate, "MM/dd/yyyy"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderData.shipToId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
      styles: [".container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: rgba(0, 16, 46, 1);\n    \n\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    \n\n    border-radius: 8px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    text-align: center;\n    margin: 10px 0;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 10px 0;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n    font-size: 16px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    word-wrap: break-word;\n}\n\n.total[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-align: right;\n    font-size: 18px;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n    table-layout: fixed;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n    word-wrap: break-word;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    \n\n    color: #333;\n    \n\n    font-weight: bold;\n    font-size: 14px;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 14px;\n    \n\n}\n\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n    width: 40%;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    width: 17%;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    width: 17%;\n    \n\n}\n\n\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n\n    p[_ngcontent-%COMP%], \n   ul[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n        word-wrap: break-word;\n    }\n\n    .order-grid[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin: 0;\n        \n\n        border: 0;\n        \n\n        display: table;\n        \n\n        padding: 0px;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin: 0;\n        \n\n        padding: 0;\n        \n\n        border: 0;\n        \n\n    }\n\n\n    .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        border-radius: 0 !important;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   tr.bold-row[_ngcontent-%COMP%] {\n        font-weight: bold;\n        background-color: #dedede;\n    }\n\n\n    .error-message[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n\n    .submitted-date[_ngcontent-%COMP%] {\n        font-size: 18px;\n        font-weight: bold;\n        margin-bottom: 6px;\n    }\n\n\n    .button[_ngcontent-%COMP%] {\n        background-color: #d3d3d3;\n        color: 333;\n        border: none;\n        padding: 5px 10px;\n        cursor: pointer;\n        border-radius: 5px;\n    }\n\n    .no-wrap[_ngcontent-%COMP%] {\n        white-space: nowrap;\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n        width: 17%;\n        \n\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n        width: 17%;\n        \n\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n        width: 17%;\n        \n\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n        width: 17%;\n        \n\n    }\n\n    .sticky[_ngcontent-%COMP%] {\n        top: 0px;\n        position: sticky;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1leGlzdHMvb3JkZXItZXhpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsMkNBQTJDO0lBQzNDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztBQUMzQzs7O0FBR0E7O0lBRUksVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxVQUFVO0lBQ1Ysa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQ0FBa0M7QUFDdEM7Ozs7QUFJQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7O1FBRUksZUFBZTtRQUNmLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQ0FBa0M7UUFDbEMsU0FBUztRQUNULGtCQUFrQjtRQUNsQixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCwrQkFBK0I7UUFDL0IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCx1Q0FBdUM7UUFDdkMsU0FBUztRQUNULGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7OztJQUdBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLHlCQUF5QjtJQUM3Qjs7O0lBR0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7OztJQUdBO1FBQ0kseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksVUFBVTtRQUNWLGtDQUFrQztJQUN0Qzs7SUFFQTs7UUFFSSxVQUFVO1FBQ1Ysa0NBQWtDO0lBQ3RDOztJQUVBOztRQUVJLFVBQVU7UUFDVixrQ0FBa0M7SUFDdEM7O0lBRUE7O1FBRUksVUFBVTtRQUNWLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLFFBQVE7UUFFUixnQkFBZ0I7SUFDcEI7O0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7XG4gICAgLyogRGFyayBibHVlIGJhY2tncm91bmQgKi9cbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8qIEFkanVzdCBoZWlnaHQgdG8gbWF0Y2ggdGhlIG9yZGVyIHBhZ2UgKi9cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG51bCBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi50b3RhbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGVsaXZlcnktZGF0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcmRlci1ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAvKiBGaXhlZCB0YWJsZSBsYXlvdXQgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGgsXG4ub3JkZXItZ3JpZCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAvKiBFbnN1cmUgY29udGVudCB3cmFwcyAqL1xufVxuXG4ub3JkZXItZ3JpZCB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgICAvKiBMaWdodCBncmV5IGJhY2tncm91bmQgZm9yIHRhYmxlIGhlYWRlcnMgKi9cbiAgICBjb2xvcjogIzMzMztcbiAgICAvKiBEYXJrIGdyZXkgdGV4dCBjb2xvciBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvKiBNYXRjaCB0aGUgaW52ZW50b3J5IGdyaWQgZm9udCBzaXplICovXG59XG5cbi5vcmRlci1ncmlkIHRkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLyogTWF0Y2ggdGhlIGludmVudG9yeSBncmlkIGZvbnQgc2l6ZSAqL1xufVxuXG5cbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCgxKSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCgxKSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICAvKiBXaWRlciBkZXNjcmlwdGlvbiBjb2x1bW4gKi9cbn1cblxuLm9yZGVyLWdyaWQgdGg6bnRoLWNoaWxkKDQpLFxuLm9yZGVyLWdyaWQgdGQ6bnRoLWNoaWxkKDQpIHtcbiAgICB3aWR0aDogMTclO1xuICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG59XG5cbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCgzKSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCgzKSB7XG4gICAgd2lkdGg6IDE3JTtcbiAgICAvKiBBZGp1c3Qgd2lkdGggZm9yIHRvdGFsIGNvbHVtbiAqL1xufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICBwLFxuICAgIHVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIHVsIGxpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5vcmRlci1ncmlkIHRoLFxuICAgIC5vcmRlci1ncmlkIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLm9yZGVyLWdyaWQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogRnVsbCB3aWR0aCBmb3IgZ3JpZCBvbiBtb2JpbGUgKi9cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAvKiBSZW1vdmUgbWFyZ2luICovXG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgLyogUmVtb3ZlIGJvcmRlciAqL1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgLyogRW5zdXJlIHByb3BlciB0YWJsZSBsYXlvdXQgKi9cbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogRnVsbCB3aWR0aCBmb3IgY29udGFpbmVyIG9uIG1vYmlsZSAqL1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8qIFJlbW92ZSBtYXJnaW4gKi9cbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLyogUmVtb3ZlIHBhZGRpbmcgKi9cbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAvKiBSZW1vdmUgYm9yZGVyICovXG4gICAgfVxuXG5cbiAgICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAub3JkZXItZ3JpZCB0ci5ib2xkLXJvdyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICAgIH1cblxuXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnN1Ym1pdHRlZC1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cblxuXG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgICAgIGNvbG9yOiAzMzM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5uby13cmFwIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICAudGFibGUgdGg6bnRoLWNoaWxkKDIpLFxuICAgIC50YWJsZSB0ZDpudGgtY2hpbGQoMikge1xuICAgICAgICB3aWR0aDogMTclO1xuICAgICAgICAvKiBBZGp1c3Qgd2lkdGggZm9yIHByaWNlIGNvbHVtbiAqL1xuICAgIH1cblxuICAgIC50YWJsZSB0aDpudGgtY2hpbGQoMyksXG4gICAgLnRhYmxlIHRkOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHdpZHRoOiAxNyU7XG4gICAgICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG4gICAgfVxuXG4gICAgLnRhYmxlIHRoOm50aC1jaGlsZCg0KSxcbiAgICAudGFibGUgdGQ6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgd2lkdGg6IDE3JTtcbiAgICAgICAgLyogQWRqdXN0IHdpZHRoIGZvciBwcmljZSBjb2x1bW4gKi9cbiAgICB9XG5cbiAgICAudGFibGUgdGg6bnRoLWNoaWxkKDUpLFxuICAgIC50YWJsZSB0ZDpudGgtY2hpbGQoNSkge1xuICAgICAgICB3aWR0aDogMTclO1xuICAgICAgICAvKiBBZGp1c3Qgd2lkdGggZm9yIHByaWNlIGNvbHVtbiAqL1xuICAgIH1cblxuICAgIC5zdGlja3kge1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6501:
/*!***************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderFormComponent: () => (/* binding */ OrderFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.component */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var src_app_services_order_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order-form.service */ 5515);









const _c0 = a0 => ({
  "background-color": a0
});
function OrderFormComponent_form_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Customer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 24)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Sales Rep:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.order.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.order.salesRepName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "tel:" + ctx_r1.order.salesRepPhone, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.order.salesRepPhone);
  }
}
function OrderFormComponent_form_0_div_6_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const shipTo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", shipTo_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](shipTo_r3.shipToName);
  }
}
function OrderFormComponent_form_0_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ship to is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "label", 27)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Ship to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OrderFormComponent_form_0_div_6_option_5_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OrderFormComponent_form_0_div_6_div_6_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.order.shipTos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.orderForm.get("shipToId")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.orderForm.get("shipToId")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]));
  }
}
function OrderFormComponent_form_0_div_7_ng_container_20_tr_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "The number must be greater than zero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_7_ng_container_20_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OrderFormComponent_form_0_div_7_ng_container_20_tr_1_div_6_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const profile_r5 = ctx_r3.$implicit;
    const i_r6 = ctx_r3.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r6)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx_r1.isQuantityEntered(i_r6) ? "whitesmoke" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r6].profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_9_0 = profile_r5.get("quantity")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r6].unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r6].packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](13, 8, ctx_r1.order.profiles[i_r6].salesPrice, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](16, 13, ctx_r1.getRowTotalPrice(i_r6), "USD", "symbol", "1.2-2"));
  }
}
function OrderFormComponent_form_0_div_7_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OrderFormComponent_form_0_div_7_ng_container_20_tr_1_Template, 17, 20, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.order.profiles[i_r6].isSpecial);
  }
}
function OrderFormComponent_form_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Specials");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9)(4, "table", 10)(5, "thead")(6, "tr")(7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, OrderFormComponent_form_0_div_7_ng_container_20_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.profileControls.controls);
  }
}
function OrderFormComponent_form_0_ng_container_27_tr_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "The number must be greater than zero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_ng_container_27_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 33)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OrderFormComponent_form_0_ng_container_27_tr_1_div_6_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const profile_r8 = ctx_r6.$implicit;
    const i_r9 = ctx_r6.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r9)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx_r1.isQuantityEntered(i_r9) ? "whitesmoke" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.order.profiles[i_r9].profileDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_8_0 = profile_r8.get("quantity")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r9].unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r9].packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](13, 8, ctx_r1.order.profiles[i_r9].salesPrice, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](16, 13, ctx_r1.getRowTotalPrice(i_r9), "USD", "symbol", "1.2-2"));
  }
}
function OrderFormComponent_form_0_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OrderFormComponent_form_0_ng_container_27_tr_1_Template, 17, 20, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.order.profiles[i_r9].isSpecial);
  }
}
function OrderFormComponent_form_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " At least one quantity is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter at least one quantity. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "The total has to be less than $10,000.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Delivery date is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Delivery date cannot be in the past or after 2am of today's date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Delivery date must be within 3 months. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Delivery date cannot be on Sunday. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OrderFormComponent_form_0_div_51_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r11.profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r11.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r11.unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r11.packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](11, 6, item_r11.salesPrice, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](14, 11, item_r11.totalPrice, "USD", "symbol", "1.2-2"));
  }
}
function OrderFormComponent_form_0_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderFormComponent_form_0_div_51_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Current Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 10)(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, OrderFormComponent_form_0_div_51_tr_22_Template, 15, 16, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.currentOrderItems);
  }
}
function OrderFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_form_0_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-logo", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Order Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OrderFormComponent_form_0_div_5_Template, 14, 4, "div", 5)(6, OrderFormComponent_form_0_div_6_Template, 7, 2, "div", 6)(7, OrderFormComponent_form_0_div_7_Template, 21, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "table", 10)(12, "thead", 11)(13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, OrderFormComponent_form_0_ng_container_27_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, OrderFormComponent_form_0_div_28_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, OrderFormComponent_form_0_div_29_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, OrderFormComponent_form_0_div_34_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderFormComponent_form_0_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.showCurrentOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Current Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div")(38, "label", 16)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Customer PO: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 18)(43, "label", 19)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Delivery Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, OrderFormComponent_form_0_div_47_Template, 2, 0, "div", 13)(48, OrderFormComponent_form_0_div_48_Template, 2, 0, "div", 13)(49, OrderFormComponent_form_0_div_49_Template, 2, 0, "div", 13)(50, OrderFormComponent_form_0_div_50_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, OrderFormComponent_form_0_div_51_Template, 23, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.orderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("companyId", ctx_r1.order.companyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.order.customerName && ctx_r1.order.salesRepName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.order.shipTos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hasSpecials);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.profileControls.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_7_0 = ctx_r1.orderForm.get("profiles")) == null ? null : tmp_7_0.hasError("atLeastOneQuantity")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.profileControls.touched && (ctx_r1.profileControls.errors == null ? null : ctx_r1.profileControls.errors["atLeastOneQuantity"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total price: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](33, 16, ctx_r1.totalPrice, "USD", "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.totalPrice > 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.formControls["deliveryDate"].touched && (ctx_r1.formControls["deliveryDate"].errors == null ? null : ctx_r1.formControls["deliveryDate"].errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.formControls["deliveryDate"].dirty && (ctx_r1.formControls["deliveryDate"].errors == null ? null : ctx_r1.formControls["deliveryDate"].errors["dateAfterTomorrow"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.formControls["deliveryDate"].dirty && (ctx_r1.formControls["deliveryDate"].errors == null ? null : ctx_r1.formControls["deliveryDate"].errors["dateWithinThreeMonths"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.formControls["deliveryDate"].dirty && (ctx_r1.formControls["deliveryDate"].errors == null ? null : ctx_r1.formControls["deliveryDate"].errors["dateNotOnSunday"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.orderForm.valid);
  }
}
class OrderFormComponent {
  constructor(fb, router, snackBarService, orderService, route, cdr) {
    this.fb = fb;
    this.router = router;
    this.snackBarService = snackBarService;
    this.orderService = orderService;
    this.route = route;
    this.cdr = cdr;
    this.hasSpecials = false;
    this.submitted = false;
    // New properties for modal functionality
    this.showModal = false;
    this.currentOrderItems = [];
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.customerId = id ? +id : NaN;
      this.loadOrderData(this.customerId);
    });
  }
  loadOrderData(customerId) {
    this.orderService.getOrderData(customerId).subscribe({
      next: order => {
        order.profiles.sort((a, b) => a.profileDescription.localeCompare(b.profileDescription));
        this.order = order;
        this.hasSpecials = this.order.profiles.some(profile => profile.isSpecial);
        const shipToValidators = order.shipTos?.length ? [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required] : [];
        this.orderForm = this.fb.group({
          customerId: [order.customerId],
          deliveryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.dateAfterTomorrowValidator, this.dateWithinThreeMonthsValidator, this.dateNotOnSundayValidator]],
          shipToId: ['', shipToValidators],
          customerPo: [''],
          totalPrice: [0],
          profiles: this.fb.array(this.order.profiles.map(profile => this.createProfileGroup(profile)), [this.atLeastOneQuantityValidator])
        });
        this.cdr.markForCheck();
      }
    });
  }
  get formControls() {
    return this.orderForm.controls;
  }
  get profileControls() {
    return this.orderForm.get('profiles');
  }
  get totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.order.profiles.length; i++) {
      const quantity = this.profileControls.at(i).get('quantity')?.value || 0;
      const packSize = this.order.profiles[i].packSize || 0;
      const price = this.order.profiles[i].salesPrice || 0;
      totalPrice += quantity * packSize * price;
    }
    return totalPrice;
  }
  getRowTotalPrice(index) {
    const quantity = this.profileControls.at(index).get('quantity')?.value || 0;
    const packSize = this.order.profiles[index].packSize || 0;
    const price = this.order.profiles[index].salesPrice || 0;
    return quantity * packSize * price;
  }
  createProfileGroup(profile) {
    return this.fb.group({
      profileDid: [profile.id],
      quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1)]
    });
  }
  onSubmit() {
    this.snackBarService.showInfo('Submitting Order...');
    if (this.orderForm.valid) {
      const order = this.orderForm.value;
      // Remove profiles with a quantity of 0 and set total price
      order.profiles = order.profiles.filter(profile => profile.quantity > 0);
      order.totalPrice = this.totalPrice;
      // Set shipToId to an empty string if it's not set
      if (!order.shipToId) {
        order.shipToId = ''; // Ensures "" is submitted instead of 0 or null
      }
      this.orderService.placeOrder(this.customerId, order).subscribe({
        next: orderConfirmation => {
          this.router.navigate(['/customer', this.customerId, 'order-confirmation'], {
            state: {
              order: orderConfirmation,
              companyId: this.order.companyId
            }
          });
          this.snackBarService.showSuccess('Order submitted successfully');
        },
        error: error => {
          const errorCode = error.status;
          const errorMessage = errorCode == 409 ? 'An order already exists for that day' : 'Error submitting order';
          if (errorCode == 409) {
            this.router.navigate(['/customer', this.customerId, 'order-exists'], {
              state: {
                order: error.error,
                companyId: this.order.companyId
              }
            });
          }
          this.snackBarService.showError(errorMessage);
          console.error('Error submitting order', error);
        }
      });
      this.submitted = true;
    } else {
      this.orderForm.markAllAsTouched();
    }
  }
  isQuantityEntered(index) {
    const quantity = this.profileControls.at(index).get('quantity')?.value;
    return typeof quantity === 'number' && quantity > 0;
  }
  showCurrentOrder() {
    this.currentOrderItems = this.order.profiles.map((profile, index) => ({
      ...profile,
      quantity: this.profileControls.at(index).get('quantity')?.value,
      totalPrice: (this.profileControls.at(index).get('quantity')?.value || 0) * (profile.packSize || 0) * (profile.salesPrice || 0)
    })).filter(item => item.quantity > 0);
    this.showModal = true;
    this.cdr.markForCheck();
    console.error(this.currentOrderItems);
  }
  // New method to close the modal
  closeModal() {
    this.showModal = false;
  }
  dateAfterTomorrowValidator(control) {
    const dateValue = new Date(control.value);
    const now = new Date();
    const twoAmToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 2, 0, 0);
    // Check if the date is valid and after 2 AM of today
    if (!isNaN(dateValue.getTime()) && dateValue < twoAmToday) {
      return {
        dateAfterTomorrow: true
      }; // Return error key if date is invalid
    }
    return null; // Return null if date is valid
  }
  atLeastOneQuantityValidator(control) {
    const formArray = control;
    const hasAtLeastOneQuantity = formArray.controls.some(group => group.get('quantity')?.value > 0);
    return hasAtLeastOneQuantity ? null : {
      atLeastOneQuantity: true
    };
  }
  dateWithinThreeMonthsValidator(control) {
    const dateValue = new Date(control.value);
    const now = new Date();
    const threeMonthsFromNow = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
    // Check if the date is within three months
    if (!isNaN(dateValue.getTime()) && dateValue > threeMonthsFromNow) {
      return {
        dateWithinThreeMonths: true
      }; // Return error key if date is out of range
    }
    return null; // Return null if date is valid
  }
  dateNotOnSundayValidator(control) {
    if (!control.value) {
      return null; // If there's no date, validation passes
    }
    const dateValue = new Date(control.value);
    // Check if the parsed date is valid and if it's a Sunday
    if (!isNaN(dateValue.getTime()) && dateValue.getUTCDay() === 0) {
      return {
        dateNotOnSunday: true
      }; // Trigger error if Sunday
    }
    return null; // Otherwise, validation passes
  }
  static {
    this.ɵfac = function OrderFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_order_form_service__WEBPACK_IMPORTED_MODULE_2__.OrderFormService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: OrderFormComponent,
      selectors: [["app-order-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "order-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "order-form", 3, "ngSubmit", "formGroup"], [1, "container"], [3, "companyId"], [1, "page-title"], ["class", "customer-sales-info", 4, "ngIf"], ["class", "shipto-dropdown", 4, "ngIf"], [4, "ngIf"], [1, "section-title"], ["formArrayName", "profiles", 1, "profiles"], [1, "table"], [1, "sticky"], [4, "ngFor", "ngForOf"], ["class", "error", 4, "ngIf"], [1, "total-price"], ["type", "button", 1, "current-order-btn", 3, "click"], ["for", "customer-po"], ["id", "customer-po", "formControlName", "customerPo", "type", "text", 1, "customer-po"], [1, "delivery-date"], ["for", "delivery-date"], ["id", "delivery-date", "formControlName", "deliveryDate", "type", "date", 1, "input-date"], ["class", "modal", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "disabled"], [1, "customer-sales-info"], [1, "sales-rep-info"], [3, "href"], [1, "shipto-dropdown"], ["for", "ship-to"], ["id", "ship-to", "formControlName", "shipToId", 1, "input-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "error"], [3, "formGroupName", "ngStyle", 4, "ngIf"], [3, "formGroupName", "ngStyle"], ["type", "hidden", "formControlName", "profileDid", 1, "input-text", "hidden-column"], ["type", "number", "formControlName", "quantity", 1, "input-number"], ["type", "text", "type", "hidden", "formControlName", "profileDid"], [1, "modal"], [1, "modal-content"], [1, "close", 3, "click"]],
      template: function OrderFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, OrderFormComponent_form_0_Template, 55, 21, "form", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.order);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  text-align: center;\n  margin: 10px 0;\n  text-decoration: none;\n}\n\n.customer-sales-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n  \n\n  margin-bottom: 10px;\n}\n\n.sales-rep-info[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.shipto-dropdown[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  \n\n  display: flex;\n  align-items: center;\n  font-size: medium;\n}\n\n.shipto-dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  \n\n}\n\n.input-select[_ngcontent-%COMP%] {\n  width: auto;\n  \n\n  padding: 4px;\n  \n\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  \n\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 8px;\n  text-align: left;\n  word-wrap: break-word;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d3d3d3;\n  color: #333;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 30%;\n  \n\n}\n\n\n\n.hidden-column[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: large;\n}\n\n.input-text[_ngcontent-%COMP%], \n.input-select[_ngcontent-%COMP%], \n.input-date[_ngcontent-%COMP%], \n.input-number[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin: 4px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.input-select[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 4px;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: rgba(0, 16, 46, 1);\n}\n\n\n.input-number[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2px;\n  \n\n  margin: 3px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n\nlabel[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.customer-po[_ngcontent-%COMP%] {\n  width: 140px;\n}\n\n.current-order-btn[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 10px;\n  padding: 5px 10px;\n  background-color: rgba(0, 16, 46, 1);\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n\n.modal[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  width: 80%;\n  max-width: 600px;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n\n@media (max-width: 600px) {\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 14px;\n    word-wrap: break-word;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 5px;\n  }\n\n  .table[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    border: 0;\n    display: table;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n\n  .profiles[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .table[_ngcontent-%COMP%] {\n    width: 100%;\n\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    width: 17%;\n    \n\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    width: 17%;\n    \n\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    width: 16%;\n    \n\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n    width: 20%;\n    \n\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    width: 20%;\n    \n\n  }\n}\n\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  \n\n}\n\n.total-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  \n\n  text-align: right;\n  \n\n  font-size: medium;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  font-size: 18px;\n  background-color: #003366;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n  background-color: #002855;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:disabled {\n  background-color: #cccccc;\n  cursor: not-allowed;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  top: 0px;\n  position: sticky;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7OztBQUlBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTs7OztFQUlFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7QUFDakI7OztBQUdBOztFQUVFOztJQUVFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxTQUFTO0lBQ1QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7O0VBRWI7O0VBRUE7O0lBRUUsVUFBVTtJQUNWLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxVQUFVO0lBQ1Ysa0NBQWtDO0VBQ3BDOztFQUVBOztJQUVFLFVBQVU7SUFDVixrQ0FBa0M7RUFDcEM7O0VBRUE7O0lBRUUsVUFBVTtJQUNWLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxVQUFVO0lBQ1Ysa0NBQWtDO0VBQ3BDO0FBQ0Y7OztBQUdBOztFQUVFLGtCQUFrQjtFQUNsQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFFBQVE7RUFFUixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3VzdG9tZXItc2FsZXMtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAvKiBJbmNyZWFzZWQgZm9udCBzaXplICovXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zYWxlcy1yZXAtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc2hpcHRvLWRyb3Bkb3duIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICAvKiBNb3ZlZCBoaWdoZXIgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5zaGlwdG8tZHJvcGRvd24gbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC8qIEFkZGVkIHdoaXRlIHNwYWNlICovXG59XG5cbi5pbnB1dC1zZWxlY3Qge1xuICB3aWR0aDogYXV0bztcbiAgLyogT25seSBhcyB3aWRlIGFzIG5lZWRlZCAqL1xuICBwYWRkaW5nOiA0cHg7XG4gIC8qIExlc3MgdGFsbCAqL1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLyogSW5jcmVhc2VkIGZvbnQgc2l6ZSAqL1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLnRhYmxlIHRoLFxuLnRhYmxlIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGFibGUgdGQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50YWJsZSB0aDpudGgtY2hpbGQoMSksXG4udGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDMwJTtcbiAgLyogV2lkZXIgZGVzY3JpcHRpb24gY29sdW1uICovXG59XG5cblxuXG4uaGlkZGVuLWNvbHVtbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5pbnB1dC10ZXh0LFxuLmlucHV0LXNlbGVjdCxcbi5pbnB1dC1kYXRlLFxuLmlucHV0LW51bWJlciB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiA0cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaW5wdXQtc2VsZWN0IHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmRlbGl2ZXJ5LWRhdGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xufVxuXG5cbi5pbnB1dC1udW1iZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4O1xuICAvKiBBZGp1c3QgdGhlIHBhZGRpbmcgdG8gbWFrZSBpdCBsZXNzIHRhbGwgKi9cbiAgbWFyZ2luOiAzcHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5cbmxhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uY3VzdG9tZXItcG8ge1xuICB3aWR0aDogMTQwcHg7XG59XG5cbi5jdXJyZW50LW9yZGVyLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gIC50YWJsZSB0aCxcbiAgLnRhYmxlIHRkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gIC50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC5wcm9maWxlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gIH1cblxuICAudGFibGUgdGg6bnRoLWNoaWxkKDIpLFxuICAudGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICB3aWR0aDogMTclO1xuICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG4gIH1cblxuICAudGFibGUgdGg6bnRoLWNoaWxkKDMpLFxuICAudGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICB3aWR0aDogMTclO1xuICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG4gIH1cblxuICAudGFibGUgdGg6bnRoLWNoaWxkKDQpLFxuICAudGFibGUgdGQ6bnRoLWNoaWxkKDQpIHtcbiAgICB3aWR0aDogMTYlO1xuICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG4gIH1cblxuICAudGFibGUgdGg6bnRoLWNoaWxkKDUpLFxuICAudGFibGUgdGQ6bnRoLWNoaWxkKDUpIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG4gIH1cblxuICAudGFibGUgdGg6bnRoLWNoaWxkKDYpLFxuICAudGFibGUgdGQ6bnRoLWNoaWxkKDYpIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIC8qIEFkanVzdCB3aWR0aCBmb3IgdG90YWwgY29sdW1uICovXG4gIH1cbn1cblxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIENlbnRlciB0ZXh0IGluIHRhYmxlIGhlYWRlcnMgYW5kIGRhdGEgY2VsbHMgKi9cbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qIE1ha2UgdGV4dCBib2xkICovXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAvKiBBbGlnbiB0ZXh0IHRvIHRoZSByaWdodCAqL1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDMzNjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4NTU7XG59XG5cbmJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl06ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uc3RpY2t5IHtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 633:
/*!*****************************************************************!*\
  !*** ./src/app/components/order-links/order-links.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderLinksComponent: () => (/* binding */ OrderLinksComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.component */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var src_app_services_order_links_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order-links.service */ 9518);











const _c0 = () => ["/home"];
const _c1 = a0 => ["/customer", a0, "order-form"];
function OrderLinksComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const company_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", company_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](company_r1.name);
  }
}
function OrderLinksComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const salesperson_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", salesperson_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](salesperson_r2.name);
  }
}
function OrderLinksComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Order Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderLinksComponent_tr_33_Template_a_click_7_listener() {
      const customer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.copyLink(customer_r4.id));
    })("keyup", function OrderLinksComponent_tr_33_Template_a_keyup_7_listener() {
      const customer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.copyLink(customer_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const customer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](customer_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, customer_r4.id));
  }
}
class OrderLinksComponent {
  constructor(fb, cdr, snackbarService, orderLinksService) {
    this.fb = fb;
    this.cdr = cdr;
    this.snackbarService = snackbarService;
    this.orderLinksService = orderLinksService;
    this.customers = [];
    this.filteredCustomers = [];
  }
  ngOnInit() {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      searchText: ''
    });
    // Load companies and set default to 'PFF'
    this.companies$ = this.orderLinksService.getCompanies().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(companies => {
      const defaultCompany = companies.find(company => company.name === 'PFF');
      if (defaultCompany) {
        this.form.get('company').setValue(defaultCompany);
      }
    }));
    // Load salespersons based on selected company
    this.form.get('company').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(company => this.orderLinksService.getSalesPersons(company.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(salesreps => {
      salesreps.sort((a, b) => a.name.localeCompare(b.name));
      this.salesPersons$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(observer => {
        observer.next(salesreps);
        observer.complete();
      });
      if (salesreps.length > 0) {
        this.form.get('salesPerson').setValue(salesreps[0]);
      }
    })))).subscribe();
    // Load customers based on selected salesperson
    this.form.get('salesPerson').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(salesrep => {
      const company = this.form.get('company').value;
      return this.orderLinksService.getCustomers(company.id, salesrep.name);
    })).subscribe({
      next: customers => {
        this.customers = [...customers];
        this.customers.sort((a, b) => a.name.localeCompare(b.name));
        this.filteredCustomers = [...this.customers];
        this.cdr.markForCheck();
      }
    });
    // Apply search filter on customer names
    this.form.get('searchText').valueChanges.subscribe(searchText => {
      this.filteredCustomers = this.customers.filter(customer => customer.name.toLowerCase().includes(searchText.toLowerCase()));
    });
  }
  // Generate Order Link
  generateLink(customerId) {
    const baseUrl = window.location.href.replace('/order-links', '');
    return `${baseUrl}/customer/${customerId}/order-form`;
  }
  // Copy Order Link to Clipboard
  copyLink(customerId) {
    const link = this.generateLink(customerId);
    navigator.clipboard.writeText(link).then(() => {
      this.snackbarService.showSuccess('Link copied to clipboard!');
    }).catch(err => {
      this.snackbarService.showError('Failed to copy link: ', err);
      console.error('Failed to copy link: ', err);
    });
  }
  static {
    this.ɵfac = function OrderLinksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_order_links_service__WEBPACK_IMPORTED_MODULE_2__.OrderLinksService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: OrderLinksComponent,
      selectors: [["app-order-links"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 34,
      vars: 11,
      consts: [[3, "formGroup"], [1, "container"], [3, "routerLink"], [3, "companyId"], [1, "underlined"], [1, "filters"], [1, "filter-group"], ["for", "company-filter", 1, "filter-label"], ["id", "company-filter", "formControlName", "company"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "salesname-filter", 1, "filter-label"], ["id", "salesname-filter", "formControlName", "salesPerson"], ["for", "customer-search", 1, "filter-label"], ["type", "text", "id", "customer-search", "placeholder", "Search Customers", "formControlName", "searchText"], [1, "order-grid"], [4, "ngFor", "ngForOf"], [3, "ngValue"], ["href", "javascript:void(0)", 3, "click", "keyup"]],
      template: function OrderLinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-logo", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Customers");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Company:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, OrderLinksComponent_option_11_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Sales Rep:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, OrderLinksComponent_option_17_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6)(20, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Customer:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "table", 14)(24, "thead")(25, "tr")(26, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Order Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Copy Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, OrderLinksComponent_tr_33_Template, 9, 4, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("companyId", (tmp_2_0 = ctx.form.get("company")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 6, ctx.companies$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 8, ctx.salesPersons$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredCustomers);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
      styles: [".container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff;\n    \n\n    color: #000000;\n    \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n\n.underlined[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-top: 20px;\n    \n\n    margin-bottom: 20px;\n    \n\n    text-decoration: none;\n    \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n    \n\n    gap: 10px;\n    \n\n    align-items: flex-start;\n    \n\n    font-size: 18px;\n    \n\n}\n\n.filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    \n\n    gap: 5px;\n    \n\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 18px;\n    \n\n    font-family: Arial, sans-serif;\n    \n\n    margin: 0;\n    \n\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 18px;\n    \n\n    font-family: Arial, sans-serif;\n    \n\n    padding: 5px;\n    width: 100px;\n    \n\n    text-align: left;\n    \n\n    margin: 0;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin: 20px 0;\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 12px;\n    \n\n    text-align: left;\n    word-wrap: break-word;\n    \n\n    font-size: 16px;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    \n\n    color: #333;\n    \n\n    font-weight: bold;\n}\n\n.copy-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n        \n\n    }\n\n    .filter-group[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        align-items: flex-start;\n        \n\n    }\n\n    .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin-bottom: 5px;\n        \n\n        text-align: left;\n        \n\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    #customer-search[_ngcontent-%COMP%]::placeholder {\n        font-size: 16px;\n        \n\n        color: #999;\n        \n\n    }\n\n    .image-container[_ngcontent-%COMP%] {\n        border-radius: 0;\n        padding: 0;\n        margin: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1saW5rcy9vcmRlci1saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCwrQ0FBK0M7SUFDL0MsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQ0FBK0M7SUFDL0MsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLDJDQUEyQztJQUMzQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1DQUFtQztJQUN2Qzs7SUFFQTtRQUNJLFdBQVc7UUFDWCxxQ0FBcUM7UUFDckMsdUJBQXVCO1FBQ3ZCLDRCQUE0QjtJQUNoQzs7SUFFQTs7O1FBR0ksV0FBVztRQUNYLG1DQUFtQztRQUNuQyxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQix3QkFBd0I7SUFDNUI7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixtQ0FBbUM7UUFDbkMsV0FBVztRQUNYLGdEQUFnRDtJQUNwRDs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsU0FBUztJQUNiO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC8qIFdoaXRlIGJhY2tncm91bmQgZm9yIHRoZSBjb250YWluZXIgKi9cbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAvKiBCbGFjayB0ZXh0IGNvbG9yIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4udW5kZXJsaW5lZCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLyogQWRqdXN0IHRoaXMgdmFsdWUgYXMgbmVlZGVkICovXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvKiBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLyogUmVtb3ZlIHVuZGVybGluZSAqL1xufVxuXG4uZmlsdGVycyB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIFN0YWNrIHRoZSBmaWx0ZXIgZ3JvdXBzIHZlcnRpY2FsbHkgKi9cbiAgICBnYXA6IDEwcHg7XG4gICAgLyogQWRkcyB3aGl0ZSBzcGFjZSBiZXR3ZWVuIGVhY2ggZmlsdGVyIGdyb3VwICovXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLyogQWxpZ24gaXRlbXMgdG8gdGhlIGxlZnQgKi9cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5maWx0ZXItZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBBbGlnbiBpdGVtcyBob3Jpem9udGFsbHkgKi9cbiAgICBnYXA6IDVweDtcbiAgICAvKiBSZWR1Y2Ugc3BhY2UgYmV0d2VlbiB0aGUgbGFiZWwgYW5kIHRoZSBpbnB1dC9zZWxlY3QgKi9cbn1cblxuLmZpbHRlci1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8qIEluY3JlYXNlIGZvbnQgc2l6ZSB0byBtYXRjaCB0aGUgc2VsZWN0IGJveCAqL1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAvKiBFbnN1cmUgc2FtZSBmb250ICovXG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIFJlbW92ZSBtYXJnaW4gKi9cbn1cblxuLmZpbHRlcnMgc2VsZWN0LFxuLmZpbHRlcnMgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAvKiBNYXRjaCB0aGUgZm9udCBzaXplIG9mIHRoZSBsYWJlbCAqL1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAvKiBFbnN1cmUgc2FtZSBmb250ICovXG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICAvKiBTZXQgYSBjb25zaXN0ZW50IHdpZHRoICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvKiBMZWZ0LWFsaWduIHRoZSB0ZXh0ICovXG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIFJlbW92ZSBtYXJnaW4gKi9cbn1cblxuLm9yZGVyLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5vcmRlci1ncmlkIHRoLFxuLm9yZGVyLWdyaWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICAvKiBJbmNyZWFzZSBwYWRkaW5nICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogRW5zdXJlIHRleHQgd3JhcHMgd2l0aGluIHRoZSB0YWJsZSBjZWxscyAqL1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgLyogTGlnaHQgZ3JleSBiYWNrZ3JvdW5kIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgY29sb3I6ICMzMzM7XG4gICAgLyogRGFyayBncmV5IHRleHQgY29sb3IgZm9yIHRhYmxlIGhlYWRlcnMgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvcHktbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLmZpbHRlcnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBTdGFjayBmaWx0ZXIgZ3JvdXBzIHZlcnRpY2FsbHkgKi9cbiAgICB9XG5cbiAgICAuZmlsdGVyLWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIEZ1bGwgd2lkdGggZm9yIGVhY2ggZmlsdGVyIGdyb3VwICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAvKiBBbGlnbiBpdGVtcyB0byB0aGUgbGVmdCAqL1xuICAgIH1cblxuICAgIC5maWx0ZXJzIGxhYmVsLFxuICAgIC5maWx0ZXJzIHNlbGVjdCxcbiAgICAuZmlsdGVycyBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBGdWxsIHdpZHRoIGZvciBsYWJlbCBhbmQgaW5wdXQgKi9cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAvKiBSZWR1Y2UgYm90dG9tIG1hcmdpbiAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAvKiBMZWZ0LWFsaWduIHRoZSB0ZXh0ICovXG4gICAgfVxuXG4gICAgLm9yZGVyLWdyaWQgdGgsXG4gICAgLm9yZGVyLWdyaWQgdGQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgI2N1c3RvbWVyLXNlYXJjaDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIC8qIEFkanVzdCB0aGUgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgLyogT3B0aW9uYWw6IENoYW5nZSB0aGUgcGxhY2Vob2xkZXIgdGV4dCBjb2xvciAqL1xuICAgIH1cblxuICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6493:
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersComponent: () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.component */ 3721);
/* harmony import */ var src_app_components_order_details_dialog_order_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/order-details-dialog/order-details-dialog.component */ 5199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var src_app_services_order_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.services */ 3193);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);













const _c0 = () => ["/home"];
function OrdersComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const company_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", company_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](company_r1.name);
  }
}
function OrdersComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const salesperson_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", salesperson_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](salesperson_r2.name);
  }
}
function OrdersComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrdersComponent_tr_37_Template_tr_click_0_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onRowClick(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, item_r4.deliveryDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.shipToName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, item_r4.totalPrice));
  }
}
class OrdersComponent {
  constructor(fb, cdr, snackbarService, orderService, dialog) {
    this.fb = fb;
    this.cdr = cdr;
    this.snackbarService = snackbarService;
    this.orderService = orderService;
    this.dialog = dialog;
    this.orders = [];
    this.filteredOrders = [];
  }
  ngOnInit() {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      customerName: ['']
    });
    this.loadCompanies();
    this.setupSalesPersonListener();
    this.setupOrdersListener();
    this.setupCustomerNameFilterListener();
  }
  loadCompanies() {
    this.companies$ = this.orderService.loadCompanies().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(companies => {
      if (companies && companies.length > 0) {
        this.form.get('company').setValue(companies[0]);
      }
    }));
  }
  setupSalesPersonListener() {
    this.form.get('company').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(company => {
      return this.orderService.loadSalesRep(company.id);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(salesreps => {
      this.salesPersons$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
        observer.next(salesreps);
        observer.complete();
      });
      if (salesreps && salesreps.length > 0) {
        this.form.get('salesPerson').setValue(salesreps[0]);
      }
      this.loadOrders();
    })).subscribe({
      error: error => {
        console.error('Failed to load sales reps:', error);
        this.snackbarService.showError('Failed to load sales reps.');
      }
    });
  }
  setupOrdersListener() {
    this.form.get('salesPerson').valueChanges.subscribe(() => {
      this.loadOrders();
    });
  }
  loadOrders() {
    const company = this.form.get('company').value;
    const salesrep = this.form.get('salesPerson').value;
    if (!company || !salesrep) {
      return;
    }
    this.orderService.loadOrders(company.id, salesrep.name, 72).subscribe({
      next: orders => {
        this.orders = orders;
        this.applyFilters();
      },
      error: error => {
        console.error('Failed to load orders:', error);
        this.snackbarService.showError('Failed to load orders.');
      }
    });
  }
  setupCustomerNameFilterListener() {
    this.form.get('customerName').valueChanges.subscribe(() => this.applyFilters());
  }
  applyFilters() {
    const customerName = this.form.get('customerName').value?.toLowerCase() || '';
    this.filteredOrders = this.orders.filter(order => order.customerName.toLowerCase().includes(customerName));
    this.cdr.markForCheck();
  }
  onRowClick(order) {
    this.dialog.open(src_app_components_order_details_dialog_order_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OrderDetailsDialogComponent, {
      data: order,
      width: '800px'
    });
  }
  static {
    this.ɵfac = function OrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_order_services__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["app-orders"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 11,
      consts: [[3, "formGroup"], [1, "container"], [3, "routerLink"], [3, "companyId"], [1, "page-title"], [1, "filters"], [1, "filter-group"], ["for", "company-filter", 1, "filter-label"], ["id", "company-filter", "formControlName", "company"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "salesname-filter", 1, "filter-label"], ["id", "salesname-filter", "formControlName", "salesPerson"], ["for", "customer-filter", 1, "filter-label"], ["id", "customer-filter", "type", "text", "formControlName", "customerName", "placeholder", "Search Customer Name"], [1, "order-grid"], ["class", "clickable-row", 3, "click", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "clickable-row", 3, "click"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-logo", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Existing Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Company:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, OrdersComponent_option_11_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Sales Rep:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, OrdersComponent_option_17_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6)(20, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Customer Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "table", 14)(24, "thead")(25, "tr")(26, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Order ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Delivery Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Ship To");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Total Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, OrdersComponent_tr_37_Template, 13, 9, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("companyId", (tmp_2_0 = ctx.form.get("company")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 6, ctx.companies$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 8, ctx.salesPersons$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredOrders);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
      styles: [".container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff;\n    \n\n    color: #000000;\n    \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n\n.page-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin: 20px 0;\n    color: #333;\n    font-weight: bold;\n}\n\n\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: flex-start;\n    font-size: 18px;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0;\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 18px;\n    padding: 5px;\n    width: 150px;\n    margin: 0;\n    text-align: left;\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin: 20px 0;\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 12px;\n    text-align: left;\n    font-size: 16px;\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    color: #333;\n    font-weight: bold;\n}\n\n.order-grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: whitesmoke\n}\n\n.copy-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n}\n\n.clickable-row[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.clickable-row[_ngcontent-%COMP%]:hover {\n    background-color: whitesmoke;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .filter-group[_ngcontent-%COMP%] {\n        width: 100%;\n        align-items: flex-start;\n    }\n\n    .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 5px;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7Ozs7QUFJQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCx1QkFBdUI7SUFDM0I7O0lBRUE7OztRQUdJLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvKiBXaGl0ZSBiYWNrZ3JvdW5kIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgLyogQmxhY2sgdGV4dCBjb2xvciBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5cbi5maWx0ZXJzIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZpbHRlci1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uZmlsdGVyLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZmlsdGVycyBzZWxlY3QsXG4uZmlsdGVycyBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5vcmRlci1ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4ub3JkZXItZ3JpZCB0aCxcbi5vcmRlci1ncmlkIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5vcmRlci1ncmlkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3JkZXItZ3JpZCB0Ym9keSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZVxufVxuXG4uY29weS1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jbGlja2FibGUtcm93IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGlja2FibGUtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLmZpbHRlcnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5maWx0ZXItZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgLmZpbHRlcnMgbGFiZWwsXG4gICAgLmZpbHRlcnMgc2VsZWN0LFxuICAgIC5maWx0ZXJzIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAub3JkZXItZ3JpZCB0aCxcbiAgICAub3JkZXItZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 5593:
/*!***************************************************************************!*\
  !*** ./src/app/components/password-request/password-request.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordRequestComponent: () => (/* binding */ PasswordRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);















const _c0 = () => ["/home"];
class PasswordRequestComponent {
  constructor(router, cdr, formBuilder, authService, snackbarService) {
    this.router = router;
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.snackbarService = snackbarService;
    this.passwordRequestForm = this.formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
    });
  }
  onSubmit() {
    const {
      username
    } = this.passwordRequestForm.value;
    this.authService.passwordRequest(username).subscribe({
      next: () => {
        this.snackbarService.showInfo(`An email has been sent to ${username} to reset your password`);
        this.router.navigate(['/login']);
      }
    });
  }
  static {
    this.ɵfac = function PasswordRequestComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PasswordRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PasswordRequestComponent,
      selectors: [["app-password-request"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 4,
      consts: [[1, "container"], [1, "login-container"], [1, "logo-container"], [3, "routerLink"], ["src", "assets/logo.png", "alt", "Company Logo", 1, "logo"], [3, "ngSubmit", "formGroup"], ["appearance", "fill"], ["matInput", "", "type", "text", "formControlName", "username", "placeholder", "Enter your username", "autocomplete", "username"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function PasswordRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "New password request");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PasswordRequestComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8)(13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Submit password request");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.passwordRequestForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.passwordRequestForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 20px 0;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n\n.logo[_ngcontent-%COMP%] {\n    height: 80px;\n    width: auto;\n}\n\n.login-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px;\n    max-width: 300px;\n    background-color: #ffffff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0 0 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px;\n    font-size: 18px;\n    background-color: #003366;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n    background-color: #002855;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: #ff0000;\n    margin-top: 16px;\n    font-size: 14px;\n    text-align: center;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0 10px;\n    }\n\n    .login-container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n        box-shadow: none;\n    }\n\n    mat-form-field[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXF1ZXN0L3Bhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xufVxuXG4ubG9nby1jb250YWluZXIgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7XG59XG5cbi5sb2dvLWNvbnRhaW5lciBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM2NjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjg1NTtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6ICNmZjAwMDA7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG5cbiAgICAubG9naW4tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6881:
/*!***********************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordResetComponent: () => (/* binding */ PasswordResetComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
















const _c0 = () => ["/home"];
function PasswordResetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Your password needs to have at least 5 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PasswordResetComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Your password needs to contain at least one special character: ", "[!@#$%^&*(),.?\":{}|<>]", " ");
  }
}
function PasswordResetComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The 2 entries do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class PasswordResetComponent {
  constructor(route, router, cdr, formBuilder, authService, snackbarService) {
    this.route = route;
    this.router = router;
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.snackbarService = snackbarService;
    this.token = '';
    this.mismatchedPassword = false;
    this.passwordResetForm = this.formBuilder.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5), this.specialCharacterValidator]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5), this.specialCharacterValidator]]
    });
  }
  ngOnInit() {
    this.passwordResetForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.mismatchedPassword = false;
    });
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token') || '';
      if (!this.token) {
        // no JWT found
        this.router.navigate(['/login']);
      }
    });
  }
  onSubmit() {
    const {
      password,
      confirmPassword
    } = this.passwordResetForm.value;
    if (password !== confirmPassword) {
      this.mismatchedPassword = true;
      return;
    }
    this.authService.passwordReset(password, this.token).subscribe({
      next: () => {
        this.snackbarService.showSuccess('Your password has been reset');
        this.router.navigate(['/login']); // Navigate to /products on success
      }
    });
  }
  specialCharacterValidator(control) {
    const value = control.value;
    // Regular expression for special characters
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    return hasSpecialCharacter ? null : {
      noSpecialCharacter: true
    };
  }
  static {
    this.ɵfac = function PasswordResetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PasswordResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PasswordResetComponent,
      selectors: [["app-password-reset"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 7,
      consts: [[1, "container"], [1, "login-container"], [1, "logo-container"], [3, "routerLink"], ["src", "assets/logo.png", "alt", "Company Logo", 1, "logo"], [3, "ngSubmit", "formGroup"], ["appearance", "fill"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password"], ["matInput", "", "type", "password", "formControlName", "confirmPassword", "placeholder", "Enter your password", "autocomplete", "current-password"], ["class", "error", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "error"]],
      template: function PasswordResetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "New password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PasswordResetComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Re-enter your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PasswordResetComponent_div_16_Template, 2, 0, "div", 9)(17, PasswordResetComponent_div_17_Template, 2, 1, "div", 9)(18, PasswordResetComponent_div_18_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 10)(20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Submit new password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordResetForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["noSpecialCharacter"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mismatchedPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.passwordResetForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 20px 0;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n\n.logo[_ngcontent-%COMP%] {\n    height: 80px;\n    width: auto;\n}\n\n.login-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px;\n    max-width: 300px;\n    background-color: #ffffff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0 0 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px;\n    font-size: 18px;\n    background-color: #003366;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n    background-color: #002855;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n}\n\n.error[_ngcontent-%COMP%] {\n    color: #ff0000;\n    font-size: small;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0 10px;\n    }\n\n    .login-container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n        box-shadow: none;\n    }\n\n    mat-form-field[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xufVxuXG4ubG9nby1jb250YWluZXIgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7XG59XG5cbi5sb2dvLWNvbnRhaW5lciBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM2NjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjg1NTtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cblxuICAgIC5sb2dpbi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 7145:
/*!*********************************************************************!*\
  !*** ./src/app/components/preorder-form/preorder-form.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreorderFormComponent: () => (/* binding */ PreorderFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.component */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_services_preorder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/preorder.service */ 3157);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);


 // Import FormsModule








const _c0 = a0 => ({
  "background-color": a0
});
function PreorderFormComponent_tr_26_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Weight must be greater than 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PreorderFormComponent_tr_26_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Price must be greater than 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PreorderFormComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 10)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PreorderFormComponent_tr_26_div_16_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "div", 14)(19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, PreorderFormComponent_tr_26_div_22_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const preOrder_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r2)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, preOrder_r1.dirty ? "whitesmoke" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_5_0 = preOrder_r1.get("id")) == null ? null : tmp_5_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 10, (tmp_6_0 = preOrder_r1.get("dispatchDate")) == null ? null : tmp_6_0.value, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_7_0 = preOrder_r1.get("customerName")) == null ? null : tmp_7_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_8_0 = preOrder_r1.get("descriptionMemo")) == null ? null : tmp_8_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_9_0 = preOrder_r1.get("unitSize")) == null ? null : tmp_9_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getUnitType((tmp_10_0 = preOrder_r1.get("unitType")) == null ? null : tmp_10_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_11_0 = preOrder_r1.get("price")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = preOrder_r1.get("price")) == null ? null : tmp_11_0.hasError("min")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_12_0 = preOrder_r1.get("weight")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = preOrder_r1.get("weight")) == null ? null : tmp_12_0.hasError("min")));
  }
}
class PreorderFormComponent {
  constructor(route, http, preorderService, cdr, fb, snackBarService) {
    this.route = route;
    this.http = http;
    this.preorderService = preorderService;
    this.cdr = cdr;
    this.fb = fb;
    this.snackBarService = snackBarService;
  }
  ngOnInit() {
    this.preOrderForm = this.fb.group({
      preOrders: this.fb.array([])
    });
    this.route.params.subscribe(params => {
      this.vendorId = params['vendorId'];
      this.preorderService.getPreOrders(this.vendorId).subscribe(preOrders => {
        this.setPreOrders(preOrders);
        this.cdr.markForCheck();
      });
    });
  }
  // Populate the form with the products
  setPreOrders(preOrders) {
    const preOrderFormGroups = preOrders.map(preOrder => this.createPreOrderForm(preOrder));
    const preOrderFormArray = this.fb.array(preOrderFormGroups);
    this.preOrderForm.setControl('preOrders', preOrderFormArray);
  }
  // Create a FormGroup for each product
  createPreOrderForm(preOrder) {
    return this.fb.group({
      id: [preOrder.id],
      sodId: [preOrder.sodId],
      dispatchDate: [preOrder.dispatchDate],
      customerName: [preOrder.customerName],
      descriptionMemo: [preOrder.descriptionMemo],
      unitSize: [preOrder.unitSize],
      unitType: [preOrder.unitType],
      weight: [preOrder.weight, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      price: [preOrder.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]]
    });
  }
  // Getter for the FormArray
  get preOrdersArray() {
    return this.preOrderForm.get('preOrders');
  }
  getModifiedPreOrders() {
    // Filter out preOrders where any of the controls are dirty
    return this.preOrderForm.value.preOrders.filter((preOrder, index) => {
      const preOrderGroup = this.preOrdersArray.at(index);
      return preOrderGroup.dirty;
    });
  }
  submitAll() {
    const modifiedPreOrders = this.getModifiedPreOrders();
    modifiedPreOrders.forEach(preOrder => {
      this.preorderService.updatePreOrderWeightAndPrice(this.vendorId, preOrder).subscribe(() => {
        this.snackBarService.showSuccess('The data has been updated.');
      });
    });
  }
  trackByOrderId(index, order) {
    return order.id;
  }
  // TODO: should not be hard-coded here
  getUnitType(unitType) {
    const unitTypeMap = {
      '1': 'Case',
      '2': 'Piece',
      '3': 'Pack',
      '4': 'Pound',
      '5': 'Side'
    };
    return unitTypeMap[unitType] || 'Unknown';
  }
  static {
    this.ɵfac = function PreorderFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PreorderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_preorder_service__WEBPACK_IMPORTED_MODULE_1__.PreorderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PreorderFormComponent,
      selectors: [["app-preorder-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 30,
      vars: 3,
      consts: [[1, "container"], [1, "header-section"], [1, "page-title"], [3, "ngSubmit", "formGroup"], [1, "table"], [1, "sticky"], ["formArrayName", "preOrders"], [3, "formGroupName", "ngStyle", 4, "ngFor", "ngForOf"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "formGroupName", "ngStyle"], [1, "nowrap"], ["type", "number", "formControlName", "price", "min", "0"], ["class", "error", 4, "ngIf"], [1, "currency-input"], [1, "currency-symbol"], ["type", "number", "formControlName", "weight", "step", "0.01", "min", "0"], [1, "error"]],
      template: function PreorderFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "PreOrders");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PreorderFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.submitAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 4)(7, "thead", 5)(8, "tr")(9, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Dispatch Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Unit Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Unit Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Weight (Lbs)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tbody", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, PreorderFormComponent_tr_26_Template, 23, 15, "tr", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 8)(28, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.preOrderForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.preOrdersArray.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.preOrderForm.dirty || !ctx.preOrderForm.valid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #ffffff;\n  color: #000000;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n\n\n.header-section[_ngcontent-%COMP%] {\n  justify-content: center;\n  \n\n  align-items: center;\n  padding: 10px;\n}\n\n\n\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 8px;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d3d3d3;\n  color: #333;\n}\n\n\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  \n\n  width: 40%;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\n  \n\n  width: 5%;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n  \n\n  width: 10%;\n}\n\n\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7):hover   input[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8):hover   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  \n\n}\n\n\n\ninput[type=\"number\"][_ngcontent-%COMP%] {\n  width: 80px;\n  \n\n  border: 1px solid #ccc;\n  \n\n  background-color: transparent;\n  \n\n  text-align: center;\n  \n\n  border-radius: 4px;\n  \n\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]:hover, \ninput[type=\"number\"][_ngcontent-%COMP%]:focus {\n  border: 1px solid #000;\n  \n\n  outline: none;\n  \n\n}\n\n\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n\n\n.alert-info[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-top: 20px;\n  background-color: #e7f3fe;\n  border: 1px solid #b3d4fc;\n  border-radius: 4px;\n  color: #31708f;\n  text-align: center;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  margin: 20px 0;\n  \n\n  color: #000000;\n  \n\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: small;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 12px;\n  font-size: 18px;\n  background-color: #003366;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n  background-color: #002855;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:disabled {\n  background-color: #cccccc;\n  cursor: not-allowed;\n}\n\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n\n\n@media (max-width: 500px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0px;\n    padding: 0px 0px 10px 0px;\n  }\n\n  .header-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .header-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 80px;\n    \n\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n.currency-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.currency-symbol[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 1px;\n  pointer-events: none;\n}\n\n.currency-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  top: 0px;\n  position: sticky;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmVvcmRlci1mb3JtL3ByZW9yZGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7OztBQUdBLG9CQUFvQjtBQUNwQjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQSx5QkFBeUI7QUFDekI7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBLG9EQUFvRDtBQUNwRDs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQSxpREFBaUQ7QUFDakQ7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsc0NBQXNDO0VBQ3hDOztFQUVBOztJQUVFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFFUixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBIZWFkZXIgU2VjdGlvbiAqL1xuLmhlYWRlci1zZWN0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIENlbnRlciB0aGUgaGVhZGVyIGNvbnRlbnQgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuXG4vKiBQcmVPcmRlcnMgVGFibGUgKi9cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIEFkanVzdCBjb2x1bW4gd2lkdGhzICovXG4udGFibGUgdGQsXG4udGFibGUgdGgge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi50YWJsZSB0ZDpudGgtY2hpbGQoNCkge1xuICAvKiBEZXNjcmlwdGlvbiBjb2x1bW4gKi9cbiAgd2lkdGg6IDQwJTtcbn1cblxuLnRhYmxlIHRkOm50aC1jaGlsZCg3KSB7XG4gIC8qIFdlaWdodCBjb2x1bW4gKi9cbiAgd2lkdGg6IDUlO1xufVxuXG4udGFibGUgdGQ6bnRoLWNoaWxkKDgpIHtcbiAgLyogUHJpY2UgY29sdW1uICovXG4gIHdpZHRoOiAxMCU7XG59XG5cbi8qIEFkZCBob3ZlciBoYW5kIG9ubHkgZm9yIHdlaWdodCBhbmQgcHJpY2UgaW5wdXRzICovXG4udGFibGUgdGQ6bnRoLWNoaWxkKDcpOmhvdmVyIGlucHV0LFxuLnRhYmxlIHRkOm50aC1jaGlsZCg4KTpob3ZlciBpbnB1dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogSG92ZXIgaGFuZCAqL1xufVxuXG4vKiBTdHlsZSBmb3IgZWRpdGFibGUgaW5wdXRzIChwcmljZSBhbmQgd2VpZ2h0KSAqL1xuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gIHdpZHRoOiA4MHB4O1xuICAvKiBFbnN1cmUgaW5wdXRzIGZpdCB3aXRoaW4gdGhlIGNvbHVtbiAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAvKiBUaGluIGJvcmRlciBmb3IgZWRpdGFibGUgZmllbGRzICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBUcmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogQ2VudGVyLWFsaWduIHRleHQgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBTbGlnaHRseSByb3VuZGVkIGVkZ2VzICovXG59XG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06aG92ZXIsXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgLyogRGFya2VyIGJvcmRlciBvbiBob3Zlci9mb2N1cyAqL1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBSZW1vdmUgZm9jdXMgb3V0bGluZSAqL1xufVxuXG4vKiBIb3ZlciBlZmZlY3QgZm9yIGVudGlyZSByb3csIGV4Y2x1ZGluZyBpbnB1dHMgKi9cbi50YWJsZSB0Ym9keSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbi8qIE5vIERhdGEgTWVzc2FnZSAqL1xuLmFsZXJ0LWluZm8ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmM2ZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNkNGZjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjMzE3MDhmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICAvKiBTcGFjZSBhcm91bmQgdGhlIHRpdGxlICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICAvKiBUaXRsZSBjb2xvciAqL1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5idXR0b25bbWF0LXJhaXNlZC1idXR0b25dIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMzY2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbmJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODU1O1xufVxuXG5idXR0b25bbWF0LXJhaXNlZC1idXR0b25dOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgfVxuXG4gIC5oZWFkZXItc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmhlYWRlci1zZWN0aW9uIGltZyB7XG4gICAgbWF4LWhlaWdodDogODBweDtcbiAgICAvKiBTbWFsbGVyIGhlaWdodCBmb3IgbW9iaWxlIGRldmljZXMgKi9cbiAgfVxuXG4gIC50YWJsZSB0aCxcbiAgLnRhYmxlIHRkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLmN1cnJlbmN5LWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3VycmVuY3ktc3ltYm9sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDFweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jdXJyZW5jeS1pbnB1dCBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnN0aWNreSB7XG4gIHRvcDogMHB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 1153:
/*!***********************************************************************!*\
  !*** ./src/app/components/preorder-links/preorder-links.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorLinksComponent: () => (/* binding */ VendorLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var src_app_services_vendors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vendors.service */ 2041);







const _c0 = () => ["/home"];
const _c1 = a0 => ["/preorder-form", a0];
function VendorLinksComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Preorder Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VendorLinksComponent_tr_16_Template_a_click_7_listener() {
      const vendor_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.copyLink(vendor_r2.id));
    })("keyup", function VendorLinksComponent_tr_16_Template_a_keyup_7_listener() {
      const vendor_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.copyLink(vendor_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vendor_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](vendor_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, vendor_r2.id));
  }
}
class VendorLinksComponent {
  constructor(cdr, snackbarService, vendorsService, router) {
    this.cdr = cdr;
    this.snackbarService = snackbarService;
    this.vendorsService = vendorsService;
    this.router = router;
  }
  ngOnInit() {
    this.vendors$ = this.vendorsService.getVendors();
  }
  // Navigate to Preorder Form for the selected vendor
  navigateToPreorderForm(vendorId) {
    this.router.navigate(['/preorder-form', vendorId]); // Navigate with vendorId as route parameter
  }
  // Copy Vendor Link to Clipboard
  copyLink(vendorId) {
    const baseUrl = window.location.href.replace('/preorder-links', '');
    const link = `${baseUrl}/preorder-form/${vendorId}`;
    window.location.href.replace('/order-links', '');
    navigator.clipboard.writeText(link).then(() => {
      this.snackbarService.showSuccess('Link copied to clipboard!');
    }).catch(err => {
      this.snackbarService.showError('Failed to copy link: ', err);
      console.error('Failed to copy link: ', err);
    });
  }
  static {
    this.ɵfac = function VendorLinksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VendorLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vendors_service__WEBPACK_IMPORTED_MODULE_1__.VendorsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VendorLinksComponent,
      selectors: [["app-vendor-links"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 5,
      consts: [[1, "container"], [3, "routerLink"], [1, "image-container"], ["src", "assets/logo.png", "alt", "Company Logo"], [1, "underlined"], [1, "order-grid"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click", "keyup"]],
      template: function VendorLinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Vendors");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table", 5)(7, "thead")(8, "tr")(9, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Vendor Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Preorder Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Copy Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, VendorLinksComponent_tr_16_Template, 9, 4, "tr", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 2, ctx.vendors$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff;\n    \n\n    color: #000000;\n    \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: rgba(0, 16, 46, 1);\n    ;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    \n\n    border-radius: 8px;\n}\n\n.underlined[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-top: 20px;\n    \n\n    margin-bottom: 20px;\n    \n\n    text-decoration: none;\n    \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n    \n\n    gap: 10px;\n    \n\n    align-items: flex-start;\n    \n\n    font-size: 18px;\n    \n\n}\n\n.filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    \n\n    gap: 5px;\n    \n\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 18px;\n    \n\n    font-family: Arial, sans-serif;\n    \n\n    margin: 0;\n    \n\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 18px;\n    \n\n    font-family: Arial, sans-serif;\n    \n\n    padding: 5px;\n    width: 100px;\n    \n\n    text-align: left;\n    \n\n    margin: 0;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin: 20px 0;\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 12px;\n    \n\n    text-align: left;\n    word-wrap: break-word;\n    \n\n    font-size: 16px;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    \n\n    color: #333;\n    \n\n    font-weight: bold;\n}\n\n.copy-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n        \n\n    }\n\n    .filter-group[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        align-items: flex-start;\n        \n\n    }\n\n    .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin-bottom: 5px;\n        \n\n        text-align: left;\n        \n\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    #customer-search[_ngcontent-%COMP%]::placeholder {\n        font-size: 16px;\n        \n\n        color: #999;\n        \n\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmVvcmRlci1saW5rcy9wcmVvcmRlci1saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsU0FBUztJQUNULCtDQUErQztJQUMvQyx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixRQUFRO0lBQ1Isd0RBQXdEO0FBQzVEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtDQUErQztJQUMvQyw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLHFDQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsMkNBQTJDO0lBQzNDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsbUNBQW1DO0lBQ3ZDOztJQUVBO1FBQ0ksV0FBVztRQUNYLHFDQUFxQztRQUNyQyx1QkFBdUI7UUFDdkIsNEJBQTRCO0lBQ2hDOztJQUVBOzs7UUFHSSxXQUFXO1FBQ1gsbUNBQW1DO1FBQ25DLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtJQUM1Qjs7SUFFQTs7UUFFSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLG1DQUFtQztRQUNuQyxXQUFXO1FBQ1gsZ0RBQWdEO0lBQ3BEO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC8qIFdoaXRlIGJhY2tncm91bmQgZm9yIHRoZSBjb250YWluZXIgKi9cbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAvKiBCbGFjayB0ZXh0IGNvbG9yIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTtcbiAgICA7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvKiBBZGp1c3QgaGVpZ2h0IHRvIG1hdGNoIHRoZSBvcmRlciBwYWdlICovXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udW5kZXJsaW5lZCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLyogQWRqdXN0IHRoaXMgdmFsdWUgYXMgbmVlZGVkICovXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvKiBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLyogUmVtb3ZlIHVuZGVybGluZSAqL1xufVxuXG4uZmlsdGVycyB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIFN0YWNrIHRoZSBmaWx0ZXIgZ3JvdXBzIHZlcnRpY2FsbHkgKi9cbiAgICBnYXA6IDEwcHg7XG4gICAgLyogQWRkcyB3aGl0ZSBzcGFjZSBiZXR3ZWVuIGVhY2ggZmlsdGVyIGdyb3VwICovXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLyogQWxpZ24gaXRlbXMgdG8gdGhlIGxlZnQgKi9cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5maWx0ZXItZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBBbGlnbiBpdGVtcyBob3Jpem9udGFsbHkgKi9cbiAgICBnYXA6IDVweDtcbiAgICAvKiBSZWR1Y2Ugc3BhY2UgYmV0d2VlbiB0aGUgbGFiZWwgYW5kIHRoZSBpbnB1dC9zZWxlY3QgKi9cbn1cblxuLmZpbHRlci1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8qIEluY3JlYXNlIGZvbnQgc2l6ZSB0byBtYXRjaCB0aGUgc2VsZWN0IGJveCAqL1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAvKiBFbnN1cmUgc2FtZSBmb250ICovXG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIFJlbW92ZSBtYXJnaW4gKi9cbn1cblxuLmZpbHRlcnMgc2VsZWN0LFxuLmZpbHRlcnMgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAvKiBNYXRjaCB0aGUgZm9udCBzaXplIG9mIHRoZSBsYWJlbCAqL1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAvKiBFbnN1cmUgc2FtZSBmb250ICovXG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICAvKiBTZXQgYSBjb25zaXN0ZW50IHdpZHRoICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvKiBMZWZ0LWFsaWduIHRoZSB0ZXh0ICovXG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIFJlbW92ZSBtYXJnaW4gKi9cbn1cblxuLm9yZGVyLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5vcmRlci1ncmlkIHRoLFxuLm9yZGVyLWdyaWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICAvKiBJbmNyZWFzZSBwYWRkaW5nICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogRW5zdXJlIHRleHQgd3JhcHMgd2l0aGluIHRoZSB0YWJsZSBjZWxscyAqL1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgLyogTGlnaHQgZ3JleSBiYWNrZ3JvdW5kIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgY29sb3I6ICMzMzM7XG4gICAgLyogRGFyayBncmV5IHRleHQgY29sb3IgZm9yIHRhYmxlIGhlYWRlcnMgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvcHktbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLmZpbHRlcnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBTdGFjayBmaWx0ZXIgZ3JvdXBzIHZlcnRpY2FsbHkgKi9cbiAgICB9XG5cbiAgICAuZmlsdGVyLWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIEZ1bGwgd2lkdGggZm9yIGVhY2ggZmlsdGVyIGdyb3VwICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAvKiBBbGlnbiBpdGVtcyB0byB0aGUgbGVmdCAqL1xuICAgIH1cblxuICAgIC5maWx0ZXJzIGxhYmVsLFxuICAgIC5maWx0ZXJzIHNlbGVjdCxcbiAgICAuZmlsdGVycyBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBGdWxsIHdpZHRoIGZvciBsYWJlbCBhbmQgaW5wdXQgKi9cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAvKiBSZWR1Y2UgYm90dG9tIG1hcmdpbiAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAvKiBMZWZ0LWFsaWduIHRoZSB0ZXh0ICovXG4gICAgfVxuXG4gICAgLm9yZGVyLWdyaWQgdGgsXG4gICAgLm9yZGVyLWdyaWQgdGQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgI2N1c3RvbWVyLXNlYXJjaDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIC8qIEFkanVzdCB0aGUgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgLyogT3B0aW9uYWw6IENoYW5nZSB0aGUgcGxhY2Vob2xkZXIgdGV4dCBjb2xvciAqL1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 1921:
/*!***************************************************************************************!*\
  !*** ./src/app/components/product-details-dialog/product-details-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailsDialogComponent: () => (/* binding */ ProductDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-compress */ 5065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 9438);










function ProductDetailsDialogComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsDialogComponent_ng_container_6_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deletePhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.data.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductDetailsDialogComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 13, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductDetailsDialogComponent_ng_template_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsDialogComponent_ng_template_7_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const fileInput_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.triggerFileInput(fileInput_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Upload Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductDetailsDialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 8)(5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "16%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "18%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8)(23, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "22%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 7)(29, "div", 8)(30, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 8)(36, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Yield");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 8)(42, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Labor Pack");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 8)(48, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Finish");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 8, (((tmp_2_0 = ctx_r2.data.compCost) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) * ((tmp_2_0 = ctx_r2.data.yield) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) + ((tmp_2_0 = ctx_r2.data.laborPackCost) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0)) / 0.84, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 11, (((tmp_3_0 = ctx_r2.data.compCost) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0) * ((tmp_3_0 = ctx_r2.data.yield) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0) + ((tmp_3_0 = ctx_r2.data.laborPackCost) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0)) / 0.82, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 14, (((tmp_4_0 = ctx_r2.data.compCost) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0) * ((tmp_4_0 = ctx_r2.data.yield) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0) + ((tmp_4_0 = ctx_r2.data.laborPackCost) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0)) / 0.8, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](27, 17, (((tmp_5_0 = ctx_r2.data.compCost) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0) * ((tmp_5_0 = ctx_r2.data.yield) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0) + ((tmp_5_0 = ctx_r2.data.laborPackCost) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0)) / 0.78, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](34, 20, ((tmp_6_0 = ctx_r2.data.compCost) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0) * ((tmp_6_0 = ctx_r2.data.yield) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](40, 23, ((tmp_7_0 = ctx_r2.data.yield) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0) * 100, "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](46, 26, ctx_r2.data.laborPackCost, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](52, 29, ((tmp_9_0 = ctx_r2.data.compCost) !== null && tmp_9_0 !== undefined ? tmp_9_0 : 0) * ((tmp_9_0 = ctx_r2.data.yield) !== null && tmp_9_0 !== undefined ? tmp_9_0 : 0) + ((tmp_9_0 = ctx_r2.data.laborPackCost) !== null && tmp_9_0 !== undefined ? tmp_9_0 : 0), "1.2-2"));
  }
}
class ProductDetailsDialogComponent {
  constructor(snackBarService, dialogRef, data, productService, imageCompress) {
    this.snackBarService = snackBarService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.productService = productService;
    this.imageCompress = imageCompress;
    this.showInfo = false; // Controls visibility of the info section
  }
  toggleInfoVisibility() {
    this.showInfo = !this.showInfo;
  }
  close() {
    this.dialogRef.close();
  }
  getUnitType(unitType) {
    switch (unitType) {
      case 1:
        return 'Cs';
      case 2:
        return 'Pcs';
      case 3:
        return 'Pck';
      case 4:
        return 'lbs';
      case 5:
        return 'side';
      default:
        return 'Unknown';
    }
  }
  triggerFileInput(fileInput) {
    fileInput.click();
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.snackBarService.showInfo('Uploading file...');
      const file = input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageBase64 = reader.result;
        this.imageCompress.compressFile(imageBase64, ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__.DOC_ORIENTATION.Default, 50, 50, 960, 540).then(compressedImage => {
          // Convert base64 back to Blob
          const blob = this.dataURItoBlob(compressedImage);
          const compressedFile = new File([blob], file.name.replace(/\..+$/, '.jpeg'), {
            type: 'image/jpeg'
          });
          this.productService.uploadProductImage(this.data.compItemId, compressedFile).subscribe({
            next: event => {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
                const updatedItem = event.body;
                this.data.photoUrl = updatedItem.photoUrl;
                this.snackBarService.showSuccess('File uploaded successfully');
              }
            }
          });
        });
      };
    }
  }
  deletePhoto() {
    if (confirm('Are you sure you want to delete this photo?')) {
      this.productService.deleteProductPhoto(this.data.compItemId).subscribe({
        next: () => {
          this.data.photoUrl = undefined;
          this.snackBarService.showSuccess('Photo deleted successfully.');
        }
      });
    }
  }
  // Utility to convert base64 to Blob
  dataURItoBlob(dataURI) {
    // Split the URI into data and mime type
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // Convert the byte string into an array of bytes (Uint8Array)
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    // Return a Blob with the appropriate MIME type
    return new Blob([intArray], {
      type: mimeString
    });
  }
  static {
    this.ɵfac = function ProductDetailsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__.NgxImageCompressService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductDetailsDialogComponent,
      selectors: [["app-product-details-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 60,
      vars: 16,
      consts: [["uploadButton", ""], ["fileInput", ""], [1, "special-instructions"], [1, "image-container"], [4, "ngIf", "ngIfElse"], [1, "toggle-button", 3, "click"], ["class", "info-section", 4, "ngIf"], [1, "field-group"], [1, "field"], [1, "field-label"], [1, "image-wrapper"], ["alt", "Product Image", 1, "product-image", 3, "src"], [1, "delete-icon", 3, "click"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["type", "button", 1, "button", 3, "click"], [1, "info-section"], [1, "margins"], [1, "margin-values"], [1, "margin-group"]],
      template: function ProductDetailsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content")(5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProductDetailsDialogComponent_ng_container_6_Template, 5, 1, "ng-container", 4)(7, ProductDetailsDialogComponent_ng_template_7_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsDialogComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.toggleInfoVisibility());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductDetailsDialogComponent_div_11_Template, 53, 32, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Origin");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8)(19, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8)(24, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "WOH");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 8)(29, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Unit Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 7)(34, "div", 8)(35, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Pack Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 8)(40, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Buyer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 8)(45, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Sixty Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 7)(50, "div", 8)(51, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Ten Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 8)(56, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Pre-Order Hours");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_10_0;
          const uploadButton_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.data.compItemId, " - ", ctx.data.compDescription, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.compInstructions || "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.photoUrl)("ngIfElse", uploadButton_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showInfo ? "Hide Info" : "Show Info", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showInfo);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.origin);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.notes || "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.woh);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getUnitType((tmp_10_0 = ctx.data.unitType) !== null && tmp_10_0 !== undefined ? tmp_10_0 : 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.packSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.buyer);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.sixtySales);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.tenSales);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.preOrderHours);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent],
      styles: ["h2[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 12px;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 18px;\n  margin-bottom: 0;\n}\n\n.special-instructions[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background-color: #f0f0f0;\n  text-align: center;\n  color: #666;\n  margin: 0;\n  padding: 4px 0;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0 16px 16px 16px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  max-width: 90vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.margins[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-weight: bold;\n}\n\n.margin-values[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 4px;\n  border-radius: 4px;\n}\n\n.margin-group[_ngcontent-%COMP%], \n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 4px;\n  gap: 6px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2px;\n  min-width: 100px;\n  min-height: 60px;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: underline;\n  margin-bottom: 4px;\n  min-height: 20px;\n  line-height: 20px;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  max-width: 70%;\n  max-height: 70vh;\n  height: auto;\n  border-radius: 8px;\n  object-fit: contain;\n}\n\n.delete-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  \n\n  right: 8px;\n  \n\n  width: 16px;\n  height: 16px;\n  background-color: #d9534f;\n  \n\n  color: white;\n  \n\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  \n\n}\n\n.delete-icon[_ngcontent-%COMP%]:hover {\n  background-color: #c9302c;\n  \n\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 10px 20px;\n  background-color: rgba(0, 16, 46, 1);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.toggle-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 16, 46, 1);\n}\n\n.info-section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  background-color: #f9f9f9;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 16px;\n}\n\n@media (max-width: 768px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 8px;\n    max-width: 100vw;\n    max-height: 80vh;\n    border-radius: 4px;\n    box-sizing: border-box;\n    \n\n    overflow: hidden;\n    \n\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 8px;\n    word-wrap: break-word;\n    \n\n  }\n\n  .special-instructions[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 2px 0;\n    word-wrap: break-word;\n  }\n\n  .field-group[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    \n\n    gap: 4px;\n    \n\n  }\n\n  .field[_ngcontent-%COMP%] {\n    min-width: 70px;\n    \n\n    flex: 1 1 30%;\n    \n\n    min-height: 50px;\n  }\n\n  .field-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-align: center;\n    word-wrap: break-word;\n  }\n\n  .product-image[_ngcontent-%COMP%] {\n    max-width: 100%;\n    \n\n    max-height: 50vh;\n    object-fit: contain;\n    \n\n  }\n\n  .info-section[_ngcontent-%COMP%] {\n    padding: 8px;\n    word-wrap: break-word;\n    box-sizing: border-box;\n    \n\n    max-width: 100%;\n    \n\n    font-size: 14px;\n    \n\n    text-align: left;\n    \n\n  }\n\n  .info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0 0 8px;\n    \n\n    line-height: 1.5;\n    \n\n  }\n\n\n  .toggle-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 8px 16px;\n  }\n\n  .delete-icon[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n    font-size: 8px;\n    top: 4px;\n    right: 4px;\n  }\n\n  body[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    \n\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMtZGlhbG9nL3Byb2R1Y3QtZGV0YWlscy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxRQUFRO0lBQ1IsaURBQWlEO0VBQ25EOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsaURBQWlEO0lBQ2pELGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtFQUNoQzs7O0VBR0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsUUFBUTtJQUNSLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtEQUFrRDtFQUNwRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3BlY2lhbC1pbnN0cnVjdGlvbnMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHB4IDA7XG59XG5cbm1hdC1kaWFsb2ctY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxNnB4IDE2cHggMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXgtd2lkdGg6IDkwdnc7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFyZ2lucyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXJnaW4tdmFsdWVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5tYXJnaW4tZ3JvdXAsXG4uZmllbGQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA0cHg7XG4gIGdhcDogNnB4O1xufVxuXG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cblxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHJvZHVjdC1pbWFnZSB7XG4gIG1heC13aWR0aDogNzAlO1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmRlbGV0ZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgLyogRGlzdGFuY2UgZnJvbSB0aGUgdG9wIGVkZ2UgKi9cbiAgcmlnaHQ6IDhweDtcbiAgLyogRGlzdGFuY2UgZnJvbSB0aGUgcmlnaHQgZWRnZSAqL1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xuICAvKiBSZWQgYmFja2dyb3VuZCBjb2xvciAqL1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIFdoaXRlIFwiWFwiICovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLyogT3B0aW9uYWw6IFNsaWdodCBzaGFkb3cgKi9cbn1cblxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5MzAyYztcbiAgLyogRGFya2VyIHJlZCBvbiBob3ZlciAqL1xufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2dnbGUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xufVxuXG4uaW5mby1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIG1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogRW5zdXJlcyBwYWRkaW5nIGlzIGluY2x1ZGVkIGluIHdpZHRoL2hlaWdodCAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogUHJldmVudHMgdW5uZWNlc3Nhcnkgc2Nyb2xsaW5nICovXG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogQnJlYWtzIGxvbmcgd29yZHMgKi9cbiAgfVxuXG4gIC5zcGVjaWFsLWluc3RydWN0aW9ucyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDJweCAwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5maWVsZC1ncm91cCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC8qIFdyYXBzIGZpZWxkcyB0byB0aGUgbmV4dCByb3cgaWYgbmVlZGVkICovXG4gICAgZ2FwOiA0cHg7XG4gICAgLyogQWRqdXN0IHNwYWNpbmcgdG8gcmVkdWNlIGhvcml6b250YWwgb3ZlcmZsb3cgKi9cbiAgfVxuXG4gIC5maWVsZCB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICAgIC8qIFJlZHVjZWQgd2lkdGggZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBmbGV4OiAxIDEgMzAlO1xuICAgIC8qIEZsZXhpYmxlIHNpemluZyB0byBmaXQgd2l0aGluIHRoZSByb3cgKi9cbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLmZpZWxkLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5wcm9kdWN0LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLyogRW5zdXJlcyBpbWFnZSBzY2FsZXMgdG8gZml0ICovXG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIC8qIEtlZXBzIGltYWdlIHByb3BvcnRpb25zICovXG4gIH1cblxuICAuaW5mby1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogRW5zdXJlcyBwYWRkaW5nIGlzIGluY2x1ZGVkIGluIHRoZSB3aWR0aCAqL1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAvKiBFbnN1cmVzIGl0IGRvZXNuJ3QgZXhjZWVkIHRoZSB2aWV3cG9ydCB3aWR0aCAqL1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvKiBTbGlnaHRseSBzbWFsbGVyIGZvbnQgZm9yIGJldHRlciBmaXQgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC8qIEFsaWduIHRleHQgZm9yIGJldHRlciByZWFkYWJpbGl0eSBvbiBtb2JpbGUgKi9cbiAgfVxuXG4gIC5pbmZvLXNlY3Rpb24gcCB7XG4gICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgIC8qIEFkZHMgcHJvcGVyIHNwYWNpbmcgYmV0d2VlbiBwYXJhZ3JhcGhzICovXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAvKiBJbXByb3ZlcyB0ZXh0IHJlYWRhYmlsaXR5ICovXG4gIH1cblxuXG4gIC50b2dnbGUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gIH1cblxuICAuZGVsZXRlLWljb24ge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICB0b3A6IDRweDtcbiAgICByaWdodDogNHB4O1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC8qIFByZXZlbnQgaG9yaXpvbnRhbCBzY3JvbGwgZm9yIHRoZSBlbnRpcmUgcGFnZSAqL1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6827:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-infinite-scroll */ 6739);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../product-details-dialog/product-details-dialog.component */ 1921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 9438);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2587);













const _c0 = () => ["/home"];
function ProductsComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const origin_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", origin_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](origin_r2);
  }
}
function ProductsComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const buyer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", buyer_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](buyer_r3);
  }
}
function ProductsComponent_table_38_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_table_38_tr_12_Template_tr_click_0_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onRowClick(item_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-image", item_r5.photoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.compItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.compDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.woh);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.sixtySales);
  }
}
function ProductsComponent_table_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 24)(1, "thead", 25)(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "WOH");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Sixty Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductsComponent_table_38_tr_12_Template, 10, 6, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const products_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", products_r7);
  }
}
function ProductsComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No products available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ProductsComponent {
  constructor(productService, dialog) {
    this.productService = productService;
    this.dialog = dialog;
    this.page = 0;
    this.size = 50;
    this.searchTerm = '';
    this.showRelevantItems = false;
    this.showSixtySales = false;
    this.showWoh = false;
    this.showYield = false;
    this.showWithImages = false; // New filter for rows with images
    // Filter dropdowns
    this.originFilter = '';
    this.packSizeFilter = '';
    this.buyerFilter = '';
    // Min CompCost property
    this.minCompCost = 0;
    // Form control
    this.minCompCostControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    // Unique dropdown options
    this.uniqueOrigins = [];
    this.uniquePackSizes = [];
    this.uniqueBuyers = [];
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.inventoryItemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.inventoryItems$ = this.inventoryItemsSubject.asObservable();
  }
  ngOnInit() {
    this.loadData();
    this.searchSubscription = this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(this.trimComparator), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(200)).subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      this.page = 0;
      this.inventoryItemsSubject.next([]);
      this.loadData();
    });
    this.minCompCostControl.valueChanges.subscribe(value => {
      this.minCompCost = value ? parseFloat(value) : 0;
      this.onCompCostChange();
    });
  }
  loadData() {
    this.productService.getProducts(this.page, this.size, this.searchTerm).subscribe({
      next: response => {
        const currentData = this.inventoryItemsSubject.value;
        const newData = response.filter(item => !currentData.some(currentItem => currentItem.compItemId === item.compItemId));
        let filteredData = this.showRelevantItems ? newData.filter(item => item.tenSales && item.tenSales > 0) : newData;
        if (this.showSixtySales) {
          filteredData = filteredData.filter(item => item.sixtySales !== null && item.sixtySales !== undefined && item.sixtySales > 0);
        }
        if (this.showWoh) {
          filteredData = filteredData.filter(item => item.woh !== null && item.woh !== undefined && item.woh > 0);
        }
        if (this.showYield) {
          filteredData = filteredData.filter(item => item.yield && item.yield < 1);
        }
        if (this.showWithImages) {
          filteredData = filteredData.filter(item => item.photoUrl);
        }
        const fullyFilteredData = filteredData.filter(item => {
          const compCost = item.compCost ?? 0;
          return (this.originFilter ? item.origin === this.originFilter : true) && (this.packSizeFilter ? item.packSize === this.packSizeFilter : true) && (this.buyerFilter ? item.buyer === this.buyerFilter : true) && compCost >= this.minCompCost;
        });
        this.populateUniqueDropdowns(response);
        this.inventoryItemsSubject.next([...currentData, ...fullyFilteredData]);
      }
    });
  }
  onRowClick(item, event) {
    const target = event.target;
    const tagName = target.tagName;
    // Prevent pop-up for button or input clicks
    if (tagName !== 'BUTTON' && tagName !== 'INPUT') {
      this.dialog.open(_product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsDialogComponent, {
        data: {
          ...item
        },
        width: '550px'
      });
    }
  }
  toggleRelevantItemsFilter() {
    this.showRelevantItems = !this.showRelevantItems;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }
  toggleSixtySalesFilter() {
    this.showSixtySales = !this.showSixtySales;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }
  toggleWohFilter() {
    this.showWoh = !this.showWoh;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }
  toggleYieldFilter() {
    this.showYield = !this.showYield;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }
  toggleWithImagesFilter() {
    this.showWithImages = !this.showWithImages;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }
  onFilterChange() {
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }
  onCompCostChange() {
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }
  onScroll() {
    this.page++;
    this.loadData();
  }
  onSearchChange(event) {
    const searchTerm = event.target.value;
    this.page = 0;
    this.searchSubject.next(searchTerm);
  }
  trimComparator(prev, curr) {
    return prev.trim() === curr.trim();
  }
  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
  populateUniqueDropdowns(products) {
    this.uniqueOrigins = [...new Set(products.map(item => item.origin))].filter(Boolean).sort();
    this.uniquePackSizes = [...new Set(products.map(item => item.packSize))].filter(Boolean).sort((a, b) => Number(a) - Number(b));
    this.uniqueBuyers = [...new Set(products.map(item => item.buyer))].filter(Boolean).sort();
  }
  static {
    this.ɵfac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 42,
      vars: 18,
      consts: [["noData", ""], ["infiniteScroll", "", 1, "content", 3, "scrolled", "infiniteScrollDistance", "infiniteScrollThrottle"], [1, "container"], [1, "image-container", 3, "routerLink"], ["src", "assets/logo.png", "alt", "Company Logo"], [1, "inventory-title"], [1, "search-bar"], ["type", "text", "placeholder", "Search Products", 3, "input"], [1, "button-row"], [1, "relevant-items-btn", 3, "click"], [1, "filter-btn", 3, "click"], [1, "filters"], [1, "filter-group"], ["for", "originFilter"], ["id", "originFilter", 3, "change", "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-group", "minfilter"], ["for", "comp-cost-min"], ["type", "number", "id", "comp-cost-min", "placeholder", "Min", 3, "ngModelChange", "input", "ngModel"], ["for", "buyerFilter"], ["id", "buyerFilter", 3, "change", "ngModelChange", "ngModel"], ["class", "inventory-grid", 4, "ngIf", "ngIfElse"], [3, "value"], [1, "inventory-grid"], [1, "sticky"], [3, "has-image", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "description-cell"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scrolled", function ProductsComponent_Template_div_scrolled_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onScroll());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2)(2, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ProductsComponent_Template_input_input_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSearchChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.toggleRelevantItemsFilter());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.toggleSixtySalesFilter());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.toggleWohFilter());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.toggleYieldFilter());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.toggleWithImagesFilter());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Origin");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductsComponent_Template_select_change_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onFilterChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProductsComponent_Template_select_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.originFilter, $event) || (ctx.originFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "All Origins");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProductsComponent_option_26_Template, 2, 2, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17)(28, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Min CompCost");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.minCompCost, $event) || (ctx.minCompCost = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ProductsComponent_Template_input_input_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onCompCostChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12)(32, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Buyer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "select", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductsComponent_Template_select_change_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onFilterChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProductsComponent_Template_select_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.buyerFilter, $event) || (ctx.buyerFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "All Buyers");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ProductsComponent_option_37_Template, 2, 2, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ProductsComponent_table_38_Template, 13, 1, "table", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProductsComponent_ng_template_40_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const noData_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showRelevantItems ? "Show All Items" : "Relevant Items", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showSixtySales ? "Show All Sixty Sales" : "Sixty Sales > 0", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showWoh ? "Show All WOH" : "WOH > 0", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showYield ? "Show All Yield" : "Yield < 100%", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showWithImages ? "Show All Items" : "With Images", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.originFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.uniqueOrigins);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.minCompCost);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.buyerFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.uniqueBuyers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 15, ctx.inventoryItems$))("ngIfElse", noData_r8);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__.InfiniteScrollDirective],
      styles: [".content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff;\n    color: #000000;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n\n\n.image-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: rgba(0, 16, 46, 1);\n    text-decoration: none;\n    color: inherit;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    border-radius: 8px;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 32px;\n}\n\n\n\n.search-bar[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: center;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    padding: 12px;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.filter-btn[_ngcontent-%COMP%], \n.relevant-items-btn[_ngcontent-%COMP%] {\n    background-color: #a9a9a9;\n    color: #ffffff;\n    border: none;\n    border-radius: 4px;\n    padding: 6px 12px;\n    cursor: pointer;\n    font-size: 14px;\n    margin: 0px;\n    width: 120px;\n}\n\n.filter-btn[_ngcontent-%COMP%]:hover, \n.relevant-items-btn[_ngcontent-%COMP%]:hover {\n    background-color: #888888;\n}\n\n\n\n.filters[_ngcontent-%COMP%], \n.button-row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 20px;\n    margin-bottom: 20px;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 120px;\n}\n\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 5px;\n    color: #333;\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    width: 120px;\n    height: 28px;\n    box-sizing: border-box;\n    max-width: 120px;\n}\n\n#comp-cost-min[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    width: 120px;\n    height: 28px;\n    box-sizing: border-box;\n    max-width: 120px;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    color: #333;\n    min-width: 75px;\n}\n\n\n\n.inventory-grid[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n@media (max-width: 768px) {\n\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n    }\n\n    \n\n    .inventory-grid[_ngcontent-%COMP%] {\n        width: 100%;\n        table-layout: fixed;\n        \n\n        word-wrap: break-word;\n        \n\n        overflow-x: hidden;\n    }\n\n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        white-space: normal;\n        \n\n        font-size: 12px;\n        \n\n    }\n\n    \n\n    .filters[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        \n\n        gap: 10px;\n    }\n\n    .filter-group[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: none;\n        \n\n        text-align: center;\n    }\n\n    \n\n    .filters[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(3) {\n        grid-column: span 2;\n        \n\n        justify-self: center;\n    }\n\n    \n\n    .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n        width: 100%;\n        font-size: 12px;\n        padding: 5px;\n        box-sizing: border-box;\n    }\n\n    .inventory-grid[_ngcontent-%COMP%]   tr.has-image[_ngcontent-%COMP%] {\n        background-color: #e6f7ff;\n        \n\n    }\n\n}\n\n\n.sticky[_ngcontent-%COMP%] {\n    top: 0px;\n    position: sticky;\n}\n\n\n.description-cell[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    \n\n    gap: 8px;\n    \n\n}\n\n.blue-dot[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n    background-color: rgba(0, 16, 46, 1);\n    border-radius: 50%;\n    display: inline-block;\n    \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   tr.has-image[_ngcontent-%COMP%] {\n    background-color: #e6f7ff;\n    \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7QUFDMUM7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3Qjs7QUFFQSwrQkFBK0I7QUFDL0I7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUEsa0RBQWtEO0lBQ2xEO1FBQ0ksV0FBVztRQUNYLG1CQUFtQjtRQUNuQixxREFBcUQ7UUFDckQscUJBQXFCO1FBQ3JCLGtDQUFrQztRQUNsQyxrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksbUJBQW1CO1FBQ25CLDJDQUEyQztRQUMzQyxlQUFlO1FBQ2YsOENBQThDO0lBQ2xEOztJQUVBLHNDQUFzQztJQUN0QztRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsd0JBQXdCO1FBQ3hCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YseUNBQXlDO1FBQ3pDLGtCQUFrQjtJQUN0Qjs7SUFFQSwyREFBMkQ7SUFDM0Q7UUFDSSxtQkFBbUI7UUFDbkIsOENBQThDO1FBQzlDLG9CQUFvQjtJQUN4Qjs7SUFFQSxxQ0FBcUM7SUFDckM7OztRQUdJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsWUFBWTtRQUNaLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QiwwQkFBMEI7SUFDOUI7O0FBRUo7OztBQUdBO0lBQ0ksUUFBUTtJQUVSLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxRQUFRO0lBQ1IsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBNYWtlIGVudGlyZSBpbWFnZS1jb250YWluZXIgY2xpY2thYmxlICovXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmludmVudG9yeS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLyogVXBkYXRlZCBTZWFyY2ggQmFyICovXG4uc2VhcmNoLWJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJhciBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZmlsdGVyLWJ0bixcbi5yZWxldmFudC1pdGVtcy1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbn1cblxuLmZpbHRlci1idG46aG92ZXIsXG4ucmVsZXZhbnQtaXRlbXMtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xufVxuXG4vKiBGaWx0ZXIgR3JvdXAgYW5kIERyb3Bkb3ducyAqL1xuLmZpbHRlcnMsXG4uYnV0dG9uLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5maWx0ZXItZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMjBweDtcbn1cblxuLmZpbHRlci1ncm91cCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmZpbHRlcnMgc2VsZWN0LFxuLmZpbHRlcnMgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4uZmlsdGVycyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG4jY29tcC1jb3N0LW1pbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLmludmVudG9yeS1ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB0aCxcbi5pbnZlbnRvcnktZ3JpZCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW52ZW50b3J5LWdyaWQgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWluLXdpZHRoOiA3NXB4O1xufVxuXG4vKiBIb3ZlciBlZmZlY3Qgb24gdGFibGUgcm93cyAqL1xuLmludmVudG9yeS1ncmlkIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLyogRW5zdXJlIC5pbnZlbnRvcnktZ3JpZCBmaXRzIHdpdGhpbiAuY29udGFpbmVyICovXG4gICAgLmludmVudG9yeS1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgIC8qIEVuc3VyZSBjb2x1bW5zIGRvbid0IGV4cGFuZCBiZXlvbmQgdGhlIGNvbnRhaW5lciAqL1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIC8qIFdyYXAgdGV4dCB0byBwcmV2ZW50IG92ZXJmbG93ICovXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuaW52ZW50b3J5LWdyaWQgdGgsXG4gICAgLmludmVudG9yeS1ncmlkIHRkIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgLyogQWxsb3cgd3JhcHBpbmcgb2YgY29udGVudCBpbnNpZGUgY2VsbHMgKi9cbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBiZXR0ZXIgZml0IG9uIG1vYmlsZSAqL1xuICAgIH1cblxuICAgIC8qIEFkanVzdCBmaWx0ZXJzIGxheW91dCB0byB0d28gcm93cyAqL1xuICAgIC5maWx0ZXJzIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAvKiBUd28gZmlsdGVycyBwZXIgcm93ICovXG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICAuZmlsdGVyLWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgLyogQWxsb3cgZnVsbCB3aWR0aCBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAvKiBIYW5kbGUgY2FzZSB3aGVyZSBvbmUgZmlsdGVyIGFwcGVhcnMgb24gdGhlIHNlY29uZCByb3cgKi9cbiAgICAuZmlsdGVycz4gOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgICAgIC8qIENlbnRlciB0aGUgdGhpcmQgZmlsdGVyIG9uIHRoZSBzZWNvbmQgcm93ICovXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC8qIEFkanVzdCB0aGUgc2l6ZSBvZiBmaWx0ZXIgaW5wdXRzICovXG4gICAgLmZpbHRlcnMgc2VsZWN0LFxuICAgIC5maWx0ZXJzIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAgIC5maWx0ZXJzIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgLmludmVudG9yeS1ncmlkIHRyLmhhcy1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XG4gICAgICAgIC8qIExpZ2h0IGJsdWUgYmFja2dyb3VuZCAqL1xuICAgIH1cblxufVxuXG5cbi5zdGlja3kge1xuICAgIHRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG5cbi5kZXNjcmlwdGlvbi1jZWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogQWxpZ25zIHRoZSBkb3QgYW5kIHRleHQgdmVydGljYWxseSAqL1xuICAgIGdhcDogOHB4O1xuICAgIC8qIEFkZHMgc3BhY2luZyBiZXR3ZWVuIHRoZSBkb3QgYW5kIHRleHQgKi9cbn1cblxuLmJsdWUtZG90IHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLypib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMjU1LCAwLjYpOyAvKiBPcHRpb25hbDogQWRkIGEgZ2xvdyBlZmZlY3QgKi9cbn1cblxuLmludmVudG9yeS1ncmlkIHRyLmhhcy1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcbiAgICAvKiBMaWdodCBibHVlIGJhY2tncm91bmQgKi9cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8249:
/*!*********************************************************!*\
  !*** ./src/app/components/w4-form/w4-form.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W4FormComponent: () => (/* binding */ W4FormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class W4FormComponent {
  constructor(fb) {
    this.fb = fb;
    this.submitted = false;
    this.w4Form = this.fb.group({
      // Step 1: Personal Information
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(2)]],
      middleInitial: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(1)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(2)]],
      socialSecurity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]{9}$')]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5)]],
      cityStateZip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5)]],
      filingStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      // Step 2: Multiple Jobs
      multipleJobs: [false],
      // Step 3: Claim Dependents
      qualifyingChildren: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]*$')]],
      otherDependents: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]*$')]],
      totalDependents: ['0'],
      // Step 4: Other Adjustments
      otherIncome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]*$')]],
      deductions: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]*$')]],
      extraWithholding: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]*$')]],
      // Step 5: Signature
      employeeSignature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      signatureDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      // Employer Section
      employerName: [''],
      employerAddress: [''],
      firstDateEmployment: [''],
      employerEIN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]{9}$')]]
    });
  }
  ngOnInit() {
    const today = new Date().toISOString().split('T')[0];
    this.w4Form.patchValue({
      signatureDate: today
    });
    // Subscribe to dependent changes
    this.w4Form.get('qualifyingChildren')?.valueChanges.subscribe(() => {
      this.calculateDependents();
    });
    this.w4Form.get('otherDependents')?.valueChanges.subscribe(() => {
      this.calculateDependents();
    });
  }
  calculateDependents() {
    const children = Number(this.w4Form.get('qualifyingChildren')?.value || 0) * 2000;
    const others = Number(this.w4Form.get('otherDependents')?.value || 0) * 500;
    const total = children + others;
    this.w4Form.patchValue({
      totalDependents: total.toString()
    }, {
      emitEvent: false
    });
  }
  getErrorMessage(controlName) {
    const control = this.w4Form.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
    }
    if (control?.hasError('pattern')) {
      return `Invalid ${controlName} format`;
    }
    if (control?.hasError('minlength')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is too short`;
    }
    return '';
  }
  onSubmit() {
    this.submitted = true;
    if (this.w4Form.valid) {
      const formData = this.w4Form.value;
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    } else {
      console.log('Form is invalid');
      Object.keys(this.w4Form.controls).forEach(key => {
        const control = this.w4Form.get(key);
        if (control?.invalid) {
          control.markAsTouched();
          console.log(`${key} is invalid:`, control.errors);
        }
      });
    }
  }
  resetForm() {
    this.submitted = false;
    this.w4Form.reset();
    const today = new Date().toISOString().split('T')[0];
    this.w4Form.patchValue({
      signatureDate: today,
      qualifyingChildren: '0',
      otherDependents: '0',
      totalDependents: '0'
    });
  }
  static {
    this.ɵfac = function W4FormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || W4FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: W4FormComponent,
      selectors: [["app-w4-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 142,
      vars: 1,
      consts: [[1, "w4-form", 3, "ngSubmit", "formGroup"], [1, "form-header"], [1, "section"], [1, "form-row"], [1, "form-group"], [1, "name-group"], ["type", "text", "formControlName", "firstName", "placeholder", "First name"], ["type", "text", "formControlName", "middleInitial", "placeholder", "MI", 1, "middle-initial"], ["type", "text", "formControlName", "lastName"], ["type", "text", "formControlName", "socialSecurity"], [1, "form-group", "full-width"], ["type", "text", "formControlName", "address"], ["type", "text", "formControlName", "cityStateZip"], [1, "filing-status"], [1, "radio-group"], ["type", "radio", "formControlName", "filingStatus", "value", "single"], ["type", "radio", "formControlName", "filingStatus", "value", "married"], ["type", "radio", "formControlName", "filingStatus", "value", "head"], [1, "checkbox-group"], ["type", "checkbox", "formControlName", "multipleJobs"], [1, "input-group"], [1, "currency"], ["type", "number", "formControlName", "qualifyingChildren", 3, "change"], ["type", "number", "formControlName", "otherDependents", 3, "change"], ["type", "number", "formControlName", "totalDependents", "readonly", ""], ["type", "number", "formControlName", "otherIncome"], ["type", "number", "formControlName", "deductions"], ["type", "number", "formControlName", "extraWithholding"], ["type", "text", "formControlName", "employeeSignature"], ["type", "date", "formControlName", "signatureDate"], [1, "section", "employers-section"], ["type", "text", "formControlName", "employerName"], ["type", "text", "formControlName", "employerAddress"], ["type", "date", "formControlName", "firstDateEmployment"], ["type", "text", "formControlName", "employerEIN"], [1, "button-group"], ["type", "submit"], ["type", "reset"]],
      template: function W4FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function W4FormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Employee's Withholding Certificate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Complete Form W-4 so that your employer can withhold the correct federal income tax from your pay.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Step 1: Enter Personal Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "First name and middle initial");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6)(15, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4)(17, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Last name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4)(21, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Social security number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3)(25, "div", 10)(26, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3)(30, "div", 10)(31, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "City or town, state, and ZIP code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Filing Status:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14)(38, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Single or Married filing separately ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Married filing jointly ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Head of household ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2)(48, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Step 2: Multiple Jobs or Spouse Works");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18)(51, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Check here if you have multiple jobs or spouse works ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 2)(55, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Step 3: Claim Dependents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 3)(58, "div", 4)(59, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Multiply the number of qualifying children under age 17 by $2,000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 20)(62, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function W4FormComponent_Template_input_change_64_listener() {
            return ctx.calculateDependents();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3)(66, "div", 4)(67, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Multiply the number of other dependents by $500");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 20)(70, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function W4FormComponent_Template_input_change_72_listener() {
            return ctx.calculateDependents();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 3)(74, "div", 4)(75, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Total amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 20)(78, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 2)(82, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Step 4 (optional): Other Adjustments");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 3)(85, "div", 4)(86, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "(a) Other income");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 20)(89, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 3)(93, "div", 4)(94, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "(b) Deductions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 20)(97, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 3)(101, "div", 4)(102, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "(c) Extra withholding");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 20)(105, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 2)(109, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Step 5: Sign Here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 3)(112, "div", 4)(113, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Employee's signature");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 4)(117, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 30)(121, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Employers Only");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 3)(124, "div", 4)(125, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Employer's name and address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "input", 31)(128, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 4)(130, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "First date of employment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 4)(134, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Employer identification number (EIN)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 35)(138, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Submit Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Reset Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.w4Form);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
      styles: [".w4-form[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #fff;\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  }\n  \n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    border-bottom: 2px solid #333;\n  }\n  \n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  \n  .section[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n  \n  .section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    color: #333;\n    font-size: 1.1em;\n    font-weight: bold;\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 15px;\n    flex-wrap: wrap;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    flex: 1 1 200px;\n  }\n  \n  .form-group.full-width[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  \n  .name-group[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n  }\n  \n  .middle-initial[_ngcontent-%COMP%] {\n    width: 50px !important;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 0.9em;\n    color: #444;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    font-size: 1em;\n  }\n  \n  .input-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  \n  .currency[_ngcontent-%COMP%] {\n    padding: 8px;\n    background-color: #f5f5f5;\n    border: 1px solid #ddd;\n    border-right: none;\n    border-radius: 4px 0 0 4px;\n  }\n  \n  .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border-left: none;\n    border-radius: 0 4px 4px 0;\n  }\n  \n  .radio-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n  }\n  \n  .radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-weight: normal;\n    cursor: pointer;\n  }\n  \n  .radio-group[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n    width: auto;\n  }\n  \n  .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n  }\n  \n  .checkbox-group[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    width: auto;\n  }\n  \n  .employers-section[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n  }\n  \n  .button-group[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 15px;\n    justify-content: flex-end;\n    margin-top: 20px;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;\n    transition: background-color 0.3s ease;\n  }\n  \n  button[type=\"submit\"][_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n  }\n  \n  button[type=\"reset\"][_ngcontent-%COMP%] {\n    background-color: #f44336;\n    color: white;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    opacity: 0.9;\n  }\n  \n  \n\n  @media (max-width: 768px) {\n    .form-row[_ngcontent-%COMP%] {\n      flex-direction: column;\n      gap: 10px;\n    }\n    \n    .form-group[_ngcontent-%COMP%] {\n      min-width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93NC1mb3JtL3c0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztFQUNYOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQSwyQkFBMkI7RUFDM0I7SUFDRTtNQUNFLHNCQUFzQjtNQUN0QixTQUFTO0lBQ1g7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCO0VBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudzQtZm9ybSB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIFxuICAuZm9ybS1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xuICB9XG4gIFxuICAuZm9ybS1oZWFkZXIgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIC5zZWN0aW9uIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5mb3JtLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBmbGV4OiAxIDEgMjAwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwLmZ1bGwtd2lkdGgge1xuICAgIGZsZXg6IDEgMSAxMDAlO1xuICB9XG4gIFxuICAubmFtZS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgXG4gIC5taWRkbGUtaW5pdGlhbCB7XG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiAjNDQ0O1xuICB9XG4gIFxuICAuZm9ybS1ncm91cCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIFxuICAuaW5wdXQtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmN1cnJlbmN5IHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICBcbiAgLmlucHV0LWdyb3VwIGlucHV0IHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbiAgfVxuICBcbiAgLnJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5yYWRpby1ncm91cCBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnJhZGlvLWdyb3VwIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgXG4gIC5jaGVja2JveC1ncm91cCBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5jaGVja2JveC1ncm91cCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIFxuICAuZW1wbG95ZXJzLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIH1cbiAgXG4gIC5idXR0b24tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgYnV0dG9uW3R5cGU9XCJyZXNldFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIFxuICAvKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5mb3JtLXJvdyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgfVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 849:
/*!*****************************************************************!*\
  !*** ./src/app/components/withholding/withholding.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithholdingComponent: () => (/* binding */ WithholdingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class WithholdingComponent {
  constructor(fb) {
    this.fb = fb;
    this.withholdingForm = this.fb.group({
      // Personal Information
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      socialSecurity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      state: ['CA', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      // Filing Status
      filingStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      // Allowances
      regularAllowances: ['0'],
      estimatedDeductions: ['0'],
      totalAllowances: ['0'],
      // Additional Withholding
      additionalAmount: [''],
      // Exemption Options
      exemptionClaim: [false],
      militaryExemption: [false],
      // Signature
      employeeSignature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      signatureDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      // Employer Section
      employerName: [''],
      employerAddress: [''],
      payrollTaxNumber: ['']
    });
  }
  ngOnInit() {
    // Set default date
    const today = new Date().toISOString().split('T')[0];
    this.withholdingForm.patchValue({
      signatureDate: today
    });
  }
  calculateTotalAllowances() {
    const regular = Number(this.withholdingForm.get('regularAllowances')?.value || 0);
    const estimated = Number(this.withholdingForm.get('estimatedDeductions')?.value || 0);
    const total = regular + estimated;
    this.withholdingForm.patchValue({
      totalAllowances: total
    });
  }
  onSubmit() {
    if (this.withholdingForm.valid) {
      console.log(this.withholdingForm.value);
    } else {
      Object.keys(this.withholdingForm.controls).forEach(key => {
        const control = this.withholdingForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
  static {
    this.ɵfac = function WithholdingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WithholdingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: WithholdingComponent,
      selectors: [["app-withholding"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 116,
      vars: 1,
      consts: [[1, "withholding-form", 3, "ngSubmit", "formGroup"], [1, "form-header"], [1, "section"], [1, "form-row"], [1, "form-group", "full-width"], ["type", "text", "formControlName", "fullName"], [1, "form-group"], ["type", "text", "formControlName", "socialSecurity"], ["type", "text", "formControlName", "address"], ["type", "text", "formControlName", "city"], [1, "form-group", "small"], ["type", "text", "formControlName", "state"], ["type", "text", "formControlName", "zipCode"], [1, "filing-status"], [1, "radio-group"], ["type", "radio", "formControlName", "filingStatus", "value", "single"], ["type", "radio", "formControlName", "filingStatus", "value", "married"], ["type", "radio", "formControlName", "filingStatus", "value", "head"], ["type", "number", "formControlName", "regularAllowances", 3, "change"], ["type", "number", "formControlName", "estimatedDeductions", 3, "change"], ["type", "number", "formControlName", "totalAllowances", "readonly", ""], [1, "input-group"], [1, "currency"], ["type", "number", "formControlName", "additionalAmount"], [1, "checkbox-group"], ["type", "checkbox", "formControlName", "exemptionClaim"], ["type", "checkbox", "formControlName", "militaryExemption"], [1, "certification-text"], ["type", "text", "formControlName", "employeeSignature"], ["type", "date", "formControlName", "signatureDate"], [1, "section", "employer-section"], ["type", "text", "formControlName", "employerName"], ["type", "text", "formControlName", "employerAddress"], ["type", "text", "formControlName", "payrollTaxNumber"], [1, "button-group"], ["type", "submit"], ["type", "reset"]],
      template: function WithholdingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WithholdingComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Employee's Withholding Allowance Certificate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Complete this form so that your employer can withhold the correct California state income tax from your pay.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Personal Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "First, Middle, Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3)(15, "div", 6)(16, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Social Security Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3)(20, "div", 4)(21, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3)(25, "div", 6)(26, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10)(30, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10)(34, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "ZIP Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13)(38, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Filing Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14)(41, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Single or Married (with two or more incomes) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Married (one income) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Head of Household ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 2)(51, "div", 3)(52, "div", 6)(53, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "1a. Number of Regular Withholding Allowances (Worksheet A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function WithholdingComponent_Template_input_change_55_listener() {
            return ctx.calculateTotalAllowances();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 3)(57, "div", 6)(58, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "1b. Number of allowances from Estimated Deductions (Worksheet B)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function WithholdingComponent_Template_input_change_60_listener() {
            return ctx.calculateTotalAllowances();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 3)(62, "div", 6)(63, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "1c. Total Number of Allowances you are claiming");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 2)(67, "div", 3)(68, "div", 6)(69, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "2. Additional amount you want withheld each pay period (if employer agrees)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 21)(72, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 2)(76, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Exemption from Withholding");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 24)(79, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " 3. I claim exemption from withholding for 2025, and I certify I meet both conditions for exemption. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " 4. I certify under penalty of perjury that I am not subject to California withholding under the Service Member Civil Relief Act. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 2)(86, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Under penalty of perjury, I certify that the number of withholding allowances claimed on this certificate does not exceed the number to which I am entitled or, if claiming exemption from withholding, that I am entitled to claim the exempt status. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 3)(89, "div", 6)(90, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Employee's Signature");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 6)(94, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 30)(98, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Employer's Section");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 3)(101, "div", 4)(102, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Employer's Name and Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 31)(105, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 3)(107, "div", 6)(108, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "California Employer Payroll Tax Account Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 34)(112, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Submit Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Reset Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.withholdingForm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
      styles: [".withholding-form[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #fff;\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  }\n  \n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    border-bottom: 2px solid #333;\n  }\n  \n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  \n  .section[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n  \n  .section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    color: #333;\n    font-size: 1.1em;\n    font-weight: bold;\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 15px;\n    flex-wrap: wrap;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    flex: 1 1 200px;\n  }\n  \n  .form-group.small[_ngcontent-%COMP%] {\n    flex: 0 1 100px;\n  }\n  \n  .form-group.full-width[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 0.9em;\n    color: #444;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    font-size: 1em;\n  }\n  \n  .input-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  \n  .currency[_ngcontent-%COMP%] {\n    padding: 8px;\n    background-color: #f5f5f5;\n    border: 1px solid #ddd;\n    border-right: none;\n    border-radius: 4px 0 0 4px;\n  }\n  \n  .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border-left: none;\n    border-radius: 0 4px 4px 0;\n  }\n  \n  .radio-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n  }\n  \n  .radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-weight: normal;\n    cursor: pointer;\n  }\n  \n  .radio-group[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n    width: auto;\n  }\n  \n  .checkbox-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-top: 10px;\n  }\n  \n  .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    gap: 10px;\n    cursor: pointer;\n  }\n  \n  .checkbox-group[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    width: auto;\n    margin-top: 3px;\n  }\n  \n  .certification-text[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    font-style: italic;\n    color: #666;\n  }\n  \n  .employer-section[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n  }\n  \n  .button-group[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 15px;\n    justify-content: flex-end;\n    margin-top: 20px;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;\n    transition: background-color 0.3s ease;\n  }\n  \n  button[type=\"submit\"][_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n  }\n  \n  button[type=\"reset\"][_ngcontent-%COMP%] {\n    background-color: #f44336;\n    color: white;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    opacity: 0.9;\n  }\n  \n  \n\n  @media (max-width: 768px) {\n    .form-row[_ngcontent-%COMP%] {\n      flex-direction: column;\n      gap: 10px;\n    }\n    \n    .form-group[_ngcontent-%COMP%] {\n      min-width: 100%;\n    }\n    \n    .form-group.small[_ngcontent-%COMP%] {\n      min-width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93aXRoaG9sZGluZy93aXRoaG9sZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQSwyQkFBMkI7RUFDM0I7SUFDRTtNQUNFLHNCQUFzQjtNQUN0QixTQUFTO0lBQ1g7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndpdGhob2xkaW5nLWZvcm0ge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICBcbiAgLmZvcm0taGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcbiAgfVxuICBcbiAgLmZvcm0taGVhZGVyIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIFxuICAuc2VjdGlvbiBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuZm9ybS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIFxuICAuZm9ybS1ncm91cCB7XG4gICAgZmxleDogMSAxIDIwMHB4O1xuICB9XG4gIFxuICAuZm9ybS1ncm91cC5zbWFsbCB7XG4gICAgZmxleDogMCAxIDEwMHB4O1xuICB9XG4gIFxuICAuZm9ybS1ncm91cC5mdWxsLXdpZHRoIHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiAjNDQ0O1xuICB9XG4gIFxuICAuZm9ybS1ncm91cCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIFxuICAuaW5wdXQtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmN1cnJlbmN5IHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICBcbiAgLmlucHV0LWdyb3VwIGlucHV0IHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbiAgfVxuICBcbiAgLnJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5yYWRpby1ncm91cCBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnJhZGlvLWdyb3VwIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgXG4gIC5jaGVja2JveC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIFxuICAuY2hlY2tib3gtZ3JvdXAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmNoZWNrYm94LWdyb3VwIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG4gIFxuICAuY2VydGlmaWNhdGlvbi10ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxuICBcbiAgLmVtcGxveWVyLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIH1cbiAgXG4gIC5idXR0b24tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgYnV0dG9uW3R5cGU9XCJyZXNldFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIFxuICAvKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5mb3JtLXJvdyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLWdyb3VwLnNtYWxsIHtcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB9XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Redirect to login if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
  static {
    this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);


class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    // Get the token from the AuthService (or other storage like localStorage)
    const token = this.authService.getToken(); // Make sure to implement getToken() method
    if (token) {
      // Clone the request and add the authorization header
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clonedRequest);
    }
    // If there's no token, continue with the original request
    return next.handle(req);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 8952:
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsComponent: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/logo/logo.component */ 3721);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _sales_per_day_chart_sales_per_day_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sales-per-day-chart/sales-per-day-chart.component */ 9888);
/* harmony import */ var _sales_per_sales_rep_chart_sales_per_sales_rep_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sales-per-sales-rep-chart/sales-per-sales-rep-chart.component */ 3332);
/* harmony import */ var _sales_per_customer_sales_per_customer_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sales-per-customer/sales-per-customer-chart.component */ 9665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);








const _c0 = () => ["/home"];
class ReportsComponent {
  constructor() {
    this.pastMonths = 3;
    //////////////////////////////////
    // Line
    this.lineChartLegend = true;
    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Sales',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }, {
        data: [30, 40, 45, 50, 45, 40, 25],
        label: 'Volume',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(55,0,0,0.3)'
      }]
    };
    this.lineChartOptions = {
      responsive: false
    };
    //////////////////////////////////
    // Pie
    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' // Positions the legend at the bottom
        }
      }
    };
    this.pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
    this.pieChartDatasets = [{
      data: [300, 500, 100]
    }];
    this.pieChartLegend = true;
    this.pieChartPlugins = [];
    //////////////////////////////////
    // Bar
    this.barChartLegend = true;
    this.barChartPlugins = [];
    this.barChartData = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A'
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B'
      }]
    };
    //////////////////////////////////
    // Doughnut
    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.doughnutChartDatasets = [{
      data: [350, 450, 100],
      label: 'Series A'
    }, {
      data: [50, 150, 120],
      label: 'Series B'
    }, {
      data: [250, 130, 70],
      label: 'Series C'
    }];
    this.doughnutChartOptions = {
      responsive: false
    };
  }
  ngOnInit() {
    this.fetchChartData('6');
  }
  fetchChartData(months) {
    this.pastMonths = Number(months);
  }
  static {
    this.ɵfac = function ReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ReportsComponent,
      selectors: [["app-reports"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 21,
      vars: 5,
      consts: [["months", ""], [1, "container"], [3, "routerLink"], [1, "inventory-title"], ["for", "months"], ["id", "months", 3, "change"], ["value", "1"], ["value", "3", "selected", ""], ["value", "6"], ["value", "12"], [3, "pastMonths"], [1, "charts"]],
      template: function ReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Total sales for the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "select", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ReportsComponent_Template_select_change_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            const months_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.fetchChartData(months_r2.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Last 1 month");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Last 3 months");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Last 6 months");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Last 12 months");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-sales-per-day-chart", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-sales-per-sales-rep-chart", 10)(20, "app-sales-per-customer-chart", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pastMonths", ctx.pastMonths);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pastMonths", ctx.pastMonths);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pastMonths", ctx.pastMonths);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _sales_per_day_chart_sales_per_day_chart_component__WEBPACK_IMPORTED_MODULE_1__.SalesPerDayChartComponent, _sales_per_sales_rep_chart_sales_per_sales_rep_chart_component__WEBPACK_IMPORTED_MODULE_2__.SalesPerSalesRepChartComponent, _sales_per_customer_sales_per_customer_chart_component__WEBPACK_IMPORTED_MODULE_3__.SalesPerSalesRepCustomerComponent],
      styles: [".container[_ngcontent-%COMP%] {\n    width: fit-content;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff;\n    color: #000000;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.charts[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    \n\n    gap: 16px;\n    \n\n}\n\n@media (max-width: 600px) {\n\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px 0px 10px 0px;\n        padding: 0px 0px 10px 0px;\n        border: 1px solid #ccc;\n        border-radius: 8px;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        text-align: center;\n    }\n\n    \n\n    .charts[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n        \n\n        justify-items: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJO1FBQ0ksV0FBVztRQUNYLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQix1Q0FBdUM7UUFDdkMsa0JBQWtCO0lBQ3RCOztJQUVBLGdDQUFnQztJQUNoQztRQUNJLDBCQUEwQjtRQUMxQixxQ0FBcUM7UUFDckMscUJBQXFCO0lBQ3pCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNoYXJ0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgLyogVHdvIGNvbHVtbnMgZm9yIGxhcmdlciBzY3JlZW5zICovXG4gICAgZ2FwOiAxNnB4O1xuICAgIC8qIFNwYWNlIGJldHdlZW4gY29tcG9uZW50cyAqL1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC8qIEFkanVzdCBicmVha3BvaW50IGFzIG5lZWRlZCAqL1xuICAgIC5jaGFydHMge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgLyogU2luZ2xlIGNvbHVtbiBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9665:
/*!**************************************************************************!*\
  !*** ./src/app/sales-per-customer/sales-per-customer-chart.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesPerSalesRepCustomerComponent: () => (/* binding */ SalesPerSalesRepCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_order_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/order.services */ 3193);






function SalesPerSalesRepCustomerComponent_canvas_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "pie")("datasets", ctx_r0.pieChartDatasets)("labels", ctx_r0.pieChartLabels)("options", ctx_r0.pieChartOptions)("plugins", ctx_r0.pieChartPlugins)("legend", ctx_r0.pieChartLegend);
  }
}
function SalesPerSalesRepCustomerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "pie")("options", ctx_r0.pieChartOptions);
  }
}
class SalesPerSalesRepCustomerComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.pastMonths = 3;
    this.pieChartLabels = [];
    this.pieChartDatasets = [];
    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' // Positions the legend at the bottom
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw; // The raw data value
              return ` $${value.toLocaleString()}`; // Format with $ sign and thousands separator
            }
          }
        }
      }
    };
    /*
    public pieChartLabels = ['Download', 'In', 'Mail Sales'];
    public pieChartDatasets = [
      {
        data: [300, 500, 100],
      },
    ];
    */
    this.pieChartLegend = true;
    this.pieChartPlugins = [];
  }
  ngOnInit() {
    this.fetchChartData(this.pastMonths);
  }
  ngOnChanges(changes) {
    if (changes['pastMonths']) {
      this.fetchChartData(this.pastMonths);
    }
  }
  fetchChartData(pastMonths) {
    this.chartData$ = this.orderService.getTotalAmountPerCustomer(pastMonths).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
      this.pieChartLabels = data.map(item => item.customerName);
      this.pieChartDatasets = [{
        data: data.map(item => item.totalAmount)
      }];
    }));
  }
  static {
    this.ɵfac = function SalesPerSalesRepCustomerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SalesPerSalesRepCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_services__WEBPACK_IMPORTED_MODULE_0__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SalesPerSalesRepCustomerComponent,
      selectors: [["app-sales-per-customer-chart"]],
      inputs: {
        pastMonths: "pastMonths"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [["loading", ""], ["baseChart", "", 3, "type", "datasets", "labels", "options", "plugins", "legend", 4, "ngIf", "ngIfElse"], ["baseChart", "", 3, "type", "datasets", "labels", "options", "plugins", "legend"], ["baseChart", "", 3, "data", "type", "options"]],
      template: function SalesPerSalesRepCustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SalesPerSalesRepCustomerComponent_canvas_0_Template, 1, 6, "canvas", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SalesPerSalesRepCustomerComponent_ng_template_2_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Sales per Customer (top 5)");
        }
        if (rf & 2) {
          const loading_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.chartData$))("ngIfElse", loading_r2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9888:
/*!**********************************************************************!*\
  !*** ./src/app/sales-per-day-chart/sales-per-day-chart.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesPerDayChartComponent: () => (/* binding */ SalesPerDayChartComponent)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_order_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/order.services */ 3193);






function SalesPerDayChartComponent_canvas_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 2);
  }
  if (rf & 2) {
    const chartData_r1 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chartData_r1)("type", "bar")("options", ctx_r1.barChartOptions);
  }
}
function SalesPerDayChartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "bar")("options", ctx_r1.barChartOptions);
  }
}
class SalesPerDayChartComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.pastMonths = 3;
    this.barChartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return `$${value.toLocaleString()}`;
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false // Disable the legend
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw; // The raw data value
              return ` $${value.toLocaleString()}`; // Format with $ sign and thousands separator
            }
          }
        }
      }
    };
  }
  ngOnInit() {
    this.fetchChartData(this.pastMonths);
  }
  ngOnChanges(changes) {
    if (changes['pastMonths']) {
      this.fetchChartData(this.pastMonths);
    }
  }
  fetchChartData(pastMonths) {
    this.chartData$ = this.orderService.getTotalAmountPerDay(pastMonths).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(data => ({
      labels: data.map(entry => this.convertDateFormat(entry.date)),
      datasets: [{
        data: data.map(entry => entry.totalAmount),
        label: 'Total Sales ($)'
      }]
    })));
  }
  convertDateFormat(dateString) {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      return `${month}/${day}/${year}`;
    }
    return '';
  }
  static {
    this.ɵfac = function SalesPerDayChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SalesPerDayChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_services__WEBPACK_IMPORTED_MODULE_0__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SalesPerDayChartComponent,
      selectors: [["app-sales-per-day-chart"]],
      inputs: {
        pastMonths: "pastMonths"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [["loading", ""], ["baseChart", "", 3, "data", "type", "options", 4, "ngIf", "ngIfElse"], ["baseChart", "", 3, "data", "type", "options"]],
      template: function SalesPerDayChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SalesPerDayChartComponent_canvas_0_Template, 1, 3, "canvas", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SalesPerDayChartComponent_ng_template_2_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\nSales per Day");
        }
        if (rf & 2) {
          const loading_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.chartData$))("ngIfElse", loading_r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3332:
/*!**********************************************************************************!*\
  !*** ./src/app/sales-per-sales-rep-chart/sales-per-sales-rep-chart.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesPerSalesRepChartComponent: () => (/* binding */ SalesPerSalesRepChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_order_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/order.services */ 3193);






function SalesPerSalesRepChartComponent_canvas_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "pie")("datasets", ctx_r0.pieChartDatasets)("labels", ctx_r0.pieChartLabels)("options", ctx_r0.pieChartOptions)("plugins", ctx_r0.pieChartPlugins)("legend", ctx_r0.pieChartLegend);
  }
}
function SalesPerSalesRepChartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "pie")("options", ctx_r0.pieChartOptions);
  }
}
class SalesPerSalesRepChartComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.pastMonths = 3;
    this.pieChartLabels = [];
    this.pieChartDatasets = [];
    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' // Positions the legend at the bottom
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw; // The raw data value
              return ` $${value.toLocaleString()}`; // Format with $ sign and thousands separator
            }
          }
        }
      }
    };
    /*
    public pieChartLabels = ['Download', 'In', 'Mail Sales'];
    public pieChartDatasets = [
      {
        data: [300, 500, 100],
      },
    ];
    */
    this.pieChartLegend = true;
    this.pieChartPlugins = [];
  }
  ngOnInit() {
    this.fetchChartData(this.pastMonths);
  }
  ngOnChanges(changes) {
    if (changes['pastMonths']) {
      this.fetchChartData(this.pastMonths);
    }
  }
  fetchChartData(pastMonths) {
    this.chartData$ = this.orderService.getTotalAmountPerSalesRep(pastMonths).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
      this.pieChartLabels = data.map(item => item.salesRepName);
      this.pieChartDatasets = [{
        data: data.map(item => item.totalAmount)
      }];
    }));
  }
  static {
    this.ɵfac = function SalesPerSalesRepChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SalesPerSalesRepChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_services__WEBPACK_IMPORTED_MODULE_0__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SalesPerSalesRepChartComponent,
      selectors: [["app-sales-per-sales-rep-chart"]],
      inputs: {
        pastMonths: "pastMonths"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [["loading", ""], ["baseChart", "", 3, "type", "datasets", "labels", "options", "plugins", "legend", 4, "ngIf", "ngIfElse"], ["baseChart", "", 3, "type", "datasets", "labels", "options", "plugins", "legend"], ["baseChart", "", 3, "data", "type", "options"]],
      template: function SalesPerSalesRepChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SalesPerSalesRepChartComponent_canvas_0_Template, 1, 6, "canvas", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SalesPerSalesRepChartComponent_ng_template_2_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Sales per Rep");
        }
        if (rf & 2) {
          const loading_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.chartData$))("ngIfElse", loading_r2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.tokenKey = 'authToken';
    this.fullnameKey = 'fullname';
  }
  login(username, password) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/public/auth/login`, {
      username,
      password
    });
  }
  passwordRequest(username) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/public/auth/password-request`, {
      username
    });
  }
  passwordReset(password, token) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/public/auth/password-reset`, {
      password,
      token
    });
  }
  saveFullnameAndToken(fullname, token) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.fullnameKey, fullname);
  }
  // Retrieve the token (from sessionStorage first, then fallback to localStorage)
  getToken() {
    const token = localStorage.getItem(this.tokenKey);
    return token;
  }
  getFullname() {
    const token = localStorage.getItem(this.fullnameKey);
    return token;
  }
  // Check if the user is logged in by verifying if a token exists
  isLoggedIn() {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }
  // Optional: method to log out
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1444:
/*!**************************************************!*\
  !*** ./src/app/services/driver-route.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriverRouteService: () => (/* binding */ DriverRouteService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);





class DriverRouteService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getDrivers() {
    return this.http.get(`${this.apiUrl}/drivers`);
  }
  getDeliveryRoute(driverName, deliveryDate) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('driverName', driverName).set('deliveryDate', deliveryDate);
    return this.http.get(`${this.apiUrl}/delivery-stops`, {
      params
    });
  }
  hasArrived(id) {
    return this.http.patch(`${this.apiUrl}/delivery-stops/${id}`, {});
  }
  uploadPhoto(deliveryStopId, file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/delivery-stops/${deliveryStopId}/photos`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  static {
    this.ɵfac = function DriverRouteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DriverRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: DriverRouteService,
      factory: DriverRouteService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7795:
/*!**********************************************************!*\
  !*** ./src/app/services/global-error-handler.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalErrorHandlerService: () => (/* binding */ GlobalErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.service */ 2365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);





class GlobalErrorHandlerService {
  constructor(snackBarService, router, authService) {
    this.snackBarService = snackBarService;
    this.router = router;
    this.authService = authService;
  }
  handleError(error) {
    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
      // Check network connectivity
      if (!navigator.onLine) {
        this.snackBarService.showError('No internet connection');
        return;
      }
      // Handle client-side errors
      if (error.error instanceof ErrorEvent) {
        this.snackBarService.showError(error.error.message);
        return;
      }
      // Handle specific HTTP status codes
      switch (error.status) {
        case 401:
          this.authService.logout();
          this.snackBarService.showError('Unauthorized. Please enter your credentials.');
          this.router.navigate(['/login']);
          break;
        case 403:
          {
            this.authService.logout();
            const errorMessage = error.error?.message || 'Try again.';
            this.snackBarService.showError(`Access denied. ${errorMessage}.`);
            break;
          }
        case 423:
          {
            this.authService.logout();
            const errorMessage = error.error?.message || 'Try again.';
            this.snackBarService.showError(`Access denied. ${errorMessage}.`);
            break;
          }
        case 404:
          this.snackBarService.showError('Resource not found.');
          break;
        case 413:
          this.snackBarService.showError('File too large.');
          break;
        case 500:
          {
            const errorMessage = error.error?.message || 'Please try again later.';
            this.snackBarService.showError(`Error: ${errorMessage}`);
            break;
          }
        default:
          {
            console.error('An error occurred:', error);
            const errorMessage = error.error?.message || 'An unexpected error occurred.';
            this.snackBarService.showError(`Error: ${errorMessage}`);
          }
      }
      // Log the full error for debugging
      console.error('Full error details:', {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        error: error.error
      });
    } else {
      // Handle client-side/non-HTTP errors
      console.error('Client-side error:', error);
      this.snackBarService.showError('An unexpected error occurred');
    }
  }
  static {
    this.ɵfac = function GlobalErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GlobalErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: GlobalErrorHandlerService,
      factory: GlobalErrorHandlerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5515:
/*!************************************************!*\
  !*** ./src/app/services/order-form.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderFormService: () => (/* binding */ OrderFormService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);




class OrderFormService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getOrderData(customerId) {
    return this.http.get(`${this.apiUrl}/public/customers/${customerId}/profiles`);
  }
  placeOrder(customerId, order) {
    const url = `${this.apiUrl}/public/customers/${customerId}/orders`;
    return this.http.post(url, order);
  }
  static {
    this.ɵfac = function OrderFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: OrderFormService,
      factory: OrderFormService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9518:
/*!*************************************************!*\
  !*** ./src/app/services/order-links.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderLinksService: () => (/* binding */ OrderLinksService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);




class OrderLinksService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getCompanies() {
    return this.http.get(`${this.apiUrl}/companies`);
  }
  getSalesPersons(companyId) {
    return this.http.get(`${this.apiUrl}/companies/${companyId}/sales-reps`);
  }
  getCustomers(companyId, salesRepName) {
    return this.http.get(`${this.apiUrl}/companies/${companyId}/sales-reps/${salesRepName}/customers`);
  }
  static {
    this.ɵfac = function OrderLinksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderLinksService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: OrderLinksService,
      factory: OrderLinksService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3193:
/*!********************************************!*\
  !*** ./src/app/services/order.services.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class OrderService {
  constructor(http) {
    this.http = http;
  }
  loadCompanies() {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/companies`);
  }
  loadOrders(company_id, salesrep_name, past_hours) {
    const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/companies/${company_id}/sales-reps/${salesrep_name}/orders?pastHours=${past_hours}`;
    return this.http.get(apiUrl);
  }
  loadSalesRep(company_id) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/companies/${company_id}/sales-reps`);
  }
  getTotalAmountPerDay(months) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/sales-per-days?months=${months}`);
  }
  getTotalAmountPerSalesRep(months) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/sales-per-sales-reps?months=${months}`);
  }
  getTotalAmountPerCustomer(months) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/sales-per-top-5-customers?months=${months}`);
  }
  static {
    this.ɵfac = function OrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3157:
/*!**********************************************!*\
  !*** ./src/app/services/preorder.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreorderService: () => (/* binding */ PreorderService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class PreorderService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getPreOrders(vendorId) {
    return this.http.get(`${this.apiUrl}/public/vendors/${vendorId}/pre-orders`);
  }
  updatePreOrderWeightAndPrice(vendorId, preOrder) {
    const patchUrl = `${this.apiUrl}/vendors/${vendorId}/pre-orders/${preOrder.sodId}`;
    const body = {
      weight: preOrder.weight,
      price: preOrder.price
    };
    return this.http.patch(patchUrl, body);
  }
  static {
    this.ɵfac = function PreorderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PreorderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PreorderService,
      factory: PreorderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9438:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);






class ProductService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  /**
   * Fetch products with pagination and search term
   */
  getProducts(page, size, searchTerm) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('search', searchTerm);
    return this.http.get(`${this.apiUrl}/products`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.content));
  }
  /**
   * Upload a photo for a specific product
   */
  uploadProductImage(productId, file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/products/${productId}/photos`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  /**
   * Delete a photo for a specific product
   */
  deleteProductPhoto(productId) {
    const url = `${this.apiUrl}/products/${productId}/photos`; // Full API endpoint
    return this.http.delete(url); // Use DELETE HTTP method
  }
  static {
    this.ɵfac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 366:
/*!*****************************************!*\
  !*** ./src/app/services/pwa.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PwaService: () => (/* binding */ PwaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PwaService {
  constructor() {
    this.isPwa = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isPwa$ = this.isPwa.asObservable();
  }
  updateValue(isPwa) {
    this.isPwa.next(isPwa);
  }
  static {
    this.ɵfac = function PwaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PwaService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PwaService,
      factory: PwaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2365:
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarService: () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


class SnackbarService {
  constructor(matSnackBar) {
    this.matSnackBar = matSnackBar;
    this.duration = 10000;
    this.verticalPosition = 'bottom';
    this.horizontalPos = 'center';
    this.action = 'Hide';
    // Define standard styles
    this.styles = {
      error: 'error-snackbar',
      success: 'success-snackbar',
      warning: 'warning-snackbar',
      info: 'info-snackbar'
    };
  }
  showSnackBar(message, style, duration = this.duration) {
    // Close any existing snackbar
    this.closeSnackBar();
    // Get the appropriate style class
    const panelClass = style ? this.styles[style] : undefined;
    this.snackBarRef = this.matSnackBar.open(message, this.action, {
      duration: duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPos,
      panelClass: panelClass
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.closeSnackBar();
    });
    return this.snackBarRef;
  }
  // Convenience methods for different types of messages
  showError(message, duration) {
    return this.showSnackBar(message, 'error', duration);
  }
  showSuccess(message, duration) {
    return this.showSnackBar(message, 'success', duration);
  }
  showWarning(message, duration) {
    return this.showSnackBar(message, 'warning', duration);
  }
  showInfo(message, duration) {
    return this.showSnackBar(message, 'info', duration);
  }
  closeSnackBar() {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }
  }
  static {
    this.ɵfac = function SnackbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SnackbarService,
      factory: SnackbarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2041:
/*!*********************************************!*\
  !*** ./src/app/services/vendors.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorsService: () => (/* binding */ VendorsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class VendorsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/vendors`; // Base API endpoint for vendors
  }
  /**
   * Fetch the list of vendors from the API
   * @returns Observable of vendor data
   */
  getVendors() {
    return this.http.get(this.apiUrl);
  }
  static {
    this.ɵfac = function VendorsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VendorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VendorsService,
      factory: VendorsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://uat-pffc.onrender.com/api'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ 2457);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routing.module */ 4114);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/services/global-error-handler.service */ 7795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/interceptors/auth.interceptor */ 472);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ 6045);






















(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
  // Ensure FormsModule is imported for ngModel
  _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__.ModalModule.forRoot()), {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ErrorHandler,
    useClass: _app_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.GlobalErrorHandlerService
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
    useClass: _app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor,
    multi: true
  }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.withInterceptorsFromDi)()), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.provideAnimations)(), (0,_angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.provideServiceWorker)('ngsw-worker.js', {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.isDevMode)(),
    registrationStrategy: 'registerWhenStable:30000'
  }), (0,ng2_charts__WEBPACK_IMPORTED_MODULE_21__.provideCharts)((0,ng2_charts__WEBPACK_IMPORTED_MODULE_21__.withDefaultRegisterables)())]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map