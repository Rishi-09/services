import ListInfoSection from "./ListInfoSection";
import ParagraphInfoSection from "./ParagraphSection";

import {
  SIMPLE_STEPS_DATA,
  BENEFITS_DATA,
  NRI_SECTION_DATA,
} from "../constants";

export default function Page() {
  return (
    <main className="bg-black text-white">

      <ListInfoSection data={SIMPLE_STEPS_DATA} />
      <ListInfoSection data={BENEFITS_DATA} />
      <ParagraphInfoSection data={NRI_SECTION_DATA} />

    </main>
  );
}
