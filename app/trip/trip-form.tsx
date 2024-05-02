import Image from "next/image";

import img from '@/app/services/image/trip/driver.jpg'

function TripForm(){
    return(
        <>
         <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 mt-4 md:mb-0 md:pr-4"><Image
          src={img} alt=""/>
          </div>
      <div className="w-full md:w-1/2 mt-4 mx-auto">
        <h1 className="text-center text-2xl font-bold mb-4">Trip Details</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="tripparenttype">Trip parent type:</label>           
            <select className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tripparenttype">        
            <option value="">------</option>
        <option value="option1">Local</option>
        <option value="option2">OutStation</option>
      </select>
      </div>

<div className="mb-4">
<label className="text-gray-700 text-sm font-bold mb-2" htmlFor="tripType">Trip type:</label>  
<select className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tripType"> 
       <option value="">------</option>
        <option value="option1">Drop only</option>
        <option value="option2">Round Trip</option>
      </select>
      </div>

<div className="mb-4">
<label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="Pickup">Pickup area:</label>            
<select className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Pickup">
          <option value="">------</option>
        <option value="option1">Chrompet</option>
        <option value="option2">Tambaram</option>
        <option value="option3">Pallavaram</option>
      </select>
      </div>
      <div className="mb-4">
      <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="Pickuplocation">Pickup Location:</label>
      <input className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="Pickuplocation"/>        
      </div>
        <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="Droplocation">Drop Location:</label>            
        <input className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="Droplocation"/>
                </div>
        <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="Droptime">Drop time:</label>
        <input className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="Droptime"/>
                </div>
        <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="Landmark">Landmark:</label>
        <input className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="Landmark"/>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Save</button>              
               
            </form>
            </div>
            </div>
        </>
    )
}

export default TripForm;