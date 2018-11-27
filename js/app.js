const tomElement = document.querySelector('.tom'),
	clicksElement = document.querySelector('.clicks');

let clickCounter = 0;

tomElement.addEventListener('click', () => {
	clickCounter += 1;

	clicksElement.innerText = clickCounter;
});