// You have to creat button var and make it = to thums up button ip
// Like : var button = "u_x_x";
// that's it :D Created by Issam Haidaoui :D 
// =============INFO====================
// I set the first time Out to 3s and second one to 2s
// it only work on m.facebook on browser 
function check(button){
	var num_actor = document.getElementsByClassName('actor').length;
	var x  = num_actor-1;
	var actor = document.getElementsByClassName('actor')[x].innerHTML;
	if(actor == "Issam Haidaoui"){
		console.log('Issam Haidaoui: have the last MEssage No Send hase Done');
		setTimeout(function(){console.log("The Script Is done now we gonna lanch the Repeat 2s !!");Repeat()}, 3000)
	}
	else {
		console.log(actor+": Have the Last Message Send Has Done")
		document.getElementById(button).click()
		setTimeout(function(){console.log("The Script Is done now we gonna lanch the Repeat 2s !!");Repeat()}, 3000)
	}
}
function Repeat(){
	setTimeout(function(){console.log('Run the Script Again !!');check(button)}, 2000)
}
// ===================================================
// ^==============Function Keep running===============^
// Work on Settimeout
// function myFunction() {
//     setTimeout(function(){ alert("Hello"); }, 3000);
// }
function start1(){
	setTimeout(function(){console.log("start1 is started");start2()}, 3000)
}
function start2(){
	setTimeout(function(){console.log('start2 is here !!!');start1()}, 3000)
}
// just playing with function to make function never done nothing hard or special :P 
// i tough it will be funny 
