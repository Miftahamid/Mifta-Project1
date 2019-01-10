//startting point of the index  and
let questionCount = 0;
let answerCount = 0;
// Id's are a globle veriable so you don't have to declare it
// you can cheack window.#q1

// show questions
// const q1 = document.querySelector('#q1','#q2','#q3','#q4','#q5')
// const q2 = document.querySelector('#q2')
// const q3 = document.querySelector('#q3')
// const q4 = document.querySelector('#q4')
// const q5 = document.querySelector('#q5')
// show answers
// const a1 = document.querySelector('#a1','#a2','#a3','#a4','#a5')
// const a2 = document.querySelector('#a2')
// const a3 = document.querySelector('#a3')
// const a4 = document.querySelector('#a4')
// const a5 = document.querySelector('#a5')
// console.log(window.a1, a2, a3, a4, a5)

// q1.innerHTML = questions[questionCount]
// the array of questions and index of the question

//  I didn't now how to use this question and answers insted of the

// questions
// const questions = ['What nation boncned from Orgnaiztion to orgnization?','What continent have to fewest flowerig plant?',
// 'What element begin in the letter "k"?','How many days does a cat usally stay in the heat?',
// 'How many U.S states border the Gulf of Mexico?']

// //Answers
// const answer = ['Cuba', 'Antartica','Kypton','five','five']

// Add the index of the
function displayQuestions() {
  console.log("I was clicked");
  questionCount++;
  // show question
  if (questionCount == 1) {
    q1.style.display = "block";
    //q1.style.display.backgroundColor= 'white'
  } else if (questionCount === 2) {
    //change the color when the style is change from none to block
    // alert if the input is yes then alert go to the nest question if no then you need more practice
    q2.style.display = "block";
    q1.style.display = "none";
  } else if (questionCount === 3) {
    q3.style.display = "block";
    q2.style.display = "none";
  } else if (questionCount === 4) {
    q4.style.display = "block";
    q3.style.display = "none";
  } else if (questionCount === 5) {
    q5.style.display = "block";
    q4.style.display = "none";
  }
}

function displayAnswers() {
  console.log("I was clicked");
  answerCount++;
  // show question
  if (answerCount == 1) {
    a1.style.display = "block";
  } else if (answerCount === 2) {
    a2.style.display = "block";
    a1.style.display = "none";
    var checkAnwer = prompt("Did you get it right? yes/no");
    if (checkAnwer == "yes") {
      alert("You can go to the nest question?");
    } else {
      alert("You need more practice.");
    }
  } else if (answerCount === 3) {
    a3.style.display = "block";
    a2.style.display = "none";
    var checkAnwer = prompt("Did you get it right? yes/no");
    if (checkAnwer == "yes") {
      alert("You can go to the nest question?");
    } else {
      alert("You need more practice.");
    }
  } else if (answerCount === 4) {
    a4.style.display = "block";
    a3.style.display = "none";
    var checkAnwer = prompt("Did you get it right? yes/no");
    if (checkAnwer == "yes") {
      alert("You can go to the nest question?");
    } else {
      alert("You need more practice.");
    }
  } else if (answerCount === 5) {
    a5.style.display = "block";
    a4.style.display = "none";
    var checkAnwer = prompt("Did you get it right? yes/no");
    if (checkAnwer == "yes") {
      alert("You can go to the nest question?");
    } else {
      alert("You need more practice.");
    }
  }
}
//console.log(questionCount)
// if the button is click then add one to questionCount

document.querySelector(".start").addEventListener("click", displayQuestions);
document.querySelector(".show").addEventListener("click", displayAnswers);

// when the game starts
//document.getElementsByClassName(".start");

// console.log(q1)

// function myFunction() {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "button");
//   x.setAttribute("value", "Click me");
//   document.body.appendChild(x);
// }
