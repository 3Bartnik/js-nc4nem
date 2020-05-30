/* const startDate = document.getElementsByClassName('checkinDate');
for (let i=0; i < startDate.length; i++){
    console.log("startDate:", startDate); 

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }; 
        if(mm<10){
            mm='0'+mm
        };
      today = yyyy+'-'+mm+'-'+dd; 
      startDate.attr("min",today);
      console.log("startDate", startDate);
};
const checkoutDates = document.getElementsByClassName('checkoutDate');
for (let i=0; i < startDate.length; i++){
  const checkoutDate = checkoutDates[i];
      var yesterday = new Date()+1;
      var dd = yesterday.getDate();
      var mm = yesterday.getMonth()+2; //January is 0!
      var yyyy = yesterday.getFullYear();
       if(dd<10){
            dd='0'+dd
        }; 
        if(mm<10){
            mm='0'+mm
        };
      yesterday = yyyy+'-'+mm+'-'+dd; 
      checkoutDate.attr("min",yesterday);
};
 */

  const startDate = $('.checkinDate');
  startDate.each(function(){

  /* for (let i=0; i < startDate.length; i++){
    console.log("startDate:", startDate);  */
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }; 
        if(mm<10){
            mm='0'+mm
        };
      today = yyyy+'-'+mm+'-'+dd; 
        //startDate.attr("min",today);
        startDate.attr("min",today);
      console.log("startDate", startDate);
  });
