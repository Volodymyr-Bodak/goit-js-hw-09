import Notiflix from 'notiflix';

const form = document.querySelector('form');
const delayInput = form.querySelector('input[name="delay"]');
const stepInput = form.querySelector('input[name="step"]');
const amountInput = form.querySelector('input[name="amount"]');
const submitButton = form.querySelector('button');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const amount = Number(amountInput.value);
  let delay = Number(delayInput.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i +1, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += Number(stepInput.value);
  }

  form.reset();
});
