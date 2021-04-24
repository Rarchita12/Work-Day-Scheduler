


 $('#currentDay').append(moment(new Date()).format('dddd, MMMM Do'));


 function saveTask(time, description){
     $('#' + this.time);
     
  localStorage.setItem(time, description);
//test();
 }

 //var taskDescriptionId = "" + this.localStorage.key(0);
 window.onload = function() {

    console.log("here");
    for(var i =0; i<localStorage.length; i++){
        var taskDescriptionId = localStorage.key(i);
        var taskValue = localStorage.getItem(localStorage.key(i));

       $('#' + taskDescriptionId).val(taskValue);
        console.log("in");
        }
        
 }

 function test(){
   // $('#' + localStorage.key(0)).html("This is a test ");
   $('#' + this.time);
   $('#taskDescription9').val("This is a test");
     

 }