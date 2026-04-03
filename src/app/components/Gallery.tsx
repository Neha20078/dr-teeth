import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ5NjUxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Modern waiting room"
    },
    {
      src: "https://images.unsplash.com/photo-1618259715220-a89a4e4da76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ5NjUxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Clinic interior"
    },
    {
      src: "https://images.unsplash.com/photo-1762176211744-735731ee117b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ5NjUxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Modern facility"
    },
    {
      src: "https://images.unsplash.com/photo-1705909773229-411dab40e09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ5NjUxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Reception area"
    },
    {
      src: "https://images.unsplash.com/photo-1771189255360-8785935db0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ5NjUxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Clean hallway"
    },
    {
      src: "https://images.unsplash.com/photo-1742879784756-fe47ad0f7229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ5NjUxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
