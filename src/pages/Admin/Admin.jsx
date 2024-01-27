import AdminHeader from '@/components/admin/AdminHeader';
import AdminResults from '@/components/admin/AdminResults';
import useAuthStore from '@/store/useAuthStore';

const Admin = () => {
  const { user } = useAuthStore();

  return (
    <>
      <AdminHeader
        title={`Bienvenido, ${user?.firstName}`}
        description="Información general sobre los resultados de los encuestados."
      />
      <AdminResults />
      <main className="p-8"></main>
      
    </>
  );
};

export default Admin;
