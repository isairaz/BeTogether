import { useState, useContext } from "react"
import { UserSession } from "../App"

import { Link } from "react-router-dom"
const Login = () => {

    const UserContext = useContext(UserSession)
    const [inputValues, setInputValues] = useState({username: "", password: ""})


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({...inputValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://be-together.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify({
            "password": inputValues.password,
            "username": inputValues.username,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        UserContext.setUserData(prevUserData => {return{...prevUserData, username: inputValues.username, token: data.token, isLoggedIn: true} })
        localStorage.setItem("userSession", JSON.stringify({username: inputValues.username, token: data.token, isLoggedIn: true}))
    });
    }
    return(
        
        
        <div class="wrapper fadeInDown">
            <div id="formContent" class="login-form-content">
            
        
            
            <div class="fadeIn first logTogether">
                <h2>BeTogether</h2>
            </div>
        
            
            <form class="form-log" onSubmit={handleSubmit}>
                <input type="text" id="login" class="fadeIn second" name="username" placeholder="username" value={inputValues.username} onChange={handleChange}></input>
                <input type="password" id="password" class="fadeIn third" name="password" placeholder="password" value={inputValues.password} onChange={handleChange}></input>
                <button id="logIN" >Log In</button>
            </form>
        
            
            <div id="formFooter">
                <a class="underlineHover" href="/Register">Create an account</a>
            </div>
        
            </div>
        </div>

        

      
    )
}

export default Login
