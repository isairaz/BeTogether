import postUser from '../RegisterDb'
import ValidEmail from '../ValidEmail'
import ValidPassword from '../ValidPassword'
import ValidCreateAccount from '../ValidCreateAccount'

const Register = () => {
    return(
        
        
            <div class="wrapper fadeInDown">
            <div id="formContent">
            
        
            
            <div class="fadeIn first">
                <h2>BeTogether</h2>
            </div>
        
            
            <form class="form-log">
                <input onKeyUp={ValidCreateAccount} type="text" id="login" class="fadeIn second first-name-input" name="name" placeholder="First name"></input>
                <input type="text" id="text" class="fadeIn third last-name-input" name="login" placeholder="Last name"></input>
                <input onKeyUp={ValidEmail} type="email" id="email" class="fadeIn third"  placeholder="Email"></input>
                <input onKeyUp={ValidPassword} class="password-input" type="password" placeholder="Password"></input>
                <input onKeyUp={ValidPassword} class="password-input" type="password" className ="confirm-password-input" placeholder="Confirm Password"></input>
                <a onClick={postUser} class="isDisabled" href="/Login" id="logIn">Create Account</a>
            </form>


            <div id="formFooter">
                <a class="underlineHover" href="/">Log in</a>
            </div>
        
            </div>
        </div>

      
    )
}


export default Register