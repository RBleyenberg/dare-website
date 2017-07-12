webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" [@routerAnimations]=\"prepareRouteTransition(outlet)\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.prepareRouteTransition = function (outlet) {
        var animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('routerAnimations', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('overview => home', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter, :leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ zIndex: 100 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateY(-100%)' })),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["p" /* animateChild */])()
                        ])),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' })),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["p" /* animateChild */])()
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('home => overview', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter, :leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(100%)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('contributor, wie-zijn-wij, geschiedenis, bedrijfs-overzicht, contact-detail, contact-form, software, mobiele, overige', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0, transform: 'scale(0)' })
                        ])
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':leave', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('.image', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* stagger */])(50, [
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateY(-50px)' }))
                            ])
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(-100%)' }))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])('*'))
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter contributor, wie-zijn-wij, geschiedenis, bedrijfs-overzicht, contact-detail, contact-form, software, mobiele, overige', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* stagger */])(200, [
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])('*'))
                            ])
                        ])
                    ])
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_page_group_groups_service__ = __webpack_require__("../../../../../src/app/index-page/group/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_page_group_group_component__ = __webpack_require__("../../../../../src/app/index-page/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index_page_image_image_component__ = __webpack_require__("../../../../../src/app/index-page/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__index_page_index_page_component__ = __webpack_require__("../../../../../src/app/index-page/index-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__index_page_preview_preview_component__ = __webpack_require__("../../../../../src/app/index-page/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__index_page_preview_preview_service__ = __webpack_require__("../../../../../src/app/index-page/preview/preview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__website_page_website_page_component__ = __webpack_require__("../../../../../src/app/website-page/website-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__website_page_website_detail_website_detail_component__ = __webpack_require__("../../../../../src/app/website-page/website-detail/website-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__index_page_image_for_preview_image_for_preview_component__ = __webpack_require__("../../../../../src/app/index-page/image-for-preview/image-for-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__wie_zijn_wij_page_wie_zijn_wij_component__ = __webpack_require__("../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__wie_zijn_wij_page_wie_zijn_wij_detail_wie_zijn_wij_detail_component__ = __webpack_require__("../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij-detail/wie-zijn-wij-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__geschiedenis_page_geschiedenis_component__ = __webpack_require__("../../../../../src/app/geschiedenis-page/geschiedenis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__geschiedenis_page_geschiedenis_detail_geschiedenis_detail_component__ = __webpack_require__("../../../../../src/app/geschiedenis-page/geschiedenis-detail/geschiedenis-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__bedrijfs_overzicht_page_bedrijfs_overzicht_component__ = __webpack_require__("../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__bedrijfs_overzicht_page_bedrijfs_overzicht_detail_bedrijfs_overzicht_detail_component__ = __webpack_require__("../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht-detail/bedrijfs-overzicht-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__contact_page_contact_component__ = __webpack_require__("../../../../../src/app/contact-page/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__contact_page_contact_detail_contact_detail_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-detail/contact-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__software_page_software_page_component__ = __webpack_require__("../../../../../src/app/software-page/software-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__software_page_software_detail_software_detail_component__ = __webpack_require__("../../../../../src/app/software-page/software-detail/software-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__mobiele_page_mobiele_page_component__ = __webpack_require__("../../../../../src/app/mobiele-page/mobiele-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__mobiele_page_mobiele_detail_mobiele_detail_component__ = __webpack_require__("../../../../../src/app/mobiele-page/mobiele-detail/mobiele-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__overige_page_overige_page_component__ = __webpack_require__("../../../../../src/app/overige-page/overige-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__overige_page_overige_detail_overige_detail_component__ = __webpack_require__("../../../../../src/app/overige-page/overige-detail/overige-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__contact_page_contact_form_contact_form_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__contact_page_contact_form_api_go_message_service__ = __webpack_require__("../../../../../src/app/contact-page/contact-form/api-go-message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__index_page_group_group_component__["a" /* GroupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__index_page_image_image_component__["a" /* ImageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__website_page_website_page_component__["a" /* WebsitePageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__website_page_website_detail_website_detail_component__["a" /* WebsiteDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_19__wie_zijn_wij_page_wie_zijn_wij_component__["a" /* WieZijnWijComponent */],
            __WEBPACK_IMPORTED_MODULE_20__wie_zijn_wij_page_wie_zijn_wij_detail_wie_zijn_wij_detail_component__["a" /* WieZijnWijDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__index_page_index_page_component__["a" /* IndexPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__index_page_image_for_preview_image_for_preview_component__["a" /* ImageForPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__index_page_preview_preview_component__["a" /* ImagePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__geschiedenis_page_geschiedenis_component__["a" /* GeschiedenisComponent */],
            __WEBPACK_IMPORTED_MODULE_22__geschiedenis_page_geschiedenis_detail_geschiedenis_detail_component__["a" /* GeschiedenisDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_23__bedrijfs_overzicht_page_bedrijfs_overzicht_component__["a" /* BedrijfsOverzichtComponent */],
            __WEBPACK_IMPORTED_MODULE_24__bedrijfs_overzicht_page_bedrijfs_overzicht_detail_bedrijfs_overzicht_detail_component__["a" /* BedrijfsOverzichtDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_25__contact_page_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_26__contact_page_contact_detail_contact_detail_component__["a" /* ContactDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_33__contact_page_contact_form_contact_form_component__["a" /* ContactFormComponent */],
            __WEBPACK_IMPORTED_MODULE_27__software_page_software_page_component__["a" /* SoftwarePageComponent */],
            __WEBPACK_IMPORTED_MODULE_28__software_page_software_detail_software_detail_component__["a" /* SoftwareDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_29__mobiele_page_mobiele_page_component__["a" /* MobielePageComponent */],
            __WEBPACK_IMPORTED_MODULE_30__mobiele_page_mobiele_detail_mobiele_detail_component__["a" /* MobieleDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_31__overige_page_overige_page_component__["a" /* OverigePageComponent */],
            __WEBPACK_IMPORTED_MODULE_32__overige_page_overige_detail_overige_detail_component__["a" /* OverigeDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* APP_ROUTES */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__index_page_group_groups_service__["a" /* GroupsService */], __WEBPACK_IMPORTED_MODULE_14__index_page_preview_preview_service__["a" /* PreviewService */], __WEBPACK_IMPORTED_MODULE_34__contact_page_contact_form_api_go_message_service__["a" /* ApiGoMessageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht-detail/bedrijfs-overzicht-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card fxFlex.xs=\"90\"\r\n         fxFlex.sm=\"90\"\r\n         fxFlex.md=\"75\"\r\n         fxFlex.lg=\"60\"\r\n         fxFlex.xl=\"50\">\r\n  <img [src]=\"info?.avatar\" alt=\"{{ info.name }}\">\r\n  <div class=\"name\">{{ info.title }}</div>\r\n\r\n  <div class=\"title\" [innerHTML]=\"info.p\"></div>\r\n  <button color=\"primary\" routerLink=\"/\" md-raised-button>Ga terug</button>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht-detail/bedrijfs-overzicht-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  border-radius: 15%;\n  margin-top: 3em;\n  width: 10em; }\n\nimg {\n  border: solid 2px rgba(0, 0, 0, 0.87);\n  box-shadow: 0px 1px 16px 3px rgba(0, 0, 0, 0.75); }\n\n.name {\n  padding-top: 20px;\n  font-size: 20pt;\n  color: #160e0e;\n  font-weight: bold; }\n\n.title {\n  text-align: left; }\n\n.title a {\n  color: #aaaaaa; }\n\nbutton {\n  margin-top: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht-detail/bedrijfs-overzicht-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedrijfsOverzichtDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BedrijfsOverzichtDetailComponent = (function () {
    function BedrijfsOverzichtDetailComponent() {
    }
    return BedrijfsOverzichtDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BedrijfsOverzichtDetailComponent.prototype, "info", void 0);
BedrijfsOverzichtDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'bedrijfs-overzicht',
        template: __webpack_require__("../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht-detail/bedrijfs-overzicht-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht-detail/bedrijfs-overzicht-detail.component.scss")]
    })
], BedrijfsOverzichtDetailComponent);

//# sourceMappingURL=bedrijfs-overzicht-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht-detail/bedrijfs-overzicht-detail.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BEDRIJFSOVERZICHT; });
var BEDRIJFSOVERZICHT = {
    primary: [
        {
            id: 1,
            title: 'Bedijfs overzicht',
            avatar: 'assets/ninja/repair.png',
            p: '<p>Dare-solutions is een betrouwbare partner in effectieve web oplossingen en ict. Bij het bedrijf staan de relatie met de klant en de excellente werkzaamheden hoog aangeschreven. Het is een bedrijf vol dynamiek, gezelligheid en unieke waarden. Daardoor onderscheidt Dare-solutions zich van andere bedrijven in dezelfde sector.</p><p>Bij Dare-solutions worden klanten eerlijk te woord gestaan. De ondernemers luisteren aandachtig en denken goed na over een passend advies, dat aansluit bij de wensen van de klant. Zo blijft Dare-solutions gestructureerd, gefocust en bijzonder.</p><h4>doelstellingen :</h4><ol>    <li>Kosten besparen voor de klant door effectieve applicaties te bedenken en ontwikkelen.</li>    <li>Partner voor de lange termijn worden.</li>    <li>Het niveau van het bedrijf van de klant omhoogtillen.</li>    <li>Klant op de hoogte houden van nieuwe ontwikkelingen.</li></ol><div>    <div>        <div>            <div>                <h4>Onze Visie</h4>                <p>Dare-solutions maakt een positief verschil door de unieke waarden, die nageleefd worden. Het verschil is op zakelijk vlak, waardoor andere bedrijven beter worden door de hulp van Dare-solutions. Daarnaast is de onderneming maatschappelijk betrokken bij de samenleving.</p>            </div>        </div>    </div>    <div>        <div>            <div>                <h4>Onze Missie</h4>                <p>Een stap verder gaan dan wordt verwacht. Het primaire doel is om goed contact te hebben met de klant. Vandaar dat producten en diensten op uitmuntend niveau worden gehouden. Het personeel geeft meer dan nodig is, waardoor het resultaat optimaal is.</p>            </div>        </div>    </div></div>'
        }
    ]
};
//# sourceMappingURL=bedrijfs-overzicht-detail.data.js.map

/***/ }),

/***/ "../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\r\n\r\n      <bedrijfs-overzicht fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data\">\r\n      </bedrijfs-overzicht>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\n  margin-top: 2em;\n  margin-bottom: 2em;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bedrijfs_overzicht_detail_bedrijfs_overzicht_detail_data__ = __webpack_require__("../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht-detail/bedrijfs-overzicht-detail.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedrijfsOverzichtComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BedrijfsOverzichtComponent = (function () {
    function BedrijfsOverzichtComponent(metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.data = __WEBPACK_IMPORTED_MODULE_1__bedrijfs_overzicht_detail_bedrijfs_overzicht_detail_data__["a" /* BEDRIJFSOVERZICHT */].primary;
        this.doAnimate = true;
        this.titleService.setTitle('Bedrijfs overzicht, voor al uw ICT - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Een overzicht van het bedrijf voor al uw ict werkzaamheden en meer... Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'Bedrijfs overzicht, voor al uw ICT - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Een overzicht van het bedrijf voor al uw ict werkzaamheden en meer... Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl/bedrijfs-overzicht' });
    }
    return BedrijfsOverzichtComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], BedrijfsOverzichtComponent.prototype, "doAnimate", void 0);
BedrijfsOverzichtComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-bedrijfs-overzicht-page',
        template: __webpack_require__("../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _b || Object])
], BedrijfsOverzichtComponent);

var _a, _b;
//# sourceMappingURL=bedrijfs-overzicht.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-detail/contact-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card fxFlex.xs=\"90\"\r\n         fxFlex.sm=\"90\"\r\n         fxFlex.md=\"75\"\r\n         fxFlex.lg=\"60\"\r\n         fxFlex.xl=\"50\">\r\n  <img [src]=\"info?.avatar\" alt=\"{{ info.name }}\">\r\n  <div class=\"name\">{{ info.title }}</div>\r\n  <div class=\"title\" [innerHTML]=\"info.p\"></div>\r\n\r\n\r\n  <contact-form></contact-form>\r\n\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-detail/contact-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  border-radius: 15%;\n  margin-top: 3em;\n  width: 10em; }\n\nimg {\n  border: solid 2px rgba(0, 0, 0, 0.87);\n  box-shadow: 0px 1px 16px 3px rgba(0, 0, 0, 0.75); }\n\n.name {\n  padding-top: 20px;\n  font-size: 20pt;\n  color: #160e0e;\n  font-weight: bold; }\n\n.title {\n  text-align: left; }\n\n.title a {\n  color: #aaaaaa; }\n\nbutton {\n  margin-top: 2em; }\n\n.margin-input {\n  width: 50%; }\n\nagm-map {\n  height: 325px; }\n\n.colorbox-1 {\n  background-color: #4CAF50;\n  margin-top: 2em; }\n\n.colorbox-1 > i {\n  margin-right: 2em; }\n\n.colorbox-name {\n  margin-right: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-detail/contact-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactDetailComponent = (function () {
    function ContactDetailComponent() {
        // api AIzaSyDnzyKogzW-IfEL3IQ06gp6lIdr9dH9cWg
        // google maps
        this.lat = 52.5383353;
        this.lng = 5.7068201;
    }
    return ContactDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ContactDetailComponent.prototype, "info", void 0);
ContactDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'contact-detail',
        template: __webpack_require__("../../../../../src/app/contact-page/contact-detail/contact-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-page/contact-detail/contact-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactDetailComponent);

//# sourceMappingURL=contact-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-detail/contact-detail.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTACT; });
var CONTACT = {
    primary: [
        {
            id: 1,
            title: 'Contact informatie en formulier',
            avatar: 'assets/ninja/email.png',
            p: '<p>    Vul de onderstaande formulier in en we bij Dare-solutions zullen onze uiterste best doen om u binnen 24 uur te woord te staan. Als dat niet snel genoeg is voor u kunt u ook altijd bellen.</p><p>Zodra het een aanvraag betrefd, zullen wij contact met u opnemen voor een persoonlijk gesprek.</p><p>    <div>        <address class="text-muted">          <strong>Dare-solutions bv.</strong><br>          Schipbeek 11<br>          8253 RD<br>          <abbr>Telefoon:</abbr> 06 102 32 706<br>        </address>        <address>          <a href="mailto:#">info@dare-solutions.nl</a>        </address>    </div>'
        }
    ]
};
//# sourceMappingURL=contact-detail.data.js.map

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-form/api-go-message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiGoMessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by R Bleyenberg on 7/12/2017.
 */





var ApiGoMessageService = (function () {
    function ApiGoMessageService(_http) {
        this._http = _http;
        this.API_ENDPOINT = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].slack_url;
    }
    ApiGoMessageService.prototype.saveContact = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.API_ENDPOINT, contact, options)
            .map(function (res) { return res.json(); });
    };
    return ApiGoMessageService;
}());
ApiGoMessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ApiGoMessageService);

var _a;
//# sourceMappingURL=api-go-message.service.js.map

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-form/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "  <form [formGroup]=\"frmContact\">\r\n    <div *ngIf=\"!res; else form\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutWrap>\r\n      <md-input-container class=\"margin-input\">\r\n        <input mdInput placeholder=\"Contact naam\" type=\"text\" formControlName=\"name\">\r\n        <div class=\"error\"\r\n             *ngIf=\"frmContact.get('name').hasError('required') && frmContact.get('name').touched\">\r\n          Vul een contact naam in\r\n        </div>\r\n      </md-input-container>\r\n\r\n      <md-input-container class=\"margin-input\">\r\n        <input mdInput placeholder=\"Email\" type=\"text\" formControlName=\"email\">\r\n        <div class=\"error\"\r\n             *ngIf=\"frmContact.get('email').hasError('required') && frmContact.get('email').touched\">\r\n          Vul email adres in\r\n        </div>\r\n        <div class=\"error\"\r\n             *ngIf=\"frmContact.get('email').hasError('email') && frmContact.get('email').touched\">\r\n          Geen goed email adres\r\n        </div>\r\n      </md-input-container>\r\n\r\n      <md-input-container class=\"margin-input\">\r\n        <input mdInput placeholder=\"telefoon\" type=\"text\" formControlName=\"phone\">\r\n        <div class=\"error\"\r\n             *ngIf=\"frmContact.get('phone').hasError('required') && frmContact.get('phone').touched\">\r\n          Vul een telefoon nummer in\r\n        </div>\r\n      </md-input-container>\r\n\r\n      <md-input-container class=\"margin-input\">\r\n        <textarea mdInput MdTextareaAutosize minRows=\"6\" placeholder=\"Uw vraag\" formControlName=\"message\"></textarea>\r\n        <div class=\"error\"\r\n             *ngIf=\"frmContact.get('message').hasError('required') && frmContact.get('message').touched\">\r\n          Vul een vraag in\r\n        </div>\r\n      </md-input-container>\r\n\r\n      <div class=\"md-button\">\r\n        <button [disabled]=\"!frmContact.valid\" color=\"accent\" md-raised-button (click)=\"onSubmit()\">Verstuur</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n\r\n\r\n  <ng-template #form>\r\n    <div class=\"send-success\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n      <md-card class=\"colorbox colorbox-1\">\r\n\r\n        <i class=\"material-icons\">check_circle</i>\r\n\r\n        <span class=\"colorbox-name\">Uw vraag is verstuurd!</span>\r\n        <span class=\"colorbox-count\">We doen ons best om binnen 24 uur te reageren.</span>\r\n\r\n      </md-card>\r\n\r\n    </div>\r\n  </ng-template>\r\n\r\n  <button color=\"primary\" routerLink=\"/\" md-raised-button>Ga terug</button>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-form/contact-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  border-radius: 15%;\n  margin-top: 3em;\n  width: 10em; }\n\nimg {\n  border: solid 2px rgba(0, 0, 0, 0.87);\n  box-shadow: 0px 1px 16px 3px rgba(0, 0, 0, 0.75); }\n\n.name {\n  padding-top: 20px;\n  font-size: 20pt;\n  color: #160e0e;\n  font-weight: bold; }\n\n.title {\n  text-align: left; }\n\n.title a {\n  color: #aaaaaa; }\n\nbutton {\n  margin-top: 2em; }\n\n.margin-input {\n  width: 50%; }\n\nagm-map {\n  height: 325px; }\n\n.colorbox-1 {\n  background-color: #4CAF50;\n  margin-top: 2em; }\n\n.colorbox-1 > i {\n  margin-right: 2em; }\n\n.colorbox-name {\n  margin-right: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-form/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_go_message_service__ = __webpack_require__("../../../../../src/app/contact-page/contact-form/api-go-message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactFormComponent = (function () {
    function ContactFormComponent(fb, apiGoMessageService) {
        this.fb = fb;
        this.apiGoMessageService = apiGoMessageService;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.frmContact = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    };
    ContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var formValue = this.frmContact.value;
        // cool stuff to transform form value
        // call AJAX
        this._sub = this.apiGoMessageService.saveContact(formValue)
            .subscribe(function (data) {
            console.log(data);
            _this.res = data;
        });
        this.frmContact.reset();
    };
    ContactFormComponent.prototype.ngOnDestroy = function () {
        // clean subscription when component destroy
        if (this._sub) {
            this._sub.unsubscribe();
        }
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'contact-form',
        template: __webpack_require__("../../../../../src/app/contact-page/contact-form/contact-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-page/contact-form/contact-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api_go_message_service__["a" /* ApiGoMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_go_message_service__["a" /* ApiGoMessageService */]) === "function" && _b || Object])
], ContactFormComponent);

var _a, _b;
//# sourceMappingURL=contact-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-page/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\r\n\r\n      <contact-detail fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data\">\r\n      </contact-detail>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/contact-page/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\n  margin-top: 2em;\n  margin-bottom: 2em;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-page/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_detail_contact_detail_data__ = __webpack_require__("../../../../../src/app/contact-page/contact-detail/contact-detail.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.data = __WEBPACK_IMPORTED_MODULE_1__contact_detail_contact_detail_data__["a" /* CONTACT */].primary;
        this.doAnimate = true;
        this.titleService.setTitle('Contact, stel een vraag of bel - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Stel een vraag of bel, wij proberen binnen 24 uur een antwoord te hebben voor u. Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'Contact, stel een vraag of bel - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Stel een vraag of bel, wij proberen binnen 24 uur een antwoord te hebben voor u. Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl/contact' });
    }
    return ContactComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], ContactComponent.prototype, "doAnimate", void 0);
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contact-page',
        template: __webpack_require__("../../../../../src/app/contact-page/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-page/contact.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/geschiedenis-page/geschiedenis-detail/geschiedenis-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card fxFlex.xs=\"90\"\r\n         fxFlex.sm=\"90\"\r\n         fxFlex.md=\"75\"\r\n         fxFlex.lg=\"60\"\r\n         fxFlex.xl=\"50\">\r\n  <img [src]=\"info?.avatar\" alt=\"{{ info.name }}\">\r\n  <div class=\"name\">{{ info.title }}</div>\r\n\r\n  <div class=\"title\" [innerHTML]=\"info.p\"></div>\r\n  <button color=\"primary\" routerLink=\"/\" md-raised-button>Ga terug</button>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/geschiedenis-page/geschiedenis-detail/geschiedenis-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  border-radius: 15%;\n  margin-top: 3em;\n  width: 10em; }\n\nimg {\n  border: solid 2px rgba(0, 0, 0, 0.87);\n  box-shadow: 0px 1px 16px 3px rgba(0, 0, 0, 0.75); }\n\n.name {\n  padding-top: 20px;\n  font-size: 20pt;\n  color: #160e0e;\n  font-weight: bold; }\n\n.title {\n  text-align: left; }\n\n.title a {\n  color: #aaaaaa; }\n\nbutton {\n  margin-top: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/geschiedenis-page/geschiedenis-detail/geschiedenis-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeschiedenisDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeschiedenisDetailComponent = (function () {
    function GeschiedenisDetailComponent() {
    }
    return GeschiedenisDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], GeschiedenisDetailComponent.prototype, "info", void 0);
GeschiedenisDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'geschiedenis',
        template: __webpack_require__("../../../../../src/app/geschiedenis-page/geschiedenis-detail/geschiedenis-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/geschiedenis-page/geschiedenis-detail/geschiedenis-detail.component.scss")]
    })
], GeschiedenisDetailComponent);

//# sourceMappingURL=geschiedenis-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/geschiedenis-page/geschiedenis-detail/geschiedenis-detail.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GESCHIEDENIS; });
var GESCHIEDENIS = {
    primary: [
        {
            id: 1,
            title: 'Bedijfs geschiedenis',
            avatar: 'assets/ninja/time.png',
            p: '<p>Dare-solutions is op 1 januari 2013 bedacht door David Stibbe en Remco Bleyenberg en hebben vanaf die tijd een webapplicatie in ontwikkeling gehad dat nu in productie is. Beide heren zijn al vanaf jongs bezig met computers (jaren 80), op latere leeftijd heeft de heer Stibbe zijn carriere binnen de branche opgebouwd en de heer Bleyenberg ging de engineering kant op. Al gauw ontstond het idee om samen een bedrijf te starten: Dare-solutions.</p><p>De naam Dare-solutions is afkomstig van de namen David en Remco.</p><p>Dare-solutions, dat gevestigd is in Dronten, is een betrouwbare partner in effectieve web oplossingen. Ze biedt diverse diensten en producten, zoals webdesign, ICT en software ontwikkeling.</p><p>De ondernemers zijn samen opgegroeid en je zou dan ook kunnen zeggen dat ze soort van broers zijn.</p><p>David en Remco hebben een duidelijke visie voor ogen. Ze streven naar een uniek bedrijf met goede contacten en uitstekende werkzaamheden. Beiden hebben specifieke vaardigheden, die ingezet worden voor Dare-solutions. Zo vullen de mannen elkaar goed aan en weten ze klanten aan zich te binden.</p><p>David richt zich voornamelijk op het programmeren. Als de klant het probleem kan uitleggen, is hij in staat om het te maken. Terwijl David zich richt op het technische verhaal, richt Remco zich op de binnen halen van klanten en de verzorging van de webapplicaties van Dare-solutions aan de front-end (hetgeen dat je in je browser ziet).</p><p>De ondernemers staan samen ergens voor. Ze geven Dare-solutions een duidelijke Identiteit door vast te houden aan unieke onderscheidende waarden.</p>'
        }
    ]
};
//# sourceMappingURL=geschiedenis-detail.data.js.map

/***/ }),

