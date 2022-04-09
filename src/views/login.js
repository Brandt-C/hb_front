




const Login = () => {

    let pass = '';
    let uname = '';
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Username:</label>
                <input type="email" {...uname} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" {...pass} />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;

