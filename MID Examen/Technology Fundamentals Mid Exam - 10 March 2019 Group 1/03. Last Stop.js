function lastStop(input) {
    let paintingNumbers = input.shift().split(' ').map(Number);
  
    while ((line = input.shift()) !== 'END') {
      let token = line.split(' ');
      let command = token[0];
  
      if (command === 'Change') {
        let paintingNumber = Number(token[1]);
        let changedNumber = Number(token[2]);
        if (paintingNumbers.includes(paintingNumber)) {
          paintingNumbers[paintingNumbers.indexOf(paintingNumber)] = changedNumber;
        }
  
      } else if (command === 'Hide') {
        let paintingNumber = Number(token[1]);
        while (paintingNumbers.includes(paintingNumber)) {
          paintingNumbers.splice(paintingNumbers.indexOf(paintingNumber), 1);
        }
  
      } else if (command === 'Switch') {
        let paintingNumber = Number(token[1]);
        let paintingNumber2 = Number(token[2]);
        let indexPaintingNumber = paintingNumbers.indexOf(paintingNumber);
        let indexPaintingNumber2 = paintingNumbers.indexOf(paintingNumber2);
        if (indexPaintingNumber !== -1 && indexPaintingNumber2 !== -1) {
          paintingNumbers[indexPaintingNumber] = paintingNumber2;
          paintingNumbers[indexPaintingNumber2] = paintingNumber;
        }
  
      } else if (command === 'Insert') {
        let place = Number(token[1]);
        let paintingNumber = Number(token[2]);
        let index = place + 1;
        if (index >= 0 && index <= paintingNumbers.length) {
          paintingNumbers.splice(index, 0, paintingNumber);
        }
  
      } else if (command = 'Reverse') {
        paintingNumbers.reverse();
      }
  
    }
  
    console.log(paintingNumbers.join(' '));
  
  }
lastStop(["115 115 101 114 73 111 116 75",
    "Insert 5 114",
    "Switch 116 73",
    "Hide 75",
    "Reverse",
    "Change 73 70",
    "Insert 10 85",
    "END"
]);
lastStop(["77 120 115 101 101 97 78 88 112 111 108 101 111 110",
    "Insert 5 32",
    "Switch 97 78",
    "Hide 88",
    "Change 120 117",
    "END"

]);