/***/ "../../../../../src/app/geschiedenis-page/geschiedenis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\r\n\r\n      <geschiedenis fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data\">\r\n      </geschiedenis>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/geschiedenis-page/geschiedenis.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\n  margin-top: 2em;\n  margin-bottom: 2em;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/geschiedenis-page/geschiedenis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geschiedenis_detail_geschiedenis_detail_data__ = __webpack_require__("../../../../../src/app/geschiedenis-page/geschiedenis-detail/geschiedenis-detail.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeschiedenisComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeschiedenisComponent = (function () {
    function GeschiedenisComponent(metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.data = __WEBPACK_IMPORTED_MODULE_1__geschiedenis_detail_geschiedenis_detail_data__["a" /* GESCHIEDENIS */].primary;
        this.doAnimate = true;
        this.titleService.setTitle('Bedrijfs geschiedenis, voor al uw ICT - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Een overzicht van de bedrijfs geschiedenis voor al uw ict werkzaamheden en meer... Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'Bedrijfs geschiedenis, voor al uw ICT - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Een overzicht van de bedrijfs geschiedenis voor al uw ict werkzaamheden en meer... Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl/bedrijfs-overzicht' });
    }
    return GeschiedenisComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], GeschiedenisComponent.prototype, "doAnimate", void 0);
GeschiedenisComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-geschiedenis-page',
        template: __webpack_require__("../../../../../src/app/geschiedenis-page/geschiedenis.component.html"),
        styles: [__webpack_require__("../../../../../src/app/geschiedenis-page/geschiedenis.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _b || Object])
], GeschiedenisComponent);

var _a, _b;
//# sourceMappingURL=geschiedenis.component.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <h2>{{group.title}}</h2>\r\n</div>\r\n<app-image-preview *ngIf=\"selectedImage\" (close)=\"selectImage(null)\" [image]=\"selectedImage\"></app-image-preview>\r\n<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutWrap>\r\n\r\n  <app-image *ngFor=\"let image of group.images\" [image]=\"image\" (click)=\"selectImage(image)\"\r\n             fxFlex.xs=\"70\"\r\n             fxFlex.sm=\"50\"\r\n             fxFlex.md=\"40\"\r\n             fxFlex.lg=\"20\"\r\n             fxFlex.xl=\"20\">\r\n\r\n  </app-image>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/index-page/group/group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  padding: 0 20px;\n  text-align: center; }\n\n.content {\n  text-align: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\napp-image:hover {\n  cursor: pointer;\n  outline: 4px solid rgba(255, 41, 39, 0.73); }\n\napp-image-preview {\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\napp-image {\n  margin: 0.3em !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index-page/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preview_preview_service__ = __webpack_require__("../../../../../src/app/index-page/preview/preview.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupComponent = (function () {
    function GroupComponent(_previewService) {
        this._previewService = _previewService;
        this.selectedImage = null;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this._previewService.register(this.group.title, this);
    };
    GroupComponent.prototype.selectImage = function (image) {
        this.selectedImage = image === this.selectedImage ? null : image;
    };
    return GroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], GroupComponent.prototype, "group", void 0);
GroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-group',
        template: __webpack_require__("../../../../../src/app/index-page/group/group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index-page/group/group.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__preview_preview_service__["a" /* PreviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__preview_preview_service__["a" /* PreviewService */]) === "function" && _a || Object])
], GroupComponent);

var _a;
//# sourceMappingURL=group.component.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/group/groups.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GROUPS; });
var GROUPS = [
    {
        title: 'welkom bij Dare-solutions',
        images: [
            {
                id: 1,
                url: './assets/ninja/hey.png',
                title: 'wie zijn wij',
                route: 'wie-zijn-wij',
                p1: 'Dare-solutions is een wereldwijd IT Consultant, Solutions en Services provider. Dare-solutions is opgericht in 2013 en is gevestigd in Dronten, Flevoland. Met zijn sterke R & D-erfgoed en innovatievermogen richt Dare-solutions zich nu op het gebruik van opkomende, storende technologieën, zoals cloud, mobiliteit, grote data en analyses, om krachtige oplossingen en producten voor klanten in een breed scala aan industrieën te bieden, waaronder: Tech, eCommerce, finance, auto, retail, logistiek, energie, productie, gezondheidszorg, telecommunicatie, media en entertainment, en reizen.',
            },
            {
                id: 2,
                url: './assets/ninja/time.png',
                title: 'Geschiedenis',
                route: 'bedrijfs-geschiedenis',
                p1: 'Dare-solutions is op 1 januari 2013 bedacht door David Stibbe en Remco Bleyenberg en hebben vanaf die tijd een webapplicatie in ontwikkeling gehad dat nu in productie is. Beide heren zijn al vanaf jongs bezig met computers (jaren 80), op latere leeftijd heeft de heer Stibbe zijn carriere binnen de branche opgebouwd en de heer Bleyenberg ging de engineering kant op. Al gauw ontstond het idee om samen een bedrijf te starten: Dare-solutions.'
            },
            {
                id: 3,
                url: './assets/ninja/repair.png',
                title: 'Bedrijfs overzicht',
                route: 'bedrijfs-overzicht',
                p1: 'Dare-solutions is een betrouwbare partner in effectieve weboplossingen en ict. Bij het bedrijf staan de relatie met de klant en de excellente werkzaamheden hoog aangeschreven. Het is een bedrijf vol dynamiek, gezelligheid en unieke waarden. Daardoor onderscheidt Dare-solutions zich van andere bedrijven in dezelfde sector.'
            },
            {
                id: 4,
                url: './assets/ninja/email.png',
                title: 'contact',
                route: 'contact',
                p1: 'Dare-solutions probeert binnen 24 uur een antwoord terug tegeven. Kunt u niet wachten op een antwoord op uw vraag niet vinden op deze website? Dan kunt u altijd bellen.'
            },
        ]
    },
    {
        title: 'Services',
        images: [
            {
                id: 5,
                url: './assets/ninja/website-laten-maken.png',
                title: 'website laten maken',
                route: 'website-laten-maken',
                p1: 'Bij Dare-solutions zijn wij trots op het creëren van mooie, bekroonde websites die schoon, gebruikersvriendelijk en mobiel zijn, die op alle apparaten werken. Ons proces richt zich op uw bedrijfsbehoeften en -doelstellingen om ervoor te zorgen dat uw nieuwe site leidt tot meer conversies. Website laten maken doet u dan ook bij Dare-solutions.'
            },
            {
                id: 6,
                url: './assets/ninja/software-ontwikkeling.png',
                title: 'software ontwikkeling',
                route: 'software-ontwikkeling',
                p1: 'Dare-solutions richt zich op het aanbieden van wereldwijde aangepaste applicatiesysteemontwikkelingsdiensten. Volgens de behoeften van de onderneming bieden wij kosteneffectieve, betrouwbare en veilige applicatiesystemen ontwikkeling en onderhouds oplossingen, waardoor bedrijven concurreren en meer zakelijke kansen winnen. Wij zijn de ideale strategische partners voor een onderneming.'
            },
            {
                id: 7,
                url: './assets/ninja/mobiele-applicaties.png',
                title: 'mobiele applicaties',
                route: 'mobiele-applicatie-laten-maken',
                p1: 'Dare-solutions UX-team bestaat uit visuele ontwerpers en ontwikkelaars van de front-end. Het team heeft bijna tien jaar ervaring in UX-ontwerp. Onze kwaliteit van service en talent kreeg hoge goedkeuringsgraden van onze klanten. We hebben een goede reputatie en zichtbaarheid in de industrie.'
            },
            {
                id: 8,
                url: './assets/ninja/cloud-computing.png',
                title: 'overige diensten',
                route: 'overige-diensten',
                p1: 'Buiten onze "normale diensten" kan Dare-solutions u ook helpen bij bv cloud-computing, advies diensten, presentaties ect.'
            },
        ]
    }
];
//# sourceMappingURL=groups.data.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/group/groups.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__groups_data__ = __webpack_require__("../../../../../src/app/index-page/group/groups.data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GroupsService = (function () {
    function GroupsService() {
        this._groups = [].concat(__WEBPACK_IMPORTED_MODULE_1__groups_data__["a" /* GROUPS */]);
    }
    GroupsService.prototype.getAll = function () {
        return this._groups;
    };
    return GroupsService;
}());
GroupsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], GroupsService);

