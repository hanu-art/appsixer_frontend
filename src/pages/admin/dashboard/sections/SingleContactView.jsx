import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../../../components/layout/AdminLayout";
import {
  getContactById,
  updateContactStatus,
} from "../../../../api/adminContact.api";

const SingleContactView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const fetchContact = async () => {
    try {
      const res = await getContactById(id);
      setContact(res.data || res);
    } catch {
      setError("Failed to load contact details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContact();
  }, [id]);

  const nextStatus =
    contact?.status === "new"
      ? "contacted"
      : contact?.status === "contacted"
      ? "resolved"
      : null;

  const handleStatusUpdate = async () => {
    if (!nextStatus) return;

    try {
      setUpdating(true);
      await updateContactStatus(contact.id, nextStatus);
      await fetchContact();
    } catch {
      alert("Failed to update status");
    } finally {
      setUpdating(false);
      setShowConfirm(false);
    }
  };

  return (
    <AdminLayout>
      {/* PAGE WRAPPER BG */}
      <div className="bg-gray-50 rounded-2xl p-6">
        {/* HEADER */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-blue-600 hover:text-blue-600 font-medium mb-2 inline-block"
          >
            ← Back to inquiries
          </button>

          <h1 className="text-3xl font-semibold text-gray-600 tracking-tight">
            Inquiry Details
          </h1>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-sm">
          {loading && (
            <p className="text-sm text-gray-500 p-6">Loading contact…</p>
          )}

          {error && (
            <p className="text-sm text-red-500 p-6">{error}</p>
          )}

          {!loading && !error && contact && (
            <div className="p-6 space-y-10">
              {/* META */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Info label="Name" value={contact.name} />
                <Info label="Email" value={contact.email} />
                {contact.phone && (
                  <Info label="Phone" value={contact.phone} />
                )}
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Status
                  </p>
                  <span
                    className={`inline-flex mt-1 px-3 py-1 rounded-full text-xs font-medium
                      ${
                        contact.status === "new"
                          ? "bg-blue-50 text-blue-700"
                          : contact.status === "contacted"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-green-50 text-green-700"
                      }`}
                  >
                    {contact.status}
                  </span>
                </div>
              </div>

              {/* DATE */}
              <Info
                label="Received At"
                value={new Date(contact.created_at).toLocaleString()}
              />

              {/* MESSAGE */}
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Message
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                    {contact.message}
                  </p>
                </div>
              </div>

              {/* ACTION SECTION */}
              {nextStatus && (
                <div className="pt-6 border-t flex justify-end">
                  <button
                    onClick={() => setShowConfirm(true)}
                    className="bg-[#007bff] hover:bg-[#0069d9] text-white text-sm font-medium px-6 py-2.5 rounded-md transition"
                  >
                    {nextStatus === "contacted"
                      ? "Mark as Contacted"
                      : "Mark as Resolved"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* CONFIRM MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Confirm Status Change
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to mark this inquiry as{" "}
              <span className="font-medium">{nextStatus}</span>?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 text-sm rounded-md border"
              >
                Cancel
              </button>

              <button
                onClick={handleStatusUpdate}
                disabled={updating}
                className="px-4 py-2 text-sm rounded-md bg-[#007bff] hover:bg-[#0069d9] text-white disabled:opacity-50"
              >
                Yes, confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs uppercase tracking-wide text-gray-500">
      {label}
    </p>
    <p className="text-base text-gray-900 mt-1">{value}</p>
  </div>
);

export default SingleContactView;
