// Style
import style from "./CardLoading.module.css"
const CardLoading= () =>{
    return( 
    <div className={style.LoaderContainer}>
        <h2>Loading...</h2>
    <div  className={style.loader}></div>
    </div>)
}
export default CardLoading