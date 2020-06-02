import $ from 'jquery';
import {shoppingCart, Cart} from '../cart/cart';

export const treatments =() => {
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
        const output = '<div > </div>'
        data.forEach(function(treat){

            output += `
                <div class="card shadow smview lgview" style="width: 16rem">
                    <div class="inner roomCard">
                        <img class="card-img-top" src="${treat.image}" id= "img1"  alt="Card image cap" />
                    </div>
                    <div class="card-body">
                            <h5 class="card-title"> ${treat.name}</h5>
                            <p class="card-text"> 
                              <ul class="treat-info">
                                <li> Część ciała: ${treat.area}</li>
                                <li> Czas trwania (min): ${treat.time} </li>
                                <li> Koszt usługi (PLN): ${treat.price}</li>
                              </ul>
                            </p>
                    </div>
                    <div class="reservation">
                        <label for="start"> Planowana data zabiegu:</label>
                          <input type="date" id="treatDate" class="treatDate" value="dd.mm.rrrr" min="${getDate(0)}" max="${getDate(365)}" onfocus="blur()"  required />
                          <input type="time" id="treatTime" class="treatTime" value="--:--" max="21:00" min="08:00" step="1800" />
                    </div>
                    <button type="submit" class="btn btn-secondary add-to-card2" onclick="${addToCart()}"> Zarezerwuj </button>
                </div>
        `});
    document.getElementById('output').innerHTML = output;         
    }); 
 
    fragment.append(containerTreatment);
    return fragment;
};

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

/* $(document).ready(function () {
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
          });
      }
}) */
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
};


/* const allButtons = document.querySelectorAll(".add-to-card");
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
            console.log('data zabiegu ',item.name )
          });
        } */
        
function addToCart() {
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
          });
      };
};


const allButtons = document.querySelectorAll(".add-to-card2");
  allButtons.forEach(function(btn){
  btn.addEventListener("click",function(event){
        console.log(event.target);
    });
  });



/* function getStep(seconds){

  const allTreat= document.querySelectorAll(".treatTime");
  allTreat.forEach((event) =>{
    
    const min = event.target.parentElement.previousElementSibling.children[2].children[2].value;
    console.log(min);
  //const time =  60 sec x 10 mins = 600 seconds
  const seconds= 60* min;
  return seconds;
  })
  
}
 */