import products from './menu.json';
// console.log(products);
import prodTemplate from './templates/products.hbs';
// console.log(prodTemplate);

const markup = prodTemplate(products)


// const stringifiedProducts = JSON.stringify(products);
// console.log(stringifiedProducts);

const menu = document.querySelector('.menu')
menu.insertAdjacentHTML("beforeend", markup)

