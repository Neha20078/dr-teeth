import { Star, Award, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import doctorImg from "../../assets/padmanaban.png";

export function AboutDoctor() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src={doctorImg}
              alt="Dr. Padmanaban"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl mb-4" style={{ color: '#003049' }}>
              Meet Dr. Padmanaban
            </h2>
            <p className="text-lg mb-2" style={{ color: '#F77F00' }}>
              5+ Years of Experience
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dr. Padmanaban is a highly skilled and compassionate dental professional dedicated to providing exceptional care to every patient. With over 5 years of experience in modern dentistry, Dr. Padmanaban specializes in comprehensive dental treatments, cosmetic procedures, and preventive care. His patient-first approach ensures comfort and confidence at every visit.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-6 h-6" style={{ color: '#FCBF49' }} fill="#FCBF49" />
                  <span className="text-2xl" style={{ color: '#003049' }}>4.9</span>
                </div>
                <p className="text-gray-600 text-sm">Patient Rating</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-6 h-6" style={{ color: '#FCBF49' }} />
                  <span className="text-2xl" style={{ color: '#003049' }}>1000+</span>
                </div>
                <p className="text-gray-600 text-sm">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
