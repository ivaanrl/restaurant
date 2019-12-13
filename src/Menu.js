const fillMenu = (() => {
  const mainContainer = document.getElementById('mainContainer');
  setAttributes(mainContainer, { 'class': ' menu main-container' })

  const brgTernera = document.createElement('div');
  setAttributes(brgTernera, { 'class': 'burger-div' });
  brgTernera.innerHTML = 'Burgers de Ternera'

  const argenta = document.createElement('div');
  setAttributes(argenta, { 'class': 'burger' });
  argenta.innerHTML = 'Argenta';
  const descriptionArg = document.createElement('div');
  setAttributes(descriptionArg, { 'class': 'burger-description' });
  descriptionArg.innerHTML = 'Morrones asados - provolone - lechuga -huevo a la plancha - chimichurri';
  argenta.appendChild(descriptionArg);

  const dobleAmericana = document.createElement('div');
  setAttributes(dobleAmericana, { 'class': 'burger' });
  dobleAmericana.innerHTML = 'Doble Americana';
  const descriptionDA = document.createElement('div');
  setAttributes(descriptionDA, { 'class': 'burger-description' });
  descriptionDA.innerHTML = 'panceta - doble cheddar - cebolla caramelizada - BBQ'
  dobleAmericana.appendChild(descriptionDA);

  const mexicana = document.createElement('div');
  setAttributes(mexicana, { 'class': 'burger' });
  mexicana.innerHTML = 'Mexicana';
  const descriptionMex = document.createElement('div');
  setAttributes(descriptionMex, { 'class': 'burger-description' });
  descriptionMex.innerHTML = 'Morrones asados - provolone - lechuga -huevo a la plancha - chimichurri';
  mexicana.appendChild(descriptionMex);

  const suiza = document.createElement('div');
  suiza.innerHTML = 'Suiza';
  setAttributes(suiza, { 'class': 'burger' });
  const descriptionSui = document.createElement('div');
  setAttributes(descriptionSui, { 'class': 'burger-description' });
  descriptionSui.innerHTML = 'Morrones asados - provolone - lechuga -huevo a la plancha - chimichurri';
  suiza.appendChild(descriptionSui);

  mainContainer.appendChild(brgTernera)
  brgTernera.appendChild(argenta);
  brgTernera.appendChild(dobleAmericana);
  brgTernera.appendChild(mexicana);
  brgTernera.appendChild(suiza);

  const brgVegetariana = document.createElement('div');
  brgVegetariana.innerHTML = 'Burger Vegetarianas'
  setAttributes(brgVegetariana, { 'class': 'burger-div' });

  const arabe = document.createElement('div');
  setAttributes(arabe, { 'class': 'burger' });
  arabe.innerHTML = 'Árabe';
  const descriptionAra = document.createElement('div');
  setAttributes(descriptionAra, { 'class': 'burger-description' });
  descriptionAra.innerHTML = 'Morrones asados - provolone - lechuga -huevo a la plancha - chimichurri';
  arabe.appendChild(descriptionAra);

  const africana = document.createElement('div');
  setAttributes(africana, { 'class': 'burger' });
  africana.innerHTML = 'Africana';
  const descriptionAfr = document.createElement('div');
  setAttributes(descriptionAfr, { 'class': 'burger-description' });
  descriptionAfr.innerHTML = 'Morrones asados - provolone - lechuga -huevo a la plancha - chimichurri';
  africana.appendChild(descriptionAfr);

  mainContainer.appendChild(brgVegetariana);
  brgVegetariana.appendChild(arabe);
  brgVegetariana.appendChild(africana);

  const menuNavBar = document.getElementById('navBarItem2');
  setAttributes(menuNavBar, { 'class': 'navbar-item navbar-item-active' });
})


import { setAttributes } from './setAttributes';
export { fillMenu };