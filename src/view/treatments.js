import $ from 'jquery';

/* const api_url ="http://localhost:3000/rooms/";
async function aboutRooms() {
  const response = await fetch(api_url);
  const json = await response.json;
  console.log(json.price);
  json.forEach(room => {
    const containerElement= document.createElement('div');
    containerElement.createList.add('container-fluid');
  });
}
aboutRooms(); */




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
            

        </section>
        <section id="output" class="row justify-content-center heightTreat" >
        </section>
    `);

  /*
        $(document).ready(function(){  
            $('#myButton').click(function(event) {
              event.preventDefault();
              console.log('scroll');
          //$.scrollTo($("#info1"), { duration: 0});
          });
        });
   */
  
   /*
   $(document).ready(function (){
    const massage = $('<button id="massage" type="submit"> Zarezerwuj </button>');
    massage.on('click', getInputValue);
    function getInputValue(){
        var inputVal = document.getElementById("inputDate1").value;
        alert(inputVal);
    }
    });
*/
   
   /*
   document.addEventListener('DOMContentLoaded', function() {
    const massagebtn = document.getElementById(massagebtn);
    massagebtn.onclick = getInputValue;
    function getInputValue(){
        var inputVal = document.getElementById("inputDate1").value;
        alert(inputVal);
    }
    });
    */
/*
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.onclick = getInputValue;
        function getInputValue(){
            var inputVal = document.getElementById("inputDate1").value;
            alert(inputVal);
        }
      });
      */


 /*      const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = getInputValue;
            function getInputValue(e){
              e.preventDefault();
                var inputVal = document.getElementById("inputDate1").value;
                console.log(inputVal);
            }
        } */
 
    
  /* fetch("http://localhost:3000/treatments").then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
        console.log(data);
        const output = '<h2> Wyniki </h2>'
        data.forEach(function(treat){
            output += `
            <ul>
              <li> usługa: ${treat.name}</li>
              <li> część ciała: ${treat.area}</li>
              <li> czas: ${treat.time}</li>
              <li> cena: ${treat.price}</li>
            </ul>
            `
        });
        document.getElementById('output').innerHTML = output;
    });  */
   
    fetch("http://localhost:3000/treatments").then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
        console.log(data);
        const output = '<div class="row justify-content-center" id="heightTreat"> </div>'
        data.forEach(function(treat){

            output += `
                <div class="card shadow smview lgview" style="width: 16rem">
                    <div class="inner">
                        <img class="card-img-top" src="https://image.flaticon.com/icons/png/512/102/102630.png" id= "img1"  alt="Card image cap" />
                    </div>
                    <div class="card-body">
                            <h5 class="card-title"> ${treat.name}</h5>
                            <p class="card-text"> 
                              <ul>
                                <li> część ciała: ${treat.area}</li>
                                <li> Czas trwania: ${treat.time} min</li>
                                <li> Koszt usługi: ${treat.price}</li>
                              </ul>
                            </p>
                    </div>
                    <div class="reservation">
                        <label for="start"> Planowana data zabiegu:</label>
                          <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                          <input type="time" id="inputTime1" value="--:--" max="21:00" min="08:00">
                    </div>
                    <button type="submit" class="btn btn-secondary add-to-card"> Zarezerwuj </button>
                </div>
                
           
        `});
        document.getElementById('output').innerHTML = output;

        const button =$(`<button type="submit"> Zarezerwuj </button>`)

  //      output.append(button);



              
    }); 
   



 
    fragment.append(containerTreatment);
    return fragment;
};


/* 
<div class="row justify-content-center" id="heightTreat">
          
                <div class="card shadow smview lgview" style="width: 16rem">
                    <div class="inner">
                        <img class="card-img-top" src="https://image.flaticon.com/icons/png/512/102/102630.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Masaż rozgrzanym monitorem</h5>
                            <p class="card-text"> </p>
                        </div>
                    <div> 
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                                <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                                <input type="time" id="inputTime1" value="--:--" max="21:00" min="08:00">
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>
                    </div>
                </div>

                <div class="card shadow smview lgview" style="width: 16rem;">
                <div class="inner">
                    <a href="#info2" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/103/103436.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Biczowanie kablem od myszy</h5>
                        <p class="card-text"> </p>
                    </div>
                </div>

                <div class="card shadow smview lgview" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info3" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/114/114668.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Peeling odłamkami płyty CD</h5>
                            <p class="card-text"> </p>
                        </div>
                </div>
                
                <div class="card shadow smview lgview" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info4" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/92/92203.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title"> Pedicure woskiem z USB</h5>
                            <p class="card-text"> </p>
                        </div>
                </div>

                <div class="card shadow smview lgview" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info5" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/17/17787.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"> Manicure analogowo-cyfrowy</h5>
                        <p class="card-text"> </p>
                    </div>
                </div>

                
                <div class="card shadow smview lgview" style="width: 16rem;">
                <div class="inner">
                    <a href="#info6" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/112/112407.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Kąpiel w gorącej kawie</h5>
                        <p class="card-text"> </p>
                    </div>
                </div>
                <div class="card shadow smview lgview" style="width: 16rem;">
                <div class="inner">
                    <a href="#info7" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/33/33272.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Depilacja dyskiem twardym</h5>
                        <p class="card-text"> </p>
                    </div>
                </div>
 */