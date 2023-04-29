

var socket = io()


var side = 30

let weather1="winter"

// function changer(){
//         if(weather1 == "winter"){
//             document.getElementById("wstyle").style.color = "#8d05e8";
//         }
//         else{
//             document.getElementById("wstyle").style.color = "white";
//         }
//     }








function setup() {
        createCanvas(20 * side, 20 * side)
        

}



function nkar(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {

                        // var face = side - side * 0.1
                        // textSize(face)
            

                        if (matrix[y][x] == 1) {
                                fill("green")
                                rect (x*side,y*side,side,side)
                               
                        } else if(matrix[y][x] == 2){
                                fill ("yellow")
                                rect (x*side,y*side,side,side)
                           
                        }
                       else if(matrix[y][x]==3){
                 
                        fill("red")
                        rect (x*side,y*side,side,side)
                        
                       }
                           else if(matrix[y][x]==4){
                              
                                        fill("black")
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
        
        // function spawnPr(){
        //     socket.emit('spawnPr');
        // }
        // function killPr(){
        //     socket.emit('killPr')
        // }
        function changeWeather(){
            socket.emit('chWeather');
        }
        