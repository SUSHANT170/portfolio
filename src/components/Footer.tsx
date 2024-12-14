import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-heading font-bold">Sushant Kumar</h3>
            <p className="text-gray-300 mt-2">Software Engineer (Full Stack Developer)</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SUSHANT170"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sushant-kumar-6b0978192/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>

            <a
              href="mailto:sushant2may@gmail.com"  // Replace with your actual email
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <FaEnvelope size={24} />
            </a>

          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Sushant Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 