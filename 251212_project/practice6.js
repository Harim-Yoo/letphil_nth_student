var fruit = "apple";

function checkScope() {
  console.log("A:", fruit); // Line 1 (Hoisting/Scope Question)

  if (true) {
    let fruit = "banana";
    var juice = "orange";
    console.log("B:", fruit); // Line 2 (Block Scope Question)
  }

  console.log("C:", fruit); // Line 3 (Scope Leak Question)
  console.log("D:", juice); // Line 4 (var Scope Question)
}

checkScope();
console.log("E:", juice); // Line 5 (Global Scope Question)
