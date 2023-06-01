
const form = document.querySelector('form');

const delayInput = form.querySelector('input[name="delay"]');
const stepInput = form.querySelector('input[name="step"]');
const amountInput = form.querySelector('input[name="amount"]');
console.log(delayInput.value);
const submitButton = form.querySelector('button');

function createPromise(position, delay) {
 

  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
   
    // Fulfill
  } else {
    // Reject
  }
}



createPromise( 1, delayInput.value)
.then(({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});

  


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    createPromise(delayInput.value, stepInput.value);
  });