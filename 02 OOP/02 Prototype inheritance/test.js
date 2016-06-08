var x = {
    id: 1,
    name: "Ori",
};

var y = Object.create(x);

y.id = 10;

console.log(y.id);
