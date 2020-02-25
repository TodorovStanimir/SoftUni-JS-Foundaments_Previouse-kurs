function cutAndReverse(input) {
    let firstHalf = input.substr(0, input.length / 2);
    let secondHalf = input.substr(input.length / 2, input.length / 2);
    splitReverseJoin([firstHalf, secondHalf]);

    function splitReverseJoin(argument) {
        argument.forEach(element => {
            let result = element.split('').reverse().join('');
            console.log(result);
        });
    }
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');