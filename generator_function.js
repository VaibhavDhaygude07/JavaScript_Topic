function* quiz() {
  yield "Question 1: What is JavaScript?";
  yield "Question 2: What is a closure?";
  yield "Question 3: What is a generator?";
}
//  use yield to pause and return values one-by-one.

const myQuiz = quiz();

console.log(myQuiz.next().value); 
console.log(myQuiz.next().value); 
console.log(myQuiz.next().value); 


