import 'bootstrap/dist/css/bootstrap.css';
import './src/it-spa.scss';
import $ from 'jquery';
import {nav} from './src/navigation/nav';

import {Router, routes} from './src/router';

const main = $('main');

const router = new Router (routes);
//element main będzie "outletem" na nasze widoki
main.before(nav);   // wrzuca <nav> przed <main>


router.mount(main);

//router.navigate('/rooms');

//przy uruchomineiy strony pierwszy raz  nawigujemy do ścieżki z paska adresu
router.init();
