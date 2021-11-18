/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

function cleanUpIndex() {
    const contacts = document.querySelectorAll('div.contact')

    contacts.forEach(function(item) {
        item.remove();
    })
}



// const contactList = [  
// 	{ 
// 		name: "Oliver Queen", 
// 		phone: "778-555-1234", 
// 		address: "101 Main St, Star City, USA",    
// 		email: "greenarrow@watchtower.com",  
// 	},   
// 	{    
// 		name: "Jessica Cruz",    
// 		phone: "123-555-5555",    
// 		address: "Portland Oregon",    
// 		email: "greenlantern@watchtower.com",  
// 	}
// ]

// function createSingleIndex(object) {
//     const newContact = document.querySelector('.main')

//     console.log(newContact.insertAdjacentHTML('afterend', object.name))
// }

// createSingleIndex(contactList)