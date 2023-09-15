const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
]

const ask = ( index = 0 ) => {
  //Apresentando as perguntas com process.stdout.write
  process.stdout.write( "\n" + questions[index] + " > ")
}

ask()

const answers = [];

//on é o evento de fica ouvindo quando entra dados
//o primeiro parametro significa q quando tiver dados ele vai ou vir uma função
//o segundo parametro é a função chamada quando o evento on "dados" é disparado(após apertar a tecla enter)
process.stdin.on("data", data => {
  answers.push(data.toString().trim() )
  if(answers.length < questions.length) {
    ask(answers.length)
  }else{
    process.exit();//encerra o App
  }
})

//quando encerrar o app mostra as perguntas e respostas
process.on("exit", () => {
  console.log(`

  
  Olá, seu questionário foi finalizado com sucesso! 

  Confira tudo agora:

  ${questions[0]}
  ${answers[0]}

  ${questions[1]}
  ${answers[1]}

  ${questions[2]}
  ${answers[2]}

  ${questions[3]}
  ${answers[3]}
`);
});

