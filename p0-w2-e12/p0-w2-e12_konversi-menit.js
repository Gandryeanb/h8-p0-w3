function konversiMenit(menit) {
if (menit <= 59) {
  if (menit <= 9) {
    return "0:0"+menit;
  } else {
    return "0:"+menit;
  }
} else if (menit % 60 === 0 ) {
    return menit/60+":00";
  } else if (menit % 60 !== 0 && menit % 60 <= 9) {
    return ((menit-(menit % 60)) / 60)+":0"+menit % 60;
  } else {
    return ((menit-(menit % 60)) / 60)+":"+menit % 60;
  }

}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