//# sourceMappingURL=groups.service.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/image-for-preview/image-for-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\r\n<img class=\"image-1\" src=\"{{image.url}}\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/index-page/image-for-preview/image-for-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-1 {\n  height: 12em;\n  width: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index-page/image-for-preview/image-for-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageForPreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageForPreviewComponent = (function () {
    function ImageForPreviewComponent() {
        this.image = {};
    }
    return ImageForPreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('image'),
    __metadata("design:type", Object)
], ImageForPreviewComponent.prototype, "image", void 0);
ImageForPreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-image-for-preview',
        template: __webpack_require__("../../../../../src/app/index-page/image-for-preview/image-for-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index-page/image-for-preview/image-for-preview.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ImageForPreviewComponent);

//# sourceMappingURL=image-for-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"image\">\r\n  <img src=\"{{image.url}}\">\r\n  <h3>{{image.title}}</h3>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/index-page/image/image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  height: 6em;\n  width: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index-page/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageComponent = (function () {
    function ImageComponent() {
        this.image = {};
    }
    return ImageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('image'),
    __metadata("design:type", Object)
], ImageComponent.prototype, "image", void 0);
ImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-image',
        template: __webpack_require__("../../../../../src/app/index-page/image/image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index-page/image/image.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ImageComponent);

//# sourceMappingURL=image.component.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/index-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewport\">\r\n\r\n  <app-group class=\"group\" *ngFor=\"let group of groups;trackBy: group?.title\" [group]=\"group\"></app-group>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/index-page/index-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewport {\n  margin-top: 4em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index-page/index-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_groups_service__ = __webpack_require__("../../../../../src/app/index-page/group/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexPageComponent = (function () {
    function IndexPageComponent(groupsService, metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.animatePage = true;
        this.groups = groupsService.getAll();
        this.titleService.setTitle('website | software | applicaties laten maken - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Van een website laten maken, webapplicaties of software ontwikkeling tot cloud technology implementatie, Dare-solutions is er voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'website | software | applicaties laten maken - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Van een website laten maken, webapplicaties of software ontwikkeling tot cloud technology implementatie, Dare-solutions is er voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl' });
    }
    return IndexPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], IndexPageComponent.prototype, "animatePage", void 0);
IndexPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'app-index-page',
        template: __webpack_require__("../../../../../src/app/index-page/index-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index-page/index-page.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* query */])('.group .image, .group .upload-area', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-50px)', opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* query */])('.group', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* stagger */])(300, [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* query */])('.image, .upload-area', [
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* stagger */])(100, [
                                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])('*'))
                                ])
                            ])
                        ])
                    ])
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__group_groups_service__["a" /* GroupsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__group_groups_service__["a" /* GroupsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _c || Object])
], IndexPageComponent);

var _a, _b, _c;
//# sourceMappingURL=index-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let image of activeImages\" class=\"image-container\" fxLayout=\"row\" fxLayoutAlign=\"center start\" @image>\r\n\r\n  <div class=\"image-info\"\r\n       fxFlex\r\n       fxFlex.sm=\"90\"\r\n       fxFlex.md=\"60\"\r\n       fxFlex.lg=\"50\"\r\n       fxFlex.xl=\"40\">\r\n    <h2>{{image.title}}</h2>\r\n    <p>\r\n      {{image.p1}}\r\n    </p>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <button routerLink=\"/{{image.route}}\" color=\"primary\" md-raised-button>Lees meer</button>\r\n    <button md-raised-button  (click)=\"close()\">sluit</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-preview\" fxFlex=\"20\" fxHide.lt-md>\r\n    <app-image-for-preview [image]=\"image\"></app-image-for-preview>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/index-page/preview/preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #ECF6FF;\n  color: black;\n  position: relative;\n  height: 400px;\n  overflow: auto;\n  display: block; }\n\n.image-container {\n  padding: 50px;\n  display: table;\n  width: 100%; }\n\n.image-preview {\n  display: table-cell;\n  vertical-align: top;\n  text-align: right;\n  width: 30%; }\n\n.image-preview img {\n  border: 5px solid white;\n  height: 300px; }\n\n.image-info {\n  font-size: 1rem;\n  width: 70%;\n  padding-right: 50px;\n  display: table-cell;\n  vertical-align: middle; }\n\napp-image-for-preview {\n  display: block;\n  width: 100%;\n  height: 300px; }\n\nbutton {\n  margin-right: 0.8em;\n  margin-bottom: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index-page/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_service__ = __webpack_require__("../../../../../src/app/index-page/preview/preview.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImagePreviewComponent = (function () {
    function ImagePreviewComponent(_previewService) {
        var _this = this;
        this._previewService = _previewService;
        this.closeNotify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.activeImages = [];
        this.count = 0;
        _previewService.onOtherPreviewOpen(this, function () { return _this.close(); });
    }
    Object.defineProperty(ImagePreviewComponent.prototype, "image", {
        set: function (img) {
            this.activeImages = [];
            if (img && this.activeImages[0] !== img) {
                this.activeImages.push(img);
                this.count++;
                this._previewService.notifyOpen(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ImagePreviewComponent.prototype.close = function () {
        this.closeNotify.next();
    };
    return ImagePreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])('close'),
    __metadata("design:type", Object)
], ImagePreviewComponent.prototype, "closeNotify", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('image'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ImagePreviewComponent.prototype, "image", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@preview'),
    __metadata("design:type", Number)
], ImagePreviewComponent.prototype, "count", void 0);
ImagePreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-image-preview',
        template: __webpack_require__("../../../../../src/app/index-page/preview/preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index-page/preview/preview.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('preview', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ overflow: 'hidden', height: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('.image-container', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0 }))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s cubic-bezier(0.35, 0, 0.25, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('.image-container *', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* stagger */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 1 })))
                        ])
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ overflow: 'hidden' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s cubic-bezier(0.35, 0, 0.25, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '0px' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('* => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter, :leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ position: 'absolute', left: '0%' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ left: '100%' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["p" /* animateChild */])(),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1200ms cubic-bezier(0.35, 0, 0.25, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0, left: '-100%' }))
                        ])),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1200ms cubic-bezier(0.35, 0, 0.25, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])('*')),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["p" /* animateChild */])()
                        ]), { delay: 200 }),
                    ])
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('image', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('*', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(200px)', opacity: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* stagger */])(100, [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1200ms cubic-bezier(0.35, 0, 0.25, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])('*'))
                        ])
                    ])
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__preview_service__["a" /* PreviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__preview_service__["a" /* PreviewService */]) === "function" && _a || Object])
], ImagePreviewComponent);

var _a;
//# sourceMappingURL=preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/preview/preview.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_groups_service__ = __webpack_require__("../../../../../src/app/index-page/group/groups.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreviewService = (function () {
    function PreviewService(_groups) {
        this._groups = _groups;
        this.groupsByName = new Map();
        this._callbacks = new Map();
    }
    PreviewService.prototype.openImageById = function (id) {
        var groups = this._groups.getAll();
        var data;
        outer: for (var i = 0; i < groups.length; i++) {
            var group_1 = groups[i];
            for (var j = 0; j < group_1.images.length; j++) {
                var record_1 = group_1.images[j];
                if (record_1.id === id) {
                    data = [group_1, record_1];
                    break outer;
                }
            }
        }
        if (!data)
            return;
        var group = data[0], record = data[1];
        var component = this.groupsByName.get(group.title);
        component.selectImage(record);
    };
    PreviewService.prototype.register = function (name, component) {
        this.groupsByName.set(name, component);
    };
    PreviewService.prototype.onOtherPreviewOpen = function (previewComponent, cb) {
        this._callbacks.set(previewComponent, cb);
    };
    PreviewService.prototype.notifyOpen = function (previewComponent) {
        var _this = this;
        Promise.resolve().then(function () {
            _this._callbacks.forEach(function (cb, cmp) {
                if (previewComponent !== cmp) {
                    cb();
                }
            });
        });
    };
    return PreviewService;
}());
PreviewService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__group_groups_service__["a" /* GroupsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__group_groups_service__["a" /* GroupsService */]) === "function" && _a || Object])
], PreviewService);

var _a;
//# sourceMappingURL=preview.service.js.map

/***/ }),

/***/ "../../../../../src/app/mobiele-page/mobiele-detail/mobiele-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contributor\">\r\n  <img [src]=\"info?.avatar\" alt=\"{{ info.name }}\">\r\n  <div class=\"name\">{{ info.name }}</div>\r\n  <div class=\"title\">\r\n    <a [href]=\"info.url\" target=\"_blank\">\r\n      {{  info.title }}\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/mobiele-page/mobiele-detail/mobiele-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 959px) {\n  :host {\n    width: 200px;\n    margin-top: 54px; } }\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  :host {\n    width: 250px;\n    margin-top: 54px; } }\n\n@media screen and (min-width: 1280px) {\n  :host {\n    width: 330px;\n    margin-top: 54px; } }\n\n.contributor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.contributor img {\n  border-radius: 50%; }\n\nimg {\n  border: solid 2px rgba(255, 255, 255, 0.1);\n  width: 150px;\n  height: 150px; }\n\n.name {\n  padding-top: 10px;\n  font-size: 20pt;\n  color: #fffef6; }\n\n.title {\n  font-size: 14pt; }\n\n.title a {\n  color: #aaaaaa; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mobiele-page/mobiele-detail/mobiele-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobieleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobieleDetailComponent = (function () {
    function MobieleDetailComponent() {
    }
    return MobieleDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MobieleDetailComponent.prototype, "info", void 0);
MobieleDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'mobiele',
        template: __webpack_require__("../../../../../src/app/mobiele-page/mobiele-detail/mobiele-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mobiele-page/mobiele-detail/mobiele-detail.component.scss")]
    })
], MobieleDetailComponent);

