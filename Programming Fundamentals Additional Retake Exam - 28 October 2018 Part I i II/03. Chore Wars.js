function choreWars(input) {
    let timeForDoingDishes = 0;
    let timeForCleaningHouse = 0;
    let timeForDoingLaundry = 0;
    let totalTime = 0;
    while ((command = input.shift()) !== 'wife is happy') {
        if (command.match(/<[a-z\d]+>/g)) {
            let operation = String((/<[a-z\d]+>/g).exec(command)).substr(1, String((/<[a-z\d]+>/g).exec(command)).length - 2);
            operation = operation
                .split('')
                .map(Number)
                .forEach(el => {
                    if (0 <= el && el <= 9) {
                        timeForDoingDishes += el;
                        totalTime+=el;
                    }
                });
        } else if (command.match(/[[][A-Z\d]+]/g)) {
            let operation = String((/[[][A-Z\d]+]/g).exec(command)).substr(1, String((/[[][A-Z\d]+]/g).exec(command)).length - 2);
            operation = operation
                .split('')
                .map(Number)
                .forEach(el => {
                    if (0 <= el && el <= 9) {
                        timeForCleaningHouse += el;
                        totalTime+=el;
                    }
                });
        } else if (command.match(/{[\w\d!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]+}/g)) {
            let operation = String((/{[\w\d!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]+}/g).exec(command)).substr(1, String((/{[\w\d!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]+}/g).exec(command)).length - 2);
            operation = operation
                .split('')
                .map(Number)
                .forEach(el => {
                    if (0 <= el && el <= 9) {
                        timeForDoingLaundry += el;
                        totalTime+=el;
                    }
                });
        }
    }
    console.log(`Doing the dishes - ${timeForDoingDishes} min.`);
    console.log(`Cleaning the house - ${timeForCleaningHouse} min.`);
    console.log(`Doing the laundry - ${timeForDoingLaundry} min.`);
    console.log(`Total - ${totalTime} min.`);
}
choreWars(['-^hr5a65j48<dd6f5h4dhfd>456sga_+',
    'DHdhy4*3[T2HOU87KRC]sA/@',
    'Sda%t]gf{%hjK8f34)!fG1re}-+htG%v',
    'wife is happy'
]);
choreWars(['Vo.|1zps {lo2a}zgVGk{1)N+',
    'Asdad123zxc{3]',
    'R[A [F67G9C]6e3C@',
    'MVo.|1zpshM<9) <d85ifkh59votu>@',
    '<dm0g2y34mw1kpds2>iD|"p',
    'wife is happy'
]);