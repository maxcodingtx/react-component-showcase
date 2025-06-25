import "./index.css";
import {
  NavBar,
  HeroSection,
  OverviewSection,
  PricingSection,
  TestimonialSection,
} from "./components/barrel";

const MacBookEventPage = () => {
  return (
    <main className="font-roboto mx-auto my-6 block w-[min(800px,90%-2rem)] rounded-2xl bg-[#e7e4e0] px-8 py-3">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
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
      <PricingSection></PricingSection>
      <TestimonialSection
        names={["Sarah W.", "Haji W.", "Nick P.", "Richard P."]}
        testimonies={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium accusamus excepturi ipsam incidunt unde tenetur, repellat illo minima placeat.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium accusamus excepturi ipsam incidunt unde tenetur, repellat illo minima placeat.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium accusamus excepturi ipsam incidunt unde tenetur, repellat illo minima placeat.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium accusamus excepturi ipsam incidunt unde tenetur, repellat illo minima placeat.",
        ]}
      ></TestimonialSection>
    </main>
  );
};

export default MacBookEventPage;
