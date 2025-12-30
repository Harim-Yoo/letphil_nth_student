class SnackBoxees {
   snacks : string[] = [];
   capacity: number = 5;

   addSnack(snack:string) {
    if (this.snacks.length > this.capacity) {
        return;
    }
    this.snacks.push(snack);
    console.log("성공!");
   }
}

const mySnacksss = new SnackBoxees();
mySnacksss.addSnack("초코바");
console.log(mySnacksss.snacks);