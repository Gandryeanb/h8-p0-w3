function palindrome (kata) {
  var x = Math.floor(kata.length / 2);
  var store1 = "";
  var store2 = "";
  for (var a = 0; a < x; a++) {
    store1 = store1 + kata[a];
  }
  for (var b = kata.length; b > kata.length - x; b--) {
    store2 = store2 + kata[b-1];
  }
  if (store1 === store2) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
