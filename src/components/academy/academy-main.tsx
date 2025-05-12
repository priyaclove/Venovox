'use client';

import React, { useEffect } from 'react';
import { 
  BarChart2, 
  Shield, 
  TriangleAlert, 
  Settings, 
  UserCheck,
  TrendingUp 
} from 'lucide-react';

export default function TrainingPage() {
  useEffect(() => {
    const animateSections = () => {
      document.querySelectorAll('.training-section').forEach((section, index) => {
        setTimeout(() => {
          section.classList.add('animate-fade-in-up');
        }, 150 * index);
      });
    };
    animateSections();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Section 1 - Business Intelligence */}
        <div className="training-section opacity-0 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-7/10 p-6 bg-gray-100 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                Business Intelligence and Analytics involves the exploration of techniques 
                and tools used to gather information, organize data, and interpret it in order 
                to facilitate business decision-making. This program enables trainees to 
                discover fresh insights through data visualization, optimize the business 
                impact of social media data, and seamlessly incorporate analytics into 
                marketing strategies to enhance customer value.
              </p>
            </div>
            <div className="w-full md:w-3/10 flex flex-col items-center md:items-start">
              <BarChart2 className="w-12 h-12 text-red-600 mb-4" />
              <h2 className="text-3xl font-bold text-black text-center md:text-left">Business Intelligence</h2>
            </div>
          </div>
        </div>

        {/* Section 2 - Executive Protection */}
        <div className="training-section opacity-0 mb-16">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-gray-100 p-8 rounded-lg">
            <div className="w-full md:w-7/10 p-6">
              <p className="text-gray-800 leading-relaxed">
                Bodyguards and executive protection strategies are distinct from each other. 
                Executive protection, also referred to as close protection, entails security 
                measures implemented to safeguard VIPs, celebrities, executives, or individuals 
                who face heightened personal risks due to factors such as their occupation, fame, 
                wealth, affiliations, or geographic location.
              </p>
            </div>
            <div className="w-full md:w-3/10 flex flex-col items-center md:items-start">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h2 className="text-3xl font-bold text-black text-center md:text-left">Executive Protection</h2>
            </div>
          </div>
        </div>

        {/* Section 3 - Emergency Response */}
        <div className="training-section opacity-0 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-7/10 p-6 bg-gray-100 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                Unforeseen emergencies and disasters can arise unexpectedly at any given 
                moment. The level of preparedness exhibited by a corporation directly 
                influences their ability to respond effectively, reducing panic and disorder in 
                emergency situations.
              </p>
            </div>
            <div className="w-full md:w-3/10 flex flex-col items-center md:items-start">
              <TriangleAlert className="w-12 h-12 text-red-600 mb-4" />
              <h2 className="text-3xl font-bold text-black text-center md:text-left">Emergency Response</h2>
            </div>
          </div>
        </div>

        {/* Section 4 - Security Management */}
        <div className="training-section opacity-0 mb-16">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-gray-100 p-8 rounded-lg">
            <div className="w-full md:w-7/10 p-6">
              <p className="text-gray-800 leading-relaxed">
                Tomorrow's security leaders, our Security Management Training
                program equips participants with comprehensive knowledge of
                security operations, risk assessment, and crisis management.
              </p>
            </div>
            <div className="w-full md:w-3/10 flex flex-col items-center md:items-start">
              <Settings className="w-12 h-12 text-red-600 mb-4" />
              <h2 className="text-3xl font-bold text-black text-center md:text-left">Security Management</h2>
            </div>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg border border-gray-200 animate-bounce">
          <div className="relative">
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-xs text-white">1</span>
            <UserCheck className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}