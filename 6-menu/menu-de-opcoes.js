/*
    Faça um programa que tenha um menu e apresente a seguinte mensagem:
    "Olá usuário! Digite o número da opção desejada"
        
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
   
    O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

    1. Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    2. Caso o usuário digite 2, ele poderá ver os itens cadastrados
    3. Se não houver nenhum item cadastrado, mostrar a mensagem: 
    "Não existem itens cadastrados"
    4. Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

let option
let items = []

while (option != 3) {

    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `));

    switch (option) {
        case 1:
            let item = prompt('Digite o nome do item')
            items.push(item)
            break;

        case 2:
            if (items.length == 0) {
                alert('Não existem itens cadastrados')
            } else {
                alert(items)
            }
            break;

        case 3:
            alert('Obrigado, até mais')
            break;

        default:
            alert('Opção inválida. Tente novamente')
            break;
    }
    console.log(option, items);
}