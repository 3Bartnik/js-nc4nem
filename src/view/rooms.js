import $ from "jquery";
import {Cart} from '../cart/cart';

export const rooms = () => {
  const fragment = $(new DocumentFragment());
  const containerInfoRoom = $(`
    <div class="container-fluid"> 
        <div class="row justify-content-center">
            <div class="col-6 header">
                <h1 class="display-4 headerPZ">Zapoznaj się z ofertą dostępnych pokojów</h1>
            </div>
        </div>
    <div class="row justify-content-center">
    `);
  const divR1 = $('<div class="containerR d-flex "></div>');


  const container1 = $(`
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183__480.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Pokój jednoosobowy</h5>
            <p class="card-text"> Ilość łóżek: 1 <br> Ilość gości: 1  <br> Cena: 170,00 PLN</p>
        </div>
    </div>
    `);
/*     const card_body =$(`
        <div class="card-body">
            <h5 class="card-title">Pokój jednoosobowy</h5>
            <p class="card-text"> Ilość łóżek: ${bedR1} <br> Ilość gości: ${guestR1}  <br> Cena: ${priceR1}</p>
        </div>
    `); */

    const label1 =$(`<label for="start"> Planowana data przyjazdu:</label>
                <input type="date" class="checkinDate" id="inputDate1" value="dd.mm.rrrr" min="2020-05-22" max="2021-05-05" required> `);
    container1.append(label1);
    const label2=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="inputDate2" class="checkoutDate" value="dd.mm.rrrr" min="2020-05-27" required>`);
    container1.append(label2);

    const btn1 = $(`<button  type="button" id="btn1" class="btn btn-secondary add-to-card" > Zarezerwuj</button>`);
    
    btn1.on("click", function() {
      const checkin= document.getElementById('inputDate1').value;
      const checkout= document.getElementById('inputDate2').value;
      console.log("Data przyjazdu:" + checkin);
      console.log("Data przyjazdu:" + checkout);
    if (checkin == "" || checkout == "") {
        alert('Wprowadź daty');
        return;
    } else {
      alert("Zarezerwowano!");
      }
    });
    container1.append(btn1);
    container1.appendTo(divR1);


     fragment.append(containerInfoRoom).append(divR1);
   // divR1.append(container1)
    

  const container2 = $(`
    <div class="card" style="width: 18rem;">
        <img src="https://image.freepik.com/darmowe-zdjecie/pokoj-hotelowy_23-2148095365.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Pokój dwuosobowy</h5>
            <p class="card-text"> Ilość łóżek: 1 <br> Ilość gości: 2  <br> Cena: 240,00 PLN</p>
        </div>
    </div>
    `);
/*     const card_body =$(`
        <div class="card-body">
            <h5 class="card-title">Pokój jednoosobowy</h5>
            <p class="card-text"> Ilość łóżek: ${bedR1} <br> Ilość gości: ${guestR1}  <br> Cena: ${priceR1}</p>
        </div>
    `); */

    const label3 =$(`<label for="start"> Planowana data przyjazdu:</label>
                <input type="date" id="inputDate3" class="checkinDate" value="dd.mm.rrrr" min="2020-05-22" max="2021-05-05" requred> `);
    container2.append(label3);
    const label4=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="inputDate4" class="checkoutDate" value="dd.mm.rrrr" min="2020-05-27" requred>`);
    container2.append(label4);

    const btn2 = $(`<button  type="button" id="btn1" class="btn btn-secondary add-to-card" > Zarezerwuj</button>`);
    
    btn2.on("click", function() {
      const checkin= document.getElementById('inputDate3').value;
      const checkout=document.getElementById('inputDate4').value;
      console.log("Data przyjazdu:" + checkin);
      console.log("Data przyjazdu:" + checkout);
    if (checkin == "" || checkout == "") {
        alert('Wprowadź daty');
        return;
    } else {
      alert("Zarezerwowano!");
      }
    });
    container2.append(btn2);
    divR1.append(container2);


    const container3 = $(`
    <div class="card" style="width: 18rem;">
        <img src="https://image.freepik.com/darmowe-zdjecie/przytulny-apartament-typu-studio-z-sypialnia-i-salonem_1262-12323.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Pokój trzyosobowy</h5>
            <p class="card-text"> Ilość łóżek: 2 <br> Ilość gości: 3  <br> Cena: 290,00 PLN</p>
        </div>
    </div>
    `);
