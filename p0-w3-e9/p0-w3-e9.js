
function cariMean(arr) {
  /* -membuat variabel nilai value arr
   * -membuat loop untuk menjumlahkan semua nilai arr
   */
  var arrTotal = 0;
  for (var init = 0; init < arr.length; init++) {
    arrTotal = arrTotal + arr[init];
  }
  //  menemukan mean dari total aray
  var arrMean = arrTotal / arr.length;

  console.log(arrMean)
  /* -mengubah value Mean dri Int ke String
   * -lalu membuat variabel yang berfungsi sebagai
   *  patokan untuk menemukan nilai desimal dari value 
   *  String Mean
   */
  var arrMeanStr = String(arrMean);
  var arrComa = arrMeanStr.indexOf(".");
  /* -membuat kondisi dimana jika value String mean
   *  bukan desimal, dan jika value String mean desimal
   * -jika bukan desimal, atau desimal yang memiliki nilai
   *  pecahan dibawah lima, maka program mendisplay 
   *  nilai arr Int Mean
   * -jika bilangan desimal yang memiliki nilai pecahan
   *  diatas lima, maka program menambahkan value arrmean
   *  dengan angka 1, lalu mendisplay arrMean
   */
  if (arrComa === -1 || arrMeanStr[arrComa + 1] < 5) {
    return parseInt(arrMean);
  } else {
    return parseInt(arrMean + 1);
  }
}

