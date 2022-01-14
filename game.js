function myfunc() {
  console.log("mmmmmmmmmmmmmmmmmmmmmm");
  var b1, b2, b3;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
}
function reset() {
  location.reload();
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
}
function full() {
  document.getElementById("b1").value = "a";
  document.getElementById("b2").value = "p";
  document.getElementById("b3").value = "a";
}
function changeBackgroundA() {
  document.getElementById("a").style.backgroundColor = "#0FA0C5";
}
function changeBackgroundP() {
  document.getElementById("p").style.backgroundColor = "#0FA0C5";
}
var selct, audioRight, audioWrong;
function selectA() {
  selct = document.getElementById("a").innerText;
}
function selectP() {
  selct = document.getElementById("p").innerText;
}
function myfunc_3() {
  if (selct == "a") {
    document.getElementById("a").style.backgroundColor = "#fff";
    document.getElementById("image").style.display = "block";
    audioRight = new Audio("audio/right.ogg");
    audioRight.play();
    document.getElementById("b1").value = "a";
  } else if (selct == "p") {
    document.getElementById("p").style.backgroundColor = "#fff";
    document.getElementById("imag").style.display = "block";
    document.getElementById("b1").value = "p";
    audioWrong = new Audio("audio/wrong.ogg");
    audioWrong.play();
  }
}
function myfunc_4() {
  if (selct == "p") {
    document.getElementById("p").style.backgroundColor = "#fff";
    document.getElementById("image").style.display = "block";
    audioRight = new Audio("audio/right.ogg");
    audioRight.play();
    document.getElementById("b2").value = "p";
  } else if (selct == "a") {
    document.getElementById("a").style.backgroundColor = "#fff";
    document.getElementById("imag").style.display = "block";
    document.getElementById("b2").value = "a";
    audioWrong = new Audio("audio/wrong.ogg");
    audioWrong.play();
  }
}
function myfunc_5() {
  if (selct == "a") {
    document.getElementById("a").style.backgroundColor = "#fff";
    document.getElementById("image").style.display = "block";
    audioRight = new Audio("audio/right.ogg");
    audioRight.play();
    document.getElementById("b3").value = "a";
  } else if (selct == "p") {
    document.getElementById("p").style.backgroundColor = "#fff";
    document.getElementById("imag").style.display = "block";
    document.getElementById("b3").value = "p";
    audioWrong = new Audio("audio/wrong.ogg");
    audioWrong.play();
  }
}
