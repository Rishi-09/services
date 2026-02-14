import { InfiniteMovingCards } from "../ui/infinite-moving-cards";



export function InfiniteMovingCardsUsage({testimonials}) {
  return (
    <div className="h-160 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}