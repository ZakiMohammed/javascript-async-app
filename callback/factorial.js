const factorial = (number, callback) => {
    if (typeof number === 'number') {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        callback(null, fact);
    } else {
        callback('The number provided must be of type number', null);
    }
};

factorial(5, (error, result) => {
    if (error) {
        console.log('Error Occurred:', error);
        return;
    }
    console.log('Factorial:', result);
});