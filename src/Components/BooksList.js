import React from "react"
import BookCard from "./BooksCard"

const Booklist = (props) => {
    let sortedBooks = [];

   

    
    //  const cleanedData = sortedbooks.map((book) =>
    // {
    //     if(props.books.volumeInfo.hasOwnProperty('publishedDate')===false)
    //     {
    //         props.books.volumeInfo['publishedDate'] = '0000'
    //     }
    //     if(props.books.volumeInfo.hasOwnProperty('title')===false)
    //     {
    //         props.books.volumeInfo['title'] = 'N/A'
    //     }
    //     let sortedbooks= props.books

    //     sortedbooks.sort((a,b) => a.timeM - b.timeM);




    // })
    


   
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    
                  
            
                    {props.books.map((book, i) => {
                        return (<BookCard
                            image={(book.volumeInfo.imageLinks) == undefined ? ("") : (book.volumeInfo.imageLinks.thumbnail)}
                            title={book.volumeInfo.title == undefined ? ("Not Available") : (book.volumeInfo.title)}
                            author={book.volumeInfo.authors  == undefined ? ("Not Available") : (book.volumeInfo.authors) }
                            publishedDate={book.volumeInfo.publishedDate == undefined ? ("Not Available") : (book.volumeInfo.publishedDate)}
                            publisher={book.volumeInfo.publisher == undefined ? ("Not Available") : (book.volumeInfo.publisher)}
                            sorthandle={props.sorthandle}
                            key={i}
                        />)
                    })}


                </div>
            </div>


        </div>
    )
}

export default Booklist