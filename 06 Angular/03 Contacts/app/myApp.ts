import {appModule} from "./app";
import "./contactDetails";

declare var angular;
declare var require;

class MyAppController {
    name: string;
    contacts: Contact[];

    constructor(){
        this.contacts = [];
    }
    
    add(){
        if(!this.name) {
            return;
        }
        
        let contact = {
            id: -1,
            name: this.name,
        };

        this.contacts.push(contact);

        this.contacts.sort(function(c1, c2){
           if(c1.name >= c2.name) {
               return 1;
           }

            return -1;
        });
    }
}

interface Contact {
    id: number;
    name: string;
}

appModule.component("myApp", {
    template: require("./myApp.html!text"),
    controller: MyAppController,
    styles: require("./myApp.css!css"),
});
