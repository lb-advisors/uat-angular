"use strict";
(self["webpackChunkdriver_routes"] = self["webpackChunkdriver_routes"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/driver-route/driver-route.component */ 6279);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/order/order.component */ 7102);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/logout/logout.component */ 3913);
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inventory/inventory.component */ 9761);
/* harmony import */ var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order-form/order-form.component */ 6885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);







 // Adjusted import path


const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
  title: 'Home'
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  title: 'Home'
}, {
  path: 'driver',
  component: _components_driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_0__.DriverRouteComponent,
  title: 'Driver Route'
}, {
  path: 'order',
  component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_2__.OrderListComponent,
  title: 'Orders'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
  title: 'Login'
}, {
  path: 'logout',
  component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__.LogoutComponent,
  title: 'Logout'
}, {
  path: 'inventory',
  component: _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_5__.InventoryComponent,
  title: 'Inventory'
}, {
  path: 'order-form',
  component: _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_6__.OrderFormComponent,
  title: 'Order Form'
}, {
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 7728);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 3228);









function AppComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "UAT environment\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  constructor() {
    this.title = 'driver-routes';
    this.isDevMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)();
    this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 44,
    vars: 1,
    consts: [["color", "primary"], ["role", "navigation", "mode", "push"], ["sidenav", ""], ["mat-list-item", "", "routerLink", "/home"], [1, "icon"], [1, "label"], ["mat-list-item", "", "routerLink", "/inventory"], ["mat-list-item", "", "routerLink", "/driver"], ["mat-list-item", "", "routerLink", "/order"], ["mat-list-item", "", "routerLink", "/order-form"], [1, "header"], ["color", "primary", 1, "header"], ["mat-icon-button", "", 3, "click"], [1, "logo-container"], ["src", "assets/logo.png", "alt", "Company Logo", 1, "logo"], [4, "ngIf"], [1, "mat-drawer-container"], [1, "container"], [1, "text-align-center"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2)(3, "mat-nav-list")(4, "a", 3)(5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6)(10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 7)(15, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "directions_car");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8)(20, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 9)(25, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Order Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-sidenav-content")(30, "div", 10)(31, "mat-toolbar", 11)(32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AppComponent_span_37_Template, 3, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "footer", 16)(41, "div", 17)(42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " \u00A9 2024 - Pacific Fresh Fish Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDevMode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem],
    styles: [".tabs[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n    margin-top: 1em;\n}\n\n.active-link[_ngcontent-%COMP%] {\n    color: #F20B22;\n}\n\na[_ngcontent-%COMP%] {\n    padding: 20px;\n    text-decoration: none;\n    color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n    color: lightgray;\n}\n\na.active-link[_ngcontent-%COMP%] {\n    background-color: rgb(8, 20, 44) !important;\n}\n\n.valign-center[_ngcontent-%COMP%] {\n    display: inline-flex;\n    vertical-align: middle;\n    align-items: center;\n}\n\n#a[_ngcontent-%COMP%] {\n    display: inline;\n}\n\n#a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    padding: 10px;\n}\n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(8, 20, 44) !important;\n    width: 100%;\n    padding: 10px 0; \n\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n    background-color: rgb(8, 20, 44) !important;\n    width: 100%;\n}\n\n.text-align-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.logo[_ngcontent-%COMP%] {\n    max-height: 70px; \n\n}\n\n.spacer[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    min-height: 95%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLGVBQWUsRUFBRSxtQ0FBbUM7QUFDeEQ7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCLEVBQUUsd0NBQXdDO0FBQzlEOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICAgIGNvbG9yOiAjRjIwQjIyO1xufVxuXG5hIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuYS5hY3RpdmUtbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDIwLCA0NCkgIWltcG9ydGFudDtcbn1cblxuLnZhbGlnbi1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Ege1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuI2EgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAyMCwgNDQpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwOyAvKiBBZGQgc29tZSBwYWRkaW5nIHRvIHRoZSBoZWFkZXIgKi9cbn1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAyMCwgNDQpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LWFsaWduLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ28ge1xuICAgIG1heC1oZWlnaHQ6IDcwcHg7IC8qIEVuc3VyZSB0aGUgbG9nbyBmaXRzIHdpdGhpbiB0aGUgYmFyICovXG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDE7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogOTUlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/driver-route/driver-route.component */ 6279);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 7728);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/order/order.component */ 7102);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/logout/logout.component */ 3913);
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inventory/inventory.component */ 9761);
/* harmony import */ var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-form/order-form.component */ 6885);
/* harmony import */ var _core_interceptors_http_logging_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptors/http-logging.interceptor */ 400);
/* harmony import */ var _services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/global-error-handler.service */ 9848);








 // Import FormsModule









 // Update import


 // Update path
 // Corrected import path



class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
      useClass: _core_interceptors_http_logging_interceptor__WEBPACK_IMPORTED_MODULE_9__.HttpLoggingInterceptor,
      multi: true
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ErrorHandler,
      useClass: _services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_10__.GlobalErrorHandlerService
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_2__.DriverRouteComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _components_order_order_component__WEBPACK_IMPORTED_MODULE_4__.OrderListComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__.LogoutComponent, _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__.InventoryComponent, _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_8__.OrderFormComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule]
  });
})();

/***/ }),

/***/ 6279:
/*!*******************************************************************!*\
  !*** ./src/app/components/driver-route/driver-route.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriverRouteComponent: () => (/* binding */ DriverRouteComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 1315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_driver_route_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/driver-route.service */ 1314);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);










function DriverRouteComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", name_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](name_r2);
  }
}
function DriverRouteComponent_table_12_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_12_td_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" +", (dataSource_r3[dataSource_r3.indexOf(element_r14) + 1] == null ? null : dataSource_r3[dataSource_r3.indexOf(element_r14) + 1].timeDifference) !== undefined ? dataSource_r3[dataSource_r3.indexOf(element_r14) + 1].timeDifference + " m" : "", " ");
  }
}
function DriverRouteComponent_table_12_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DriverRouteComponent_table_12_td_3_div_2_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const dataSource_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r14.deliveryAddress1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r14 !== dataSource_r3[dataSource_r3.length - 1]);
  }
}
function DriverRouteComponent_table_12_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_12_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 28)(1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r7.getGoogleMapsUrl(element_r19.deliveryAddress2, element_r19.deliveryAddress3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", element_r19.deliveryAddress2, " ", element_r19.deliveryAddress3, " ");
  }
}
function DriverRouteComponent_table_12_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Customer Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_12_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.customerPhone, " ");
  }
}
function DriverRouteComponent_table_12_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Arrival ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_12_td_12_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_table_12_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 28)(1, "mat-slide-toggle", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DriverRouteComponent_table_12_td_12_Template_mat_slide_toggle_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const element_r21 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.hasArrived(element_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DriverRouteComponent_table_12_td_12_mat_icon_2_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", element_r21.actualArrivalTime)("disabled", element_r21.actualArrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r21.actualArrivalTime);
  }
}
function DriverRouteComponent_table_12_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 32);
  }
}
const _c0 = function (a0) {
  return {
    "arrived-row": a0
  };
};
function DriverRouteComponent_table_12_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 33);
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, row_r25.actualArrivalTime));
  }
}
function DriverRouteComponent_table_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DriverRouteComponent_table_12_th_2_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DriverRouteComponent_table_12_td_3_Template, 3, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DriverRouteComponent_table_12_th_5_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DriverRouteComponent_table_12_td_6_Template, 3, 3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DriverRouteComponent_table_12_th_8_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DriverRouteComponent_table_12_td_9_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DriverRouteComponent_table_12_th_11_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DriverRouteComponent_table_12_td_12_Template, 3, 3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DriverRouteComponent_table_12_tr_13_Template, 1, 0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DriverRouteComponent_table_12_tr_14_Template, 1, 3, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataSource_r3 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", dataSource_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
class DriverRouteComponent {
  constructor(driverRouteService, sanitizer, cdr) {
    this.driverRouteService = driverRouteService;
    this.sanitizer = sanitizer;
    this.cdr = cdr;
    this.deliveryDate = ''; // Provide a default value
    this.selectedDriverName = '';
    this.displayedColumns = ['deliveryAddress1', 'address', 'customerPhone', 'actualArrivalTime'];
    this.setInitialDate();
    this.driverNames$ = this.driverRouteService.getDrivers();
  }
  ngOnInit() {
    this.driverRouteService.refreshDrivers();
    this.driverNames$.subscribe(driverNames => {
      this.selectedDriverName = driverNames[0] || ''; // Select the first driver by default
      this.refreshDeliverRoute(this.selectedDriverName, this.deliveryDate);
    });
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
  setInitialDate() {
    const today = new Date();
    this.deliveryDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(today, 'yyyy-MM-dd');
  }
  refreshDeliverRoute(driverName, deliveryDate) {
    const formattedDate = new Date(deliveryDate).toISOString().split('T')[0]; // Ensure date is formatted as YYYY-MM-DD
    this.deliveryRoute$ = this.driverRouteService.getDeliveryRoute(driverName, formattedDate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(deliveryStops => this.calculateTimeDifferences(deliveryStops)));
  }
  hasArrived(deliveryRoute) {
    this.driverRouteService.hasArrived(deliveryRoute.id.toString()).subscribe(() => {
      console.log('Delivery marked as arrived');
    }, error => {
      console.error('Error marking delivery as arrived', error);
    });
  }
  getGoogleMapsUrl(address2, address3) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address2 + ' ' + address3)}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
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
  static #_ = this.ɵfac = function DriverRouteComponent_Factory(t) {
    return new (t || DriverRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_driver_route_service__WEBPACK_IMPORTED_MODULE_0__.DriverRouteService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DriverRouteComponent,
    selectors: [["app-driver-route"]],
    decls: 14,
    vars: 8,
    consts: [[1, "container"], [1, "driver-routes-title"], [1, "filters"], ["for", "driver-name"], ["id", "driver-name", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "delivery-date"], ["type", "text", "id", "delivery-date", "readonly", "", 3, "value"], ["mat-table", "", "class", "mat-elevation-z8 driver-routes-grid", "matSort", "", 3, "dataSource", 4, "ngIf"], [3, "value"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "driver-routes-grid", 3, "dataSource"], ["matColumnDef", "deliveryAddress1"], ["mat-header-cell", "", "class", "no-bottom-border", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "no-bottom-border", 4, "matCellDef"], ["matColumnDef", "address"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "customerPhone"], ["matColumnDef", "actualArrivalTime"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "no-bottom-border"], ["mat-cell", "", 1, "no-bottom-border"], ["class", "arrow-container", 4, "ngIf"], [1, "arrow-container"], [1, "fas", "fa-arrow-down"], [1, "time-difference-arrow"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], [3, "checked", "disabled", "change"], [4, "ngIf"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass"]],
    template: function DriverRouteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Driver Routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Driver Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DriverRouteComponent_Template_select_ngModelChange_6_listener($event) {
          return ctx.selectedDriverName = $event;
        })("ngModelChange", function DriverRouteComponent_Template_select_ngModelChange_6_listener() {
          return ctx.refreshDeliverRoute(ctx.selectedDriverName, ctx.deliveryDate);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DriverRouteComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Delivery Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DriverRouteComponent_table_12_Template, 15, 3, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedDriverName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, ctx.driverNames$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.deliveryDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, ctx.deliveryRoute$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.arrived-row[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #a9a9a9; \n\n}\n\n.driver-routes-title[_ngcontent-%COMP%] {\n    font-size: 30px; \n\n    text-decoration: underline; \n\n    margin-top: 0; \n\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 97.3%;\n    background-color: rgba(0, 16, 46, 1); \n\n    padding: 10px;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px; \n\n    border-radius: 8px;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    font-size: 30px; \n\n    text-decoration: underline; \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    justify-content: center; \n\n    gap: 10px; \n\n    align-items: center;\n    font-size: 18px; \n\n}\n\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.inventory-grid[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    text-align: center; \n\n    border-bottom: 1px solid #ccc; \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: rgba(0, 16, 46, 1); \n\n    color: #ffffff; \n\n    font-weight: bold; \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td.wrap[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.arrived[_ngcontent-%COMP%] {\n    background-color: #EEEDEB;\n    font-weight: bold;\n}\n\n@media (max-width: 600px) {\n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 95%;\n        margin: 5px;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 10px;\n    }\n}\n\n\n\n.underlined[_ngcontent-%COMP%] {\n    text-decoration: underline;\n}\n\n.hidden-column[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.no-bottom-border[_ngcontent-%COMP%] {\n    border-bottom: none !important;\n}\n\n.arrow-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    margin-top: 10px; \n\n}\n\n.arrow-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px; \n\n    margin-right: 10px; \n\n}\n\n.time-difference-arrow[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: darkgreen;\n    font-weight: bold;\n    margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kcml2ZXItcm91dGUvZHJpdmVyLXJvdXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUscUJBQXFCO0FBQ3pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFFLHlCQUF5QjtBQUN4RDs7QUFFQTtJQUNJLGVBQWUsRUFBRSwwQkFBMEI7SUFDM0MsMEJBQTBCLEVBQUUsdUJBQXVCO0lBQ25ELGFBQWEsRUFBRSxrREFBa0Q7QUFDckU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCLEVBQUUsdUNBQXVDO0lBQ2xFLGNBQWMsRUFBRSx1Q0FBdUM7SUFDdkQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQyxFQUFFLGlEQUFpRDtJQUN2RixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBRSxrQ0FBa0M7SUFDbkQsMEJBQTBCLEVBQUUsdUJBQXVCO0FBQ3ZEOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUIsRUFBRSw4QkFBOEI7SUFDdkQsU0FBUyxFQUFFLHlDQUF5QztJQUNwRCxtQkFBbUI7SUFDbkIsZUFBZSxFQUFFLHVCQUF1QjtBQUM1Qzs7QUFFQTtJQUNJLGVBQWUsRUFBRSx1QkFBdUI7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixrQkFBa0IsRUFBRSx5Q0FBeUM7SUFDN0QsNkJBQTZCLEVBQUUscUJBQXFCO0FBQ3hEOztBQUVBOztJQUVJLG9DQUFvQyxFQUFFLDJDQUEyQztJQUNqRixjQUFjLEVBQUUsdUNBQXVDO0lBQ3ZELGlCQUFpQixFQUFFLDBCQUEwQjtBQUNqRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0IsRUFBRSx5Q0FBeUM7QUFDL0Q7O0FBRUE7SUFDSSxlQUFlLEVBQUUsMkJBQTJCO0lBQzVDLGtCQUFrQixFQUFFLHdDQUF3QztBQUNoRTs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGhlIGJvZHkgKi9cbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQmxhY2sgdGV4dCBjb2xvciAqL1xufVxuXG4uYXJyaXZlZC1yb3cge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7IC8qIE1lZGl1bSBkYXJrbmVzcyBncmV5ICovXG59XG5cbi5kcml2ZXItcm91dGVzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7IC8qIFNldCBmb250IHNpemUgdG8gMzBweCAqL1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiBVbmRlcmxpbmUgdGhlIHRleHQgKi9cbiAgICBtYXJnaW4tdG9wOiAwOyAvKiBBZGp1c3QgbWFyZ2luIHRvIHJlZHVjZSB3aGl0ZSBzcGFjZSBpZiBuZWVkZWQgKi9cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgZm9yIHRoZSBjb250YWluZXIgKi9cbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQmxhY2sgdGV4dCBjb2xvciBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5Ny4zJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7IC8qIERhcmsgYmx1ZSBiYWNrZ3JvdW5kIGZvciB0aGUgaW1hZ2UgY29udGFpbmVyICovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7IC8qIEFkanVzdCB0aGUgbG9nbyBzaXplIGFzIG5lZWRlZCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmludmVudG9yeS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7IC8qIE1ha2UgdGhlIHRleHQgYSBsaXR0bGUgYmlnZ2VyICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIFVuZGVybGluZSB0aGUgdGV4dCAqL1xufVxuXG4uZmlsdGVycyB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBmaWx0ZXIgc2VjdGlvbiAqL1xuICAgIGdhcDogMTBweDsgLyogQWRkcyB3aGl0ZSBzcGFjZSBiZXR3ZWVuIGVhY2ggZmlsdGVyICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSAqL1xufVxuXG4uZmlsdGVycyBsYWJlbCwgLmZpbHRlcnMgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE4cHg7IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSAqL1xufVxuXG4uZmlsdGVycyBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmludmVudG9yeS1ncmlkLCAuZHJpdmVyLXJvdXRlcy1ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB0aCwgLmludmVudG9yeS1ncmlkIHRkLFxuLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aCwgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0ZCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSB0ZXh0IGluIGhlYWRlcnMgYW5kIGNlbGxzICovXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7IC8qIEhvcml6b250YWwgbGluZXMgKi9cbn1cblxuLmludmVudG9yeS1ncmlkIHRoLFxuLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpOyAvKiBEYXJrIGJsdWUgYmFja2dyb3VuZCBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIEJvbGQgZm9udCBmb3IgaGVhZGVycyAqL1xufVxuXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRkLndyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uYXJyaXZlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRURFQjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmludmVudG9yeS1ncmlkIHRoLCAuaW52ZW50b3J5LWdyaWQgdGQsXG4gICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aCwgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuXG4gICAgLmZpbHRlcnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5maWx0ZXJzIGxhYmVsLCAuZmlsdGVycyBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5cbi8qIFVuZGVybGluZWQgdGV4dCBmb3IgRHJpdmVyIFJvdXRlcyAqL1xuLnVuZGVybGluZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGlkZGVuLWNvbHVtbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5vLWJvdHRvbS1ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmFycm93LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBNb3ZlIGRvd24gdGhlIGVudGlyZSBhcnJvdyBjb250YWluZXIgKi9cbn1cblxuLmFycm93LWNvbnRhaW5lciBpIHtcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIEZvbnQgQXdlc29tZSBpY29uIHNpemUgKi9cbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIEFkZCBzcGFjZSB0byB0aGUgcmlnaHQgb2YgdGhlIGFycm93ICovXG59XG5cbi50aW1lLWRpZmZlcmVuY2UtYXJyb3cge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogZGFya2dyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 159:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);



const _c0 = function (a0) {
  return {
    "color": a0
  };
};
function HomeComponent_tr_34_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ordered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.getStatusColor("ordered")));
  }
}
function HomeComponent_tr_34_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
  }
}
function HomeComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td")(4, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_tr_34_td_8_Template, 4, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_tr_34_td_9_Template, 1, 0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.getStatusColor(item_r2.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getStatusIcon(item_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, item_r2.status), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.ordered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.ordered);
  }
}
function HomeComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td")(4, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const employee_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.getStatusColor(employee_r5.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getStatusIcon(employee_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, employee_r5.status), "");
  }
}
class HomeComponent {
  constructor() {
    this.today = new Date();
    this.employees = [{
      name: 'Miguel Rodriguez',
      status: 'onsite'
    }, {
      name: 'Maria Lopez',
      status: 'sick'
    }, {
      name: 'Michael Johnson',
      status: 'vacation'
    }, {
      name: 'Arev Sarkisian',
      status: 'onsite'
    }, {
      name: 'Narek Petrosian',
      status: 'onsite'
    }, {
      name: 'Lilit Avetisyan',
      status: 'onsite'
    }, {
      name: 'Anahit Hovhannisyan',
      status: 'onsite'
    }, {
      name: 'David Martirosyan',
      status: 'onsite'
    }, {
      name: 'Armen Harutyunyan',
      status: 'sick'
    }, {
      name: 'Karen Avanesyan',
      status: 'vacation'
    }];
    this.items = [{
      description: 'Marinated Anchovies Fresh 2.2#',
      status: 'none',
      ordered: true
    }, {
      description: 'Octopus Spanish 6-8 Whole Raw Frozen',
      status: 'none',
      ordered: true
    }, {
      description: 'Clam Whole Cooked Frozen',
      status: 'none',
      ordered: true
    }, {
      description: 'PRODUCE KAIWARE (RADISH-SPROUTS)',
      status: 'none',
      ordered: true
    }, {
      description: 'PRODUCE OHBA (PERILLA-LEAVES)',
      status: 'none',
      ordered: true
    }, {
      description: 'Cold-Smoked Salmon Fillet Sliced With-Skin Deluxe *NOIR*',
      status: 'none',
      ordered: false
    }, {
      description: 'ALBACORE SUSHI LOIN FROZEN',
      status: 'low',
      ordered: false
    }, {
      description: 'LOBSTER MEAT CK (CLAW / KNUCKLE) FROZEN',
      status: 'low',
      ordered: false
    }, {
      description: 'OYSTER FAT BASTARD LIVE',
      status: 'low',
      ordered: false
    }, {
      description: 'Salmon Atlantic Fillet Fresh 2-3 E-Trim Skin-Off 10lb',
      status: 'low',
      ordered: false
    }];
  }
  ngOnInit() {
    this.sortEmployees();
    this.sortItems();
  }
  sortEmployees() {
    this.employees.sort((a, b) => {
      const statusOrder = {
        'sick': 0,
        'vacation': 1,
        'onsite': 2
      };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  }
  sortItems() {
    this.items.sort((a, b) => {
      const statusOrder = {
        'none': 0,
        'low': 1
      };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  }
  getStatusIcon(status) {
    switch (status) {
      case 'sick':
      case 'vacation':
      case 'onsite':
      case 'low':
      case 'none':
        return 'circle';
      default:
        return '';
    }
  }
  getStatusColor(status) {
    switch (status) {
      case 'sick':
        return 'red';
      case 'vacation':
      case 'low':
        return 'orange';
      case 'onsite':
      case 'ordered':
        return 'green';
      case 'none':
        return 'red';
      default:
        return '';
    }
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 47,
    vars: 6,
    consts: [[1, "container"], [1, "date"], [1, "kpi-container"], [1, "kpi"], [1, "grid-container"], [1, "grid"], [1, "item-grid"], [4, "ngFor", "ngForOf"], [1, "employee-grid"], [1, "status-icon", 3, "ngStyle"], [4, "ngIf"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Online Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Deliveries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "12/20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Deliveries Ahead of Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4)(21, "div", 5)(22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 6)(25, "thead")(26, "tr")(27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_tr_34_Template, 10, 10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5)(36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 8)(39, "thead")(40, "tr")(41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HomeComponent_tr_46_Template, 8, 8, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx.today, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.date[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.kpi-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin: 20px 0;\n}\n\n.kpi[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  width: 30%;\n}\n\n.kpi[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n}\n\n.kpi[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 2em;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: start;\n}\n\n.grid[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.item-grid[_ngcontent-%COMP%], .employee-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px 0;\n  border-collapse: collapse;\n}\n\n.item-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .employee-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .item-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .employee-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 10px;\n  font-size: 1.2em;\n}\n\n.item-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .employee-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n}\n\n.status-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n\n\n@media (max-width: 768px) {\n  .kpi-container[_ngcontent-%COMP%] {\n      flex-direction: column;\n      align-items: center;\n  }\n\n  .kpi[_ngcontent-%COMP%] {\n      width: 80%;\n      margin-bottom: 20px;\n  }\n\n  .grid-container[_ngcontent-%COMP%] {\n      flex-direction: column;\n      align-items: center;\n  }\n\n  .grid[_ngcontent-%COMP%] {\n      width: 100%;\n      margin-bottom: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0U7TUFDSSxzQkFBc0I7TUFDdEIsbUJBQW1CO0VBQ3ZCOztFQUVBO01BQ0ksVUFBVTtNQUNWLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLHNCQUFzQjtNQUN0QixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxXQUFXO01BQ1gsbUJBQW1CO0VBQ3ZCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRhdGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ua3BpLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmtwaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMzAlO1xufVxuXG4ua3BpIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4ua3BpIHAge1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogNDUlO1xufVxuXG4uaXRlbS1ncmlkLCAuZW1wbG95ZWUtZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLml0ZW0tZ3JpZCB0aCwgLmVtcGxveWVlLWdyaWQgdGgsIC5pdGVtLWdyaWQgdGQsIC5lbXBsb3llZS1ncmlkIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLml0ZW0tZ3JpZCB0aCwgLmVtcGxveWVlLWdyaWQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4uc3RhdHVzLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLyogTWVkaWEgUXVlcmllcyBmb3IgTW9iaWxlIE9wdGltaXphdGlvbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5rcGktY29udGFpbmVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmtwaSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5ncmlkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9761:
/*!*************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryComponent: () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/inventory.service */ 5862);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);






function InventoryComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.compDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](11, 6, item_r1.activePrice, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.woh);
  }
}
class InventoryComponent {
  constructor(inventoryService) {
    this.inventoryService = inventoryService;
    this.searchQuery = '';
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.displayedInventoryItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.isLoading = false;
  }
  ngOnInit() {
    this.loadAllData();
    this.setupSearchSubscription();
  }
  loadAllData() {
    this.isLoading = true;
    this.inventoryService.getInventoryItems().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(items => {
      this.displayedInventoryItems$.next(items); // Display all items initially
      this.isLoading = false;
    })).subscribe();
  }
  setupSearchSubscription() {
    this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(100),
    // Wait for 100ms pause in events
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(query => {
      this.isLoading = true;
      return this.inventoryService.searchInventoryItems(query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(items => {
        this.displayedInventoryItems$.next(items);
        this.isLoading = false;
      }));
    })).subscribe();
  }
  onSearchChange(query) {
    this.searchSubject.next(query);
  }
  static #_ = this.ɵfac = function InventoryComponent_Factory(t) {
    return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InventoryComponent,
    selectors: [["app-inventory"]],
    decls: 28,
    vars: 4,
    consts: [[1, "content"], [1, "container"], [1, "inventory-title"], [1, "filters"], ["type", "text", "placeholder", "Search Inventory", 3, "ngModel", "ngModelChange"], [1, "inventory-grid"], [1, "shrinkable-header"], [1, "shrinkable-header", "product-header"], [4, "ngFor", "ngForOf"], [1, "wrap", "product-column"]],
    template: function InventoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.searchQuery = $event;
        })("ngModelChange", function InventoryComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.onSearchChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 5)(7, "thead")(8, "tr")(9, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "WOH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, InventoryComponent_tr_26_Template, 14, 11, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 2, ctx.displayedInventoryItems$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n    margin-top: 5px; \n\n    font-size: 30px; \n\n    text-decoration: underline; \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px; \n\n}\n\n.filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    flex: 1 1 calc(50% - 20px); \n\n    min-width: 120px;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: rgba(0, 16, 46, 1); \n\n    color: #ffffff; \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   td.wrap[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.shrinkable-header[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-break: break-word;\n    text-align: center;\n}\n\n.product-header[_ngcontent-%COMP%] {\n    width: 100px; \n\n}\n\n.product-column[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-break: break-word;\n}\n\n@media (max-width: 600px) {\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        flex: 1 1 100%; \n\n        margin-bottom: 10px;\n    }\n\n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 95%;\n        margin: 5px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUscUJBQXFCO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUsdUNBQXVDO0lBQ3ZELHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWUsRUFBRSwwQkFBMEI7SUFDM0MsZUFBZSxFQUFFLGtDQUFrQztJQUNuRCwwQkFBMEIsRUFBRSx1QkFBdUI7QUFDdkQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTLEVBQUUseUNBQXlDO0FBQ3hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwwQkFBMEIsRUFBRSx5Q0FBeUM7SUFDckUsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQyxFQUFFLDJDQUEyQztJQUNqRixjQUFjLEVBQUUsdUNBQXVDO0FBQzNEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLDJEQUEyRDtBQUM3RTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGNBQWMsRUFBRSwwQkFBMEI7UUFDMUMsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGhlIGJvZHkgKi9cbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQmxhY2sgdGV4dCBjb2xvciAqL1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGNvbG9yOiAjMDAwMDAwOyAvKiBCbGFjayB0ZXh0IGNvbG9yIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmludmVudG9yeS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogNXB4OyAvKiBSZWR1Y2UgdGhlIHRvcCBtYXJnaW4gKi9cbiAgICBmb250LXNpemU6IDMwcHg7IC8qIE1ha2UgdGhlIHRleHQgYSBsaXR0bGUgYmlnZ2VyICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIFVuZGVybGluZSB0aGUgdGV4dCAqL1xufVxuXG4uZmlsdGVycyB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4OyAvKiBBZGRzIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBmaWx0ZXIgKi9cbn1cblxuLmZpbHRlci1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uZmlsdGVycyBpbnB1dCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZsZXg6IDEgMSBjYWxjKDUwJSAtIDIwcHgpOyAvKiBBZGp1c3Qgd2lkdGggdG8gbWF0Y2ggY29sdW1uIGhlYWRlcnMgKi9cbiAgICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4uaW52ZW50b3J5LWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmludmVudG9yeS1ncmlkIHRoLCAuaW52ZW50b3J5LWdyaWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmludmVudG9yeS1ncmlkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7IC8qIERhcmsgYmx1ZSBiYWNrZ3JvdW5kIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIHRleHQgY29sb3IgZm9yIHRhYmxlIGhlYWRlcnMgKi9cbn1cblxuLmludmVudG9yeS1ncmlkIHRkLndyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uc2hyaW5rYWJsZS1oZWFkZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMHB4OyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWQgdG8gbWFrZSB0aGUgY29sdW1uIHRoaW5uZXIgKi9cbn1cblxuLnByb2R1Y3QtY29sdW1uIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5maWx0ZXJzIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZmlsdGVycyBpbnB1dCB7XG4gICAgICAgIGZsZXg6IDEgMSAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBpbnB1dHMgKi9cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuaW52ZW50b3J5LWdyaWQgdGgsIC5pbnZlbnRvcnktZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6666:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LoginComponent {
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 26,
    vars: 0,
    consts: [[2, "padding-left", "200px"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br")(1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br")(6, "br")(7, "br")(8, "br")(9, "br")(10, "br")(11, "br")(12, "br")(13, "br")(14, "br")(15, "br")(16, "br")(17, "br")(18, "br")(19, "br")(20, "br")(21, "br")(22, "br")(23, "br")(24, "br")(25, "br");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 3913:
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LogoutComponent {
  static #_ = this.ɵfac = function LogoutComponent_Factory(t) {
    return new (t || LogoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LogoutComponent,
    selectors: [["app-logout"]],
    decls: 26,
    vars: 0,
    consts: [[2, "padding-left", "200px"]],
    template: function LogoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br")(1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br")(6, "br")(7, "br")(8, "br")(9, "br")(10, "br")(11, "br")(12, "br")(13, "br")(14, "br")(15, "br")(16, "br")(17, "br")(18, "br")(19, "br")(20, "br")(21, "br")(22, "br")(23, "br")(24, "br")(25, "br");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 6885:
/*!***************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderFormComponent: () => (/* binding */ OrderFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_order_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/order-form.service */ 1225);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);





function OrderFormComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div")(2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Customer Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00A0\u00A0Sales Rep:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.orderData.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.orderData.sales_rep, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r0.orderData.sales_rep_phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.orderData.sales_rep_phone);
  }
}
function OrderFormComponent_div_10_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_div_10_tr_19_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r5.quantity = $event);
    })("input", function OrderFormComponent_div_10_tr_19_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.updateRowStyle($event));
    })("blur", function OrderFormComponent_div_10_tr_19_Template_input_blur_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.checkEmptyInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_div_10_tr_19_Template_input_ngModelChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r5.profileDescription = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_div_10_tr_19_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r5.unitTypePd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_div_10_tr_19_Template_input_ngModelChange_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r5.packSizePd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_div_10_tr_19_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r5.salesPrice = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-special", true)("data-index", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r5.profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "quantity_special_", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", product_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-price", product_r5.salesPrice)("data-pack-size", product_r5.packSizePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "description_special_", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r5.profileDescription)("ngModel", product_r5.profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "unit_type_special_", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r5.unitTypePd)("ngModel", product_r5.unitTypePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "pack_size_special_", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r5.packSizePd)("ngModel", product_r5.packSizePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "price_special_", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 23, product_r5.salesPrice, "1.2-2"))("ngModel", product_r5.salesPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r5.unitTypePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r5.packSizePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 26, product_r5.salesPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 29, (product_r5.quantity || 0) * product_r5.packSizePd * product_r5.salesPrice, "1.2-2"), "");
  }
}
function OrderFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Specials");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 16)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OrderFormComponent_div_10_tr_19_Template, 20, 32, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.specialsProducts);
  }
}
function OrderFormComponent_div_11_tr_37_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.sales_rep);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.product_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.unit_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.pack_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 14, order_r16.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 17, order_r16.total_price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.delivery_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.customer_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.sales_rep_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.order_timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r16.customer_po);
  }
}
function OrderFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " We already have an order for you submitted today. Please contact your sales rep if you like to change this order. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 16)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Sales Rep");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Product Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Delivery Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Customer Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sales Rep Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Order Timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Customer PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, OrderFormComponent_div_11_tr_37_Template, 31, 20, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderFormComponent_div_11_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.orders);
  }
}
function OrderFormComponent_form_12_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_tr_20_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const product_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r21.quantity = $event);
    })("input", function OrderFormComponent_form_12_tr_20_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.updateRowStyle($event));
    })("blur", function OrderFormComponent_form_12_tr_20_Template_input_blur_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.checkEmptyInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_tr_20_Template_input_ngModelChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const product_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r21.profileDescription = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_tr_20_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const product_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r21.unitTypePd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_tr_20_Template_input_ngModelChange_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const product_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r21.packSizePd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_tr_20_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const product_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r21.salesPrice = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-index", i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r21.profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "quantity_", i_r22, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", product_r21.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-price", product_r21.salesPrice)("data-pack-size", product_r21.packSizePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "description_", i_r22, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r21.profileDescription)("ngModel", product_r21.profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "unit_type_", i_r22, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r21.unitTypePd)("ngModel", product_r21.unitTypePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "pack_size_", i_r22, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r21.packSizePd)("ngModel", product_r21.packSizePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "price_", i_r22, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 22, product_r21.salesPrice, "1.2-2"))("ngModel", product_r21.salesPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r21.unitTypePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r21.packSizePd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 25, product_r21.salesPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 28, (product_r21.quantity || 0) * product_r21.packSizePd * product_r21.salesPrice, "1.2-2"), "");
  }
}
function OrderFormComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_form_12_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.submitOrder(_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 16)(5, "thead")(6, "tr")(7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OrderFormComponent_form_12_tr_20_Template, 20, 31, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.orderData.total_price = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 28)(27, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Delivery Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.deliveryDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u00A0\u00A0Customer PO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.customerPo = $event);
    })("input", function OrderFormComponent_form_12_Template_input_input_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.restrictInput($event, 150));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Submit your order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.products.length = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.orderData.customer_name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.orderData.sales_rep = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.orderData.customer_email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r41.orderData.sales_rep_phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_12_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.orderData.customer_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.orderData.total_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.deliveryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.customerPo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.products.length)("ngModel", ctx_r3.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.orderData.customer_name)("ngModel", ctx_r3.orderData.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.orderData.sales_rep)("ngModel", ctx_r3.orderData.sales_rep);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.orderData.customer_email)("ngModel", ctx_r3.orderData.customer_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.orderData.sales_rep_phone)("ngModel", ctx_r3.orderData.sales_rep_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.orderData.customer_id)("ngModel", ctx_r3.orderData.customer_id);
  }
}
class OrderFormComponent {
  constructor(orderFormService, route) {
    this.orderFormService = orderFormService;
    this.route = route;
    this.orders = [];
    this.orderData = {};
    this.products = [];
    this.specialsProducts = [];
    this.deliveryDate = '';
    this.customerPo = '';
    this.customerId = '';
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.customerId = params['customerID'] || '';
      if (this.customerId) {
        this.fetchCustomerData();
      }
    });
    // Fetch specials data on initialization
    this.fetchSpecialsData();
  }
  fetchCustomerData() {
    if (this.isValidCustomerId(this.customerId)) {
      this.orderFormService.fetchCustomerData(this.customerId).subscribe(data => {
        this.orderData = {
          customer_name: data.customerName,
          sales_rep: data.salesRepName,
          sales_rep_phone: data.salesRepPhone,
          customer_email: data.customerEmail,
          customer_id: this.customerId,
          deliveryDate: this.deliveryDate,
          customerPo: this.customerPo
        };
        this.products = data.profiles.map(profile => ({
          ...profile,
          quantity: profile.quantity || 0
        })) || [];
        this.orders = data.orders || [];
        this.updateTotal(); // Initialize the total
      }, error => {
        console.error('Error fetching customer data:', error);
      });
    } else {
      console.error('Invalid customer ID:', this.customerId);
    }
  }
  fetchSpecialsData() {
    const specialsCustomerId = '1'; // ID for specials
    this.orderFormService.fetchCustomerData(specialsCustomerId).subscribe(data => {
      this.specialsProducts = data.profiles.map(profile => ({
        ...profile,
        quantity: profile.quantity || 0
      })) || [];
      this.updateTotal(); // Initialize the total for specials
    }, error => {
      console.error('Error fetching specials data:', error);
    });
  }
  goBack() {
    window.history.back();
  }
  updateRowStyle(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 4);
    const row = input.closest('tr');
    const quantity = parseFloat(input.value) || 0; // Default to 0 if empty or invalid
    if (quantity > 0) {
      row.classList.add('bold-row');
    } else {
      row.classList.remove('bold-row');
    }
    const productIndex = row.getAttribute('data-index');
    if (productIndex !== null) {
      const isSpecial = row.getAttribute('data-special') === 'true';
      if (isSpecial) {
        this.specialsProducts[productIndex].quantity = quantity;
        if (quantity > 0) {
          row.classList.add('special-bold-row');
        } else {
          row.classList.remove('special-bold-row');
        }
      } else {
        this.products[productIndex].quantity = quantity;
      }
    }
    this.updateTotal();
  }
  checkEmptyInput(event) {
    const input = event.target;
    if (input.value === '') {
      input.value = '0';
    }
    this.updateRowStyle(event);
  }
  updateTotal() {
    let total = 0;
    const totalElements = document.querySelectorAll('.total-per-item');
    totalElements.forEach(element => {
      const subtotal = parseFloat(element.textContent?.replace(/[^0-9.-]+/g, '') || '0');
      total += isNaN(subtotal) ? 0 : subtotal;
    });
    const totalAmountSpan = document.getElementById('total-amount');
    totalAmountSpan.textContent = total.toLocaleString('en-US', {
      style: 'currency',
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const totalPriceInput = document.getElementById('total_price');
    totalPriceInput.value = total.toFixed(2);
  }
  submitOrder(form) {
    const errorMessage = this.validateForm();
    if (errorMessage) {
      this.displayErrorMessage(errorMessage);
      return;
    }
    const orderData = this.prepareOrderData();
    this.orderFormService.placeOrder(this.customerId, orderData).subscribe(response => {
      alert('Order submitted successfully');
      // Redirect or update UI as needed
    }, error => {
      this.displayErrorMessage('Failed to submit order. Please try again later.');
    });
  }
  restrictInput(event, maxLength) {
    const input = event.target;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }
  isValidCustomerId(customerId) {
    const customerIdNumber = Number(customerId);
    return !isNaN(customerIdNumber) && customerId.trim() !== '';
  }
  validateForm() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!this.deliveryDate) {
      return 'Please select a delivery date';
    }
    const deliveryDate = new Date(this.deliveryDate);
    deliveryDate.setHours(0, 0, 0, 0);
    if (deliveryDate < today) {
      return 'Please select a date which is not in the past.';
    }
    if (deliveryDate.getTime() === today.getTime()) {
      return 'Please order at least one day in advance.';
    }
    const maxDeliveryDate = new Date(today);
    maxDeliveryDate.setMonth(maxDeliveryDate.getMonth() + 3);
    if (deliveryDate > maxDeliveryDate) {
      return 'Please only submit orders delivered within the next 3 months.';
    }
    if (deliveryDate.getDay() === 0) {
      // 0 means Sunday
      return 'We are closed on Sundays.';
    }
    const hasQuantity = this.products.concat(this.specialsProducts).some(product => product.quantity && product.quantity > 0);
    if (!hasQuantity) {
      return 'Please select a quantity which is not 0';
    }
    const totalPrice = this.orderFormService.calculateTotal(this.products.concat(this.specialsProducts));
    if (totalPrice > 10000) {
      return 'The total amount has to be less than $10,000.';
    }
    return null;
  }
  displayErrorMessage(message) {
    const errorMessageDiv = document.querySelector('.error-message');
    errorMessageDiv.textContent = message;
  }
  prepareOrderData() {
    const totalPrice = parseFloat(document.getElementById('total_price').value);
    return {
      customerId: this.customerId,
      deliveryDate: this.deliveryDate,
      shipToId: 0,
      totalPrice: totalPrice,
      orderProfiles: this.products.concat(this.specialsProducts).map(product => ({
        profileDid: product.profileDid,
        quantity: product.quantity
      }))
    };
  }
  static #_ = this.ɵfac = function OrderFormComponent_Factory(t) {
    return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_form_service__WEBPACK_IMPORTED_MODULE_0__.OrderFormService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderFormComponent,
    selectors: [["app-order-form"]],
    decls: 13,
    vars: 5,
    consts: [[1, "container"], [1, "page-title"], [1, "customer-id-input"], ["for", "customer-id"], ["id", "customer-id", "type", "text", "placeholder", "Enter customer ID", 3, "ngModel", "ngModelChange"], [3, "click"], ["class", "customer-info", 4, "ngIf"], [4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "customer-info"], ["for", "customer-name"], ["id", "customer-name", 1, "info"], ["for", "sales-rep"], ["id", "sales-rep", 1, "info"], [3, "href"], [1, "grid-title"], [1, "order-grid"], [1, "totalCol"], [4, "ngFor", "ngForOf"], ["type", "text", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "4", "required", "", 1, "input_quantity", 3, "name", "ngModel", "ngModelChange", "input", "blur"], ["type", "hidden", 3, "name", "value", "ngModel", "ngModelChange"], [1, "total-per-item"], [1, "error-message", 2, "color", "red"], [3, "ngSubmit"], ["orderForm", "ngForm"], [1, "total"], ["id", "total-amount"], ["type", "hidden", "name", "total_price", "id", "total_price", "value", "0.00", 3, "ngModel", "ngModelChange"], [1, "delivery-date"], ["for", "delivery-date"], ["type", "date", "id", "delivery-date", "name", "delivery_date", "required", "", 1, "calendar", 3, "ngModel", "ngModelChange"], ["for", "customer-po"], ["type", "text", "id", "customer-po", "name", "customer_po", "maxlength", "150", 3, "ngModel", "ngModelChange", "input"], ["type", "submit", 1, "submit-btn"], ["type", "hidden", "name", "nb_products", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "customer_name", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "sales_rep", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "customer_email", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "sales_rep_phone", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "customer_id", 3, "value", "ngModel", "ngModelChange"]],
    template: function OrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Place Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Customer ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.customerId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderFormComponent_Template_button_click_7_listener() {
          return ctx.fetchCustomerData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OrderFormComponent_div_9_Template, 13, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrderFormComponent_div_10_Template, 20, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OrderFormComponent_div_11_Template, 40, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OrderFormComponent_form_12_Template, 43, 16, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderData.customer_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.specialsProducts && ctx.specialsProducts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders && ctx.orders.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders && ctx.orders.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.page-title[_ngcontent-%COMP%] {\n    font-size: 24px; \n\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.customer-id-input[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\n.customer-info[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n    flex-wrap: wrap;\n}\n\n.customer-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    flex: 1 1 48%;\n    display: flex;\n    align-items: center;\n}\n\n.customer-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-right: 5px;\n}\n\n.customer-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n}\n\n.grid-title[_ngcontent-%COMP%] {\n    font-size: 20px; \n\n    font-weight: bold;\n    text-decoration: underline;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n    table-layout: fixed; \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n    word-wrap: break-word; \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n}\n\n\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n    width: 65%; \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3), .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4), .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5), .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    width: 25%; \n\n}\n\n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n    width: 70px;\n}\n\n.total[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-align: right;\n    margin-bottom: 20px;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n    flex-wrap: wrap;\n}\n\n.delivery-date[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-weight: bold;\n}\n\n.delivery-date[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%], .delivery-date[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n    margin-right: 20px;\n    flex: 1;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: large;\n}\n\n.input_quantity[_ngcontent-%COMP%] {\n    width: 70px;\n}\n\n.totalCol[_ngcontent-%COMP%] {\n    width: 80px;\n}\n\n.calendar[_ngcontent-%COMP%] {\n    font-size: larger;\n}\n\n@media (max-width: 600px) {\n    .customer-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        flex: 1 1 100%;\n        margin-bottom: 10px;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n        word-wrap: break-word;\n    }\n\n    .delivery-date[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n\n    .delivery-date[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n    }\n\n    .delivery-date[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%], .delivery-date[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n        margin-right: 0;\n        margin-bottom: 10px;\n        width: 100%;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 95%;\n        margin: 5px;\n    }\n\n    \n\n    .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%], .input_quantity[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n\n\n\n.order-grid[_ngcontent-%COMP%]   tr.bold-row[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #dedede;\n}\n\n\n\n\n\n.specials-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n\tbackground-color: #DAF2D0;\n}\n\n\n\n\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n\tbackground-color: rgba(0, 16, 46, 1);\n\tcolor: white;\n\tfont-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZSxFQUFFLHVCQUF1QjtJQUN4QyxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWUsRUFBRSx1QkFBdUI7QUFDNUM7O0FBRUE7SUFDSSxlQUFlLEVBQUUsdUJBQXVCO0lBQ3hDLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFFLHVCQUF1QjtBQUNoRDs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUIsRUFBRSx5QkFBeUI7QUFDcEQ7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsK0JBQStCO0FBQy9COztJQUVJLFVBQVUsRUFBRSxnQkFBZ0I7QUFDaEM7O0FBRUE7Ozs7Ozs7Ozs7SUFVSSxVQUFVLEVBQUUsa0JBQWtCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksZUFBZTtRQUNmLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBLCtEQUErRDtJQUMvRDs7UUFFSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQSwyREFBMkQ7QUFDM0Q7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOzs7O0FBSUEseUNBQXlDO0FBQ3pDO0NBQ0MseUJBQXlCO0FBQzFCOzs7O0FBSUEsd0NBQXdDO0FBQ3hDO0NBQ0Msb0NBQW9DO0NBQ3BDLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jdXN0b21lci1pZC1pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmN1c3RvbWVyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY3VzdG9tZXItaW5mbyBkaXYge1xuICAgIGZsZXg6IDEgMSA0OCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3VzdG9tZXItaW5mbyBkaXYgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY3VzdG9tZXItaW5mbyBkaXYgLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5ncmlkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm9yZGVyLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkOyAvKiBGaXhlZCB0YWJsZSBsYXlvdXQgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGgsXG4ub3JkZXItZ3JpZCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogRW5zdXJlIGNvbnRlbnQgd3JhcHMgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5cbi8qIFNldCBzcGVjaWZpYyBjb2x1bW4gd2lkdGhzICovXG4ub3JkZXItZ3JpZCB0aDpudGgtY2hpbGQoMSksXG4ub3JkZXItZ3JpZCB0ZDpudGgtY2hpbGQoMSkge1xuICAgIHdpZHRoOiA2NSU7IC8qIERlc2NyaXB0aW9uICovXG59XG5cbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCgyKSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCgyKSxcbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCgzKSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCgzKSxcbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCg0KSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCg0KSxcbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCg1KSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCg1KSxcbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCg2KSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCg2KSB7XG4gICAgd2lkdGg6IDI1JTsgLyogT3RoZXIgY29sdW1ucyAqL1xufVxuXG4ub3JkZXItZ3JpZCB0ZCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICB3aWR0aDogNzBweDtcbn1cblxuLnRvdGFsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZGVsaXZlcnktZGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmRlbGl2ZXJ5LWRhdGUgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlbGl2ZXJ5LWRhdGUgaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4uZGVsaXZlcnktZGF0ZSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGZsZXg6IDE7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uaW5wdXRfcXVhbnRpdHkge1xuICAgIHdpZHRoOiA3MHB4O1xufVxuXG4udG90YWxDb2wge1xuICAgIHdpZHRoOiA4MHB4O1xufVxuXG4uY2FsZW5kYXIge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY3VzdG9tZXItaW5mbyBkaXYge1xuICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAub3JkZXItZ3JpZCB0aCxcbiAgICAub3JkZXItZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgIC5kZWxpdmVyeS1kYXRlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgLmRlbGl2ZXJ5LWRhdGUgbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmRlbGl2ZXJ5LWRhdGUgaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gICAgLmRlbGl2ZXJ5LWRhdGUgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG5cbiAgICAvKiBBZGp1c3QgdGhlIHdpZHRoIG9mIHRoZSBxdWFudGl0eSBpbnB1dCBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gICAgLm9yZGVyLWdyaWQgdGQgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbiAgICAuaW5wdXRfcXVhbnRpdHkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi8qIEFkZGl0aW9uYWwgc3R5bGVzIGZvciBib2xkIGFuZCBsaWdodGVyIGdyZXkgYmFja2dyb3VuZCAqL1xuLm9yZGVyLWdyaWQgdHIuYm9sZC1yb3cge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG59XG5cblxuXG4vKiBTdHlsZXMgc3BlY2lmaWMgdG8gdGhlIHNwZWNpYWxzIGdyaWQgKi9cbi5zcGVjaWFscy1ncmlkIHRkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0RBRjJEMDtcbn1cblxuXG5cbi8qIFN0eWxlcyBmb3IgdGhlIHByb2R1Y3QgZ3JpZCBoZWFkZXJzICovXG4ub3JkZXItZ3JpZCB0aCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 7102:
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderListComponent: () => (/* binding */ OrderListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4300);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function OrderListComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const salesperson_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", salesperson_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](salesperson_r2.name);
  }
}
function OrderListComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td")(4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderListComponent_tr_18_Template_span_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const order_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.copyLink(ctx_r4.getOrderLink(order_r3.CustomerID)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.getOrderLink(order_r3.CustomerID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class OrderListComponent {
  constructor(http) {
    this.http = http;
    this.orders = [];
    this.salespeople = [];
    this.selectedSalesperson = 'John'; // Default to John
    this.filteredOrders = [];
    this.hardcodedOrders = [{
      customer_id: 4713,
      sales_rep_name: 'John'
    }, {
      customer_id: 2030,
      sales_rep_name: 'Merhy'
    }, {
      customer_id: 4287,
      sales_rep_name: 'John'
    }, {
      customer_id: 9998,
      sales_rep_name: 'SalesRep2'
    }, {
      customer_id: 4154,
      sales_rep_name: 'John'
    }, {
      customer_id: 1,
      sales_rep_name: 'Your Sales Rep Name'
    }, {
      customer_id: 4226,
      sales_rep_name: 'John'
    }, {
      customer_id: 4729,
      sales_rep_name: 'John'
    }, {
      customer_id: 4892,
      sales_rep_name: 'John'
    }, {
      customer_id: 4896,
      sales_rep_name: 'John'
    }, {
      customer_id: 4490,
      sales_rep_name: 'John'
    }, {
      customer_id: 4681,
      sales_rep_name: 'John'
    }, {
      customer_id: 751,
      sales_rep_name: 'John'
    }, {
      customer_id: 4339,
      sales_rep_name: 'John'
    }, {
      customer_id: 4484,
      sales_rep_name: 'John'
    }, {
      customer_id: 4355,
      sales_rep_name: 'John'
    }, {
      customer_id: 4199,
      sales_rep_name: 'John'
    }, {
      customer_id: 3679,
      sales_rep_name: 'Merhy'
    }, {
      customer_id: 846,
      sales_rep_name: 'John'
    }, {
      customer_id: 4253,
      sales_rep_name: 'John'
    }, {
      customer_id: 9999,
      sales_rep_name: 'SalesRep1'
    }];
  }
  ngOnInit() {
    this.fetchSalespeople();
  }
  fetchSalespeople() {
    this.http.get('https://uat-pffc.onrender.com/api/sales-reps').subscribe(data => {
      this.salespeople = data;
      this.fetchCustomerNames();
    }, error => {
      console.error('Error fetching salespeople:', error);
    });
  }
  fetchCustomerNames() {
    const uniqueCustomerIDs = Array.from(new Set(this.hardcodedOrders.map(order => order.customer_id)));
    const customerRequests = uniqueCustomerIDs.map(customer_id => this.http.get(`https://uat-pffc.onrender.com/api/customers/${customer_id}/profiles`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(customerData => ({
      customer_id: customerData.customerId,
      customer_name: customerData.customerName
    }))));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(customerRequests).subscribe(results => {
      this.orders = this.hardcodedOrders.map(order => {
        const customer = results.find(result => result.customer_id === order.customer_id);
        return {
          SalesName: order.sales_rep_name,
          CustomerID: order.customer_id,
          CustomerName: customer ? customer.customer_name : `Customer ${order.customer_id}`
        };
      });
      this.filterOrders(); // Apply filter immediately to show default salesperson's customers
    }, error => {
      console.error('Error fetching customer names:', error);
    });
  }
  filterOrders() {
    if (this.selectedSalesperson) {
      this.filteredOrders = this.orders.filter(order => order.SalesName === this.selectedSalesperson);
    } else {
      this.filteredOrders = [];
    }
    this.sortFilteredOrders();
  }
  sortFilteredOrders() {
    this.filteredOrders.sort((a, b) => a.CustomerName.localeCompare(b.CustomerName));
  }
  getOrderLink(customerID) {
    return `/order-form?customerID=${customerID}`;
  }
  copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }
  static #_ = this.ɵfac = function OrderListComponent_Factory(t) {
    return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrderListComponent,
    selectors: [["app-order-list"]],
    decls: 19,
    vars: 3,
    consts: [[1, "container"], [1, "underlined"], [1, "filters"], ["for", "salesname-filter", 1, "filter-label"], ["id", "salesname-filter", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "order-grid"], [4, "ngFor", "ngForOf"], [3, "value"], ["target", "_blank", 3, "href"], [1, "copy-link", 3, "click"]],
    template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Salesperson:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderListComponent_Template_select_ngModelChange_6_listener($event) {
          return ctx.selectedSalesperson = $event;
        })("change", function OrderListComponent_Template_select_change_6_listener() {
          return ctx.filterOrders();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrderListComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6)(9, "thead")(10, "tr")(11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order Form Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Copy Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderListComponent_tr_18_Template, 9, 2, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedSalesperson);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salespeople);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredOrders);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 97.3%;\n    background-color: rgba(0, 16, 46, 1); \n\n    padding: 10px;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px; \n\n    border-radius: 8px;\n}\n\n.underlined[_ngcontent-%COMP%] {\n    text-decoration: underline;\n    font-size: 30px;\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    justify-content: center; \n\n    gap: 10px; \n\n    align-items: center;\n    font-size: 18px; \n\n    flex-wrap: wrap;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n    font-family: Arial, sans-serif; \n\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n    font-family: Arial, sans-serif; \n\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin: 20px 0;\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 10px;\n    text-align: left;\n    word-wrap: break-word; \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n}\n\n.copy-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 95%;\n        margin: 5px;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 10px;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUIsRUFBRSx1Q0FBdUM7SUFDbEUsY0FBYyxFQUFFLHFCQUFxQjtBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUIsRUFBRSx1Q0FBdUM7SUFDbEUsY0FBYyxFQUFFLHVDQUF1QztJQUN2RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsaURBQWlEO0lBQ3ZGLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYSxFQUFFLG1DQUFtQztJQUNsRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCLEVBQUUsOEJBQThCO0lBQ3ZELFNBQVMsRUFBRSx5Q0FBeUM7SUFDcEQsbUJBQW1CO0lBQ25CLGVBQWUsRUFBRSx1QkFBdUI7SUFDeEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWUsRUFBRSwrQ0FBK0M7SUFDaEUsOEJBQThCLEVBQUUscUJBQXFCO0FBQ3pEOztBQUVBO0lBQ0ksZUFBZSxFQUFFLHFDQUFxQztJQUN0RCw4QkFBOEIsRUFBRSxxQkFBcUI7QUFDekQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUIsRUFBRSw2Q0FBNkM7QUFDeEU7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiBMaWdodCBncmV5IGJhY2tncm91bmQgZm9yIHRoZSBib2R5ICovXG4gICAgY29sb3I6ICMwMDAwMDA7IC8qIEJsYWNrIHRleHQgY29sb3IgKi9cbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGNvbG9yOiAjMDAwMDAwOyAvKiBCbGFjayB0ZXh0IGNvbG9yIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk3LjMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTsgLyogRGFyayBibHVlIGJhY2tncm91bmQgZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IHRoZSBsb2dvIHNpemUgYXMgbmVlZGVkICovXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udW5kZXJsaW5lZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZmlsdGVycyB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBmaWx0ZXIgc2VjdGlvbiAqL1xuICAgIGdhcDogMTBweDsgLyogQWRkcyB3aGl0ZSBzcGFjZSBiZXR3ZWVuIGVhY2ggZmlsdGVyICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSAqL1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZpbHRlci1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4OyAvKiBJbmNyZWFzZSBmb250IHNpemUgdG8gbWF0Y2ggdGhlIHNlbGVjdCBib3ggKi9cbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IC8qIEVuc3VyZSBzYW1lIGZvbnQgKi9cbn1cblxuLmZpbHRlcnMgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE4cHg7IC8qIE1hdGNoIHRoZSBmb250IHNpemUgb2YgdGhlIGxhYmVsICovXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBFbnN1cmUgc2FtZSBmb250ICovXG59XG5cbi5vcmRlci1ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4ub3JkZXItZ3JpZCB0aCwgLm9yZGVyLWdyaWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogRW5zdXJlIHRleHQgd3JhcHMgd2l0aGluIHRoZSB0YWJsZSBjZWxscyAqL1xufVxuXG4ub3JkZXItZ3JpZCB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuLmNvcHktbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuXG4gICAgLmZpbHRlcnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5maWx0ZXJzIGxhYmVsLCAuZmlsdGVycyBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAub3JkZXItZ3JpZCB0aCwgLm9yZGVyLWdyaWQgdGQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 400:
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/http-logging.interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoggingInterceptor: () => (/* binding */ HttpLoggingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbar.service */ 3712);




