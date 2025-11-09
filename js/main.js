/*
Step 2: 
click calls num.Random for rounded number (between 1-100?).
    - If number >50, return Promise including setTimeout, then generate random hex code (use hex code method shared in slack)
    - if number <50, return Promise including setTimeout, then return string 
    - both numbers can use the same Promise, the Promise is just to delay the result of the click generated number

Step 3: 
f(bgCol): generate hex code
    append CSS with new value for bg color
        new Promise 
            setTimeout
            .then(generate hex code)
            .then(append CSS)
            .catch(sorry no color!)

f(showString): pass in string
    append HTML with new <p> element containing string
        new Promise
            setTimeout
            .then(return string)
            .then(append HTML)
            .catch(sorry no message!)


*/

window.addEventListener('DOMContentLoaded', init);

function init() {
	const btn = document.querySelector('.btn');
	btn.addEventListener('click', getNum);
}

function getNum(ev) {
	let num = Math.floor(Math.random() * 100);
	console.log(num);
	if (num % 2 === 0) {
		return new Promise(function (resolve, reject) {
			setTimeout(resolve, 2000);
		}).then(function () {
			let hex = Math.random().toString(16);
			let extracted = hex.substring(2, 8);
			let color = `#${extracted}`;
			const bg = document.querySelector('body');
			bg.style.backgroundColor = color;
		});
	}
}
