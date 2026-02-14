"use client";
import Button from "../../ui/Button";

export default function CTASection() {
  const handleDownload = () => {
    // Add your download logic here
    console.log("Download Now clicked");
  };

  const handleListenLive = () => {
    // Add your listen live logic here
    console.log("Listen Live clicked");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      
      <div className="max-w-4xl w-full bg-zinc-900/40 border border-zinc-800 rounded-3xl p-12 md:p-16 backdrop-blur-sm">
      
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Start Listening to Free Radio Today
          </h2>

          {/* Description Paragraph */}
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Join the community of listeners who have chosen TalesFM for their
            daily audio fix. Whether you want live radio broadcasting for
            breaking news or a relaxing playlist for studying, we have you
            covered. Experience the power of a truly global, ad-free radio
            streaming service. Your search for the perfect player ends here
          </p>

          {/* Subheading */}
          <h3 className="text-xl md:text-2xl text-zinc-200 font-medium pt-4">
            Discover live radio without interruptions — anytime, anywhere.
          </h3>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button onClick={handleDownload}>Download Now</Button>
            <Button onClick={handleListenLive}>Listen Live</Button>
          </div>
        </div>
      </div>
    </div>
  );
}