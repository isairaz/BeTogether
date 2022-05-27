
const postUser = () => {
	
	alert("hello")
		fetch("https://be-together.herokuapp.com/user", {
	

			method: "POST",
	
			
			body: JSON.stringify({
				"password": document.querySelector('.password-input').value,
				"email": document.querySelector('#email').value,
				"first_name": document.querySelector('.first-name-input').value,
				"last_name": document.querySelector('.last-name-input').value,
				"is_coach": false
			}),
			
			
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		
		
		.then(response => response.json())
		
		
		.then(json => console.log(json));
	
		
	}
	
	

export default postUser

