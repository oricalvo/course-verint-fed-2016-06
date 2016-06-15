class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        setTimeout(() => {
        }, 1000);
    }
    
    public dump() {
        console.log(this.x + ", " + this.y);
    }
}

class PointEx extends Point {
    z: number;

    constructor(x, y, z) {
        super(x, y);

        this.z = z;
    }
}

var pt = new Point(5, 10);
pt.x = 12;

function f(x: number) {
}

f(y);