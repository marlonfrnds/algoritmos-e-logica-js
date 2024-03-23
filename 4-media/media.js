/*
Solicitar o nome do aluno e as 3 notas
do bimestre e calcular a média daquele aluno.
A média pra passar deve ser maior ou igual a 6.

Se o aluno passou no bimestre, dar os parabéns.
Se o aluno não passou no bimestre, motivar o aluno
a dar o seu melhor na prova de recuperação.


Em ambos os casos, mostre uma mensagem com o nome 
do aluno e a nota
*/

let student = prompt('Qual o nome do aluno(a)?')
let noteOne = prompt('Qual a nota da primeira prova?')
let noteTwo = prompt('Qual a nota da segunda prova?')
let noteThree = prompt('Qual a nota da terceira prova?')

let media = (Number(noteOne) + Number(noteTwo) + Number(noteThree)) / 3

let result = media >= 6

media = media.toFixed(2)

if (result) {
    alert(`Parabéns ${student}, você passou! média: ${media}`)
} else {
    alert(`${student}, estude mais para prova de recuperação!, média: ${ media }`)
}
