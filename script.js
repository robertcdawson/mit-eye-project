// Declare variable to hold all eyeballs
const eyeballs = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    eyeballs[i].style.left = x;
    eyeballs[i].style.top = y;
    eyeballs[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
