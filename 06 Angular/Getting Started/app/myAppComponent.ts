import {appModule} from "./app";

declare var angular;
declare var require;

class MyAppController {
    counters: CounterModel[];
    
    constructor(){
        this.counters = [
            {title: "C1"},
            {title: "C2"},
        ];
    }

    addCounter(){
        this.counters.push({
            title: "C3"
        });
    }
}

interface CounterModel {
    title: string;
}

appModule.component("myApp", {
    template: require("./myAppComponent.html!text"),
    controller: MyAppController,
    styles: require("./myAppComponent.css!css"),
});
