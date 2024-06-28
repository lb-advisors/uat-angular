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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
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
    styles: [".tabs[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n    margin-top: 1em;\n}\n\n.active-link[_ngcontent-%COMP%] {\n    color: #F20B22;\n}\n\na[_ngcontent-%COMP%] {\n    padding: 20px;\n    text-decoration: none;\n    color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n    color: lightgray;\n}\n\na.active-link[_ngcontent-%COMP%] {\n    background-color: rgb(8, 20, 44) !important;\n}\n\n.valign-center[_ngcontent-%COMP%] {\n    display: inline-flex;\n    vertical-align: middle;\n    align-items: center;\n}\n\n#a[_ngcontent-%COMP%] {\n    display: inline;\n}\n\n#a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    padding: 10px;\n}\n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(8, 20, 44) !important;\n    width: 100%;\n    padding: 10px 0; \n\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n    background-color: rgb(8, 20, 44) !important;\n    width: 100%;\n}\n\n.text-align-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.logo[_ngcontent-%COMP%] {\n    max-height: 70px; \n\n}\n\n.spacer[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLGVBQWUsRUFBRSxtQ0FBbUM7QUFDeEQ7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCLEVBQUUsd0NBQXdDO0FBQzlEOztBQUVBO0lBQ0ksT0FBTztBQUNYIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5hY3RpdmUtbGluayB7XG4gICAgY29sb3I6ICNGMjBCMjI7XG59XG5cbmEge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlcixcbmE6YWN0aXZlIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG5hLmFjdGl2ZS1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgMjAsIDQ0KSAhaW1wb3J0YW50O1xufVxuXG4udmFsaWduLWNlbnRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4jYSBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG5tYXQtaWNvbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDIwLCA0NCkgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7IC8qIEFkZCBzb21lIHBhZGRpbmcgdG8gdGhlIGhlYWRlciAqL1xufVxuXG5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDIwLCA0NCkgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nbyB7XG4gICAgbWF4LWhlaWdodDogNzBweDsgLyogRW5zdXJlIHRoZSBsb2dvIGZpdHMgd2l0aGluIHRoZSBiYXIgKi9cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_driver_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/driver-route.service */ 1314);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);








function DriverRouteComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function DriverRouteComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Driver Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r21.driver_name, " ");
  }
}
function DriverRouteComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invoice Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r22.invoice_number, " ");
  }
}
function DriverRouteComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delivery Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r23.delivery_date, " ");
  }
}
function DriverRouteComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r24.priority, " ");
  }
}
function DriverRouteComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delivery Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r25.delivery_address_1, " ");
  }
}
function DriverRouteComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Customer Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r26.customer_phone, " ");
  }
}
function DriverRouteComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Planned Arrival Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r27.planned_arrival_time, " ");
  }
}
function DriverRouteComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actual Arrival Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DriverRouteComponent_td_37_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const element_r28 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.hasArrived(element_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r28.actual_arrival_time ? "Arrived" : "Mark as Arrived", " ");
  }
}
function DriverRouteComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DriverRouteComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r31.comments, " ");
  }
}
function DriverRouteComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 27);
  }
}
function DriverRouteComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 28);
  }
}
class DriverRouteComponent {
  constructor(driverRouteService, router, route) {
    this.driverRouteService = driverRouteService;
    this.router = router;
    this.route = route;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource();
    this.selectedDriver = '';
    this.deliveryDate = new Date().toISOString().split('T')[0]; // Default to today's date in YYYY-MM-DD format
    this.errorMessage = '';
    this.displayedColumns = ['driver_name', 'invoice_number', 'delivery_date', 'priority', 'delivery_address_1', 'customer_phone', 'planned_arrival_time', 'actual_arrival_time', 'comments'];
    this.isProduction = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
  }
  ngOnInit() {
    console.log('ngOnInit');
    // Subscribe to route parameters
    this.route.queryParams.subscribe(params => {
      this.selectedDriver = params['driverName'] || '';
      this.deliveryDate = params['deliveryDate'] || new Date().toISOString().split('T')[0];
      this.loadDeliveryRoutes();
    });
  }
  loadDeliveryRoutes() {
    const driver = this.selectedDriver;
    const date = this.formatDate(this.deliveryDate);
    if (driver) {
      console.log(`Fetching routes for driver: ${driver} on date: ${date}`);
      this.driverRouteService.getRoutes(driver, date).subscribe(routes => {
        console.log('Fetched routes:', routes);
        this.dataSource.data = routes;
        this.errorMessage = ''; // Clear error message if successful
      }, error => {
        console.error('Error fetching routes:', error);
        this.errorMessage = 'Error fetching data, please try again later';
      });
    }
  }
  applyFilter() {
    this.router.navigate(['/driver'], {
      queryParams: {
        driverName: this.selectedDriver,
        deliveryDate: this.deliveryDate
      }
    });
  }
  formatDate(date) {
    // Ensure the date is in YYYY-MM-DD format
    return new Date(date).toISOString().split('T')[0];
  }
  hasArrived(deliveryRoute) {
    deliveryRoute.actual_arrival_time = deliveryRoute.actual_arrival_time ? '' : new Date().toISOString();
    // Send a PATCH request to update the actual arrival time on the server
    this.driverRouteService.updateRoute(deliveryRoute.id.toString(), {
      actual_arrival_time: deliveryRoute.actual_arrival_time
    }).subscribe(updatedRoute => {
      console.log('Route updated:', updatedRoute);
    }, error => {
      console.error('Error updating route:', error);
      this.errorMessage = 'Error updating route, please try again later';
    });
  }
  filterRoutes() {
    this.loadDeliveryRoutes();
  }
  static #_ = this.ɵfac = function DriverRouteComponent_Factory(t) {
    return new (t || DriverRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_driver_route_service__WEBPACK_IMPORTED_MODULE_1__.DriverRouteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DriverRouteComponent,
    selectors: [["app-driver-route"]],
    decls: 43,
    vars: 6,
    consts: [[1, "container"], [1, "driver-routes-title"], [1, "filters"], ["for", "driver-filter"], ["id", "driver-filter", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "date-filter"], ["id", "date-filter", "type", "date", 3, "ngModel", "ngModelChange"], [3, "click"], ["class", "error-message", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", "driver-routes-grid", 3, "dataSource"], ["matColumnDef", "driver_name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "invoice_number"], ["matColumnDef", "delivery_date"], ["matColumnDef", "priority"], ["matColumnDef", "delivery_address_1"], ["matColumnDef", "customer_phone"], ["matColumnDef", "planned_arrival_time"], ["matColumnDef", "actual_arrival_time"], ["matColumnDef", "comments"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "error-message"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function DriverRouteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Driver Routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Driver Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DriverRouteComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.selectedDriver = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Select Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DriverRouteComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.deliveryDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DriverRouteComponent_Template_button_click_10_listener() {
          return ctx.applyFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DriverRouteComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DriverRouteComponent_th_15_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DriverRouteComponent_td_16_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DriverRouteComponent_th_18_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DriverRouteComponent_td_19_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DriverRouteComponent_th_21_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DriverRouteComponent_td_22_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DriverRouteComponent_th_24_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DriverRouteComponent_td_25_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DriverRouteComponent_th_27_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DriverRouteComponent_td_28_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](29, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DriverRouteComponent_th_30_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, DriverRouteComponent_td_31_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](32, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DriverRouteComponent_th_33_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, DriverRouteComponent_td_34_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](35, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, DriverRouteComponent_th_36_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, DriverRouteComponent_td_37_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](38, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, DriverRouteComponent_th_39_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, DriverRouteComponent_td_40_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, DriverRouteComponent_tr_41_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, DriverRouteComponent_tr_42_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedDriver);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.deliveryDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.driver-routes-title[_ngcontent-%COMP%] {\n    font-size: 30px; \n\n    text-decoration: underline; \n\n    margin-top: 0; \n\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 97.3%;\n    background-color: rgba(0, 16, 46, 1); \n\n    padding: 10px;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px; \n\n    border-radius: 8px;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    font-size: 30px; \n\n    text-decoration: underline; \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    justify-content: center; \n\n    gap: 10px; \n\n    align-items: center;\n    font-size: 18px; \n\n}\n\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.inventory-grid[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    text-align: center; \n\n    border-bottom: 1px solid #ccc; \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: rgba(0, 16, 46, 1); \n\n    color: #ffffff; \n\n    font-weight: bold; \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td.wrap[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.arrived[_ngcontent-%COMP%] {\n    background-color: #EEEDEB;\n    font-weight: bold;\n}\n\n@media (max-width: 600px) {\n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 95%;\n        margin: 5px;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 10px;\n    }\n}\n\n\n\n.underlined[_ngcontent-%COMP%] {\n    text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kcml2ZXItcm91dGUvZHJpdmVyLXJvdXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUscUJBQXFCO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZSxFQUFFLDBCQUEwQjtJQUMzQywwQkFBMEIsRUFBRSx1QkFBdUI7SUFDbkQsYUFBYSxFQUFFLGtEQUFrRDtBQUNyRTs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUIsRUFBRSx1Q0FBdUM7SUFDbEUsY0FBYyxFQUFFLHVDQUF1QztJQUN2RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsaURBQWlEO0lBQ3ZGLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYSxFQUFFLG1DQUFtQztJQUNsRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFFLGtDQUFrQztJQUNuRCwwQkFBMEIsRUFBRSx1QkFBdUI7QUFDdkQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QixFQUFFLDhCQUE4QjtJQUN2RCxTQUFTLEVBQUUseUNBQXlDO0lBQ3BELG1CQUFtQjtJQUNuQixlQUFlLEVBQUUsdUJBQXVCO0FBQzVDOztBQUVBO0lBQ0ksZUFBZSxFQUFFLHVCQUF1QjtBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGtCQUFrQixFQUFFLHlDQUF5QztJQUM3RCw2QkFBNkIsRUFBRSxxQkFBcUI7QUFDeEQ7O0FBRUE7O0lBRUksb0NBQW9DLEVBQUUsMkNBQTJDO0lBQ2pGLGNBQWMsRUFBRSx1Q0FBdUM7SUFDdkQsaUJBQWlCLEVBQUUsMEJBQTBCO0FBQ2pEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSwwQkFBMEI7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiBMaWdodCBncmV5IGJhY2tncm91bmQgZm9yIHRoZSBib2R5ICovXG4gICAgY29sb3I6ICMwMDAwMDA7IC8qIEJsYWNrIHRleHQgY29sb3IgKi9cbn1cblxuLmRyaXZlci1yb3V0ZXMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDsgLyogU2V0IGZvbnQgc2l6ZSB0byAzMHB4ICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIFVuZGVybGluZSB0aGUgdGV4dCAqL1xuICAgIG1hcmdpbi10b3A6IDA7IC8qIEFkanVzdCBtYXJnaW4gdG8gcmVkdWNlIHdoaXRlIHNwYWNlIGlmIG5lZWRlZCAqL1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGNvbG9yOiAjMDAwMDAwOyAvKiBCbGFjayB0ZXh0IGNvbG9yIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk3LjMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTsgLyogRGFyayBibHVlIGJhY2tncm91bmQgZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IHRoZSBsb2dvIHNpemUgYXMgbmVlZGVkICovXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uaW52ZW50b3J5LXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDsgLyogTWFrZSB0aGUgdGV4dCBhIGxpdHRsZSBiaWdnZXIgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogVW5kZXJsaW5lIHRoZSB0ZXh0ICovXG59XG5cbi5maWx0ZXJzIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGZpbHRlciBzZWN0aW9uICovXG4gICAgZ2FwOiAxMHB4OyAvKiBBZGRzIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBmaWx0ZXIgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5maWx0ZXJzIGxhYmVsLCAuZmlsdGVycyBzZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5maWx0ZXJzIHNlbGVjdCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaW52ZW50b3J5LWdyaWQsIC5kcml2ZXItcm91dGVzLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmludmVudG9yeS1ncmlkIHRoLCAuaW52ZW50b3J5LWdyaWQgdGQsXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRoLCAuZHJpdmVyLXJvdXRlcy1ncmlkIHRkIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHRleHQgaW4gaGVhZGVycyBhbmQgY2VsbHMgKi9cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsgLyogSG9yaXpvbnRhbCBsaW5lcyAqL1xufVxuXG4uaW52ZW50b3J5LWdyaWQgdGgsXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7IC8qIERhcmsgYmx1ZSBiYWNrZ3JvdW5kIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIHRleHQgY29sb3IgZm9yIHRhYmxlIGhlYWRlcnMgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCBmb250IGZvciBoZWFkZXJzICovXG59XG5cbi5kcml2ZXItcm91dGVzLWdyaWQgdGQud3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5hcnJpdmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFREVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaW52ZW50b3J5LWdyaWQgdGgsIC5pbnZlbnRvcnktZ3JpZCB0ZCxcbiAgICAuZHJpdmVyLXJvdXRlcy1ncmlkIHRoLCAuZHJpdmVyLXJvdXRlcy1ncmlkIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG5cbiAgICAuZmlsdGVycyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmZpbHRlcnMgbGFiZWwsIC5maWx0ZXJzIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cblxuLyogVW5kZXJsaW5lZCB0ZXh0IGZvciBEcml2ZXIgUm91dGVzICovXG4udW5kZXJsaW5lZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



function InventoryComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.CompItemID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.ProfileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.UnitTypePD);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.PackSizePD);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](11, 6, item_r1.SalesPrice, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Quantity);
  }
}
class InventoryComponent {
  constructor() {
    this.filters = {
      CompItemID: '',
      ProfileDescription: '',
      UnitTypePD: '',
      PackSizePD: '',
      SalesPrice: '',
      Quantity: ''
    };
    this.inventoryItems = [{
      CompItemID: 7,
      ProfileDescription: 'Cold-Smoked Salmon Sliced Skinless Deluxe 16oz NCS',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 18.11,
      Quantity: 24
    }, {
      CompItemID: 13,
      ProfileDescription: 'Shrimp 16-20 P&D White Tail-On Raw Frozen',
      UnitTypePD: 'Cs',
      PackSizePD: 10,
      SalesPrice: 7.54,
      Quantity: 14
    }, {
      CompItemID: 26,
      ProfileDescription: 'Salmon Atlantic Fillet Fresh 2-3 E-Trim Skin-Off 10lb',
      UnitTypePD: 'Lbs',
      PackSizePD: 1,
      SalesPrice: 9.71,
      Quantity: 10
    }, {
      CompItemID: 44,
      ProfileDescription: 'OYSTER SHIGOKU LIVE',
      UnitTypePD: 'Pcs',
      PackSizePD: 1,
      SalesPrice: 1.35,
      Quantity: 28
    }, {
      CompItemID: 99,
      ProfileDescription: 'ALBACORE SUSHI LOIN FROZEN',
      UnitTypePD: 'Pcs',
      PackSizePD: 1,
      SalesPrice: 10.7,
      Quantity: 25
    }, {
      CompItemID: 143,
      ProfileDescription: 'Roe Caviar Salmon (IKURA) 1Kg Frz C-1',
      UnitTypePD: 'Pck',
      PackSizePD: 2.2,
      SalesPrice: 60.02,
      Quantity: 4
    }, {
      CompItemID: 150,
      ProfileDescription: 'CRAB MEAT DUNGENESS FRESH 1 LB',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 40.98,
      Quantity: 34
    }, {
      CompItemID: 153,
      ProfileDescription: 'Cold-Smoked Salmon Fillet Sliced Deluxe With Skin NCS',
      UnitTypePD: 'Pcs',
      PackSizePD: 3,
      SalesPrice: 13.89,
      Quantity: 30
    }, {
      CompItemID: 171,
      ProfileDescription: 'Scallop Processed 10-20 Frozen',
      UnitTypePD: 'Pck',
      PackSizePD: 5,
      SalesPrice: 12.28,
      Quantity: 11
    }, {
      CompItemID: 224,
      ProfileDescription: 'TUNA BLUEFINA BACK LOIN SKIN-ON BLI FRESH',
      UnitTypePD: 'Lbs',
      PackSizePD: 1,
      SalesPrice: 19.99,
      Quantity: 21
    }, {
      CompItemID: 326,
      ProfileDescription: 'Cold-Smoked Salmon Fillet Sliced With-Skin Deluxe *NOIR*',
      UnitTypePD: 'Side',
      PackSizePD: 3,
      SalesPrice: 10.72,
      Quantity: 30
    }, {
      CompItemID: 426,
      ProfileDescription: 'Octopus Spanish 6-8 Whole Raw Frozen',
      UnitTypePD: 'Pcs',
      PackSizePD: 7,
      SalesPrice: 7.15,
      Quantity: 18
    }, {
      CompItemID: 446,
      ProfileDescription: 'Lobster Live Maine Cull Medium',
      UnitTypePD: 'Pcs',
      PackSizePD: 3,
      SalesPrice: 18.17,
      Quantity: 12
    }, {
      CompItemID: 465,
      ProfileDescription: 'Bass Sea Chilean (Toothfish) Fillet Skin-Off PF',
      UnitTypePD: 'Lbs',
      PackSizePD: 1,
      SalesPrice: 29.23,
      Quantity: 6
    }, {
      CompItemID: 602,
      ProfileDescription: 'PRODUCE OHBA (PERILLA-LEAVES)',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 8.8,
      Quantity: 16
    }, {
      CompItemID: 603,
      ProfileDescription: 'PRODUCE KAIWARE (RADISH-SPROUTS)',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 1.45,
      Quantity: 6
    }, {
      CompItemID: 628,
      ProfileDescription: 'LOBSTER MEAT CK (CLAW / KNUCKLE) FROZEN',
      UnitTypePD: 'Cs',
      PackSizePD: 12,
      SalesPrice: 35.67,
      Quantity: 47
    }, {
      CompItemID: 658,
      ProfileDescription: 'Cold-Smoked Salmon Sliced Skinless Deluxe 8oz *NOIR*',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 7.39,
      Quantity: 29
    }, {
      CompItemID: 715,
      ProfileDescription: 'Marinated Anchovies Fresh 2.2#',
      UnitTypePD: 'Cs',
      PackSizePD: 8.8,
      SalesPrice: 7.99,
      Quantity: 15
    }, {
      CompItemID: 806,
      ProfileDescription: 'Clam Juice 1x12 Case',
      UnitTypePD: 'Cs',
      PackSizePD: 1,
      SalesPrice: 56.54,
      Quantity: 2
    }, {
      CompItemID: 845,
      ProfileDescription: 'OYSTER FAT BASTARD LIVE',
      UnitTypePD: 'Pcs',
      PackSizePD: 1,
      SalesPrice: 1.45,
      Quantity: 6
    }, {
      CompItemID: 949,
      ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 8 OZ - OSSETRA ROYAL',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 154.96,
      Quantity: 12
    }, {
      CompItemID: 1129,
      ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 16 OZ - OSSETRA ROYAL',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 320,
      Quantity: 33
    }, {
      CompItemID: 1336,
      ProfileDescription: 'Cold-Smoked Escolar Skin-Off 8oz NCS',
      UnitTypePD: 'Pcs',
      PackSizePD: 1,
      SalesPrice: 7.9,
      Quantity: 38
    }, {
      CompItemID: 1339,
      ProfileDescription: 'GINGER WHITE SUSHI PICKLED 20# BUCKET FRESH',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 26.39,
      Quantity: 29
    }, {
      CompItemID: 1388,
      ProfileDescription: 'WASABI KIZAMI CHOPPED FROZEN 3.5oz',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 5.05,
      Quantity: 7
    }, {
      CompItemID: 1410,
      ProfileDescription: 'Salmon Scottish-Sea 6+ Kg Whole Fresh / *SCALED* (GROSS)',
      UnitTypePD: 'Pcs',
      PackSizePD: 15,
      SalesPrice: 8.92,
      Quantity: 14
    }, {
      CompItemID: 1460,
      ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 1 OZ - OSSETRA ROYAL',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 25,
      Quantity: 22
    }, {
      CompItemID: 150,
      ProfileDescription: 'CRAB MEAT DUNGENESS FRESH 1 LB',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 40.98,
      Quantity: 34
    }, {
      CompItemID: 1535,
      ProfileDescription: 'Sturgeon Whole Head-On Gutted',
      UnitTypePD: 'Pcs',
      PackSizePD: 15,
      SalesPrice: 7.86,
      Quantity: 6
    }, {
      CompItemID: 1631,
      ProfileDescription: 'Clam Whole Cooked Frozen',
      UnitTypePD: 'Cs',
      PackSizePD: 10,
      SalesPrice: 4.2,
      Quantity: 9
    }, {
      CompItemID: 1636,
      ProfileDescription: 'Salad Octopus (Tako Sansai) Japan 4.4# FROZEN',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 49.16,
      Quantity: 23
    }, {
      CompItemID: 1646,
      ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 2 OZ - OSSETRA ROYAL',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 43.01,
      Quantity: 40
    }, {
      CompItemID: 1808,
      ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 1 OZ - KALUGA IMPERIAL',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 26.99,
      Quantity: 37
    }, {
      CompItemID: 1809,
      ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 4 OZ - KALUGA IMPERIAL',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 80,
      Quantity: 34
    }, {
      CompItemID: 1884,
      ProfileDescription: 'Tuna Yellow-Fin Loin #1 Skin-On BLI Fresh',
      UnitTypePD: 'Lbs',
      PackSizePD: 1,
      SalesPrice: 22.71,
      Quantity: 1
    }, {
      CompItemID: 1919,
      ProfileDescription: 'Bass Striped Hybrid Whole Fresh EXTRA-JUMBO / Fillet Skin-Off (GROSS)',
      UnitTypePD: 'Pcs',
      PackSizePD: 2.5,
      SalesPrice: 7.25,
      Quantity: 20
    }, {
      CompItemID: 2209,
      ProfileDescription: 'ROE PRESTIGE CAVIAR SALMON (IKURA) 1KG FROZEN',
      UnitTypePD: 'Pck',
      PackSizePD: 2.2,
      SalesPrice: 34.01,
      Quantity: 22
    }, {
      CompItemID: 224,
      ProfileDescription: 'TUNA BLUEFINA BACK LOIN SKIN-ON BLI FRESH',
      UnitTypePD: 'Lbs',
      PackSizePD: 1,
      SalesPrice: 19.99,
      Quantity: 21
    }, {
      CompItemID: 715,
      ProfileDescription: 'Marinated Anchovies Fresh 2.2#',
      UnitTypePD: 'Pck',
      PackSizePD: 2.2,
      SalesPrice: 10.39,
      Quantity: 15
    }, {
      CompItemID: 603,
      ProfileDescription: 'PRODUCE KAIWARE (RADISH-SPROUTS)',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 1.45,
      Quantity: 6
    }, {
      CompItemID: 625,
      ProfileDescription: 'Tuna Loin Yellow-Fin 30# Frozen',
      UnitTypePD: 'Cs',
      PackSizePD: 30,
      SalesPrice: 9.95,
      Quantity: 24
    }, {
      CompItemID: 628,
      ProfileDescription: 'LOBSTER MEAT CK (CLAW / KNUCKLE) FROZEN',
      UnitTypePD: 'Cs',
      PackSizePD: 12,
      SalesPrice: 43.23,
      Quantity: 47
    }, {
      CompItemID: 949,
      ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 8 OZ - OSSETRA ROYAL',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 160,
      Quantity: 22
    }, {
      CompItemID: 1339,
      ProfileDescription: 'GINGER WHITE SUSHI PICKLED 20# BUCKET FRESH',
      UnitTypePD: 'Pck',
      PackSizePD: 1,
      SalesPrice: 26.39,
      Quantity: 29
    }];
  }
  ngOnInit() {}
  filteredInventoryItems() {
    return this.inventoryItems.sort((a, b) => a.CompItemID - b.CompItemID) // Sort by CompItemID
    .filter(item => {
      return (!this.filters.CompItemID || item.CompItemID.toString().includes(this.filters.CompItemID)) && (!this.filters.ProfileDescription || item.ProfileDescription.toLowerCase().includes(this.filters.ProfileDescription.toLowerCase())) && (!this.filters.UnitTypePD || item.UnitTypePD.toLowerCase().includes(this.filters.UnitTypePD.toLowerCase())) && (!this.filters.PackSizePD || item.PackSizePD.toString().includes(this.filters.PackSizePD)) && (!this.filters.SalesPrice || item.SalesPrice.toString().includes(this.filters.SalesPrice)) && (!this.filters.Quantity || item.Quantity.toString().includes(this.filters.Quantity));
    });
  }
  static #_ = this.ɵfac = function InventoryComponent_Factory(t) {
    return new (t || InventoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InventoryComponent,
    selectors: [["app-inventory"]],
    decls: 32,
    vars: 7,
    consts: [[1, "content"], [1, "container"], [1, "inventory-title"], [1, "filters"], ["type", "text", "placeholder", "Filter by Item ID", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Filter by Product", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Filter by Units", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Filter by Pack Size", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Filter by Price", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Filter by Qty", 3, "ngModel", "ngModelChange"], [1, "inventory-grid"], [1, "shrinkable-header"], [1, "shrinkable-header", "product-header"], [4, "ngFor", "ngForOf"], [1, "wrap", "product-column"]],
    template: function InventoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.filters.CompItemID = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.filters.ProfileDescription = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.filters.UnitTypePD = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.filters.PackSizePD = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.filters.SalesPrice = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.filters.Quantity = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 10)(12, "thead")(13, "tr")(14, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InventoryComponent_tr_31_Template, 14, 11, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filters.CompItemID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filters.ProfileDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filters.UnitTypePD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filters.PackSizePD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filters.SalesPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filters.Quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredInventoryItems());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n    margin-top: 5px; \n\n    font-size: 30px; \n\n    text-decoration: underline; \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px; \n\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    flex: 1 1 calc(50% - 20px); \n\n    min-width: 120px;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: rgba(0, 16, 46, 1); \n\n    color: #ffffff; \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   td.wrap[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.shrinkable-header[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-break: break-word;\n    text-align: center;\n}\n\n.product-header[_ngcontent-%COMP%] {\n    width: 100px; \n\n}\n\n.product-column[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-break: break-word;\n}\n\n\n\n@media (max-width: 600px) {\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        flex: 1 1 100%; \n\n        margin-bottom: 10px;\n    }\n\n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 95%;\n        margin: 5px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUscUJBQXFCO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUsdUNBQXVDO0lBQ3ZELHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWUsRUFBRSwwQkFBMEI7SUFDM0MsZUFBZSxFQUFFLGtDQUFrQztJQUNuRCwwQkFBMEIsRUFBRSx1QkFBdUI7QUFDdkQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTLEVBQUUseUNBQXlDO0FBQ3hEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMEJBQTBCLEVBQUUseUNBQXlDO0lBQ3JFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0MsRUFBRSwyQ0FBMkM7SUFDakYsY0FBYyxFQUFFLHVDQUF1QztBQUMzRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVksRUFBRSwyREFBMkQ7QUFDN0U7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOzs7O0FBSUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGNBQWMsRUFBRSwwQkFBMEI7UUFDMUMsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGhlIGJvZHkgKi9cbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQmxhY2sgdGV4dCBjb2xvciAqL1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGNvbG9yOiAjMDAwMDAwOyAvKiBCbGFjayB0ZXh0IGNvbG9yIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmludmVudG9yeS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogNXB4OyAvKiBSZWR1Y2UgdGhlIHRvcCBtYXJnaW4gKi9cbiAgICBmb250LXNpemU6IDMwcHg7IC8qIE1ha2UgdGhlIHRleHQgYSBsaXR0bGUgYmlnZ2VyICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIFVuZGVybGluZSB0aGUgdGV4dCAqL1xufVxuXG4uZmlsdGVycyB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4OyAvKiBBZGRzIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBmaWx0ZXIgKi9cbn1cblxuLmZpbHRlcnMgaW5wdXQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmbGV4OiAxIDEgY2FsYyg1MCUgLSAyMHB4KTsgLyogQWRqdXN0IHdpZHRoIHRvIG1hdGNoIGNvbHVtbiBoZWFkZXJzICovXG4gICAgbWluLXdpZHRoOiAxMjBweDtcbn1cblxuLmludmVudG9yeS1ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB0aCwgLmludmVudG9yeS1ncmlkIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpOyAvKiBEYXJrIGJsdWUgYmFja2dyb3VuZCBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJzICovXG59XG5cbi5pbnZlbnRvcnktZ3JpZCB0ZC53cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnNocmlua2FibGUtaGVhZGVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZHVjdC1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDBweDsgLyogQWRqdXN0IHRoaXMgdmFsdWUgYXMgbmVlZGVkIHRvIG1ha2UgdGhlIGNvbHVtbiB0aGlubmVyICovXG59XG5cbi5wcm9kdWN0LWNvbHVtbiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmZpbHRlcnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5maWx0ZXJzIGlucHV0IHtcbiAgICAgICAgZmxleDogMSAxIDEwMCU7IC8qIEZ1bGwgd2lkdGggZm9yIGlucHV0cyAqL1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5pbnZlbnRvcnktZ3JpZCB0aCwgLmludmVudG9yeS1ncmlkIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function OrderFormComponent_div_5_tr_35_Template(rf, ctx) {
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
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.sales_rep);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.product_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.unit_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.pack_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 14, order_r3.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 17, order_r3.total_price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.delivery_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.customer_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.sales_rep_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.order_timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.customer_po);
  }
}
function OrderFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " We already have an order for you submitted today. Please contact your sales rep if you like to change this order. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 6)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sales Rep");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Product Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Delivery Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Customer Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sales Rep Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Order Timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Customer PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, OrderFormComponent_div_5_tr_35_Template, 31, 20, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderFormComponent_div_5_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
  }
}
function OrderFormComponent_form_6_div_15_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const shipto_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", shipto_r10[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-id", shipto_r10[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](shipto_r10[1]);
  }
}
function OrderFormComponent_form_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ship To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_div_15_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.selectedShipto = $event);
    })("change", function OrderFormComponent_form_6_div_15_Template_select_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.updateShiptoId());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrderFormComponent_form_6_div_15_option_4_Template, 2, 3, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_div_15_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.selectedShipto = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.selectedShipto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.orderData.shipto_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.selectedShipto);
  }
}
function OrderFormComponent_form_6_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_tr_32_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const product_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r15.quantity = $event);
    })("input", function OrderFormComponent_form_6_tr_32_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.updateRowStyle($event));
    })("blur", function OrderFormComponent_form_6_tr_32_Template_input_blur_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.checkEmptyInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_tr_32_Template_input_ngModelChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const product_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r15.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_tr_32_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const product_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r15.unit_type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_tr_32_Template_input_ngModelChange_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const product_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r15.pack_size = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_tr_32_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const product_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r15.price = $event);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r15.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "quantity_", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", product_r15.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-price", product_r15.price)("data-pack-size", product_r15.pack_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "description_", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r15.description)("ngModel", product_r15.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "unit_type_", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r15.unit_type)("ngModel", product_r15.unit_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "pack_size_", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r15.pack_size)("ngModel", product_r15.pack_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "price_", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 21, product_r15.price, "1.2-2"))("ngModel", product_r15.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r15.unit_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r15.pack_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 24, product_r15.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 27, product_r15.quantity * product_r15.pack_size * product_r15.price, "1.2-2"), "");
  }
}
function OrderFormComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_form_6_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.submitOrder(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "div")(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Customer Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00A0\u00A0Sales Rep:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OrderFormComponent_form_6_div_15_Template, 6, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 6)(17, "thead")(18, "tr")(19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, OrderFormComponent_form_6_tr_32_Template, 20, 30, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.orderData.total_price = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22)(39, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Delivery Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.deliveryDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0\u00A0Customer PO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.customerPo = $event);
    })("input", function OrderFormComponent_form_6_Template_input_input_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.restrictInput($event, 150));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Submit your order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.products.length = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.orderData.customer_name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.orderData.sales_rep = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.orderData.customer_email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.orderData.sales_rep_phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderFormComponent_form_6_Template_input_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.orderData.customer_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.orderData.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.orderData.sales_rep, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r1.orderData.sales_rep_phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.orderData.sales_rep_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.orderData.shipto_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.orderData.total_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.deliveryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.customerPo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.products.length)("ngModel", ctx_r1.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.orderData.customer_name)("ngModel", ctx_r1.orderData.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.orderData.sales_rep)("ngModel", ctx_r1.orderData.sales_rep);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.orderData.customer_email)("ngModel", ctx_r1.orderData.customer_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.orderData.sales_rep_phone)("ngModel", ctx_r1.orderData.sales_rep_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.orderData.customer_id)("ngModel", ctx_r1.orderData.customer_id);
  }
}
class OrderFormComponent {
  constructor(orderFormService) {
    this.orderFormService = orderFormService;
    this.orders = []; // Initialize as an empty array
    this.orderData = {};
    this.products = [];
    this.selectedShipto = '';
    this.deliveryDate = '';
    this.customerPo = '';
  }
  ngOnInit() {
    const customerId = 123; // Replace with actual customer ID
    this.orderFormService.getCustomerInfo(customerId).subscribe(data => {
      this.orderData = data;
      this.products = data.products;
      this.orders = data.orders || []; // Ensure orders is set to an empty array if undefined
    });
  }

