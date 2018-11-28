const tomElement = document.querySelector('.tom'),
	tomClickElement = document.querySelector('.tom-click'),
	oggyElement = document.querySelector('.oggy'),
	oggyClickElement = document.querySelector('.oggy-click');

let tomClickCounter = 0,
	oggyClickCounter = 0;

tomElement.addEventListener('click', () => {
	tomClickCounter += 1;

	tomClickElement.innerText = tomClickCounter;
});

oggyElement.addEventListener('click', () => {
	oggyClickCounter += 1;

	oggyClickElement.innerText = oggyClickCounter;
});