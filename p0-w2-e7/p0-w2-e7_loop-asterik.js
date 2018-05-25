for (var a = 5; a > 0; a--) {
  console.log("*");
}

for (var a = 5; a > 0; a--) {
  var b = "";
  for (var c = 5; c > 0; c--)  {
    b = b +"*";
  }
  console.log(b)
}

console.log("");

var c = 1;
for (var a = 5; a > 0; a--) {
  var b = "";
  var d = 0;
  for (var d = c; d > 0; d--) {
    b = b + "*";
  }
  c = c + 1;
  console.log(b);
}

/*console.log("");
var c = "";
for (var a = 0; a < 5; a++) {
  console.log(c = c+"*");
}*/

