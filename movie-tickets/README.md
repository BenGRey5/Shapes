Describe: Ticket()

Test: "It will create a ticket object containing keys of movie, showtime, and ViewerAge."
Code: oppenheimerTicket = new Ticket("oppenheimer", "Evening", 60);
Output: oppenheimer{
            movie: "oppenheimer",
            showtime: "Evening",
            viewerAge: 60
}

Test: "It will give you the price of the movie according to the movie title and movie time"
Code: Ticket.prototype.getPrice = function ()
Output: 
