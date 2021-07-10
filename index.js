const Max = require('max-api');
const Adder = require('./lib/Adder');

Max.post('script start');

x = 0;
Max.addHandler("bang", () => {
    Max.post(x);
    x += 1;
});

Max.addHandler("add", (x, y) => {
    Max.outlet(Adder.add(x, y));
});
