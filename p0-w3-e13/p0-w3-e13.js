function targetTerdekat(arr) {
  /* -membuat variable untuk menampung value urutan "o" dan "x"
   * -membuat loop yang akan menentukan posisi "o" dan "x"
   *  dan lalu di push ke variable x dan o
   */
  var o = [];
  var x = [];
  for (var init = 0; init < arr.length; init++) {
    /* -membuat kondisi if untuk menhindari perulangan push
     *  ke variabel penampung "x" dan "o"
     */
    if ( o[o.length - 1] === arr.indexOf("o",init) || arr.indexOf("o",init) === -1) {
    
    } else {
      o.push(arr.indexOf("o",init));
    }
    if ( x[x.length - 1] === arr.indexOf("x",init) || arr.indexOf("x",init) === -1) {

    } else {
      x.push(arr.indexOf("x",init));  
    }    
  }
  /* membuat kondisi apabila string "o" dan "x" 
   * tidak ditemukan di array arr dan menjalankan return 
   */
  if (x.length === 0) {
    return 0;
  }
  /* -membuat variable penampung untuk menghitung jarak
   *  antara o dan x dalam proses looping berdasarkan
   *  tingkat kepanjangan x dan meng-push kalkulasi ke
   *  variable penampung menhitung jarak(store)
   */
  var store = [];
  for (var init = 0; init < x.length; init++) {
    if (o[o.length - 1] > x[init]) {
      store.push(o[o.length - 1] - x[init]);
    } else if (o[o.length - 1] < x[init]) {
      store.push(x[init] - o[o.length - 1]);
    } 
  }
  /* menyusun value penampung jarak (store) dari kecil
   * kebesar, lalu me-return variable store dengan index pertama
   * (terkecil) yaitu 0
   */
  store.sort();
  return store[0];
}

