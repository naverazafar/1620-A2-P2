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


// function createSingleIndex(object) {
//     const newContact = document.querySelector('div.main')

//     newContact.insertAdjacentHTML('beforeend', object.name)
// }

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


