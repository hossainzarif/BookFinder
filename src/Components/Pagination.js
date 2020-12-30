import React from "react"


const Pagination = (props) => {
    let className = ""

    const pageNumbers = []
    for (let i = 1; i < props.totalPages; i++) {
        pageNumbers.push(i)


        let isActive;
        if (props.currentPage == i) {
            className =  "active"
        } else {
            className="wave-effect"
        }

        
        console.log(className)
    }

    const onclicks = (event) => {
        //console.log(searchItem)
        props.setCurrentPage(event)
        props. handleNextPage((event*20)-20)
    }

 




    return (
        <div>
            <ul className="pagination" style={{ justifyContent: "center" }}>
                <li className= {props.currentPage == 1 ? ("disabled"):("waves-effect")}  onClick={() => { props.setCurrentPage(props.currentPage-1); props.handleNextPage((props.currentPage*20)-40);}}      ><a href="#!"><i className="material-icons">chevron_left</i>  </a></li>
                {/* //<li className="active"style={{color:"green",backgroundColor: "#4caf50" }}><a href="#!">1</a></li> */}

                {
                    pageNumbers.map(
                        number =>
                        (


                            <li key={number}

                                className= {number == props.currentPage ? ("active"):("waves-effect")}  
                                style={{  backgroundColor: props.currentPage == number ? "#4caf50" : null}}
                                onClick={()=>onclicks(number)}
                                ><a href="#!">{number}</a></li>
                        )
                    )
                }
                <li className= {props.currentPage == props.totalPages ? ("disabled"):("waves-effect")}  onClick={() => { props.setCurrentPage(props.currentPage+1); props.handleNextPage((props.currentPage*20)+1);}} ><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    )
}
export default Pagination