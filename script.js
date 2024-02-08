const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um estilo de design",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Para verificar o tipo de dado de uma variável",
            "Para criar loops",
            "Para concatenar strings",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de dado",
            "Um objeto",
            "Um bloco de código reutilizável",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Nenhuma, ambos são iguais",
            "Um compara o valor e o tipo, o outro apenas o valor",
            "Um compara o valor, o outro o tipo",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um editor de texto",
            "Uma biblioteca popular",
            "A representação da estrutura de uma página HTML",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma variável em JavaScript?",
        respostas: [
            "Um tipo de dado",
            "Um elemento da página web",
            "Um espaço de armazenamento nomeado para valores",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
        respostas: [
            "Para multiplicar números",
            "Para adicionar elementos HTML",
            "Para associar um evento a um elemento HTML",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma expressão regular em JavaScript?",
        respostas: [
            "Uma forma de expressar sentimentos",
            "Um tipo de operador matemático",
            "Um objeto utilizado para corresponder padrões em strings",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o significado de 'NaN' em JavaScript?",
        respostas: [
            "Nada, é um erro de digitação",
            "Não é numérico",
            "Nova Arquitetura de Navegação",
        ],
        correta: 1
    },
    {
        pergunta: "O que é 'this' em JavaScript?",
        respostas: [
            "Um pronome pessoal",
            "Uma palavra-chave que se refere ao objeto atual",
            "Uma função de callback",
        ],
        correta: 1
    }
];

const quiz = document.querySelector("#quiz")
//Pegando o Quiz
const template = document.querySelector("template")
// Pegando o template
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostratTotal = document.querySelector("#acertos span")
mostratTotal.textContent = corretas.size + " de " + totalDePerguntas


for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    // Criando o quizItem e copiando todos os filhos que tem no template
    quizItem.querySelector("h3").textContent = item.pergunta
    // Colocando a pergunta na tag h3, que por sinal foi clonada de template

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true)
        // Criando o dt e copiando todos os filhos que tem no quizItem
        dt.querySelector("span").textContent = resposta
        // Atribuindo ao conteúdo a resposta
        dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        // Atribuindo ao atributo "name" a "pergunta + qual a pergunta do momento"
        // A pergunta do momento está acessando o array perguntas e progurando o índice que contém o item selecionado no for acima
        dt.querySelector("input").value = item.respostas.indexOf(resposta)
        // Vai colocar o valor correto na resposta acessando o item.respostas e acessando o índice que contém a resposta do momento 

        dt.querySelector("input").onchange = (event) => {
            const correta = event.target.value == item.correta

            corretas.delete(item)

            if (correta) {
                corretas.add(item)
            }

            mostratTotal.textContent = corretas.size + " de " + totalDePerguntas
        }

        quizItem.querySelector("dl").appendChild(dt)
        // Passando para o quizItem o que foi feito no dt
    }

    quizItem.querySelector("dl dt").remove()
    // Removendo o clone para retirar "Resposta A" do HTML

    quiz.appendChild(quizItem)
    // Finalmente atribuindo tudo que foi feito a div #quiz
}
