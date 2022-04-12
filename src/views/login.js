



const Login = () => {

    let pass = '';
    let uname = '';
    return (
        <div className="container">
        <form>
            <div className="mb-3">
                <label className="form-label">Username:</label>
                <input type="text" {...uname} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" {...pass} />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       
        </div>
    );
}

export default Login;

