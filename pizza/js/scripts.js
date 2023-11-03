document.addEventListener('DOMContentLoaded', function() {
    const toppingPrices = {
        Pepperoni: 0.50,
        Pineapple: 0.25,
        Onions: 0.25, 
        Olives: 0.30,  
        Mushrooms: 0.25, 
        Canadianbacon: 0.50,
        Peppers: 0.30, 
        Tomatoes: 0.20,
    };

    const pizzaSize = {
        Small: .8,
        Medium: 1,
        Large: 1.2
    };

    const checkbox1 = document.getElementById("topping1");
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox1 = document.getElementById("topping1");
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox1 = document.getElementById("topping1");
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox1 = document.getElementById("topping1");
    const checkbox1 = document.getElementById("checkbox1");
    
    function Pizza(toppings, size) {
        this.toppings = toppings;
        this.size = size;
    }
    const priceDisplay = document.getElementById('priceDisplay');
    const radioToppings = document.getElementsByName('topping')
    Pizza.prototype.calculateToppings = function() {
        let price = 4; // Initialize the price with a base value

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
            default:
                price += 0; 
                break;
        }

        switch (this.size) {
            case "Small":
            price *= pizzaSize.Small;
            break;
            case "Medium":
            price *= pizzaSize.Medium;
            break;
            case "Large":
            price *= pizzaSize.Large;
            break;
        }

        return price; 
    }
});


