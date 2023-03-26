console.log('hello sucker');

const btn = document.querySelector('#hamburger-btn');
const mobileMenu = document.querySelector('#menu');
const list = mobileMenu.classList;

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('hidden');
}

// dumb version

// function navToggle() {
//   btn.classList.toggle('open');
//   if (list.contains('hidden')) {
//     list.remove('hidden');
//     list.add('flex');
//   } else if (list.contains('flex')) {
//     list.remove('flex');
//     list.add('hidden');
//   }
// }
