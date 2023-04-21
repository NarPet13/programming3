var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var fs = require("fs")
const Watergenerator = require('./gameoflif/watergenerater')

app.use(express.static("."))

app.get('/',function (req, res){

   res.redirect('index.html')

})


server.listen(3000,function(){

console.log("server");

})

function matrixGenerator(matrixSize, grass,grassEater,badgrass,predator,man,watergenerator,water) {
    var matrix = []
    ////  matrix սարքելու հատված
    for (let i = 0; i < matrixSize; i++) {
            matrix.push([])
            for (let j = 0; j < matrixSize; j++) {
                    matrix[i].push(0)
            }
    }

    // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
    for (let i = 0; i < grass; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 1
    }
     //GrassEater 2

     for (let i = 0; i < grassEater; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 2
    }
///Badgrass
     for (let i = 0; i < badgrass; i++) {
             let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
             matrix[y][x] = 3

    
     }
     for (let i = 0; i < predator; i++) {
            let x = Math.floor(Math.random() * matrixSize)
           let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] =4

     }
    
    for (let i = 0; i < man; i++) {
            let x = Math.floor(Math.random() * matrixSize)
           let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 5


    
    }
    for(let i = 0;i< watergenerator;i++){
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
             matrix[y][x] = 6

    }
    for(let i = 0;i< water;i++){
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
             matrix[y][x] = 7

    }

    return matrix
}

 matrix = matrixGenerator(20, 17,7,4,3,3,3,4)



 io.socket.emit('send matrix',matrix)

grassArr = []
 grassEaterArr = []
  badgrassArr=[]
  predatorArr=[]
  manArr= []
  waterGenArr=[]
  waterArr = []

 Grass = require("./grass")
 GrassEater = require("./grassEater")
 Pretador = require("./predator")
Man = require("./man")
 Water= require("./water")
 Watergenerator = require("./watergenerator")


  function createobject(){

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                        let grass = new Grass(x, y)

                        grassArr.push(grass)


                } else if(matrix[y][x] == 2){
                     let grEat = new GrassEater(x,y)
                     grassEaterArr.push(grEat)
                }
                  else if(matrix[y][x]==3){
                        let bgress = new Badgrass(x,y)
                        badgrassArr.push(bgress)
                  }
                  else if(matrix[y][x]==4){
                      let mones = new Predator(x,y)
                      predatorArr.push(mones)
                  }
                //   else if(matrix[y][x]==5){
                        
                //         manArr.push(new Man(x,y))
                //     }
                    else if(matrix[y][x]==6){
                        let watA = new Watergenerator(x,y)
                        waterGenArr.push(watA)
                    }
        
                //     else if(matrix[y][x]==7){
                //         let watr = new Water(x,y)
                //         waterArr.push(watr)
                //     }
                }
}

io.socket.emit('send matrix',matrix)
}

