import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
const SportsEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchCulturalEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/sports-events/');
        
        // Ensure the response is parsed properly
        const eventData = JSON.parse(response.data);
        
        // Map the event data to only include the "fields" for each event
        const formattedEvents = eventData.map(event => event.fields);
        
        setEvents(formattedEvents);  // Set the formatted event data in state
      } catch (error) {
        console.error('Error fetching cultural events:', error);
        setEvents([]);  // Set to an empty array in case of error
      }
    };

    fetchCulturalEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Technical Fest Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <p>No technical events found.</p>  // Display message if no events
        ) : (
          events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-gray-500">
                  <strong>Date:</strong> {new Date(event.start_date).toLocaleDateString()} - {new Date(event.end_date).toLocaleDateString()}
                </p>
                <p className="text-gray-500">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
              <Link to='/register'>
              <div className="bg-blue-500 text-white p-4 text-center">
                <button className="w-full">Register</button>
              </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SportsEvent;
