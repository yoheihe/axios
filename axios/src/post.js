import { useState } from 'react';
import './App.css';
import axios from 'axios';

const url = 'https://sample-api.manabupanda.net/api/list';

const PostRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { name, email });
      console.log(response.data);
    } catch (error) {
      console.error('Error making the post request:', error);
    }
    
  };

  

  return (
    <section>
      <h2 className="text-center">Post Request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </section>
  );
};

export default PostRequest;
