import Image from "next/image";
import Header from "@/components/header";
import Nav from "@/components/Nav";
import Hero from "@/components/hero";
import StarryText from "@/components/starryText";
import BackgroundStars from "@/components/backgroundStars";

export default function Home() {
  return (
    <div className="intro h-screen w-screen overflow-hidden select-none">
      <Header />
      <Nav />
      <Hero />
      <BackgroundStars />
    </div>
  );
}
