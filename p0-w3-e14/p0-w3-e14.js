function mengelompokkanAngka(arr) {
  /* -membuat variable untuk menampung value 
   * -membuat loop berdasarkan length dari arr untuk menyortir
   *  value pada arr dan di push ke variable store yg telah
   *  dibuat
   * -mendisplay nilai array
   */
  var store = [[], [], []];
  for (var init = 0; init < arr.length; init++) {
    if (arr[init] % 3 === 0) {
      store[2].push(arr[init]);
    } else if (arr[init] % 2 === 0) {
      store[0].push(arr[init]);
    } else {
      store[1].push(arr[init]);
    }
  }
  return store;
}
