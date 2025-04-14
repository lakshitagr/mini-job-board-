import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Briefcase, MapPin, Building2, Info } from "lucide-react";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${id}`)
      .then(res => {
        console.log("Job details response:", res.data);
        setJob(res.data.job || res.data);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!job) return <p className="text-center text-gray-600 mt-10">Loading job details...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-md mt-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{job.title}</h1>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-gray-600 mt-1" />
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Company</h2>
            <p className="text-gray-700 text-base">{job.company}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-600 mt-1" />
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Location</h2>
            <p className="text-gray-700 text-base">{job.location}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-gray-600 mt-1" />
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Job Type</h2>
            <p className="text-gray-700 text-base">{job.type}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-gray-600 mt-1" />
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Description</h2>
            <p className="text-gray-800 text-base whitespace-pre-line">{job.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
