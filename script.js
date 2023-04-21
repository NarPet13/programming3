var socket = io()


var side = 30


function setup() {
       frameRate (5)
        createCanvas(25 * side, 25 * side)
        

}



function nkar(matrix) {
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



        //         for (let i in grassArr) {
        //                 grassArr[i].mul()
        //         }


        //         for(let i in grassEaterArr){
        //                 grassEaterArr[i].eat()
        //         }  
        //         for(let i in badgrassArr){
        //                 badgrassArr[i].mul()
        //         }
                
        //         for(let i in predatorArr){
        //                 predatorArr[i].eat()
        //         }
        //           for(let i in manArr){
        //         manArr[i].eat()
        //           } 
        //           for(let i in waterGenArr){
        //                 waterGenArr[i].eat()
        //                   }
        //   for(let i in waterArr){
        //         waterArr[i].mool()
        //   }




          }
          io.socket.emit('send matrix',matrix)