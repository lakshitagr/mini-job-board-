import Job from "../models/Job.js";

// Get ALL joBS
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

// Get a single job by ID
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Create a new job
const createJob = async (req, res) => {
  const { title, company, type, location, description } = req.body;
  if (!title || !company || !type || !location || !description) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    const newJob = new Job({ title, company, type, location, description });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ error: "Failed to create job" });
  }
};

export {
  getAllJobs,
  getJobById,
  createJob,
};
