function Pizza(toppings, size){
    this.toppings = toppings;
    this.size = size
}

Pizza.prototype.calculatePrice = function() {
    return this.size * this.toppings;
};

const toppingPrices = {
    Pepperoni: 0.50,
    Pineapple: 0.25,
    Onions: .25,
    Olives: .30,
    Mushrooms: .25,
    Canadianbacon: 0.50,
    Peppers: 0.30,
    Tomatoes: 0.20,
    };

