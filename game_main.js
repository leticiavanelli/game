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
    }else if (e.key === 'a'){
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

function game_over(){
    if(boneco.vida <=0){
        jogar = false
        motor.pause()
    }

}
function pontos(){
    if(boneco.point(c2)){
        boneco.pts +=1
    }else if(boneco.point(c3)){
        boneco.pts += 1
    }

}

function colisao(){
    if(boneco.colid(c2)){
        boneco.vida -=1
        c2.recomeca()
        batida.play()
    }else if(boneco.colid(c3)){
        boneco.vida -=1
        c3.recomeca()
        batida.play()
    }
}

function desenha(){
    t1.des_text('Pontos:',360,20,'yellow', '26px Times')
    t2.des_text(boneco.pts,445,20,'yellow', '26px Times')
    t3.des_text('Vida:',40,20,'yellow', '26px Times')
    t4.des_text(boneco.vida,110,20,'red', '26px Times')

    if(jogar){
       ee.des_estrada()
       es.des_estrada()
       ec1.des_estrada()
       ec2.des_estrada()
       ec3.des_estrada()
       ec4.des_estrada()
       ec5.des_estrada()
       ec6.des_estrada()
       ec7.des_estrada()
       c2.des_img()
       c3.des_img()
       boneco.des_img()
    }else{
       ee.des_estrada()
       es.des_estrada()
       t5.des_text('Game Over', 170, 340,'red','40px Times')
    }

}
function atualiza(){
    if(jogar){
        motor.play()
        ec1.mov_estrada()
        ec2.mov_estrada()
        ec3.mov_estrada()
        ec4.mov_estrada()
        ec5.mov_estrada()
        ec6.mov_estrada()
        ec7.mov_estrada()
        c2.atualiza_carro2()
        c3.atualiza_carro2()
        boneco.atualiza_carro()
        // carro.anim('carro_01_1')
        pontos()
        colisao()
        game_over()
    }
   
}

function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()

