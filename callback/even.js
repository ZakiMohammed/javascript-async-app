const isEven = (number, callback) => {
    // super complex math problem
    if (number % 2 === 0) {
        callback(true);
    } else {
        callback(false);
    }
};

isEven(10, result => result ?
    console.log('The number is even') :
    console.log('The number is odd'));
