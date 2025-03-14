// src/pages/dashboard/layout.js
import AdminRoute from "@/components/AdminRoute";
import Sidebar from "@/components/navbar/Sidebar";
const DashboardLayout = ({ children }) => {
  return (
    <AdminRoute>
      {/* ✅ Wrapping the entire layout inside AdminRoute */}
      <div className="grid grid-cols-7 min-h-screen">
        {/* Sidebar */}

        <div className="col-span-2 border-2 border-gray-100">
          <Sidebar />
        </div>

        <div className="flex flex-col col-span-5 ">
          {/* Header */}

          {/* Main Dashboard Content */}
          <main className="p-6">{children}</main>
        </div>
      </div>
    </AdminRoute>
  );
};

export default DashboardLayout;
