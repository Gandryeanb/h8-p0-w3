var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]


function dataHandling (i) {
  var store = "";
  for (var x = 0; x <= input.length-1; x++) {
      store = store + 
      "Nomor ID     : " + input[x][0] + "\n" +
      "Nama Lengkap : " + input[x][1] + "\n" +
      "TTL          : " + input[x][2] + ", " + input[x][3] + "\n" +
      "Hoby         : " + input[x][4] + "\n\n"; 
  }
  return console.log(store);
}

dataHandling(0);
