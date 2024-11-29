import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { getCars } from "@/services/cars";
import Image from "next/image";

const Cars = async () => {
  const cars = await getCars();
  return (
    <div className="w-full flex flex-col items-end justify-end gap-4 relative">
      <div className="w-full flex justify-end">
        <Link href={"/myaccount/cars/new"}>
          <Button
            type="button"
            className="text-lg font-semibold justify-end bg-rose-700 hover:bg-rose-700"
          >
            <Plus />
            Add Car
          </Button>
        </Link>
      </div>

      {cars?.results?.map((car) => {
        return (
          <Link key={car.id} href={`/myaccount/cars/${car.id}`}>
            <div
              className={`w-full flex items-center justify-around space-x-6 space-y-0 p-2 py-3 bg-white rounded-lg shadow-lg shadow-stone-400 relative capitalize hover:shadow-lg hover:shadow-gray-500 lg:mx-20 cursor-pointer`}
            >
              <div>
                <h4 className="font-bold text-lg md:text-xl text-rose-600 flex gap-2">
                  {car.company_name} innova
                  <br />
                </h4>
                <span className="font-medium text-sm md:text-md  inline-block text-slate-600">
                  {car.registration_number}
                </span>
                <br />
                <br />
                <span className="font-medium text-sm md:text-md   inline-block text-slate-600">
                  <span className="text-rose-600 font-semibold">model :</span>
                  {car.model}
                </span>
                <br />
                <span className="font-medium text-sm md:text-md  inline-block text-slate-600">
                  <span className="text-rose-600 font-semibold">gas :</span>{" "}
                  petrol
                </span>
                <br />
                <span className="font-medium text-sm md:text-md   inline-block text-slate-600">
                  <span className="text-rose-600 font-semibold">
                    gear type :
                  </span>
                  {car.transmission_type}
                </span>
              </div>
              <div className="w-1/2 md:w-2/5">
                <div className="h-auto w-full">
                  <Image
                    className="h-full w-full object-cover"
                    src="/images/cars/innova-car.jpg"
                    alt="car-image"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cars;
