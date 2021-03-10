const isEvenOrOdd = (number, isEven, isOdd) => {
    if (number % 2 === 0) {
        isEven();
    } else {
        isOdd();
    }
};

isEvenOrOdd(11, 
    () => console.log('The number is even'), 
    () => console.log('The number is odd'));
