import DashboardLayout from "./layout";

const Dashboard = () => {
  return (
    <div className="min-h-screen ">
      <h1>Welcome to the Admin Dashboard</h1>
      <p>All data</p>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
