function pasanganTerbesar(num) {
  /* menjadikan variabel num menjadi String agar bisa di akses
   * menggunakan module length
   */
  var numStr = String(num);
  // membuat variabel array untuk penampung sorting
  var store = [""];
  /* -membuat loop untuk menampung pecahan numStr ke penampung 
   *  pembanding
   * -inisiasi dari numStr.length agar loop mengulang
   *  sesuai dari panjang array variabel - 1 (length array - 1 =  
   *  length index)
   */
  for (var initLoop = 0; initLoop < numStr.length; initLoop++) {
    // memasukan value numStr ke variabel array penampung
    store[initLoop] = numStr.slice(initLoop,(initLoop + 2));
  }
  //sortir value array store dari kecil ke besar
  store.sort();
  //membuat variabel yang menampung value store versi Interger
  var print = parseInt(store)
  /* membuat if untuk menyaring value trakhir array memiliki
   * value 1 digit angka
   */
  if (parseInt(store[store.length - 1]) < 10) {
      return parseInt(store[store.length - 2]);
  } else {
  //mendisplay array paling belakang
  return parseInt(store[store.length - 1]);
  }
}
