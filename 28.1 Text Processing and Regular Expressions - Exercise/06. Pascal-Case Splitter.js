function pascalCaseSplitter(input) {
let pattern=/.[a-z]*/g;
let output=[];

while((word=pattern.exec(input))!==null){
    output.push(word[0])
}
console.log(output.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo')