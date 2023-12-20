import AdminHeader from '@/components/admin/AdminHeader';

const Admin = () => {
  return (
    <>
      <AdminHeader
        title={`Bienvenido, Usuario!`}
        description="Información general sobre los resultados de los encuestados."
      />
      <main className="p-8"></main>
    </>
  );
};

export default Admin;
