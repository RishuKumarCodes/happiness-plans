"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Holidays",
    image: "/services/services (1).jpg",
  },
  {
    name: "Air Tickets",
    image: "/services/services (2).jpg",
  },
  {
    name: "Destination Weddings",
    image: "/services/services (3).jpg",
  },
  {
    name: "Events",
    image: "/services/services (4).jpg",
  },
  {
    name: "Visa",
    image: "/services/services (5).jpg",
  },
  {
    name: "Passport",
    image: "/services/services (6).jpg",
  },
  {
    name: "Bus, Car Rental",
    image: "/services/services (7).jpg",
  },
  {
    name: "Study Abroad",
    image: "/services/services (8).jpg",
  },
  {
    name: "Foreign Exchange",
    image: "/services/services (9).jpg",
  },
  {
    name: "Adventure Trips",
    image: "/services/services (10).jpg",
  },
  {
    name: "Cruise and Travel and Tourism planning",
    image: "/services/services (11).jpg",
  },
];

export default function ServiceCarousel() {
  return (
    <section className="container mx-auto py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-6 ">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <Link
          href="/services"
          className="flex items-center text-primary hover:underline"
        >
          <span>See all</span>
          <ArrowRight className="w-5 h-5 ml-1" />
        </Link>
      </div>

      {/* Scrollable Cards */}
      <div className="flex flex-nowrap space-x-3 md:space-x-5 overflow-x-auto scrollbar-hide pb-2 px-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex-shrink-0 w-40 sm:w-56 overflow-hidden"
          >
            <div className="h-[85%] bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/services/services (1).jpg";
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