/*     const card_body =$(`
        <div class="card-body">
            <h5 class="card-title">Pokój jednoosobowy</h5>
            <p class="card-text"> Ilość łóżek: ${bedR1} <br> Ilość gości: ${guestR1}  <br> Cena: ${priceR1}</p>
        </div>
    `); */

    const label5 =$(`<label for="start"> Planowana data przyjazdu:</label>
                <input type="date" id="inputDate5" class="checkinDate" value="dd.mm.rrrr" min="2020-05-22" max="2021-05-05" requred> `);
    container3.append(label5);
    const label6=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="inputDate6" class="checkoutDate" value="dd.mm.rrrr" min="2020-05-27" requred>`);
    container3.append(label6);

    const btn3 = $(`<button  type="button" id="btn1" class="btn btn-secondary add-to-card" > Zarezerwuj</button>`);
    
    btn3.on("click", function() {
      const checkin= document.getElementById('inputDate5').value;
      const checkout=document.getElementById('inputDate6').value;
      console.log("Data przyjazdu:" + checkin);
      console.log("Data przyjazdu:" + checkout);
    if (checkin == "" || checkout == "") {
        alert('Wprowadź daty');
        return;
    } else {
      alert("Zarezerwowano!");
      }
    });
    container3.append(btn3);
    divR1.append(container3);

    const container4 = $(`
    <div class="card" style="width: 18rem;">
        <img src="https://image.freepik.com/darmowe-zdjecie/luksusowa-sypialnia-lub-pokoj-hotelowy_180547-919.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Pokój czteroosobowy</h5>
            <p class="card-text"> Ilość łóżek: 2 <br> Ilość gości: 4  <br> Cena: 340,00 PLN</p>
        </div>
    </div>
    `);
/*     const card_body =$(`
        <div class="card-body">
            <h5 class="card-title">Pokój jednoosobowy</h5>
            <p class="card-text"> Ilość łóżek: ${bedR1} <br> Ilość gości: ${guestR1}  <br> Cena: ${priceR1}</p>
        </div>
    `); */

    const label7 =$(`<label for="start"> Planowana data przyjazdu:</label>
                <input type="date" id="inputDate7" class="checkinDate" value="dd.mm.rrrr" min="2020-05-22" max="2021-05-05" requred> `);
    container4.append(label7);
    const label8 =$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="inputDate8" class="checkoutDate" value="dd.mm.rrrr" min="2020-05-27" requred>`);
    container4.append(label8);

    const btn4 = $(`<button  type="button" id="btn1" class="btn btn-secondary add-to-card" > Zarezerwuj</button>`);
    
    btn4.on("click", function() {
      const checkin= document.getElementById('inputDate7').value;
      const checkout= document.getElementById('inputDate8').value;
      console.log("Data przyjazdu:" + checkin);
      console.log("Data przyjazdu:" + checkout);
    if (checkin == "" || checkout == "") {
        alert('Wprowadź daty');
        return;
    } else {
      alert("Zarezerwowano!");
      }
    });
    container4.append(btn4);
    divR1.append(container4);

    const sectionW= $(`<section id="output2"> </section>`);
    divR1.append(sectionW);


//


