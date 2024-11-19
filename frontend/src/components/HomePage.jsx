import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cultural Fest Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Cultural Fest</h2>
            <p className="text-gray-600">
              Join us for an amazing celebration of culture, music, and art!
            </p>
          </div>
          <Link to="/cultural-events">
            <div className="bg-blue-500 text-white p-4 text-center cursor-pointer">
              Learn More
            </div>
          </Link>
        </div>

        {/* Technical Fest Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Technical Fest</h2>
            <p className="text-gray-600">
              Explore the world of technology with exciting events and workshops!
            </p>
          </div>
          <Link to="/technical-events">
            <div className="bg-blue-500 text-white p-4 text-center cursor-pointer">
              Learn More
            </div>
          </Link>
        </div>

        {/* Sports Event Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Sports Event</h2>
            <p className="text-gray-600">
              Showcase your athletic skills and team spirit in thrilling sports competitions!
            </p>
          </div>
          <Link to="/sports-events">
            <div className="bg-blue-500 text-white p-4 text-center cursor-pointer">
              Learn More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
