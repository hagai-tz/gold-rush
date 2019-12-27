const Matrix = require('./Matrix')

class GoldRush extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns)
        this.player1Score = 0
        this.player2Score = 0
    }
    movePlayer(playerNum, movement) {
        let p1 = this.findCoordinate("1")
        let p2 = this.findCoordinate("2")
        
        if (playerNum === 1) {
            switch (movement) {
                case "down":
                    if(!(p1.x === 4 )){ //super.numColumns-1
                        if(this.matrix[p1.x+1][p1.y] === "c") {this.player1Score += 10}
                    this.alter((p1.x+1), p1.y, "1") //move down
                    this.alter(p1.x, p1.y, ".") //delete old number
                    }
                    break

                case "up":
                    if(!(p1.x === 0)){
                        if(this.matrix[p1.x-1][p1.y] === "c") {this.player1Score += 10}
                    this.alter((p1.x-1), p1.y, "1") //move up
                    this.alter(p1.x, p1.y, ".")
                    }
                    break

                case "left":
                    if(!(p1.y === 0)){
                        if(this.matrix[p1.x][p1.y-1] === "c") {this.player1Score += 10}
                    this.alter(p1.x, (p1.y-1), "1") //move left
                    this.alter(p1.x, p1.y, ".")
                    }
                    break

                case "right":
                    if(!(p1.y === 4 )){ //super.numRows-1
                        if(this.matrix[p1.x][p1.y+1] === "c") {this.player1Score += 10}
                    this.alter(p1.x, (p1.y+1), "1") //move right
                    this.alter(p1.x, p1.y, ".")
                    }
                    break
            }
        } else {

            switch (movement) {
                case "down":
                    if(!(p2.x === 4 )){ //super.numColumns-1
                        if(this.matrix[p2.x+1][p2.y] === "c") {this.player2Score += 10}
                    this.alter((p2.x+1), p2.y, "2") //move down
                    this.alter(p2.x, p2.y, ".") //delete old number
                    }
                    break

                case "up":
                    if(!(p2.x === 0)){
                        if(this.matrix[p2.x-1][p2.y] === "c") {this.player2Score += 10}
                    this.alter((p2.x-1), p2.y, "2") //move up
                    this.alter(p2.x, p2.y, ".")
                    }
                    break

                case "left":
                    if(!(p2.y === 0)){
                        if(this.matrix[p2.x][p2.y-1] === "c") {this.player2Score += 10}
                    this.alter(p2.x, (p2.y-1), "2") //move left
                    this.alter(p2.x, p2.y, ".")
                    }
                    break

                case "right":
                    if(!(p2.y === 4 )){ //super.numRows-1
                        if(this.matrix[p2.x][p2.y+1] === "c") {this.player2Score += 10}
                    this.alter(p2.x, (p2.y+1), "2") //move right
                    this.alter(p2.x, p2.y, ".")
                    }
                    break
            }
        }

    }
    player1Score () {

    }

}
const board = new GoldRush(5, 5)
board.print()
console.log(board.player1Score) //prints 0
// board.print() 

board.movePlayer(2, "left")
board.movePlayer(2, "left")
board.movePlayer(2, "left")
board.movePlayer(2, "left")
board.movePlayer(2, "left")
console.log(board.player2Score) //prints 0


board.movePlayer(1, "right")
board.movePlayer(1, "right")
board.movePlayer(1, "right")
board.movePlayer(1, "right")
board.print()
board.movePlayer(1, "down")
board.print()
console.log(board.player1Score) //prints 0

// board.addCoins()

// board.movePlayer(1, "up")
// board.print()
// board.movePlayer(1, "down")
// board.print()
// board.movePlayer(1, "left")
// board.print()
