'use client';

import { Phone, Mail, User } from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    title: "Phone Number",
    content: "(+91) 987 654 321",
    bgColor: "bg-[#1B4B66]",
    textColor: "text-white"
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "No-Reply@gmail.com",
    bgColor: "bg-[#E3F2F9]",
    textColor: "text-[#1B4B66]"
  },
  {
    icon: User,
    title: "24/7 Customer",
    content: "Book Store 24 x 7",
    bgColor: "bg-[#1B4B66]",
    textColor: "text-white"
  }
];

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} rounded-2xl p-6 transform hover:-translate-y-1 transition-transform duration-300 shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${card.bgColor === 'bg-[#1B4B66]' ? 'bg-white/10' : 'bg-[#1B4B66]/10'}`}>
                  <card.icon className={`w-6 h-6 ${card.bgColor === 'bg-[#1B4B66]' ? 'text-white' : 'text-[#1B4B66]'}`} />
                </div>
                <div>
                  <h3 className={`font-medium ${card.textColor}`}>{card.title}</h3>
                  <p className={`${card.textColor} opacity-90`}>{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1B4B66]">Essential Vitamins</h2>
            <p className="text-gray-600">Your trusted source for premium quality vitamins and supplements.</p>
          </div>

          {['Company', 'Support', 'Resources'].map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-[#1B4B66]">{section}</h3>
              <ul className="space-y-2">
                {['About Us', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-600 hover:text-[#1B4B66] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            {new Date().getFullYear()} Essential Vitamins. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
