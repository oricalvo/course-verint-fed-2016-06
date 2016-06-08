function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    function move(dx, dy) {
        x += dx;
        y += dy;
    }

    function show() {
        console.log("show");
    }

    return {
        dump: dump,
        move: move,
        show: show,
    };
}