//# sourceMappingURL=mobiele-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/mobiele-page/mobiele-detail/mobiele-detail.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOBIELE; });
var MOBIELE = {
    primary: [
        {
            name: 'Android',
            title: 'besturingssysteem',
            avatar: 'assets/logos/andriod.png',
            url: 'https://www.android.com/',
        },
        {
            name: 'IOS',
            title: 'besturingssysteem',
            avatar: 'assets/logos/ios.png',
            url: 'https://www.apple.com/nl/ios/ios-10/',
        },
        {
            name: 'BlackBerry 10 OS',
            title: 'besturingssysteem',
            avatar: 'assets/logos/blackberry.png',
            url: 'https://us.blackberry.com/software/smartphones/blackberry-10-os',
        },
    ],
    secondary: [
        {
            name: 'Ionic',
            title: 'programmeer platform',
            avatar: 'assets/logos/ionic.png',
            url: 'https://ionicframework.com/'
        },
        {
            name: 'NativeScript',
            title: 'programmeer platform',
            avatar: 'assets/logos/native.png',
            url: 'https://www.nativescript.org/',
        },
        {
            name: 'Cordova',
            title: 'programmeer platform',
            avatar: 'assets/logos/cordova.png',
            url: 'https://cordova.apache.org/',
        }
    ]
};
//# sourceMappingURL=mobiele-detail.data.js.map

/***/ }),

/***/ "../../../../../src/app/mobiele-page/mobiele-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"about\" fxLayoutAlign=\"center center\" fxFlex>\r\n\r\n\r\n <h2>Mobiele technologieën die Dare-solutions gebruikt!</h2>\r\n\r\n  <div class=\"primary\" fxLayout fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\r\n      <mobiele\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data\">\r\n      </mobiele>\r\n  </div>\r\n\r\n  <div class=\"contributors\" fxLayout=\"row\" fxLayoutGap=\"15px\"  fxLayoutAlign=\"start center\">\r\n      <mobiele\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data2\">\r\n      </mobiele>\r\n  </div>\r\n  <button color=\"primary\" routerLink=\"/\" md-raised-button>Ga terug</button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/mobiele-page/mobiele-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin-top: 4em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mobiele-page/mobiele-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiele_detail_mobiele_detail_data__ = __webpack_require__("../../../../../src/app/mobiele-page/mobiele-detail/mobiele-detail.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobielePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MobielePageComponent = (function () {
    function MobielePageComponent(metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.data = __WEBPACK_IMPORTED_MODULE_1__mobiele_detail_mobiele_detail_data__["a" /* MOBIELE */].primary;
        this.data2 = __WEBPACK_IMPORTED_MODULE_1__mobiele_detail_mobiele_detail_data__["a" /* MOBIELE */].secondary;
        this.doAnimate = true;
        this.titleService.setTitle('Webapplicatie laten maken, mobile | internet - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Webapplicatie laten maken, voor web, andriod en ios (iphone) alles kan. Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'Webapplicatie laten maken, mobile | internet - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Webapplicatie laten maken, voor web, andriod en ios (iphone) alles kan. Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl/webapplicatie-laten-maken' });
    }
    return MobielePageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], MobielePageComponent.prototype, "doAnimate", void 0);
MobielePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-mobiele-page',
        template: __webpack_require__("../../../../../src/app/mobiele-page/mobiele-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mobiele-page/mobiele-page.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _b || Object])
], MobielePageComponent);

var _a, _b;
//# sourceMappingURL=mobiele-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/overige-page/overige-detail/overige-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contributor\">\r\n  <img [src]=\"info?.avatar\" alt=\"{{ info.name }}\">\r\n  <div class=\"name\">{{ info.name }}</div>\r\n  <div class=\"title\">\r\n      {{  info.title }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/overige-page/overige-detail/overige-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 959px) {\n  :host {\n    width: 200px;\n    margin-top: 54px; } }\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  :host {\n    width: 250px;\n    margin-top: 54px; } }\n\n@media screen and (min-width: 1280px) {\n  :host {\n    width: 360px;\n    margin-top: 54px; } }\n\n.contributor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.contributor img {\n  border-radius: 20%; }\n\nimg {\n  border: solid 2px rgba(255, 255, 255, 0.1);\n  width: 120px;\n  height: 120px; }\n\n.name {\n  padding-top: 10px;\n  font-size: 20pt;\n  color: #fffef6; }\n\n.title {\n  font-size: 14pt; }\n\n.title a {\n  color: #aaaaaa; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overige-page/overige-detail/overige-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverigeDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverigeDetailComponent = (function () {
    function OverigeDetailComponent() {
    }
    return OverigeDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], OverigeDetailComponent.prototype, "info", void 0);
OverigeDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'overige',
        template: __webpack_require__("../../../../../src/app/overige-page/overige-detail/overige-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overige-page/overige-detail/overige-detail.component.scss")]
    })
], OverigeDetailComponent);

//# sourceMappingURL=overige-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/overige-page/overige-detail/overige-detail.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OVERIGE; });
var OVERIGE = {
    primary: [
        {
            name: 'Cloud computing',
            title: 'Breng uw data naar de cloud',
            avatar: 'assets/logos/cloud.png',
            url: 'https://www.oracle.com/java/index.html',
        },
        {
            name: 'Presentaties',
            title: 'Java, Scala, Scalajs, Docker en veel meer',
            avatar: 'assets/ninja/speaker.png'
        },
        {
            name: 'Advies',
            title: 'ICT, we nemen het door van A tot Z',
            avatar: 'assets/ninja/presentation.png'
        },
    ],
    secondary: []
};
//# sourceMappingURL=overige-detail.data.js.map

/***/ }),

/***/ "../../../../../src/app/overige-page/overige-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"about\" fxLayoutAlign=\"center center\" fxFlex>\r\n\r\n\r\n <h2>Overige diensten van Dare-solutions !</h2>\r\n\r\n  <div class=\"primary\" fxLayout fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\r\n      <overige\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data\">\r\n      </overige>\r\n  </div>\r\n\r\n  <div class=\"contributors\" fxLayout=\"row\" fxLayoutGap=\"15px\"  fxLayoutAlign=\"start center\">\r\n      <overige\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data2\">\r\n      </overige>\r\n  </div>\r\n  <button color=\"primary\" routerLink=\"/\" md-raised-button>Ga terug</button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/overige-page/overige-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin-top: 4em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overige-page/overige-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overige_detail_overige_detail_data__ = __webpack_require__("../../../../../src/app/overige-page/overige-detail/overige-detail.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverigePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverigePageComponent = (function () {
    function OverigePageComponent(metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.data = __WEBPACK_IMPORTED_MODULE_1__overige_detail_overige_detail_data__["a" /* OVERIGE */].primary;
        this.data2 = __WEBPACK_IMPORTED_MODULE_1__overige_detail_overige_detail_data__["a" /* OVERIGE */].secondary;
        this.doAnimate = true;
        this.titleService.setTitle('Presentaties, advies, cloud-computing en meer - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Een overzicht van de overige diensten voor al uw ict werkzaamheden en meer... Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'Presentaties, advies, cloud-computing en meer - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Een overzicht van de overige diensten voor al uw ict werkzaamheden en meer... Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl/bedrijfs-overzicht' });
    }
    return OverigePageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], OverigePageComponent.prototype, "doAnimate", void 0);
OverigePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-overige-page',
        template: __webpack_require__("../../../../../src/app/overige-page/overige-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overige-page/overige-page.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _b || Object])
], OverigePageComponent);

var _a, _b;
//# sourceMappingURL=overige-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_page_index_page_component__ = __webpack_require__("../../../../../src/app/index-page/index-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__website_page_website_page_component__ = __webpack_require__("../../../../../src/app/website-page/website-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wie_zijn_wij_page_wie_zijn_wij_component__ = __webpack_require__("../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geschiedenis_page_geschiedenis_component__ = __webpack_require__("../../../../../src/app/geschiedenis-page/geschiedenis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bedrijfs_overzicht_page_bedrijfs_overzicht_component__ = __webpack_require__("../../../../../src/app/bedrijfs-overzicht-page/bedrijfs-overzicht.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_page_contact_component__ = __webpack_require__("../../../../../src/app/contact-page/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__software_page_software_page_component__ = __webpack_require__("../../../../../src/app/software-page/software-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mobiele_page_mobiele_page_component__ = __webpack_require__("../../../../../src/app/mobiele-page/mobiele-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__overige_page_overige_page_component__ = __webpack_require__("../../../../../src/app/overige-page/overige-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });









