import { EXPLORE_INDIAN_RADIO } from "../constants";
import Body from "../../components/Body";
import RadioStationsInIndia from "./RadioStationsInIndia";

export default function Explore() {
  return (
    <main className="bg-black mt-0 mx-auto max-w-9/12 min-h-screen">
      <Body data={EXPLORE_INDIAN_RADIO} />
      <RadioStationsInIndia />
    </main>
  );
}
