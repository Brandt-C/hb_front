import React from 'react';



const UserHome = () => {
    function handleChange(evt) {
        const value = evt.target.value;
        setNewpost({
            ...newpost,
            [evt.target.name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newpost);
        fetch('http://127.0.0.1:5000/api/new/post', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newpost),
        })
            .then((res) => console.log(res.json()))

    }


    const [newpost, setNewpost] = React.useState({
        userid: '',
        title: '',
        body: '',
    })
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Let's build your hood!</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-end">

                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <div className="card-body">
                            <h3>New post:</h3>
                            <h5 className="card-title">Title:<input type="text" name="title" value={newpost.title} onChange={handleChange} /></h5>
                            <p className="card-text">Body (only 250 characters or less please!):<input type="text" name="title" value={newpost.body} onChange={handleChange} /></p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">By:</li>
                            <li className="list-group-item">When:</li>
                        </ul>
                        <button type="submit" value='newpost' className="btn btn-success">Create Post</button>
                        <button type="" value='newpost' className="btn btn-primary">Pin to map</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default UserHome;