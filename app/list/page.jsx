'use client'
import  {useState} from "react";
import React from "react";

function FavColor(){
  const[color,setColor] = useState("red");
  return(
    <>
    <h1>my favorite color is {color}</h1>
    <button
    type ="button"
    onClick={()=> setColor("blue")}
    >Blue</button>
    <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

export default FavColor;




// class Car {
//   constructor(name) {
//     this.brand = name;
//   }
// }

// const mycar = new Car("Ford");

// export default mycar;