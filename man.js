let LivingCreature = require("./LivingCreature")

module.exports =class Man extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 10
        this.directions = [];
    }

    
    getNewCoordinates() {
        this.directions = [
            
            [this.x, this.y - 1],
           
            [this.x - 1, this.y],

            [this.x + 1, this.y],
           
            [this.x, this.y + 1],
           
        ];
    }



    chooseCell(char, bari) {
        this.getNewCoordinates()
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == bari) {
                    found.push(this.directions[i])
                }
            }
        }


        return found

    }


    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5

            let min = new Man(newX, newY)

           manArr.push(min)


        }
    }


    eat() {
        let emptyCell = this.chooseCell(2,4)
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]


        if (newCell) {
            this.energy += 5
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
            for (let i in manArr) {
                if (newX ==manArr[i].x && newY == manArr[i].y) {
                  
                    manArr.splice(i, 1)
        
                    break;
                }

            }

            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 40) {
                this.mul()
            }
           
           
        } else {
            this.move()
        }
    }

    move() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]
         
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }


    die() {
        matrix[this.y][this.x] = 0

        for (let i in manArr) {
            if (this.x == manArr[i].x && this.y == manArr[i].y) {
                manArr.splice(i, 1)
            }
        }
    }


}
//end