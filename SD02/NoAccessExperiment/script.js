// // Working here: when typoing letters alert pops up

// const triggerWords = ['dad', 'works'];
// var typingKeys = [];

// document.getElementsByTagName('body')[0].onkeyup = function(e) { 
//    var ev = e || window.event;

   
//     if (ev.keyCode == 68) {
//         typingKeys.push('d'); 
//     } 
//     if (ev.keyCode == 65){
//     typingKeys.push('a');
// }   
//         console.log(typingKeys);
//     // }

// //    if(ev.keyCode == 68) {// && ev.ctrlKey === true) { //control+f
//     if (typingKeys.length == 3){
//                 alert('not found');
//     }     
// }   


// / Up to here


// $('#input').keyup(()=>{
//     if($('#input').val() == "dad"){
//       alert("no value");
//     } else{
//       $('#input').css({backgroundColor: 'your-color'});
//     }
//   });
// document.body.style.backgroundColor = "green";

$( document ).ready(function() {
    var triggerWords = ['dad', 'father','workshop','workshops', 'tools', 'tool', 'drill', 'coding', 'electronics', 'circuit', 'wood', 'guidance', 'hammer'];
    $(document).on('keyup', 'input', function() {
        for (var i = 0; i < triggerWords.length; i++) {
            if ($(this).val().toLowerCase().indexOf(triggerWords[i]) != -1) {
                document.body.style.backgroundColor = "red";
                var alertMsg ="Warning. You don't have access"
                setTimeout(function(){alert(alertMsg)},10);
                // alert("Warning. You don't have access");
                
               
               if (window.confirm('OK'))
{ 
   document.getElementById("myInput").value = "";
   setTimeout(function(){document.body.style.backgroundColor = "#97ECAE"},100);
}
               
               
                
            }
        }
    });
    
    // $('button').click(function() {
    //     var new_input = $('<input>');
    //     new_input.insertAfter($(this));
    // });
    
    
});

// When data is inputted into the element, trigger a callback function
// document.getElementById("input").addEventListener("input", function(){
//     // Check the value of the element
//     if(input.value == "dad"){
//       alert("no value");
//     }else{
//       input.style.background = "blue";
//     }
//   });
