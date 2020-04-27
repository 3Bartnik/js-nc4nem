import $ from 'jquery';
//import {toggleClass} from './function.js';

//var start = Date.now();



export const rooms =() => {
    //tworzenie kontenera na dane, który renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const containerRoom= $(`
    <div class="container-fluid"> 
        <div class="row justify-content-center">
            <div class="col-6 header">
                <h1 class="display-4">Zapoznaj się z ofertą dostępnych pokojów</h1>
            </div>
        </div>
    <div class="row justify-content-center">
        <div class="col-6 room-padding">
            <div class="card shadow roomCard">
                <img src="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183__480.jpg" class="rounded img-top" alt="Obraz Photo Mix z Pixabay" width="100%" height="380px"/>
            </div>
            <div>
                <button type="button" id="btn1" class="btn btn-secondary btn-sm btn-block btn-padding" data-toggle="button" aria-pressed="false" autocomplete="off"> Sprawdź szczegóły </button>
                <div class="room1">
                    <p> Pokój jednoosobowy<br> ilość łóżek: 1 <br> ilość gości: 1  <br> cena: 170,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p>
                    <button class="btn btn-secondary btn-sm btn-hide"> Sprawdź dostępność pokoju </button> 
                    <div class="style-rounded">
                        <label for="start"> Planowana data przyjazdu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="" max="" requred> 
                        <div>
                            <label for="end"> Planowana data wyjazdu:  </label>
                            <input type="date" id="inputDate2" value="dd.mm.rrrr" requred>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6 room-padding">
            <div class="card shadow roomCard">
                <img class="rounded img-top" src="https://image.freepik.com/darmowe-psd/nowoczesna-sypialnia-lub-pokoj-hotelowy-z-podwojnym-lozkiem-i-eleganckimi-meblami_176382-210.jpg" alt="" width="100%" height="380px" />
            </div>
                <button type="button" id="btn2" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły </button>
                <div class="room2">
                    <p> Pokój dwuosobowy<br> ilość łóżek: 1 podwójne <br> ilość gości: 2  <br> cena: 240,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p>
                    <button class="btn btn-secondary btn-sm btn-hide"> Sprawdź dostępność pokoju </button> 
                    <div class="style-rounded">
                        <label for="start"> Planowana data przyjazdu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="" max="" requred> 
                        <div>
                            <label for="end"> Planowana data wyjazdu:  </label>
                            <input type="date" id="inputDate2" value="dd.mm.rrrr" requred>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>
                    </div>

                </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6 room-padding">
            <div class="card shadow roomCard">
                <img class="rounded img-top" src="https://image.freepik.com/darmowe-zdjecie/pokoj-hotelowy_23-2148095366.jpg" alt="" width="100%" height="auto" />
            </div>
                <button type="button"id="btn3" class="btn btn-secondary btn-sm btn-block btnHide" id="onClick"> Sprawdź szczegóły </button>
                <div class="room3">
                    <p> Pokój trzyosobowy<br> ilość łóżek: 1 podwójne, 1 pojedyncze <br> ilość gości: 3  <br> cena: 290,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p>
                    <button class="btn btn-secondary btn-sm btn-hide"> Sprawdź dostępność pokoju </button> 
                    <div class="style-rounded">
                        <label for="start"> Planowana data przyjazdu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="" max="" requred> 
                        <div>
                            <label for="end"> Planowana data wyjazdu:  </label>
                            <input type="date" id="inputDate2" value="dd.mm.rrrr" requred>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>
                    </div>

                </div>
        </div>
        <div class="col-6 room-padding">
            <div class="card shadow roomCard">
                <img class="rounded" src="https://cdn.pixabay.com/photo/2019/12/16/15/43/room-4699578_1280.jpg" alt="" width="100%" height="auto" />
            </div>
                <button id="btn4" type="button" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły </button>
                <div class="room4">
                    <p> Pokój czteroosobowy<br> ilość łóżek: 2 podwójne <br> ilość gości: 4  <br> cena: 340,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p>
                    <button class="btn btn-secondary btn-sm btn-hide"> Sprawdź dostępność pokoju </button> 
                    <div class="style-rounded">
                        <label for="start"> Planowana data przyjazdu:</label>
                            <input type="date" id="inputDate1" value="dd.mm.rrrr" min="" max="" requred> 
                        <div>
                            <label for="end"> Planowana data wyjazdu:  </label>
                            <input type="date" id="inputDate2" value="dd.mm.rrrr" requred>
                        </div>
                        <div id="showTime">
                            <button type="submit"> Zarezerwuj </button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
      
    `);

/*
    const btn1 = $('<button  type="button" id="btn1" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły</button>');
    btn1.on('click', toggleClass);
    function toggleClass(){
      console.log(toggle);
        //$(".room1").toggleClass("my-class");
        }
*/



$(document).ready(function(){
    $("#btn1").click(function(){
        var room1 = document.getElementsByClassName("room1");
      $(room1).toggle(1000);
    });
    $("#btn2").click(function(){
        var room2 = document.getElementsByClassName("room2");
      $(room2).toggle(1000);
    });
    $("#btn3").click(function(){
        var room3 = document.getElementsByClassName("room3");
        $(room3).toggle(1000);
    });
    $("#btn4").click(function(){
            var room4 = document.getElementsByClassName("room4");
        $(room4).toggle(1000);
    });
});


    fragment.append(containerRoom); 
    return fragment;


};


