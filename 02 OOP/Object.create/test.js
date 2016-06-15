var a = {
    id: 1,
};

var b = Object.create(a);
b.email = "xxx";

console.log(b);
