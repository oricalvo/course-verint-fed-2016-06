import {appModule} from "../app";
import {Contact} from "../services/ContactService";
import {ContactComponent} from "./contact"; PREVENT_REMOVE_IMPORT(ContactComponent);

class ContactListComponent {
    //
    //  External model
    //
    contacts: Contact[];
    contacts2: Contact[];


    //
    //  Internal model
    //
    contactsViewModel: ContactViewModel[];

    constructor($timeout, $scope) {
        var obj = {};
        
        this.contacts2 = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"}
        ];
        
        // $scope.$watch(function() {
        //     return obj;
        // }, function() {
        //     window.blabla = 10;
        // });

        // $scope.$on("$destroy", function () {
        //    console.log("DTOR");
        // });
    }

    $onDestroy() {
        console.log("DTOR");
    }

    $onChanges() {
        console.log("ContactList.$onChanges");

        if(!this.contacts) {
            this.contactsViewModel = null;
            return;
        }

        this.contactsViewModel = this.contacts.map(contact => {
            var contactViewModel: ContactViewModel = {
                id: contact.id,
                name: contact.name,
                email: contact.name + "@gmail.com",
            };

            return contactViewModel;
        });
    }

    change() {
        //this.contacts2.push({id:3, name: "Udi"});

        //this.contacts2[0].name = "XXX";

        console.log(this.contacts2);

        this.contacts2 = [
            {"id": 3, "name": "XXX"},
            {"id": 4, "name": "Roni"},
            {"id": 5, "name": "YYY"}
        ];
    }
}

interface ContactViewModel {
    id: number;
    name: string;
    email: string;
}

appModule.component("contactList", {
    //controller: ["$timeout", "$scope", ContactListComponent],
    controller: ContactListComponent,
    template: require("./contactList.html!text"),
    styles: require("./contactList.css!css"),
    bindings: {
    }
});
