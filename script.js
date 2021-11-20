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

contact = {    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
}

function createDiv(object) {
	return `
		<div>${object}</div>
	`
}


function cleanUpView() {
    const contact = document.querySelectorAll('div.contactinfo')

    contact.forEach(function(item) {
        item.remove();
    })
}

function renderView(object) {
	const div = document.querySelector("div.main")
	div.classList.add("contactinfo", "contactedit")
	const image = '<img src="img/profile.jpg"></img>'
	const buttonedit = '<button>Edit</button>'
	const buttonclose = '<button>Close</button>'

	div.insertAdjacentHTML('afterbegin', createDiv(buttonedit + buttonclose))
	div.insertAdjacentHTML('afterbegin', createDiv(object.address))
	div.insertAdjacentHTML('afterbegin', createDiv(object.phone))
	div.insertAdjacentHTML('afterbegin', createDiv(object.email))
	div.insertAdjacentHTML('afterbegin', createDiv(object.name + image))
	

	const name = document.querySelector('div.main > div')
	name.classList.add('contactname')

	const pic = document.querySelector('div.main > div > img')
	pic.classList.add('profilepic')

	const email = document.querySelector('div.main > div + div')
	email.classList.add('contactemail')
	
	const phone = document.querySelector('div.main > div + div + div')
	phone.classList.add('contactphone')

	const address = document.querySelector('div.main > div + div + div + div')
	address.classList.add('contactaddress')

	const buttons = document.querySelector('div.main > div + div + div + div + div')
	buttons.classList.add('buttons')

	const buttonOne = document.querySelector('div.main > div + div + div + div + div > button')
	buttonOne.classList.add('button', 'edit')

	const buttonTwo = document.querySelector('div.main > div + div + div + div + div > button + button')
	buttonTwo.classList.add('button', 'close')

}

// cleanUpView()
renderView(contact)
console.log(contact)