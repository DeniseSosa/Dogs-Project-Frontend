import {Link} from "react-router-dom";

const LandingPage = ()=>{
    return (
    <div>
        <h1>My Dogs App</h1>
        <div>
            <img/>
        </div>
        <Link to="/">
        <button>Home</button>
        </Link>
    </div>
    )
}
export default LandingPage;
