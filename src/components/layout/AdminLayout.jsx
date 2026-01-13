const AdminLayout = ({ children }) => {
    return (
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-black text-white p-6">
          <h2 className="text-xl font-semibold mb-8">
            Admin Panel
          </h2>
  
          <nav className="space-y-4 text-sm">
            <div className="opacity-80 cursor-pointer hover:opacity-100">
              Dashboard
            </div>
            <div className="opacity-80 cursor-pointer hover:opacity-100">
              Contacts
            </div>
            <div className="opacity-80 cursor-pointer hover:opacity-100">
              Logout
            </div>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    );
  };
  
  export default AdminLayout;
  