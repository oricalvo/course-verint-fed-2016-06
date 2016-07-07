"use strict";
var app_1 = require("./app");
var MyAppController = (function () {
    function MyAppController() {
        this.counters = [
            { title: "C1" },
            { title: "C2" },
        ];
    }
    MyAppController.prototype.addCounter = function () {
        this.counters.push({
            title: "C3"
        });
    };
    return MyAppController;
}());
app_1.appModule.component("myApp", {
    template: require("./myAppComponent.html!text"),
    controller: MyAppController,
    styles: require("./myAppComponent.css!css"),
});
//# sourceMappingURL=myAppComponent.js.map