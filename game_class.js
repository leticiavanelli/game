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

    atual_boneco(){
        this.x += this.dir
        if(this.x <=2){
            this.x = 2
        }else if(this.x >= 416){
            this.x = 416
            }
        }
        point(Obj){
            if((Obj.y>=680)&&(Obj.y<=690)){
                return true
            }else[
                false
            ]
        }
        
        colid(Obj){
            if((this.x <Obj.x + Obj.w)&&
            (this.x + this.w > Obj.x)&&
            (this.y < Obj.y + Obj.h)&&
            (this.y + this.h > Obj.y)){
                return true
                }
            }
    }

   

class Veneno extends Obj{
    atual_veneno(){
        this.y += 2
        if(this.y >= 780){
            this.recomeca()
        }
    }

    recomeca(){
        this.y = -100
        this.x = Math.floor (Math.random() * ((416 - 2 + 1) + 2)) //quando o carro sair da tela
    }
}
class Campo extends Obj{
    des_campo(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }
}
class Fruta extends Obj{
    atual_fruta(){

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
