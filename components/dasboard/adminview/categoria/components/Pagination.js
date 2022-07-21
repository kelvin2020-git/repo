import { useEffect, useState } from "react";
const Pagination = ({pages, setCurrentPage, currentCategory, sortedCategory}) => {
    const numOfPages = [];
    for (let i=1; i <= pages; i++) {
        numOfPages.push(i);
    }
    const [currentButton, setCurrentButton] = useState(1);
    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])

    return (
        <div className="clearfix">
        <div className="hint-text">Mostrando <b>{currentCategory.length}</b> de <b>{sortedCategory.length}</b> Entradas</div>
        <ul className="pagination">
            <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' }`}><a href="#!"
                onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
            >Anterior</a></li>
{
            numOfPages.map((page, index) => {
                return (
                    <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item' }`}><a href="#!" className="page-link"
                        onClick = {()=>setCurrentButton(page)}
                    >{page}</a></li> 
                )
            })

}
<li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item' }`}><a href="#!"
                onClick = { () => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}
            >Siguiente</a></li>
        </ul>
    </div>
    )
}

export default Pagination;

