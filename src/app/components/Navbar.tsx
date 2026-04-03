type NavbarProps = {
  onBookAppointment?: () => void;
  onHome?: () => void;
  isBookingPage?: boolean;
};

export function Navbar({ onBookAppointment, onHome, isBookingPage = false }: NavbarProps) {
  const navigateToSection = (sectionId: string) => {
    if (isBookingPage) {
      onHome?.();
      window.setTimeout(() => {
        window.location.hash = sectionId;
      }, 0);
      return;
    }

    window.location.hash = sectionId;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button onClick={onHome} className="text-2xl font-bold" style={{ color: '#003049' }}>Dr. Teeth</button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigateToSection("home")} className="text-gray-700 hover:text-[#003049] transition-colors">Home</button>
            <button onClick={() => navigateToSection("about")} className="text-gray-700 hover:text-[#003049] transition-colors">About Doctor</button>
            <button onClick={() => navigateToSection("services")} className="text-gray-700 hover:text-[#003049] transition-colors">Services</button>
            <button onClick={() => navigateToSection("reviews")} className="text-gray-700 hover:text-[#003049] transition-colors">Reviews</button>
            <button onClick={() => navigateToSection("contact")} className="text-gray-700 hover:text-[#003049] transition-colors">Contact</button>
            {isBookingPage && (
              <button onClick={onHome} className="text-gray-700 hover:text-[#003049] transition-colors">Back to Home</button>
            )}
          </div>

          <button
            onClick={onBookAppointment}
            className="px-6 py-2.5 rounded-lg transition-all hover:shadow-md"
            style={{ backgroundColor: '#F77F00', color: '#FFFFFF' }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
