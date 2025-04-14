import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
  const [form, setForm] = useState({
    title: "", company: "", type: "", location: "", description: ""
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs", form);
      navigate("/");
    } catch (err) {
      alert("Failed to add job");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Post a New Job</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input
            id="title"
            name="title"
            placeholder="e.g. Frontend Developer"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input
            id="company"
            name="company"
            placeholder="e.g. Google"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
          <select
            id="type"
            name="type"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            id="location"
            name="location"
            placeholder="e.g. Remote or New York"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Write a brief job description..."
            required
            rows="5"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

