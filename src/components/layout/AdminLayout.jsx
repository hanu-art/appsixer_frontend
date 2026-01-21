import { NavLink } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#007bff] text-white flex flex-col">
        
        {/* BRAND */}
        <div className="h-16 flex items-center px-6 text-lg font-semibold border-b border-white/20">
          Appsixer Admin
        </div>

        {/* NAV */}
        <nav className="mt-4 flex flex-col">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `px-6 py-3 text-sm transition ${
                isActive
                  ? "bg-white/15 font-medium"
                  : "hover:bg-white/10"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/inquiries"
            className={({ isActive }) =>
              `px-6 py-3 text-sm transition ${
                isActive
                  ? "bg-white/15 font-medium"
                  : "hover:bg-white/10"
              }`
            }
          >
            Contacts
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `px-6 py-3 text-sm transition ${
                isActive
                  ? "bg-white/15 font-medium"
                  : "hover:bg-white/10"
              }`
            }
          >
            Settings
          </NavLink>
        </nav>

        {/* FOOTER (optional but premium touch) */}
        <div className="mt-auto px-6 py-4 text-xs text-white/70 border-t border-white/20">
          © Appsixer Admin Panel
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
