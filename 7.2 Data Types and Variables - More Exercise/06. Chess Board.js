function ChessBoard(arg) {
    let output = ''
    console.log('<div class="chessboard">')
    for (let i = 1; i <= arg; i++) { 
        console.log('  <div>')
        for (let y = 1; y <= arg; y++) {
            if (i % 2 != 0) {
                if (y % 2 != 0) {
                    console.log('    <span class="black"></span>');
                } else {
                    console.log('    <span class="white"></span>');
                }
            } else if (i % 2 == 0) {
                if (y % 2 != 0) {
                    console.log('    <span class="white"></span>');
                } else {
                    console.log('    <span class="black"></span>');
                }
            }
        }
        console.log('  </div>')
    }
    console.log('</div>')
}
ChessBoard(3)