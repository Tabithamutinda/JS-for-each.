const kiosk={
    firstFruit:'Apple',
    
    get getFruit(){
        return this.firstFruit;
    },
    set changeFruit(newFruit){
        this.firstFruit=newFruit;
    },
};
console.log(kiosk.firstFruit);
kiosk.newFruit='Mango';
console.log(kiosk.newFruit);