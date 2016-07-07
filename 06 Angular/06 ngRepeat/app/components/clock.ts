import {appModule} from "../app";

class ClockComponent {
    time: Date;
    format: string;
    
    constructor($interval) {
        this.time = new Date();
        this.format = this.format || 'HH:mm:ss';

        $interval(()=> {
            this.time = new Date();
        }, 1000);
    }
}

declare var require;

appModule.component("clock", {
    controller: ClockComponent,
    template: require("./clock.html!text"),
    styles: require("./clock.css!css"),
    bindings: {
        format: "<",
    }
});
