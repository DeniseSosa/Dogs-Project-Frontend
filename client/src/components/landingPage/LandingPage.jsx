import style from './LandingPage.module.css';
import {Link} from 'react-router-dom'

const LandingPage = ()=>{
    return (
    <div className={style.appContainer}>
        <h1 className={style.title}>My Dogs App</h1>
        <Link to="/home">
        <button className={style.buttonHome} >Home</button>
        </Link>
        <div className={style.aboutContainer}>
            <h3 className={style.aboutMe}> About myself:
            Hello everybody! My name is Rocio and this is my first app.
                I've loved dogs ever since i was born, so I hope you enjoy this page as much as I enjoyed creating it </h3>
        </div>
    </div>
    )
}
export default LandingPage;
