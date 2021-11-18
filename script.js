/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

function cleanUpIndex() {
    const contacts = document.querySelectorAll('div.contact')

    contacts.forEach(function(item) {
        item.remove();
    })
}


function createSingleIndex(object) {
    return `
        <div>
            <p>${object[0].name}</p>
        </div>
    `
}

