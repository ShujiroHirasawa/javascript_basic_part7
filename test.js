//1
var numA = 20;
var numB = 40;
if (numA == 20 && numB == 40) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 20 && numB == 40);
} else {
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 20 && numB == 40);
}

var numA = 200;
var numB = 40;
if (numA == 20 && numB == 40) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 20 && numB == 40);
} else {
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 20 && numB == 40);
}


//2
var numA = 20;
var numB = 40;
if (numA == 20 || numB == 40) {
  console.log("ORの条件と一致した処理");
  console.log(numA == 20 || numB == 40);
} else {
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 20 || numB == 40);
}

var numA = 200;
var numB = 400;
if (numA == 20 || numB == 40) {
  console.log("ORの条件と一致した処理");
  console.log(numA == 20 || numB == 40);
} else {
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 20 || numB == 40);
}


//3
var numA = 20;
var numB = 0;
if (!numB) {
  console.log("NOTの条件と一致した処理");
  console.log(numA);
} else {
  console.log("NOTの条件と一致しなかった処理");
  console.log(numB);
}

var numA = 20;
var numB = 0;
if (!numA) {
  console.log("NOTの条件と一致した処理");
  console.log(numA)
} else {
  console.log("NOTの条件と一致しなかった処理");
  console.log(numB);
}