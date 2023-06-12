const form = document.querySelector('#contactForm')

const arr = []
const index = 0



function handleForm (e){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    
    arr.push(dataObj)
    
}

form.addEventListener('submit', handleForm)

//no duplicates 
// add address includes street name, city, state, zip 
// add phone number 