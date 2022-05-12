
const Home = () => {
    return(
        <div className="container">

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">First name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Example : Jean-Poutre"></input>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">Last name</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Example : Le Poutrier"></input>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">Name of the project</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Example : BeTogether"></input>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlTextarea4" className="form-label">Description of the project</label>
                <textarea className="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
            </div>

            <div className="mb-3">
                <input type="submit" value="Submit"></input>
            </div>
            

        </div>

    // <form>
    //             <div class="mb-3">
    //                 <label for="exampleInputEmail1" class="form-label">Email address</label>
    //                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    //                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    //             </div>
    //             <div class="mb-3">
    //                 <label for="exampleInputPassword1" class="form-label">Password</label>
    //                 <input type="password" class="form-control" id="exampleInputPassword1"></input>
    //             </div>
    //             <div class="mb-3 form-check">
    //                 <input type="checkbox" class="form-check-input" id="exampleCheck1">
    //                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
    //             </div>
    //             <button type="submit" class="btn btn-primary">Submit</button>
    // </form>
    )
}






















export default Home