const ValidEmail = (email) => {
		// console.log(email)
		let e = email.target.value

		// don't remember from where i copied this code, but this works.
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		console.log(re.test(email))
		if ( re.test(e)) {
			document.querySelector('#email').style.backgroundColor = "white"

		}
        else {
            document.querySelector('#email').style.backgroundColor = "red"
			// console.log(document.querySelector('#email').value)
        }
		
	}

    export default ValidEmail