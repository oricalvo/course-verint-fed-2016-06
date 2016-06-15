var Point = (function() {
    "use strict";

    function Point(x, y) {
        function dump() {
            console.log(x + ", " + y);
        }
        
        return {
            dump: dump,
            move: move,
        };
    }

    return Point;
})();
