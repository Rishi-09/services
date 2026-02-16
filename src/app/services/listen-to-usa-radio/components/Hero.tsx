import Button from "../../ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-black text-white mt-16 md:mt-20 overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-lg"
      >
        <source src="/bgAnimation.webm" type="video/webm" />
        <source src="/bgAnimation.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">

        <div className="max-w-3xl space-y-6 sm:space-y-8">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Listen to USA Radio Stations Live Online
          </h1>

          {/* Description */}
          <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              Enjoy the sound of American radio no matter where you are in the world.
              Check out live American stations broadcasting news, talk shows, sports,
              music, and cultural shows across the United States.
            </p>

            <p>
              You can search for your favorite stations from coast to coast, find
              various genres, and listen seamlessly, regardless of whether you are
              using a computer or an Android device.
            </p>
          </div>

          {/* Sub CTA */}
          <p className="text-lg sm:text-xl font-semibold">
            Begin listening to the sound of America today.
          </p>

          {/* Button */}
          <div className="pt-2 sm:pt-4">
            <Button>Download Now</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
