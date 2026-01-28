import { NavLink } from "react-router-dom";
import { useState } from "react";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-[#007bff] text-white flex items-center justify-between px-4 z-40">
        <span className="font-semibold">Appsixer Admin</span>
        <button
          onClick={() => setOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <aside className="fixed inset-y-0 left-0 w-64 bg-[#007bff] text-white z-50 flex flex-col">
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/20">
              <span className="font-semibold">Appsixer Admin</span>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <nav className="mt-4 flex flex-col">
              <NavLink
                to="/admin/dashboard"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-sm ${
                    isActive ? "bg-white/15" : "hover:bg-white/10"
                  }`
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/admin/inquiries"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-sm ${
                    isActive ? "bg-white/15" : "hover:bg-white/10"
                  }`
                }
              >
                Contacts
              </NavLink>

          <NavLink
  to="/admin/chat"
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    `px-6 py-3 text-sm ${
      isActive ? "bg-white/15" : "hover:bg-white/10"
    }`
  }
>
  Chat
</NavLink>


              <NavLink
                to="/admin/settings"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-sm ${
                    isActive ? "bg-white/15" : "hover:bg-white/10"
                  }`
                }
              >
                Settings
              </NavLink>
            </nav>
          </aside>
        </>
      )}

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="flex">

        {/* SIDEBAR (DESKTOP ONLY) */}
        <aside className="hidden lg:flex w-64 bg-[#007bff] text-white flex-col fixed inset-y-0 left-0">
          <div className="h-16 flex items-center px-6 text-lg font-semibold border-b border-white/20">
            Appsixer Admin
          </div>

          <nav className="mt-4 flex flex-col">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `px-6 py-3 text-sm ${
                  isActive ? "bg-white/15 font-medium" : "hover:bg-white/10"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/inquiries"
              className={({ isActive }) =>
                `px-6 py-3 text-sm ${
                  isActive ? "bg-white/15 font-medium" : "hover:bg-white/10"
                }`
              }
            >
              Contacts
            </NavLink>

          
          <NavLink
  to="/admin/chat"
  className={({ isActive }) =>
    `px-6 py-3 text-sm ${
      isActive ? "bg-white/15 font-medium" : "hover:bg-white/10"
    }`
  }
>
  Chat
</NavLink>



            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `px-6 py-3 text-sm ${
                  isActive ? "bg-white/15 font-medium" : "hover:bg-white/10"
                }`
              }
            >
              Settings
            </NavLink>
          </nav>

          <div className="mt-auto px-6 py-4 text-xs text-white/70 border-t border-white/20">
            © Appsixer Admin Panel
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
