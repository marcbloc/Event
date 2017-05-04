var list = document.getElementById('list'),
add = document.getElementById('addElem'),
linumber = document.getElementsByTagName('li');
add.addEventListener('click', function() {
	list.innerHTML += '<li>item' + linumber.length +'</li>'
});
