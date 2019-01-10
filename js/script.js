  //startting point of the index  and 
  let questionCount = 0
  // show question 1
  const q1 = document.querySelector('#q1')
  const q2 = document.querySelector('#q2')
  const q3 = document.querySelector('#q3')
  const q4 = document.querySelector('#q4')
  const q5 = document.querySelector('#q5')

  // q1.innerHTML = questions[questionCount]
  // the array of questions and index of the question 
  // questions
  // const questions = ['What nation boncned from Orgnaiztion to orgnization?','What continent have to fewest flowerig plant?',
  // 'What element begin in the letter "k"?','How many days does a cat usally stay in the heat?',
  // 'How many U.S states border the Gulf of Mexico?']

  // //Answers
  // const answer = ['Cuba', 'Antartica','Kypton','five','five']

  // Add the index of the 
  function display() {
    // console.log("I was clicked")
    questionCount++
    // show question 
  if(questionCount == 1) {
    q1.style.display = 'block'
    } else if(questionCount === 2){
      q2.style.display = 'block'
    } else if(questionCount === 3){
      q3.style.display = 'block'
    }else if(questionCount === 4){
      q4.style.display = 'block'
    }else if(questionCount === 5){
      q5.style.display = 'block'
    }
  }
 //console.log(questionCount)
  // if the button is click then add one to questionCount 
  document.querySelector(".start").addEventListener("click", display);
  
  // when the game starts
  document.getElementsByClassName('start')

  
  console.log(q1)
  

  