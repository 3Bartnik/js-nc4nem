import $ from 'jquery';
import Cart from '../cart/cart.js';
import {item} from './rooms.js';

export const bookings =() => {
    //tworzenie kontenera na dane, który renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const allBookings = $(`
    <div class="all-books">
      <div class="card" >
        <div class="card-body">
           <h5 class="card-title text-center booksinfo">Podsumowanie rezerwacji</h5>
      
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Termin:</li>
          <li class="list-group-item">Wybrany zabieg: </li>
          <li class="list-group-item">Wybrany pokój: </li>
          <li class="list-group-item">Łączny koszt:</li> 
        </ul>
    </div>
  </div>
    <div class="card-text"> 
        <h1 > Dziękujemy za zaufanie i zachęcamy do ponownego kontaktu. </h1>
    </div>
    `);  
 
    fragment.append(allBookings);
    return fragment;
};