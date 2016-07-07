"use strict";
var app_1 = require("../app");
var ContactService = (function () {
    function ContactService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    ContactService.prototype.getAll = function () {
        var _this = this;
        if (this.contacts) {
            return this.$q.when(this.contacts);
        }
        return this.$http.get("contacts.json").then(function (res) {
            return _this.contacts = res.data;
        });
    };
    return ContactService;
}());
exports.ContactService = ContactService;
app_1.appModule.service("contactService", ContactService);
//# sourceMappingURL=ContactService.js.map