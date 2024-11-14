let Age = 77; 
let ticketPrice;

if (Age < 0 || Age > 120) {
    console.log('wrong age');

}
 else if (Age >= 1 && Age <= 12) {
    ticketPrice = '5$';
    console.log (`ticket price is ${ticketPrice}`);

} 
else if (Age >= 13 && Age <= 17) {
    ticketPrice = '10$';
    console.log (`ticket price is ${ticketPrice}`);

} 
else if (Age >= 18 && Age <= 64) {
    ticketPrice = '15$';
    console.log (`ticket price is ${ticketPrice}`);

} 
else if (Age >= 65 && Age <= 120) {
    ticketPrice = '8$';
    console.log (`ticket price is ${ticketPrice}`);

}

