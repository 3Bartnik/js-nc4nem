import $ from 'jquery';
import {routes} from '../router';
import { navItem } from './nav-item';

export const nav = () => {
    const fragment = $(new DocumentFragment());
    const navBar = $(`
        <nav class="navbar navbar-expand navbar-dark navbar-color justify-content-between"> 
            <span class="navbar-brand"> IT SPA </span>
            <ul class="navbar-nav mr-auto"> 
            </ul>
        </nav>
    `);

    const navBarItems = routes.map(route => navItem(route));   
    // $(`<li>${route.name}</li>`))
    // można  też za pomocą pętli for dodawać kolejne li do navbar

    navBar.find('ul').append(navBarItems);
        
    fragment.append(navBar);
    return fragment;
}