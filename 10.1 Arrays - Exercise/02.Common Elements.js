function commonElements(arr1,arr2){
    for (let arg1 of arr1){
        for (let arg2 of arr2){
            if (arg1===arg2){
                console.log(arg1);
            }
        }
    }
}
commonElements(['Hey','hello',2,4,'Pesho','e'], ['Pecho',10,'hey',4,'hello','2']);
commonElements(['S','o','f','t','U','n','i',' '], ['s','o','c','i','a','l']);