import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useAdmin = (email) => {
  const { data, error } = useSWR(
    email
      ? `https://cottage-backend-voilerplate.vercel.app/admin/${email}`
      : null,
    fetcher
  );

  return {
    isAdmin: data?.isAdmin || false, // ✅ Ensure it defaults to false
    isAdminLoading: !data && !error, // ✅ Loading state
  };
};

export default useAdmin;
