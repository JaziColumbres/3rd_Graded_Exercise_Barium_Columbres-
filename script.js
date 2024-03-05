var x=Math.random()*1000;
x=x.toFixed(0);

var hundreds=Math.floor(x/100)*100;
var tens=Math.floor((x%100)/10)*10;
var ones=x%10;
var d=new Date();

document.getElementById("generate").innerHTML="Randomly generated number: "+x+"<br>Breakdown: "+hundreds+", "+tens+", "+ones+"<br>Date of printing: "+d;