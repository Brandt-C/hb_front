



const UserHome = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Let's build your hood!</h1>
            </div>
            <div className="row justify-content-end">
                <div className="card" style={{width: 18 + 'rem'}}>
                    <div className="card-body">
                        <h3>New post:</h3>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">By:</li>
                        <li className="list-group-item">When: </li>
                    </ul>
                    <button type="submit" value='newpost' className="btn btn-success">Create Post</button>

                </div>
            </div>
        </div>
    );
}

export default UserHome;