import './styles/style.css';
import "@babel/polyfill";
import Cat from './cat';

const photoContainer = document.querySelector('.photo-container');
const api_key = 'fd4bb618-9046-4cc9-81be-85dd54033925';
const nextButton = document.querySelector('.next');
const automaticButton = document.querySelector('#automatic');
const stopButton = document.querySelector('#stop');
let automatic;

const cat = new Cat(photoContainer, api_key);

nextButton.addEventListener('click', () => {
  cat.setPhoto();
})

automaticButton.addEventListener('click', () => {
  cat.setPhoto();

  if (automaticButton.id === 'automatic') {
    // transform the button into stop button
    startAutomatic(automaticButton);

    // set automatic next
    automatic = setInterval(() => {
      cat.setPhoto();
    }, 6000);
  }
});

stopButton.addEventListener('click', () => {
  // clear automatic next
  clearInterval(automatic);

  // transform stop button to automatic button
  stopAutomatic(stopButton);
});

const startAutomatic = (btn) => {
  btn.textContent = 'Stop';
  btn.classList.remove('btn-primary');
  btn.classList.add('btn-danger');
  btn.id = 'stop';

  // show/hide button
  toggleButtons()
};

const stopAutomatic = (btn) => {
  automaticButton.textContent = 'Automatic Next';
  automaticButton.classList.remove('btn-danger');
  automaticButton.classList.add('btn-primary');
  automaticButton.id = 'automatic';

  // show/hide button
  toggleButtons()
}

const toggleButtons = () => {
  automaticButton.classList.toggle('d-none');
  stopButton.classList.toggle('d-none');
};