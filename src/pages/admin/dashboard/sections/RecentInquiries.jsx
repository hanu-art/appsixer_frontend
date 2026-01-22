import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLatestContacts } from "../../../../api/adminContact.api";

const RecentInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchLatest = async () => {
    try {
      const res = await getLatestContacts();
      setInquiries(res.data.contacts || []);
    } catch (err) {
      console.error("Failed to load recent inquiries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  return (
    <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      
      {/* HEADER */}
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Inquiries
        </h2>

        <Link
          to="/admin/inquiries"
          className="text-sm font-medium text-[#007bff] hover:underline"
        >
          View all
        </Link>
      </div>

      {/* COLUMN LABELS (DESKTOP ONLY) */}
      {!loading && inquiries.length > 0 && (
        <div className="hidden md:grid px-6 py-2 border-b grid-cols-3 text-xs uppercase tracking-wide text-gray-400 bg-gray-50">
          <div>Customer</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <p className="px-6 py-6 text-sm text-gray-500">
          Loading recent inquiries...
        </p>
      )}

      {/* EMPTY */}
      {!loading && inquiries.length === 0 && (
        <p className="px-6 py-6 text-sm text-gray-500">
          No recent inquiries yet
        </p>
      )}

      {/* LIST */}
      {!loading && inquiries.length > 0 && (
        <div className="divide-y">
          {inquiries.map((item) => (
            <div
              key={item.id}
              className="
                group px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0
                hover:bg-gray-50 transition relative
              "
            >
              {/* LEFT HOVER ACCENT */}
              <span className="absolute left-0 top-0 h-full w-0.5 bg-[#007bff] opacity-0 group-hover:opacity-100 transition" />

              {/* CUSTOMER */}
              <div>
                <p className="font-medium text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.email}
                </p>
              </div>

              {/* STATUS + ACTION (MOBILE) */}
              <div className="flex justify-between items-center md:block">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                    ${
                      item.status === "new"
                        ? "bg-blue-50 text-blue-700"
                        : item.status === "contacted"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-green-50 text-green-700"
                    }`}
                >
                  {item.status}
                </span>

                <button
                  onClick={() =>
                    navigate(`/admin/inquiries/${item.id}`)
                  }
                  className="text-sm font-medium text-[#007bff] hover:text-[#0069d9] md:hidden"
                >
                  Open →
                </button>
              </div>

              {/* ACTION (DESKTOP) */}
              <div className="hidden md:flex justify-end items-center">
                <button
                  onClick={() =>
                    navigate(`/admin/inquiries/${item.id}`)
                  }
                  className="
                    text-sm font-medium text-[#007bff]
                    opacity-80 group-hover:opacity-100
                    transition
                  "
                >
                  Open inquiry →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BOTTOM SPACING */}
      <div className="h-4" />
    </div>
  );
};

export default RecentInquiries;
