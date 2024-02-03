import React, { useState } from 'react';
import axios from 'axios';

function TextSubmit() {
  const [homework, setHomework] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit-homework', { text: homework });
      alert('Homework submitted! Response: ' + response.data.message);
    } catch (error) {
      alert('Error submitting homework');
    }
  };

  return (
    <div>
      <h1>Homework Submission</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={homework}
          onChange={(e) => setHomework(e.target.value)}
          placeholder="Paste your homework here"
          rows="10"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Submit Homework</button>
      </form>
    </div>
  );
}

export default TextSubmit;
