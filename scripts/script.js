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
/*QUESTION 1 */
function limq1check(){
  if (document.getElementById("wrong1").checked){
    document.getElementById("feedback1").innerHTML = "Correct, option 3 is not required. The first letter is C";
  }else if (document.getElementById("right1").checked){
    document.getElementById("feedback1").innerHTML = "Incorrect, the limit must be the same from both sides to prove continuity.Try again";
  }else if (document.getElementById("right2").checked){
    document.getElementById("feedback1").innerHTML = "Incorrect, the function must exist to prove continuity. Try again"
  }
}
/*QUESTION 2*/
