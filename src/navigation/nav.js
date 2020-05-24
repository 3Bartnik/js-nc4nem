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
        <p> Wybrałeś: </p>

          
          <div class="cart-total-container d-flex justify-content-around text-capitalize mt-5">
            <h5>Suma:</h5>
            <h5> <strong id="cart-total" class="font-weight-bold"> </strong> </h5>
          </div>
          <div class="cart-buttons-container mt-3 d-flex justify-content-between">
            <a href="#" id="clear-cart" class="btn btn-outline-secondary btn-black text-uppercase">Wyczyść</a>
            <a href="#" class="btn btn-outline-secondary text-uppercase">Zarezerwuj</a>
          </div>
        </div>
    `)
    fragment.append(bannerCart);

    $(document).ready(function () {
    const ulNavigation = document.querySelector('.navbar-expand ul');
    const ulElement = ulNavigation.lastChild;
    const aElement = ulElement.firstChild;
    console.log(aElement);
    aElement.addEventListener("mouseover", function(event){
        //console.log('onmouseover Event');
        const cart = document.getElementById('cart');
        cart.style.display ="block";
    });
    aElement.addEventListener("click", function(event){
        //console.log('mouseout Event');
        const cart = document.getElementById('cart');
        cart.style.display ="none";
    });

    (function(){

    })();
});

    return fragment;
}

