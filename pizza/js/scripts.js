document.addEventListener('DOMCOntentLoaded', function() {
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



function Pizza(toppings, size){
    this.toppings = toppings;
    this.size = size
}

Pizza.prototype.calculateToppings = function() {
let price = 4;

switch (this.toppings) {
    case "Pepperoni":
        price += toppingPrices.Pepperoni;
        break;
    case "Pineapple":
        price += toppingPrices.Pineapple;
        break;
    case "Onions":
        price += toppingPrices.Onions;
        break;
    case "Olives":
        price += toppingPrices.Olives;
        break;
    case "Mushrooms":
        price += toppingPrices.Mushrooms;
        break;
    case "Canadianbacon":
        price += toppingPrices.Canadianbacon;
        break;
    case "Peppers":
        price += toppingPrices.Peppers;
        break;
    case "Tomatoes":
        price += toppingPrices.Tomatoes;
        break;
    default :
        price += 0;
        break;
}

return price;
});














Pizza.prototype.calculatePrice = function() {
    return this.size * this.toppings;
};



};
