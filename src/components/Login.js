import { Link } from "react-router-dom"
const Login = () => {
    return(
        
        
        <div class="wrapper fadeInDown">
            <div id="formContent" class="login-form-content">
            
        
            
            <div class="fadeIn first">
                <h2>BeTogether</h2>
            </div>
        
            
            <form class="form-log">
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="username"></input>
                <input type="password" id="password" class="fadeIn third" name="login" placeholder="password"></input>
            </form>
        
            <div id="logInContainer">
                <a id="logIN" href="/Exercice">Log In</a>
            </div>
            <div id="formFooter">
                <a class="underlineHover" href="/Register">Create an account</a>
            </div>
        
            </div>
        </div>

        

      
    )
}

export default Login
