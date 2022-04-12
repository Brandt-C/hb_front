import React from "react";


const Login = () => {
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        fetch('http://127.0.0.1:5000/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        })
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {
                let user = data;
                console.log(user);
                return user
            })

    }
    const [state, setState] = React.useState({
        username: '',
        userpass: '',
        userid: '',
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Username:</label>
                        <input type="text" name="username" value={state.username} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" name="userpass" value={state.userpass} onChange={handleChange} />
                    </div>
                    <button type="submit" value='login' className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

