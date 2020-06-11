//clean this mess
function UserName(){
  var getnamPromt = document.getElementById("NamePromt");
  var getNext = document.getElementById("next");
  getnamPromt.style.display = "block";
  getNext.style.display = "none";
}
function GetName(){
  var name = document.getElementById("firstName").value;
  var getNamePrompt = document.getElementById("NamePromt");
  var getResponse = document.getElementById("response");
  var getNext2 = document.getElementById("next2");

  getNamePrompt.style.display = "none";
  getResponse.innerHTML = "Welcome " + name + ", to the mission";
  getNext2.style.display = "block";
}
function showStart(){
  document.getElementById("startlevel1").style.display = "block";
}

var n = 0;
var txtl = 'We need to find how deep this conspiracy runs, look at the problems below. Each correct answer will give you a letter of the government entity behind the conspiracy. At the end, enter the 3 letters into the prompt for your next mission. ';
var speedl = 30;
/*LIMITS QUESTIONS*/
function startLimPage() {

  document.getElementById("limTextSubtext").style.display = "none";
  document.getElementById("limitstartButton").style.display = "block";
  document.getElementById("startlevel1").style.display = "none";

  if (n < txtl.length) {
    document.getElementById("disHere").innerHTML += txtl.charAt(n);
    n++;
    setTimeout(startLimPage, speedl)
  }
}


/*QUESTION 1 CHECK */
function limq1check(){
var getFeedback1 = document.getElementById("feedback1");

  if (document.getElementById("wrong1").checked){
    getFeedback1.innerHTML = "Correct, option 3 is not required. The first letter is C";
    document.getElementById("beginq2").style.display = "block";
  }else if (document.getElementById("right1").checked){
    getFeedback1.innerHTML = "Incorrect, the limit must be the same from both sides to prove continuity.Try again";
  }else if (document.getElementById("right2").checked){
    getFeedback1.innerHTML = "Incorrect, the function must exist to prove continuity. Try again";
  }
}

/*QUESTION 2*/
var q2i = 0;
var q2txt = 'I hope you know your unit circle! Find the limit of 15sinx, as x approaches -π / 2 divided by 30?'
var q2speed = 40;

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
  var getFeedback2 = document.getElementById("feedback2");
  if(document.getElementById("q2r1").checked){
    getFeedback2.innerHTML = "Correct again! You did remember your unit circle. The next letter is I ";
      document.getElementById("beginq3").style.display = "block";
  }else if (document.getElementById("q2w1").checked) {
    getFeedback2.innerHTML = "Wrong, don’t forget to divide by 30!";
  }else if (document.getElementById("q2w2").checked){
    getFeedback2.innerHTML = "Wrong, you need to divide by positive 30";
  }
}

/*QUESTION 3*/
var q3i = 0;
var q3txt = 'As the function of 5x - 100/x approaches infinity, what does the limit equal'
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
var getFeedback3 = document.getElementById("feedback3");

  if(document.getElementById("q3r1").checked){
    getFeedback3.innerHTML = "Correct, the limit will equal 5. The last letter is A";
  }else if (document.getElementById("q3w1").checked) {
    getFeedback3.innerHTML = "incorrect, there is a numerical answer";
  }else if (document.getElementById("q3w2").checked){
    getFeedback3.innerHTML = "incorrect, use L'Hopital's rule";
  }
  document.getElementById("Limq3").style.display = "none";
  document.getElementById("q3stem").style.display = "none";
document.getElementById("verifybutton").style.display = "block";
}

function getCIAname() {
  document.getElementById("CIAcheck").style.display = "block";
  var moveDerivative = document.getElementById("goToDerivative");
  var ans = document.getElementById("govName").value ;
  var getansmessage = document.getElementById("AnsMessage");

 if(ans === "CIA"){
   getansmessage.innerHTML = "Good job! Now that we know the CIA is the one behind this, we can find out what they’re hiding. Get ready for derivatives.  ";
   moveDerivative.style.display = "block";
 }else if(ans != "cia"){
   getansmessage.innerHTML = "The correct phrase was not entered, please try again";
 }
}

//DERIVATIVE PAGE STUFF
//beginning text and show all QUESTIONS
function derivQuestions() {
  document.getElementById("allquestions").style.display = "block";
  document.getElementById("derivQuestionsId").style.display = "none";
  document.getElementById("disHere").style.display = "none";
}
//CHECK SEQUENCE
function CheckSequence() {
  var inputSequence = document.getElementById("sequence").value;
  var getsequenceFeedback = document.getElementById("sequenceFeedback");

  if(inputSequence === "ACAC"){
    getsequenceFeedback.innerHTML = "you got it right!, press the next button for the secret message";
    document.getElementById("decodeMessage").style.display = "block";
    //MAKE ELSE IF, FOR ANY OF THE QUESTIONS WRONG, NO HINTS
  }else if(inputSequence != "ACAC"){
    getsequenceFeedback.innerHTML = "incorrect, try again"
  }
}

