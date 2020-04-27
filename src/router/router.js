import $ from 'jquery';
import { oops} from '../view/oops';
export class Router {
    constructor (routes) {
        this.routes = routes;
        this.outlet;   //to będą wysyłame widoki stron z routera
        this.body = $(document.body); 
    }
    mount(outlet) {   //pozwala wrzucać ścieżki 
        this.outlet = outlet;
        //nasłuchiwanie z poziomu body  + callback
        this.body.on('routechange', (event,detail) => {
            const { path} = detail;
            this.navigate(path);
        })
    }

    init () {
        const path = location.pathname;
        this.navigate(path);
    }
    get(path) {
        //znajduje ścieżkę o zadanym path lub zwraca undefined
        return this.routes.find(route =>route.path === path);  //porównuje ścieżkę path ze ścieżkami w routes i zwraca cały obiekt lub undefined
    }
        //sprawdzanie czy ścieżka istnieje
    has(path){
        return this.get(path) !== undefined;
    }
    navigate(path, data = {}) {
        if (this.has(path)) {  //jesli jest taka ścieżka to:
            //obsługuje tę ścieżkę
            /*
            const x= this.get(path);
            const component = x.component;
            const html = component();
*/
            const {component} = this.get(path);
            const html = component ();

            //opróżniamy ścieżkę i renderujemy nowy widok wewnętrz elementu outlet
            this.outlet.empty().append(html);
        } else {
            //obsługuje nieistniejącą ścieżkę (oops.....)
            //this.outlet.empty().append(`<h1>Error 404 </h1>`);
            const html = oops();
            this.outlet.empty().append(html);
        }
        //zapamiętuje nowy stan w przeglądarce oraz ustawia wybraną ścieżkę -- path
        history.pushState(data, '', path);
    }
}