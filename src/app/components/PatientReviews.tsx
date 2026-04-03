import { Star } from "lucide-react";

export function PatientReviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Dr. Padmanaban and his team made my dental experience absolutely wonderful. Professional, caring, and thorough. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best dental clinic I've ever been to. The staff is friendly and the facilities are top-notch. My teeth have never looked better!",
      date: "1 month ago"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "I was nervous about my root canal, but Dr. Padmanaban made it painless and comfortable. Excellent service and care!",
      date: "3 weeks ago"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Great experience from start to finish. The clinic is modern, clean, and the doctor really takes time to explain everything.",
      date: "2 months ago"
    }
  ];

  return (
    <section id="reviews" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: '#003049' }}>
            Patient Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            What our patients say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ color: '#FCBF49' }}
                    fill="#FCBF49"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center">
                <p style={{ color: '#003049' }}>
                  {review.name}
                </p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
