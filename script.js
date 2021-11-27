
function cleanUpIndex() {
    const contacts = document.querySelectorAll('div.contact')

    contacts.forEach(function(item) {
        item.remove();
    })
}

function createSingleIndex(object) {
	return `
		<a>
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
    const contact = document.querySelectorAll('div.contactinfo')

    contact.forEach(function(item) {
        item.remove();
    })
}

function renderView(object) {
	const div = document.querySelector("div.main")
	div.classList.add("contactinfo")
	
	for (item in object) {
		div.insertAdjacentHTML('afterbegin',createViewDivs(object[item]))
	}
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

function renderCreate() {
	const main = document.querySelector('div.main')
	main.insertAdjacentHTML('beforeend', CreateDivs())
}

