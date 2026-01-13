import AdminLayout from "../../../components/layout/AdminLayout";
import React from "react";


const AdminDashboard = () => {
    return (
      <AdminLayout>
        <h1 className="text-2xl font-semibold mb-6">
          Dashboard
        </h1>
  
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            Total Messages
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow">
            New Messages
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow">
            Replied
          </div>
        </div>
      </AdminLayout>
    );
  };
  
 export default AdminDashboard