import React from "react";




const RegForm = () => {

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    // This needs a redirect/form clear/ some kind of work to finish it off
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        fetch('http://127.0.0.1:5000/api/reg', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        })
            .then((res) => console.log(res.json()))

    }

    const [state, setState] = React.useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        userpass: ''
    })
    return (
        <div className="container">
            <h3>Register new user:</h3>
            <div className="row mb-3 justify-content-center">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Username:</label>
                        <input type="text" name="username" value={state.username} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" name="userpass" value={state.userpass} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">First Name:</label>
                        <input type="text" name="first_name" value={state.first_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last name:</label>
                        <input type="text" name="last_name" value={state.last_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" value={state.email} onChange={handleChange} />
                    </div>

                    <button type="submit" value='newreg' className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}




export default RegForm;