import React from "react"


import locationstar from "./location-star.png"






export default function Card(props){
    return(
        <div >
          
        <div className="card">
        <img  className="img" src={`../images/${props.img}`}/>
            <div  className="data">
                <div className="location-wrap">
                <img className="locationstar" src={locationstar}></img>
                <p>{props.country}</p>
                </div>
            <h2 className="name">{props.name}</h2>
            <h5 className="date">{props.date}</h5>
            <p className="title">{props.title}</p>
           
            </div>
        </div>
       
            

        </div>
        
    )
}