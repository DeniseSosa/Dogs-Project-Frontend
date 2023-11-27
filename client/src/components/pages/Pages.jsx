const Pages = ({setCurrentPage, currentPage, nPage}) => {

    const next = () =>{
        if(currentPage !== nPage) setCurrentPage(currentPage +1)
    }
    const back = () => {
        if(currentPage !== 1) setCurrentPage(currentPage -1)
    }
    return (
        <div>
            <button onClick={back}>Back</button>
            <h2>{currentPage} / {nPage} </h2>
            <button onClick={next}>Next</button>
        </div>
    )
}
export default Pages;