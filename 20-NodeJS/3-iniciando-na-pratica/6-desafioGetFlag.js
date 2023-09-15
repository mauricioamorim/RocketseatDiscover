
/* 
  Crie 2 arquivos JavaScript

  O primeiro, irá exportar uma função chamada getFlag()
  que receberá um argumento do tipo string.
  Essa função deverá buscar dentro do array process.argv a flag desejada, que é a string
  e retornar o valor da flag

  O segundo, irá importar a função e passar a flag desejada.

  Iremos rodar no terminal o segundo arquivo passando as flags --nome e --sobrenome
  para que seja impresso no terminal a saudação e o nome da pessoa.
*/
const getFlagValue = require('./6-desafioExportGetFlag')

console.log(`Seu nome é ${getFlagValue("--nome")} e seu sobrenome é ${getFlagValue("--sobrenome")}`)