import './home.css'

const Home = () => {
    return (
        <>
        <h1>Welcome to HoodBuilder!</h1>
        <div className="container">
            <div id='snap'>
            <img src="/snapsnip_edit.jpg" className="img-fluid" alt="application snapshot"></img>
            </div>
            <div id='exp'>
                <h4>Built on a simple idea:</h4>
                <br />
                <h6>-The most important part of a community is its members.</h6>
                <br />
                <p>Tag a spot in your area and let us know about it.</p>
                <br/>
                <p>Discuss | Collaborate | Share</p>
                <p><small><b>Register/login to use!</b></small></p>
                <br />
                <p><small>Credit where it's due:  Check out OpenStreetMap.org which is utilized within.</small></p>
                <p><small>This is currently a project in development and not intended for broad use.</small></p>
                <p><small>Contact me with thoughts: Brandt.Carlson11@gmail.com</small></p>
            </div>
        </div>
        </>
    );
}

export default Home;