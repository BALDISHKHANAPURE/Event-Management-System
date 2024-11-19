import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventRegistrationForm = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [technicalEvents, setTechnicalEvents] = useState([]);
  const [culturalEvents, setCulturalEvents] = useState([]);
  const [sportsEvents, setSportsEvents] = useState([]);
  const [error, setError] = useState('');
  
  // Fetch both technical and cultural events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch technical events
        const technicalResponse = await axios.get('http://localhost:8000/technical-events/');
        const technicalData = JSON.parse(technicalResponse.data);
        const formattedTechnicalEvents = technicalData.map(event => ({
          id: event.pk,
          name: event.fields.name,
        }));

        // Fetch cultural events
        const culturalResponse = await axios.get('http://localhost:8000/cultural-events/');
        const culturalData = JSON.parse(culturalResponse.data);
        const formattedCulturalEvents = culturalData.map(event => ({
          id: event.pk,
          name: event.fields.name,
        }));
        const sportsResponse = await axios.get('http://localhost:8000/sports-events/');
        const sportsData = JSON.parse(sportsResponse.data);
        const formattedSportsEvents = sportsData.map(event => ({
          id: event.pk,
          name: event.fields.name,
        }));

        // Set the formatted data
        setTechnicalEvents(formattedTechnicalEvents);
        setCulturalEvents(formattedCulturalEvents);
        setSportsEvents(formattedSportsEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !rollNumber || !selectedEvent) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const payload = {
        name: name,
        roll_number: rollNumber,
        event: selectedEvent,
      };

      await axios.post('http://localhost:8000/register-event/', payload);
      alert('Registration successful!');
      setName('');
      setRollNumber('');
      setSelectedEvent('');
      setError('');
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Event Registration</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your name"
            />
          </div>

          {/* Roll Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Roll Number</label>
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your roll number"
            />
          </div>

          {/* Event Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Event</label>
            <select
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            >
              <option value="">Select an event</option>
              {/* Technical Events */}
              {technicalEvents.map((event) => (
                <option key={event.id} value={`Technical_${event.id}`}>
                  {event.name} (Technical Event)
                </option>
              ))}
              {sportsEvents.map((event) => (
                <option key={event.id} value={`Sports_${event.id}`}>
                  {event.name} (Sports Event)
                </option>
              ))}

              {/* Cultural Events */}
              {culturalEvents.map((event) => (
                <option key={event.id} value={`Cultural_${event.id}`}>
                  {event.name} (Cultural Event)
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
