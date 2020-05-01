/*
// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
*/

export * from './home';  //reeksportuje wszystkie pliki w views
export * from './rooms';
export * from './bookings';
export * from './treatments';

fetch('assets/img/szef.jpg')
.then(response => {
    console.log(response);
    return response.blob();    
})
.then(blob => {
    console.log(blob);
    document.getElementById('szef').src = URL.createObjectURL(blob);
})
.catch(error => {
    console.log('error!');
    console.error(error);
});    