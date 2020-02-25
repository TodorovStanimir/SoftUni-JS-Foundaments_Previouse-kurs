function rageQuit(input) {
    let pattern = /(?<word>[^\d]+?)(?<number>[\d]+)/g;
    let output = [];
    while ((line = pattern.exec(input[0])) !== null) {
            output.push(line.groups.word.toUpperCase().repeat(line.groups.number));
    }
    let numberUnique = [...new Set(output.join(''))].length;
    console.log(`Unique symbols used: ${numberUnique}`);
    console.log(output.join(''));
}
rageQuit(['aSd2&5s@1']);
rageQuit(['a3']);
rageQuit(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15'])