function checkDerivQs() {
  document.getElementById("optionalderivCheck").style.display = "block";

  var getFeedbackderiv = document.getElementById("derivFeedback");
  var getFeedbackderiv2 = document.getElementById("derivFeedback2");
  var getFeedbackderiv3 = document.getElementById("derivFeedback3");
  var getFeedbackderiv4 = document.getElementById("derivFeedback4");

  var getdright1 = document.getElementById("dright1");
  var getdright2 = document.getElementById("dright2");
  var getdright3 = document.getElementById("dright3");
  var getdright4 = document.getElementById("dright4");

//checks q1
  if(getdright1.checked){
    getFeedbackderiv.innerHTML = "Number 1 is correct!"
  }else if(getdright1.value != getdright1.checked ){
    getFeedbackderiv.innerHTML = "Number 1 is incorrect. Try again"
  }
//checks q2
if(getdright2.checked){
  getFeedbackderiv2.innerHTML = "Number 2 is correct!"
}else if(getdright2.value != getdright2.checked ){
  getFeedbackderiv2.innerHTML = "Number 2 is incorrect. Try again"
}
//checked q3
if(getdright3.checked){
  getFeedbackderiv3.innerHTML = "Number 3 is correct!"
}else if(getdright3.value != getdright3.checked ){
  getFeedbackderiv3.innerHTML = "Number 3 is incorrect. Try again"
}
//checked q4
if(getdright4.checked){
  getFeedbackderiv4.innerHTML = "Number 4 is correct!"
}else if(getdright4.value != getdright4.checked ){
  getFeedbackderiv4.innerHTML = "Number 4 is incorrect. Try again"
}

}
//DECODE ABOVE MESSAGE
var q4i = 0;
var q4txt = 'Non-human intelligent life. It has been hidden from you for decades, generations even. Recently released. They are above you, below you, around you, next to you. Watch out for the ones with white hair. '
var q4speed = 30;

function seqMessage(){
 document.getElementById("sequence").style.display = "none";
 document.getElementById("subSequence").style.display = "none";
 document.getElementById("sequenceLabel").style.display = "none";
 document.getElementById("sequenceFeedback").style.display = "none";
// TYPEWRITER

if (q4i < q4txt.length) {
  document.getElementById("decodeMessage").innerHTML += q4txt.charAt(q4i);
  q4i++;
  setTimeout(seqMessage, q4speed)
}
 }

 //INTEGRAL PAGE STUFF
 function IntQuestions() {
   document.getElementById("allquestions").style.display = "block";
   document.getElementById("IntQuestionsId").style.display = "none";
   document.getElementById("disHere").style.display = "none";
 }

//check the intergral Qs
 function checkIntQs() {
   document.getElementById("optionalIntCheck").style.display = "block";

   var getFeedbackInt = document.getElementById("IntFeedback");
   var getFeedbackInt2 = document.getElementById("IntFeedback2");
   var getFeedbackInt3 = document.getElementById("IntFeedback3");
   var getFeedbackInt4 = document.getElementById("IntFeedback4");

   var getIright1 = document.getElementById("dright1");
   var getIright2 = document.getElementById("dright2");
   var getIright3 = document.getElementById("dright3");
   var getIright4 = document.getElementById("dright4");

 //checks q1
   if(getIright1.checked){
     getFeedbackInt.innerHTML = "Number 1 is correct!" + " In 1983, the CIA filed a request demanding the US Air Force deliver the remains of non-human (alien) life, to the CIA immediately"
   }else if(getIright1.value != getIright1.checked ){
     getFeedbackInt.innerHTML = "Number 1 is incorrect. Try again"
   }
 //checks q2
 if(getIright2.checked){
   getFeedbackInt2.innerHTML = "Number 2 is correct!" + " Some time before the 1950’s, German scientists sighted multiple “flying disks”, that were in no way mistakable for any aircraft known to man at the time. At the time it was believed to belong to the Russians, but they too were amiss about its origins "
 }else if(getIright2.value != getIright2.checked ){
   getFeedbackInt2.innerHTML = "Number 2 is incorrect. Try again"
 }
 //checked q3
 if(getIright3.checked){
   getFeedbackInt3.innerHTML = "Number 3 is correct!" + " In the Soviet Union in 1952, a comet changed from dark red, to green and then to white before crashing into an unpopulated and unknown location. The comet, its remains, or the mark of the comet landing were never recovered. "
 }else if(getIright3.value != getIright3.checked ){
   getFeedbackInt3.innerHTML = "Number 3 is incorrect. Try again"
 }
 //checked q4
 if(getIright4.checked){
   getFeedbackInt4.innerHTML = "Number 4 is correct!" + " Not really a secret, but the CIA periodically releases previously classified documents from past endeavours into its public archive. These documents vary from the outrageous experiments to thwarted attacks. "
   document.getElementById("endGame").style.display = "block";
 }else if(getIright4.value != getIright4.checked ){
   getFeedbackInt4.innerHTML = "Number 4 is incorrect. Try again"
 }


 }
