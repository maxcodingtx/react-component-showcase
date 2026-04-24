const images = Object.values(
  import.meta.glob("../images/gallery/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }),
) as string[];

const Gallery = () => {
  return (
    <section className="min-h-screen bg-[var(--color-surface)] px-4">
      <div className="relative overflow-hidden pt-6 pb-2 text-center">
        <span className="section-numeral absolute -top-4 left-1/2 -translate-x-1/2">
          02
        </span>
        <p className="relative font-[Jost] text-xs tracking-[0.3em] text-[var(--color-accent)] uppercase">
          Gallery
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 py-6 md:mx-auto md:w-[640px] md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index + 1} className="group overflow-hidden">
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="h-48 w-full object-cover brightness-95 transition-all duration-400 group-hover:scale-[1.03] group-hover:outline group-hover:outline-1 group-hover:outline-[var(--color-accent)] group-hover:brightness-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Gallery;
