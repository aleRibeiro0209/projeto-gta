/*

Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

        Passo 1 - Pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele.

        Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado

        Passo 3 - Pegar o clique do usuário no JS

        Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo apareça

Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

        Passo 1 - Verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/

const btnPlataforma = document.querySelector(".btn-plataforma");
const conteudoPlataformas = document.querySelector(".btn-plataforma .plataformas");

btnPlataforma.addEventListener("click", () => {

    // const btnAberto = conteudoPlataformas.classList.contains("ativo");
   
    conteudoPlataformas.classList.toggle("ativo");
/*
    if(btnAberto){
        conteudoPlataformas.classList.remove("ativo");
        console.log(btnAberto);
    }else{
        conteudoPlataformas.classList.add("ativo");
        console.log(btnAberto);
    }
*/
})