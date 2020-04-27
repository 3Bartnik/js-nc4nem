import $ from 'jquery';

export const oops =() => {
    //tworzenie kontenera na dane, któy renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const textInfo = $('<h1> Oops...  </h1> <br> <p> Coś poszło nie tak... </p>');
    fragment.append(textInfo);
    return fragment;
};