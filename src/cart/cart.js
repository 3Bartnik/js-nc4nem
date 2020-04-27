
export class Cart {
    constructor() {
        this.key = 'IT_SPA_CART';  // to będzie tablica z zabiegami
        if (!this.exists()) {
            this.setItSpaCart([]);  //tworzy pustą tablicę
        }
    }
    get() {
        const cookies= document.cookie.split(';');
        //zwraca ciąg znaków (It+spa_cart =wartość") lub udefined
        return cookies.find(cookie => cookie.startsWith(this.key))
    }
    exists() {
        this.get() !== undefined;
    }
    //zwraca zawartość koszyka
    getItSpaCart() {
        const cookieValue = this.get().slice(12);
        //zmiana stringa z wartościa na obiekt JSON
        const parsedValue = JSON.parse(cookieValue);
        return parsedValue;
    }
    setItSpaCart(value) {
        const stringifiedValue =JSON.stringify(value);
        document.cookie = `${this.key}=${stringifiedValue}`;
    }
    //dodawanie elementów do koszyka
    //WAŻNE zakładając, że koszyk jest tablicą
    add(item){
        //pobiera zawartość koszyka
        const cartValue= this.getItSpaCart();
        this.setItSpaCart([...cartValue, item]);
    }
    //usuwanie elementów z koszyka
    remove(item){
        const cartValue = this.getItSpaCart();
        const itenInCart = cartValue.findIndex(val => val.name === item.name);
        if (itemInCart !== -1) {
            cartValue.splice(itemInCart,1);
            this.setItSpaCart(cartValue);  //ustawia zawartość koszyka po usunięciu elementu
        }

    }
}