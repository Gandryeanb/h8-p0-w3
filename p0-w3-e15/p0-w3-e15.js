
function groupAnimals(animals) {
  /* -membuat variable penampung array Multidimensi
   * -membuat variable patokan untuk menambahkan array di dalam
   *  array
   */
  var store = [[]];
  var ruang = 0;
  /* -mensortir inputan array agar bisa di proses sesuai 
   *  alphabetik
   */
  animals.sort();
  /* -memasukan value pertama agar dapat di proses dalam
   *  loop (menjadi patokan huruf untuk value yg akan dimasukan)
   */
  store[0].push(animals[0])
  /* -membuat proses loop sesuai dengan length animals
   *  agar seluruh value array animals dpt di proses
   */
  for (var init = 1; init < animals.length; init++) {
    /* -membuat kondisi if untuk memilah apakah huruf pertama
     *  value animals sama dengan huruf pertama di array store
     * -apabila sama, value animals akan di memasukan
     * -apabila tidak, value animals akan di masukan ke ruang array
     *  yang baru
     */
    if (animals[init][0] === store[ruang][0][0]) {
      store[ruang].push(animals[init])
    } else {
      ruang++;
      store[ruang] = [animals[init]];
    }
  }
  return store;
}

