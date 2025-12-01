import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Treatments', href: '/treatments' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/assets/images/shc_logo_exact.svg" alt="Holistic Healthcare Logo" className="h-10 w-auto" loading="lazy" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label={`Go to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="btn"
              aria-label="Book an appointment"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/appointment"
                className="btn w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Book an appointment"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
