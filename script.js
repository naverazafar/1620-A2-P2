

function cleanUpIndex() {
    const contacts = document.querySelectorAll('div.contact')

    contacts.forEach(function(item) {
        item.remove();
    })
}

function createSingleIndex(object) {
	return `
		<a href="index.html">
			<div class="contact">
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
}

function createViewDivs(object) {

	return `
		<div class="contactinfo contactedit">
			<div class="contactname">
				${object.name}
				<img src="img/profile.jpg" class="profilepic" alt="Profile picture""></img>
			</div>
			<div class="contactemail">email: ${object.email}</div>
			<div class="contactphone">cell: ${object.phone}</div>
			<div class="contactaddress">address: ${object.address}</div>
			<div class="buttons">
				<button class="button edit" value="Edit">Edit</button>
				<button class= "button close" value="Close">Close</button>
			</div>
		</div>
	`
}



function cleanUpView() {
    const contact = document.querySelectorAll('div.contactinfo.contactedit')

    contact.forEach(function(item) {
        item.remove();
    })
}

function renderView(object) {
	const div = document.querySelector("div.main")
	div.classList.add("contactinfo")
	
	div.insertAdjacentHTML('afterbegin',createViewDivs(object))

	const closeContact = document.querySelector('button.button.close')

	function logCloseContacts(evt) {
		evt.preventDefault()
		cleanUpView()
		renderIndex(contactList) //notworking
	}
	
	closeContact.addEventListener('click', logCloseContacts)
}

function cleanUpCreate() {
	const createNew = document.querySelectorAll('div.contactedit')

	createNew.forEach(function(item) {
        item.remove();
    })
}

function CreateDivs() {
	return `
		<div class="contactedit">
			<div class="contactimg">
				<img src="img/profile.jpg" class="profilepic" alt="Profile picture"></img>
			</div>
			<div class="form">
				<form>
					<div class="inputcontainer">
						<input type="text" id="contactname" name="contactname" placeholder="Contact Name">
						<button class="extrafield" id="extranamefield" name="extranamefield">+</button>
					</div>
					<div class="inputcontainer">
						<input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
						<button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
					</div>
					<div class="inputcontainer">
						<input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
						<button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
					</div>
					<div class="inputcontainer">
						<input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
						<button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
					</div>
					<div class="buttons">
						<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
						<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
					</div>
				</form>
			</div>

			
		</div>
	`
}

const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]


function renderCreate() {
	const main = document.querySelector('div.main')
	main.insertAdjacentHTML('beforeend', CreateDivs())
	const saveCreate = document.querySelector('button.button.save')
	const cancelCreate = document.querySelector('button.button.cancel')

	function logCancel(evt) {
		evt.preventDefault()
		cleanUpCreate()
		renderIndex(contactList)  //NOT WORKING???
	}

	function logSave(evt) {
		evt.preventDefault()
		objAdd = {
				name: document.getElementById('contactname').value,
				phone: document.getElementById('contactphone').value,
				address: document.getElementById('contactaddress').value,
				email: document.getElementById('contactemail').value
		}
		contactList.push(objAdd)
		cleanUpCreate()
		renderView(objAdd)
	}
	saveCreate.addEventListener('click', logSave)
	cancelCreate.addEventListener('click', logCancel)
}


const sidebar = document.querySelector('a.nav-home')

function logClckContacts(evt) {
	evt.preventDefault()
	cleanUpIndex()
	renderIndex(contactList)
}

sidebar.addEventListener('click', logClckContacts)

const create = document.querySelector('a.nav')

function logClckCreate(evt) {
	evt.preventDefault()
	cleanUpIndex()
	renderCreate()
}

create.addEventListener('click', logClckCreate)


const maincontacts = document.querySelector('div.main')

function logClckIndex(evt) {
	evt.preventDefault()
	const name = evt.target.innerHTML
	cleanUpIndex()

	for (item in contactList) {
		if (name == contactList[item].name) {
			renderView(contactList[item])
		}
	}
}
	
maincontacts.addEventListener('click', logClckIndex)

window.addEventListener('load', (event) => {
	renderIndex(contactList)
  })

