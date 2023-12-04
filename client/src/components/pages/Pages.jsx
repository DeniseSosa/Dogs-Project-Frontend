import style from "./Pages.module.css"
const Pages = ({setCurrentPage, currentPage, nPage}) => {

    const next = () =>{
        if(currentPage !== nPage) setCurrentPage(currentPage +1)
    }
    const back = () => {
        if(currentPage !== 1) setCurrentPage(currentPage -1)
    }
    return (
        <div className={style.pagesContainer}>

            <button onClick={back} className={style.buttonBack}>Back</button>

            <h2 className={style.pageNumber}>{currentPage} / {nPage} </h2>

            <button onClick={next} className={style.buttonBack}>Next</button>
        </div>
    )
}
export default Pages;