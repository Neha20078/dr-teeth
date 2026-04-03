import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    {
      src: new URL("../../assets/clinic_image-1.png", import.meta.url).href,
      alt: "Modern waiting room"
    },
    {
      src: new URL("../../assets/clinic_image-2.png", import.meta.url).href,
      alt: "Clinic interior"
    },
    {
      src: new URL("../../assets/clinic_image-3.png", import.meta.url).href,
      alt: "Modern facility"
    },
    {
      src: new URL("../../assets/clinic_image-4.png", import.meta.url).href,
      alt: "Reception area"
    },
    {
      src: new URL("../../assets/clinic_image-5.png", import.meta.url).href,
      alt: "Clean hallway"
    },
    {
      src: new URL("../../assets/clinic_image-6.png", import.meta.url).href,
      alt: "Consultation area"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: '#003049' }}>
            Our Clinic
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a look at our modern, comfortable facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
