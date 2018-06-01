function angkaPalindrome(num) { 
  for ( var i = 0 ; i <= 10 ; i++) {
    var numStr = String(num);  
    if (numStr[0] === numStr[numStr.length - 1]) {
      return num;
    }
    num++  
  }
}
