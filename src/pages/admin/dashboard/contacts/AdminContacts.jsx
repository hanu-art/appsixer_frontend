import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../../components/layout/AdminLayout";
import { getAllContacts } from "../../../../api/adminContact.api";

const AdminContacts = () => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchContacts = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const res = await getAllContacts({ page: pageNumber });
      setContacts(res.data.contacts);
      setMeta(res.data.meta);
    } catch (err) {
      setError("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts(page);
  }, [page]);

  const handleView = (id) => {
    navigate(`/admin/inquiries/${id}`);
  };

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-600 tracking-tight">
          Contact Inquiries
        </h1>

        <p className="text-sm text-gray-400 mt-1 max-w-xl">
          Manage and review all customer inquiries submitted through the website.
        </p>
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-2xl shadow-sm">
        {/* TOP BAR */}
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">
            Showing {contacts.length} of {meta.totalRecords} inquiries
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="px-6 py-4 font-medium">Customer</th>

                {/* ❌ hide on mobile */}
                <th className="hidden md:table-cell px-6 py-4 font-medium">
                  Message
                </th>

                <th className="px-6 py-4 font-medium">Status</th>

                {/* ❌ hide on mobile */}
                <th className="hidden md:table-cell px-6 py-4 font-medium">
                  Received
                </th>

                <th className="px-6 py-4 text-right font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  {/* CUSTOMER */}
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {contact.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {contact.email}
                    </div>

                    {/* 📱 MOBILE: show date here */}
                    <div className="md:hidden text-xs text-gray-400 mt-1">
                      {new Date(contact.created_at).toLocaleDateString()}
                    </div>
                  </td>

                  {/* MESSAGE (DESKTOP ONLY) */}
                  <td className="hidden md:table-cell px-6 py-4 max-w-md">
                    <p className="text-gray-700 truncate">
                      {contact.message}
                    </p>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium
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
                  </td>

                  {/* DATE (DESKTOP ONLY) */}
                  <td className="hidden md:table-cell px-6 py-4 text-gray-500">
                    {new Date(contact.created_at).toLocaleString()}
                  </td>

                  {/* ACTION */}
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleView(contact.id)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      View →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="px-6 py-4 border-t flex items-center justify-between text-sm">
          <p className="text-gray-500">
            Page {meta.page} of {meta.totalPages}
          </p>

          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1 rounded-md border disabled:opacity-40"
            >
              Previous
            </button>

            <button
              disabled={page === meta.totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 rounded-md border disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminContacts;
