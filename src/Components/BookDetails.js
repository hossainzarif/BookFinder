import React from "react"
import NavbarBooks from "./NavbarBooks"

const BookDetails = (props) => {
    return (

        <div>
            <NavbarBooks />

            <div className="container" style={{marginTop:100}}>
                <div className="card">
                    <div className="card-image" style={{justifyContent:"center"}}>
                        <img src={props.location.state.image} style={{ width: 500, height: 350,justifyContent:"center" }} />
                        <span className="card-title">{props.location.state.title}</span>
                    </div>
                    <div className="card-content">
                        <p style={{ fontSize: 20 }}> {props.location.state.title}</p>
                    </div>
                    <div className="card-action" style={{  backgroundColor: "#4caf50" }}>
                    <div className="card-content">
                        <p style={{ fontSize: 25,color:"white" }}> Author: {props.location.state.author}</p>
                        <p style={{ fontSize: 25,color:"white" }}> Publisher: {props.location.state.publisher}</p>
                        <p style={{ fontSize: 25,color:"white" }}> published Date: {props.location.state.publishedDate}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookDetails