import { getTrips } from "@/services/trips";
import TripCard from "./trip-card";
import { Link } from "lucide-react";

const TripListPage = async () => {
  const { results: trips } = await getTrips();
  return (
    <div className="w-full flex gap-4 md:w-full lg:flex-col mx-2 lg:ml-10 items-center justify-end">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

export default TripListPage;
