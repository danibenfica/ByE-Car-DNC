# Bye Car - DNC

O Bye Car é um projeto de estudo de algumas funcionalidades do JavaScript que consiste em um site, onde o usuário pode ter uma moto por assinatura. O objetivo do projeto é fornecer aos usuários uma maneira fácil e prática de assinar uma moto e experimentar a mobilidade urbana de forma sustentável.


### Página Inicial

A página inicial é composta por uma imagem de uma mulher em uma moto na primeira coluna e na segunda, por um carrossel de imagens que mostra duas motos diferentes. As imagens são apresentadas em um layout limpo e moderno, fácil de ser utilizado pelo usuário.

### Carrossel de Imagens

O carrossel de imagens é uma funcionalidade chave do Bye Car - DNC. Ele permite que os usuários visualizem as duas motos disponíveis para assinatura. Ao clicar no botão "Saiba mais", um modal é exibido com informações sobre a moto selecionada e um botão para o usuário adquirir o serviço. O carrossel de imagens é controlado por botões de seta para a esquerda e para a direita e por um intervalo de tempo configurado para avançar automaticamente as imagens a cada 7 segundos.


Este trecho de código é responsável pela funcionalidade de rolagem do carrossel de motos, que é acionado quando o usuário clica nas setas laterais. Ele armazena em variáveis os elementos HTML que representam as setas laterais (".staLeft") e as motos (".motorbike"). 

A variável "allMotorbikes" guarda a quantidade total de motos no carrossel. A variável "motoStart" representa o índice da moto inicial que será exibida. 

Ao clicar em uma das setas laterais, a função de clique é acionada e verifica se a seta clicada foi a esquerda ou a direita, atualizando o índice da moto inicial. Caso a moto inicial chegue ao final do carrossel, ela volta para o começo, e vice-versa. 

Em seguida, a classe CSS ".motorbikeSelected" é adicionada à moto atual para que ela seja destacada no carrossel, e a função "scrollIntoView()" é chamada para que a moto selecionada seja centralizada na tela. 

Por fim, o código remove a classe ".motorbikeSelected" de todas as motos no carrossel e adiciona-a apenas à moto atual.

```javascript
const stLeft = document.querySelectorAll('.staLeft');
const motorbikes = document.querySelectorAll('.motorbike');
const allMotorbikes = motorbikes.length;

let motoStart = 0;
let intervalID;
let mouseTimer;

stLeft.forEach(stLeft => {
  stLeft.addEventListener('click', () => {
    clearInterval(intervalID);
    clearTimeout(mouseTimer);
    const left = stLeft.classList.contains("staLeft");
    if (left) {
      motoStart -= 1;
    } else {
      motoStart += 1;
    }
    if (motoStart >= allMotorbikes) {
      motoStart = 0;
    }
    if (motoStart < 0) {
      motoStart = allMotorbikes - 1;
    }
    motorbikes.forEach(motorbike => motorbike.classList.remove('motorbikeSelected'));
    motorbikes[motoStart].scrollIntoView({
      inline: "center",
      behavior: "smooth"
    });
    motorbikes[motoStart].classList.add("motorbikeSelected");
  });
});`
```
### Modal

O modal é exibido quando o usuário clica no botão "Saiba mais" do carrossel de imagens. Ele exibe informações detalhadas sobre a moto selecionada e um botão para o usuário adquirir o serviço. O modal é controlado pelo JavaScript e independente da moto trocar automaticamente ou manualmente, a moto exibida é a que é apresentada no carrossel no momento.


Esta função é responsável por abrir o modal quando o usuário clica no botão "Saiba mais"
do carrossel de imagens. Ela exibe informações detalhadas sobre a moto selecionada e um botão
para o usuário adquirir o serviço. O modal é controlado pelo JavaScript e independente da moto
trocar automaticamente ou manualmente, a moto exibida é a que é apresentada no carrossel no momento.

```javascript function openModal() {
  clearInterval(intervalID);
  clearTimeout(mouseTimer);
  const modal = document.getElementById('windowModal');
  const infoandImg = document.getElementById('infoandImg');
  infoandImg.innerHTML = '';

  const selectedMotorbike = document.querySelector('.motorbikeSelected');
  if (selectedMotorbike && selectedMotorbike.classList.contains('motorbike1')) {
	//restante do código
  } else if (selectedMotorbike && selectedMotorbike.classList.contains('motorbike2')) {
 	//restante do código
  }

  // Event listener para fechar o modal quando o usuário clica no botão X ou fora do modal
  modal.addEventListener('click', (e) => {
    if (e.target.id == 'buttonX' || e.target.id == 'windowModal') {
      modal.classList.remove('open');
      startCarousel();
    }
  });
}`
```

### Tecnologias Usadas

O Bye Car - DNC foi construído usando as seguintes tecnologias:

- HTML
- CSS
- JavaScript

## Conclusão

O Bye Car - DNC é um projeto interessante de explorar algumas funcionalidades um pouco mais avançadas combinadas entre si, de forma simples e prática, tornando o aprendizado de JS divertido e fácil de compreender.