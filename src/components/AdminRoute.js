import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthProvider";
import useAdmin from "@/hooks/useAdmin";
import Loading from "@/components/shared/Loading";
import OverlayLoading from "./shared/OverlayLoading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useAdmin(user?.email);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // ✅ Redirect to login if not logged in
    } else if (!isAdminLoading && user && !isAdmin) {
      router.push("/"); // ✅ Redirect non-admin users to home
    }
  }, [loading, user, isAdmin, isAdminLoading, router]);

  if (loading || isAdminLoading) {
    return (
      <div className="min-h-screen">
        <OverlayLoading />
      </div>
    ); // ✅ Show a loader while checking
  }

  if (!user || !isAdmin) {
    return null; // Prevent rendering if user is not admin
  }

  return <>{children}</>;
};

export default AdminRoute;
