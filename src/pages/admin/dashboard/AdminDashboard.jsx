import AdminLayout from "../../../components/layout/AdminLayout";
import DashboardHeader from "./sections/DashboardHeader";
import DashboardStats from "./sections/DashboardStats";
import RecentInquiries from "./sections/RecentInquiries";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <DashboardHeader />
      <DashboardStats />
      <RecentInquiries />
    </AdminLayout>
  );
};

export default AdminDashboard;
