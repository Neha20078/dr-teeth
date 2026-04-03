import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutDoctor } from "./components/AboutDoctor";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { PatientReviews } from "./components/PatientReviews";
import { Gallery } from "./components/Gallery";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import BookAppointmentPage from "./components/pages/BookAppointmentPage";

export default function App() {
  const [page, setPage] = useState<"home" | "book">("home");

  const openBookAppointment = () => {
    setPage("book");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar
        onBookAppointment={openBookAppointment}
        onHome={openHome}
        isBookingPage={page === "book"}
      />

      {page === "home" ? (
        <>
          <HeroSection onBookAppointment={openBookAppointment} />
          <AboutDoctor />
          <Services />
          <WhyChooseUs />
          <PatientReviews />
          <Gallery />
          <ContactSection />
        </>
      ) : (
        <BookAppointmentPage />
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}