class HttpLoggingInterceptor {
  constructor(snackBarService) {
    this.snackBarService = snackBarService;
  }
  intercept(request, next) {
    const authToken = 'YOUR_AUTH_TOKEN_HERE';
    // Clone the request and add the authorization header
    const authReq = request.clone({
      setHeaders: {
        'X-New-Header': authToken
      }
    });
    // Pass the cloned request with the updated header to the next handler
    return next.handle(authReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
        this.handleServerSideError(err);
      } else {
        this.snackBarService.showSnackBar('Error fetching data');
      }
      // Re-throw the error to propagate it further
      //return throwError(() => err);
      // stop propagating error
      return rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY;
    }));
  }
  handleServerSideError(error) {
    switch (error.status) {
      case 400:
        //  means the request could not be understood by the server.
        this.snackBarService.showSnackBar('Bad Request, please try again later .');
        break;
      case 401:
        // means lacks valid authentication credentials for the target resource.
        this.snackBarService.showSnackBar('Unauthorized, please try again later.');
        break;
      case 403:
        //  means you are not allowed access to the target resource.
        this.snackBarService.showSnackBar('Forbidden access is denied');
        break;
      case 500:
        // means there's an issue or temporary glitch with the application's programming
        this.snackBarService.showSnackBar('Internal server error, please try again later.');
        break;
      default:
        this.snackBarService.showSnackBar('Error fetching data, please try again later.');
        break;
    }
  }
  static #_ = this.ɵfac = function HttpLoggingInterceptor_Factory(t) {
    return new (t || HttpLoggingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: HttpLoggingInterceptor,
    factory: HttpLoggingInterceptor.ɵfac
  });
}


