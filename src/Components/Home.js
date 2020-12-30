import React, { useState } from 'react';
import DropDownList from './DropDownList';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Button from "react-bootstrap/esm/Button"
import { getBooks } from "../api/Bookapi"
import Booklist from './BooksList';
import Pagination from "./Pagination"
const Home = () => {
    const [searchItem, setSearchItem] = useState("")
    const [books, setBooks] = useState([])
    const [startindex, setIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    const [sorthandle, setSort] = useState("")

    let sortedBooks=[]
    const handleSubmit = async (event) => {
        event.preventDefault()
        await getBooks(searchItem, setBooks, startindex, setTotalPages)

    }

    const handleChange = (event) => {
        //console.log(searchItem)
        setSearchItem(event.target.value)
    }



    const handleNextPage = async (event) => {
        //event.preventDefault()
        await getBooks(searchItem, setBooks, event, setTotalPages)

    }


    
    const handleSort = (event)=> {
       // console.log(event.target.value);
        setSort(event.target.value);
        if(event.target.value === "Newest")
        {
           sortedBooks = books.sort((a,b)=>{
            return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            
            })
        }
        else if(event.target.value === "Oldest")
        {
            sortedBooks = books.sort((a,b)=>{
            return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
    
            })
    
        }
        else if(event.target.value === "A-Z")
        {
          sortedBooks = books.sort((a,b) =>{
            return  a.volumeInfo.title.localeCompare(b.volumeInfo.title);
          })
    
        }
        else if(event.target.value === "Z-A")
        {
          sortedBooks = books.sort((a,b) =>{
            return  a.volumeInfo.title.localeCompare(b.volumeInfo.title);
          })
          sortedBooks = sortedBooks.reverse();
        }
        setBooks(sortedBooks);
      }









    return (
        <div>
            <Navbar />
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />

            <div className="container" style={{ justifyContent: "center" }}>
                <div className="row" style={{ justifyContent: "flex-start", marginLeft: 0.1 }}>

                    <Button variant="success" style={{ width: 110, height: 43, borderRadius: 5, backgroundColor: "#4caf50"}}   onClick={handleSubmit}>Search</Button>
                    <DropDownList  handleSort ={handleSort} />
                </div>
            </div>
            <Booklist books={books} sorthandle = {sorthandle} />
            
            {
                totalPages>1 ?  <Pagination  handleNextPage={handleNextPage}  totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/> : null
            }
            
            
           
        </div>
    )
}

export default Home