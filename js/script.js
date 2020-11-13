// function chg(id) {
// var a = document.querySelector("#Face").src
// document.querySelector("#Face").src= document.querySelector(".pin1").src
// document.querySelector(".pin1").src= a


// }
// function chg2(id){
// var a = document.querySelector("#Face").src
// document.querySelector("#Face").src= document.querySelector(".pin2").src
// document.querySelector(".pin2").src= a
// }
// function chg3(id){
// var a = document.querySelector("#Face").src
// document.querySelector("#Face").src= document.querySelector(".pin3").src
// document.querySelector(".pin3").src= a


// }
// function chg4(id){
// var a = document.querySelector("#Face").src
// document.querySelector("#Face").src= document.querySelector(".pin4").src
// document.querySelector(".pin4").src= a
// }
// function chg5(id){
// var a = document.querySelector("#Face").src
// document.querySelector("#Face").src= document.querySelector(".pin5").src
// document.querySelector(".pin5").src= a


// }
// function chg6(id){
// var a = document.querySelector("#Face").src
// document.querySelector("#Face").src= document.querySelector(".pin6").src
// document.querySelector(".pin6").src= a
// }
// function hobclick(id){
	

// 	if(document.querySelectorAll("#imghob").style = "opacity: 0" ){
// 	var element = document.querySelectorAll("#imghob");
// 	element.forEach(function(element){
// 	element.style= "opacity: 1";
// 	document.querySelector(".zag1").style = "opacity: 0" 
// 	document.querySelector(".cit1").style = "opacity: 1" 
// 	})
// }
// }

// const imglist = document.querySelectorAll('.show')
// console.log(imglist)
// const showimg = () => {
// 	imglist.forEach((img)=> {img.style = "opacity: 1"})
// 	document.querySelector(".zag1").style = "opacity: 0"
// 	document.querySelector(".cit1").style = "opacity: 1"  	
// } 
// const iconhobby1 = document.getElementById('iconhobby1')
// iconhobby1.addEventListener("mouseenter",showimg)	
const imglist = document.querySelectorAll('.show')
const imglist2 = document.querySelectorAll('.show2')
const imglist3 = document.querySelectorAll('.show3')
const imglist4 = document.querySelectorAll('.show4')

  const showimg = () => {
	imglist.forEach((img)=> {img.style.opacity = "1"})
	imglist2.forEach((img)=> {img.style.opacity = "0"})
	imglist3.forEach((img)=> {img.style.opacity = "0"})
	imglist4.forEach((img)=> {img.style.opacity = "0"})
	document.querySelector(".zag1").style = "opacity: 0"
	document.querySelector(".cit1").style = "opacity: 1"
	document.querySelector(".zag2").style = "opacity: 1"
	document.querySelector(".zag4").style = "opacity: 1"
	document.querySelector(".zag3").style = "opacity: 1"
	document.querySelector(".cit2").style = "opacity: 0"
	document.querySelector(".cit22").style = "opacity: 0"
	document.querySelector(".cit3").style = "opacity: 0"  	
	document.querySelector(".cit4").style = "opacity: 0" 
}
const showimg2 = () => {
	imglist2.forEach((img)=> {img.style.opacity = "1"})
	imglist.forEach((img)=> {img.style.opacity = "0"})
	imglist3.forEach((img)=> {img.style.opacity = "0"})
	imglist4.forEach((img)=> {img.style.opacity = "0"})
	document.querySelector(".zag2").style = "opacity: 0"
	document.querySelector(".zag1").style = "opacity: 1"
	document.querySelector(".cit2").style = "opacity: 1"
	document.querySelector(".cit22").style = "opacity: 1"
	document.querySelector(".cit1").style = "opacity: 0"
	document.querySelector(".zag4").style = "opacity: 1"
	document.querySelector(".zag3").style = "opacity: 1"
	document.querySelector(".cit3").style = "opacity: 0"
	document.querySelector(".cit4").style = "opacity: 0"      
}
const showimg3 = () => {
	imglist3.forEach((img)=> {img.style.opacity = "1"})
	imglist4.forEach((img)=> {img.style.opacity = "0"})
	imglist2.forEach((img)=> {img.style.opacity = "0"})
	imglist.forEach((img)=> {img.style.opacity = "0"})
	document.querySelector(".zag3").style = "opacity: 0"
	document.querySelector(".zag1").style = "opacity: 1"
	document.querySelector(".cit1").style = "opacity: 0"
	document.querySelector(".zag2").style = "opacity: 1"
	document.querySelector(".zag4").style = "opacity: 1"
	document.querySelector(".cit2").style = "opacity: 0"
	document.querySelector(".cit22").style = "opacity: 0"  
	document.querySelector(".cit3").style = "opacity: 1"
	document.querySelector(".cit4").style = "opacity: 0" 
}
const showimg4 = () => {
	imglist4.forEach((img)=> {img.style.opacity = "1"})
	imglist3.forEach((img)=> {img.style.opacity = "0"})
	imglist2.forEach((img)=> {img.style.opacity = "0"})
	imglist.forEach((img)=> {img.style.opacity = "0"})
	document.querySelector(".zag4").style = "opacity: 0"
	document.querySelector(".zag1").style = "opacity: 1"
	document.querySelector(".cit1").style = "opacity: 0"
	document.querySelector(".zag2").style = "opacity: 1"
	document.querySelector(".zag3").style = "opacity: 1"
	document.querySelector(".cit2").style = "opacity: 0"
	document.querySelector(".cit22").style = "opacity: 0"
	document.querySelector(".cit3").style = "opacity: 0"
	document.querySelector(".cit4").style = "opacity: 1"       
}
const iconhobby1 = document.getElementById('iconhobby1')
iconhobby1.addEventListener("mouseenter",showimg ) 
const iconhobby2 = document.getElementById('iconhobby2')
iconhobby2.addEventListener("mouseenter",showimg2 )
const iconhobby3 = document.getElementById('iconhobby3')
iconhobby3.addEventListener("mouseenter",showimg3 ) 
const iconhobby4 = document.getElementById('iconhobby4')
iconhobby4.addEventListener("mouseenter",showimg4 ) 


 
 const face = document.getElementById("Face")
 const smallface = document.querySelectorAll("SmallFace")
 smallface.addEventListener("click",swap )
const swap = () => {

  smallface.src = face.src
  face.src = smallface.src
}


// function swap = () => {
// // var a = document.querySelector("#Face").src
// // document.querySelector("#Face").src= document.querySelector(".pin5").src
// // document.querySelector(".pin5").src= a
// }
// const pin = document.getElementById('SmallFace')
// pin.addEventListener("click",swap )