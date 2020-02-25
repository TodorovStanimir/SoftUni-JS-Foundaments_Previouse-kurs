function Cone(arg1, arg2) {
    let volume = (Math.PI * arg1 * arg1 * arg2) / 3;
    let area = Math.PI * arg1 * arg1 + Math.PI * arg1 * Math.sqrt(arg1 * arg1 + arg2 * arg2);
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`);
}
Cone(3, 5)
Cone(3.3, 7.8)