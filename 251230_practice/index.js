class SnackBox {
    
    snacks = [];
    capacity = 5;

    addSnack(snack) {
        if (this.snacks.length > this.snacks.capacity) {
            return;
        }
        this.snacks.push(snack);
        console.log("Success!");
    }
}

const mySnack = new SnackBox();
mySnack.addSnack("Pringles");
console.log(mySnack.snacks);
