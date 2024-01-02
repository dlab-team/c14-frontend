import AdminHeader from '@/components/admin/AdminHeader';
import useAuthStore from '@/store/useAuthStore';

const Admin = () => {
  const { user } = useAuthStore();

  return (
    <>
      <AdminHeader
        title={`Bienvenido, ${user?.firstName}`}
        description="Información general sobre los resultados de los encuestados."
      />
      <main className="p-8"></main>
    </>
  );
};

export default Admin;
