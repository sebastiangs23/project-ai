import { Navbar } from "./Navbar";
import { TopOfferBar } from "./TopOfferBar";
import { HomeHero } from "./HomeHero";

export function HomePage() {
  return (
    <>
      <TopOfferBar />
      <Navbar />
      <HomeHero />
    </>
  );
}