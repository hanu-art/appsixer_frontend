import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/layout/AdminLayout";
import { logoutAdmin, getMe } from "../../../api/auth.api";

const AdminSettings = () => {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await getMe();
        setAdmin(res.data);
      } catch {
        navigate("/admin/login", { replace: true });
      }
    };
    fetchAdmin();
  }, [navigate]);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);

    try {
      console.log(await logoutAdmin());
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        navigate("/", { replace: true });
      }, 1200);
    } catch {
      setIsLoggingOut(false);
    }
  };

  return (
    <AdminLayout>
      {/* 🔔 LOGOUT POPUP */}
      {showPopup && (
        <div className="fixed top-6 right-6 z-50 bg-black text-white px-6 py-4 rounded-xl shadow-xl text-sm animate-fade-in">
          👋 Logged out successfully
        </div>
      )}

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-gray-900">
          Account Settings
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your admin profile and session
        </p>
      </div>

      {/* Card */}
      <div className="max-w-xl rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-lg p-8 transition hover:shadow-xl">
        
        {/* Admin Info */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 rounded-full bg-[#007bff] text-white flex items-center justify-center text-lg font-semibold">
            {admin?.email?.[0]?.toUpperCase() || "A"}
          </div>

          <div>
            <p className="text-xs text-gray-500">Logged in as</p>
            <p className="font-medium text-gray-900">
              {admin ? admin.email : "Loading..."}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-6" />

        {/* Logout */}
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center justify-center gap-2
                     rounded-lg border border-red-200
                     bg-red-50 text-red-600
                     py-3 text-sm font-semibold
                     transition
                     hover:bg-red-600 hover:text-white hover:border-red-600
                     disabled:opacity-60"
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>

        <p className="mt-4 text-xs text-gray-400 text-center">
          This will end your current admin session
        </p>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
