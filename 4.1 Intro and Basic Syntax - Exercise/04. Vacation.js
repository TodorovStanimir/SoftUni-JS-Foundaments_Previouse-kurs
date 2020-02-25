function Vacation(arg1, arg2, arg3) {
    let price = 0;
    let discount = 0;
    let totalprice = 0;
    let peopleForFree = 0;
    if (arg2 == 'Students') {
        switch (arg3) {
            case ('Friday'):
                price = 8.45;
                break;
            case ('Saturday'):
                price = 9.80;
                break;
            case ('Sunday'):
                price = 10.46;
                break;
        }
        if (arg1 >= 30) {
            discount = 15;
        }
    } else if (arg2 == 'Business') {
        switch (arg3) {
            case ('Friday'):
                price = 10.90;
                break;
            case ('Saturday'):
                price = 15.60;
                break;
            case ('Sunday'):
                price = 16.00;
                break;
        }
        if (arg1 >= 100) {
            peopleForFree = 10;

        }
    } else if (arg2 == 'Regular') {
        switch (arg3) {
            case ('Friday'):
                price = 15.00;
                break;
            case ('Saturday'):
                price = 20.00;
                break;
            case ('Sunday'):
                price = 22.50;
                break;
        }
        if (arg1 >= 10 && arg1 <= 20) {
            discount = 5;

        }
    }
    totalprice = (arg1 - peopleForFree) * price;
    totalprice -= discount / 100 * totalprice;
    console.log(`Total price: ${totalprice.toFixed(2)}`);
}
Vacation(30, "Students", "Sunday")
Vacation(40, "Regular", "Saturday")