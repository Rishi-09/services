"use client";

export default function MostListenedStations() {
  const stations = [
    {
      name: "NPR (National Public Radio)",
      description:
        "Reaches over 30 million weekly listeners with comprehensive news, analysis, and cultural programming.",
    },
    {
      name: "SiriusXM (Satellite Radio)",
      description:
        "Features over 34 million subscribers, offering a vast, curated range of commercial-free music, talk, and sports.",
    },
    {
      name: "WTOP-FM (Washington, D.C.)",
      description:
        "The highest-revenue commercial station, specializing in constant, up-to-the-minute local news and traffic.",
    },
    {
      name: "KIIS-FM (Los Angeles)",
      description:
        "A premier Top 40 station known for playing current hits and hosting popular, nationally syndicated shows.",
    },
    {
      name: "WFAN (New York City)",
      description:
        "The nation’s premier all-sports talk radio station, dominating in sports coverage and talk.",
    },
    {
      name: "WABC (New York City)",
      description:
        "A major news/talk radio station focusing on local news, politics, and commentary.",
    },
    {
      name: "American Top 40 (Syndicated)",
      description:
        "A widely popular, long-running weekly countdown show focusing on the biggest pop hits.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Most Listened American Radio Stations
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            In the world of USA radio stations, here are the most popular radio
            stations that people love to listen to:
          </p>
        </div>

        {/* Station List */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {stations.map((station, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex gap-4 sm:gap-5">
                {/* Number */}
                <div className="text-lg sm:text-xl font-semibold text-white/40 group-hover:text-white transition-colors duration-300 shrink-0">
                  {index + 1}.
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {station.name}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {station.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            These stations show a diverse listening habit that is divided
            between local, curated content and national, specialized, or
            on-demand content.
          </p>
        </div>
      </div>
    </section>
  );
}
