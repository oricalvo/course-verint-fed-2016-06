/// <reference path="../../globals.d.ts" />

import {appModule} from "../app";
import * as clock from "./clock"; PREVENT_REMOVE_IMPORT(clock);
import * as contactList from "./contactList";
import {Contact} from "./contactList"; PREVENT_REMOVE_IMPORT(contactList);

class HomeComponent {
    clockFormat: string;
    contacts: Contact[];

    constructor($http, $scope) {
        this.clockFormat = "ss";

        $.ajax({
            type: "GET",
            url: "contacts.json",
            success: (contacts) => {
                this.contacts = contacts;

                $scope.$digest();
            },
            error: () => {
                alert("ERROR");
            }
        });

        // $http.get("contacts.json").then(res => {
        //     this.contacts = res.data;
        // });
    }

    changeClock() {
        this.clockFormat = "mm:ss";
    }
    
    changeContact() {
        var newContacts = this.contacts.concat([]);
        newContacts[0].name = "XXX";
        this.contacts = newContacts;
    }
}

appModule.component("home", {
    controller: HomeComponent,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
