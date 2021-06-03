window.addEventListener('load', function() {
var listDiv =document.getElementsByClassName('menu__item_1eM w-nav__item menu__item--submenu_2Ot w-nav__item--submenu')[7]
var listDiv2 =document.getElementsByClassName('menu__item_1eM w-nav__item menu__item--submenu_2Ot w-nav__item--submenu')[1]
var div = document.createElement('div')
div.innerHTML = document.getElementById('blockOfStuff').innerHTML
var div2 = div.clone(true)
listDiv.appendChild(div)
listDiv2.appendChild(div2)
})
