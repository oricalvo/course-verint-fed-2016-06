var contactBookApp = contactBookApp || {};

contactBookApp.BookItem = (function() {
    "use strict";
    
    function BookItem() {
    }

    BookItem.prototype.dump = function() {
        throw new Error("abstract method invocation");
    }
    
    return BookItem;
})();
