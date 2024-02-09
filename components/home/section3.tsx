import Image from "next/image";

const Section3 = () => {
  return (
    <section className="flex justify-center items-center gap-20 ">
      <div>
        <Image
          src="/images/Car_Maintanance_Image.webp"
          alt="Car maintance"
          width={600}
          height={600}
        />
      </div>

      <div>
        <h3>Car Maintenance & Care</h3>
        <p>
          Discover and book the best car services and maintenance options near
          you. Seamless booking experience and secure online payments.
        </p>
      </div>
    </section>
  );
};

export default Section3;
