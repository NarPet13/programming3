let LivingCreature = require("./LivingCreature")

module.exports =class Watergenerator extends LivingCreature{
    constructor(x, y) {
       super(x,y)
        this.energy = 15
        this.directions = []
    
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
        
            [this.x + 1, this.y - 1],
          
          
            [this.x - 1, this.y + 1],
           
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char, char1, char2,char3,char4,char5) {
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
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }
            }

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char3) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char4) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char5) {
                    found.push(this.directions[i])
                }
            }
        
    
        


        }


        return found

    }
    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6

            let wate = new Watergenerator(newX, newY)

           waterGenArr.push(wate)
       
          

        }
    }

    eat() {
        let emptyCell = this.chooseCell(3)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 10
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in badgrassArr) {
                if (newX == badgrassArr[i].x && newY == badgrassArr[i].y) {
                    badgrassArr.splice(i, 1)
                }
            }

            matrix[newY][newX] =6 
            matrix[this.y][this.x] = 7


            this.x = newX
            this.y = newY

            if (this.energy > 20) {
              this.mul()
            }

        } else {
            this.move()
        }
    }
    // ate(){
    //     let emptyCell = this.chooseCell(3)
    //     let newCell = random(emptyCell)

    //     if (newCell) {
    //         this.energy -=5
    //         let newX = newCell[1]
    //         let newY = newCell[0]

    //         // for (let i in badga) {
    //         //     if (newX == badga[i].x && newY == badga[i].y) {
    //         //         badga.splice(i, 1)
    //         //     }
    //         //}
    //     }
    //   }


    move() {
        let emptyCell = this.chooseCell(0,2,3,4,5,7)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 7

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

        for (let i in waterGenArr) {
            if (this.x == waterGenArr[i].x && this.y == waterGenArr[i].y) {
                waterGenArr.splice(i, 1)
            }
        }
    }


}  