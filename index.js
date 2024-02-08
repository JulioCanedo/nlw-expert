const perguntas = [
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Imprimir algo no console do navegador",
        "Criar um novo log de erro",
        "Iniciar uma sessão de depuração",
      ],
      correta: 0,
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "const myVar: 10;",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena uma coleção de elementos ordenados",
        "Um operador lógico",
        "Uma função de repetição",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "O '===' verifica igualdade estrita, incluindo o tipo de dado",
        "O '===' verifica igualdade, mas não considera o tipo de dado",
        "Não há diferença, ambos fazem a mesma coisa",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model - uma interface de programação para documentos HTML e XML",
        "Um tipo de loop em JavaScript",
        "Um método para declarar funções",
      ],
      correta: 0,
    },
    {
      pergunta: "Como se faz um comentário de linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "' Este é um comentário",
        "/* Este é um comentário */",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o evento 'onclick' em JavaScript?",
      respostas: [
        "Um evento acionado quando um elemento é clicado",
        "Um método para clicar em um elemento",
        "Um tipo de dado em JavaScript",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de dado de uma expressão",
        "Verifica se duas variáveis são do mesmo tipo",
        "Concatena dois strings",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "JavaScript Object Notation - um formato de dados",
        "Um método para criar objetos",
        "Uma biblioteca JavaScript",
      ],
      correta: 0,
    },
    {
      pergunta: "Como se usa o operador ternário em JavaScript?",
      respostas: [
        "expressao ? valorSeVerdadeiro : valorSeFalso",
        "if (expressao) { valorSeVerdadeiro } else { valorSeFalso }",
        "expressao ? { valorSeVerdadeiro } : { valorSeFalso }",
      ],
      correta: 0,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a perguntas
    quiz.appendChild(quizItem)
  }