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

          

        </div>
    `)
    fragment.append(bannerCart);

    $(document).ready(function () {
    const ulNavigation = document.querySelector('.navbar-expand ul');
    const ulElement = ulNavigation.lastChild;
    const aElement = ulElement.firstChild;
    console.log(aElement);
    aElement.addEventListener("mouseover", function(event){
        console.log('onmouseover Event');
        const cart = document.getElementById('cart');
        cart.style.display ="block";
    });
    aElement.addEventListener("mouseout", function(event){
        console.log('mouseout Event');
        const cart = document.getElementById('cart');
        cart.style.display ="none";
    });

    (function(){

    })();
});

    return fragment;
}

