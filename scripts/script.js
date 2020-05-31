function UserName(){
  document.getElementById("NamePromt").style.display = "block";
document.getElementById("next").style.display = "none";
}
function GetName(){
  var name = document.getElementById("firstName").value;
  document.getElementById("NamePromt").style.display = "none";
  document.getElementById("response").innerHTML = "Welcome " + name + ", to the mission";
  document.getElementById("next2").style.display = "block";
}
function showStart(){
  document.getElementById("startlevel1").style.display = "block";
}
/*LIMITS QUESTIONS*/
/*QUESTION 1 CHECK */
function limq1check(){
  if (document.getElementById("wrong1").checked){
    document.getElementById("feedback1").innerHTML = "Correct, option 3 is not required. The first letter is C";
    document.getElementById("beginq2").style.display = "block";
  }else if (document.getElementById("right1").checked){
    document.getElementById("feedback1").innerHTML = "Incorrect, the limit must be the same from both sides to prove continuity.Try again";
  }else if (document.getElementById("right2").checked){
    document.getElementById("feedback1").innerHTML = "Incorrect, the function must exist to prove continuity. Try again";
  }
}

/*QUESTION 2*/
var q2i = 0;
var q2txt = 'I hope you know your unit circle! Find the limit of 15sinx, as x approaches -pi / 2 divided by 30?'
var q2speed = 30;

function beginlimq2(){
  document.getElementById("LimQ1").style.display = "none";
  document.getElementById("q1Stem").style.display = "none";
  document.getElementById("Limq2").style.display = "block";
// TYPEWRITER

if (q2i < q2txt.length) {
  document.getElementById("q2stem").innerHTML += q2txt.charAt(q2i);
  q2i++;
  setTimeout(beginlimq2, q2speed)
}
 }
/*CHECK*/
function limq2check(){
  if(document.getElementById("q2r1").checked){
    document.getElementById("feedback2").innerHTML = "Correct again! You did remember your unit circle. The next letter is I ";
      document.getElementById("beginq3").style.display = "block";
  }else if (document.getElementById("q2w1").checked) {
    document.getElementById("feedback2").innerHTML = "Wrong, don’t forget to divide by 30!";
  }else if (document.getElementById("q2w2").checked){
    document.getElementById("feedback2").innerHTML = "Wrong, you need to divide by positive 30";
  }
}

/*QUESTION 3*/
var q3i = 0;
var q3txt = 'Pretend there is a limit question here and move on. thanks'
var q3speed = 30;

function beginlimq3(){
  document.getElementById("Limq2").style.display = "none";
  document.getElementById("q2stem").style.display = "none";
  document.getElementById("Limq3").style.display = "block";
// TYPEWRITER

if (q3i < q3txt.length) {
  document.getElementById("q3stem").innerHTML += q3txt.charAt(q3i);
  q3i++;
  setTimeout(beginlimq3, q3speed)
}
 }
//CHECK
function limq3check(){
  if(document.getElementById("q3r1").checked){
    document.getElementById("feedback3").innerHTML = "Correct message here";
  }else if (document.getElementById("q3w1").checked) {
    document.getElementById("feedback3").innerHTML = "Wrong message here";
  }else if (document.getElementById("q3w2").checked){
    document.getElementById("feedback3").innerHTML = "Wrong message here";
  }
  //document.getElementById("beginq3").style.display = "block";
}
