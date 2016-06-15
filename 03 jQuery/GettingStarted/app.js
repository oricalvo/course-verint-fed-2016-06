// var input = $("div p input");
// if(!input.length) {
//     throw new Error("Input was not found");
// }
//
// var buttonSayHello = $("#buttonSayHello");
// buttonSayHello.click(function() {
//     var name = input.val();
//     if(!name) {
//         alert("Please specify a name");
//         return;
//     }
//
//     alert("Hello " + input.val());
// });

var contacts = [
    {id: 1, name: "Ori"},
    {id: 2, name: "Roni"},
    {id: 3, name: "Udi"},
];

var ul = $("ul.contacts");

function deleteContactById(id) {
    for(var i=0; i<contacts.length; i++) {
        var contact = contacts[i];

        if(contact.id == id) {
            contacts.splice(i, 1);
        }
    }
}

function onButtonDeleteClick(id) {
    deleteContactById(id);

    updateView();
}

function updateView() {
    ul.empty();

    for(var i=0; i<contacts.length; i++) {
        var contact = contacts[i];

        var li = $("<li><span></span> <button>Delete</button></li>");
        li.appendTo(ul);

        li.data("contact", contact);

        li.find("span").text(contact.name);

        li.find("button").click(function() {
            var button = $(this);

            var contact = button.closest("li").data("contact");

            onButtonDeleteClick(contact.id);
        });
    }
}

updateView();
