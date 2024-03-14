class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h,this.a)

    }
    des_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img,this.x, this.y,this.w,this.h)
        //imagens do boneco
        //teste
    }
}

class Boneco extends Obj{
    dir = 0
    pts = 0
    vida = 5
    frame = 1
    tempo = 0

    atualiza_boneco(){

    }

    point(){

    }
    
    colid(){

    }
}

class Veneno extends Obj{
    atualiza_inim(){
        //programando atualiza inimigo 
        
    }

    recomeca(){

    }
}

class Campo extends Obj{
    des_campo(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }
    recomeca(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }
}
class Fruta extends Obj{
    atualiza_fruta(){
        this.y += 2
        if(this.y >= 780){
            this.recomeca()
        }
    }
    recomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) //quando a fruta sair da tela
    }

}
class Text{
    des_text(){

    }
}