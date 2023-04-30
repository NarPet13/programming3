

var socket = io()


var side = 30


function setup() {
        createCanvas(20 * side, 20 * side)
        socket.on("winter", function (data) {
                weath = data;
            })
            socket.on("summer", function (data) {
                weath = data;
            })
            socket.on("spring", function (data) {
                weath = data;
            })
            socket.on("autumn", function (data) {
                weath = data;
            })

}
var weath = "spring"


function nkar(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {

                        
            

                        if (matrix[y][x] == 1) {
                                if(weath == "spring"){
                                        fill("green")
                                }
                                else if(weath == "autumn"){
                                        fill("yellow")
                                }
                                else if(weath=="summer"){

                                        fill("darkgreen")

                                }
                                else if (weath=="winter"){
                                        fill("white")
                                }
                                rect (x*side,y*side,side,side)
                           
                        } else if(matrix[y][x] == 2){
                                fill("yellow")
                                rect (x*side,y*side,side,side)
                               
                        }
                       else if(matrix[y][x]==3){
                 
                        fill("red")
                        rect (x*side,y*side,side,side)
                        
                        }
                       
                           else if(matrix[y][x]==4){
                              
                                if(weath == "spring"){
                                        fill("orange")
                                }
                                else if(weath == "autumn"){
                                        fill("red")
                                }
                                else if(weath=="summer"){

                                        fill("black")

                                }
                                else if (weath=="winter"){
                                        fill("yellow")
                                }
                                        rect (x*side,y*side,side,side)  
                
                           }
                           else if(matrix[y][x]==5){
                             
                                fill("bisque")
                                rect (x*side,y*side,side,side) 
                                
                           }
                           else if(matrix[y][x]==6){
                             
                                fill("blue")
                                rect (x*side,y*side,side,side) 
                                
                              
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

}





socket.on('send matrix',nkar)  

function killall(){
        socket.emit('killall');
        }
        
        function spawnGr(){
            socket.emit('spawnGr');
        }
        
        function spawnGrEater(){
            socket.emit('spawnGrEater');
        }
        function spawnPr(){
                socket.emit('spawnPr');
        }
        function spawnw(){
                socket.emit('spawnw')
        }
        function winter() {
              
                socket.emit('winter')
        }
        function summer() {
                
                socket.emit('summer')
        }
        function spring() {
               
                socket.emit('spring')
        
        }
        function autumn() {
               
                socket.emit('autumn')
        }


       