
const Home = () => {
    return(
        <div className="form-project-container">
            <form className="form-project">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="name" class="form-control" id="exampleInputName1"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name of the project</label>
                    <input type="name" class="form-control" id="exampleInputProjectName"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description of the project</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="project-submit">SUBMIT</button>
            </form>
        </div>
    )
}






















export default Home