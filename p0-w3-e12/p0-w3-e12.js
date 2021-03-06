function tentukanDeretGeometri(arr) {
  /* -membuat variable yang akan menampung penambahan dari
   *  setiap jarak perbedaan pembagian dari array arr 
   *  index ke 0 dan 1
   * -membuat varibale yg akan menampung value untuk
   *  membandingkan array geometri
   */
  var numRange = arr[1] / arr[0];
  var numCompare = [arr[0]];
  /* -membuat loop untuk membuat angka geometri yang akan
   *  digunakan sebagai pembanding, jumlah loop bedasarkan panjang
   *  arr.length,
   * -menambahkan hasil perhitungan loop ke variable numCompare
   */
  for (var init = 0; init < arr.length - 1; init++) {
    numCompare.push(numCompare[init] * numRange)
  }
  /* -membuat kondisi if untuk mengcompare hasil hitungan angka 
   *  geometri dengan value arr, apabila sama lalu display true
   *  apabila berbeda maka display false
   * -dikarenakan array tidak bisa di compare secara keseluruhan
   *  value array, maka yang akan dijadikan patokan untuk comparasi
   *  adalah nilai terakhir variable geometri dan nilai terakhir
   *  dari arr
   */
  if (arr[arr.length - 1] === numCompare[numCompare.length - 1]) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
