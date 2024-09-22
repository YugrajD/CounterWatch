import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ heroes }) => {
  const [heroReference, setHeroReference] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5030/api/feedback', {
        heroReference,
        suggestion,
      });

      // Display success message and clear form
      setMessage(response.data.message);
      setHeroReference('');
      setSuggestion('');
      setShowModal(false); // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Submit Feedback
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Hero:</label>
                <select
                  value={heroReference}
                  onChange={(e) => setHeroReference(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  <option value="">Select a hero</option>
                  {heroes.map((hero, index) => (
                    <option key={index} value={hero.alt}>
                      {hero.alt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Suggestion:</label>
                <textarea
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Submit Feedback
              </button>
            </form>

            {message && <p className="mt-4 text-center">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
