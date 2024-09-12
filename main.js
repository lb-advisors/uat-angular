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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/driver-route/driver-route.component */ 9439);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_order_links_order_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/order-links/order-links.component */ 633);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/logout/logout.component */ 9543);
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inventory/inventory.component */ 5629);
/* harmony import */ var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order-confirmation/order-confirmation.component */ 2235);
/* harmony import */ var _components_order_exists_order_exists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/order-exists/order-exists.component */ 5289);
/* harmony import */ var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-form/order-form.component */ 6501);
/* harmony import */ var _components_data_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/data/data.component */ 2871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);










 // Updated import


const routes = [{
  path: '',
  redirectTo: 'order-links',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  title: 'Home'
}, {
  path: 'driver',
  component: _components_driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_0__.DriverRouteComponent,
  title: 'Driver Route'
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
  path: 'inventory',
  component: _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_5__.InventoryComponent,
  title: 'Inventory'
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
  component: _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_8__.OrderNewComponent,
  title: 'Order Form'
}, {
  path: 'data',
  component: _components_data_data_component__WEBPACK_IMPORTED_MODULE_9__.DataComponent,
  title: 'Data'
} // Added new route
];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);









const _c0 = a0 => ({
  "warning": a0
});
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 5)(2, "a", 6)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Inventory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 7)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Order Links ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "local_shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Routes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9)(15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.showWarning));
  }
}
function AppComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "UAT ENVIRONMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.apiUrl);
  }
}
class AppComponent {
  constructor(router) {
    this.router = router;
    this.isDevMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)();
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.showWarning = false;
    this.isOrderForm = false;
    // check that UAT is not using the prod backend
    if (this.isDevMode && this.apiUrl.includes('prod')) {
      this.showWarning = true;
      alert('WARNING: Angular is in Dev mode but connected to production !!!');
    }
  }
  ngOnInit() {
    // check if we are on the order form
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        this.isOrderForm = currentRoute.includes('order-') && !currentRoute.includes('order-links');
      }
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 2,
    consts: [["color", "primary", 1, "header", 3, "ngClass"], [1, "underline"], [1, "mat-drawer-container"], [1, "container"], [1, "text-align-center"], [1, "nav-links-center"], ["mat-button", "", "routerLink", "/inventory", "routerLinkActive", "active-link"], ["mat-button", "", "routerLink", "/order-links", "routerLinkActive", "active-link"], ["mat-button", "", "routerLink", "/driver", "routerLinkActive", "active-link"], ["mat-button", "", "routerLink", "/data", "routerLinkActive", "active-link"], [1, "dev-mode"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_Conditional_0_Template, 18, 3, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "footer", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00A9 2024 - Pacific Fresh Fish Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_Conditional_8_Template, 4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.isOrderForm ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isDevMode ? 8 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: [".tabs[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n    margin-top: 1em;\n}\n\n.active-link[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    color: #333 !important;\n}\n\na[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-decoration: none;\n    color: #333; \n\n    font-size: 14px; \n\n    display: flex;\n    align-items: center;\n}\n\na[_ngcontent-%COMP%]:hover, \na[_ngcontent-%COMP%]:active {\n    color: #333; \n\n}\n\na.active-link[_ngcontent-%COMP%] {\n    background-color: #d3d3d3 !important; \n\n}\n\n.valign-center[_ngcontent-%COMP%] {\n    display: inline-flex;\n    vertical-align: middle;\n    align-items: center;\n}\n\n#a[_ngcontent-%COMP%] {\n    display: inline;\n}\n\n#a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    margin-right: 5px; \n\n}\n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center; \n\n    background-color: #ffffff;\n    width: 100%;\n    padding: 5px 0; \n\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: 100%;\n    color: #333; \n\n}\n\n.text-align-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.nav-links-center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center; \n\n    align-items: center; \n\n    width: 100%;\n}\n\n.gs-logo[_ngcontent-%COMP%] {\n    height: 50px; \n\n    border-radius: 10%;\n}\n\n.gs-logo-link[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n}\n\n\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    min-height: 95%;\n}\n\n.home-link[_ngcontent-%COMP%] {\n    display: none; \n\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    margin-right: 5px; \n\n}\n\n.dev-mode[_ngcontent-%COMP%] {\n    color: darkblue;;\n}\n\n.warning[_ngcontent-%COMP%] {\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVyxFQUFFLHlCQUF5QjtJQUN0QyxlQUFlLEVBQUUsc0JBQXNCO0lBQ3ZDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVyxFQUFFLHlCQUF5QjtBQUMxQzs7QUFFQTtJQUNJLG9DQUFvQyxFQUFFLDRDQUE0QztBQUN0Rjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUUsZ0NBQWdDO0FBQ3ZEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxjQUFjLEVBQUUsaURBQWlEO0FBQ3JFOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXLEVBQUUseUJBQXlCO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QixFQUFFLGtDQUFrQztJQUMzRCxtQkFBbUIsRUFBRSxnQ0FBZ0M7SUFDckQsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOzs7O0FBSUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYSxFQUFFLDRCQUE0QjtBQUMvQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCLEVBQUUsZ0NBQWdDO0FBQ3ZEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzM7IC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yICovXG4gICAgZm9udC1zaXplOiAxNHB4OyAvKiBTbWFsbGVyIGZvbnQgc2l6ZSAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYTpob3ZlcixcbmE6YWN0aXZlIHtcbiAgICBjb2xvcjogIzMzMzsgLyogRGFyayBncmV5IHRleHQgY29sb3IgKi9cbn1cblxuYS5hY3RpdmUtbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMyAhaW1wb3J0YW50OyAvKiBMaWdodCBncmV5IGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIGxpbmsgKi9cbn1cblxuLnZhbGlnbi1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Ege1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuI2EgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIFNwYWNlIGJldHdlZW4gaWNvbiBhbmQgdGV4dCAqL1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgbmF2IGxpbmtzICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggMDsgLyogUmVkdWNlIHBhZGRpbmcgdG8gbWFrZSB0aGUgbmF2IGJhciBsZXNzIHRhbGwgKi9cbn1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMzMzM7IC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yICovXG59XG5cbi50ZXh0LWFsaWduLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2LWxpbmtzLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBsaW5rcyBob3Jpem9udGFsbHkgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGxpbmtzIHZlcnRpY2FsbHkgKi9cbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmdzLWxvZ28ge1xuICAgIGhlaWdodDogNTBweDsgLyogSW5jcmVhc2UgdGhlIHNpemUgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5ncy1sb2dvLWxpbmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbn1cblxuXG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogOTUlO1xufVxuXG4uaG9tZS1saW5rIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIG9yaWdpbmFsIEhvbWUgbGluayAqL1xufVxuXG4ubmF2LWljb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXG59XG5cbi5kZXYtbW9kZSB7XG4gICAgY29sb3I6IGRhcmtibHVlOztcbn1cblxuLndhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class DataComponent {
  constructor(http) {
    this.http = http;
  }
  downloadOrders() {
    const url = 'https://uat-pffc.onrender.com/api/database/csv/download/orders';
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
      alert('Failed to download orders. Please try again later.');
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
    const url = 'https://uat-pffc.onrender.com/api/database/csv/upload/profiles';
    const formData = new FormData();
    formData.append('file', file);
    this.http.post(url, formData).subscribe({
      next: response => {
        alert('File uploaded successfully!');
      },
      error: error => {
        console.error('Upload failed:', error);
        alert('Failed to upload the file. Please try again.');
      }
    });
  }
  static #_ = this.ɵfac = function DataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DataComponent,
    selectors: [["app-data"]],
    decls: 49,
    vars: 0,
    consts: [["fileInput", ""], [1, "data-container"], [1, "action-button", "download-button", 3, "click"], [1, "action-button", "upload-button", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], [1, "upload-instructions"]],
    template: function DataComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataComponent_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.downloadOrders());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Download Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataComponent_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](fileInput_r2.click());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataComponent_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onFileSelected($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CSV file required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "File with these columns, in this order required:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul")(13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ProfileDID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SalesRepName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SalesRepCell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SalesRepEmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ProfileID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CustomerID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CustomerName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CompItemID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ProfileDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ProfileInstruction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "UnitTypePD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "PackSizePD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "SalesPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "CustomerContactName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CustomerCell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "CustomerEmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "CompanyID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0;\n    color: #000000;\n}\n\n.data-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n    max-width: 800px;\n    margin: 50px auto;\n    padding: 20px;\n    background-color: #ffffff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.action-button[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    color: #fff;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n    max-width: 350px; \n\n    width: 100%; \n\n    max-width: 350px;\n    text-align: center;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n    background-color: #4caf50; \n\n}\n\n.download-button[_ngcontent-%COMP%] {\n    background-color: #2196f3; \n\n}\n\n.upload-button[_ngcontent-%COMP%]:hover {\n    background-color: #45a049;\n}\n\n.download-button[_ngcontent-%COMP%]:hover {\n    background-color: #1e88e5;\n}\n\n.upload-instructions[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-size: 16px;\n    color: #333;\n    text-align: center;\n}\n\n.upload-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 5px 0;\n    font-weight: bold;\n}\n\n.upload-instructions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: disc;\n    padding-left: 0;\n    margin: 10px auto;\n    display: inline-block; \n\n    text-align: left; \n\n}\n\n.upload-instructions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n@media (max-width: 600px) {\n    .data-container[_ngcontent-%COMP%] {\n        gap: 20px;\n    }\n\n    .action-button[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .upload-instructions[_ngcontent-%COMP%] {\n        font-size: 14px; \n\n        padding: 0 10px; \n\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhL2RhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsZ0JBQWdCLEVBQUUsc0RBQXNEO0lBQ3hFLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QixFQUFFLGtDQUFrQztBQUNqRTs7QUFFQTtJQUNJLHlCQUF5QixFQUFFLG1DQUFtQztBQUNsRTs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUIsRUFBRSxrQ0FBa0M7SUFDekQsZ0JBQWdCLEVBQUUsc0NBQXNDO0FBQzVEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlLEVBQUUseUNBQXlDO1FBQzFELGVBQWUsRUFBRSx3REFBd0Q7SUFDN0U7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kYXRhLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgbWF4LXdpZHRoOiAzNTBweDsgLyogT3B0aW9uYWw6IFJlc3RyaWN0IGJ1dHRvbiB3aWR0aCBvbiBsYXJnZXIgc2NyZWVucyAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGJ1dHRvbiAqL1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogR3JlZW4gY29sb3IgZm9yIHVwbG9hZCBidXR0b24gKi9cbn1cblxuLmRvd25sb2FkLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgLyogQmx1ZSBjb2xvciBmb3IgZG93bmxvYWQgYnV0dG9uICovXG59XG5cbi51cGxvYWQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG4uZG93bmxvYWQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4OGU1O1xufVxuXG4udXBsb2FkLWluc3RydWN0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXBsb2FkLWluc3RydWN0aW9ucyBwIHtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXBsb2FkLWluc3RydWN0aW9ucyB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIENlbnRlcnMgdGhlIGxpc3QgaG9yaXpvbnRhbGx5ICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ25zIHRleHQgd2l0aGluIHRoZSBsaXN0IGl0ZW1zICovXG59XG5cbi51cGxvYWQtaW5zdHJ1Y3Rpb25zIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5kYXRhLWNvbnRhaW5lciB7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51cGxvYWQtaW5zdHJ1Y3Rpb25zIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgICAgICAgcGFkZGluZzogMCAxMHB4OyAvKiBBZGQgcGFkZGluZyBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9439:
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
/* harmony import */ var _services_driver_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/driver-route.service */ 1444);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);












