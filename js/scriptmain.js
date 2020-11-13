const imglist = document.querySelectorAll('.show')
const face = document.getElementById('Face')
const swap = (event) => {
	console.log(event.target.src)
	const faceSrc = face.src
	face.src = event.target.src 
	event.target.src = faceSrc
	
}
const swaping = document.querySelectorAll('#SmallFace')
console.log(swaping)
swaping.forEach((img)=> {img.addEventListener('click',swap)})
// swaping.addEventListener("click",swap)