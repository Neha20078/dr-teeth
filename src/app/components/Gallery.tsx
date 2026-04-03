import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    {
      src: "/src/assets/clinic_img-1.png",
      alt: "Modern waiting room"
    },
    {
      src: "/src/assets/clinic_image-2.png",
      alt: "Clinic interior"
    },
    {
      src: "/src/assets/clinic_image-3.png",
      alt: "Modern facility"
    },
    {
      src: "/src/assets/clinic_image-4.png",
      alt: "Reception area"
    },
    {
      src: "/src/assets/clinic_image-5.png",
      alt: "Clean hallway"
    },
    {
      src: "/src/assets/clinic_image-6.png",
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
