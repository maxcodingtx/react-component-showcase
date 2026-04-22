import "./index.css";
import {
  NavBar,
  HeroSection,
  OverviewSection,
  PricingSection,
  TestimonialSection,
} from "./components/barrel";

const MacBookMain = () => {
  return (
    <div className="relative min-h-screen bg-[var(--mb-base)] text-[var(--mb-text-primary)]">
      <div className="pointer-events-none fixed top-0 left-1/2 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(123,175,212,0.07)_0%,transparent_70%)] blur-3xl" />

      <main className="relative z-10 mx-auto my-6 w-[min(860px,90%-2rem)] px-8 py-3 font-['DM_Sans',sans-serif]">
        <div className="animate-section animate-delay-1">
          <NavBar />
        </div>
        <div className="animate-section animate-delay-2">
          <HeroSection />
        </div>
        <div className="animate-section animate-delay-3">
          <OverviewSection
            facts={[
              "Stunning Display",
              "High Performance",
              "All-Day Battery",
              "Advanced Security",
            ]}
            factsInfo={[
              "High resolution, color accurate, and great aspect ratio.",
              "Advanced cooling capacity delivers the best performance in intense workloads.",
              "When fully charged, the battery can last up to a full day!",
              "Stronger security allows for strong, secure privacy",
            ]}
          />
        </div>
        <div className="animate-section animate-delay-4">
          <PricingSection />
        </div>
        <div className="animate-section animate-delay-5">
          <TestimonialSection
            names={["Sarah W.", "Haji W.", "Nick P.", "Richard P."]}
            testimonies={[
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium accusamus excepturi ipsam incidunt unde tenetur, repellat illo minima placeat.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium accusamus excepturi ipsam incidunt unde tenetur, repellat illo minima placeat.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium accusamus excepturi ipsam incidunt unde tenetur, repellat illo minima placeat.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium accusamus excepturi ipsam incidunt unde tenetur, repellat illo minima placeat.",
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default MacBookMain;
