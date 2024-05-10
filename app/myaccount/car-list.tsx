
const CarList=()=>{
    return(
        <div>
        <div className="flex h-[50vh] w-[100vh] items-center justify-center  p-5">
        <div className="max-w-md w-full p-6 sm:p-10 md:p-14 bg-white shadow-md rounded-lg">
<form>
<div className="flex flex-col md:flex-row md:space-x-4 ">
    <label className="w-full md:w-full">
      <span className="block mb-1 ">Model:</span>
    </label>
    </div>

    <div className="flex flex-col md:flex-row md:space-x-4 ">
    <label className="w-full md:w-full">
      <span className="block mb-1 ">Company Name:</span>
    </label>
    </div>

    <div className="flex flex-col md:flex-row md:space-x-4 ">
    <label className="w-full md:w-full">
      <span className="block mb-1 ">Registration Number:</span>
    </label>
    </div>

    <div className="flex flex-col md:flex-row md:space-x-4 ">
    <label className="w-full md:w-full">
      <span className="block mb-1 ">Transmission Type:</span>
    </label>
    </div>

    <div className="flex flex-col md:flex-row md:space-x-4 ">
    <label className="w-full md:w-full">
      <span className="block mb-1 ">engine type:</span>
    </label>
    </div>

</form>
        </div>
      </div>
     </div>
    )
}

export default CarList