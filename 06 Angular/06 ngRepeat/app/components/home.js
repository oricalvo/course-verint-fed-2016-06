/// <reference path="../../globals.d.ts" />
"use strict";
var app_1 = require("../app");
var clock = require("./clock");
PREVENT_REMOVE_IMPORT(clock);
var contactList = require("./contactList");
PREVENT_REMOVE_IMPORT(contactList);
var ContactService_1 = require("../services/ContactService");
PREVENT_REMOVE_IMPORT(ContactService_1.ContactService);
var HomeComponent = (function () {
    function HomeComponent(contactService, $scope) {
        var _this = this;
        this.clockFormat = "ss";
        contactService.getAll().then(function (contacts) {
            _this.contacts = contacts;
        });
    }
    HomeComponent.prototype.changeClock = function () {
        this.clockFormat = "mm:ss";
    };
    HomeComponent.prototype.changeContact = function () {
        var newContacts = this.contacts.concat([]);
        newContacts[0].name = "XXX";
        this.contacts = newContacts;
    };
    return HomeComponent;
}());
app_1.appModule.component("home", {
    controller: HomeComponent,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
//# sourceMappingURL=home.js.map