function login(input) {
    let user = String(input.shift());
    let password = '';
    for (let i = user.length; i >= 0; i--) {
        password += user.charAt(i);
    }
    let checkingpassword = '';
    for (let y = 1; y <= 4; y++) {
        checkingpassword = String(input.shift());
        if (checkingpassword == password) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            if (y != 4) {
                console.log('Incorrect password. Try again.');
            } else {
                console.log(`User ${user} blocked!`);
            }
        }
    }
}
//login(['Acer', 'login', 'go', 'let me in', 'recA'])
//login(['momo', 'omom'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])