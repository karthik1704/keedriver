import Link from "next/link";
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

async function getData() {
  const cookiesStoreage = cookies();
  const access_token = cookiesStoreage.get("access");
  if (!access_token) {
    return null;
  }

  const res = await fetch(`${API_URL}/car/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token?.value}`,
    },
  });

  const data = await res.json();

  return data;
}

const Cars = async () => {
  const carsLists = await getData();
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

      {carsLists?.results?.map((carsList, i) => {
        return (
          <Link key={i} href={`/myaccount/cars/${carsList.id}`}>
            <div
              className={`w-full flex items-center justify-around space-x-6 space-y-0 p-2 py-3 bg-white rounded-lg shadow-lg shadow-stone-400 relative capitalize hover:shadow-lg hover:shadow-gray-500 lg:mx-20 cursor-pointer`}
            >
              <div>
                <h4 className="font-bold text-lg md:text-xl text-rose-600 flex gap-2">
                  {carsList.company_name} innova
                  <br />
                </h4>
                <span className="font-medium text-sm md:text-md  inline-block text-slate-600">
                  {carsList.registration_number}
                </span>
                <br />
                <br />
                <span className="font-medium text-sm md:text-md   inline-block text-slate-600">
                  <span className="text-rose-600 font-semibold">model :</span>
                  {carsList.model}
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
                  {carsList.transmission_type}
                </span>
              </div>
              <div className="w-1/2 md:w-2/5">
                <div className="h-auto w-full">
                  <img
                    className="h-full w-full object-cover"
                    src="https://5.imimg.com/data5/SELLER/Default/2020/12/YP/IV/KC/118359422/innova-car.jpg"
                    alt="car-image"
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
