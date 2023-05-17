// create an object that stores data from form 
// when submitted confirm that entry has been saved
// create a list of states and countries
// create a list for gender
// optional: try to save to local storage

// const form = document.getElementById('contact-form');


function handleSubmit(e){
    e.preventDefault()

    const data = new FormData(e.target)
    
    const value = Object.fromEntries(data.entries())

    
    const output = document.querySelector('.output pre')
    output.innerText = JSON.stringify(value, null,2)
}

const form = document.getElementById('contactForm')
form.addEventListener('submit', handleSubmit,)

