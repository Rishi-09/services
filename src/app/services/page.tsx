import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "not for now",
};

function Page() {
  const services = [
    { name: "indian-radio-online", href: "/services/indian-radio-online" },
    { name: "listen-to-the-world", href: "/services/listen-to-the-world" },
    { name: "listen-to-usa-radio", href: "/services/listen-to-usa-radio" },
    { name: "radio-stations-online", href: "/services/radio-stations-online" },
  ];

  return (
    <div className="flex justify-center gap-5 mt-40  ">
      {services.map((service, i) => (
        <Link
          key={i}
          className="border border-amber-50/30 p-5 rounded-2xl hover:scale-110 transition-all duration-150 ease-in-out"
          href={service.href}
        >
          {service.name}
        </Link>
      ))}
    </div>
  );
}

export default Page;
