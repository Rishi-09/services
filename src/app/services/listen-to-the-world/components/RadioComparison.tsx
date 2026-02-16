import Image from "next/image";
import comparison from "../../../../../public/comparison.png";
export default function RadioComparison() {
  return (
    <section>
      <h2 className="text-4xl text-center font-black p-6">
        Tales FM Offers a superior radio experience
      </h2>
      <div className="flex max-w-5xl mx-auto justify-center text-center p-10 px-4">
        <Image
          loading="eager"
          className="w-full max-w-2xl "
          src={comparison}
          alt="comparison"
        />
      </div>
    </section>
  );
}
