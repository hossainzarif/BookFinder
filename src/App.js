import React, { useState } from 'react';
import DropDownList from './Components/DropDownList';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Button from "react-bootstrap/esm/Button"
import { getBooks } from "./api/Bookapi"
import Booklist from './Components/BooksList';
import Pagination from "./Components/Pagination"
import {BrowserRouter ,Link ,Route} from "react-router-dom"
import Home from './Components/Home';
import BookDetails from './Components/BookDetails';

const App = () => {
    const [searchItem, setSearchItem] = useState("")
   


    return (
        <div>
          
            <BrowserRouter>
            
            <div>
                <Route path="/" exact ={true} component={Home} />
                <Route path="/Details" exact ={true} component={BookDetails} />
            </div>
            
            </BrowserRouter>
            
           
        </div>
    )
}

export default App