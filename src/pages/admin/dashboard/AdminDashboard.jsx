import AdminLayout from "../../../components/layout/AdminLayout";
import DashboardHeader from "./sections/DashboardHeader";
import DashboardStats from "./sections/DashboardStats";
import RecentInquiries from "./sections/RecentInquiries";
import Static from "./sections/Static";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <DashboardHeader />
      <DashboardStats />
      <Static/>
      <RecentInquiries />
    </AdminLayout>
  );
};

export default AdminDashboard;
