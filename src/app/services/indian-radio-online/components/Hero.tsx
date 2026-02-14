import Body from "../../components/Body";
import { INDIAN_RADIO_DATA, WHY_STILL_RADIO } from "../constants";

export default function Page() {
  return (
    <main className="bg-black mt-40 min-h-screen mx-auto max-w-9/12 ">
      {[INDIAN_RADIO_DATA, WHY_STILL_RADIO].map((data, i) => (
        <Body key={i} data={data} />
      ))}
    </main>
  );
}
