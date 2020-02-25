function cookingFactory(input) {
    let currentItem = input.shift().split('#');
    let output = [];
    let bestBatchQuallity = -1001;
    let avaregaQualityOfBestBatchQuallity = 0
    let minLength = 0;

    while (currentItem[0] !== 'Bake It!') {
        currentItem = currentItem.map(x=>parseInt(x));
        let currentBatchQuallity = 0;
        for (let i = 0; i < currentItem.length; i++) {
            currentBatchQuallity += currentItem[i];
        }
        let currentAverageQuality = currentBatchQuallity / (currentItem.length);
        let currentLength = currentItem.length;

        if (currentBatchQuallity > bestBatchQuallity) {
            output = currentItem;
            bestBatchQuallity = currentBatchQuallity;
            avaregaQualityOfBestBatchQuallity = currentAverageQuality;
            minLength = currentLength;
        } else if (currentBatchQuallity === bestBatchQuallity) {
            if (currentAverageQuality > avaregaQualityOfBestBatchQuallity) {
                output = currentItem;
                bestBatchQuallity = currentBatchQuallity;
                avaregaQualityOfBestBatchQuallity = currentAverageQuality;
                minLength = currentLength;
            } else if (currentAverageQuality === avaregaQualityOfBestBatchQuallity) {
                if (currentLength < minLength) {
                    output = currentItem;
                    bestBatchQuallity = currentBatchQuallity;
                    avaregaQualityOfBestBatchQuallity = currentAverageQuality;
                    minLength = currentLength;
                }
            }
        }
        currentItem = input.shift().split('#');
    }
    console.log(`Best Batch quality: ${bestBatchQuallity}`);
    console.log(output.join(' '));
}
cookingFactory(["5#4#10#-2", "10#5#2#3#2", "Bake It!"]);
cookingFactory(["5#3#2", "10#2#-2#1#-1", "4#2#1", "Bake It!"]);