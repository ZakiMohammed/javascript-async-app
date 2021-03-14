const isEven = (number, callback) => {
    // super complex math problem
    if (number % 2 === 0) {
        callback(true);
    } else {
        callback(false);
    }
};

isEven(10, result => result ?
    console.log("Yay! it's even") :
    console.log("Meh! it's odd"));
