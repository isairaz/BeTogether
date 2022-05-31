import React, { useState } from "react"
import { Link } from "react-router-dom"
const Login = () => {
    const [pwd, setPwd] = useState('');
    const [userName, setUserName] = useState('');

    const handelSubmit = () => {

        const userSEnd = {
            password: `${pwd}`, email: `${userName}`, username: `${userName}`
        }

        fetch("https://be-together.herokuapp.com/login", {


            method: "POST",


            body: JSON.stringify(userSEnd),


            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })


            .then(response => response.json())


            .then(json => console.log(json));


        console.log(pwd, userName)
    }
    return (


        <div class="wrapper fadeInDown">
            <div id="formContent" class="login-form-content">



                <div class="fadeIn first logTogether">
                    <h2>BeTogether</h2>
                </div>


                <form class="form-log" onSubmit={handelSubmit}>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" id="login" class="fadeIn second" name="login" placeholder="username"></input>
                    <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" id="password" class="fadeIn third" name="login" placeholder="password"></input>

                    <div id="logInContainer">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                    <div id="formFooter">
                        <a class="underlineHover" href="/Register">Create an account</a>
                    </div>
                </form>


            </div>
        </div>




    )
}

export default Login
