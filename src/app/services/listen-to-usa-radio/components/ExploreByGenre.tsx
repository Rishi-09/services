// ExploreByGenre.tsx
import Accordion from "./Accordion";
import { genres } from "../constants";
export default function ExploreByGenre() {
  return (
    <section className="bg-black text-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 mb-10 md:mb-12 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Explore USA Radio by Genre
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            USA radio is known for its diverse high-energy genres. Whether you
            are in the mood for listening to pop songs or just want meaningful
            conversations, there is always a genre that matches your taste.
          </p>

          <p className="text-white font-semibold text-base sm:text-lg">
            Here are some of the popular American radio genres along with a list
            of genre-based radio stations:
          </p>
        </div>

        <Accordion items={genres} />
      </div>
    </section>
  );
}
