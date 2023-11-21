const showOnPx = window.innerHeight;
const voltarAoTopoButton = document.getElementById('voltarAoTopo');

window.addEventListener('scroll', () => {
 if (window.pageYOffset > showOnPx) {
   voltarAoTopoButton.classList.remove('hidden');
 } else {
   voltarAoTopoButton.classList.add('hidden');
 }
});

voltarAoTopoButton.addEventListener('click', () => {
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
 });
});
