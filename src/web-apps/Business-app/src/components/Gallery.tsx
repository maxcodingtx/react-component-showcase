import React from "react";

const images = Object.values(
  import.meta.glob("../images/gallery/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }),
) as string[];

const Gallery: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#ece4a9] px-3">
      <h1 className="pt-6 text-center font-[Avenir] text-3xl font-bold">
        Gallery
      </h1>
      <div className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-2 md:mx-auto md:w-[600px] md:grid-cols-3">
        {images.map((image, index) => (
          <img
            key={index + 1}
            src={image}
            alt={`Gallery item ${index + 1}`}
            className="h-48 w-full border border-black object-cover"
          />
        ))}
      </div>
    </section>
  );
};
export default Gallery;
