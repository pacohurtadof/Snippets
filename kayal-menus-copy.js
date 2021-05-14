var specialtiesImages={
	'Shoulder and Elbow Center':'url("https://repuso.com/assets/5295d87e2b054627535c8aefd86cc91d.png")',
	'Hand and Wrist Center':'url("https://repuso.com/assets/5295d87e2b054627535c8aefd86cc91d.png")',
	'Foot and Ankle Center':'',
	'Podiatry Center':'',
	'Hip & Knee Center':'',
	'Hip Preservation Center':'',
	'Rheumatology Center':'',
	'Osteoporosis Center':'',
	'Pain and Spine Center':'',
	'Osteoarthritis and Orthobiologics Center':'url("https://repuso.com/assets/5295d87e2b054627535c8aefd86cc91d.png")',
	'Sports Medicine':'',
	'Chiropractic':'',
	'Physical Therapy':'',
	'Robotic Joint Replacement Center':'',
	'Medical Imaging':'',
	'Laser Treatment Center':'',
}


let searchedElement=document.getElementsByClassName("menu__item_1eM menu__item--light_UNr w-nav__item menu__item--submenu_2Ot w-nav__item--submenu")
let newElements=[]
let imageElement= document.createElement('div')
for(const elements of searchedElement){
	if(elements.innerText.indexOf("SPECIALTIES")!==-1 && elements.parentElement.parentElement.parentElement.className.indexOf("header__burger_3P8") !== 0){
		newElements.push(elements.getElementsByTagName("div")[0].children[0].children)
	}
}
if(newElements.length>0){
	for(const elements of newElements){
		for(const subElements of elements){
		
			let temp= imageElement.cloneNode(true)
			temp.style.display= "inline-block"
			temp.style.height= "39px"
			temp.style.width= "23%"
			temp.style.backgroundImage= specialtiesImages[subElements.innerText]
			temp.style.backgroundRepeat= "no-repeat"
			temp.style.height= "39px"
			console.log(imageElement)
			//subElements.insertBefore(imageElement, subElements.children[0])
			subElements.prepend(temp)

	}
	}
}
newElements=null
