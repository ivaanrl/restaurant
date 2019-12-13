const initialPageLoad = (() => {

  const contentDiv = document.getElementById('content');

  const navBar = document.createElement('div');
  setAttributes(navBar, { 'class': 'navbar' });

  const navBarLogo = document.createElement('div');
  setAttributes(navBarLogo, { 'class': 'navbar-logo' });
  const logoImg = document.createElement('img');
  setAttributes(logoImg, { 'src': 'img/Brothers-logo.png' });

  const navbarItem1 = document.createElement('div');
  navbarItem1.innerHTML = 'Home';
  setAttributes(navbarItem1, { 'class': 'navbar-item', 'id': 'navBarItem1' });

  const navbarItem2 = document.createElement('div');
  navbarItem2.innerHTML = 'Menu';
  setAttributes(navbarItem2, { 'class': 'navbar-item', 'id': 'navBarItem2' });

  const navbarItem3 = document.createElement('div');
  navbarItem3.innerHTML = 'Contact';
  setAttributes(navbarItem3, { 'class': 'navbar-item', 'id': 'navBarItem3' });

  const mainContainer = document.createElement('div');
  setAttributes(mainContainer, { 'class': 'main-container', 'id': 'mainContainer' });

  contentDiv.appendChild(navBar);
  navBar.appendChild(navBarLogo);
  navBar.appendChild(navbarItem1);
  navBar.appendChild(navbarItem2);
  navBar.appendChild(navbarItem3);

  contentDiv.appendChild(mainContainer);



})
import { setAttributes } from './setAttributes';
export { initialPageLoad };