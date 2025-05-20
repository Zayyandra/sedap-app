import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-4">JobHub</h4>
            <p className="text-gray-400 mb-4">
              The easiest way to get your own food. Connecting people with food.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* For Job Seekers */}
          <div>
            <h5 className="font-semibold mb-4">For Job Seekers</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-white">Job Search</a></li>
              <li><a href="#" className="hover:text-white">Upload Resume</a></li>
              <li><a href="#" className="hover:text-white">Career Advice</a></li>
            </ul>
          </div>
          
          {/* For Employers */}
          <div>
            <h5 className="font-semibold mb-4">For Employers</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Browse Candidates</a></li>
              <li><a href="#" className="hover:text-white">Post a Job</a></li>
              <li><a href="#" className="hover:text-white">Recruiting Solutions</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-2 text-gray-400">
              <li>123 Job Street, Career City</li>
              <li>Email: info@jobhub.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sedap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;