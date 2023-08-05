$(document).ready(function(){

  const currentTime = dayjs().format('HH');

  const timeShown = dayjs().format ('h a')
  

  $(".saveBtn").click(function() {

    const theTime = $(this).parent('.time-block').attr("id");
    const siblingValue = $(this).siblings('.description').val();

    localStorage.setItem(theTime, JSON.stringify(siblingValue));
    
  });
  $(".time-block").each(function() {

    const id = $(this).attr('id');
    const myClass = $(this);
    

    if (id == currentTime) {
      $(myClass).addClass("present");
    } else if (id < currentTime) {
      $(myClass).addClass("past");
    } else {
      $(myClass).addClass("future");
    };

    if (id == localStorage.key) {
      document.id.children("description").innerHTML = localStorage.key.val();
    };

   });
 
  
function updatingTime() {
  
  document.getElementById('currentDay').innerHTML = timeShown;

};
setInterval(updatingTime, 1000);



});

