import Body from "../../components/Body";
import { INDIAN_RADIO_DATA, WHY_STILL_RADIO } from "../constants";

export default function Page() {
  return (
    <div className="mt-10 space-y-16">
      
      {[INDIAN_RADIO_DATA, WHY_STILL_RADIO].map((data, i) => (
        <Body key={i} data={data} />
      ))}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute -z-9999 inset-0 w-full h-full blur-lg object-cover"
      >
        <source src="/bgAnimation.webm" type="video/webm" />
        <source src="/bgAnimation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
