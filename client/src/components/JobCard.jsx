import { Link } from "react-router-dom";
import { Briefcase, MapPin, Building2 } from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all bg-white flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{job.title}</h2>

        <div className="flex items-center gap-2 mb-2 text-gray-600">
          <Building2 className="w-4 h-4" />
          <span className="font-medium">{job.company}</span>
        </div>

        <div className="flex items-center gap-2 mb-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Briefcase className="w-4 h-4" />
          <span>{job.type}</span>
        </div>
      </div>

      <div className="mt-6">
        <Link 
          to={`/job/${job._id}`} 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
