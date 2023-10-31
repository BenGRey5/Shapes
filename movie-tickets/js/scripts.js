//Business Logic

function Ticket(movie, showtime, olderThan60) {
    this.movie = movie;
    this.showtime = showtime;
    this.olderThan60 = olderThan60;
}

Ticket.prototype.getPrice = function () {
    let price = 10;
    if (this.movie === "barbie") {
        price *= 1.2;
    }
    if (this.showtime === "morning") {
        price *= 0.75;
    }
    if (this.olderThan60 === "yes") {
        price *= 0.75
    }
    return price.toFixed(2);
};

//UI logic

function showPrice(priceToDisplay) {
    let priceDiv = document.querySelector("div#pricing");
    priceDiv.innerText = null;
    const h3Element = document.createElement("h3");
    h3Element.append("$" + priceToDisplay);
    priceDiv.append(h3Element)
}

function handleFormSubmission(event) {
    event.preventDefault();
    
    const movie = document.querySelector("input[name='movie']:checked").value;
    const showtime = document.querySelector("input[name='time']:checked").value;
    const viewerAge = document.querySelector("input[name='age']:checked").value;
    
    let newTicket = new Ticket(movie, showtime, viewerAge);
    console.log(newTicket.getPrice())

    const ticketPrice = newTicket.getPrice();
    showPrice(ticketPrice);
}

window.addEventListener("load", function () {
    document.querySelector("form#movies").addEventListener("submit", handleFormSubmission);
});




// function displayMovieDetails(event){

// }