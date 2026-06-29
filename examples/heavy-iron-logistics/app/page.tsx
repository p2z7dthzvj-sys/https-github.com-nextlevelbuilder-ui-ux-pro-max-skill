import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Coverage } from "@/components/Coverage";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <Coverage />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
