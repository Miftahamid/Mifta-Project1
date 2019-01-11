//startting point of the index  and
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

let questionCount = 0;
let answerCount = 0;
//let checkQuestion = answerCount + questionCount;

// Add the index of the
function displayQuestions() {
  console.log("I was clicked question"); 
  questionCount++
  // if(answerCount === questionCount){
  //   //answerCount++
  // }else{
  //   alert("You have to reset the page?")
  // }
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
    console.log("I was clicked answer");
    answerCount++;
    // if(questionCount ==  answerCount){
    //   answerCount++;
    // }else{
    //   alert("You have to reset the page?")
    // }
    
    // show answer
    if (answerCount == 1) { // the 1
      a1.style.display = "block";
    } else if (answerCount === 2) { // the 2 
      a2.style.display = "block";
      a1.style.display = "none";
      } else if (answerCount === 3) { // the 3
      a3.style.display = "block";
      a2.style.display = "none";
      } else if (answerCount === 4) { // the 4 
      a4.style.display = "block";
      a3.style.display = "none";
        } else if (answerCount === 5) { // the 5
      a5.style.display = "block";
      a4.style.display = "none";
    }
  }

//  function checkQuestion(){
//   console.log("I was clicked from checkQuestion")
//   console.log(questionCount)
//   console.log(answerCount)
//   answerCount++;
//   if(questionCount === answerCount){
//     questionCount++;
//   }else{
//     alert("You have to reset the page?")
//   }
// }
//console.log(questionCount)
// if the button is click then add one to questionCount

document.querySelector(".start").addEventListener("keypress", displayQuestions);
document.querySelector(".show").addEventListener("keypress", displayAnswers);
// document.querySelector(".next").addEventListener("click", checkQuestion);
// when the game starts
//document.getElementsByClassName(".start");

// console.log(q1)

// function myFunction() {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "button");
//   x.setAttribute("value", "Click me");
//   document.body.appendChild(x);
// }
