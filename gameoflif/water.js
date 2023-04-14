let LivingCreature = require("./LivingCreature")

module.exports =class Water extends LivingCreature{
    constructor(x,y){
       super(x,y)
   this.energy=10
    }
    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 1

            let wot = new Grass(newX, newY)

          grassArr.push(wot)


        }
    }
  mool(){
    if(this.energy=10){
        this.mul()
    }
  }
}