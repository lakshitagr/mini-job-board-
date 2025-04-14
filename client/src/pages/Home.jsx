import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then(res => {
        console.log(res.data);
        setJobs(res.data);
        setLoading(false);
      }).catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);



  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      <input
        type="text"
        placeholder="Search by title or location"
        className="border p-2 w-full mb-4 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p className="text-center">Loading jobs...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.length > 0 ? filtered.map(job => (
            <JobCard key={job._id} job={job} />
          )) : <p>No jobs found.</p>}
        </div>
      )}
    </div>
  );
}
