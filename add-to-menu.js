window.addEventListener('load', function() {
var listDiv =document.getElementsByClassName('menu__item_1eM w-nav__item menu__item--submenu_2Ot w-nav__item--submenu')[7]
var div = document.createElement('div')
div.innerHTML = document.getElementById('blockOfStuff').innerHTML
listDiv.appendChild(div)
})
