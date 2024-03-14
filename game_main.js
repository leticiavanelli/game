let des = document.getElementById('des').getContext('2d')

let boneco = new Boneco(100,400,160,160,'./assets/assustado.png')
let c2 = new Veneno(400,-40,80,80,'./assets/comidapodre.png')
let c3 = new Veneno(200,-280,80,80,'./assets/bananaestragada.png')
let c4 = new Fruta(400,-40,80,80,'./assets/hamburguer.png')
let c5 = new Fruta(200,-280,80,80,'./assets/maça.png')
let c6 = new Veneno(200,-280,80,80,'./assets/maçapodre.png')
let c7 = new Fruta(200,-280,80,80,'./assets/sushi.png')


let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()

let motor = new Audio ('.')
let batida = new Audio ('.')
motor.volume = 0.8
motor.loop = true
batida.volume = 1.0 

document.addEventListener('keydown',(e) => {
    if(e.key == 'a'){
    boneco.dir -=10
    console.log("esquerda = ",boneco.dir)
    }else if (e.key === 'd'){
        boneco.dir +=10
        
    }
   
})

document.addEventListener('keyup', (e) => {
    if(e.key === 'a'){
        boneco.dir = 0
    }else if (e.key === 'd'){
        boneco.dir = 0
    }
})