fetch("http://localhost:3000/rooms/").then(response => {
    console.log(response);
    return response.json();
    
}).then(data => {
    console.log(data);
  /*   for (let i=0; i> data.lenght; i++) {
      data = new Map() ;
      let pirice1= data.get('price');
    } *//*  */
    const price1R= data[0].price;  //170
    const price2R= data[1].price; //240
    const price3R= data[2].price;  //290
    const price4R= data[3].price;//340
    console.log(price2R);
    
    data.forEach(getprice => {
    const containerElement = document.createElement('div');
    containerElement.classList.add('containerR');
    containerElement.classList.add('d-flex');
    containerElement.classList.add('justify-content-center');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    containerElement.appendChild(cardElement);

    const cardImageElement = document.createElement('div');
    cardImageElement.classList.add('card-image')

    cardElement.appendChild(cardImageElement);

    const imageElement = document.createElement('img');
    const imgR1 = data[0].image;
    imageElement.src= imgR1;
    cardElement.appendChild(imageElement);

    

    })
/*     const guestR1 = data[0].guests;
    const imgR1 =data[0].image;
    const priceR1 = data[0].price;
    const bedR1=data[0].beds;
    console.log(guestR1);
    console.log(imgR1);
    console.log(priceR1);
    console.log(bedR1); */
});

    return fragment;
};


/* const allButtons= document.querySelectorAll('.add-to-card');
for (let i=0; i < allButtons.length; i++) {
console.log("loop");
} */

let products = [
    {
      "id": 1,
      "name": "Pokój unarny",
      "beds": 1,
      "guests": 1,
      "price": 170,
      "image": "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183__480.jpg"
    },
    {
      "id": 2,
      "name": "Pokój binarny",
      "beds": 1,
      "guests": 2,
      "price": 240,
      "image": "https://image.freepik.com/darmowe-psd/nowoczesna-sypialnia-lub-pokoj-hotelowy-z-podwojnym-lozkiem-i-eleganckimi-meblami_176382-210.jpg"
    },
    {
      "id": 3,
      "name": "Pokój trójkowy",
      "beds": 2,
      "guests": 3,
      "price": 290,
      "image": "https://image.freepik.com/darmowe-zdjecie/pokoj-hotelowy_23-2148095366.jpg"
    },
    {
      "id": 4,
      "name": "Pokój czwórkowy",
      "beds": 2,
      "guests": 4,
      "price": 340,
      "image": "https://cdn.pixabay.com/photo/2019/12/16/15/43/room-4699578_1280.jpg"
    }
  ]
  
const shoppingCart = new Cart(); 
console.log(shoppingCart);

