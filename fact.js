const factorial = (number, callback) => {
    try {
        if (typeof number === 'number') {
            let fact = 1;
            for (let i = 1; i <= number; i++) {
                fact *= i;
            }

            callback(null, fact);
        } else {
            throw new Error('The number provided must be of type number');
        }
    } catch (error) {
        callback(error.message, null);
    }
};

factorial(5, (error, result) => {
    if (error) {
        console.log('Error Occurred:', error);
        return;
    }
    console.log('Factorial:', result);
});