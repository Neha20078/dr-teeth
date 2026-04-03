import { Clock, ThumbsUp, Award, Heart } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times that fit your busy lifestyle"
    },
    {
      icon: ThumbsUp,
      title: "Modern Technology",
      description: "State-of-the-art equipment for precise and comfortable care"
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Highly qualified professionals dedicated to excellence"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans tailored to your needs"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: '#003049' }}>
            Why Choose Dr. Teeth?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your comfort and satisfaction are our top priorities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: '#FCBF49' }}
              >
                <feature.icon className="w-8 h-8" style={{ color: '#003049' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#003049' }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
