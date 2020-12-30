import React from "react"
import {BrowserRouter ,Link ,Route} from "react-router-dom"

const BookCard = (props) => {
    return (
        
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image" >
                            <img src={props.image}  style={{width:300,height:350}}/>
                            <span className="card-title">{props.title}</span>
                        </div>
                        <div className="card-content">
                            <p style={{fontSize:20}}> {props.title}</p>
                        </div>
                        <div className="card-action" style={{color:"green",backgroundColor:"#4caf50"}}>
                            <Link to= {{
                                    pathname:"/Details",
                                    state: {
                                        title: props.title,
                                        author: props.author,
                                        image: props.image,
                                        publishedDate: props.publishedDate,
                                        publisher: props.publisher
                                    }

                            }}
                            
                            style={{color:"white"}} onClick={()=>
                            {
                                console.log(props.author)
                            }}>{props.author} </Link>
                        </div>
                    </div>
                </div>
       
    )
}

export default BookCard