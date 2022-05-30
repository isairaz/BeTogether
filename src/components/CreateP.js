import postUser from '../RegisterDb'
import ValidEmail from '../ValidEmail'
import ValidPassword from '../ValidPassword'
import ValidCreateAccount from '../ValidCreateAccount'


const CreateP = () => {
    return(
        
        
            <div className="wrapper fadeInDown">
            <div id="formContent">
            
        
            
            <div className="fadeIn first">
                <h2>BeTogether</h2>
            </div>
        
            
            <form className="form-log">
                <input onKeyUp={ValidCreateAccount} type="text" id="login" className="fadeIn second first-name-input" name="name" placeholder="Name"></input>
                <input onKeyUp={ValidCreateAccount} type="text" id="login" className="fadeIn second first-name-input" name="name" placeholder="Project Name"></input>
                <textarea type="text" id="text" className="fadeIn third last-name-input" name="login" placeholder="Description"></textarea> <br></br>
                <a onClick={postUser} className="isDisabled" href="/Login" id="logIn">Post</a>
            </form>


            <div id="formFooter">
                <a className="underlineHover" href="/">Log in</a>
            </div>
        
            </div>
        </div>

      
    )
}

export default CreateP;