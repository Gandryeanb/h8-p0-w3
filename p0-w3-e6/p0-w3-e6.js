function angkaPalindrome(num) { 
  for ( var i = 0 ; i <= 10 ; i++) {
    num++
    var numStr = String(num);  
    if (numStr[0] === numStr[numStr.length - 1]) {
      return num;
    }
  }
}
