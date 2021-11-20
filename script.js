
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

function cleanUpCreate() {
	const createNew = document.querySelectorAll('div.contactedit')

	createNew.forEach(function(item) {
        item.remove();
    })
}

function renderCreate() {
	const main = document.querySelector('div.main')
	const divTemplate = '<div></div>'
	const formTemplate = '<form></form>'
	const image = '<img src="img/profile.jpg" class="profilepic" alt="Profile picture"></img>'

	main.insertAdjacentHTML('beforeend', divTemplate)

	const div = document.querySelector('div.main > div')
	div.classList.add('contactedit')

	div.insertAdjacentHTML('afterbegin', divTemplate)
	div.insertAdjacentHTML('afterbegin', divTemplate)

	const divOne = document.querySelector('div.contactedit > div')
	divOne.classList.add('contactimg')
	const divTwo = document.querySelector('div.contactedit > div + div')
	divTwo.classList.add('form')

	const imageDiv = document.querySelector('div.contactedit > div.contactimg')
	imageDiv.insertAdjacentHTML('afterbegin', image)

	const formDiv = document.querySelector('div.contactedit > div + div')
	formDiv.insertAdjacentHTML('afterbegin', formTemplate)

	const formInputs = document.querySelector('div.contactedit > div + div > form')
	formInputs.insertAdjacentHTML('afterbegin', divTemplate)
	formInputs.insertAdjacentHTML('afterbegin', divTemplate)
	formInputs.insertAdjacentHTML('afterbegin', divTemplate)
	formInputs.insertAdjacentHTML('afterbegin', divTemplate)
	formInputs.insertAdjacentHTML('afterbegin', divTemplate)
	
	const inputs = document.querySelectorAll('div.form > form > div')
	inputs.forEach(function(item) {
        item.classList.add('inputcontainer');
    })

	const name = '<input type="text" id="contactname" name="contactname" placeholder="Contact Name">'
	const phone = '<input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">'
	const address = '<input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">'
	const email = '<input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">'

	const nameButton = '<button class="extrafield" id="extranamefield" name="extranamefield">+</button>'
	const phoneButton = '<button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>'
	const addressButton = '<button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>'
	const emailButton = '<button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>'

	const buttonSave = '<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>'
	const buttonClose = '<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>'

	const nameDiv = document.querySelector('form > div')
	nameDiv.insertAdjacentHTML('afterbegin', name + nameButton)

	const phoneDiv = document.querySelector('form > div + div')
	phoneDiv.insertAdjacentHTML('afterbegin', phone + phoneButton)

	const addressDiv = document.querySelector('form > div + div + div')
	addressDiv.insertAdjacentHTML('afterbegin', address + addressButton)

	const emailDiv = document.querySelector('form > div + div + div + div')
	emailDiv.insertAdjacentHTML('afterbegin', email + emailButton)

	const button = document.querySelector('form > div + div + div + div + div')
	button.classList.add('buttons')
	button.insertAdjacentHTML('afterbegin', buttonSave+buttonClose)
	
}