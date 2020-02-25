function distanceBetweenPoints(pointx1, pointy1, pointx2, pointy2) {
    let siteA = Math.abs(pointx2 - pointx1);
    let siteB = Math.abs(pointy2 - pointy1);
    let siteC = Math.sqrt(siteA * siteA + siteB * siteB);

    console.log(siteC);
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);