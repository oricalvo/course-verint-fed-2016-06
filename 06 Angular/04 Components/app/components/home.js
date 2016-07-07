/// <reference path="../../globals.d.ts" />
"use strict";
var app_1 = require("../app");
var clock = require("./clock");
PREVENT_REMOVE_IMPORT(clock);
var contactList = require("./contactList");
PREVENT_REMOVE_IMPORT(contactList);
var HomeComponent = (function () {
    function HomeComponent($http, $scope) {
        var _this = this;
        this.clockFormat = "ss";
        $.ajax({
            type: "GET",
            url: "contacts.json",
            success: function (contacts) {
                _this.contacts = contacts;
                $scope.$digest();
            },
            error: function () {
                alert("ERROR");
            }
        });
        // $http.get("contacts.json").then(res => {
        //     this.contacts = res.data;
        // });
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