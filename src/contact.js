const fillContact = (() => {
  const mainContainer = document.getElementById('mainContainer');

  const header = document.createElement('h2');
  setAttributes(header, { 'class': 'header' });
  header.innerHTML = 'Contact';

  const description1 = document.createElement('p');
  description1.innerHTML = 'Email: brothersburgersbeer@gmail.com'

  const description2 = document.createElement('p');
  description2.innerHTML = 'Horario: Toda la semana de 19:00 a 00:30';

  const description3 = document.createElement('p');
  description3.innerHTML = 'Telefono (Delivery y Reservas): 02262 XX-XXXX';

  mainContainer.appendChild(header);
  mainContainer.appendChild(description1);
  mainContainer.appendChild(description2);
  mainContainer.appendChild(description3);

  const menuNavBar = document.getElementById('navBarItem3');
  setAttributes(menuNavBar, { 'class': 'navbar-item navbar-item-active' });
})

import { setAttributes } from './setAttributes';
export { fillContact };