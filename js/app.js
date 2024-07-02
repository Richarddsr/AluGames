let aluguel = 0;
let devolver = 0

function ExibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${aluguel}`)
}

function alterarStatus(id){
    let alugado = document.getElementById(`game-${id}`)
        let imagem = alugado.querySelector(".dashboard__item__img");
        let click = alugado.querySelector(".dashboard__item__button")
        let name = alugado.querySelector(".dashboard__item__name")

            if (imagem.classList.contains("dashboard__item__img--rented")) {
                if (confirm(`Você tem certeza que deseja devolver o jogo ${name.textContent}?`))
                imagem.classList.remove("dashboard__item__img--rented")
                click.textContent = "Alugar"
                aluguel --;
            } else {
                imagem.classList.add("dashboard__item__img--rented")
                click.textContent = "Devolver"
                alert (`itens alugados: ${name.textContent}`)
                aluguel ++;
            }

            if (click.classList.contains("dashboard__item__button--return")) {
                click.classList.remove("dashboard__item__button--return")
            } else {
                click.classList.add("dashboard__item__button--return")
            }
                ExibirJogosAlugados();

        }

