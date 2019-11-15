import './styles/style.css';
import "@babel/polyfill";
import Cat from './cat';

const photoContainer = document.querySelector('.photo-container');
const api_key = 'fd4bb618-9046-4cc9-81be-85dd54033925';
const nextButton = document.querySelector('.next');
const automaticBtutton = document.querySelector('#automatic');
const stopButton = document.querySelector('#stop');
let automatic;

const cat = new Cat(photoContainer, api_key);

nextButton.addEventListener('click', () => {
  cat.setPhoto();
})

automaticBtutton.addEventListener('click', () => {
  automaticBtutton.textContent = 'Stop';
  automaticBtutton.classList.remove('btn-primary');
  automaticBtutton.classList.add('btn-danger');

  cat.setPhoto();

  if (automaticBtutton.id === 'automatic') {
    automatic = setInterval(() => {
      cat.setPhoto();
      automaticBtutton.id = 'stop';
    }, 5000);;
  }
});

document.querySelector('.react-button').addEventListener('click', e => {
  let button = e.target;
  if (button.id === 'stop') {
    clearInterval(automatic);

    automaticBtutton.textContent = 'Automatic Next';
    automaticBtutton.classList.remove('btn-danger');
    automaticBtutton.classList.add('btn-primary');
    automaticBtutton.id = 'automatic';

  }
})