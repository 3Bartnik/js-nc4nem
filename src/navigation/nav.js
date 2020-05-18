import $ from 'jquery';
import {routes} from '../router';
import { navItem } from './nav-item';

export const nav = () => {
    const fragment = $(new DocumentFragment());
    const navBar = $(`
        <nav class="navbar-expand navbar-dark navbar-color justify-content-between"> 
            <ul class="navbar-nav mr-auto"> 
            </ul>
        </nav>
    `);

    const navBarItems = routes.map(route => navItem(route));   
    // $(`<li>${route.name}</li>`))
    // można  też za pomocą pętli for dodawać kolejne li do navbar

    navBar.find('ul').append(navBarItems);
        
    fragment.append(navBar);


    const bannerCart =$(`

        <div id="cart" class="cart">
          <!-- cart item -->
          <div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
              <p id="cart-item-title" class="font-weight-bold mb-0">Produkt</p>
              <span> Termin: <span>
              <span>PLN </span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0"> .... </span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>
          <!--end of  cart item -->
          <!-- cart item -->
          <div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="cart-item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">Produkt</p>
              <span> Termin: <span>
              <span> PLN </span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0"> .... </span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>
          <!--end of  cart item -->
          <!-- cart total -->
          <div class="cart-total-container d-flex justify-content-around mt-5">
            <h5>Łączny koszt:</h5>
            <h5> PLN <strong id="cart-total" class="font-weight-bold"> ..... </strong> </h5>
          </div>
          <!--end cart total -->
          <!-- cart buttons -->
          <div class="cart-buttons-container mt-3 d-flex justify-content-between">
            <a href="#" id="clear-cart" class="btn btn-outline-secondary btn-black text-uppercase">Wyczyść</a>
            <a href="#" class="btn btn-outline-secondary text-uppercase">Zarezerwuj</a>
          </div>
    `)
    fragment.append(bannerCart);

    return fragment;
}

$(document).ready(function () {
    const ulNavigation= document.querySelector('.navbar-expand ul');
    const ulElement= ulNavigation.lastChild;
    const aElement =ulElement.firstChild;
    console.log(aElement);
    aElement.addEventListener("onmouseover", function(event){
        console.log('onmouseover Event');
/*         const cart= document.getElementById('cart');
        cart.style.display ="block"; */
        //event.target.style.display ="block";
        //event.target.toggleClass('cart-show');
        event.target.classList.toggle('cart-show');

    });
});