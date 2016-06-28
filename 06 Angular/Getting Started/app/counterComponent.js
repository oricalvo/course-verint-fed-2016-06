"use strict";
var app_1 = require("./app");
var CounterController = (function () {
    function CounterController() {
        this.counter = 0;
    }
    CounterController.prototype.inc = function () {
        this.counter++;
    };
    CounterController.prototype.dec = function () {
        this.counter--;
    };
    return CounterController;
}());
app_1.appModule.component("counter", {
    template: require("./counterComponent.html!text"),
    controller: CounterController,
    styles: require("./counterComponent.css!css"),
});
//# sourceMappingURL=counterComponent.js.map