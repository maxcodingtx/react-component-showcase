import aboutUsImage from "../images/about-us-image.png";

const AboutUs = () => {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="relative overflow-hidden px-5 py-4 md:py-8">
        <span className="section-numeral absolute -top-4 left-2 select-none">
          01
        </span>
        <h1 className="relative font-[Cormorant_Garamond] text-3xl font-semibold text-[var(--color-text)] md:text-6xl">
          Our Creative Story Begins
        </h1>
      </div>

      <div className="border-t border-b border-[var(--color-border)] md:flex">
        <img
          className="h-auto w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0 md:w-1/2"
          src={aboutUsImage}
          alt="About us"
        />

        <div className="px-5 pt-8 pb-12 md:w-1/2 md:pl-10">
          <h2 className="mb-6 font-[Cormorant_Garamond] text-2xl font-semibold text-[var(--color-text)] md:text-4xl">
            Who We Are
          </h2>
          <p className="pull-quote font-[Jost] text-base leading-relaxed font-light md:max-w-sm md:text-lg">
            We are a team of passionate individuals dedicated to delivering the
            best services to our clients. Our mission is to help businesses grow
            and succeed through innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
