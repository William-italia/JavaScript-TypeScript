window.onload = () => {

}

// window.addEventListener(
//   'load',
//   () => console.log('Page Loaded')
// );

// window.addEventListener(
//   'DOMContentLoaded',
//   () => console.log('DOM loaded')
// );

window.addEventListener('resize', () => {
  document.querySelector('h1').innerText = `Resized to ${window.innerHeight} x ${window.innerWidth}`;
});

window.addEventListener('scroll', () => {
  document.querySelector('h1').innerText = (`Scrolled: ${window.scrollX} x ${window.scrollY}`);
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY >= 500) {
    document.body.style.backgroundColor = 'rgb(140, 202, 221)';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }

});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach(p => {
    p.style.color = 'blue';
  });
})

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach(p => {
    p.style.color = 'black';
  });
})