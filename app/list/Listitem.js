import React from "react";

export default function ListItem(Props){
    return(
        <div>
            <p>{Props.name}</p>
            <button>Mark as a done</button>
            <button>Delete</button>
        </div>
    )
}