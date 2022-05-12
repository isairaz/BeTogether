
const Login = () => {
    return(
        
        
            <div class="wrapper fadeInDown">
            <div id="formContent">
            
        
            
            <div class="fadeIn first">
                <h2>BeTogether</h2>
            </div>
        
            
            <form class="form-log">
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"></input>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"></input>
                <input type="submit" class="fadeIn fourth" value="Log In"></input>
            </form>
        
            
            <div id="formFooter">
                <a class="underlineHover" href="#">Create an account</a>
            </div>
        
            </div>
        </div>
      
    )
}

export default Login
