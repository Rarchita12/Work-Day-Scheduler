//Array for each time block
var TaskDescriptionIDs = [{time: '9:00am', taskid: 'taskDescription9'}, {time: '10:00am', taskid: 'taskDescription10'}, {time: '11:00am', taskid: 'taskDescription11'}, {time: '12:00pm', taskid: 'taskDescription12'}, {time: '1:00pm', taskid: 'taskDescription1'}, {time: '2:00pm', taskid: 'taskDescription2'}, {time: '3:00pm', taskid: 'taskDescription3'}, {time: '4:00pm', taskid: 'taskDescription4'}, {time: '5:00pm', taskid: 'taskDescription5'} ];
//display current day
 $('#currentDay').append(moment(new Date()).format('dddd, MMMM Do'));
 
 //display appropriate color for each time block (past, present, future)
function colorTimeBlocks(){

for(var j =0; j<TaskDescriptionIDs.length; j++){

if(j<8){
var currentTime = moment().format('h:mma');
timeArray1 = TaskDescriptionIDs[j].time;
var position = j+1;
timeArray2 = TaskDescriptionIDs[position].time;


}
else{
  var currentTime = moment().format('h:mma');
  timeArray1 = TaskDescriptionIDs[j].time;
  timeArray2 = '6:00pm';
}

var beginningTime = moment(currentTime, 'h:mma');
var endTime = moment(timeArray1, 'h:mma');
var endTime2 = moment(timeArray2, 'h:mma');
console.log(endTime2);
if(beginningTime.isSameOrAfter(endTime) && beginningTime.isBefore(endTime2)){
  $('#' + TaskDescriptionIDs[j].taskid).addClass("present");
}
else if(beginningTime.isSameOrAfter(endTime)){
  $('#' + TaskDescriptionIDs[j].taskid).addClass("past");

}

 
else{
  $('#' + TaskDescriptionIDs[j].taskid).addClass("future");
}

}
}

var interval = setInterval(colorTimeBlocks, 1000);


//save event and save to local Storage
 function saveTask(time, description){
     $('#' + this.time);
     
  localStorage.setItem(time, description);

 }

 //eventer persist when page is refreshed
 window.onload = function() {

    console.log("here");
    for(var i =0; i<localStorage.length; i++){
        var taskDescriptionId = localStorage.key(i);
        var taskValue = localStorage.getItem(localStorage.key(i));

       $('#' + taskDescriptionId).val(taskValue);
        console.log("in");
        }
        
 }




