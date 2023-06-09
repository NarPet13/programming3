
var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var fs = require("fs")


app.use(express.static("."))

app.get('/', function (req, res) {

        res.redirect('index.html')

})


server.listen(3000, function () {

        console.log("server is run");

})

function matrixGenerator(matrixSize, grass, grassEater, badgrass, predator, man, watergenerator, water) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        // grass
        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
        //GrassEater 

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

                //preadator
        }
        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4

        }

        for (let i = 0; i < man; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5



        }
        for (let i = 0; i < watergenerator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 6

        }
        for (let i = 0; i < water; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 7

        }

        return matrix
}

matrix = matrixGenerator(20, 17, 7, 4, 3, 3, 3, 4)



io.sockets.emit('send matrix', matrix)

grassArr = []
grassEaterArr = []
badgrassArr = []
predatorArr = []
manArr = []
waterGenArr = []
waterArr = []

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Man = require("./man")
Water = require("./water")
Watergenerator = require("./watergenerater")
Badgrass = require("./badgrass")

function createobject() {

        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                                grassArr.push(grass)


                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        }
                        else if (matrix[y][x] == 3) {
                                let bgress = new Badgrass(x, y)
                                badgrassArr.push(bgress)
                        }
                        else if (matrix[y][x] == 4) {
                                let preadator = new Predator(x, y)
                                predatorArr.push(preadator)
                        }
                        else if (matrix[y][x] == 5) {

                                manArr.push(new Man(x, y))
                        }
                        else if (matrix[y][x] == 6) {
                                let watA = new Watergenerator(x, y)
                                waterGenArr.push(watA)
                        }

                        else if (matrix[y][x] == 7) {
                                let watr = new Water(x, y)
                                waterArr.push(watr)
                        }
                }
        }

        io.sockets.emit('send matrix', matrix)
}

// io.on("connection", function () {

//         createobject()

// })

function game() {
        for (let i in grassArr) {
                grassArr[i].mul()
        }

        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }
        for (let i in badgrassArr) {
                badgrassArr[i].mul()
        }

        for (let i in predatorArr) {
                predatorArr[i].eat()
        }
        for (let i in manArr) {
                manArr[i].eat()
        }
        for (let i in waterGenArr) {
                waterGenArr[i].eat()
        }
        for (let i in waterArr) {
                waterArr[i].mool()
        }

        io.sockets.emit("send matrix", matrix)

}

setInterval(game, 200)



// var statistics = {}

// setInterval(function () {

//         statistics.grass = grassArr.length
//         statistics.badgrass = badgrassArr.length
//         statistics.predator = predatorArr.length
//         statistics.grassEater = grassEaterArr.length
//         statistics.watergenerator = waterGenArr.length
//         statistics.water = waterArr.length
//         statistics.man = manArr.length

//         fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
//                 console.log("log")
//         })



// }, 1000)




var weath;

function winter() {
        weath = "winter"
        io.sockets.emit('winter', weath)
}
function summer() {
        weath = "summer"
        io.sockets.emit('summer', weath)
}
function spring() {
        weath = "spring"
        io.sockets.emit('spring', weath)

}
function autumn() {
        weath = "autumn"
        io.sockets.emit('autumn', weath)
}



function killall() {
        grassArr = [];
        grassEaterArr = [];
        badgrassArr = [];
        predatorArr = [];
        manArr = [];
        waterArr = [];
        waterGenArr = []
        for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                        matrix[y][x] = 0;
                }
        }
        io.sockets.emit("send matrix", matrix);
}

function spawnGr() {
        for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix.length; x++) {
                        if (matrix[y][x] == 0) {
                                matrix[y][x] = 1
                                grassArr.push(new Grass(x, y))
                        }
                }
        }
        io.sockets.emit("send matrix", matrix);
}

function spawnGrEater() {
        for (var i = 0; i < 5; i++) {
                var x = Math.floor(Math.random() * matrix[0].length)
                var y = Math.floor(Math.random() * matrix.length)
                if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                        matrix[y][x] = 2
                        grassEaterArr.push(new GrassEater(x, y));
                }
        }
        io.sockets.emit("send matrix", matrix);
}
function spawnPredator() {
        for (var i = 0; i < 15; i++) {
                var x = Math.floor(Math.random() * matrix[0].length)
                var y = Math.floor(Math.random() * matrix.length)
                if (matrix[y][x] == 0 || matrix[y][x] == 1 || matrix[x][y] == 2 || matrix[x][y] == 3) {
                        matrix[y][x] = 4
                        predatorArr.push(new Predator(x, y));
                }
        }
        io.sockets.emit("send matrix", matrix);
}
// function killpredator(){


//                 if (matrix[y][x] == 4) {
//                         matrix[y][x] = 0
//                         predatorArr.splice(i,1)
//                 }

//         io.sockets.emit("send matrix", matrix);
// }



function spawnwater() { 

        for (var i = 0; i < 15; i++) {
                var x = Math.floor(Math.random() * matrix[0].length)
                var y = Math.floor(Math.random() * matrix.length)
                if (matrix[y][x] == 0 ) {
                        matrix[y][x] = 7
                        waterArr.push(new Water(x, y));
                }
        }
        io.sockets.emit("send matrix", matrix);

        
}

io.on('connection', function (socket) {
        createobject();
        socket.on("spring", spring);
        socket.on("summer", summer);
        socket.on("autumn", autumn);
        socket.on("winter", winter);
        socket.on("spawnGr", spawnGr);
        socket.on("spawnGrEater", spawnGrEater);
        socket.on("killall", killall);
        socket.on("spawnw", spawnwater);
        socket.on("spawnPr",spawnPredator);
    })
    
    var statistics = {};
    setInterval(function () {
        statistics.grass = grassArr.length;
        statistics.grassEater = grassEaterArr.length;
        statistics.predator = predatorArr.length;
        statistics.badgrass = badgrassArr.length;
        statistics.man = manArr.length;
        statistics.water = waterArr.length;
        statistics.watergenerator = waterGenArr.length;
        fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
        })
    }, 1000);