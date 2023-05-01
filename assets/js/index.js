const stLeft = document.querySelectorAll('.staLeft');
const motorbikes = document.querySelectorAll('.motorbike');
const allMotorbikes = motorbikes.length;

let motoStart = 0;

stLeft.forEach(stLeft => {
  stLeft.addEventListener('click', () => {
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

    const text = motorbikes[motoStart].getAttribute("data-text");
    const pElement = document.querySelector("#imagens p");
    pElement.textContent = text;
  });
});

function openModal() {
  const modal = document.getElementById('windowModal');
  const infoandImg = document.getElementById('infoandImg');
  infoandImg.innerHTML = '';
  
  const selectedMotorbike = document.querySelector('.motorbikeSelected');
  if (selectedMotorbike && selectedMotorbike.classList.contains('motorbike1')) {
    const selectedMotorbikeImgSrc = selectedMotorbike.getAttribute('src');
    const selectedMotorbikeImg = document.createElement('img');
    selectedMotorbikeImg.setAttribute('src', selectedMotorbikeImgSrc);
    selectedMotorbikeImg.setAttribute('alt', 'Selected motorbike');
    selectedMotorbikeImg.id = 'modalImg1'
    infoandImg.appendChild(selectedMotorbikeImg);
    const title1 = document.createElement('p');
    const info1 = document.createElement('p')
    title1.id = 'modalText1';
    title1.textContent = 'Scooter Elétrica Voltz EV1';
    info1.id = 'modalInfo1';
    info1.textContent = 'A EV1 é a primeira moto da Voltz e chegou ao mercado brasileiro para revolucionar a mobilidade urbana. Mais que um meio de transporte, a scooter elétrica é uma experiência de futuro.'
    infoandImg.appendChild(title1);
    title1.appendChild(info1);
    modal.classList.add('open');
  } else if (selectedMotorbike && selectedMotorbike.classList.contains('motorbike2')) {
    const selectedMotorbikeImgSrc = selectedMotorbike.getAttribute('src');
    const selectedMotorbikeImg = document.createElement('img');
    selectedMotorbikeImg.setAttribute('src', selectedMotorbikeImgSrc);
    selectedMotorbikeImg.setAttribute('alt', 'Selected motorbike');
    selectedMotorbikeImg.id = 'modalImg2'
    infoandImg.appendChild(selectedMotorbikeImg);
    const info2 = document.createElement('p')
    info2.id = 'modalInfo2';
    info2.textContent = 'O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!'
    const title2 = document.createElement('p');
    title2.id = 'modalText2';
    title2.textContent = 'Honda CB 500X';
    infoandImg.appendChild(title2);
    title2.appendChild(info2);
    modal.classList.add('open');
  } else {
    modal.classList.remove('open');
  }

  modal.addEventListener('click', (e) => {
    if (e.target.id == 'buttonX' || e.target.id == 'windowModal') {
     modal.classList.remove('open');
    }
  });
}
