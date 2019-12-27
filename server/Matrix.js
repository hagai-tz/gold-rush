// /* Write your code below */
//You can paste the code from the lesson below to test your solution
class Matrix {
    constructor(numRows, numColumns) {
        this.matrix = this.generateMatrix(numRows, numColumns),
        this.numRows = numRows,
        this.numColumns = numColumns

    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(".")
            }
        }
        matrix[0][0] = "1"
        matrix[numRows-1][numColumns-1] = "2"
        return matrix
    }


    print() {
        for (let i = 0; i < (this.matrix.length); i++) {
            let line = ""
            for (let j = 0; j < (this.matrix[i].length); j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    printRow(rowNum) {
        let line = ""
        for (let j = 0; j < (this.matrix[rowNum].length); j++) {
            line += (this.matrix[rowNum][j] + "\t")
        }
        console.log(line)
    }

    printColumn(columnNum) {
        let line = ""
        for (let j = 0; j < (this.matrix.length); j++) {
            console.log(this.matrix[j][columnNum] + "\t")
        }
    }

    alter(rowNum, colNum, Num) {
        this.matrix[rowNum][colNum] = Num
    }

    findCoordinate (value) {
        let obj = {}
        for (let i = 0; i < (this.matrix.length); i++) {
            for (let j = 0; j < (this.matrix[i].length); j++) {
                if(this.matrix[i][j] === value){
                    // console.log("x: " + i + ", y: " + j)
                    obj.x = i
                    obj.y = j
                    return obj
                }
            }
        }
        // else {console.log("The number is not exists")}
    }
    
}

// const board = new Matrix(5, 5)
// board.print()


module.exports = Matrix

