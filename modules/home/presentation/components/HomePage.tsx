import { Navbar } from "./Navbar";
import { TopOfferBar } from "./TopOfferBar";
import { HomeHero } from "./HomeHero";

export function HomePage() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
      <TopOfferBar />
      <Navbar />
      <HomeHero />
    </div>
  );
}
