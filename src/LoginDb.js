
const getUser = () => {
	
	
    fetch("https://be-together.herokuapp.com/login", {


        method: "POST",

        
        body: JSON.stringify({
            "password": document.querySelector('.password-input').value,
       
            "username": document.querySelector('.first-name-input').value,
   
     
        }),
        
        
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    
    
    .then(response => response.json())
    
    
    .then(json => console.log(json));

    
}



export default getUser;

