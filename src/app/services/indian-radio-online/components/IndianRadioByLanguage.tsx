"use client";

interface LanguageStation {
  language: string;
  stations: string[];
}

const languages: LanguageStation[] = [
  {
    language: "Hindi Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "Vividh Bharati 100.1 FM",
      "Mirchi Love 104 FM",
      "Radio Nasha 107.2 FM",
    ],
  },
  {
    language: "English Radio Stations",
    stations: ["Radio One 94.3 FM", "Indigo 91.9 FM", "Kool 104 FM"],
  },
  {
    language: "Tamil Radio Stations",
    stations: ["Suryan FM 93.5 FM", "Hello FM 106.4 FM", "Radio Mirchi Tamil"],
  },
  {
    language: "Telugu Radio Stations",
    stations: [
      "Radio Mirchi Telugu 98.3 FM",
      "Big FM 92.7 FM",
      "Radio City 91.1 FM",
      "Red FM 93.5 FM",
    ],
  },
  {
    language: "Malayalam Radio Stations",
    stations: [
      "Radio Mango 91.9 FM",
      "Club FM 94.3 FM",
      "Red FM 93.5 FM",
      "Radio Mirchi 98.3 FM",
    ],
  },
  {
    language: "Kannada Radio Stations",
    stations: [
      "Radio City Kannada 91.1 FM",
      "Big FM 92.7 FM",
      "Radio Mirchi 98.3 FM",
    ],
  },
  {
    language: "Punjabi Radio Stations",
    stations: ["All India Radio Punjabi Channels", "Punjabi Fever 107.2 FM"],
  },
  {
    language: "Bengali Radio Stations",
    stations: ["Friends FM 91.9 FM", "Amar FM 106.2 FM"],
  },
  {
    language: "Marathi Radio Stations",
    stations: ["Friends FM 91.9 FM", "Amar FM 106.2 FM"],
  },
  {
    language: "Gujarati Radio Stations",
    stations: ["Radio City Ahmedabad", "My FM 104.3 FM"],
  },
  {
    language: "Urdu Radio Stations",
    stations: ["Radio Charminar 107.8 FM", "AIR Urdu Service"],
  },
];

export default function IndianRadioByLanguage() {
  return (
    <section className="bg-black text-white py-20 sm:py-24 md:py-28">
      <div className="lg:max-w-9/12 md:max-w-10/12 sm:max-w-10/12 mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Indian Radio Stations by Language
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            India is better known for its diversity of languages. Therefore,
            online radio makes it easy to cater to {"people's"} needs.
          </p>

          <p className="text-white font-semibold">
            Here is a list of language-based stations:
          </p>
        </div>

        {/* Cards Wrapper */}
        <div
          className="
    flex gap-6 overflow-x-auto scroll-smooth
    snap-x snap-mandatory
    no-scrollbar
    sm:grid sm:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-4
    sm:overflow-visible
  "
        >
          {languages.map((item, index) => (
            <div
              key={index}
              className="
        group relative
        min-w-[85%] sm:min-w-0
        snap-start
        rounded-3xl
        border border-white/10
        bg-linear-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-xl
        p-6
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
      "
            >
              {/* Soft inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-30 pointer-events-none" />

              <div className="relative space-y-6">
                {/* Title Badge */}
                <div className="bg-white/10 rounded-2xl py-4 px-4 text-center">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.language}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">Radio Stations</p>
                </div>

                {/* Station List */}
                <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  {item.stations.map((station, i) => (
                    <li
                      key={i}
                      className="group-hover:text-white transition-colors duration-300"
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
