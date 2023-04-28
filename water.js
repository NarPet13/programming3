let LivingCreature = require("./LivingCreature")

module.exports =class Water extends LivingCreature{
    constructor(x,y){
       super(x,y)
   this.energy=10
    }
    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

              matrix[newY][newX] = 1

            let wot = new Grass(newX, newY)

          grassArr.push(wot)
      

        }
        else if(grassArr.length>150){
          this.die()
   }
    }
  mool(){
    if(this.energy=10){
        this.mul()
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