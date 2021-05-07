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
	'Osteoarthritis and Orthobiologics Center':'',
	'Sports Medicine':'',
	'Chiropractic':'',
	'Physical Therapy':'',
	'Robotic Joint Replacement Center':'',
	'Medical Imaging':'',
	'Laser Treatment Center':'',
}


var searchedElement=document.getElementsByClassName("menu__item_1eM menu__item--light_UNr w-nav__item menu__item--submenu_2Ot w-nav__item--submenu")
var newElements=[]
for(const elements of searchedElement){
	if(elements.innerText.indexOf("SPECIALTIES")!==-1){
		newElements.push(elements.getElementsByTagName("div")[0].children[0].children)
	}
}
for(const elements of newElements){
	for(const subElements of elements){
		subElements.style.listStyle= 'square inside '+ specialtiesImages[subElements.innerText];
		subElements.getElementsByTagName("span")[0].style.display= "inline-block"
		subElements.getElementsByTagName("span")[0].style.lineHeight= "300%""
}
