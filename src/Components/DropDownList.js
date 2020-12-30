import React from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/esm/Button"

const DropDownList = (props) => {
    return (
        <div style={{marginLeft:5, elevation: 2}}>
            <form>
                 <select name="sort" defaultValue="Sort" style={{display:"block",backgroundColor:"#4caf50",width:140,color:"white",borderRadius:8,height:45,marginLeft:860}} onChange={props.handleSort} >
                    <option disabled value="Sort" style={{color:"white"}}>Sort</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>

                </select> 
            </form>

        </div>
    )
}
export default DropDownList