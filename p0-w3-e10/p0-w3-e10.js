function perkalianUnik(arr) {
  /* -membuat variable untuk menampung hasil value
   *  perkalian (variable = 1, karena var ini akan di gunakan
   *  untuk command #1)
   * -membuat variable array untuk mendisplay nilai
   *  akhir
   */
  var arrTotal = 1;
  var arrDisplay = [];
  /* -membuat loop yg akan mnghitung hasil perkalian
   *  dari semua array
   * -menampung hasil perkalian ke variable penampung
   */
  for (var init = 0 ; init < arr.length; init++) {
    arrTotal = arrTotal * arr[init]; //#1
  }
  /* -membuat loop yang berfungsi untuk membagi hasil value
   *  dengan satuan array variable arr.
   * -memasukan hasil dari perkalian kedalam variable arrDisplay
   *  yang akan di gunakan untuk menjadi hasil return
   */
  for (var init = 0 ; init < arr.length; init++) {
    arrDisplay.push(arrTotal / arr[init]);
  }
  return arrDisplay;
}

