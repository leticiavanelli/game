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
       des.drawImage(img,this.x, this.y,this.w,this.h)
         let img = new Image()
        img.src = this.a
    }
}

class Boneco extends Obj{
    dir = 0
    pts = 0
    vida = 5
    frame = 1
    tempo = 0

    des_boneco(){

    }

    atualiza_boneco(){

    }

    point(){

    }
    
    colid(){

    }
}

class Veneno extends Obj{
    atualiza_inim(){

    }

    recomeca(){

    }
}

class Campo extends Obj{
    des_campo(){

    }
    recomeca(){
        
    }
}
class Fruta extends Obj{
    atualiza_fruta(){

    }
    recomeca(){

    }

}
class Text{
    des_text(){

    }
}