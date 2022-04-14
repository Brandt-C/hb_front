import React from "react";
import './login.css';
import { useContext } from "react";
import { DataContext } from "../context/dataprovider";

const Login = () => {
    const {user, setUser} = useContext(DataContext)

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
                let usertok = data;
                setUser(usertok);
                console.log(user)
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
            <div className="row mb-3 justify-content-center">
                <form id='loginform' onSubmit={handleSubmit}>
                <h3>Login</h3>
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

