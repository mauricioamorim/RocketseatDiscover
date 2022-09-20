## Escopo

Escopo, essencialmente, significa onde essas variáveis poderão ser utilizadas.


## Hoisting

Hoisting é um mecanismo do JavaScript que faz com que as declarações de variáveis e de funções sejam movidas para o topo de seu escopo antes da execução do código.


## Variáveis

Imagine que o computador é um armario e toda vez que vc quiser quardar algo nele, 
vc terá que inciar uma variável

* São nomes simbólicos para receber algum valor
* Atalhos de código
* Identidicadores 
* 3 palavras reservadas para criar uma variável
    * var 
        Declarações com var tem escopo global ou escopo de função/local.
        pode ser atualizado
        pode redeclarar

        O escopo é global quando uma variável var é declarada fora de uma função. Isso significa que qualquer variável que seja declarada com var fora de um bloco de função pode ser utilizada na janela inteira.

        var tem escopo de função quando é declarado dentro de uma função. Isso significa que ele está disponível e pode ser acessado somente de dentro daquela função.

        Há um ponto fraco no uso de var. Usarei o exemplo abaixo para explicar:
        ```js
            var greeter = "hey hi";
            var times = 4;

            if (times > 3) {
                var greeter = "say Hello instead"; 
            }
            
            console.log(greeter) // o resultado será "say Hello instead"
        ```
        Assim, já que times > 3 retorna true, greeter é redefinido como "say Hello instead". Embora isso não seja um problema se você quer, conscientemente, que greeter possa ser redefinido, passará a ser um problema quando você não perceber que uma variável greeter já havia sido definida antes.

        Se você já usou greeter em outras partes do seu código, pode se surpreender com o resultado que vai obter. Isso provavelmente causará vários bugs no seu código. É por isso que let e const são necessários.


    * let 
        escopo de bloco, somente pode ser acessada dentro do bloco onde foi declarada.
        pode ser atualizado
        não pode redeclarar
    
    
    * cosnt 
        escopo de bloco, somente pode ser acessada dentro do bloco onde foi declarada.
        não pode atualizar
        não pode redeclarar