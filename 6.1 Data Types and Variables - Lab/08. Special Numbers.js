function SpecialNumbers(num) {
    let item = 0;
    let result = 0;
    for (let i = 1; i <= num; i++) {   
        item = i;
        while (item>0){
            result+=item%10;
            item=parseInt(item/10);
        }
        if (result == 5 || result == 7 || result == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        result=0;
    }
}
SpecialNumbers(15)