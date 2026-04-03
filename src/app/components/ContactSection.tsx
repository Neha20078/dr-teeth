import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: '#003049' }}>
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Schedule your appointment today or reach out with any questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FCBF49' }}
                >
                  <MapPin className="w-6 h-6" style={{ color: '#003049' }} />
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: '#003049' }}>
                    Address
                  </h3>
                  <p className="text-gray-600">
                    123 Dental Street, Medical District<br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FCBF49' }}
                >
                  <Phone className="w-6 h-6" style={{ color: '#003049' }} />
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: '#003049' }}>
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    +91 98765 43210<br />
                    +91 98765 43211
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FCBF49' }}
                >
                  <Mail className="w-6 h-6" style={{ color: '#003049' }} />
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: '#003049' }}>
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@drteeth.com<br />
                    appointments@drteeth.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FCBF49' }}
                >
                  <Clock className="w-6 h-6" style={{ color: '#003049' }} />
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: '#003049' }}>
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Mon - Fri: 9:00 AM - 7:00 PM<br />
                    Sat: 9:00 AM - 5:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6 mt-8">
                <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl mb-6" style={{ color: '#003049' }}>
                Send Us A Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003049] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003049] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003049] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#F77F00', color: '#FFFFFF' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
