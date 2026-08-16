import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ImageTicker } from "@/components/image-ticker";
import { Approach } from "@/components/approach";
import { Solutions } from "@/components/solutions";
import { Services } from "@/components/services";
import { OperatorAdvantage } from "@/components/operator-advantage";
import { ClientLogosTicker } from "@/components/client-logos-ticker";
import { AboutMe } from "@/components/about-me";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-black light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />
      <Hero />
      <ImageTicker />
      <Approach />
      <Services />
      <OperatorAdvantage />
      <Solutions />
      <ClientLogosTicker />
      <AboutMe />
      <ContactForm />
      <Footer />
    </main>
  );
}
