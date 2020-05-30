import $ from "jquery";
import {Cart} from '../cart/cart';

export const rooms = () => {
  const fragment = $(new DocumentFragment());
  const containerRooms= $(`
        <div class="container-fluid"> 
            <div class="row justify-content-center">
                <div class="col-6 col-sm-12 col-xs-12 header">
                    <h1 class="headerPZ display-4">Zapoznaj się z ofertą dostępnych pokojów</h1>
                </div>
            </div>
            
            <section id="output" class="row justify-content-center heightTreat">
            </section>
        </div>
    `);
   
    fetch("http://localhost:3000/rooms").then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
        console.log(data);
        const output = '<div > </div>'
        data.forEach(function(room){
            output += `
                <div class="card shadow smview lgview" style="width: 16rem">
                        <img class="card-img-top" src="${room.image}" id= "img1" height="169px" alt="Card image cap" />
                    <div class="card-body">
                            <h5 class="card-title"> ${room.name}</h5>
                            <p class="card-text"> 
                              <ul class="treat-info">
                                <li> Ilość łożek: ${room.beds}</li>
                                <li> Ilość gości: ${room.guests} min</li>
                                <li> Cena : ${room.price},00 zł</li>
                              </ul>
                            </p>
                    </div>
                    <div class="reservation">
                        <label for="start"> Planowana data przyjazdu:</label>
                          <input type="date" id="treatDate" class="treatDate" value="dd.mm.rrrr" min="${getDate(0)}" max="${getDate(365)}" onfocus="blur()"  required>
                          <label for="end"> Planowana data wyjazdu:</label>
                          <input type="date" id="treatDate" class="treatDate" value="dd.mm.rrrr" min="${getDate(1)}" max="${getDate(365)}" onfocus="blur()"  required>
                    </div>
                    <button type="submit" class="btn btn-secondary add-to-card" onclick=""> Zarezerwuj </button>
                </div>
              `});

          document.getElementById('output').innerHTML = output;
          const button =$(`<button type="submit"> Zarezerwuj </button>`)              
    }); 
 
fragment.append(containerRooms);
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
      "image": "https://image.freepik.com/darmowe-zdjecie/pokoj-hotelowy_23-2148095365.jpg"
    },
    {
      "id": 3,
      "name": "Pokój trójkowy",
      "beds": 2,
      "guests": 3,
      "price": 290,
      "image": "https://image.freepik.com/darmowe-zdjecie/przytulny-apartament-typu-studio-z-sypialnia-i-salonem_1262-12323.jpg"
    },
    {
      "id": 4,
      "name": "Pokój czwórkowy",
      "beds": 2,
      "guests": 4,
      "price": 340,
      "image": "https://image.freepik.com/darmowe-zdjecie/luksusowa-sypialnia-lub-pokoj-hotelowy_180547-919.jpg"
    }
  ]
  
const shoppingCart = new Cart(); 
console.log(shoppingCart);

$(document).ready(function () {

    const allButtons= document.querySelectorAll('.add-to-card');
    for (let i=0; i < allButtons.length; i++) {
      console.log("loop");
      allButtons[i].addEventListener('click', (item)=> {
      if (checkin == "" || checkout == "") {
        alert('Wprowadź daty');
        return;
    } else {
     /*  alert("Zarezerwowano!"); */

      }
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

      const checkin = document.querySelectorAll('.checkinDate');
      for (let v=0; v < checkin.length; v++) {
          const checkinDate = checkin[i].value;
      }
      item.checkin =checkinDate
      console.log("produkt new:", item);

      const checkout = document.querySelectorAll('.checkoutDate');
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

          `

      const cartBanner = document.getElementById('cart');
      const total = document.querySelector('.cart-total-container');
      cartBanner.insertBefore(cartItem, total )
      alert('Produkt dodany do koszyka');
      showTotal();


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
     const cookies= document.cookie 
      var now = new Date();
      var time = now.getTime();
      var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
     cookies = `IT_SPA_CART= ${item}`,"max-age=2600; path=/";
     //cookies = `IT_SPA_CART= ${item}; "max-age=86400; path=/`;  
     //dodaje wybrany pokoj w cookie i loguje do konsoli
      //document.cookie = `IT_SPA_CART= ${itemPrice}`;   //przekazuje cene

      console.log(cookies);
      console.log(shoppingCart);

      shoppingCart.get();
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
    function showTotal(){
      const total = [];
      const items= document.querySelectorAll('.cart-item-price');
      items.forEach(function(item){
        total.push(parseFloat(item.textContent));
      })
      console.log(total);
    }
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
function getDate(days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
    
  var dd = date.getDate();
  var mm = date.getMonth()+1; //January is 0!
  var yyyy = date.getFullYear();
  
  if(dd<10){
    dd='0'+dd
  }; 
  if(mm<10){
    mm='0'+mm
  };
    
  return yyyy+'-'+mm+'-'+dd; 
}
 