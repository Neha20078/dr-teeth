import { Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type HeroSectionProps = {
  onBookAppointment?: () => void;
};

export function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section id="home" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-5xl font-bold mb-2" style={{ color: '#F77F00' }}>
    DR. Teeth
  </p>
            <h1 className="text-5xl mb-6" style={{ color: '#003049' }}>
              Your Trusted Dental Care Partner
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience world-class dental care with Dr. Padmanaban. We combine advanced technology with compassionate care to give you the smile you deserve. Your comfort and oral health are our top priorities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={onBookAppointment}
                className="px-8 py-3 rounded-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: '#F77F00', color: '#FFFFFF' }}
              >
                Book Appointment
              </button>
              
            </div>
          </div>

          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmcmllbmRseSUyMGRlbnRpc3QlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ5NjU4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dental clinic professional care"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
