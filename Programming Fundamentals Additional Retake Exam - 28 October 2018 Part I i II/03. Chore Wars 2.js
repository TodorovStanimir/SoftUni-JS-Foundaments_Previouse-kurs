function choreWars(input) {
    let doingDishes = 0;
    let cleaningHouse = 0;
    let doingLaundry = 0;
    let patternDishes = /<[a-z0-9]+>/g;
    let patternHouse = /\[[A-Z0-9]+\]/g;
    let patternLaundry = /{.+}/g;

    while ((line = input.shift()) !== 'wife is happy') {
        if (line.match(patternDishes)) {
            doingDishes += calculateTime(line, patternDishes);
        } else if (line.match(patternHouse)) {
            cleaningHouse += calculateTime(line, patternHouse);
        } else if (line.match(patternLaundry)) {
            doingLaundry += calculateTime(line, patternLaundry);
        }
    }
    console.log(`Doing the dishes - ${doingDishes} min.`);
    console.log(`Cleaning the house - ${cleaningHouse} min.`);
    console.log(`Doing the laundry - ${doingLaundry} min.`);
    console.log(`Total - ${doingDishes + cleaningHouse + doingLaundry} min. `)

    function calculateTime(string, pattern) {
        let result = string.match(pattern)[0]
            .split('')
            .filter(el => Number(el))
            .map(Number)
            .reduce((a, b) => a + b, 0)
        return result;
    }
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