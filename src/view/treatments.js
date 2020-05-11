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
                    <h1>Zapoznaj się z naszą ofertą dostępnych zabiegów</h1>
                </div>
            </div>
            <div class="row justify-content-center" id="heightTreat">
          
                <div class="card shadow smview lgview" style="width: 16rem">
                    <div class="inner">
                        <a href="#info1" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/102/102630.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Masaż rozgrzanym monitorem</h5>
                            <p class="card-text"> </p>
                            <a href="#info1" class="btn btn-secondary">Poznaj szczegóły oferty</a>
                        </div>
                </div>

                <div class="card shadow smview lgview" style="width: 16rem;">
                <div class="inner">
                    <a href="#info2" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/103/103436.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Biczowanie kablem od myszy</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-secondary">Poznaj szczegóły oferty</a>
                    </div>
                </div>

                <div class="card shadow smview lgview" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info3" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/114/114668.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Peeling odłamkami płyty CD</h5>
                            <p class="card-text"> </p>
                            <a href="#" class="btn btn-secondary">Poznaj szczegóły oferty</a>
                        </div>
                </div>
                
                <div class="card shadow smview lgview" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info4" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/92/92203.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title"> Pedicure woskiem z USB</h5>
                            <p class="card-text"> </p>
                            <a href="#" class="btn btn-secondary">Poznaj szczegóły oferty</a>
                        </div>
                </div>

                <div class="card shadow smview lgview" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info5" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/17/17787.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"> Manicure analogowo-cyfrowy</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-secondary">Poznaj szczegóły oferty</a>
                    </div>
                </div>

                
                <div class="card shadow smview lgview" style="width: 16rem;">
                <div class="inner">
                    <a href="#info6" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/112/112407.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Kąpiel w gorącej kawie</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-secondary">Poznaj szczegóły oferty</a>
                    </div>
                </div>
                <div class="card shadow smview lgview" style="width: 16rem;">
                <div class="inner">
                    <a href="#info7" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/33/33272.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Depilacja dyskiem twardym</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-secondary">Poznaj szczegóły oferty</a>
                    </div>
                </div>

                
        <section>
            <div>
                <div class="treatinfo1" id="info1">
                    <h1> Masaż rozgrzanym monitorem </h1>
                    <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                                <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                                <input type="time" id="inputTime1" value="--:--" max="21:00" min="08:00">
                                <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>
                    </div>
                </div>
                <div class="treatinfo2" id="info2">
                    <h1> Biczowanie kablem od myszy </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                            <input type="time" id="inputTime1" value="--:--" max="21:00" min="08:00">
                            <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>                    
                    </div>
                </div>
                <div class="treatinfo3" id="info3">
                    <h1> Peeling odłamkami płyty CD </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div>
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                            <input type="time" id="inputTime1" value="--:--">
                            <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>                    
                    </div>
                </div>
                <div class="treatinfo4" id="info4">
                    <h1> Pedicure woskiem z USB </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div>
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                            <input type="time" id="inputTime1" value="--:--" max="21:00" min="08:00">
                            <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>                    
                    </div>
                </div>
                <div class="treatinfo5" id="info5">
                    <h1> Manicure analogowo-cyfrowy </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div>
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                            <input type="time" id="inputTime1" value="--:--" max="21:00" min="08:00">
                            <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>                    
                    </div>
                </div>
                <div class="treatinfo6" id="info5">
                    <h1> Kąpiel w gorącej kawie </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div>
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                            <input type="time" id="inputTime1" value="--:--" max="21:00" min="08:00">
                            <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>                    
                    </div>
                </div>
                <div class="treatinfo7" id="info7">
                    <h1> Depilacja dyskiem twardym  </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div>
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="2020-04-27" max="2021-04-27" required>
                            <input type="time" id="inputTime1" value="--:--" max="21:00" min="08:00">
                            <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>                    
                    </div>
                </div>
            </div>

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


      const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = getInputValue;
            function getInputValue(){
                var inputVal = document.getElementById("inputDate1").value;
                console.log(inputVal);
            }
        }
 
    
 
    fragment.append(containerTreatment);
    return fragment;
};

