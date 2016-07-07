"use strict";
var app_1 = require("./app");
require("./contactDetails");
var MyAppController = (function () {
    function MyAppController() {
        this.contacts = [];
    }
    MyAppController.prototype.add = function () {
        if (!this.name) {
            return;
        }
        var contact = {
            id: -1,
            name: this.name,
        };
        this.contacts.push(contact);
        this.contacts.sort(function (c1, c2) {
            if (c1.name >= c2.name) {
                return 1;
            }
            return -1;
        });
    };
    return MyAppController;
}());
app_1.appModule.component("myApp", {
    template: require("./myApp.html!text"),
    controller: MyAppController,
    styles: require("./myApp.css!css"),
});
//# sourceMappingURL=myApp.js.map