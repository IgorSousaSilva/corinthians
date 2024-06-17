const imagens = document.querySelectorAll('.slide')
const setaAvancar = document.getElementById('seta-avancar')
const setaVoltar = document.getElementById('seta-voltar')

let imagemAtual = 0



function fazerPergunta() {
  let nomeUsuario = prompt('Digite seu nome')
  let pergunta = confirm(`Olá, seja bem vindo(a) ${nomeUsuario}, se você for corinthiano click em ok, se não clique em cancelar`)

  if(pergunta){
    
  }else{
    alert('Que pena! parece que esse site não é para você')
    
  }
} 

fazerPergunta()






setaAvancar.addEventListener("click", ()=> {
  if(imagemAtual === imagens.length -1) {
    return
  }

  esconderImagemAberta()
  imagemAtual++  
  imagens[imagemAtual].classList.add('mostrar')
  mostrarOuEsconderSetas() 

})

setaVoltar.addEventListener("click", ()=> {
    if(imagemAtual === 0) {
      return
    }
  
    esconderImagemAberta()
    imagemAtual--  
    imagens[imagemAtual].classList.add('mostrar')
    mostrarOuEsconderSetas() 
  
  })


function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar")

  imagemAberta.classList.remove('mostrar')
}

function mostrarOuEsconderSetas() {
    const naoEhPrimeiraImagem = imagemAtual !== 0
    if(naoEhPrimeiraImagem){
        setaVoltar.classList.remove('opacidade')
    }else{
        setaVoltar.classList.add('opacidade')

    } 

    const chegouNaMinhaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1

    if(chegouNaMinhaUltimaImagem){
        setaAvancar.classList.add('opacidade')
    }else {
        setaAvancar.classList.remove('opacidade')
    }
}