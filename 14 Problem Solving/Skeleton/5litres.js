function fiveLiteres(){
    let maxWaterInBigBucket=7;
    let maxWaterInSmallBucket=4;
    let currentWaterInBigBucket=7;
    let currentWaterInSlmallBucket=0;
    let freePlaceInSmallBucket=4;
    let freePlaceInBigBucket=0;
    let counter=0;
    let counter1=0;

    while (currentWaterInBigBucket!=5){
        counter++;
        if (currentWaterInSlmallBucket<maxWaterInSmallBucket){
            if (freePlaceInSmallBucket<=currentWaterInBigBucket){
                currentWaterInBigBucket-=freePlaceInSmallBucket;
                currentWaterInSlmallBucket+=freePlaceInSmallBucket;
                freePlaceInBigBucket+=freePlaceInSmallBucket;
                freePlaceInSmallBucket=0;
            } else {
                freePlaceInSmallBucket-=currentWaterInBigBucket;
                currentWaterInSlmallBucket+=currentWaterInBigBucket;
                freePlaceInBigBucket+=currentWaterInBigBucket;
                currentWaterInBigBucket-=currentWaterInBigBucket;
            }
        }
        if (currentWaterInSlmallBucket===maxWaterInSmallBucket){
            currentWaterInSlmallBucket=0;
            freePlaceInSmallBucket=maxWaterInSmallBucket;
            counter1++;
        }
        if (currentWaterInBigBucket===0){
            freePlaceInBigBucket=0;
            currentWaterInBigBucket=7;
        }

    }
    console.log(currentWaterInBigBucket);
    console.log(counter);
    console.log(counter1);
}
fiveLiteres();