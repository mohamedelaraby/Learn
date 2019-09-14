
// [ $ ] :- sympol for jquery
// [ ("p") ] :- HTML Element
// [ hide() ] :- applied attributes

 $(function(){

//Animation
$('.blue-box').animate({
    marginLeft : "+=300px",
    opacity : '0',
    width : '50px',
    height : '50px',
    marginTop: '25px'
}, 1000, "linear");

$("p").animate({
    fontSize : '18px',
    opacity : '30',
    textAlign : 'center',

}, 1000)



/*
$('.green-box').animate({
 "margin-left" : "+=200px",
 'opacity' : '0'
}, 2000,"linear");

$(".green-box").animate({
    "margin-left": "-=200px",
    'opacity' : '100'
}, 2000, "linear");


$('.red-box').animate({
'margin-left' : '+=100px',
'opacity' : '0'
}, 1000,"linear");

$(".red-box").animate({
    "margin-left": "-=100px",
    'opacity' : '100'
     }, 1000, "linear");

*/


 });