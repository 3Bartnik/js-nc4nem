/* 
import {home} from '../views/home';
import {rooms} from '../views/rooms';
import {treatments} from '../views/treatments';
import {bookings} from '../views/bookings';
*/

// jeśli jest w katalogu otworzony index.js ('barrel'/beczka) przechowujący i eksportujący pliki można zapisać krócej:
import {home, rooms, treatments, bookings} from '../view' ;

export const routes = [
    {name: 'IT SPA', path: '/', component: home, data: {} },
    {name: 'Pokoje', path: '/pokoje', component: rooms, data: {} },
    {name: 'Zabiegi', path: '/zabiegi', component: treatments, data: {} },
    {name: 'Zamówienia', path: '/zamówienia', component: bookings, data: {} },
];