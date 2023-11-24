import style from './LandingPage.module.css';
import {Link} from "react-router-dom";

const LandingPage = ()=>{
    return (
    <div className={style.appContainer}>
        <h1>My Dogs App</h1>
            <img></img>
        <Link to="/">
        <button>Home</button>
        </Link>
    </div>
    )
}
export default LandingPage;
