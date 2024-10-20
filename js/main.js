const dailyButton = document.querySelector('#daily');
const weeklyButton = document.querySelector('#weekly');
const monthlyButton = document.querySelector('#monthly');

const dailyHours = document.querySelectorAll('.daily');
const weeklyHours = document.querySelectorAll('.weekly');
const monthlyHours = document.querySelectorAll('.monthly');

window.addEventListener('load', () => {
  dailyButton.classList.add('active');
})

dailyButton.addEventListener('click', () => {
  dailyButton.classList.add('active');
  weeklyButton.classList.remove('active');
  monthlyButton.classList.remove('active');

  dailyHours.forEach((element) => {
    element.classList.add('show');
  });
  weeklyHours.forEach((element) => {
    element.classList.remove('show');
    element.classList.add('hidden');
  });
  monthlyHours.forEach((element) => {
    element.classList.remove('show');
    element.classList.add('hidden');
  });
});

weeklyButton.addEventListener('click', () => {
  dailyButton.classList.remove('active');
  weeklyButton.classList.add('active');
  monthlyButton.classList.remove('active');

  dailyHours.forEach((element) => {
    element.classList.remove('show');
    element.classList.add('hidden');
  });
  weeklyHours.forEach((element) => {
    element.classList.add('show');
  });
  monthlyHours.forEach((element) => {
    element.classList.remove('show');
    element.classList.add('hidden');
  });
});

monthlyButton.addEventListener('click', () => {
  dailyButton.classList.remove('active');
  weeklyButton.classList.remove('active');
  monthlyButton.classList.add('active');

  dailyHours.forEach((element) => {
    element.classList.remove('show');
    element.classList.add('hidden');
  });
  weeklyHours.forEach((element) => {
    element.classList.remove('show');
    element.classList.add('hidden');
  });
  monthlyHours.forEach((element) => {
    element.classList.add('show');
  });
});