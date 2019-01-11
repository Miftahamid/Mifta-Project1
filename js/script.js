//startting point of the index  and
// Id's are a globle veriable so you don't have to declare it
// you can cheack window.#q1
let questionCount = 0;
let answerCount = 0;

//let checkQuestion = answerCount + questionCount;
//document.querySelector(".start").addEventListener("click", displayQuestions);
// document.querySelector(".start").addEventListener("click", displayQuestions);
// buuton with move
document.querySelector('.next').addEventListener("click", displayQuestions);

// Add the index of the
  function displayQuestions() {
    console.log("I was clicked question"); 
    questionCount++
    // show question
    if (questionCount == 1) {
      q1.style.display = "block";
    } else if (questionCount === 2) {
      q2.style.display = "block";
      q1.style.display = "none";
      display();
    } else if (questionCount === 3) {
      q3.style.display = "block";
      q2.style.display = "none";
      display();
    } else if (questionCount === 4) {
      q4.style.display = "block";
      q3.style.display = "none";
      display();
    } else if (questionCount === 5) {
      q5.style.display = "block";
      q4.style.display = "none";
      display()
    }
    document.querySelector(".next").removeEventListener("click",displayQuestions)
    document.querySelector(".show").addEventListener("click", displayAnswers);
  }

  function displayAnswers() {
    // console.log("I was clicked answer");
    answerCount++;
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
 
    document.querySelector(".show").removeEventListener("click",displayAnswers)
    document.querySelector(".next").addEventListener("click", displayQuestions);
  }


    function display(){
    var display = prompt("Did you get the question right? yes/no")
    if(display == 'yes'){
    alert('Hey now you know something useful.')
    }else{
      alert('You need little bit more practice.')
    }
  }
 