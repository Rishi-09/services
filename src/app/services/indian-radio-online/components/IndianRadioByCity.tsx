"use client";

interface CityStation {
  city: string;
  stations: string[];
}

const cities: CityStation[] = [
  {
    city: "Delhi NCR Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "Fever 104 FM",
      "BIG FM 92.7 FM",
    ],
  },
  {
    city: "Mumbai Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Radio City 91.1 FM",
      "Radio Nasha 98.3 FM",
      "Fever 104 FM",
    ],
  },
  {
    city: "Bengaluru Radio Stations",
    stations: [
      "Red FM 93.5 FM",
      "Radio City 91.1 FM",
      "Fever 104 FM",
      "BIG FM 92.7 FM",
    ],
  },
  {
    city: "Chennai Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Hello FM 106.4 FM",
      "Chennai Live 104.8 FM",
      "BIG FM 92.7 FM",
    ],
  },
  {
    city: "Hyderabad Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "Fever 104 FM",
      "Radio City 91.1 FM",
    ],
  },
  {
    city: "Kolkata Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "BIG FM 92.7 FM",
      "AIR FM Rainbow",
    ],
  },
  {
    city: "Pune Radio Stations",
    stations: [
      "Radio City 91.1 FM",
      "Red FM 93.5 FM",
      "Radio Mirchi 98.3 FM",
      "BIG FM 92.7 FM",
    ],
  },
  {
    city: "Ahmedabad Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "BIG FM 92.7 FM",
      "Radio City 91.1 FM",
    ],
  },
];

export default function IndianRadioByCity() {
  return (
    <section className="bg-black text-white py-20 sm:py-24 md:py-28">
      <div className="mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="space-y-6 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Indian Radio Stations by City & Region
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            You can also find regional voices and city vibes through Indian radio online.
            A list of popular Indian radio stations by city and voice is as follows:
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {cities.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-2xl
                border border-white/10
                bg-linear-to-br from-white/8 via-white/4 to-transparent
                backdrop-blur-xl
                p-6
                shadow-[0_8px_30px_rgba(0,0,0,0.6)]
                transition-all duration-400
                hover:-translate-y-1.5
                hover:shadow-[0_15px_45px_rgba(0,0,0,0.8)]
              "
            >
              {/* Card Inner Light */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-20 pointer-events-none" />

              <div className="relative space-y-6">

                {/* Elevated Title Box */}
                <div className="
                  bg-white/10
                  rounded-xl
                  py-4 px-4
                  text-center
                  border border-white/10
                ">
                  <h3 className="text-sm sm:text-base font-semibold">
                    {item.city}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Radio Stations
                  </p>
                </div>

                {/* Station List */}
                <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  {item.stations.map((station, i) => (
                    <li
                      key={i}
                      className="transition-colors duration-300 group-hover:text-white"
                    >
                      {station}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
