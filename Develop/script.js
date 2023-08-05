$(document).ready(function(){

  const currentTime = dayjs().format('H');


  const timeShown = dayjs().format ('dddd, MMMM D, h a')
  

  $(".saveBtn").click(function() {

    const theTime = $(this).parent('.time-block').attr("id");
    const siblingValue = $(this).siblings('.description').val();

    localStorage.setItem(theTime, siblingValue);
    
  });
  $(".time-block").each(function() {
    
    const id = $(this).attr('id');
    const myClass = $(this);
    
    

    if (currentTime == id) {
      $(myClass).addClass('present');
    } 
    else if (currentTime > id) {
      $(myClass).addClass('past');
    } 
    else if (currentTime < id) {
      $(myClass).addClass('future');
    };
    
    $(this).children('.description').val(localStorage.getItem(id));
   });
 
  
function updatingTime() {
  
  document.getElementById('currentDay').innerHTML = timeShown;

};
setInterval(updatingTime, 1000);



});

