import axios from 'axios';
import React, { useContext, useState } from 'react';
import './userhome.css';
import { DataContext } from '../context/dataprovider';


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
            .then((response) => console.log(response))

    }

    const { user } = useContext(DataContext)
    const [newpost, setNewpost] = React.useState({
        userid: user.userid,
        title: '',
        body: '',
    })


    const getPosts = async () => {
        let response = await axios.get('http://127.0.0.1:5000/api/posts/' + user.userid);
        return response.status === 200 ? response.data : null
    }

    const loadPosts = async () => {
        let data = await getPosts();
        console.log(data, typeof data)
        setPosts(data)
    }

    const [posts, setPosts] = useState(() => loadPosts());

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Let's build your hood!</h1>
            </div>
            <div className="row justify-content-center">
                <iframe id='mapframe' title='OSMmapframe' width="300" height="350" frameBorder="1" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-87.77818679809572%2C41.83171182161546%2C-87.55159378051758%2C41.94442556628153&amp;layer=mapnik&amp;marker=41.888093552297654%2C-87.66489028930664" style={{ border: 1 }}></iframe><br /><small><a href="https://www.openstreetmap.org/?mlat=41.8881&amp;mlon=-87.6649#map=13/41.8881/-87.6649">View Larger Map @ OpenStreetMap</a></small>
            </div>
            <div className="row justify-content-center">
                {typeof posts === 'object' && !posts.then ? posts['postdic'].map((post, index) => {
                    return <>
                        <div className="card" style={{ width: 18 + 'rem' }}>
                            <div key={index} className="card-body">
                                <h5 className="card-title"><b>{post.title}</b></h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{user.username}</li>
                                <li className="list-group-item">{post.timestamp}</li>
                            </ul>
                        </div>
                    </>
                }) :
                    <p>loading posts. . . </p>
                }
            </div>
            <form >
                <div className="row justify-content-start">
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <div className="card-body">
                            <h3>New post:</h3>
                            <h5 className="card-title">Title:<input type="text" name="title" value={newpost.title} onChange={handleChange} /></h5>
                            <p className="card-text">Body (only 250 characters or less please!):<textarea type="text" name="body" value={newpost.body} onChange={handleChange} /></p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">By:</li>
                            <li className="list-group-item">When:</li>
                        </ul>
                        <button type="submit" value='newpost' className="btn btn-success p-1 mb-1" onClick={handleSubmit}>Create Post</button>
                        <button type="" value='mappin' className="btn btn-primary p-1">Pin to map</button>
                    </div>
                </div>
            </form >


        </div >
    );
}

export default UserHome;