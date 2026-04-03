import { Sparkles, Shield, Smile, Stethoscope, Scissors, Baby } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Smile,
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile."
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Regular checkups and cleanings to maintain optimal oral health."
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, bonding, and aesthetic treatments."
    },
    {
      icon: Stethoscope,
      title: "Root Canal Therapy",
      description: "Painless root canal treatment using the latest technology."
    },
    {
      icon: Scissors,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel natural."
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Gentle, specialized care for children's dental health."
    }
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: '#003049' }}>
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: '#FCBF49' }}
              >
                <service.icon className="w-7 h-7" style={{ color: '#003049' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#003049' }}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
