class Animal {
    name
    weight
    speed

    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    getWeight(){
       return  this.getWeight
    }
    getName(){
        return this.getName
    }
    getSpeed(){
        return this.getSpeed
    }
}
class Mouse extends Animal {
    isLive;

    constructor(name, weight, speed, isLive) {
        super(name, weight, speed);
        this.isLive = isLive;
    }
    getIsLive(){
        return this.isLive;
    }
    setIsLive(mouse){
        this.isLive= mouse
    }
}
class cat extends Animal{

    constructor(name, weight, speed) {
        super(name, weight, speed);
    }
    catchMoue(mouse){
        if (super.getSpeed()> mouse.getSpeed()){
            console.log('Bat dc chuot')
            mouse.setIsLive((false))
        } else {
            console.log('ko bat dc chuot')
        }
    }
    eatMouse(mouse){
        console.log('ngoan')
        super.setWeight(super.getWeight()+mouse.getWeight())
        console.log('an cho lam vao'+ super.getWeight)
    }
}