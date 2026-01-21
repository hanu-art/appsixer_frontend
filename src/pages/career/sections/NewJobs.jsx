import React, { useState, useEffect } from "react";
import {
  CalendarDays,
  MapPin,
  Building2,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------- SKELETON CARD ---------------- */
const JobSkeletonCard = () => (
  <div className="bg-white rounded-xl border border-gray-200 animate-pulse">
    <div className="p-5 border-b">
      <div className="h-5 w-20 bg-gray-200 rounded-full mb-3" />
      <div className="h-5 w-3/4 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-1/2 bg-gray-200 rounded" />
    </div>

    <div className="p-5 space-y-3">
      <div className="h-4 w-2/3 bg-gray-200 rounded" />
      <div className="h-4 w-1/2 bg-gray-200 rounded" />
      <div className="h-4 w-1/3 bg-gray-200 rounded" />
      <div className="h-4 w-full bg-gray-200 rounded mt-3" />
    </div>

    <div className="p-5 pt-0 flex gap-3">
      <div className="h-7 w-16 bg-gray-200 rounded-md" />
      <div className="h-7 w-20 bg-gray-200 rounded-md" />
    </div>
  </div>
);

/* ---------------- MAIN COMPONENT ---------------- */
const NewJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const API_BASE = "http://localhost:3000/api";
  const JOBS_PER_PAGE = 9;

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_BASE}/jobdiva/jobs?page=${currentPage}&limit=${JOBS_PER_PAGE}`
      );
      const result = await response.json();

      if (result.success) {
        setJobs(result.data.jobs);
        setTotalPages(result.data.pagination.totalPages);
        setTotalJobs(result.data.pagination.totalJobs);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setShowDetailsModal(true);
  };

  const handleApply = (job) => {
    if (job.applyLink && job.applyLink !== "#") {
      window.open(job.applyLink, "_blank");
    } else {
      alert("Please contact recruiter directly.");
    }
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  /* ---------------- LOADING UI ---------------- */
  if (loading) {
    return (
      <div className="p-4 md:p-6 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="h-8 w-72 bg-gray-200 rounded mb-3 animate-pulse" />
            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <JobSkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- MAIN UI ---------------- */
  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Latest Job Opportunities
          </h1>
        

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="px-4 py-1.5 bg-[#007bff] text-white text-sm font-medium rounded-full">
              {totalJobs} Jobs Available
            </span>
            <span className="text-sm text-gray-500 bg-white px-3 py-1.5 rounded-md border">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        {/* JOB GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-gray-200 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* CARD HEADER */}
              <div className="p-5 border-b">
                <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700">
                  NEW
                </span>
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 size={14} />
                  {job.company}
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-5 flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={14} />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CalendarDays size={14} />
                  {formatDate(job.postedDate)}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={14} />
                  {job.type}
                </div>

                <p className="text-sm text-gray-700 line-clamp-2 pt-2">
                  {job.description}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="p-5 pt-0 flex items-center gap-3">
                <button
                  onClick={() => handleApply(job)}
                  className="inline-flex items-center justify-center bg-[#007bff] hover:bg-[#0069d9] text-white text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Apply
                </button>

                <button
                  onClick={() => handleViewDetails(job)}
                  className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center items-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 border rounded-md text-sm disabled:opacity-40 hover:bg-gray-100 transition"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-md text-sm font-medium transition ${
                  currentPage === i + 1
                    ? "bg-[#007bff] text-white"
                    : "border hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 border rounded-md text-sm disabled:opacity-40 hover:bg-gray-100 transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showDetailsModal && selectedJob && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-2">
              {selectedJob.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {selectedJob.company} • {selectedJob.location}
            </p>

            <p className="text-sm text-gray-700 whitespace-pre-line mb-6">
              {selectedJob.description}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => handleApply(selectedJob)}
                className="inline-flex items-center justify-center bg-[#007bff] hover:bg-[#0069d9] text-white text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                Apply
              </button>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-3 py-1.5 border rounded-md text-sm hover:bg-gray-100 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewJobs;
