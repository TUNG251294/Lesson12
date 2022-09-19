let board = new Array(5)
for (let i = 0; i < board.length; i++) {
    board[i] = new Array(5)
    for (let j = 0; j < board[i].length; j++) {
        board[i][j] = 0
    }  document.write(board[i].join(" ") + "<br>")
}         //console.log(board)
function input() {let i = parseInt(prompt("input positionX"))
    let j = parseInt(prompt("input positionY"));
    let value = prompt("input value 0 or 1")
    console.log(value)
    board.splice([i][j],1,value)
    console.log(board)
}
