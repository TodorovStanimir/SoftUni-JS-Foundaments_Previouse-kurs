function cookingFactory(input) {
    let bestBatch = [];
    let bestTotalQuality = Number.MIN_SAFE_INTEGER;
    let bestAverageQulity = Number.MIN_SAFE_INTEGER;
    let bestMinLength = Number.MAX_SAFE_INTEGER;

    while ((line = input.shift()) !== 'Bake It!') {
        let currentBatch = line.split('#').map(element => parseInt(element));
        let totalQuality = currentBatch.reduce((a, b) => a + b, 0);
        let averageQulity = totalQuality / currentBatch.length;
        let length = currentBatch.length;

        if (totalQuality > bestTotalQuality) {
            bestBatch = currentBatch.slice(0, currentBatch.length);
            bestTotalQuality = totalQuality;
            bestAverageQulity = averageQulity;
            bestMinLength = length;
        } else if (totalQuality === bestTotalQuality) {
            if (averageQulity > bestAverageQulity) {
                bestBatch = currentBatch.slice(0, currentBatch.length);
                bestTotalQuality = totalQuality;
                bestAverageQulity = averageQulity;
                bestMinLength = length;
            } else if (averageQulity === bestAverageQulity) {
                if (length < bestMinLength) {
                    bestBatch = currentBatch.slice(0, currentBatch.length);
                    bestTotalQuality = totalQuality;
                    bestAverageQulity = averageQulity;
                    bestMinLength = length;
                }
            }
        }
    }
    console.log(`Best Batch quality: ${bestTotalQuality}\n${bestBatch.join(' ')}`);
}
cookingFactory(["5#4#10#-2", "10#5#2#3#2", "Bake It!"]);
cookingFactory(["5#3#2", "10#2#-2#1#-1", "4#2#1", "Bake It!"]);