/***/ }),

/***/ 1314:
/*!**************************************************!*\
  !*** ./src/app/services/driver-route.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriverRouteService: () => (/* binding */ DriverRouteService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);






class DriverRouteService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.driversSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.deliveryStopsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
  }
  getDrivers() {
    return this.driversSubject.asObservable();
  }
  refreshDrivers() {
    this.http.get(`${this.apiUrl}/drivers`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(drivers => drivers.map(driver => driver.name)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error fetching drivers:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Error fetching drivers'));
    })).subscribe(driverNames => {
      this.driversSubject.next(driverNames);
    });
  }
  getDeliveryRoute(driverName, deliveryDate) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams().set('driverName', driverName).set('deliveryDate', deliveryDate);
    return this.http.get(`${this.apiUrl}/delivery-stops`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error fetching delivery stops:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Error fetching delivery stops'));
    }));
  }
  hasArrived(id) {
    return this.http.patch(`${this.apiUrl}/delivery-stops/${id}`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error marking delivery as arrived:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Error marking delivery as arrived'));
    }));
  }
  static #_ = this.ɵfac = function DriverRouteService_Factory(t) {
    return new (t || DriverRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: DriverRouteService,
    factory: DriverRouteService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 9848:
/*!**********************************************************!*\
  !*** ./src/app/services/global-error-handler.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalErrorHandlerService: () => (/* binding */ GlobalErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.service */ 3712);


