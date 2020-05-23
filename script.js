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
  console.log("clicked");
}
