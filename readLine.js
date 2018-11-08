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
  return new Promise( (resolve) => {
    rl.question(questionSentence, answer => {
        console.log('answer', answer);
        resolve(answer);
    });
  });
}

const Ask = () => {
  return new Promise(async resolve => {
    let results = [];
    for (let i=0; i < questions.length; i++) {
      const result = await AskQuestion(questions[i]);
      results.push(result);
    }
    rl.close();
    resolve(results);
  });
}

Ask()
  .then(responses => {
    console.log(`Hola ${responses[0]} ${responses[1]}, tu edad es la siguiente: ${responses[2]}`);
  })