function pizzaSlices(x,y) {  //x parameter = number of slices, y = people sharing
    if (x < y || y <= 0) {
        return "Not enough pizza to share evenly.";
    }

    let splitSlices = (x / y).toFixed(2); //two decimal spaces
    return `Each person gets ${splitSlices} slices of pizza; from our ${x} slice pizza.`;
};

let slices = pizzaSlices(10, 4);
console.log(slices);

//output: Each person gets 2.50 slices of pizza; from our 10 slice pizza.