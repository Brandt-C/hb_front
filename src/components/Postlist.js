// import axios from "axios";
// import { useState, useContext } from "react";
// import { DataContext } from "../context/dataprovider";



// const PostList = async (uid) => {

//     const {user} = useContext(DataContext);
//     const [posts, setPosts] = useState([]);
//     let data = await axios.get('http://127.0.0.1:5000/api/posts/{user.userid}');
//     console.log(data)
//     return (
//         <div className="card" style={{ width: 18 + 'rem' }}>
//             <div className="card-body">
//                 <h5 className="card-title">Title:<input type="text" name="title" value={newpost.title} onChange={handleChange} /></h5>
//                 <p className="card-text">Body (only 250 characters or less please!):<textarea type="text" name="body" value={newpost.body} onChange={handleChange} /></p>
//             </div>
//             <ul className="list-group list-group-flush">
//                 <li className="list-group-item">By:</li>
//                 <li className="list-group-item">When:</li>
//             </ul>
//             <button type="submit" value='newpost' className="btn btn-success p-1 mb-1" onClick={handleSubmit}>Create Post</button>
//             <button type="" value='mappin' className="btn btn-primary p-1">Pin to map</button>
//         </div>
//     );
// }

// export default PostList