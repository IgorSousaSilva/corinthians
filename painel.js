const imagens = document.querySelectorAll('.slide')
const setaAvancar = document.getElementById('seta-avancar')
const setaVoltar = document.getElementById('seta-voltar')

let imagemAtual = 0

setaAvancar.addEventListener('click', () => {
   if(imagemAtual === imagens.length - 1) {
      return
   }

   esconderImagemAberta()
   imagemAtual++
   imagens[imagemAtual].classList.add('mostrar')
   mostrarOuEsconderSetas() 
})

setaVoltar.addEventListener('click', () => {
   if(imagemAtual === 0){
       return
   }
   esconderImagemAberta()

  imagemAtual-- 

  imagens[imagemAtual].classList.add('mostrar')

  mostrarOuEsconderSetas()
})

function esconderImagemAberta() {
   const esconderImagem = document.querySelector('.mostrar')

   esconderImagem.classList.remove('mostrar')
}

function mostrarOuEsconderSetas() {
   const naoEhPrimeiraImagem = imagemAtual !== 0
   
   if(naoEhPrimeiraImagem) {
      setaVoltar.classList.remove('opacidade')
   }else{
      setaVoltar.classList.add('opacidade')
   }
   
   const chegouNaMinhaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1



   if(chegouNaMinhaUltimaImagem) {
      setaAvancar.classList.add('opacidade')
   }else {
      setaAvancar.classList.remove('opacidade')
   }
}

