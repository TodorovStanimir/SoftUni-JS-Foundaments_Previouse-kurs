theaThePhotographer = (input) => {
    let amountOfPictures = parseInt(input.shift());
    let filterTimePerPictures = parseInt(input.shift());
    let filterFactor = parseInt(input.shift());
    let timeToApploadFilteredPicture = parseInt(input.shift());

    let totalTime = amountOfPictures * filterTimePerPictures + Math.ceil(amountOfPictures * filterFactor / 100) * timeToApploadFilteredPicture;

   
    let days = Math.floor(totalTime / 86400);
    let restTime = totalTime - days * 86400;
    let hours = Math.floor(restTime / 3600);
    restTime -= hours * 3600;
    let minutes = Math.floor(restTime / 60);
    let seconds = restTime - minutes * 60;
    console.log(`${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);

}
theaThePhotographer(['1000', '1', '50', '1', '']);
theaThePhotographer(['5342', '2', '82', '3', ''])