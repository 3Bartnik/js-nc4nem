import $ from "jquery";
//import {toggleClass} from './function.js';

//var start = Date.now();
/* const api_url ="http://localhost:3000/rooms/";
async function aboutRooms() {
  const response = await fetch(api_url);
  const json = await response.json;
  console.log(json);
}
aboutRooms(); */





export const rooms = () => {
  //tworzenie kontenera na dane, który renderuje się całościowo na koniec, nie obciąża to przeglądarki
  const fragment = $(new DocumentFragment());
  const containerInfoRoom = $(`
    <div class="container-fluid"> 
        <div class="row justify-content-center">
            <div class="col-6 header">
                <h1 class="display-4">Zapoznaj się z ofertą dostępnych pokojów</h1>
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
                <input type="date" id="checkinDate" value="dd.mm.rrrr" min="2020-05-09" max="2021-05-05" required> `);
    container1.append(label1);
    const label2=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="checkoutDate" value="dd.mm.rrrr" min="2020-05-27" required>`);
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
                <input type="date" id="checkinDate" value="dd.mm.rrrr" min="2020-05-09" max="2021-05-05" requred> `);
    container2.append(label3);
    const label4=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="checkoutDate" value="dd.mm.rrrr" min="2020-05-27" requred>`);
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
                <input type="date" id="checkinDate" value="dd.mm.rrrr" min="2020-05-09" max="2021-05-05" requred> `);
    container3.append(label5);
    const label6=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="checkoutDate" value="dd.mm.rrrr" min="2020-05-27" requred>`);
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
                <input type="date" id="checkinDate" value="dd.mm.rrrr" min="2020-05-09" max="2021-05-05" requred> `);
    container4.append(label7);
    const label8 =$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="checkoutDate" value="dd.mm.rrrr" min="2020-05-27" requred>`);
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


//


fetch("http://localhost:3000/rooms/").then(response => {
    console.log(response);
    return response.json();
    
}).then(data => {{
    console.log(data);
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
    const imgR1 =data[0].image;
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
}});


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


$(document).ready(function () {
    const allButtons= document.querySelectorAll('.add-to-card');
    for (let i=0; i < allButtons.length; i++) {
      console.log("loop");
      allButtons[i].addEventListener('click', ()=> {
      console.log('Dodano do koszyka ');
      console.log("wybrany produkt to:", products[i]);
    
    //daty
    const allCheckin = document.querySelectorAll('#checkinDate');
    const allCheckout = document.querySelectorAll('#checkoutDate');


      console.log("wybrana data przyjazdu to:", checkinDate[i].value);
      console.log("wybrana data wyjazdu to:", checkoutDate[i].value);


    });
  };

});

