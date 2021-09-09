<script> var specialtiesImages={
	'Shoulder and Elbow Center':'url("https://i.imgur.com/0iH5PR2.png")',
	'Hand and Wrist Center':'url("https://i.imgur.com/xL6s4JR.png")',
	'Foot and Ankle Center':'url("https://i.imgur.com/aVLhrSQ.png")',
	'Podiatry Center':'url("https://i.imgur.com/4JCoPJa.png")',
	'Hip & Knee Center':'url("https://i.imgur.com/v11BwZp.png")',
	'Hip Preservation Center':'url("https://i.imgur.com/QT0aa8M.png")',
	'Rheumatology Center':'url("https://i.imgur.com/yi7KILZ.png")',
	'Osteoporosis Center':'url("https://i.imgur.com/cFLp3ff.png")',
	'Pain and Spine Center':'url("https://i.imgur.com/PNLSAR1.jpg")',
	'Osteoarthritis and Orthobiologics':'url("https://i.imgur.com/IryicjL.png")',
	'Sports Medicine':'url("https://i.imgur.com/B7wedxR.png")',
	'Chiropractic':'url("https://i.imgur.com/SM7o2zP.png")',
	'Physical Therapy':'url("https://i.imgur.com/mvLRqNN.png")',
	'Robotic Joint Replacement':'url("https://i.imgur.com/jvLKwQe.png")',
	'Medical Imaging':'url("https://i.imgur.com/SXJl4Qf.jpg")',
	'Laser Treatment Center':'url("https://i.imgur.com/CHXSVbz.png")',
    'Massage':'url("https://i.imgur.com/YcgmL0p.png?1")',
    'Acupuncture':'url("https://i.imgur.com/niODa13.png?1")',
}

let searchedElement=document.getElementsByClassName("menu__item_1eM menu__item--light_UNr w-nav__item menu__item--submenu_2Ot w-nav__item--submenu")
let newElements=[]
let imageElement= document.createElement('div')
for(const elements of searchedElement){
	if(elements.innerText.indexOf("Kayal Specialties Center")!==-1 && elements.parentElement.parentElement.parentElement.className.indexOf("header__burger_3P8") !== 0){
		newElements.push(elements.getElementsByTagName("div")[0].children[0].children)
		elements.getElementsByTagName("div")[0].children[0].style.overflow = "hidden"
		elements.getElementsByTagName("div")[0].children[0].style.width = "130%"
	}
}
if(newElements.length>0){
	for(const elements of newElements){
		for(const subElements of elements){
            		subElements.style.width = "100%"
			subElements.style.overflow = "visible"
			subElements.style.margin = "0"
			subElements.style.marginBottom = "5px"
			subElements.setAttribute("onmouseover", "this.style.backgroundColor='white'")
			let temp= imageElement.cloneNode(true)
			temp.style.display= "inline-block"
			temp.style.height= "32px"
			temp.style.width= "28%"
			temp.style.backgroundImage= specialtiesImages[subElements.innerText]
			temp.style.backgroundRepeat= "no-repeat"
			temp.style.height= "32px"
			//subElements.insertBefore(imageElement, subElements.children[0])
			subElements.prepend(temp)
			
			let tempSpan= temp.parentElement.getElementsByTagName("span")[0]
			tempSpan.style.display= "inline-block"
			tempSpan.style.bottom= "11px"

	    }
      
	}
}
newElements=null
  </script>
