
import {
    Home,
    Car,
    Handshake,
    User,
    BookPlus,
    CarFront,
    UserPlus,
    UsersRound,
    MessageSquareQuote,
    PhoneCall,
  } from "lucide-react";

export const routes = [
    { routeName: "Home", href: "/", icon: <Home /> },
    {
      routeName: "Services",
      icon: <Car />,
      children: [
        { routeName: "Book Trip", href: "/trip", image: "", icon: <BookPlus /> },
        { routeName: "Book Car", href: "/", image: "", icon: <CarFront /> },
      ],
    },
    {
      routeName: "For Business",
      icon: <Handshake />,
      children: [
        { routeName: "Hire us", href: "/hireus", image: "", icon: <UserPlus /> },
      ],
    },
    {
      routeName: "About Us",
      icon: <User />,
      children: [
        { routeName: "Who are we", href: "/about", icon: <UsersRound /> },
        { routeName: "Blog", href: "/blog", icon: <MessageSquareQuote /> },
        { routeName: "Contact", href: "/contact", icon: <PhoneCall /> },
      ],
    },
  ];