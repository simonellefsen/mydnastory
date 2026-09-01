import { Ancient } from "@/components/Ancient";
import { Connections } from "@/components/Connections";
import { Genome } from "@/components/Genome";
import { Hero } from "@/components/Hero";
import { Motherline } from "@/components/Motherline";
import { Notes } from "@/components/Notes";
import { Origins } from "@/components/Origins";
import { SiteNav } from "@/components/SiteNav";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Origins />
        <Ancient />
        <Motherline />
        <Connections />
        <Genome />
        <Notes />
      </main>
    </>
  );
}
