import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">PUP CSC</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Central Student Council of the Polytechnic University of the Philippines Lopez Campus,
              serving students with dedication and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about-csc" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                  About CSC
                </a>
              </li>
              <li>
                <a href="#officers" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                  Officers
                </a>
              </li>
              <li>
                <a href="#university" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                  University
                </a>
              </li>
              <li>
                <a href="#mission-vision" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#updates" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Polytechnic University of the Philippines Lopez, Campus</li>
              <li>Lopez, Quezon</li>
              <li>Phone: --</li>
              <li>Email: puplopezcentralstudentcouncil@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/puplopezCSC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} PUP Lopez Central Student Council. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-4 md:mt-0">
              Hobby Project By Jon Carlo :3
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

