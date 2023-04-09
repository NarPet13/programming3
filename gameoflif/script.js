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

let matrix = matrixGenerator(20, 17,7,4,3,3,3,4)
let side =30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
 var badgrassArr=[]
 var predatorArr=[]
 var manArr= []
 var waterGenArr=[]
 var waterArr = []

function setup() {
       frameRate (5)
        createCanvas(matrix[0].length * side, matrix.length * side)
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

}



function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {

                        var face = side - side * 0.1
                        textSize(face)
            

                        if (matrix[y][x] == 1) {
                                fill("green")
                                rect (x*side,y*side,side,side)
                                // text("💸",x*side,y*side +face)
                        } else if(matrix[y][x] == 2){
                                fill ("yellow")
                                rect (x*side,y*side,side,side)
                                // text("📃",x*side,y*side +face)
                        }
                       else if(matrix[y][x]==3){
                 
                        fill("red")
                        rect (x*side,y*side,side,side)
                        // text("🍔",x*side,y*side +face)
                       }
                           else if(matrix[y][x]==4){
                              
                                        fill("black")
                                        rect (x*side,y*side,side,side)  
                                        // text("👩",x*side,y*side +face)
                           }
                           else if(matrix[y][x]==5){
                             
                                fill("bisque")
                                rect (x*side,y*side,side,side) 
                                // text("📈",x*side,y*side +face)
                           }
                           else if(matrix[y][x]==6){
                             
                                fill("blue")
                                rect (x*side,y*side,side,side) 
                                // text("🧑",x*side,y*side +face)
                              
                           }
                           else if(matrix[y][x]==7){
                             
                                fill("lightblue")
                                rect (x*side,y*side,side,side) 
                              
                              
                           }
                        else {
                                
                                fill("gray")
                                rect (x*side,y*side,side,side)
                               
                        }
                  

                }
        }



                for (let i in grassArr) {
                        grassArr[i].mul()
                }


                for(let i in grassEaterArr){
                        grassEaterArr[i].eat()
                }  
                for(let i in badgrassArr){
                        badgrassArr[i].mul()
                }
                
                for(let i in predatorArr){
                        predatorArr[i].eat()
                }
                  for(let i in manArr){
                manArr[i].eat()
                  } 
                  for(let i in waterGenArr){
                        waterGenArr[i].eat()
                          }
          for(let i in waterArr){
                waterArr[i].mool()
          }



console.log(grassArr);
        }
        function Reload(){
                window.location.reload()
        }
        function  Start(){
                window.location.href="index.html"
        }