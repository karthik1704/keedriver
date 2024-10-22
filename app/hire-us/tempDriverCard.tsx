import React from "react";
import Image from "next/image";
import img1 from "@/app/services/image/edperienced_driver.webp";
import img2 from "@/app/services/image/punctual.avif";
import img3 from "@/app/services/image/cabs.jpg";
import img4 from "@/app/services/image/cutomer_services.jpeg";

const tempDriverDetail = [
  {
    title: "Experienced Professionals",
    description: `At KeeDriver, our drivers are more than just experienced—they are true professionals in every sense. Each driver is meticulously selected not only for their driving skills but also for their commitment to providing top-tier service. Our recruitment process includes rigorous background checks, comprehensive driving assessments, and ongoing training to ensure that every KeeDriver professional is equipped to handle any situation on the road.

Our drivers excel in navigating various driving conditions, whether it’s dense city traffic, challenging weather, or long highway journeys. They possess an in-depth knowledge of local routes and traffic patterns, allowing them to choose the most efficient paths to get you to your destination on time. Beyond their technical skills, our drivers are courteous, approachable, and always prioritize your comfort and safety. With years of hands-on experience, they have honed their ability to anticipate and meet your needs, ensuring a smooth, stress-free, and enjoyable ride.`,
    image: img1,
  },
  {
    title: "Punctual & Reliable",
    description: `In today’s fast-paced world, time is a precious commodity. At KeeDriver, we understand the importance of punctuality and reliability. Our drivers are committed to ensuring that you never have to wait or worry about being late. From the moment you book a ride with KeeDriver, you can rest assured that our drivers will be there on time, every time.

We leverage advanced scheduling and tracking systems to ensure our drivers are precisely where they need to be, at the exact time you need them. Whether you have an early morning flight, a critical business meeting, or a late-night event, our drivers are ready to provide timely service. They are trained to arrive a few minutes early to give you peace of mind and to accommodate any last-minute changes. With KeeDriver, you can trust that your schedule is in reliable hands, allowing you to focus on what matters most.`,
    image: img2,
  },
  {
    title: "Top-Notch Vehicles",
    description: `Your journey with KeeDriver begins the moment you step into one of our top-notch vehicles. We pride ourselves on maintaining a fleet of modern, well-equipped cars that cater to a variety of needs and preferences. Whether you prefer the luxury of a sleek sedan, the spaciousness of an SUV, or the versatility of a van, we have the perfect vehicle to suit your requirements.

Each vehicle in our fleet is meticulously maintained to the highest standards of safety and cleanliness. Regular inspections and servicing ensure that every car is in peak condition, offering a ride that is not only comfortable but also dependable. Inside, you’ll find a range of amenities designed to enhance your experience, from plush seating and climate control to advanced entertainment systems. We also offer vehicles with additional features like Wi-Fi, charging ports, and privacy screens, catering to both business and leisure travelers. At KeeDriver, we believe that your journey should be as enjoyable as your destination, and our vehicles are equipped to provide just that.`,
    image: img3,
  },
  {
    title: "Customer-Centric Service",
    description: `At KeeDriver, we don’t just provide a service—we create a personalized experience tailored to each customer’s unique needs. Our customer-centric approach means that your satisfaction is our top priority. From the moment you contact us to the conclusion of your ride, we are dedicated to ensuring that your experience with KeeDriver is exceptional.

We take the time to understand your preferences, whether it’s the type of vehicle you prefer, your preferred route, or any specific requests you might have. Our drivers are not only skilled but also attentive, offering a level of service that goes beyond just getting you from point A to point B. They are trained to provide a welcoming, professional environment, where your comfort and satisfaction come first.

Whether you need assistance with your luggage, a particular stop along the way, or simply want to enjoy a quiet ride, our drivers are there to accommodate your needs. We also provide flexible booking options and 24/7 customer support, ensuring that you can rely on KeeDriver at any time, day or night. Our commitment to customer-centric service means that every detail is taken care of, so you can relax and enjoy a seamless, worry-free ride.`,
    image: img4,
  },
];

const TempDriverCard = () => {
  return (
    <>
      {tempDriverDetail?.map((temItem, id) => {
        return (
          <div
            className={`w-full flex flex-col-reverse items-center justify-center ${
              id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } lg:justify-evenly lg:items-center lg:mx-5 gap-3 xl:gap-7 p-6 xl:p-10 `}
            key={id}
          >
            <div className="w-full lg:w-4/5 xl:w-2/3 flex flex-col md:justify-start items-start md:mr-5">
              <h4 className="font-bold text-xl md:text-2xl lg:text-3xl m-0">
                {temItem?.title}
              </h4>
              <p className="text-zinc-600 my-5 text-justify">
                {temItem?.description}
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src={temItem?.image} alt="" width={"676"} height={"525"} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TempDriverCard;
