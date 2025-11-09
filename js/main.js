window.addEventListener('DOMContentLoaded', init);

function init() {
	const body = document.querySelector('body');
	body.addEventListener('click', getNum);
}

function getNum(ev) {
	let num = Math.floor(Math.random() * 100);
	console.log(num);
	if (num % 2 === 0) {
		let hexCode = new Promise(function (resolve) {
			setTimeout(function () {
				let hex = Math.random().toString(16);
				let extracted = hex.substring(2, 8);
				let color = `#${extracted}`;
				resolve(color);
			}, 1000 + Math.random() * 1000);
		});
		hexCode
			.then(function (color) {
				const bg = document.querySelector('body');
				bg.style.backgroundColor = color;
			})
			.catch(function () {
				console.log('Error');
			});
	} else {
		let message = new Promise(function (resolve) {
			setTimeout(function () {
				let string = "isn't that odd!";
				resolve(string);
			}, 1000 + Math.random() * 1000);
		});
		message
			.then(function (string) {
				const main = document.querySelector('main');
				main.insertAdjacentHTML('beforeend', `<p>${string}</p>`);
			})
			.catch(function () {
				console.log('Error');
			});
	}
}
