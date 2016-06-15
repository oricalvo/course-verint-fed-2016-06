(function(Group, Contact) {
    "use strict";
    
    var root = new Group("~");
    
    var friends = new Group("Friends");
    root.addItem(friends);
    
    var ori = new Contact("Ori", "ori@gmail.com");
    root.addItem(ori);

    var udi = new Contact("Udi", "udi@gmail.com");
    friends.addItem(udi);
    
    root.dump();
})(contactBookApp.Group, contactBookApp.Contact);