var APP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__index_page_index_page_component__["a" /* IndexPageComponent */],
        data: {
            animation: {
                value: 'home',
            }
        }
    },
    {
        path: 'website-laten-maken',
        component: __WEBPACK_IMPORTED_MODULE_1__website_page_website_page_component__["a" /* WebsitePageComponent */],
        data: {
            animation: {
                value: 'overview',
            }
        }
    },
    {
        path: 'wie-zijn-wij',
        component: __WEBPACK_IMPORTED_MODULE_2__wie_zijn_wij_page_wie_zijn_wij_component__["a" /* WieZijnWijComponent */],
        data: {
            animation: {
                value: 'overview',
            }
        }
    },
    {
        path: 'bedrijfs-geschiedenis',
        component: __WEBPACK_IMPORTED_MODULE_3__geschiedenis_page_geschiedenis_component__["a" /* GeschiedenisComponent */],
        data: {
            animation: {
                value: 'overview',
            }
        }
    },
    {
        path: 'bedrijfs-overzicht',
        component: __WEBPACK_IMPORTED_MODULE_4__bedrijfs_overzicht_page_bedrijfs_overzicht_component__["a" /* BedrijfsOverzichtComponent */],
        data: {
            animation: {
                value: 'overview',
            }
        }
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_5__contact_page_contact_component__["a" /* ContactComponent */],
        data: {
            animation: {
                value: 'overview',
            }
        }
    },
    {
        path: 'software-ontwikkeling',
        component: __WEBPACK_IMPORTED_MODULE_6__software_page_software_page_component__["a" /* SoftwarePageComponent */],
        data: {
            animation: {
                value: 'overview',
            }
        }
    },
    {
        path: 'mobiele-applicatie-laten-maken',
        component: __WEBPACK_IMPORTED_MODULE_7__mobiele_page_mobiele_page_component__["a" /* MobielePageComponent */],
        data: {
            animation: {
                value: 'overview',
            }
        }
    },
    {
        path: 'overige-diensten',
        component: __WEBPACK_IMPORTED_MODULE_8__overige_page_overige_page_component__["a" /* OverigePageComponent */],
        data: {
            animation: {
                value: 'overview',
            }
        }
    }, {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_0__index_page_index_page_component__["a" /* IndexPageComponent */],
        data: {
            animation: {
                value: 'home',
            }
        }
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/software-page/software-detail/software-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contributor\">\r\n  <img [src]=\"info?.avatar\" alt=\"{{ info.name }}\">\r\n  <div class=\"name\">{{ info.name }}</div>\r\n  <div class=\"title\">\r\n    <a [href]=\"info.url\" target=\"_blank\">\r\n      {{  info.title }}\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/software-page/software-detail/software-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 959px) {\n  :host {\n    width: 200px;\n    margin-top: 54px; } }\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  :host {\n    width: 250px;\n    margin-top: 54px; } }\n\n@media screen and (min-width: 1280px) {\n  :host {\n    width: 330px;\n    margin-top: 54px; } }\n\n.contributor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.contributor img {\n  border-radius: 50%; }\n\nimg {\n  border: solid 2px rgba(255, 255, 255, 0.1);\n  width: 150px;\n  height: 150px; }\n\n.name {\n  padding-top: 10px;\n  font-size: 20pt;\n  color: #fffef6; }\n\n.title {\n  font-size: 14pt; }\n\n.title a {\n  color: #aaaaaa; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/software-page/software-detail/software-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftwareDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoftwareDetailComponent = (function () {
    function SoftwareDetailComponent() {
    }
    return SoftwareDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SoftwareDetailComponent.prototype, "info", void 0);
SoftwareDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'software',
        template: __webpack_require__("../../../../../src/app/software-page/software-detail/software-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/software-page/software-detail/software-detail.component.scss")]
    })
], SoftwareDetailComponent);

//# sourceMappingURL=software-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/software-page/software-detail/software-detail.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOFTWARE; });
var SOFTWARE = {
    primary: [
        {
            name: 'Java',
            title: 'Programmeertaal voor de server',
            avatar: 'assets/logos/java.png',
            url: 'https://www.oracle.com/java/index.html',
        },
        {
            name: 'Scala',
            title: 'Programmeertaal voor de server',
            avatar: 'assets/logos/scala.png',
            url: 'https://www.scala-lang.org/',
        },
        {
            name: 'Go lang',
            title: 'Programmeertaal voor de server',
            avatar: 'assets/logos/go-lang.png',
            url: 'https://golang.org/',
        },
    ],
    secondary: [
        {
            name: 'Agile design',
            title: 'Software onwerp methode',
            avatar: 'assets/logos/agile.png',
            url: 'https://webdesign.tutsplus.com/articles/a-designers-introduction-to-agile-methodology--cms-23349'
        },
        {
            name: 'Mongo database',
            title: 'database voor opslag van data',
            avatar: 'assets/logos/mongo.png',
            url: 'https://www.mongodb.com/',
        },
        {
            name: 'Sql database',
            title: 'database voor opslag van data',
            avatar: 'assets/logos/sql.png',
            url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2016',
        }
    ]
};
//# sourceMappingURL=software-detail.data.js.map

/***/ }),

/***/ "../../../../../src/app/software-page/software-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"about\" fxLayoutAlign=\"center center\" fxFlex>\r\n\r\n\r\n <h2>Software technologieën die Dare-solutions gebruikt!</h2>\r\n\r\n  <div class=\"primary\" fxLayout fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\r\n      <software\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data\">\r\n      </software>\r\n  </div>\r\n\r\n  <div class=\"contributors\" fxLayout=\"row\" fxLayoutGap=\"15px\"  fxLayoutAlign=\"start center\">\r\n      <software\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data2\">\r\n      </software>\r\n  </div>\r\n  <button color=\"primary\" routerLink=\"/\" md-raised-button>Ga terug</button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/software-page/software-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin-top: 4em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/software-page/software-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__software_detail_software_detail_data__ = __webpack_require__("../../../../../src/app/software-page/software-detail/software-detail.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftwarePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SoftwarePageComponent = (function () {
    function SoftwarePageComponent(metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.data = __WEBPACK_IMPORTED_MODULE_1__software_detail_software_detail_data__["a" /* SOFTWARE */].primary;
        this.data2 = __WEBPACK_IMPORTED_MODULE_1__software_detail_software_detail_data__["a" /* SOFTWARE */].secondary;
        this.doAnimate = true;
        this.titleService.setTitle('Software engineer, voor desktop en website - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Engineer voor software voor desktop of uw website, wij ontwikkelen software van hoge kwaliteits code. Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'Software engineer, voor desktop en website - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Engineer voor software voor desktop of uw website, wij ontwikkelen software van hoge kwaliteits code. Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl/software-ontwikkeling' });
    }
    return SoftwarePageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], SoftwarePageComponent.prototype, "doAnimate", void 0);
SoftwarePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-software-page',
        template: __webpack_require__("../../../../../src/app/software-page/software-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/software-page/software-page.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _b || Object])
], SoftwarePageComponent);

var _a, _b;
//# sourceMappingURL=software-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/website-page/website-detail/website-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contributor\">\r\n  <img [src]=\"info?.avatar\" alt=\"{{ info.name }}\">\r\n  <div class=\"name\">{{ info.name }}</div>\r\n  <div class=\"title\">\r\n    <a [href]=\"info.url\" target=\"_blank\">\r\n      {{  info.title }}\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/website-page/website-detail/website-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 959px) {\n  :host {\n    width: 200px;\n    margin-top: 54px; } }\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  :host {\n    width: 250px;\n    margin-top: 54px; } }\n\n@media screen and (min-width: 1280px) {\n  :host {\n    width: 330px;\n    margin-top: 54px; } }\n\n.contributor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.contributor img {\n  border-radius: 50%; }\n\nimg {\n  border: solid 2px rgba(255, 255, 255, 0.1);\n  width: 150px;\n  height: 150px; }\n\n.name {\n  padding-top: 10px;\n  font-size: 20pt;\n  color: #fffef6; }\n\n.title {\n  font-size: 14pt; }\n\n.title a {\n  color: #aaaaaa; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/website-page/website-detail/website-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteDetailComponent = (function () {
    function WebsiteDetailComponent() {
    }
    return WebsiteDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WebsiteDetailComponent.prototype, "info", void 0);
WebsiteDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'contributor',
        template: __webpack_require__("../../../../../src/app/website-page/website-detail/website-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/website-page/website-detail/website-detail.component.scss")]
    })
], WebsiteDetailComponent);

