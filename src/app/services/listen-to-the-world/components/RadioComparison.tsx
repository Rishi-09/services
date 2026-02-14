import Image from "next/image";
import comparison from "../../../../../public/comparison.png";
export default function RadioComparison() {
  return (
    <section>
      <div className="flex justify-center text-center tracking-tight">
        <Image loading="eager" src={comparison} alt="comparison" />
      </div>
    </section>
  );
}
