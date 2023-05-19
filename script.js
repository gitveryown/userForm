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






// let table = document.querySelector('table')




        var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
        var list5 = [];
        var list6 = [];
        var list7 = [];
        // var list8 = [];
        // var list9 = [];

		var n = 1;
		var x = 0;

		function AddRow(event){
            
            event.preventDefault()
			const AddRown = document.getElementById('show');
			const NewRow = AddRown.insertRow(n);

        

           
			list1[x] = document.getElementById("fName").value;
			list2[x] = document.getElementById("lName").value;
			list3[x] = document.getElementById("phone").value;
			list4[x] = document.getElementById("email").value;
            list5[x] = document.getElementById("address").value;
            list6[x] = document.getElementById("country").value;
            list7[x] = document.getElementById("state").value;
            // list8[x] = document.querySelector("gender").value;
            // list9[x] = document.getElementById("dob").value;

			
            var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
            var cel6 = NewRow.insertCell(5);
            var cel7 = NewRow.insertCell(6);
            // var cel8 = NewRow.insertCell(7);
            // var cel9 = NewRow.insertCell(8);
            

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];
            cel6.innerHTML = list6[x];
            cel7.innerHTML = list7[x];
            // cel8.innerHTML = list8[x];
            // cel9.innerHTML = list9[x];

			n++;
			x++;
            
		}

        // const form = document.getElementById('contactForm')
        // form.addEventListener('submit', AddRow)

        


// const table = document.getElementById('show')


function addRow(e) {
    e.preventDefault()

    const data = new FormData(e.target)
    const value = Object.fromEntries(data.entries())
    
    const key = Object.keys(value)

    const output = document.querySelector('.output pre')
    output.innerText = JSON.stringify(key, null, 2)
    // const row = output.insertRow(()=> Object.key(value))
    // console.log(row)

}

const form = document.getElementById('contactForm')

form.addEventListener('submit', addRow)