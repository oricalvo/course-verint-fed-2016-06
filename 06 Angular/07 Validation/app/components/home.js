/// <reference path="../../globals.d.ts" />
"use strict";
var app_1 = require("../app");
var ContactService_1 = require("../services/ContactService");
PREVENT_REMOVE_IMPORT(ContactService_1.ContactService);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.login = function () {
        this.form.email.$setValidity("email", false);
        if (this.form.$invalid) {
            alert("Invalid");
        }
    };
    return HomeComponent;
}());
app_1.appModule.component("home", {
    controller: HomeComponent,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
//# sourceMappingURL=home.js.map