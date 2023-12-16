function receivesAFunction (message) {
    message();
}

receivesAFunction(function() {
    console.log("I'm the best");
})


/////
function returnsANamedFunction () {
    return function namedFunction () {
        console.log("I'm the best");
    }
}

returnsANamedFunction();


///////
const returnsAnAnonymousFunction = function () {
    return function() {
        console.log("I'm the best");
    };
}

const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction(); 