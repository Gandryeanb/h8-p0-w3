var name = "Hello World!" ;

var store = "";
for (var a = name.length; a > 0; a--) {
  store = store + name[a-1];
}
console.log(store);
