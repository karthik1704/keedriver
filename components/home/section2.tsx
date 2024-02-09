import Image from 'next/image'
const Section2 = () => {
  return (
    <section className="flex justify-center items-center gap-20 ">
        <div>

      <h3>Doorstep Wash & Deep Cleaning </h3>
      <p>
        DriveU brings on-demand car cleaning to your
      doorstep with satisfaction guarantee. Now available in Bengaluru,
      Hyderabad and Gurgaon, coming soon to other cities.
        </p>
        </div>
        <div>
          <Image src="/images/Doorstep_Car_Cleaning.webp" alt="doorstep and cleaning" width='400' height='400'/>
           </div>
    </section>
  );
};

export default Section2;
