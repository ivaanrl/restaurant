import { initialPageLoad } from './intialPageLoad'
import { fillMenu } from './Menu';
import { fillHome } from './Home';
import { fillContact } from './contact';

initialPageLoad();
fillHome();
document.getElementById('navBarItem1').addEventListener('click', a => {
  document.getElementById('mainContainer').innerHTML = '';
  fillHome();
  const navBar2 = document.getElementById('navBarItem2');
  const navBar3 = document.getElementById('navBarItem3');

  if (navBar2.classList.contains('navbar-item-active')) {
    navBar2.classList.remove('navbar-item-active');
  }
  if (navBar3.classList.contains('navbar-item-active')) {
    navBar3.classList.remove('navbar-item-active');
  }
});

document.getElementById('navBarItem2').addEventListener('click', e => {
  document.getElementById('mainContainer').innerHTML = '';
  fillMenu();
  const navBar1 = document.getElementById('navBarItem1');
  const navBar3 = document.getElementById('navBarItem3');
  if (navBar1.classList.contains('navbar-item-active')) {
    navBar1.classList.remove('navbar-item-active');
  }
  if (navBar3.classList.contains('navbar-item-active')) {
    navBar3.classList.remove('navbar-item-active');
  }
})

document.getElementById('navBarItem3').addEventListener('click', e => {
  document.getElementById('mainContainer').innerHTML = '';
  fillContact();
  const navBar1 = document.getElementById('navBarItem1');
  const navBar2 = document.getElementById('navBarItem2');
  if (navBar1.classList.contains('navbar-item-active')) {
    navBar1.classList.remove('navbar-item-active');
  }
  if (navBar2.classList.contains('navbar-item-active')) {
    navBar2.classList.remove('navbar-item-active');
  }
})

