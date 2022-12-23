const el = document.getElementById('box');

setTimeout(() => {
  el.style.visibility = 'visible';

  //  if you used `display` to hide element
  // el.style.display = 'block';
}, 40000); //  delay in milliseconds
