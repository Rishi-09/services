"use client";

export default function HowToStream() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="max-w-4xl space-y-8 sm:space-y-10">

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              How to Stream American Radio on Any Device
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              With Tales FM, seamless streaming of American radio is super easy,
              whether you want to stream on a desktop or on your phone; our
              services will not disappoint you.
            </p>

            <p className="font-semibold text-sm sm:text-base md:text-lg">
              Here is how you can immerse yourself in the world of American radio:
            </p>
          </div>

          {/* Desktop / Web */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-semibold text-base sm:text-lg">
              • For Desktop / Web –
            </p>

            <ol className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg">
              <li>1. Open the official website of Tales FM.</li>
              <li>2. Log in by creating an account.</li>
              <li>3. Choose a station and start listening – without ads.</li>
            </ol>
          </div>

          {/* Android */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-semibold text-base sm:text-lg">
              • For Android –
            </p>

            <ol className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg">
              <li>1. Install our application from Google Play Store.</li>
              <li>2. Log in by creating an account.</li>
              <li>3. Choose a station and start listening – without ads.</li>
            </ol>
          </div>

        </div>

      </div>
    </section>
  );
}
