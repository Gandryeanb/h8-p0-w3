var i = 0;

console.log("LOOPING PERTAMA");

while (i <= 20) {
  console.log(i+" - I love coding");
  i++ ; i++ ;
}

console.log("LOOPING KEDUA");
i--; i--;
while (i >= 0)  {
  console.log(i+" - I will become fullstack developer");
  i--; i--;
}

console.log("LOOPING PERTAMA");

for(var j = 0; j <= 20; j++)
{
  console.log(j+" - I love coding");
}

console.log("LOOPING KEDUA");

for(var j = 20; j >= 0; j--)
{
  console.log(j+" - I will become fullstack developer");
}

var i = 0;

while (i <= 100) {
  if(i % 2 === 0) {
  console.log("GENAP");
  } 
  else {
  console.log("GANJIL");
  }
  i++;
}

var i = 0;

while (i <= 100) {

  if(i % 3 === 0) {
  console.log("3 KELIPATAN 3");
  } 
  else {
  console.log("");
  }
  i+=2;
}

var i = 0;

while (i <= 100) {

  if(i % 6 === 0) {
  console.log("6 KELIPATAN 6");
  } 
  else {
  console.log("");
  }
  i+=5;
}

var i = 0;

while (i <= 100) {

  if(i % 10 === 0) {
  console.log("10 KELIPATAN 10");
  } 
  else {
  console.log("");
  }
  i+=9;
}
