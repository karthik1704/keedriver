import TripCard from "./trip-card";

const TripListPage = async () => {
  return (
    <div className="w-full flex md:w-full lg:flex-col mx-2 lg:ml-10 items-center justify-end">
      <TripCard />
    </div>
  );
};

export default TripListPage;