const _c0 = a0 => ({
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, row_r15.actualArrivalTime));
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
          this.snackBarService.showSnackBar('File size exceeds 4 MB.');
        }
      } else {
        this.snackBarService.showSnackBar('Please select an image file');
        this.selectedFile = null;
      }
    }
  }
  uploadFile(deliveryRoute, file) {
    this.snackBarService.showSnackBar('Your file is being uploaded');
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
  static #_ = this.ɵfac = function DriverRouteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DriverRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_driver_route_service__WEBPACK_IMPORTED_MODULE_1__.DriverRouteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DriverRouteComponent,
    selectors: [["app-driver-route"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 7,
    consts: [["driverName", ""], ["deliveryDate2", ""], ["alreadyArrivedBlock", ""], ["fileInput", ""], [1, "container"], [1, "image-container"], ["src", "assets/logo.png", "alt", "Company Logo"], [1, "driver-routes-title"], [1, "filters"], [1, "driver-filter"], ["for", "driver-name"], ["id", "driver-name", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "delivery-date-filter"], ["for", "delivery-date"], ["type", "text", "id", "delivery-date", "readonly", "", 1, "delivery-date-input", 3, "value"], ["mat-table", "", "class", "mat-elevation-z8 driver-routes-grid", "matSort", "", 3, "dataSource", 4, "ngIf"], [3, "value", "selected"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "driver-routes-grid", 3, "dataSource"], ["matColumnDef", "deliveryAddress1"], ["mat-header-cell", "", "class", "no-bottom-border", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "no-bottom-border", 4, "matCellDef"], ["matColumnDef", "address"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "address-column", 4, "matCellDef"], ["matColumnDef", "customerPhone"], ["mat-header-cell", "", "class", "wrap", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "customerPhone", 4, "matCellDef"], ["matColumnDef", "actualArrivalTime"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "no-bottom-border"], ["mat-cell", "", 1, "no-bottom-border"], ["class", "arrow-container", 4, "ngIf"], [1, "arrow-container"], [1, "fas", "fa-arrow-down"], [1, "time-difference-arrow"], ["mat-header-cell", ""], ["mat-cell", "", 1, "address-column"], ["target", "_blank", 3, "href"], ["mat-header-cell", "", 1, "wrap"], ["mat-cell", "", 1, "customerPhone"], [3, "href"], ["mat-cell", ""], ["class", "custom-file-input", 4, "ngIf", "ngIfElse"], [1, "custom-file-input"], ["type", "file", "id", "file", "accept", "image/*", "required", "", "hidden", "", 3, "change"], ["type", "button", 1, "button", 3, "click"], [3, "imageUrl", "title"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass"]],
    template: function DriverRouteComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Driver Routes");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 3, ctx.driverNames$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 5, ctx.deliveryRoute$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _image_thumbnail_image_thumbnail_component__WEBPACK_IMPORTED_MODULE_0__.ImageThumbnailComponent],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.arrived-row[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #d3d3d3; \n\n}\n\n.driver-routes-title[_ngcontent-%COMP%] {\n    font-size: 30px; \n\n    margin: 20px 0; \n\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 16, 46, 1); \n\n    padding: 10px;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px; \n\n    border-radius: 8px;\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    justify-content: space-between; \n\n    align-items: center;\n    font-size: 18px; \n\n}\n\n.filters[_ngcontent-%COMP%]   .driver-filter[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.filters[_ngcontent-%COMP%]   .delivery-date-filter[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-right: 5px; \n\n    margin-left: 10px; \n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: auto; \n\n    min-width: 80px; \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%] {\n    width: fit-content;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n    \n}\n\n.button[_ngcontent-%COMP%] {\n    background-color: green;\n    color: white;\n    border: none;\n    padding: 10px 15px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 16px;\n    transition: background-color 0.3s ease;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n    background-color: darkgreen;\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-align: center; \n\n    border-bottom: 1px solid #000; \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #5a5a5a; \n\n    color: #ffffff; \n\n    \n\n    min-width: 75px; \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td.wrap[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n    overflow-wrap: break-word; \n\n}\n\n.driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    white-space: normal;\n    word-wrap: break-word;\n    overflow-wrap: break-word; \n\n}\n\n.arrived[_ngcontent-%COMP%] {\n    background-color: #eeedeb;\n    font-weight: bold;\n}\n\n.nowrap[_ngcontent-%COMP%] {\n    white-space: nowrap;\n}\n\n@media (max-width: 500px) {\n    .mdc-data-table__cell[_ngcontent-%COMP%], \n   .mdc-data-table__header-cell[_ngcontent-%COMP%] {\n        padding: 0 0px;\n    }\n\n    .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        padding: 10px;\n    }\n\n    .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n        background-color: #5a5a5a; \n\n        color: #ffffff; \n\n        font-size: 14px; \n\n        min-width: 75px; \n\n    }\n\n    .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 11px; \n\n        \n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        border: 0px;\n    }\n    \n\n    .filters[_ngcontent-%COMP%]   .driver-filter[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   .delivery-date-filter[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 10px;\n    }\n\n    .address-column[_ngcontent-%COMP%] {\n        white-space: normal; \n\n        word-wrap: break-word;\n        overflow-wrap: break-word; \n\n        \n\n        padding-left: 50px; \n\n        padding-right: 50px; \n\n    }\n\n    .customerPhone[_ngcontent-%COMP%] {\n        white-space: normal;\n        word-wrap: break-word;\n        overflow-wrap: break-word; \n\n        word-break: break-all; \n\n    }\n\n    .nowrap[_ngcontent-%COMP%] {\n        white-space: normal;\n    }\n\n    @media (max-width: 600px) {\n        .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n   .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n          width: 40%; \n\n        }\n      \n        .driver-routes-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .driver-routes-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n          width: 5%; \n\n        }\n      }\n}\n\n.hidden-column[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.no-bottom-border[_ngcontent-%COMP%] {\n    border-bottom: none !important;\n}\n\n.arrow-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    margin-top: 10px; \n\n    \n}\n\n.arrow-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 19px; \n\n    margin-right: 10px; \n\n   \n}\n\n.time-difference-arrow[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: darkgreen;\n    font-weight: bold;\n    margin-left: 5px;\n}\n\n#delivery-date[_ngcontent-%COMP%] {\n    width: 120px; \n\n    text-align: left; \n\n    cursor: default; \n\n    background-color: white; \n\n    border: 1px solid white; \n\n    font-size: medium;\n    padding: 0;\n    margin: 0;\n}\n\n.custom-file-input[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.custom-file-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #0056b3;\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n}\n\n.custom-file-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: green;\n}\n\n.custom-file-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kcml2ZXItcm91dGUvZHJpdmVyLXJvdXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUscUJBQXFCO0FBQ3pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFFLGtDQUFrQztBQUNqRTs7QUFFQTtJQUNJLGVBQWUsRUFBRSwwQkFBMEI7SUFDM0MsY0FBYyxFQUFFLHVDQUF1QztBQUMzRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUIsRUFBRSx1Q0FBdUM7SUFDbEUsY0FBYyxFQUFFLHVDQUF1QztJQUN2RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0MsRUFBRSxpREFBaUQ7SUFDdkYsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhLEVBQUUsbUNBQW1DO0lBQ2xELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCLEVBQUUsOEJBQThCO0lBQzlELG1CQUFtQjtJQUNuQixlQUFlLEVBQUUsdUJBQXVCO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUIsRUFBRSx5Q0FBeUM7SUFDNUQsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWUsRUFBRSxvQkFBb0I7SUFDckMsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXLEVBQUUsa0NBQWtDO0lBQy9DLGVBQWUsRUFBRSw4Q0FBOEM7QUFDbkU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGFBQWE7SUFDYixrQkFBa0IsRUFBRSx5Q0FBeUM7SUFDN0QsNkJBQTZCLEVBQUUsMkJBQTJCO0FBQzlEOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCLEVBQUUsK0JBQStCO0lBQzFELGNBQWMsRUFBRSx1Q0FBdUM7SUFDdkQsK0NBQStDO0lBQy9DLGVBQWUsRUFBRSwyQ0FBMkM7QUFDaEU7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QixFQUFFLGlDQUFpQztBQUNoRTs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QixFQUFFLGlDQUFpQztBQUNoRTs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTs7UUFFSSxjQUFjO0lBQ2xCOztJQUVBOztRQUVJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHlCQUF5QixFQUFFLCtCQUErQjtRQUMxRCxjQUFjLEVBQUUsdUNBQXVDO1FBQ3ZELGVBQWUsRUFBRSwyQkFBMkI7UUFDNUMsZUFBZSxFQUFFLDJDQUEyQztJQUNoRTs7SUFFQTtRQUNJLGVBQWUsRUFBRSwyQkFBMkI7O0lBRWhEOztJQUVBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO1FBQ1osV0FBVztJQUNmOzs7SUFHQTs7UUFFSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CLEVBQUUsOEJBQThCO1FBQ25ELHFCQUFxQjtRQUNyQix5QkFBeUIsRUFBRSw0QkFBNEI7UUFDdkQsMkRBQTJEO1FBQzNELGtCQUFrQixFQUFFLHFCQUFxQjtRQUN6QyxtQkFBbUIsRUFBRSxzQkFBc0I7SUFDL0M7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHlCQUF5QixFQUFFLDhCQUE4QjtRQUN6RCxxQkFBcUIsRUFBRSxzQ0FBc0M7SUFDakU7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSTs7VUFFRSxVQUFVLEVBQUUsOENBQThDO1FBQzVEOztRQUVBOztVQUVFLFNBQVMsRUFBRSxxREFBcUQ7UUFDbEU7TUFDRjtBQUNOOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0IsRUFBRSx5Q0FBeUM7O0FBRS9EOztBQUVBO0lBQ0ksZUFBZSxFQUFFLDJCQUEyQjtJQUM1QyxrQkFBa0IsRUFBRSx3Q0FBd0M7O0FBRWhFOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLHFEQUFxRDtJQUNuRSxnQkFBZ0IsRUFBRSx5Q0FBeUM7SUFDM0QsZUFBZSxFQUFFLDJDQUEyQztJQUM1RCx1QkFBdUIsRUFBRSxzQ0FBc0M7SUFDL0QsdUJBQXVCLEVBQUUsa0NBQWtDO0lBQzNELGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyogTGlnaHQgZ3JleSBiYWNrZ3JvdW5kIGZvciB0aGUgYm9keSAqL1xuICAgIGNvbG9yOiAjMDAwMDAwOyAvKiBCbGFjayB0ZXh0IGNvbG9yICovXG59XG5cbi5hcnJpdmVkLXJvdyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMzsgLyogTGlnaHRlciBncmV5IGZvciBhcnJpdmVkIHJvd3MgKi9cbn1cblxuLmRyaXZlci1yb3V0ZXMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDsgLyogU2V0IGZvbnQgc2l6ZSB0byAzMHB4ICovXG4gICAgbWFyZ2luOiAyMHB4IDA7IC8qIEFkZCBlcXVhbCBtYXJnaW4gdG8gdG9wIGFuZCBib3R0b20gKi9cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgZm9yIHRoZSBjb250YWluZXIgKi9cbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQmxhY2sgdGV4dCBjb2xvciBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTsgLyogRGFyayBibHVlIGJhY2tncm91bmQgZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IHRoZSBsb2dvIHNpemUgYXMgbmVlZGVkICovXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZmlsdGVycyB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIGJldHdlZW4gZm9yIGZpbHRlcnMgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG59XG5cbi5maWx0ZXJzIC5kcml2ZXItZmlsdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWx0ZXJzIC5kZWxpdmVyeS1kYXRlLWZpbHRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmlsdGVycyBsYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIFNwYWNlIGJldHdlZW4gbGFiZWwgYW5kIHNlbGVjdC9pbnB1dCAqL1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcbn1cblxuLmZpbHRlcnMgc2VsZWN0LFxuLmZpbHRlcnMgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogTWF0Y2ggZm9udCBzaXplICovXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZmlsdGVycyBpbnB1dCB7XG4gICAgd2lkdGg6IGF1dG87IC8qIEFkanVzdCB0aGUgd2lkdGggb2YgdGhlIGlucHV0ICovXG4gICAgbWluLXdpZHRoOiA4MHB4OyAvKiBNaW5pbXVtIHdpZHRoIGZvciB0aGUgZGVsaXZlcnkgZGF0ZSBpbnB1dCAqL1xufVxuXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIFxufVxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xufVxuXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRoLFxuLmRyaXZlci1yb3V0ZXMtZ3JpZCB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgdGV4dCBpbiBoZWFkZXJzIGFuZCBjZWxscyAqL1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyAvKiBCbGFjayBob3Jpem9udGFsIGxpbmVzICovXG59XG5cbi5kcml2ZXItcm91dGVzLWdyaWQgdGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhOyAvKiBTbGlnaHRseSBsaWdodGVyIGRhcmsgZ3JleSAqL1xuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgLypmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCBmb250IGZvciBoZWFkZXJzICovXG4gICAgbWluLXdpZHRoOiA3NXB4OyAvKiBQcmV2ZW50IGhlYWRlcnMgZnJvbSB3cmFwcGluZyB0b28gbXVjaCAqL1xufVxuXG4uZHJpdmVyLXJvdXRlcy1ncmlkIHRkLndyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qIEVuc3VyZSB3cmFwcGluZyB3aXRoaW4gY2VsbHMgKi9cbn1cblxuLmRyaXZlci1yb3V0ZXMtZ3JpZCB0ZCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qIEVuc3VyZSB3cmFwcGluZyB3aXRoaW4gY2VsbHMgKi9cbn1cblxuLmFycml2ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVkZWI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbCxcbiAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgICAgICAgcGFkZGluZzogMCAwcHg7XG4gICAgfVxuXG4gICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aCxcbiAgICAuZHJpdmVyLXJvdXRlcy1ncmlkIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAuZHJpdmVyLXJvdXRlcy1ncmlkIHRoLFxuICAgIC5kcml2ZXItcm91dGVzLWdyaWQgdGQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7IC8qIFNsaWdodGx5IGxpZ2h0ZXIgZGFyayBncmV5ICovXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLyogSW5jcmVhc2UgdGhlIGZvbnQgc2l6ZSAqL1xuICAgICAgICBtaW4td2lkdGg6IDc1cHg7IC8qIFByZXZlbnQgaGVhZGVycyBmcm9tIHdyYXBwaW5nIHRvbyBtdWNoICovXG4gICAgfVxuXG4gICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDsgLyogSW5jcmVhc2UgdGhlIGZvbnQgc2l6ZSAqL1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cbiAgICBcblxuICAgIC5maWx0ZXJzIC5kcml2ZXItZmlsdGVyLFxuICAgIC5maWx0ZXJzIC5kZWxpdmVyeS1kYXRlLWZpbHRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5hZGRyZXNzLWNvbHVtbiB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIEVuc3VyZSBhZGRyZXNzIHRleHQgd3JhcHMgKi9cbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyAvKiBFbnN1cmUgbG9uZyB3b3JkcyBicmVhayAqL1xuICAgICAgICAvKm1heC13aWR0aDogMTAwJTsgLyogQWxsb3cgdGhlIGNvbHVtbiB0byB0YWtlIGZ1bGwgd2lkdGggKi9cbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4OyAvKiBBZGQgbGVmdCBwYWRkaW5nICovXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7IC8qIEFkZCByaWdodCBwYWRkaW5nICovXG4gICAgfVxuXG4gICAgLmN1c3RvbWVyUGhvbmUge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qIEVuc3VyZSBwaG9uZSBudW1iZXJzIHdyYXAgKi9cbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsOyAvKiBCcmVhayBsb25nIHdvcmRzIGF0IGFueSBjaGFyYWN0ZXIgKi9cbiAgICB9XG5cbiAgICAubm93cmFwIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aDpudGgtY2hpbGQoMiksXG4gICAgICAgIC5kcml2ZXItcm91dGVzLWdyaWQgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICB3aWR0aDogNDAlOyAvKiBBZGp1c3Qgd2lkdGggZm9yIGFkZHJlc3MgY29sdW1uIG9uIG1vYmlsZSAqL1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLmRyaXZlci1yb3V0ZXMtZ3JpZCB0aDpudGgtY2hpbGQoMyksXG4gICAgICAgIC5kcml2ZXItcm91dGVzLWdyaWQgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB3aWR0aDogNSU7IC8qIEFkanVzdCB3aWR0aCBmb3IgY3VzdG9tZXIgcGhvbmUgY29sdW1uIG9uIG1vYmlsZSAqL1xuICAgICAgICB9XG4gICAgICB9XG59XG5cbi5oaWRkZW4tY29sdW1uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubm8tYm90dG9tLWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXJyb3ctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IC8qIE1vdmUgZG93biB0aGUgZW50aXJlIGFycm93IGNvbnRhaW5lciAqL1xuICAgIFxufVxuXG4uYXJyb3ctY29udGFpbmVyIGkge1xuICAgIGZvbnQtc2l6ZTogMTlweDsgLyogRm9udCBBd2Vzb21lIGljb24gc2l6ZSAqL1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgLyogQWRkIHNwYWNlIHRvIHRoZSByaWdodCBvZiB0aGUgYXJyb3cgKi9cbiAgIFxufVxuXG4udGltZS1kaWZmZXJlbmNlLWFycm93IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGRhcmtncmVlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jZGVsaXZlcnktZGF0ZSB7XG4gICAgd2lkdGg6IDEyMHB4OyAvKiBFbnN1cmVzIHRoZSB3aWR0aCBpcyBvbmx5IGFzIHdpZGUgYXMgdGhlIGNvbnRlbnQgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBDZW50ZXJzIHRoZSB0ZXh0IGluc2lkZSB0aGUgdGV4dCBib3ggKi9cbiAgICBjdXJzb3I6IGRlZmF1bHQ7IC8qIFByZXZlbnQgdGhlIHRleHQgY3Vyc29yIGZyb20gYXBwZWFyaW5nICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciB0byB3aGl0ZSAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAvKiBTZXQgdGhlIGJvcmRlciBjb2xvciB0byB3aGl0ZSAqL1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5jdXN0b20tZmlsZS1pbnB1dCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);




const _c0 = a0 => ({
  "color": a0
});
function HomeComponent_tr_35_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ordered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.getStatusColor("ordered")));
  }
}
function HomeComponent_tr_35_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function HomeComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10)(4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_tr_35_ng_container_9_Template, 4, 3, "ng-container", 13)(10, HomeComponent_tr_35_ng_container_10_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.getStatusColor(item_r2.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getStatusIcon(item_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, item_r2.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.ordered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.ordered);
  }
}
function HomeComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10)(4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.getStatusColor(employee_r3.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getStatusIcon(employee_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, employee_r3.status), " ");
  }
}
class HomeComponent {
  constructor(router) {
    this.router = router;
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
        sick: 0,
        vacation: 1,
        onsite: 2
      };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  }
  sortItems() {
    this.items.sort((a, b) => {
      const statusOrder = {
        none: 0,
        low: 1
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
  navigateTo(page) {
    this.router.navigate([`/${page}`]);
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 48,
    vars: 6,
    consts: [[1, "container"], [1, "header-container"], [1, "date"], [1, "kpi-container"], [1, "kpi"], [1, "grid-container"], [1, "grid"], [1, "item-grid"], [4, "ngFor", "ngForOf"], [1, "employee-grid"], [1, "status-cell"], [1, "status-icon", 3, "ngStyle"], [1, "ordered-cell"], [4, "ngIf"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Online Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deliveries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "12/20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4)(17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Deliveries Ahead of Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5)(22, "div", 6)(23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 7)(26, "thead")(27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_tr_35_Template, 11, 10, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6)(37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 9)(40, "thead")(41, "tr")(42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HomeComponent_tr_47_Template, 8, 8, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx.today, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: [".container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n  position: relative;\n}\n\n.date[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: -10px; \n\n  margin-left: 20px; \n\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #0056b3;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.kpi-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin: 20px 0;\n}\n\n.kpi[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  width: 30%;\n  text-align: center;\n}\n\n.kpi[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n}\n\n.kpi[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 2em;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: start;\n}\n\n.grid[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.item-grid[_ngcontent-%COMP%], .employee-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px 0;\n  border-collapse: collapse;\n}\n\n.item-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .employee-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .item-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .employee-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 10px;\n  font-size: 1.2em;\n  vertical-align: top; \n\n}\n\n.item-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .employee-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n}\n\n.status-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.status-cell[_ngcontent-%COMP%], .ordered-cell[_ngcontent-%COMP%] {\n  display: flexbox;\n  align-items: center;\n  justify-content: center; \n\n  height: 100%; \n\n}\n\n\n\n@media (max-width: 768px) {\n  .header-container[_ngcontent-%COMP%] {\n      flex-direction: column;\n      align-items: center;\n  }\n\n  .date[_ngcontent-%COMP%] {\n      position: static;\n      transform: none;\n      margin-top: 10px;\n  }\n\n  .button-container[_ngcontent-%COMP%] {\n      margin: 10px 0;\n  }\n\n  .kpi-container[_ngcontent-%COMP%] {\n      flex-direction: column;\n      align-items: center;\n  }\n\n  .kpi[_ngcontent-%COMP%] {\n      width: 80%;\n      margin-bottom: 20px;\n  }\n\n  .grid-container[_ngcontent-%COMP%] {\n      flex-direction: column;\n      align-items: center;\n  }\n\n  .grid[_ngcontent-%COMP%] {\n      width: 100%;\n      margin-bottom: 20px;\n  }\n\n  .button-container[_ngcontent-%COMP%] {\n      flex-direction: column;\n      align-items: center;\n  }\n\n  .button[_ngcontent-%COMP%] {\n      width: 80%;\n      margin-bottom: 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixpQkFBaUIsRUFBRSxvQkFBb0I7RUFDdkMsaUJBQWlCLEVBQUUsOEJBQThCO0FBQ25EOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUUsd0NBQXdDO0FBQy9EOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUUsbUJBQW1CO0VBQzVDLFlBQVksRUFBRSx1QkFBdUI7QUFDdkM7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0U7TUFDSSxzQkFBc0I7TUFDdEIsbUJBQW1CO0VBQ3ZCOztFQUVBO01BQ0ksZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxjQUFjO0VBQ2xCOztFQUVBO01BQ0ksc0JBQXNCO01BQ3RCLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLFVBQVU7TUFDVixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxzQkFBc0I7TUFDdEIsbUJBQW1CO0VBQ3ZCOztFQUVBO01BQ0ksV0FBVztNQUNYLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLHNCQUFzQjtNQUN0QixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxVQUFVO01BQ1YsbUJBQW1CO0VBQ3ZCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAtMTBweDsgLyogTW92ZSBidXR0b25zIHVwICovXG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyAvKiBNb3ZlIGJ1dHRvbnMgdG8gdGhlIHJpZ2h0ICovXG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5rcGktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ua3BpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmtwaSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmtwaSBwIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5ncmlkIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLml0ZW0tZ3JpZCwgLmVtcGxveWVlLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5pdGVtLWdyaWQgdGgsIC5lbXBsb3llZS1ncmlkIHRoLCAuaXRlbS1ncmlkIHRkLCAuZW1wbG95ZWUtZ3JpZCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIEVuc3VyZSBjZWxscyBhcmUgYWxpZ25lZCBhdCB0aGUgdG9wICovXG59XG5cbi5pdGVtLWdyaWQgdGgsIC5lbXBsb3llZS1ncmlkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuLnN0YXR1cy1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGF0dXMtY2VsbCwgLm9yZGVyZWQtY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXhib3g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgY29udGVudCAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEVuc3VyZSBmdWxsIGhlaWdodCAqL1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciBNb2JpbGUgT3B0aW1pemF0aW9uICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuZGF0ZSB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5cbiAgLmtwaS1jb250YWluZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAua3BpIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmdyaWQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
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
  static #_ = this.ɵfac = function ImageThumbnailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ImageThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 5629:
/*!*************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryComponent: () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ 6739);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/inventory.service */ 4934);







function InventoryComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 11);
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
    this.page = 0;
    this.size = 50;
    this.searchTerm = '';
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.inventoryItemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.inventoryItems$ = this.inventoryItemsSubject.asObservable();
  }
  ngOnInit() {
    this.loadData();
    this.searchSubscription = this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(this.trimComparator),
    // Only emit if value is different from the last value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200)).subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      this.inventoryItemsSubject.next([]);
      this.loadData();
    });
  }
  loadData() {
    console.log('loadData');
    this.inventoryService.getInventoryItems(this.page, this.size, this.searchTerm).subscribe({
      next: inventoryItems => {
        const currentData = this.inventoryItemsSubject.value;
        const newData = inventoryItems.filter(item => !currentData.some(currentItem => currentItem.id === item.id));
        this.inventoryItemsSubject.next([...currentData, ...newData]); // needed for the scroll
      }
    });
  }
  onScroll() {
    this.page++;
    this.loadData();
  }
  onSearchChange(event) {
    const searchTerm = event.target.value;
    this.page = 0; // Reset page when searching
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
  static #_ = this.ɵfac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InventoryComponent,
    selectors: [["app-inventory"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 32,
    vars: 5,
    consts: [["infiniteScroll", "", 1, "content", 3, "scrolled", "infiniteScrollDistance", "infiniteScrollThrottle"], [1, "container"], [1, "image-container"], ["src", "assets/logo.png", "alt", "Company Logo"], [1, "inventory-title"], [1, "filters"], ["type", "text", "placeholder", "Search Inventory", 3, "input"], [1, "inventory-grid"], [1, "shrinkable-header"], [1, "shrinkable-header", "product-header"], [4, "ngFor", "ngForOf"], [1, "wrap", "product-column"]],
    template: function InventoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function InventoryComponent_Template_div_scrolled_0_listener() {
          return ctx.onScroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function InventoryComponent_Template_input_input_7_listener($event) {
          return ctx.onSearchChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 7)(9, "thead")(10, "tr")(11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, InventoryComponent_tr_30_Template, 14, 11, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 3, ctx.inventoryItems$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollDirective],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 20px;\n    margin-top: -10px; \n\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: rgba(0, 16, 46, 1); \n\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px; \n\n    border-radius: 8px;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n    margin-top: 10px; \n\n    margin-bottom: 10px; \n\n    font-size: 32px; \n\n    text-decoration: none; \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px; \n\n}\n\n.filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    flex: 1 1 calc(50% - 20px); \n\n    min-width: 120px;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n    width: 100%; \n\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3; \n\n    color: #333; \n\n    min-width: 75px; \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   td.wrap[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.shrinkable-header[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-break: break-word;\n    text-align: center;\n}\n\n\n.product-column[_ngcontent-%COMP%] {\n    white-space: normal;\n    white-space: normal;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n}\n\n@media (max-width: 500px) {\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        flex: 1 1 100%; \n\n        margin-bottom: 10px;\n    }\n\n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 100%; \n\n        margin: 0; \n\n        padding: 0; \n\n        border: 0; \n\n    }\n\n    .inventory-grid[_ngcontent-%COMP%] {\n        width: 100%; \n\n        margin: 0; \n\n        border: 0; \n\n        display: table; \n\n    }\n\n\n\n    .product-column[_ngcontent-%COMP%] {\n        min-width: 50%; \n\n        max-width: 90%; \n\n        white-space: normal;\n        word-wrap: break-word;\n        overflow-wrap: break-word;\n    }\n\n   \n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n        min-width: 40px; \n\n    }\n  \n\n    .content[_ngcontent-%COMP%] {\n        width: 100%; \n\n        margin: 0; \n\n        padding: 0; \n\n        border: 0; \n\n    }\n\n    .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n      width: 15%; \n\n    }\n   \n    .image-container[_ngcontent-%COMP%] {\n        border-radius: 0%;\n    }\n    \n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUscUJBQXFCO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCLEVBQUUsdURBQXVEO0FBQzlFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlCQUF5QixFQUFFLHVDQUF1QztJQUNsRSxjQUFjLEVBQUUsdUNBQXVDO0lBQ3ZELHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9DQUFvQyxFQUFFLHlCQUF5QjtBQUNuRTs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhLEVBQUUsNEJBQTRCO0lBQzNDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQixFQUFFLDhDQUE4QztJQUNoRSxtQkFBbUIsRUFBRSw4Q0FBOEM7SUFDbkUsZUFBZSxFQUFFLHlCQUF5QjtJQUMxQyxxQkFBcUIsRUFBRSx5QkFBeUI7QUFDcEQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTLEVBQUUseUNBQXlDO0FBQ3hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwwQkFBMEIsRUFBRSx5Q0FBeUM7SUFDckUsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVyxFQUFFLHFDQUFxQztJQUNsRCx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSw0Q0FBNEM7SUFDdkUsV0FBVyxFQUFFLDJDQUEyQztJQUN4RCxlQUFlLEVBQUUsMkNBQTJDO0FBQ2hFOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksY0FBYyxFQUFFLDBCQUEwQjtRQUMxQyxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVyxFQUFFLHVDQUF1QztRQUNwRCxTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLFVBQVUsRUFBRSxtQkFBbUI7UUFDL0IsU0FBUyxFQUFFLGtCQUFrQjtJQUNqQzs7SUFFQTtRQUNJLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLGNBQWMsRUFBRSwrQkFBK0I7SUFDbkQ7Ozs7SUFJQTtRQUNJLGNBQWMsRUFBRSxvREFBb0Q7UUFDcEUsY0FBYyxFQUFFLG1EQUFtRDtRQUNuRSxtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHlCQUF5QjtJQUM3Qjs7O0lBR0E7UUFDSSxlQUFlLEVBQUUsMkNBQTJDO0lBQ2hFOzs7SUFHQTtRQUNJLFdBQVcsRUFBRSx1Q0FBdUM7UUFDcEQsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixVQUFVLEVBQUUsbUJBQW1CO1FBQy9CLFNBQVMsRUFBRSxrQkFBa0I7SUFDakM7O0lBRUE7O01BRUUsVUFBVSxFQUFFLDZCQUE2QjtJQUMzQzs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGhlIGJvZHkgKi9cbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQmxhY2sgdGV4dCBjb2xvciAqL1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDsgLyogUmVkdWNlIHNwYWNlIGJldHdlZW4gdGhlIGNvbnRhaW5lciBhbmQgdGhlIG5hdiBiYXIgKi9cbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIGNvbnRhaW5lciAqL1xuICAgIGNvbG9yOiAjMDAwMDAwOyAvKiBCbGFjayB0ZXh0IGNvbG9yIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTsgLyogRGFyayBibHVlIGJhY2tncm91bmQgKi9cbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4OyAvKiBBZGp1c3QgaGVpZ2h0IGFzIG5lZWRlZCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmludmVudG9yeS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDsgLyogQWRqdXN0IG1hcmdpbiB0byBlbnN1cmUgZXF1YWwgd2hpdGUgc3BhY2UgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBBZGp1c3QgbWFyZ2luIHRvIGVuc3VyZSBlcXVhbCB3aGl0ZSBzcGFjZSAqL1xuICAgIGZvbnQtc2l6ZTogMzJweDsgLyogTWFrZSB0aGUgdGV4dCBiaWdnZXIgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIFJlbW92ZSB0aGUgdW5kZXJsaW5lICovXG59XG5cbi5maWx0ZXJzIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7IC8qIEFkZHMgd2hpdGUgc3BhY2UgYmV0d2VlbiBlYWNoIGZpbHRlciAqL1xufVxuXG4uZmlsdGVyLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5maWx0ZXJzIGlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZmxleDogMSAxIGNhbGMoNTAlIC0gMjBweCk7IC8qIEFkanVzdCB3aWR0aCB0byBtYXRjaCBjb2x1bW4gaGVhZGVycyAqL1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEVuc3VyZSB0aGUgZ3JpZCB0YWtlcyBmdWxsIHdpZHRoICovXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW52ZW50b3J5LWdyaWQgdGgsIC5pbnZlbnRvcnktZ3JpZCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW52ZW50b3J5LWdyaWQgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGNvbG9yOiAjMzMzOyAvKiBEYXJrIGdyZXkgdGV4dCBjb2xvciBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIG1pbi13aWR0aDogNzVweDsgLyogUHJldmVudCBoZWFkZXJzIGZyb20gd3JhcHBpbmcgdG9vIG11Y2ggKi9cbn1cblxuLmludmVudG9yeS1ncmlkIHRkLndyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uc2hyaW5rYWJsZS1oZWFkZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLnByb2R1Y3QtY29sdW1uIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5maWx0ZXJzIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZmlsdGVycyBpbnB1dCB7XG4gICAgICAgIGZsZXg6IDEgMSAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBpbnB1dHMgKi9cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuaW52ZW50b3J5LWdyaWQgdGgsIC5pbnZlbnRvcnktZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggZm9yIGNvbnRhaW5lciBvbiBtb2JpbGUgKi9cbiAgICAgICAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgbWFyZ2luICovXG4gICAgICAgIHBhZGRpbmc6IDA7IC8qIFJlbW92ZSBwYWRkaW5nICovXG4gICAgICAgIGJvcmRlcjogMDsgLyogUmVtb3ZlIGJvcmRlciAqL1xuICAgIH1cblxuICAgIC5pbnZlbnRvcnktZ3JpZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBncmlkIG9uIG1vYmlsZSAqL1xuICAgICAgICBtYXJnaW46IDA7IC8qIFJlbW92ZSBtYXJnaW4gKi9cbiAgICAgICAgYm9yZGVyOiAwOyAvKiBSZW1vdmUgYm9yZGVyICovXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlOyAvKiBFbnN1cmUgcHJvcGVyIHRhYmxlIGxheW91dCAqL1xuICAgIH1cblxuXG5cbiAgICAucHJvZHVjdC1jb2x1bW4ge1xuICAgICAgICBtaW4td2lkdGg6IDUwJTsgLyogRW5zdXJlIHRoZSBwcm9kdWN0IGNvbHVtbiB0YWtlcyB1cCBhdCBsZWFzdCA1MCUgKi9cbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7IC8qIEFsbG93IHRoZSBwcm9kdWN0IGNvbHVtbiB0byB0YWtlIHVwIG1vcmUgc3BhY2UgKi9cbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgXG4gICAgLmludmVudG9yeS1ncmlkIHRoIHtcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4OyAvKiBQcmV2ZW50IGhlYWRlcnMgZnJvbSB3cmFwcGluZyB0b28gbXVjaCAqL1xuICAgIH1cbiAgXG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBjb250YWluZXIgb24gbW9iaWxlICovXG4gICAgICAgIG1hcmdpbjogMDsgLyogUmVtb3ZlIG1hcmdpbiAqL1xuICAgICAgICBwYWRkaW5nOiAwOyAvKiBSZW1vdmUgcGFkZGluZyAqL1xuICAgICAgICBib3JkZXI6IDA7IC8qIFJlbW92ZSBib3JkZXIgKi9cbiAgICB9XG5cbiAgICAuaW52ZW50b3J5LWdyaWQgdGg6bnRoLWNoaWxkKDMpLFxuICAgIC5pbnZlbnRvcnktZ3JpZCB0ZDpudGgtY2hpbGQoMykge1xuICAgICAgd2lkdGg6IDE1JTsgLyogV2lkZXIgZGVzY3JpcHRpb24gY29sdW1uICovXG4gICAgfVxuICAgXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIH1cbiAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LoginComponent {
  static #_ = this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
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

/***/ 3721:
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const _c0 = a0 => ({
  "background-color": a0
});
function LogoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.imageBackgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class LogoComponent {
  constructor() {
    this.imageSrc = 'assets/fogriver.png';
    this.imageBackgroundColor = '#000000';
  }
  ngOnChanges() {
    if (this.companyId === 14) {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000'; // Black background
    } else {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }
  static #_ = this.ɵfac = function LogoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LogoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LogoComponent,
    selectors: [["app-logo"]],
    inputs: {
      companyId: "companyId"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "image-container", 3, "ngStyle", 4, "ngIf"], [1, "image-container", 3, "ngStyle"], ["alt", "Company Logo", 3, "src"]],
    template: function LogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogoComponent_div_0_Template, 2, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyId);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: [".image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: var(--image-background-color);\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    \n\n    border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8qIEFkanVzdCBoZWlnaHQgdG8gbWF0Y2ggdGhlIG9yZGVyIHBhZ2UgKi9cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LogoutComponent {
  static #_ = this.ɵfac = function LogoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LogoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LogoutComponent,
    selectors: [["app-logout"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 8);
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
  static #_ = this.ɵfac = function OrderConfirmationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OrderConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderConfirmationComponent,
    selectors: [["app-order-confirmation"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 40,
    vars: 13,
    consts: [[1, "container"], [3, "companyId"], ["id", "order-grid", 1, "order-grid"], [4, "ngFor", "ngForOf"], [1, "total"], ["id", "total-amount"], [4, "ngIf"], [1, "button", 3, "click"], [1, "price"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 2)(8, "thead")(9, "tr")(10, "th");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderConfirmationComponent_tr_21_Template, 12, 8, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "div", 4)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, OrderConfirmationComponent_div_33_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Thank you,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Your Sales Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 7);
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
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 97%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: rgba(0, 16, 46, 1);\n    \n\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    \n\n    border-radius: 8px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    text-align: center;\n    margin: 10px 0;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 10px 0;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n    font-size: 16px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    word-wrap: break-word;\n}\n\n.total[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-align: right;\n    font-size: 18px;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n    table-layout: fixed;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n    word-wrap: break-word;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    \n\n    color: #333;\n    \n\n    font-weight: bold;\n    font-size: 14px;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 14px;\n    \n\n}\n\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 40%; \n\n}\n\n\n\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n\n    p[_ngcontent-%COMP%], \n   ul[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n        word-wrap: break-word;\n    }\n\n    .order-grid[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin: 0;\n        \n\n        border: 0;\n        \n\n        display: table;\n        \n\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin: 0;\n        \n\n        padding: 0;\n        \n\n        border: 0;\n        \n\n    }\n    \n     .table[_ngcontent-%COMP%] {\n    width: 100%;\n    display: table;\n    }\n\n\n    .profiles[_ngcontent-%COMP%] {\n    width: 100%;\n    }\n\n     .table[_ngcontent-%COMP%] {\n    width: 100%;\n    }\n\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n      width: 17%; \n\n    }\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n      width: 17%; \n\n    }\n  \n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n      width: 17%; \n\n    }\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n    width: 17%; \n\n  }\n}\n\n\n\n.order-grid[_ngcontent-%COMP%]   tr.bold-row[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #dedede;\n}\n\n\n.error-message[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n.submitted-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 6px;\n}\n\n\n.button[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    color: 333;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.no-wrap[_ngcontent-%COMP%] {\n    white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCwyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUNBQXVDO0FBQzNDOzs7QUFHQTs7RUFFRSxVQUFVLEVBQUUsNkJBQTZCO0FBQzNDOzs7OztBQUtBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtDQUFrQztRQUNsQyxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLFdBQVc7UUFDWCx1Q0FBdUM7UUFDdkMsU0FBUztRQUNULGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7O0tBRUM7SUFDRCxXQUFXO0lBQ1gsY0FBYztJQUNkOzs7SUFHQTtJQUNBLFdBQVc7SUFDWDs7S0FFQztJQUNELFdBQVc7SUFDWDs7SUFFQTs7TUFFRSxVQUFVLEVBQUUsa0NBQWtDO0lBQ2hEO0lBQ0E7O01BRUUsVUFBVSxFQUFFLGtDQUFrQztJQUNoRDs7SUFFQTs7TUFFRSxVQUFVLEVBQUUsa0NBQWtDO0lBQ2hEO0lBQ0E7O0lBRUEsVUFBVSxFQUFFLGtDQUFrQztFQUNoRDtBQUNGOztBQUVBLDJEQUEyRDtBQUMzRDtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTtcbiAgICAvKiBEYXJrIGJsdWUgYmFja2dyb3VuZCAqL1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgLyogQWRqdXN0IGhlaWdodCB0byBtYXRjaCB0aGUgb3JkZXIgcGFnZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbnVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnRvdGFsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kZWxpdmVyeS1kYXRlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yZGVyLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIC8qIEZpeGVkIHRhYmxlIGxheW91dCAqL1xufVxuXG4ub3JkZXItZ3JpZCB0aCxcbi5vcmRlci1ncmlkIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIEVuc3VyZSBjb250ZW50IHdyYXBzICovXG59XG5cbi5vcmRlci1ncmlkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8qIE1hdGNoIHRoZSBpbnZlbnRvcnkgZ3JpZCBmb250IHNpemUgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvKiBNYXRjaCB0aGUgaW52ZW50b3J5IGdyaWQgZm9udCBzaXplICovXG59XG5cblxuLm9yZGVyLWdyaWQgdGg6bnRoLWNoaWxkKDEpLFxuLm9yZGVyLWdyaWQgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDQwJTsgLyogV2lkZXIgZGVzY3JpcHRpb24gY29sdW1uICovXG59XG5cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgcCxcbiAgICB1bCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICB1bCBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAub3JkZXItZ3JpZCB0aCxcbiAgICAub3JkZXItZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgIC5vcmRlci1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIEZ1bGwgd2lkdGggZm9yIGdyaWQgb24gbW9iaWxlICovXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLyogUmVtb3ZlIG1hcmdpbiAqL1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIC8qIFJlbW92ZSBib3JkZXIgKi9cbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIC8qIEVuc3VyZSBwcm9wZXIgdGFibGUgbGF5b3V0ICovXG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBGdWxsIHdpZHRoIGZvciBjb250YWluZXIgb24gbW9iaWxlICovXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLyogUmVtb3ZlIG1hcmdpbiAqL1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAvKiBSZW1vdmUgcGFkZGluZyAqL1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIC8qIFJlbW92ZSBib3JkZXIgKi9cbiAgICB9XG4gICAgXG4gICAgIC50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuXG5cbiAgICAucHJvZmlsZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICAudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YWJsZSB0aDpudGgtY2hpbGQoMiksXG4gICAgLnRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICB3aWR0aDogMTclOyAvKiBBZGp1c3Qgd2lkdGggZm9yIHByaWNlIGNvbHVtbiAqL1xuICAgIH1cbiAgICAudGFibGUgdGg6bnRoLWNoaWxkKDMpLFxuICAgIC50YWJsZSB0ZDpudGgtY2hpbGQoMykge1xuICAgICAgd2lkdGg6IDE3JTsgLyogQWRqdXN0IHdpZHRoIGZvciBwcmljZSBjb2x1bW4gKi9cbiAgICB9XG4gIFxuICAgIC50YWJsZSB0aDpudGgtY2hpbGQoNCksXG4gICAgLnRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgICB3aWR0aDogMTclOyAvKiBBZGp1c3Qgd2lkdGggZm9yIHByaWNlIGNvbHVtbiAqL1xuICAgIH1cbiAgICAudGFibGUgdGg6bnRoLWNoaWxkKDUpLFxuICAudGFibGUgdGQ6bnRoLWNoaWxkKDUpIHtcbiAgICB3aWR0aDogMTclOyAvKiBBZGp1c3Qgd2lkdGggZm9yIHByaWNlIGNvbHVtbiAqL1xuICB9XG59XG5cbi8qIEFkZGl0aW9uYWwgc3R5bGVzIGZvciBib2xkIGFuZCBsaWdodGVyIGdyZXkgYmFja2dyb3VuZCAqL1xuLm9yZGVyLWdyaWQgdHIuYm9sZC1yb3cge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG59XG5cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN1Ym1pdHRlZC1kYXRlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgY29sb3I6IDMzMztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5vLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 9);
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
  static #_ = this.ɵfac = function OrderExistsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OrderExistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderExistsComponent,
    selectors: [["app-order-exists"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 39,
    vars: 13,
    consts: [[1, "container"], [3, "companyId"], [1, "error-message", 2, "color", "red"], ["id", "order-grid", 1, "order-grid"], [4, "ngFor", "ngForOf"], [1, "total"], ["id", "total-amount"], [4, "ngIf"], [1, "button", 3, "click"], [1, "price"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 3)(8, "thead")(9, "tr")(10, "th");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderExistsComponent_tr_21_Template, 12, 9, "tr", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, OrderExistsComponent_div_36_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 8);
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
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n   border-radius: 8px; \n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n   border-radius: 8px; \n    background-color: rgba(0, 16, 46, 1);\n    \n\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n    \n\n     border-radius: 8px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    text-align: center;\n    margin: 10px 0;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 10px 0;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n    font-size: 16px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    word-wrap: break-word;\n}\n\n.total[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-align: right;\n    font-size: 18px;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n    table-layout: fixed;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 8px;\n    text-align: center;\n    word-wrap: break-word;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    \n\n    color: #333;\n    \n\n    font-weight: bold;\n    font-size: 14px;\n    \n\n}\n\n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 14px;\n    \n\n}\n\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 40%; \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 17%; \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 17%; \n\n}\n\n\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n\n    p[_ngcontent-%COMP%], \n   ul[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n        word-wrap: break-word;\n    }\n\n    .order-grid[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin: 0;\n        \n\n        border: 0;\n        \n\n        display: table;\n        \n\n        padding: 0px;\n    }\n\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        \n\n        margin: 0;\n        \n\n        padding: 0;\n        \n\n        border: 0;\n        \n\n    }\n\n  \n    .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        border-radius: 0 !important;\n    }\n\n    .order-grid[_ngcontent-%COMP%]   tr.bold-row[_ngcontent-%COMP%] {\n    font-weight: bold;\n    background-color: #dedede;\n    }\n\n\n.error-message[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n.submitted-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 6px;\n}\n\n\n.button[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    color: 333;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.no-wrap[_ngcontent-%COMP%] {\n    white-space: nowrap;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 17%; \n\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 17%; \n\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 17%; \n\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\nwidth: 17%; \n\n}\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1leGlzdHMvb3JkZXItZXhpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7R0FDdkIsa0JBQWtCO0lBQ2pCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0dBQ2Qsa0JBQWtCO0lBQ2pCLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDBDQUEwQztLQUN6QyxrQkFBa0I7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCwyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUNBQXVDO0FBQzNDOzs7QUFHQTs7RUFFRSxVQUFVLEVBQUUsNkJBQTZCO0FBQzNDOztBQUVBOztFQUVFLFVBQVUsRUFBRSxrQ0FBa0M7QUFDaEQ7O0FBRUE7O0VBRUUsVUFBVSxFQUFFLGtDQUFrQztBQUNoRDs7OztBQUlBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtDQUFrQztRQUNsQyxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLCtCQUErQjtRQUMvQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHVDQUF1QztRQUN2QyxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsU0FBUztRQUNULGtCQUFrQjtJQUN0Qjs7O0lBR0E7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7SUFDQSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCOzs7QUFHSjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7RUFFRSxVQUFVLEVBQUUsa0NBQWtDO0FBQ2hEO0FBQ0E7O0VBRUUsVUFBVSxFQUFFLGtDQUFrQztBQUNoRDs7QUFFQTs7RUFFRSxVQUFVLEVBQUUsa0NBQWtDO0FBQ2hEO0FBQ0E7O0FBRUEsVUFBVSxFQUFFLGtDQUFrQztBQUM5Qzs7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgIGJvcmRlci1yYWRpdXM6IDhweDsgXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgIGJvcmRlci1yYWRpdXM6IDhweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xuICAgIC8qIERhcmsgYmx1ZSBiYWNrZ3JvdW5kICovXG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvKiBBZGp1c3QgaGVpZ2h0IHRvIG1hdGNoIHRoZSBvcmRlciBwYWdlICovXG4gICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbnVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnRvdGFsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kZWxpdmVyeS1kYXRlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yZGVyLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIC8qIEZpeGVkIHRhYmxlIGxheW91dCAqL1xufVxuXG4ub3JkZXItZ3JpZCB0aCxcbi5vcmRlci1ncmlkIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIEVuc3VyZSBjb250ZW50IHdyYXBzICovXG59XG5cbi5vcmRlci1ncmlkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJzICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8qIE1hdGNoIHRoZSBpbnZlbnRvcnkgZ3JpZCBmb250IHNpemUgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvKiBNYXRjaCB0aGUgaW52ZW50b3J5IGdyaWQgZm9udCBzaXplICovXG59XG5cblxuLm9yZGVyLWdyaWQgdGg6bnRoLWNoaWxkKDEpLFxuLm9yZGVyLWdyaWQgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDQwJTsgLyogV2lkZXIgZGVzY3JpcHRpb24gY29sdW1uICovXG59XG5cbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCg0KSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiAxNyU7IC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG59XG5cbi5vcmRlci1ncmlkIHRoOm50aC1jaGlsZCgzKSxcbi5vcmRlci1ncmlkIHRkOm50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiAxNyU7IC8qIEFkanVzdCB3aWR0aCBmb3IgdG90YWwgY29sdW1uICovXG59XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIHAsXG4gICAgdWwge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgdWwgbGkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm9yZGVyLWdyaWQgdGgsXG4gICAgLm9yZGVyLWdyaWQgdGQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB9XG5cbiAgICAub3JkZXItZ3JpZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBGdWxsIHdpZHRoIGZvciBncmlkIG9uIG1vYmlsZSAqL1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8qIFJlbW92ZSBtYXJnaW4gKi9cbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAvKiBSZW1vdmUgYm9yZGVyICovXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAvKiBFbnN1cmUgcHJvcGVyIHRhYmxlIGxheW91dCAqL1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBGdWxsIHdpZHRoIGZvciBjb250YWluZXIgb24gbW9iaWxlICovXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLyogUmVtb3ZlIG1hcmdpbiAqL1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAvKiBSZW1vdmUgcGFkZGluZyAqL1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIC8qIFJlbW92ZSBib3JkZXIgKi9cbiAgICB9XG5cbiAgXG4gICAgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm9yZGVyLWdyaWQgdHIuYm9sZC1yb3cge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gICAgfVxuXG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zdWJtaXR0ZWQtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIGNvbG9yOiAzMzM7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uby13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGFibGUgdGg6bnRoLWNoaWxkKDIpLFxuLnRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAxNyU7IC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG59XG4udGFibGUgdGg6bnRoLWNoaWxkKDMpLFxuLnRhYmxlIHRkOm50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiAxNyU7IC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG59XG5cbi50YWJsZSB0aDpudGgtY2hpbGQoNCksXG4udGFibGUgdGQ6bnRoLWNoaWxkKDQpIHtcbiAgd2lkdGg6IDE3JTsgLyogQWRqdXN0IHdpZHRoIGZvciBwcmljZSBjb2x1bW4gKi9cbn1cbi50YWJsZSB0aDpudGgtY2hpbGQoNSksXG4udGFibGUgdGQ6bnRoLWNoaWxkKDUpIHtcbndpZHRoOiAxNyU7IC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG59XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 6501:
/*!***************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderNewComponent: () => (/* binding */ OrderNewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/logo.component */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var src_app_services_order_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order-form.service */ 5515);











const _c0 = a0 => ({
  "background-color": a0
});
function OrderNewComponent_Conditional_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Customer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 20)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Sales Rep:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.order.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.order.salesRepName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", "tel:" + ctx_r1.order.salesRepPhone, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.order.salesRepPhone);
  }
}
function OrderNewComponent_Conditional_0_Conditional_6_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const shipTo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", shipTo_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](shipTo_r3.shipToName);
  }
}
function OrderNewComponent_Conditional_0_Conditional_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ship to is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "label", 22)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Ship to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, OrderNewComponent_Conditional_0_Conditional_6_option_5_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OrderNewComponent_Conditional_0_Conditional_6_div_6_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.order.shipTos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (((tmp_3_0 = ctx_r1.orderForm.get("shipToId")) == null ? null : tmp_3_0.touched) || ((tmp_3_0 = ctx_r1.orderForm.get("shipToId")) == null ? null : tmp_3_0.dirty)) && ((tmp_3_0 = ctx_r1.orderForm.get("shipToId")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]));
  }
}
function OrderNewComponent_Conditional_0_Conditional_7_ng_container_19_tr_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "The number must be greater than zero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_Conditional_7_ng_container_19_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OrderNewComponent_Conditional_0_Conditional_7_ng_container_19_tr_1_div_6_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const profile_r5 = ctx_r3.$implicit;
    const i_r6 = ctx_r3.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r6)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c0, ctx_r1.isQuantityEntered(i_r6) ? "lightgrey" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r6].profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_9_0 = profile_r5.get("quantity")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r6].unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r6].packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](13, 8, ctx_r1.order.profiles[i_r6].salesPrice, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](16, 13, ctx_r1.getRowTotalPrice(i_r6), "USD", "symbol", "1.2-2"));
  }
}
function OrderNewComponent_Conditional_0_Conditional_7_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OrderNewComponent_Conditional_0_Conditional_7_ng_container_19_tr_1_Template, 17, 20, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.order.profiles[i_r6].isSpecial);
  }
}
function OrderNewComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Specials");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8)(3, "table", 9)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, OrderNewComponent_Conditional_0_Conditional_7_ng_container_19_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.profileControls.controls);
  }
}
function OrderNewComponent_Conditional_0_ng_container_27_tr_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "The number must be greater than zero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_ng_container_27_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OrderNewComponent_Conditional_0_ng_container_27_tr_1_div_6_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const profile_r8 = ctx_r6.$implicit;
    const i_r9 = ctx_r6.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r9)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c0, ctx_r1.isQuantityEntered(i_r9) ? "lightgrey" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r9].profileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_8_0 = profile_r8.get("quantity")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r9].unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.order.profiles[i_r9].packSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](13, 8, ctx_r1.order.profiles[i_r9].salesPrice, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](16, 13, ctx_r1.getRowTotalPrice(i_r9), "USD", "symbol", "1.2-2"));
  }
}
function OrderNewComponent_Conditional_0_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OrderNewComponent_Conditional_0_ng_container_27_tr_1_Template, 17, 20, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.order.profiles[i_r9].isSpecial);
  }
}
function OrderNewComponent_Conditional_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " At least one quantity is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enter at least one quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "The total has to be less than $10,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delivery date is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delivery date must be after today. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delivery date must be within 3 months. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delivery date cannot be on Sunday. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OrderNewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function OrderNewComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-logo", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Order Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, OrderNewComponent_Conditional_0_div_5_Template, 14, 4, "div", 5)(6, OrderNewComponent_Conditional_0_Conditional_6_Template, 7, 2, "div", 6)(7, OrderNewComponent_Conditional_0_Conditional_7_Template, 20, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "table", 9)(12, "thead")(13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Unit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, OrderNewComponent_Conditional_0_ng_container_27_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, OrderNewComponent_Conditional_0_div_28_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, OrderNewComponent_Conditional_0_div_29_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, OrderNewComponent_Conditional_0_div_34_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div")(36, "label", 13)(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Customer PO: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 15)(41, "label", 16)(42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Delivery Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, OrderNewComponent_Conditional_0_div_45_Template, 2, 0, "div", 11)(46, OrderNewComponent_Conditional_0_div_46_Template, 2, 0, "div", 11)(47, OrderNewComponent_Conditional_0_div_47_Template, 2, 0, "div", 11)(48, OrderNewComponent_Conditional_0_div_48_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.orderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("companyId", ctx_r1.order.companyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.order.customerName && ctx_r1.order.salesRepName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.order.shipTos ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.hasSpecials ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.profileControls.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_7_0 = ctx_r1.orderForm.get("profiles")) == null ? null : tmp_7_0.hasError("atLeastOneQuantity")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.profileControls.touched && (ctx_r1.profileControls.errors == null ? null : ctx_r1.profileControls.errors["atLeastOneQuantity"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Total price: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](33, 15, ctx_r1.totalPrice, "USD", "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.totalPrice > 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.formControls["deliveryDate"].touched && (ctx_r1.formControls["deliveryDate"].errors == null ? null : ctx_r1.formControls["deliveryDate"].errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.formControls["deliveryDate"].dirty && (ctx_r1.formControls["deliveryDate"].errors == null ? null : ctx_r1.formControls["deliveryDate"].errors["dateAfterTomorrow"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.formControls["deliveryDate"].dirty && (ctx_r1.formControls["deliveryDate"].errors == null ? null : ctx_r1.formControls["deliveryDate"].errors["dateWithinThreeMonths"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.formControls["deliveryDate"].dirty && (ctx_r1.formControls["deliveryDate"].errors == null ? null : ctx_r1.formControls["deliveryDate"].errors["dateNotOnSunday"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.orderForm.valid);
  }
}
class OrderNewComponent {
  constructor(http, fb, router, snackBarService, orderService, route, cdr) {
    this.http = http;
    this.fb = fb;
    this.router = router;
    this.snackBarService = snackBarService;
    this.orderService = orderService;
    this.route = route;
    this.cdr = cdr;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.hasSpecials = false;
    this.submitted = false;
  }
  ngOnInit() {
    // Get customerId from route parameters
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.customerId = id ? +id : NaN;
      this.loadOrderData(this.customerId);
    });
  }
  loadOrderData(customerId) {
    this.orderService.getOrderData(customerId).subscribe({
      next: order => {
        this.order = order;
        this.hasSpecials = this.order.profiles.some(profile => profile.isSpecial);
        const shipToValidators = order.shipTos?.length ? [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] : [];
        this.orderForm = this.fb.group({
          customerId: [order.customerId],
          deliveryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.dateAfterTomorrowValidator, this.dateWithinThreeMonthsValidator, this.dateNotOnSundayValidator]],
          shipToId: ['', shipToValidators],
          customerPo: [''],
          totalPrice: [0],
          // Initialize totalPrice
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
      const packSize = this.order.profiles[i].packSize || 0; // Assuming 'packSize' is a property of 'profile'
      const price = this.order.profiles[i].salesPrice || 0; // Assuming 'salesPrice' is the price per unit
      totalPrice += quantity * packSize * price;
    }
    return totalPrice;
  }
  getRowTotalPrice(index) {
    const quantity = this.profileControls.at(index).get('quantity')?.value || 0;
    const packSize = this.order.profiles[index].packSize || 0; // Assuming 'packSize' is a property of 'profile'
    const price = this.order.profiles[index].salesPrice || 0; // Assuming 'salesPrice' is the price per unit
    return quantity * packSize * price;
  }
  createProfileGroup(profile) {
    return this.fb.group({
      profileDid: [profile.id],
      // Use id from the API response as profileDid
      quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)]
    });
  }
  onSubmit() {
    this.snackBarService.showSnackBar('Submitting Order...');
    if (this.orderForm.valid) {
      console.log('Form Submitted', this.orderForm.value);
      const order = this.orderForm.value;
      order.profiles = order.profiles.filter(profile => profile.quantity > 0);
      order.totalPrice = this.totalPrice; // Calculate total price
      // POST request to the API
      this.orderService.placeOrder(this.customerId, order).subscribe({
        next: orderConfirmation => {
          console.log('Order submitted successfully', orderConfirmation);
          this.router.navigate(['/customer', this.customerId, 'order-confirmation'], {
            state: {
              order: orderConfirmation,
              companyId: this.order.companyId
            }
          });
          this.snackBarService.showSnackBar('Order submitted successfully');
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
          this.snackBarService.showSnackBar(errorMessage);
          console.error('Error submitting order', error);
        }
      });
      this.submitted = true;
    } else {
      this.orderForm.markAllAsTouched(); // Mark all controls as touched to show validation errors
    }
  }
  get dataToBeSubmitted() {
    const data = this.orderForm.value;
    data.profiles = data.profiles.filter(profile => profile.quantity > 0);
    return data;
  }
  isQuantityInvalid(index) {
    return this.profileControls.at(index).get('quantity')?.invalid || false;
  }
  isQuantityEntered(index) {
    return typeof this.profileControls.at(index).get('quantity')?.value === 'number';
  }
  // validator
  dateAfterTomorrowValidator(control) {
    const dateValue = new Date(control.value);
    const today = new Date();
    return dateValue > today ? null : {
      dateAfterTomorrow: true
    };
  }
  // validator
  atLeastOneQuantityValidator(control) {
    const formArray = control;
    const hasAtLeastOneQuantity = formArray.controls.some(group => group.get('quantity')?.value > 0);
    return hasAtLeastOneQuantity ? null : {
      atLeastOneQuantity: true
    };
  }
  // validator
  dateWithinThreeMonthsValidator(control) {
    const dateValue = new Date(control.value);
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    threeMonthsFromNow.setHours(0, 0, 0, 0);
    return dateValue <= threeMonthsFromNow ? null : {
      dateWithinThreeMonths: true
    };
  }
  // validator
  dateNotOnSundayValidator(control) {
    const dateValue = new Date(control.value);
    return dateValue.getDay() != 6 ? null : {
      dateNotOnSunday: true
    };
  }
  static #_ = this.ɵfac = function OrderNewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OrderNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_order_form_service__WEBPACK_IMPORTED_MODULE_3__.OrderFormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OrderNewComponent,
    selectors: [["app-order-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[1, "order-form", 3, "formGroup"], [1, "order-form", 3, "ngSubmit", "formGroup"], [1, "container"], [3, "companyId"], [1, "page-title"], ["class", "customer-sales-info", 4, "ngIf"], [1, "shipto-dropdown"], [1, "section-title"], ["formArrayName", "profiles", 1, "profiles"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "error", 4, "ngIf"], [1, "total-price"], ["for", "customer-po"], ["id", "customer-po", "formControlName", "customerPo", "type", "text", 1, "customer-po"], [1, "delivery-date"], ["for", "delivery-date"], ["id", "delivery-date", "formControlName", "deliveryDate", "type", "date", 1, "input-date"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "customer-sales-info"], [1, "sales-rep-info"], [3, "href"], ["for", "ship-to"], ["id", "ship-to", "formControlName", "shipToId", 1, "input-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "error"], [3, "formGroupName", "ngStyle", 4, "ngIf"], [3, "formGroupName", "ngStyle"], ["type", "text", "formControlName", "profileDid", 1, "input-text", "hidden-column"], ["type", "number", "formControlName", "quantity", 1, "input-number"]],
    template: function OrderNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, OrderNewComponent_Conditional_0_Template, 52, 20, "form", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.order ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent],
    styles: ["body[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  text-align: center;\n  margin: 10px 0;\n  text-decoration: none;\n}\n\n.customer-sales-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px; \n\n  margin-bottom: 10px;\n}\n\n.sales-rep-info[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.shipto-dropdown[_ngcontent-%COMP%] {\n  margin-top: 5px; \n\n  display: flex;\n  align-items: center;\n  font-size: medium;\n}\n\n.shipto-dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px; \n\n}\n\n.input-select[_ngcontent-%COMP%] {\n  width: auto; \n\n  padding: 4px; \n\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 20px; \n\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 8px;\n  text-align: left;\n  word-wrap: break-word;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d3d3d3;\n  color: #333;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 30%; \n\n}\n\n\n\n.hidden-column[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: large;\n}\n\n.input-text[_ngcontent-%COMP%], \n.input-select[_ngcontent-%COMP%], \n.input-date[_ngcontent-%COMP%], \n.input-number[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin: 4px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.input-select[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 4px;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: rgba(0, 16, 46, 1);\n}\n\n\n.input-number[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2px; \n\n  margin: 3px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n\nlabel[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.customer-po[_ngcontent-%COMP%] {\nwidth: 140px;\n}\n\n\n\n@media (max-width: 600px) {\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 14px;\n    word-wrap: break-word;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 5px;\n  }\n\n  .table[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    border: 0;\n    display: table;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n\n  .profiles[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .table[_ngcontent-%COMP%] {\n    width: 100%;\n\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    width: 17%; \n\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    width: 17%; \n\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    width: 16%; \n\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  width: 20%; \n\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  width: 20%; \n\n}\n}\n\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center; \n\n}\n\n.total-price[_ngcontent-%COMP%] {\n  font-weight: bold; \n\n  text-align: right; \n\n  font-size: medium;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOzs7O0FBSUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUUsd0JBQXdCO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWUsRUFBRSxpQkFBaUI7RUFDbEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSxzQkFBc0I7QUFDNUM7O0FBRUE7RUFDRSxXQUFXLEVBQUUsMkJBQTJCO0VBQ3hDLFlBQVksRUFBRSxjQUFjO0FBQzlCOztBQUVBO0VBQ0UsZUFBZSxFQUFFLHdCQUF3QjtFQUN6QyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsVUFBVSxFQUFFLDZCQUE2QjtBQUMzQzs7OztBQUlBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTs7OztFQUlFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUUsNENBQTRDO0VBQzFELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7OztBQUlBO0VBQ0U7O0lBRUUsZUFBZTtJQUNmLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVzs7RUFFYjs7RUFFQTs7SUFFRSxVQUFVLEVBQUUsa0NBQWtDO0VBQ2hEO0VBQ0E7O0lBRUUsVUFBVSxFQUFFLGtDQUFrQztFQUNoRDs7RUFFQTs7SUFFRSxVQUFVLEVBQUUsa0NBQWtDO0VBQ2hEO0VBQ0E7O0VBRUEsVUFBVSxFQUFFLGtDQUFrQztBQUNoRDs7QUFFQTs7RUFFRSxVQUFVLEVBQUUsa0NBQWtDO0FBQ2hEO0FBQ0E7OztBQUdBOztFQUVFLGtCQUFrQixFQUFFLGdEQUFnRDtBQUN0RTs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLG1CQUFtQjtFQUN0QyxpQkFBaUIsRUFBRSw0QkFBNEI7RUFDL0MsaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmN1c3RvbWVyLXNhbGVzLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2VkIGZvbnQgc2l6ZSAqL1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2FsZXMtcmVwLWluZm8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnNoaXB0by1kcm9wZG93biB7XG4gIG1hcmdpbi10b3A6IDVweDsgLyogTW92ZWQgaGlnaGVyICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uc2hpcHRvLWRyb3Bkb3duIGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBBZGRlZCB3aGl0ZSBzcGFjZSAqL1xufVxuXG4uaW5wdXQtc2VsZWN0IHtcbiAgd2lkdGg6IGF1dG87IC8qIE9ubHkgYXMgd2lkZSBhcyBuZWVkZWQgKi9cbiAgcGFkZGluZzogNHB4OyAvKiBMZXNzIHRhbGwgKi9cbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7IC8qIEluY3JlYXNlZCBmb250IHNpemUgKi9cbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4udGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhYmxlIHRkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGFibGUgdGg6bnRoLWNoaWxkKDEpLFxuLnRhYmxlIHRkOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAzMCU7IC8qIFdpZGVyIGRlc2NyaXB0aW9uIGNvbHVtbiAqL1xufVxuXG5cblxuLmhpZGRlbi1jb2x1bW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uaW5wdXQtdGV4dCxcbi5pbnB1dC1zZWxlY3QsXG4uaW5wdXQtZGF0ZSxcbi5pbnB1dC1udW1iZXIge1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmlucHV0LXNlbGVjdCB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5kZWxpdmVyeS1kYXRlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYsIDQ2LCAxKTtcbn1cblxuXG4uaW5wdXQtbnVtYmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJweDsgLyogQWRqdXN0IHRoZSBwYWRkaW5nIHRvIG1ha2UgaXQgbGVzcyB0YWxsICovXG4gIG1hcmdpbjogM3B4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuXG5sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmN1c3RvbWVyLXBvIHtcbndpZHRoOiAxNDBweDtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGFibGUgdGgsXG4gIC50YWJsZSB0ZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICAucHJvZmlsZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICB9XG5cbiAgLnRhYmxlIHRoOm50aC1jaGlsZCgyKSxcbiAgLnRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IDE3JTsgLyogQWRqdXN0IHdpZHRoIGZvciBwcmljZSBjb2x1bW4gKi9cbiAgfVxuICAudGFibGUgdGg6bnRoLWNoaWxkKDMpLFxuICAudGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICB3aWR0aDogMTclOyAvKiBBZGp1c3Qgd2lkdGggZm9yIHByaWNlIGNvbHVtbiAqL1xuICB9XG5cbiAgLnRhYmxlIHRoOm50aC1jaGlsZCg0KSxcbiAgLnRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgd2lkdGg6IDE2JTsgLyogQWRqdXN0IHdpZHRoIGZvciBwcmljZSBjb2x1bW4gKi9cbiAgfVxuICAudGFibGUgdGg6bnRoLWNoaWxkKDUpLFxuLnRhYmxlIHRkOm50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiAyMCU7IC8qIEFkanVzdCB3aWR0aCBmb3IgcHJpY2UgY29sdW1uICovXG59XG5cbi50YWJsZSB0aDpudGgtY2hpbGQoNiksXG4udGFibGUgdGQ6bnRoLWNoaWxkKDYpIHtcbiAgd2lkdGg6IDIwJTsgLyogQWRqdXN0IHdpZHRoIGZvciB0b3RhbCBjb2x1bW4gKi9cbn1cbn1cblxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0ZXh0IGluIHRhYmxlIGhlYWRlcnMgYW5kIGRhdGEgY2VsbHMgKi9cbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIE1ha2UgdGV4dCBib2xkICovXG4gIHRleHQtYWxpZ246IHJpZ2h0OyAvKiBBbGlnbiB0ZXh0IHRvIHRoZSByaWdodCAqL1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.component */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var src_app_services_order_links_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order-links.service */ 9518);












const _c0 = a0 => ["/customer", a0, "order-form"];
function OrderLinksComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 15);
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
function OrderLinksComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 15);
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
function OrderLinksComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Order Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderLinksComponent_tr_32_Template_a_click_7_listener() {
      const customer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.copyLink(customer_r4.id));
    })("keyup", function OrderLinksComponent_tr_32_Template_a_keyup_7_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, customer_r4.id));
  }
}
class OrderLinksComponent {
  constructor(http, fb, cdr, snackbarService, orderLinksService) {
    this.http = http;
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
    this.companies$ = this.orderLinksService.getCompanies().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(companies => {
      const defaultCompany = companies.find(company => company.name === 'PFF');
      if (defaultCompany) {
        this.form.get('company').setValue(defaultCompany);
      }
    }));
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
    this.form.get('searchText').valueChanges.subscribe(searchText => {
      this.filteredCustomers = this.customers.filter(customer => customer.name.toLowerCase().includes(searchText.toLowerCase()));
    });
  }
  generateLink(customerId) {
    const baseUrl = window.location.href.replace('/order-links', '');
    return `${baseUrl}/customer/${customerId}/order-form`;
  }
  copyLink(customerId) {
    const link = this.generateLink(customerId);
    navigator.clipboard.writeText(link).then(() => {
      this.snackbarService.showSnackBar('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }
  static #_ = this.ɵfac = function OrderLinksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OrderLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_order_links_service__WEBPACK_IMPORTED_MODULE_2__.OrderLinksService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: OrderLinksComponent,
    selectors: [["app-order-links"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 33,
    vars: 9,
    consts: [[3, "formGroup"], [1, "container"], [3, "companyId"], [1, "underlined"], [1, "filters"], [1, "filter-group"], ["for", "company-filter", 1, "filter-label"], ["id", "company-filter", "formControlName", "company"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "salesname-filter", 1, "filter-label"], ["id", "salesname-filter", "formControlName", "salesPerson"], ["for", "customer-search", 1, "filter-label"], ["type", "text", "id", "customer-search", "placeholder", "Search Customers", "formControlName", "searchText"], [1, "order-grid"], [4, "ngFor", "ngForOf"], [3, "ngValue"], ["target", "_blank", 3, "routerLink"], ["href", "javascript:void(0)", 3, "click", "keyup"]],
    template: function OrderLinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-logo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Company:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, OrderLinksComponent_option_10_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Sales Rep:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, OrderLinksComponent_option_16_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Customer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "table", 13)(23, "thead")(24, "tr")(25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Order Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Copy Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, OrderLinksComponent_tr_32_Template, 9, 4, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("companyId", (tmp_1_0 = ctx.form.get("company")) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 5, ctx.companies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 7, ctx.salesPersons$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredCustomers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
    styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    background-color: #f0f0f0; \n\n    color: #000000; \n\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #ffffff; \n\n    color: #000000; \n\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: var(--image-background-color);\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px; \n\n    border-radius: 8px;\n}\n\n.underlined[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-top: 20px; \n\n    margin-bottom: 20px; \n\n    text-decoration: none; \n\n}\n\n.filters[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column; \n\n    gap: 10px; \n\n    align-items: flex-start; \n\n    font-size: 18px; \n\n}\n\n.filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center; \n\n    gap: 5px; \n\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n    font-family: Arial, sans-serif; \n\n    margin: 0; \n\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 18px; \n\n    font-family: Arial, sans-serif; \n\n    padding: 5px;\n    width: 100px; \n\n    text-align: left; \n\n    margin: 0; \n\n}\n\n.order-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin: 20px 0;\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 12px; \n\n    text-align: left;\n    word-wrap: break-word; \n\n    font-size: 16px; \n\n}\n\n.order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #d3d3d3; \n\n    color: #333; \n\n    font-weight: bold;\n}\n\n.copy-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n}\n\n@media (min-width: 601px) {\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: row; \n\n        justify-content: space-between; \n\n    }\n\n    .filter-group[_ngcontent-%COMP%] {\n        flex-direction: column; \n\n        align-items: flex-start; \n\n        width: auto; \n\n    }\n\n    .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: auto; \n\n    }\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n    }\n\n    .filters[_ngcontent-%COMP%] {\n        flex-direction: column; \n\n    }\n\n    .filter-group[_ngcontent-%COMP%] {\n        width: 100%; \n\n        align-items: flex-start; \n\n    }\n\n    .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%; \n\n        margin-bottom: 5px; \n\n        text-align: left; \n\n    }\n\n    .order-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .order-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    #customer-search[_ngcontent-%COMP%]::placeholder {\n        font-size: 16px; \n\n        color: #999; \n\n    }\n    .image-container[_ngcontent-%COMP%] {\n        border-radius: 0;\n        padding: 0;\n        margin: 0;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1saW5rcy9vcmRlci1saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUIsRUFBRSx1Q0FBdUM7SUFDbEUsY0FBYyxFQUFFLHFCQUFxQjtBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUIsRUFBRSx1Q0FBdUM7SUFDbEUsY0FBYyxFQUFFLHVDQUF1QztJQUN2RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYSxFQUFFLDBDQUEwQztJQUN6RCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUUsZ0NBQWdDO0lBQ2xELG1CQUFtQixFQUFFLGdDQUFnQztJQUNyRCxxQkFBcUIsRUFBRSxxQkFBcUI7QUFDaEQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQixFQUFFLHVDQUF1QztJQUMvRCxTQUFTLEVBQUUsK0NBQStDO0lBQzFELHVCQUF1QixFQUFFLDRCQUE0QjtJQUNyRCxlQUFlLEVBQUUsdUJBQXVCO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQixFQUFFLDZCQUE2QjtJQUNsRCxRQUFRLEVBQUUsd0RBQXdEO0FBQ3RFOztBQUVBO0lBQ0ksZUFBZSxFQUFFLCtDQUErQztJQUNoRSw4QkFBOEIsRUFBRSxxQkFBcUI7SUFDckQsU0FBUyxFQUFFLGtCQUFrQjtBQUNqQzs7QUFFQTs7SUFFSSxlQUFlLEVBQUUscUNBQXFDO0lBQ3RELDhCQUE4QixFQUFFLHFCQUFxQjtJQUNyRCxZQUFZO0lBQ1osWUFBWSxFQUFFLDJCQUEyQjtJQUN6QyxnQkFBZ0IsRUFBRSx3QkFBd0I7SUFDMUMsU0FBUyxFQUFFLGtCQUFrQjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsYUFBYSxFQUFFLHFCQUFxQjtJQUNwQyxnQkFBZ0I7SUFDaEIscUJBQXFCLEVBQUUsNkNBQTZDO0lBQ3BFLGVBQWUsRUFBRSx1QkFBdUI7QUFDNUM7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSw0Q0FBNEM7SUFDdkUsV0FBVyxFQUFFLDJDQUEyQztJQUN4RCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CLEVBQUUsaUNBQWlDO1FBQ3RELDhCQUE4QixFQUFFLDJDQUEyQztJQUMvRTs7SUFFQTtRQUNJLHNCQUFzQixFQUFFLHFDQUFxQztRQUM3RCx1QkFBdUIsRUFBRSw0QkFBNEI7UUFDckQsV0FBVyxFQUFFLDJDQUEyQztJQUM1RDs7SUFFQTs7UUFFSSxXQUFXLEVBQUUsMkNBQTJDO0lBQzVEO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHNCQUFzQixFQUFFLG1DQUFtQztJQUMvRDs7SUFFQTtRQUNJLFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsdUJBQXVCLEVBQUUsNEJBQTRCO0lBQ3pEOztJQUVBOzs7UUFHSSxXQUFXLEVBQUUsbUNBQW1DO1FBQ2hELGtCQUFrQixFQUFFLHlCQUF5QjtRQUM3QyxnQkFBZ0IsRUFBRSx3QkFBd0I7SUFDOUM7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWUsRUFBRSxtQ0FBbUM7UUFDcEQsV0FBVyxFQUFFLGdEQUFnRDtJQUNqRTtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixTQUFTO0lBQ2I7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGhlIGJvZHkgKi9cbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQmxhY2sgdGV4dCBjb2xvciAqL1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kIGZvciB0aGUgY29udGFpbmVyICovXG4gICAgY29sb3I6ICMwMDAwMDA7IC8qIEJsYWNrIHRleHQgY29sb3IgZm9yIHRoZSBjb250YWluZXIgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2UtYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IGhlaWdodCB0byBtYXRjaCB0aGUgb3JkZXIgcGFnZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnVuZGVybGluZWQge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIFJlbW92ZSB1bmRlcmxpbmUgKi9cbn1cblxuLmZpbHRlcnMge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgdGhlIGZpbHRlciBncm91cHMgdmVydGljYWxseSAqL1xuICAgIGdhcDogMTBweDsgLyogQWRkcyB3aGl0ZSBzcGFjZSBiZXR3ZWVuIGVhY2ggZmlsdGVyIGdyb3VwICovXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSBsZWZ0ICovXG4gICAgZm9udC1zaXplOiAxOHB4OyAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cbn1cblxuLmZpbHRlci1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBBbGlnbiBpdGVtcyBob3Jpem9udGFsbHkgKi9cbiAgICBnYXA6IDVweDsgLyogUmVkdWNlIHNwYWNlIGJldHdlZW4gdGhlIGxhYmVsIGFuZCB0aGUgaW5wdXQvc2VsZWN0ICovXG59XG5cbi5maWx0ZXItbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2UgZm9udCBzaXplIHRvIG1hdGNoIHRoZSBzZWxlY3QgYm94ICovXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBFbnN1cmUgc2FtZSBmb250ICovXG4gICAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgbWFyZ2luICovXG59XG5cbi5maWx0ZXJzIHNlbGVjdCxcbi5maWx0ZXJzIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE4cHg7IC8qIE1hdGNoIHRoZSBmb250IHNpemUgb2YgdGhlIGxhYmVsICovXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBFbnN1cmUgc2FtZSBmb250ICovXG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAxMDBweDsgLyogU2V0IGEgY29uc2lzdGVudCB3aWR0aCAqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IC8qIExlZnQtYWxpZ24gdGhlIHRleHQgKi9cbiAgICBtYXJnaW46IDA7IC8qIFJlbW92ZSBtYXJnaW4gKi9cbn1cblxuLm9yZGVyLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5vcmRlci1ncmlkIHRoLFxuLm9yZGVyLWdyaWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogMTJweDsgLyogSW5jcmVhc2UgcGFkZGluZyAqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyAvKiBFbnN1cmUgdGV4dCB3cmFwcyB3aXRoaW4gdGhlIHRhYmxlIGNlbGxzICovXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cbn1cblxuLm9yZGVyLWdyaWQgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGNvbG9yOiAjMzMzOyAvKiBEYXJrIGdyZXkgdGV4dCBjb2xvciBmb3IgdGFibGUgaGVhZGVycyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29weS1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xuICAgIC5maWx0ZXJzIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQWxpZ24gZmlsdGVyIGdyb3VwcyBpbiBhIHJvdyAqL1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIERpc3RyaWJ1dGUgc3BhY2UgYmV0d2VlbiBmaWx0ZXIgZ3JvdXBzICovXG4gICAgfVxuXG4gICAgLmZpbHRlci1ncm91cCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIEFsaWduIGxhYmVsIGFuZCBpbnB1dCB2ZXJ0aWNhbGx5ICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBpdGVtcyB0byB0aGUgbGVmdCAqL1xuICAgICAgICB3aWR0aDogYXV0bzsgLyogTGV0IHRoZSB3aWR0aCBiZSBkZXRlcm1pbmVkIGJ5IGNvbnRlbnQgKi9cbiAgICB9XG5cbiAgICAuZmlsdGVycyBzZWxlY3QsXG4gICAgLmZpbHRlcnMgaW5wdXQge1xuICAgICAgICB3aWR0aDogYXV0bzsgLyogTGV0IHRoZSB3aWR0aCBiZSBkZXRlcm1pbmVkIGJ5IGNvbnRlbnQgKi9cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG5cbiAgICAuZmlsdGVycyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGZpbHRlciBncm91cHMgdmVydGljYWxseSAqL1xuICAgIH1cblxuICAgIC5maWx0ZXItZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgZWFjaCBmaWx0ZXIgZ3JvdXAgKi9cbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSBsZWZ0ICovXG4gICAgfVxuXG4gICAgLmZpbHRlcnMgbGFiZWwsXG4gICAgLmZpbHRlcnMgc2VsZWN0LFxuICAgIC5maWx0ZXJzIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggZm9yIGxhYmVsIGFuZCBpbnB1dCAqL1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IC8qIFJlZHVjZSBib3R0b20gbWFyZ2luICovXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IC8qIExlZnQtYWxpZ24gdGhlIHRleHQgKi9cbiAgICB9XG5cbiAgICAub3JkZXItZ3JpZCB0aCxcbiAgICAub3JkZXItZ3JpZCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAjY3VzdG9tZXItc2VhcmNoOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgYXMgbmVlZGVkICovXG4gICAgICAgIGNvbG9yOiAjOTk5OyAvKiBPcHRpb25hbDogQ2hhbmdlIHRoZSBwbGFjZWhvbGRlciB0ZXh0IGNvbG9yICovXG4gICAgfVxuICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 4056:
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/http-logging.interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoggingInterceptor: () => (/* binding */ HttpLoggingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);




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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err); //EMPTY;
    }));
  }
  handleServerSideError(error) {
    console.error(error.error.message);
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
        console.log(error);
        this.snackBarService.showSnackBar('Internal server error, please try again later.');
        break;
      default:
        this.snackBarService.showSnackBar('Error fetching data, please try again later.');
        break;
    }
  }
  static #_ = this.ɵfac = function HttpLoggingInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HttpLoggingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: HttpLoggingInterceptor,
    factory: HttpLoggingInterceptor.ɵfac
  });
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class DriverRouteService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getDrivers() {
    return this.http.get(`${this.apiUrl}/drivers`);
  }
  getDeliveryRoute(driverName, deliveryDate) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('driverName', driverName).set('deliveryDate', deliveryDate);
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
  static #_ = this.ɵfac = function DriverRouteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DriverRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DriverRouteService,
    factory: DriverRouteService.ɵfac,
    providedIn: 'root'
  });
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.service */ 2365);



