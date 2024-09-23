import { MapPin,Landmark,Calendar,Clock,User,Phone, Fuel, Cog, RectangleEllipsis, Car, CarFront, Route, AlarmClock, Banknote, MoonStar, IndianRupee } from 'lucide-react';

const TripDetailCard = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center rounded-lg bg-rose-700 ml-4 p-4 relative">
        <div className='text-white text-lg flex items-center gap-2 absolute top-3 right-3'>
          <span className='inline-block'>Status :</span>
          <span className='inline-block'>Pending</span>

        </div>
        <div className="w-11/12 flex flex-col justify-center gap-3 mt-5">
          <div className='text-lg'>
            <span className='text-white'>From</span>
            <p className="bg-white p-2 rounded-lg mt-2 flex items-center"><MapPin className='inline-block mr-2 text-red-600' /><span className='inline-block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, repellendus!</span></p>
          </div>
          <div className='text-lg'>
            <span className='text-white'>To</span>
            <p className="bg-white p-2 rounded-lg mt-2 flex items-center"><MapPin className='inline-block mr-2 text-red-600' /><span className='inline-block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, repellendus!</span></p>
          </div>
          <div className='text-lg'>
            <span className='text-white'>Land Mark</span>
            <p className="bg-white p-2 rounded-lg mt-2"><Landmark className='inline-block mr-2 text-red-600' />address</p>
          </div>

          <div>
          <h4 className='text-xl font-semibold text-center text-white my-2'>Trip Details</h4>
          <div className='text-lg grid sm:grid-cols-2 gap-3'>
            <div>
            <span className='text-white'>Trip Date</span>
            <p className="bg-white p-2 rounded-lg mt-2"><Calendar className='inline-block mr-2 text-red-600' />06/09/2024</p>
            </div>
            <div>
            <span className='text-white'>Trip Time</span>
            <p className="bg-white p-2 rounded-lg mt-2"><Clock className='inline-block mr-2 text-red-600' />10:30 am</p>
            </div>
            <div>
            <span className='text-white'>Trip Type</span>
            <p className="bg-white p-2 rounded-lg mt-2"><Route className='inline-block mr-2 text-red-600' />rounded</p>
            </div>
            <div>
            <span className='text-white'>Phone Number</span>
            <p className="bg-white p-2 rounded-lg mt-2"><Phone className='inline-block mr-2 text-red-600' />9003209825</p>
            </div>
            </div>
            
           
          </div>
          <div>
            <h4 className='text-xl font-semibold text-center text-white my-2'>Driver Details</h4>
            <div className='text-lg grid sm:grid-cols-2 gap-3'>
            <div>
            <span className='text-white'>Name</span>
            <p className="bg-white p-2 rounded-lg mt-2"><User className='inline-block mr-2 text-red-600' />Ajin kumar</p>
            </div>
            <div>
            <span className='text-white'>Phone Number</span>
            <p className="bg-white p-2 rounded-lg mt-2"><Phone className='inline-block mr-2 text-red-600' />9001234221</p>
            </div>
            
          </div>
          </div>
          <div className="w-full">
               <h3 className="text-xl mb-4 font-semibold text-white text-center">
                Car Details

               </h3>
               <ul className="w-full bg-white rounded-lg flex flex-wrap lg:grid lg:grid-cols-3 items-center justify-between lg:justify-items-center gap-2 lg:gap-4 p-3">
                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-600 font-bold border-b-2 border-rose-700 pb-1">
                    Car Name
                  </span>
                  <div className="flex w-full sm:w-36 md:w-40 lg:w-full gap-2 p-2 rounded-lg justify-center">
                    <span className="inline-block">
                      {" "}
                      <CarFront className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg capitalize font-semibold">
                      innova
                    </span>
                  </div>
                </li>

                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-600 font-bold border-b-2 border-rose-700 pb-1">
                    Car Model
                  </span>
                  <div className="flex w-full sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-center ">
                    <span className="inline-block">
                      <Car className="text-red-600" />
                    </span>

                    <span className="inline-block md:text-base lg:text-lg capitalize font-semibold">
                      Suv
                    </span>
                  </div>
                </li>

                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-600 font-bold border-b-2 border-rose-700 pb-1">
                    Registration No
                  </span>
                  <div className="flex w-full  sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-center ">
                    <span className="inline-block">
                      {" "}
                      < RectangleEllipsis className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg capitalize font-semibold">
                     TN 85 q 0931
                    </span>
                  </div>
                </li>

                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-600 font-bold border-b-2 border-rose-700 pb-1">
                    Gear Type
                  </span>
                  <div className="flex w-full  sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-center ">
                    <span className="inline-block">
                      {" "}
                      <Cog className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg capitalize font-semibold">
                     {/* {carTypeData.transmission_type} */}
                     mannul
                    </span>
                  </div>
                </li>
                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-600 font-bold border-b-2 border-rose-700 pb-1">
                    Gas
                  </span>
                  <div className="flex w-full sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-center ">
                    <span className="inline-block">
                      {" "}
                      <Fuel className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg capitalize font-semibold">
                      petrol
                    </span>
                  </div>
                </li>
              </ul>
              </div>

              <div className='mb-3'>
              <h3 className="text-xl mb-4 font-semibold text-white text-center">
                Trip Amount
               </h3>

               <div className='w-full text-lg grid sm:grid-cols-2 gap-3'>
               <div className='w-full'>
            <span className='text-white'>Estimate Time</span>
            <p className="w-full bg-white p-2 rounded-lg mt-2 flex items-center gap-2"><AlarmClock className='inline-block mr-2 text-red-600' /><span className='inline-block'>10 hr</span></p>
            </div>
            <div className='w-full'>
            <span className='text-white'>Estimate Cost</span>
            <p className="w-full bg-white p-2 rounded-lg mt-2 flex items-center gap-2"><Banknote className='inline-block mr-2 text-red-600' /><span className='inline-block'>600</span></p>
            </div>
            <div className='w-full'>
            <span className='text-white'>Night Shift Allowance</span>
            <p className="w-full bg-white p-2 rounded-lg mt-2 flex items-center gap-2"><MoonStar className='inline-block mr-2 text-red-600' /><span className='inline-block'>200</span></p>
            </div>
            <div className='w-full'>
            <span className='text-white'>Total</span>
            <p className="w-full bg-white p-2 rounded-lg mt-2 flex items-center gap-2"><IndianRupee className='inline-block mr-2 text-red-600' /><span className='inline-block'>800</span></p>
            </div>
               </div>


              </div>
          
        </div>
      </div>
    </>
  );
};

export default TripDetailCard;
