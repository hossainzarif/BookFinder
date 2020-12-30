import React from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/esm/Button"

const SearchBar = (props) => {
    return (
        <div className="container">
            <form action="" onSubmit= {props.handleSubmit}>
                <div className="form-group"> 
                <input style={{ borderBottomColor: "green", borderWidth: 2, marginTop: 20, fontSize: 20, paddingLeft: 2, color: "black", borderBlockEndColor: "#4caf50" }}
                    onChange={props.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Search for books"
                />

</div>
            </form>

        </div>
    )
}
export default SearchBar 