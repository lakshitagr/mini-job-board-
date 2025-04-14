import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-xl font-bold">Mini Job Board</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/add-job" className="hover:underline">Add Job</Link>
        </div>
      </div>
    </nav>
  );
}
