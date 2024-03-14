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

class Estrada extends Obj{
    des_estrada(){

    }
}
class Fruta extends Obj{
    atualiza_fruta(){

    }
    recomeca(){

    }

}
class Text{
    esc_text(text,x,y,cor,font){
            des.fillStyle = cor
            des.lineWidht = '5'
            des.font = font
            des.fillText(text,x,y)
        }
    }
