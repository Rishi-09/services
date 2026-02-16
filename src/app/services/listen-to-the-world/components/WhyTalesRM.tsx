// app/tales-fm/page.tsx
import { Section } from "./Section";
import { FeatureItem } from "./FeatureItem";

export default function TalesFMPage() {
  return (
    <main className="min-h-screen  bg-black text-white font-sans selection:bg-orange-500/30">
      <Section
        title="What Is Tales FM Radio App?"
        subtitle="More Than a Radio App — It's Your Global Audio Hub"
        className="max-w-6xl"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          Tales FM is a free online radio app and web platform that allows you
          to listen to live FM radio, news, talk shows, sports radio, and music
          from stations worldwide.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Designed for listeners who want simplicity and freedom, Tales FM
          removes all common barriers to radio streaming. There are no
          subscriptions to manage, and no interruptions from ads.
        </p>
        <p className="text-orange-400 font-medium">
          Simply open the app or website, select a station, and start listening
          — instantly.
        </p>
      </Section>

      <hr className="border-gray-800 max-w-4xl mx-auto" />

      {/* Target Audience Section */}
      <Section
        title="Who Is Tales FM For?"
        subtitle="Made for Every Kind of Listener"
        className="max-w-6xl"
      >
        <p className="text-gray-400 mb-4 text-lg">Tales FM is aimed at:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Daily commuters",
            "Music lovers",
            "News and sports followers",
            "International listeners",
            "Anyone tired of ads",
          ].map((item) => (
            <FeatureItem key={item} title={item} isBullet />
          ))}
        </div>
        <p className="italic text-gray-500 mt-6">
          If you enjoy radio without restrictions, Tales FM is built for you.
        </p>
      </Section>

      {/* Value Proposition Section */}
      <Section
        title="Why Tales FM Is Different"
        subtitle="Reasons why a huge number of people choose Tales FM Over Other Radio Apps"
        className="bg-zinc-900/30 max-w-6xl rounded-3xl"
      >
        <FeatureItem
          title="100% Free Online Radio"
          description="Enjoy unlimited radio streaming with no subscriptions and no hidden fees."
        />
        <FeatureItem
          title="Ad-Free Listening Experience"
          description="Listen without commercials, pop-ups, or forced interruptions — ever."
        />
        <FeatureItem
          title="Global Stations, Local Flavor"
          description="Discover international radio stations while still enjoying regional and local broadcasts."
        />
        <FeatureItem
          title="Crystal-Clear Audio Streaming"
          description="Optimized streams deliver clear sound with minimal buffering, even on slower connections."
        />
      </Section>

      {/* Content Section */}
      <Section
        title="Everything You Can Listen To"
        subtitle="One App. Every Sound You Love"
        className="max-w-6xl"
      >
        <div className="space-y-4">
          <FeatureItem
            title="Live News Radio"
            description="— stay informed in real time"
            isBullet
          />
          <FeatureItem
            title="Talk Shows & Discussions"
            description="— opinions, interviews, and insights"
            isBullet
          />
          <FeatureItem
            title="Sports Radio"
            description="— live commentary and expert analysis"
            isBullet
          />
          <FeatureItem
            title="All Music Genres"
            description="— pop, rock, jazz, classical, and more"
            isBullet
          />
        </div>

        <p className="text-xl text-gray-400 " >
          Whether {"you're"} looking for a global online radio app or a simple
          radio app without ads, Tales FM brings everything together in one
          place.
        </p>
      </Section>
    </main>
  );
}
