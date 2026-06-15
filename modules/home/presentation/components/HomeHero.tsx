import { ToolCard } from "./ToolCard";
import { getHomeCardsUseCase } from "../../application/use-cases/get-home-cards.use-case";

export function HomeHero() {
  const cards = getHomeCardsUseCase();

  return (
    <main className="min-h-screen bg-black px-5 pb-10 pt-36 md:px-10 md:pt-40">
      <section>
        <p className="text-sm font-black uppercase tracking-wide text-[#2065D1] md:text-base">
          Get Started
        </p>

        <h1 className="hero-title mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          What do you want to create today?
        </h1>

        <p className="mt-3 text-lg font-medium text-zinc-400 md:text-xl">
          Pick a tool and start creating in seconds.
        </p>
      </section>

      <section className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <ToolCard key={card.id} card={card} />
        ))}
      </section>
    </main>
  );
}