class GlobalErrorHandlerService {
  constructor(snackBarService) {
    this.snackBarService = snackBarService;
  }
  handleError(error) {
    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
      // Server-side error
      if (!navigator.onLine) {
        this.snackBarService.showSnackBar('No internet connection');
        return;
      }
      if (error.error instanceof ErrorEvent) {
        this.snackBarService.showSnackBar(error.error.message);
        return;
      }
      if (error.status === 413) {
        this.snackBarService.showSnackBar('File too large');
        return;
      }
      console.error('An error occurred:', error);
      console.log(JSON.stringify(error.error));
      this.snackBarService.showSnackBar('An error has occured: ' + error.error.message);
    } else {
      // Client-side error
      console.error(error);
    }
  }
  static #_ = this.ɵfac = function GlobalErrorHandlerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GlobalErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: GlobalErrorHandlerService,
    factory: GlobalErrorHandlerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4934:
/*!***********************************************!*\
  !*** ./src/app/services/inventory.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryService: () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class InventoryService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getInventoryItems(page, size, searchTerm) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('search', searchTerm);
    return this.http.get(`${this.apiUrl}/inventory`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.content));
  }
  static #_ = this.ɵfac = function InventoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: InventoryService,
    factory: InventoryService.ɵfac,
    providedIn: 'root'
  });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class OrderFormService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getOrderData(customerId) {
    return this.http.get(`${this.apiUrl}/customers/${customerId}/profiles`);
  }
  placeOrder(customerId, orderData) {
    return this.http.post(`${this.apiUrl}/customers/${customerId}/orders`, orderData);
  }
  static #_ = this.ɵfac = function OrderFormService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OrderFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: OrderFormService,
    factory: OrderFormService.ɵfac,
    providedIn: 'root'
  });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class OrderLinksService {
  constructor(http) {
    this.http = http;
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
  static #_ = this.ɵfac = function OrderLinksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OrderLinksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: OrderLinksService,
    factory: OrderLinksService.ɵfac,
    providedIn: 'root'
  });
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
  }
  showSnackBar(message, style) {
    this.snackBarRef = this.matSnackBar.open(message, this.action, {
      duration: this.duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPos,
      panelClass: style
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.closeSnackBar();
    });
  }
  closeSnackBar() {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }
  }
  static #_ = this.ɵfac = function SnackbarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SnackbarService,
    factory: SnackbarService.ɵfac,
    providedIn: 'root'
  });
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
  apiKey: 'devKey',
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
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-infinite-scroll */ 6739);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routing.module */ 4114);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/services/global-error-handler.service */ 7795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_core_interceptors_http_logging_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/core/interceptors/http-logging.interceptor */ 4056);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 6443);




















(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__.InfiniteScrollDirective, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__.ModalModule.forRoot()), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
    useClass: _app_core_interceptors_http_logging_interceptor__WEBPACK_IMPORTED_MODULE_3__.HttpLoggingInterceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ErrorHandler,
    useClass: _app_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.GlobalErrorHandlerService
  }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.provideHttpClient)(), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.provideAnimations)()]
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