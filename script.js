// create an object that stores data from form 
// when submitted confirm that entry has been saved
// create a list of states and countries
// create a list for gender
// optional: try to save to local storage




// function addRow(e){
//     e.preventDefault()

//     const data = new FormData(e.target)
    
//     const value = Object.fromEntries(data.entries())

    
//     const output = document.querySelector('.output pre')
//     output.innerText = JSON.stringify(value, null,2)
// }

// const form = document.getElementById('contactForm')

// form.addEventListener('submit', addRow)



		

		var n = 1;
		var x = 0;

		function AddRow(event){
            
            event.preventDefault()
			const show = document.getElementById('show');
			const newRow = show.insertRow(n);

			var cel1 = newRow.insertCell(0);
			var cel2 = newRow.insertCell(1);
			var cel3 = newRow.insertCell(2);
			var cel4 = newRow.insertCell(3);
            var cel5 = newRow.insertCell(4);
			var cel6 = newRow.insertCell(5);


			const firstName = document.getElementById("fName").value;
			const lastName = document.getElementById("lName").value;
			const phone = document.getElementById("phone").value;
			const email = document.getElementById("email").value;
			const streetAddress = document.getElementById("streetAddress").value;
			// const country = document.getElementById("country").value;
			const city = document.getElementById("city").value;
			const state = document.getElementById("state").value;
			const zipCode = document.getElementById("zip").value ;
			const address = streetAddress.concat(", ",city,",", state, ",",zipCode);

			
			
			const editBtn = document.createElement("button");
			editBtn.innerText = 'Edit';
			
			const deleteBtn = document.createElement("button");
			deleteBtn.innerText = 'Delete';
			
			
            

		
			cel1.innerHTML = firstName;
			cel2.innerHTML = lastName;
			cel3.innerHTML = phone;
			cel4.innerHTML = email;
            cel5.innerHTML = address;
			cel6.appendChild(editBtn)
			cel6.appendChild(deleteBtn)
			
            editBtn.addEventListener('submit', function(){
				editRow(row)
			})
            deleteBtn.addEventListener('submit', function(){
				deleteRow(row)
			})

			// n++;
			// x++;
            
		}

        const form = document.getElementById('contactForm')
        form.addEventListener('submit', AddRow)

        
		// create edit and delete button on action table header

		function editRow(row) {
			const cells = row.cells;
			const firstName = cells[0].innerHTML
			const lastName = cells[1].innerHTML
			const phone = cells[2].innerHTML
			const email = cells[3].innerHTML
			const address = cells[4].innerHTML	


			
		}

