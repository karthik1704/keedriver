import { routes } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col  bg-black text-gray-300 pt-5 h-1/2">
      <div className="flex  justify-between flex-col-reverse flex-wrap md:flex-row md:justify-around ">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={200} height={200} />
          </Link>{" "}
        </div>
        <div className="flex justify-between items-center flex-warp flex-col md:flex-row md:justify-around md:items-start gap-8 md:gap-24">
          {routes.map((route) =>
            route.routeName === "Home" ? null : (
              <div key={route.routeName}>
                <h4 className="text-xl text-bold text-white">
                  {route.routeName}
                </h4>
                {route.children && (
                  <ul className="flex text-sm justify-center items-center flex-col md:justify-start md:items-start" >
                    {route?.children?.map((child) => (
                      <li key={child.routeName}>
                        <Link href={child.href}>{child.routeName}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex items-center justify-center my-5">
        <p>&copy; 2023 Keedriver All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
