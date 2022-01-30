//ordering pizza analaogy

//callbacks
chooseToppings(function(toppings){
    placeOrder(toppings, function(order){
        collectOrder(order, function(pizza){
            eatPizza(pizza);
        }, failureCallback);
    }, failureCallback);
},failureCallback);


chooseToppings()
.then(function(toppings){
    return placeOrder(toppings);
})
.then(function(order){
    return collectOrder(order);
})
.then(function(pizza){
    eatPizza(pizza);
})
.catch (failureCallback);
//this is better because you only need a single
//.catch() block to handle all the errors

//using arrow functions
chooseToppings()
.then(toppings =>
    placeOrder(toppings)
    )
.then(order =>
    collectOrder(order)
    )
.then(pizza =>
    eatPizza(pizza)
    )
.catch(failureCallback);


//even shorter
chooseToppings()
    .then(toppings => placeOrder(toppings))
    .then(order => collectOrder(order))
    .then(pizza => eatPizza(pizza))
    .catch(failureCallback);

    /*promises are similair to event listeners with a few differences
    -a promise can succeed or fail only one time */