class GlobalErrorHandlerService {
  constructor(snackBarService) {
    this.snackBarService = snackBarService;
  }
  handleError(error) {
    console.error('A##########n error occurred:', error);
    this.snackBarService.showSnackBar('An error has occured');
  }
  static #_ = this.ɵfac = function GlobalErrorHandlerService_Factory(t) {
    return new (t || GlobalErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: GlobalErrorHandlerService,
    factory: GlobalErrorHandlerService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 5862:
/*!***********************************************!*\
  !*** ./src/app/services/inventory.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryService: () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);






class InventoryService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getInventoryItems() {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', '1').set('size', '2000'); // Adjust size to fetch all items
    return this.http.get(`${this.apiUrl}/inventory`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.content), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error fetching inventory items:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Error fetching inventory items'));
    }));
  }
  searchInventoryItems(query, page = 0, size = 50) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('search', query);
    return this.http.get(`${this.apiUrl}/inventory`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.content), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error searching inventory items:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Error searching inventory items'));
    }));
  }
  static #_ = this.ɵfac = function InventoryService_Factory(t) {
    return new (t || InventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: InventoryService,
    factory: InventoryService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 1225:
/*!************************************************!*\
  !*** ./src/app/services/order-form.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderFormService: () => (/* binding */ OrderFormService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class OrderFormService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://uat-pffc.onrender.com/api/customers';
  }
  fetchCustomerData(customerId) {
    return this.http.get(`${this.apiUrl}/${customerId}/profiles`);
  }
  placeOrder(customerId, orderData) {
    return this.http.post(`${this.apiUrl}/${customerId}/orders`, orderData);
  }
  calculateTotal(products) {
    let total = 0;
    products.forEach(product => {
      const quantity = product.quantity !== undefined ? parseFloat(product.quantity.toString()) : 0;
      const price = product.salesPrice !== undefined ? parseFloat(product.salesPrice.toString()) : 0;
      const packSize = product.packSizePd !== undefined ? parseFloat(product.packSizePd.toString()) : 1;
      const lineTotal = quantity * packSize * price;
      total += lineTotal;
    });
    const totalAmountSpan = document.getElementById('total-amount');
    totalAmountSpan.textContent = total.toLocaleString('en-US', {
      style: 'currency',
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const totalPriceInput = document.getElementById('total_price');
    totalPriceInput.value = total.toFixed(2);
    return total;
  }
  hasValidQuantities(products) {
    let hasQuantity = false;
    let invalidQuantity = false;
    products.forEach(product => {
      const quantity = product.quantity !== undefined ? parseFloat(product.quantity.toString()) : NaN;
      if (isNaN(quantity) || quantity < 0) {
        invalidQuantity = true;
      } else if (quantity > 0) {
        hasQuantity = true;
      }
    });
    return hasQuantity && !invalidQuantity;
  }
  static #_ = this.ɵfac = function OrderFormService_Factory(t) {
    return new (t || OrderFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: OrderFormService,
    factory: OrderFormService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 3712:
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarService: () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);


class SnackbarService {
  constructor(matSnackBar) {
    this.matSnackBar = matSnackBar;
    this.duration = 10000;
    this.verticalPosition = 'bottom';
    this.horizontalPos = 'center';
    this.action = 'Hide';
  }
  showSnackBar(message, style) {
    this.matSnackBar.open(message, this.action, {
      duration: this.duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPos,
      panelClass: style
    });
  }
  static #_ = this.ɵfac = function SnackbarService_Factory(t) {
    return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SnackbarService,
    factory: SnackbarService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 553:
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
  apiKey: 'devKey',
  apiUrl: 'https://uat-pffc.onrender.com/api'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map