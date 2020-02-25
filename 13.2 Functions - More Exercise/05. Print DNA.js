function printDNA(num) {
    let str = 'ATCGTTAGGG';
    let y = 0;
    let z = 0;
    let a = [];
    a = str.split('');
    let step=1;
    for (let i = 0; i < num; i++) {
        console.log('*'.repeat(2 - y) + a[z] + '-'.repeat(y) + '-'.repeat(y) + a[z + 1] + '*'.repeat(2 - y));
        y+=step;
        z += 2;
        if (y === 3) {
            step=-1;
            y=1;
        }
        if (y===-1){
            step=1;
            y=1
        }
        if (z === 10) {
            z = 0;
        }
    }
}
printDNA(4);