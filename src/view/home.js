import $ from 'jquery';
//import treatments from './treatments.js';


export const home =() => {
    //tworzenie kontenera na dane, który renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const homePage= $(`
<section>
    <div class="container-fluid homePage"> 
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class= "col-12">
                        <div class="text-container">
                            <h1> <strong>Jedyne i niepowtarzalne SPA, którego długo nie zapomnisz </strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</section>
<section>
    <div class="jumbotron jumbotron-fluid demo">
        <div class="container">
            <h1 class="display-4">Witaj Programisto!</h1>
            <p class="lead">Dopadła Cię ciemna strona kodowania? Chciałbyś wreszcie trochę odsapnąć? </p>
            <p class="lead">Zdajemy sobie sprawę jak wiele wysiłku i energii pochłaniają poszczególne programistyczne przedsięwzięcia. Pozwól, że profesjonalnie zajmiemy się Twoją skatowaną duszą i ciałem.</p>
            <p class="lead"> Zapoznaj się z naszą poniższą ofertą. Jesteśmy przekonani, że oferowane zabiegi spełnią Twojej oczekiwania.</p>
        </div>
    </div>
</section>

<section>
        <div class="container-fluid no-padding">
            <div class="jumbotron jumbotron-fluid ">
                <div class="container ">
                    <div class="row">
                        <div class= "col-sm-6">
                            <div class="container no-padding">
                                <h1 class="display-4"> Oferujemy niestandardowe rozwiązania dla naszych wyjątkowych klientów</h1>
                            </div>
                        </div>
                        <div class= "col-sm-6">
                            <div class="image-container h-image">
                                <img class="img-fluid" id="szef" src="https://image.freepik.com/darmowe-zdjecie/usmiechniety-ufny-bizneswoman-pozuje-z-rekami-skladac_1262-20950.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div class= "col-sm-6">
                            <p class="lead">Jeżeli szukasz standardowej oferty zabiegów, niestety musimy Cię zmartwić. U nas jej nie doświadczysz. </p>
                            <p class="lead"> Zerknij proszę na naszą ofertę, gdyż może któraś z opcji Cię zaintryguje i zapragniesz jej doświadczyć osobiście. </p>
                    </div>
                </div>
            </div>
        </div>
</section>
    `)
  
   fragment.append(homePage);
    return fragment;
    
};

/* fetch("./assets/img/szef.jpg").then(response => {
      console.log(response);
      return response.blob();
    }).then(data => {
        console.log(data);
       
    }); */

/* fetch("./assets/img/szef.jpg").then(response => {
    console.log(response);
    return response.blob();
    
}).then(blob => {{
    console.log(blob);
    const {image} = blob;
    console.log(image);
    
    document.getElementById('szef').src= URL.createObjectURL(blob);
}}); */