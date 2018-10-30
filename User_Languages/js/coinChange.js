function coinChange(amt){
    let dollars = 0;
    let quarters = 0;
    let nickels = 0;
    let dimes = 0;
    let pennies = 0;
    
    if(amt >= 5){
        pennies = amt%5;
        amt = amt - pennies;
    } else {
        pennies = amt;
        alert("You have " + pennies + " pennies, and that's it.");
        return;
    }
    if(amt >= 100){
        dollars = Math.floor(amt/100);
        amt = amt%100;
    }
    if(amt >=25){
        quarters = Math.floor(amt/25);
        amt = amt%25;
    }
    if(amt >= 5) {
        if(amt >=10){
            dimes = Math.floor(amt/10);
            nickels = (amt%10) / 5;
        } else{
            nickels = 1;
        }
    }
    alert("You have "+ dollars + " dollars, " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels and " + pennies + " pennies. Enjoy yourself");
}