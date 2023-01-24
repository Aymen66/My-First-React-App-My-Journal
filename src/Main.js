import React from "react"
import Card from "./Card"

import data from "./data.js"






export default function Main(){
    const dataElement = data.map(item =>{
        return (
            <Card
            img= {item.img}
            country={item.country}
           name ={item.name}
           date={item.date}

            title={item.title}
           
           />
        )
            
    })
    return(
        <main className="Main">
           {dataElement}
        
        
         
        </main>
    )
}
