import { getTrips } from "@/services/trips";
import TripCard from "./trip-card";
// import { Link } from "lucide-react";
import Link from "next/link";

const TripListPage = async () => {
  const { results: trips } = await getTrips();
  return (
    <div className="w-full flex gap-4 md:w-full lg:flex-col mx-2 lg:ml-10 items-center justify-end">
      {trips.map((trip) => (
        <Link key={trip.id} href={`trips/${trip.id}`}>
        <TripCard data={trip} />
        </Link>
      ))}
    </div>
  );
};

export default TripListPage;
