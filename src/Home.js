const fillHome = (() => {
  const mainContainer = document.getElementById('mainContainer');

  const header = document.createElement('h2');
  setAttributes(header, { 'class': 'header' });
  header.innerHTML = "Brothers B&B"

  const description = document.createElement('p');
  description.innerHTML = "Brothers es un espacio con estilo propio, ideal para compartir con amigos, en pareja y familia.Es el resultado de años perfeccionando la receta de nuestras hamburguesas. En su elaboración utilizamos la mejor materia prima, los mejores cortes de carne Siempre agregamos nuestro toque distintivo. Probalas acompañadas de una cerveza artesanal bien fría. Bon appetit Bro!";

  mainContainer.appendChild(header);
  mainContainer.appendChild(description);

  const menuNavBar = document.getElementById('navBarItem1');
  setAttributes(menuNavBar, { 'class': 'navbar-item navbar-item-active' });
});

import { setAttributes } from './setAttributes';
export { fillHome };