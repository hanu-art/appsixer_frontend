import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/admin/login/Login";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import AdminContacts from "../pages/admin/dashboard/contacts/AdminContacts";
import AdminSettings from "../pages/admin/setting/AdminSettings";
import SingleContactView from "../pages/admin/dashboard/sections/SingleContactView";
const AdminRoutes = () => {
  const isAuthenticated = true; // testing

  return (
    <Routes>
      {/* Login */}
      <Route path="login" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="dashboard"
        element={
          isAuthenticated ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/admin/login" replace />
          )
        }
      />

      {/* Contacts / Inquiries ✅ THIS WAS MISSING */}
      <Route
        path="inquiries"
        element={
          isAuthenticated ? (
            <AdminContacts />
          ) : (
            <Navigate to="/admin/login" replace />
          )
        }
      />


 <Route
  path="inquiries/:id"
  element={
    isAuthenticated ? (
      <SingleContactView />
    ) : (
      <Navigate to="/admin/login" replace />
    )
  }
/>


      {/* /admin hit */}
      <Route
        path=""
        element={
          <Navigate
            to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}
            replace
          />
        }
      />



<Route
  path="settings"
  element={
    isAuthenticated ? (
      <AdminSettings />
    ) : (
      <Navigate to="/admin/login" replace />
    )
  }
/>
    </Routes>
  );
};

export default AdminRoutes;
