import {appModule} from "./app";

declare var angular;
declare var require;

class CounterController {
    counter:number;

    constructor() {
        this.counter = 0;
    }

    inc() {
        this.counter++;
    }

    dec() {
        this.counter--;
    }
}

appModule.component("counter", {
    template: require("./counterComponent.html!text"),
    controller: CounterController,
    styles: require("./counterComponent.css!css"),
});
