import $ from 'jquery';
import {shoppingCart, Cart} from '../cart/cart';

export const treatments =() => {
    //tworzenie kontenera na dane, który renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const containerTreatment= $(`
        <div class="container-fluid"> 
            <div class="row justify-content-center">
                <div class="col-6 col-sm-12 col-xs-12 header">
                    <h1 class="headerPZ display-4">Zapoznaj się z naszą ofertą dostępnych zabiegów</h1>
                </div>
            </div>
            
          <section id="output" class="row justify-content-center heightTreat">
          </section>
        </div>
    `);
   
    fetch("http://localhost:3000/treatments").then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
        console.log(data);
        console.log(data.image);
        const output = '<div > </div>'
        data.forEach(function(treat){

            output += `
                <div class="card shadow smview lgview" style="width: 16rem">
                    <div class="inner">
                        <img class="card-img-top" src="${treat.image}" id= "img1"  alt="Card image cap" />
                    </div>
                    <div class="card-body">
                            <h5 class="card-title"> ${treat.name}</h5>
                            <p class="card-text"> 
                              <ul class="treat-info">
                                <li> Część ciała: ${treat.area}</li>
                                <li> Czas trwania: ${treat.time} min</li>
                                <li> Koszt usługi: ${treat.price},00 zł</li>
                              </ul>
                            </p>
                    </div>
                    <div class="reservation">
                        <label for="start"> Planowana data zabiegu:</label>
                          <input type="date" id="treatDate" class="treatDate" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                          <input type="time" id="treatTime" class="treatTime" value="--:--" max="21:00" min="08:00">
                    </div>
                    <button type="submit" class="btn btn-secondary add-to-card2"> Zarezerwuj </button>
                </div>
        `});
    document.getElementById('output').innerHTML = output;
    const button =$(`<button type="submit"> Zarezerwuj </button>`)              
    }); 
 
    fragment.append(containerTreatment);
    return fragment;
};
console.log(shoppingCart);

let treatmentsItem = [
        {
          id: 1,
          name: "Masaż rozgrzanym monitorem",
          area: "plecy",
          time: 30,
          price: 80,
          image: "https://image.flaticon.com/icons/png/512/102/102630.png",
        },
        {
          id: 2,
          name: "Biczowanie kablem od myszy",
          area: "plecy",
          time: 20,
          price: 70,
          image: "https://image.flaticon.com/icons/png/512/103/103436.png",
        },
        {
          id: 3,
          name: "Peeling odłamkami płyty CD",
          area: "twarz",
          time: 15,
          price: 50,
          image: "https://image.flaticon.com/icons/png/512/114/114668.png",
        },
        {
          id: 4,
          name: "Pedicure woskiem z USB",
          area: "nogi",
          time: 25,
          price: 100,
          image: "https://image.flaticon.com/icons/png/512/92/92203.png",
        },
        {
          id: 5,
          name: "Manicure analogowo-cyfrowy",
          area: "ręce",
          time: 45,
          price: 150,
          image: "https://image.flaticon.com/icons/png/512/17/17787.png",
        },
        {
          id: 6,
          name: "Kąpiel w gorącej kawie",
          area: "całe ciało",
          time: 60,
          price: 200,
          image: "https://image.flaticon.com/icons/png/512/112/112407.png",
        },
        {
          id: 7,
          name: "Depilacja dyskiem twardym",
          area: "całe ciało",
          time: 45,
          price: 120,
          image: "https://image.flaticon.com/icons/png/512/33/33272.png",
        },
      ];

$(document).ready(function () {
      const startDate2 = $('.treatDate');
      for (let i=0; i < startDate2.length; i++){
        console.log("startDate2:", startDate2);
      const today = new Date();
      const dd = today.getDate();
      const mm = today.getMonth()+1; //January is 0!
      const yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }; 
        if(mm<10){
            mm='0'+mm
        };
      today = yyyy+'-'+mm+'-'+dd; 
      startDate2.attr("min",today);
      console.log("start date", startDate2);

 /*      today.setFullYear(2021);
      startDate2.attr("max",today); */
  }



        const allButtons = document.querySelectorAll(".add-to-card2");
        for (let i = 0; i < allButtons.length; i++) {
          console.log("loop");
          allButtons[i].addEventListener("click", (item) => {
            console.log("Dodano do koszyka ");
            console.log("wybrany produkt to:", treatmentsItem[i]);

            console.log(treatmentsItem[i].name);
            console.log(treatmentsItem[i].price);
            console.log(treatmentsItem[i].area);

            const item ={};
            item.name = treatmentsItem[i].name;
            item.area = treatmentsItem[i].area;
            item.price = treatmentsItem[i].price;
            item.time = treatmentsItem[i].time;
            item.image = treatmentsItem[i].image;
            console.log(item);

/*             
            const dateTreat = document.querySelectorAll('.inputDate1');
            const timeTreat = document.querySelectorAll('.inputTime1');

            for (let v=0; v < dateTreat.length; v++) {
            const checdateOfTreat = dateTreat[i].value;
            item2.dateTreat =checdateOfTreat;
            console.log("produkt new:", item);
            }
           

            console.log("data zabiegu:" + checdateOfTreat);

            if (dateTreat == "" || timeTreat == "") {
                alert('Wprowadź dane zabiegu');
              return;
            } else {
                alert("Zarezerwowano!");
            }
 */

          });

}})