  goBack() {
    window.history.back();
  }
  updateRowStyle(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 4);
    const row = input.closest('tr');
    const quantity = parseFloat(input.value);
    if (quantity > 0) {
      row.classList.add('bold-row');
    } else {
      row.classList.remove('bold-row');
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
    this.products.forEach(product => {
      const quantity = parseFloat(product.quantity);
      const lineTotal = quantity * product.pack_size * product.price;
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
  }
  submitOrder(form) {
    const errorMessageDiv = document.querySelector('.error-message');
    errorMessageDiv.textContent = '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deliveryDate = new Date(this.deliveryDate);
    deliveryDate.setHours(0, 0, 0, 0);
    if (!form.valid) {
      errorMessageDiv.textContent = 'Please fill out the form correctly.';
      return;
    }
    if (deliveryDate < today) {
      errorMessageDiv.textContent = 'Please select a date which is not in the past.';
      return;
    }
    if (deliveryDate.getTime() === today.getTime()) {
      errorMessageDiv.textContent = 'Please order at least one day in advance.';
      return;
    }
    const maxDeliveryDate = new Date(today);
    maxDeliveryDate.setMonth(maxDeliveryDate.getMonth() + 3);
    if (deliveryDate > maxDeliveryDate) {
      errorMessageDiv.textContent = 'Please only submit orders delivered within the next 3 months.';
      return;
    }
    if (deliveryDate.getDay() === 0) {
      // 0 means Sunday
      errorMessageDiv.textContent = 'We are closed on Sundays.';
      return;
    }
    let hasQuantity = false;
    let invalidQuantity = false;
    this.products.forEach(product => {
      const quantity = parseFloat(product.quantity);
      if (quantity === null || isNaN(quantity)) {
        errorMessageDiv.textContent = 'Please put in a non-blank quantity to submit your order.';
        invalidQuantity = true;
      } else if (quantity < 0) {
        errorMessageDiv.textContent = 'Negative numbers are not accepted in the quantity.';
        invalidQuantity = true;
      } else if (quantity > 0) {
        hasQuantity = true;
      }
    });
    if (invalidQuantity) {
      return;
    }
    if (!hasQuantity) {
      errorMessageDiv.textContent = 'Please put in a quantity to submit your order.';
      return;
    }
    const totalPrice = parseFloat(document.getElementById('total_price').value);
    if (totalPrice > 10000) {
      errorMessageDiv.textContent = 'The total amount has to be less than $10,000.';
      return;
    }
    const orderData = {
      customer_id: this.orderData.customer_id,
      customer_name: this.orderData.customer_name,
      sales_rep: this.orderData.sales_rep,
      customer_email: this.orderData.customer_email,
      sales_rep_phone: this.orderData.sales_rep_phone,
      total_price: totalPrice,
      delivery_date: this.deliveryDate,
      submitter_ip: '',
      order_id: '',
      customer_po: this.customerPo,
      shipto_id: this.selectedShipto,
      shipto_name: '',
      products: this.products
    };
    this.orderFormService.placeOrder(orderData).subscribe(response => {
      alert('Order submitted successfully');
      // Redirect or update UI as needed
    }, error => {
      errorMessageDiv.textContent = 'Failed to submit order. Please try again later.';
    });
  }
  restrictInput(event, maxLength) {
    const input = event.target;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }
  updateShiptoId() {
    const shiptoSelect = document.getElementById('shipto-name');
    const selectedOption = shiptoSelect.options[shiptoSelect.selectedIndex];
    const shiptoIdInput = document.getElementById('shipto-id');
    shiptoIdInput.value = selectedOption.getAttribute('data-id');
  }
  static #_ = this.ɵfac = function OrderFormComponent_Factory(t) {
    return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_form_service__WEBPACK_IMPORTED_MODULE_0__.OrderFormService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderFormComponent,
    selectors: [["app-order-form"]],
    decls: 7,
    vars: 2,
    consts: [[1, "container"], [1, "image-container"], ["src", "assets/logo.png", "alt", "Golden State Sea Food Logo"], [4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "error-message", 2, "color", "red"], [1, "order-grid"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "ngSubmit"], ["orderForm", "ngForm"], [1, "customer-info"], ["for", "customer-name"], ["id", "customer-name"], ["for", "sales-rep"], ["id", "sales-rep"], [3, "href"], ["class", "shipto-container", 4, "ngIf"], [1, "totalCol"], [1, "total"], ["id", "total-amount"], ["type", "hidden", "name", "total_price", "id", "total_price", "value", "0.00", 3, "ngModel", "ngModelChange"], [1, "delivery-date"], ["for", "delivery-date"], ["type", "date", "id", "delivery-date", "name", "delivery_date", "required", "", 1, "calendar", 3, "ngModel", "ngModelChange"], ["for", "customer-po"], ["type", "text", "id", "customer-po", "name", "customer_po", "maxlength", "150", 3, "ngModel", "ngModelChange", "input"], ["type", "submit", 1, "submit-btn"], ["type", "hidden", "name", "nb_products", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "customer_name", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "sales_rep", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "customer_email", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "sales_rep_phone", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "customer_id", 3, "value", "ngModel", "ngModelChange"], [1, "shipto-container"], ["for", "shipto-name"], ["id", "shipto-name", "name", "shipto_name", "required", "", 1, "custom-dropdown", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "hidden", "id", "shipto-id", "name", "shipto_id", 3, "ngModel", "ngModelChange"], [3, "value"], ["type", "text", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "4", "required", "", 1, "input_quantity", 3, "name", "ngModel", "ngModelChange", "input", "blur"], ["type", "hidden", 3, "name", "value", "ngModel", "ngModelChange"], [1, "total-per-item"]],
    template: function OrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Place Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OrderFormComponent_div_5_Template, 38, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OrderFormComponent_form_6_Template, 55, 21, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders && ctx.orders.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders && ctx.orders.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    \n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.driver-routes-title[_ngcontent-%COMP%] {\n    font-size: 30px; \n\n    text-decoration: underline; \n\n    margin-top: 0; \n\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 97.3%;\n    background-color: rgba(0, 16, 46, 1); \n\n    padding: 10px;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px; \n\n    border-radius: 8px;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    font-size: 30px; \n\n    text-decoration: underline; \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    justify-content: center; \n\n    gap: 10px; \n\n    align-items: center;\n    font-size: 18px; \n\n}\n\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.inventory-grid[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    text-align: center; \n\n    border-bottom: 1px solid #ccc; \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: rgba(0, 16, 46, 1); \n\n    color: #ffffff; \n\n    font-weight: bold; \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td.wrap[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.arrived[_ngcontent-%COMP%] {\n    background-color: #EEEDEB;\n    font-weight: bold;\n}\n\n@media (max-width: 600px) {\n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 95%;\n        margin: 5px;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 10px;\n    }\n}\n\n\n\n.underlined[_ngcontent-%COMP%] {\n    text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4Qjs7SUFFOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUscUJBQXFCO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZSxFQUFFLDBCQUEwQjtJQUMzQywwQkFBMEIsRUFBRSx1QkFBdUI7SUFDbkQsYUFBYSxFQUFFLGtEQUFrRDtBQUNyRTs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUIsRUFBRSx1Q0FBdUM7SUFDbEUsY0FBYyxFQUFFLHVDQUF1QztJQUN2RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsaURBQWlEO0lBQ3ZGLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYSxFQUFFLG1DQUFtQztJQUNsRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFFLGtDQUFrQztJQUNuRCwwQkFBMEIsRUFBRSx1QkFBdUI7QUFDdkQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QixFQUFFLDhCQUE4QjtJQUN2RCxTQUFTLEVBQUUseUNBQXlDO0lBQ3BELG1CQUFtQjtJQUNuQixlQUFlLEVBQUUsdUJBQXVCO0FBQzVDOztBQUVBO0lBQ0ksZUFBZSxFQUFFLHVCQUF1QjtBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGtCQUFrQixFQUFFLHlDQUF5QztJQUM3RCw2QkFBNkIsRUFBRSxxQkFBcUI7QUFDeEQ7O0FBRUE7O0lBRUksb0NBQW9DLEVBQUUsMkNBQTJDO0lBQ2pGLGNBQWMsRUFBRSx1Q0FBdUM7SUFDdkQsaUJBQWlCLEVBQUUsMEJBQTBCO0FBQ2pEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSwwQkFBMEI7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiBMaWdodCBncmV5IGJhY2tncm91bmQgZm9yIHRoZSBib2R5ICovXG4gICAgY29sb3I6ICMwMDAwMDA7IC8qIEJsYWNrIHRleHQgY29sb3IgKi9cbn1cblxuLmRyaXZlci1yb3V0ZXMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDsgLyogU2V0IGZvbnQgc2l6ZSB0byAzMHB4ICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIFVuZGVybGluZSB0aGUgdGV4dCAqL1xuICAgIG1hcmdpbi10b3A6IDA7IC8qIEFkanVzdCBtYXJnaW4gdG8gcmVkdWNlIHdoaXRlIHNwYWNlIGlmIG5lZWRlZCAqL1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGNvbG9yOiAjMDAwMDAwOyAvKiBCbGFjayB0ZXh0IGNvbG9yIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk3LjMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTsgLyogRGFyayBibHVlIGJhY2tncm91bmQgZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IHRoZSBsb2dvIHNpemUgYXMgbmVlZGVkICovXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uaW52ZW50b3J5LXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDsgLyogTWFrZSB0aGUgdGV4dCBhIGxpdHRsZSBiaWdnZXIgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogVW5kZXJsaW5lIHRoZSB0ZXh0ICovXG59XG5cbi5maWx0ZXJzIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGZpbHRlciBzZWN0aW9uICovXG4gICAgZ2FwOiAxMHB4OyAvKiBBZGRzIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBmaWx0ZXIgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5maWx0ZXJzIGxhYmVsLCAuZmlsdGVycyBzZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5maWx0ZXJzIHNlbGVjdCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaW52ZW50b3J5LWdyaWQsIC5kcml2ZXItcm91dGVzLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmludmVudG9yeS1ncmlkIHRoLCAuaW52ZW50b3J5LWdyaWQgdGQsXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRoLCAuZHJpdmVyLXJvdXRlcy1ncmlkIHRkIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHRleHQgaW4gaGVhZGVycyBhbmQgY2VsbHMgKi9cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsgLyogSG9yaXpvbnRhbCBsaW5lcyAqL1xufVxuXG4uaW52ZW50b3J5LWdyaWQgdGgsXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7IC8qIERhcmsgYmx1ZSBiYWNrZ3JvdW5kIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIHRleHQgY29sb3IgZm9yIHRhYmxlIGhlYWRlcnMgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCBmb250IGZvciBoZWFkZXJzICovXG59XG5cbi5kcml2ZXItcm91dGVzLWdyaWQgdGQud3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5hcnJpdmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFREVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaW52ZW50b3J5LWdyaWQgdGgsIC5pbnZlbnRvcnktZ3JpZCB0ZCxcbiAgICAuZHJpdmVyLXJvdXRlcy1ncmlkIHRoLCAuZHJpdmVyLXJvdXRlcy1ncmlkIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG5cbiAgICAuZmlsdGVycyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmZpbHRlcnMgbGFiZWwsIC5maWx0ZXJzIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cblxuLyogVW5kZXJsaW5lZCB0ZXh0IGZvciBEcml2ZXIgUm91dGVzICovXG4udW5kZXJsaW5lZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



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
  constructor() {
    this.orders = [{
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4355,
      CustomerName: 'SAVORE CUISINE & EVENTS'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4490,
      CustomerName: 'THE LONELY OYSTER'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4199,
      CustomerName: 'GOURMET FOOD SOLUTIONS'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4154,
      CustomerName: 'DE LA NONNA'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4339,
      CustomerName: 'AMANTE'
    }, {
      SalesName: 'Merhy',
      CellNumber: '8184145485',
      CustomerID: 3679,
      CustomerName: 'CAROUSEL RESTAURANT'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4484,
      CustomerName: 'PHORAGE'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 751,
      CustomerName: 'CHARCOAL RESTAURANT-VENICE'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4253,
      CustomerName: 'DACSU LLC'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4713,
      CustomerName: 'FENNEL KITCHEN & BAR'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4681,
      CustomerName: 'TOPANGA SOCIAL'
    }, {
      SalesName: 'Merhy',
      CellNumber: '8184145485',
      CustomerID: 2030,
      CustomerName: 'CAROUSEL / NAIRI'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4729,
      CustomerName: 'MARINA - PASADENA'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4892,
      CustomerName: 'THE COPPER KEY'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4226,
      CustomerName: 'RAPPAHANNOCK OYSTER BAR'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4896,
      CustomerName: 'KAKKOI SUSHI'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4287,
      CustomerName: 'GO TRUCKS CATERING'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4617,
      CustomerName: 'ZA ZA ZA'
    }, {
      SalesName: 'Merhy',
      CellNumber: '8184145485',
      CustomerID: 4700,
      CustomerName: 'BUI SUSHI'
    }, {
      SalesName: 'Merhy',
      CellNumber: '8184145485',
      CustomerID: 907,
      CustomerName: 'D&K FOODS'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 846,
      CustomerName: 'REPUBLIQUE BAKERY'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4839,
      CustomerName: 'SHORT STORIES HOTEL'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4540,
      CustomerName: 'TRUFFLE BROTHERS'
    }, {
      SalesName: 'Marcelo',
      CellNumber: '2132764132',
      CustomerID: 4985,
      CustomerName: '21 OCEAN FRONT - NEWPORT BEACH'
    }, {
      SalesName: 'Marcelo',
      CellNumber: '2132764132',
      CustomerID: 4986,
      CustomerName: '401K SINNERS & SAINTS - VENICE'
    }, {
      SalesName: 'Marcelo',
      CellNumber: '2132764132',
      CustomerID: 5031,
      CustomerName: 'FRIDA CANTINA - BEVERLY HILLS'
    }, {
      SalesName: 'Marcelo',
      CellNumber: '2132764132',
      CustomerID: 5036,
      CustomerName: 'GUILLERMOS RESTAURANT - PALM DESERT'
    }, {
      SalesName: 'Merhy',
      CellNumber: '8184145485',
      CustomerID: 3681,
      CustomerName: 'ALCOVE CAFÉ'
    }, {
      SalesName: 'Merhy',
      CellNumber: '8184145485',
      CustomerID: 4210,
      CustomerName: 'FAIRMONT MIRAMAR- HOTEL & BUNGALOWS'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4178,
      CustomerName: 'POKE BAR - DOWNTOWN LA'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4336,
      CustomerName: 'SALT & OLIVE - GLENDALE'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 3735,
      CustomerName: 'LA CHA CHA CHA'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4353,
      CustomerName: 'THE BUTTERED RADISH'
    }, {
      SalesName: 'John',
      CellNumber: '2139220173',
      CustomerID: 4815,
      CustomerName: 'PHO ALLEY'
    }
    // Add more order data here
    ];

    this.salespeople = [];
    this.selectedSalesperson = null; // Initialize with null
    this.filteredOrders = [];
  }
  ngOnInit() {
    this.salespeople = Array.from(new Map(this.orders.map(order => [order.SalesName, {
      name: order.SalesName,
      cell: order.CellNumber
    }])).values());
    this.filteredOrders = this.orders;
    this.sortFilteredOrders();
  }
  filterOrders() {
    if (this.selectedSalesperson) {
      this.filteredOrders = this.orders.filter(order => order.SalesName === this.selectedSalesperson);
    } else {
      this.filteredOrders = this.orders;
    }
    this.sortFilteredOrders();
  }
  sortFilteredOrders() {
    this.filteredOrders.sort((a, b) => a.CustomerName.localeCompare(b.CustomerName));
  }
  getOrderLink(customerID) {
    return `http://example.com/order/${customerID}`; // Adjust the URL as necessary
  }

  copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }
  static #_ = this.ɵfac = function OrderListComponent_Factory(t) {
    return new (t || OrderListComponent)();
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class DriverRouteService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'https://uat-pffc.onrender.com/api';
  }
  getRoutes(driverName, deliveryDate) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('driverName', driverName).set('deliveryDate', deliveryDate);
    return this.http.get(`${this.baseUrl}/delivery-stops`, {
      params
    });
  }
  getAllRoutes() {
    return this.http.get(`${this.baseUrl}/delivery-stops`);
  }
  getRouteById(id) {
    return this.http.get(`${this.baseUrl}/delivery-stops/${id}`);
  }
  updateRoute(id, changes) {
    return this.http.patch(`${this.baseUrl}/delivery-stops/${id}`, changes);
  }
  static #_ = this.ɵfac = function DriverRouteService_Factory(t) {
    return new (t || DriverRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
    this.apiUrl = 'https://your-api-url.com/api'; // Replace with your actual API URL
  }

  getCustomerInfo(customerId) {
    return this.http.get(`${this.apiUrl}/customer/${customerId}`);
  }
  placeOrder(orderData) {
    return this.http.post(`${this.apiUrl}/order`, orderData);
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
  apiKey: 'devKey'
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