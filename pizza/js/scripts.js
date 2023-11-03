function Pizza(toppings, size){
    this.toppings = toppings;
    this.size = size
}

Pizza.prototype.calculatePrice = function() {
    return this.size * this.toppings;
};