$(document).ready(function () {
    const allButtons= document.querySelectorAll('.add-to-card');
    for (let i=0; i < allButtons.length; i++) {
      console.log("loop");
      allButtons[i].addEventListener('click', (item)=> {
      console.log('Dodano do koszyka ');
      console.log("wybrany produkt to:", products[i]);

      console.log(products[i].name);
      console.log(products[i].price);
/*       const item = products[i].name;
      const itemPrice = products[i].price; */

      const item ={};
      item.name = products[i].name;
      item.beds = products[i].beds;
      item.price = products[i].price;
      item.guests = products[i].guests;
      item.image = products[i].image;

      const checkin = document.querySelectorAll('.checkoutDate');
      for (let v=0; v < checkin.length; v++) {
          const checkinDate = checkin[i].value;
      }
      item.checkin =checkinDate
      console.log("produkt new:", item);

      const checkout = document.querySelectorAll('.checkinDate');
          for (let w=0; w < checkin.length; w++) {
          const checkoutDate = checkout[i].value;
      }
      item.checkout =checkoutDate
      console.log("produkt new:", item);
      
      shoppingCart.add(item);
      if (shoppingCart.exists()){
        shoppingCart.add(item);
      }

      console.log('w koszyku jest:',shoppingCart );

//podsumowanie zamówienia
      const cartItem = document.createElement('div');
      cartItem.classList.add("cart-item", "d-flex", "justify-content-between", "text-capitalize", "my-3");
      cartItem.innerHTML = `
          <img src="${item.image}" class="img-fluid rounded-circle" id="item-img" width="100" height="200" alt=""/>
          <div class="item-text">
              <p id="cart-item-title" class="font-weight-bold mb-0">Produkt: ${item.name}</p>
              <span> Termin przyjazdu: ${item.checkin} <br> Termin wyjazdu: ${item.checkout} <span> <br>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">Cena:  ${item.price} PLN </span>
          </div>
          <div class="cart-buttons-container mt-3 d-flex justify-content-between">
            <a href="#" id="clear-cart" class="btn btn-outline-secondary btn-black text-uppercase">Wyczyść</a>
            <a href="#" class="btn btn-outline-secondary text-uppercase">Zarezerwuj</a>
          </div>
          `

      const cartBanner = document.getElementById('cart');
      const total = document.querySelector('.cart-total-container');
      cartBanner.insertBefore(cartItem, total )
      alert('Produkt dodany do koszyka');


/*       const item = {
        name: products[i].name,
        beds: products[i].beds,
        guests: products[i].guests,
        price: products[i].price

      }; */
      

      //cookie
/*       const myCookies = {};
      function addCookie (){
          myCookies["_chekindate"]=document.getElementById('inputDate7').value;
          myCookies["_chekoutdate"]=document.getElementById('inputDate8').value;
          document.cookie= "";
          let expiresAttribute = new Date(Date.now()+60*3).toString();
          let cookieString= "";
          for (var key in myCookies) {
            cookieString = key + "=" +myCookies[key] +";" +expiresAttribute+ ";";
            document.cookie= cookieString;
          }
      } */


      console.log ('cookie dla przycisku:',document.cookie);
      document.cookie = `IT_SPA_CART= ${item}`;    //dodaje wybrany pokoj w cookie i loguje do konsoli
      //document.cookie = `IT_SPA_CART= ${itemPrice}`;   //przekazuje cene

      console.log(document.cookie);
      //shoppingCart.add(products[i].name);
/*       shoppingCart.push([{
        name= 'John'},
        {beds= 12},
        {price= 1200}
      ]); */
      console.log(shoppingCart);





    //document.cookie = `room=${products[i]}`;
    //document.cookie = "room= `${products[i].name}`";


/*       const product = new shoppingCart(id[i],name[i]); */
      console.log(shoppingCart);


/*        shoppingCart.add(id[i],name[i]);
      console.log(shoppingCart); */
    
    //daty
/*     const allCheckin = document.querySelectorAll('.checkinDate');
    const allCheckout = document.querySelectorAll('.checkoutDate');


      console.log("wybrana data przyjazdu to:", checkinDate[i].value);
      console.log("wybrana data wyjazdu to:", checkoutDate[i].value); */


/*       
    function setCookie(name, val, days, path, domain, secure) {
    if (navigator.cookieEnabled) { //czy ciasteczka są włączone
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        let cookieText = cookieName + "=" + cookieVal;

        if (typeof days === "number") {
            const data = new Date();
            data.setTime(data.getTime() + (days * 24*60*60*1000));
            cookieText += "; expires=" + data.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
        }
    }
    const checkinVal = document.querySelector("#name").value;
    const checkinVal = document.querySelector("#surname").value;
    setCookie("checkin", checkinVal);
    setCookie("checkout", checkinVal); */



/*    
    const allInput= document.querySelectorAll('input');
    allInput.forEach( ()=> {
      const now = new Date().toISOString();
      console.log(now);
      const startDate= now.split('T')[0];
      allInput.setAttribute("min", `${startDate}`);
      console.log("start date is:", startDate);
    })
 */


    });
    //ustawienie minimalnej daty min="2020-05-09"
    /* function setCheckinDate(){
    const now = new Date().toISOString();
    const startDate= now.split('T')[0];
    console.log(startDate);
    const checkin= document.getElementById('checkinDate');
    checkin.setAttribute("min", "startDate");
    }
    setCheckinDate();  */

  };

});
 