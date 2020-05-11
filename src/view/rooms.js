import $ from "jquery";
//import {toggleClass} from './function.js';

//var start = Date.now();

fetch("http://localhost:3000/rooms/").then(response => {
    console.log(response);
    return response.json();
    
}).then(data => {{
    console.log(data);
    const guestR1 = data[0].guests;
    const imgR1 =data[0].image;
    const priceR1 = data[0].price;
    const bedR1=data[0].beds;
    console.log(guestR1);
    console.log(imgR1);
    console.log(priceR1);
    console.log(bedR1);
}});

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
  const divR1 = $('<div class="containerR d-flex justify-content-center"></div>');


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
                <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-05-09" max="2021-05-05" requred> `);
    container1.append(label1);
    const label2=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="inputDate2" value="dd.mm.rrrr" min="2020-05-27" requred>`);
    container1.append(label2);

    const btn1 = $(`<button  type="button" id="btn1" class="btn btn-secondary" > Zarezerwuj</button>`);
    
    btn1.on("click", function() {
      const checkin= document.getElementById('inputDate1').value;
      const checkout=document.getElementById('inputDate2').value;
      console.log("Data przyjazdu:" + checkin);
      console.log("Data przyjazdu:" + checkout);
        alert("Zarezerwowano!");
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
                <input type="date" id="inputDate3" value="dd.mm.rrrr" min="2020-05-09" max="2021-05-05" requred> `);
    container2.append(label3);
    const label4=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="inputDate4" value="dd.mm.rrrr" min="2020-05-27" requred>`);
    container2.append(label4);

    const btn2 = $(`<button  type="button" id="btn1" class="btn btn-secondary" > Zarezerwuj</button>`);
    
    btn2.on("click", function() {
      const checkin= document.getElementById('inputDate3').value;
      const checkout=document.getElementById('inputDate4').value;
      console.log("Data przyjazdu:" + checkin);
      console.log("Data przyjazdu:" + checkout);
        alert("Zarezerwowano!");
        });
    container2.append(btn2);
    divR1.append(container2);


    const container3 = $(`
    <div class="card" style="width: 18rem;">
        <img src="https://image.freepik.com/darmowe-zdjecie/przytulny-apartament-typu-studio-z-sypialnia-i-salonem_1262-12323.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Pokój trzyosobowy</h5>
            <p class="card-text"> Ilość łóżek: 1 <br> Ilość gości: 3  <br> Cena: 290,00 PLN</p>
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
                <input type="date" id="inputDate3" value="dd.mm.rrrr" min="2020-05-09" max="2021-05-05" requred> `);
    container3.append(label5);
    const label6=$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="inputDate4" value="dd.mm.rrrr" min="2020-05-27" requred>`);
    container3.append(label6);

    const btn3 = $(`<button  type="button" id="btn1" class="btn btn-secondary" > Zarezerwuj</button>`);
    
    btn3.on("click", function() {
      const checkin= document.getElementById('inputDate3').value;
      const checkout=document.getElementById('inputDate4').value;
      console.log("Data przyjazdu:" + checkin);
      console.log("Data przyjazdu:" + checkout);
        alert("Zarezerwowano!");
        });
    container3.append(btn3);
    divR1.append(container3);

    const container4 = $(`
    <div class="card" style="width: 18rem;">
        <img src="https://image.freepik.com/darmowe-zdjecie/luksusowa-sypialnia-lub-pokoj-hotelowy_180547-919.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Pokój czteroosobowy</h5>
            <p class="card-text"> Ilość łóżek: 1 <br> Ilość gości: 4  <br> Cena: 340,00 PLN</p>
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
                <input type="date" id="inputDate3" value="dd.mm.rrrr" min="2020-05-09" max="2021-05-05" requred> `);
    container4.append(label7);
    const label8 =$(`<label for="end"> Planowana data wyjazdu:  </label>
                <input type="date" id="inputDate4" value="dd.mm.rrrr" min="2020-05-27" requred>`);
    container4.append(label8);

    const btn4 = $(`<button  type="button" id="btn1" class="btn btn-secondary" > Zarezerwuj</button>`);
    
    btn4.on("click", function() {
      const checkin= document.getElementById('inputDate3').value;
      const checkout=document.getElementById('inputDate4').value;
      console.log("Data przyjazdu:" + checkin);
      console.log("Data przyjazdu:" + checkout);
        alert("Zarezerwowano!");
        });
    container4.append(btn4);
    divR1.append(container4);
    return fragment;
};

