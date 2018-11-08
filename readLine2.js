const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  'Cual es tu primer nombre? ',
  'Cual es tu primer apellido? ',
  'Cual es tu edad? '
];

const AskQuestion = (questionSentence) => {
   rl.question(questionSentence, answer => {
        console.log('answer', answer);
        return answer;
    });
}

let Ask = () => {
    let results = [];
    for (let i=0; i < questions.length; i++) {
      const result = AskQuestion(questions[i]);
      results.push(result);
    }
    rl.close();
    console.log(results);
  
}

//Ask();
  

const result = AskQuestion(questions[0]);
//console.log('result',result);
//rl.close();