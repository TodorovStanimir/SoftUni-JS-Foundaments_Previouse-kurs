function loadingBar(input) {
    let percent = input / 10;
    let points = 10 - input / 10;
    if (input !== 100) {
        console.log(input + '% [' + '%'.repeat(percent) + '.'.repeat(points) + ']');
        console.log('Still loading...');
    } else {
        console.log('100%' + ' Complete!');
        console.log('[' + '%'.repeat(10) + ']');
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);