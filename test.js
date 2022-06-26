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
var numA = 10;
var numB = 20;
if (numA !== 20) {
  console.log("値が等しくない");
  console.log("true");
} else {
  console.log("値が等しい");
  console.log("false");
}

var numA = 10;
var numB = 20;
if (numA !== 10) {
  console.log("値が等しくない");
  console.log("true");
} else {
  console.log("値が等しい");
  console.log("false");
}