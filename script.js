/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

function cleanUpIndex() {
    const contacts = document.querySelectorAll('div.contact')

    contacts.forEach(function(item) {
        item.remove();
    })
}

function createSingleIndex(object) {
	return `
		<a>
			<div>
				<p>${object.name}</p>
			</div>
		</a>
	`
}


function renderIndex(array) {
    const div = document.querySelector("div.main")
	console.log(div.length)

	for (item in array) {
		div.insertAdjacentHTML('beforeend',createSingleIndex(array[item]))
	}

	const divOne = document.querySelectorAll("div.main > a")
	const divTwo = document.querySelectorAll("a > div")
	
	for (i=0, length = divOne.length; i<length; i++) {
		divOne[i].classList.add("contact")
	}

	for (i=0, length = divTwo.length; i<length; i++) {
		divTwo[i].classList.add("contact")
	}
		
}


function cleanUpView() {
    const contact = document.querySelectorAll('div.contactinfo')

    contact.forEach(function(item) {
        item.remove();
    })
}