//# sourceMappingURL=website-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/website-page/website-detail/website-detail.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTRIBUTORS; });
var CONTRIBUTORS = {
    primary: [
        {
            name: 'Angular',
            title: 'JavaScript framework',
            avatar: 'assets/logos/angular.png',
            url: 'https://angular.io/',
        },
        {
            name: 'Bootstrap',
            title: 'framework voor css',
            avatar: 'assets/logos/bootstrap.png',
            url: 'http://getbootstrap.com/',
        },
        {
            name: 'Material design',
            title: 'framework voor css',
            avatar: 'assets/logos/material.png',
            url: 'https://material.io/guidelines/',
        },
    ],
    secondary: [
        {
            name: 'React',
            title: 'JavaScript framework',
            avatar: 'assets/logos/react.png',
            url: 'https://facebook.github.io/react/'
        },
        {
            name: 'Sass',
            title: 'framework voor css',
            avatar: 'assets/logos/sass.png',
            url: 'http://sass-lang.com/',
        },
        {
            name: 'Vue js',
            title: 'JavaScript framework',
            avatar: 'assets/logos/vuejs.png',
            url: 'https://vuejs.org/',
        }
    ]
};
//# sourceMappingURL=website-detail.data.js.map

/***/ }),

/***/ "../../../../../src/app/website-page/website-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"about\" fxLayoutAlign=\"center center\" fxFlex>\r\n\r\n\r\n <h2>Website-design technologieën die Dare-solutions gebruikt!</h2>\r\n\r\n  <div class=\"primary\" fxLayout fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\r\n      <contributor\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of authors\">\r\n      </contributor>\r\n  </div>\r\n\r\n  <div class=\"contributors\" fxLayout=\"row\" fxLayoutGap=\"15px\"  fxLayoutAlign=\"start center\">\r\n      <contributor\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of contributors\">\r\n      </contributor>\r\n  </div>\r\n  <button color=\"primary\" routerLink=\"/\" md-raised-button>Ga terug</button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/website-page/website-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin-top: 4em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/website-page/website-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__website_detail_website_detail_data__ = __webpack_require__("../../../../../src/app/website-page/website-detail/website-detail.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsitePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsitePageComponent = (function () {
    function WebsitePageComponent(metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.authors = __WEBPACK_IMPORTED_MODULE_1__website_detail_website_detail_data__["a" /* CONTRIBUTORS */].primary;
        this.contributors = __WEBPACK_IMPORTED_MODULE_1__website_detail_website_detail_data__["a" /* CONTRIBUTORS */].secondary;
        this.doAnimate = true;
        this.titleService.setTitle('Website laten maken, van design tot online - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Website laten maken, wij gebruiken de nieuwste technieken en designs. Snel en effecient. Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'Website laten maken, van design tot online - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Website laten maken, wij gebruiken de nieuwste technieken en designs. Snel en effecient. Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl/website-laten-maken' });
    }
    return WebsitePageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], WebsitePageComponent.prototype, "doAnimate", void 0);
WebsitePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-website-page',
        template: __webpack_require__("../../../../../src/app/website-page/website-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/website-page/website-page.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _b || Object])
], WebsitePageComponent);

var _a, _b;
//# sourceMappingURL=website-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij-detail/wie-zijn-wij-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card fxFlex.xs=\"90\"\r\n         fxFlex.sm=\"90\"\r\n         fxFlex.md=\"75\"\r\n         fxFlex.lg=\"60\"\r\n         fxFlex.xl=\"50\">\r\n  <img [src]=\"info?.avatar\" alt=\"{{ info.name }}\">\r\n  <div class=\"name\">{{ info.title }}</div>\r\n\r\n  <div class=\"title\" [innerHTML]=\"info.p\"></div>\r\n  <button color=\"primary\" routerLink=\"/\" md-raised-button>Ga terug</button>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij-detail/wie-zijn-wij-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  border-radius: 15%;\n  margin-top: 3em;\n  width: 10em; }\n\nimg {\n  border: solid 2px rgba(0, 0, 0, 0.87);\n  box-shadow: 0px 1px 16px 3px rgba(0, 0, 0, 0.75); }\n\n.name {\n  padding-top: 20px;\n  font-size: 20pt;\n  color: #160e0e;\n  font-weight: bold; }\n\n.title {\n  text-align: left; }\n\n.title a {\n  color: #aaaaaa; }\n\nbutton {\n  margin-top: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij-detail/wie-zijn-wij-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WieZijnWijDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WieZijnWijDetailComponent = (function () {
    function WieZijnWijDetailComponent() {
    }
    return WieZijnWijDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WieZijnWijDetailComponent.prototype, "info", void 0);
WieZijnWijDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'wie-zijn-wij',
        template: __webpack_require__("../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij-detail/wie-zijn-wij-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij-detail/wie-zijn-wij-detail.component.scss")]
    })
], WieZijnWijDetailComponent);

//# sourceMappingURL=wie-zijn-wij-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij-detail/wie-zijn-wij-detail.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WIEZIJNWIJ; });
var WIEZIJNWIJ = {
    primary: [
        {
            id: 1,
            title: 'Wie zijn wij ?',
            avatar: 'assets/ninja/hey.png',
            p: '<p>Dare-solutions is op 1 januari 2013 bedacht door David Stibbe en Remco Bleyenberg en hebben vanaf die tijd een webapplicatie in ontwikkeling gehad dat nu in productie is. Beide heren zijn al vanaf jongs bezig met computers (jaren 80), op latere leeftijd heeft de heer Stibbe zijn carriere re binnen de branche opgebouwd en de heer Bleyenberg ging de engineering kant op. Al gauw ontstond het idee om samen een bedrijf te starten: Dare-solutions.</p><p>De naam Dare-solutions is afkomstig van de namen David en Remco.</p><p>Dare-solutions, dat gevestigd is in Dronten, is een betrouwbare partner in effectieve web oplossingen. Ze biedt diverse diensten en producten, zoals webdesign, ICT en software ontwikkeling.</p><p>De ondernemers zijn samen opgegroeid en je zou dan ook kunnen zeggen dat ze soort van broers zijn.</p><p>David en Remco hebben een duidelijke visie voor ogen. Ze streven naar een uniek bedrijf met goede contacten en uitstekende werkzaamheden. Beiden hebben specifieke vaardigheden, die ingezet worden voor Dare-solutions. Zo vullen de mannen elkaar goed aan en weten ze klanten aan zich te binden.</p><p>David richt zich voornamelijk op het programmeren. Als de klant het probleem kan uitleggen, is hij in staat om het te maken. Terwijl David zich richt op het technische verhaal, richt Remco zich op de binnen halen van klanten en de verzorging van de webapplicaties van Dare-solutions aan de front-end (hetgeen dat je in je browser ziet).</p><p>De ondernemers staan samen ergens voor. Ze geven Dare-solutions een duidelijke Identiteit door vast te houden aan unieke onderscheidende waarden.</p>'
        }
    ]
};
//# sourceMappingURL=wie-zijn-wij-detail.data.js.map

/***/ }),

/***/ "../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\r\n\r\n      <wie-zijn-wij fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n          [info]=\"person\"\r\n          *ngFor=\"let person of data\">\r\n      </wie-zijn-wij>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\n  margin-top: 2em;\n  margin-bottom: 2em;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wie_zijn_wij_detail_wie_zijn_wij_detail_data__ = __webpack_require__("../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij-detail/wie-zijn-wij-detail.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WieZijnWijComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WieZijnWijComponent = (function () {
    function WieZijnWijComponent(metaService, titleService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.data = __WEBPACK_IMPORTED_MODULE_1__wie_zijn_wij_detail_wie_zijn_wij_detail_data__["a" /* WIEZIJNWIJ */].primary;
        this.doAnimate = true;
        this.titleService.setTitle('Wie zijn wij, ict, website laten maken en meer - Dare-solutions');
        this.metaService.addTag({ name: 'description', content: 'Een overzicht van wie we zijn voor al uw ict werkzaamheden en meer... Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:title', content: 'Wie zijn wij, ict, website laten maken en meer - Dare-solutions' });
        this.metaService.addTag({ name: 'og:description', content: 'Een overzicht van wie we zijn voor al uw ict werkzaamheden en meer... Dare-solutions het voor uw bedrijf.' });
        this.metaService.addTag({ name: 'og:image', content: 'image' });
        this.metaService.addTag({ name: 'og:url', content: 'http://www.dare-solutions.nl/bedrijfs-overzicht' });
    }
    return WieZijnWijComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], WieZijnWijComponent.prototype, "doAnimate", void 0);
WieZijnWijComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-wie-zijn-wij-page',
        template: __webpack_require__("../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wie-zijn-wij-page/wie-zijn-wij.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* Title */]) === "function" && _b || Object])
], WieZijnWijComponent);

var _a, _b;
//# sourceMappingURL=wie-zijn-wij.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    slack_url: 'http://XXXX:8080/form'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map