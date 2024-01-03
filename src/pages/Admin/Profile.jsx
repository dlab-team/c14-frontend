import AdminHeader from '@/components/admin/AdminHeader';

export default function Profile() {
  return (
    <>
      <AdminHeader
        title={`Mi perfil `}
        description="Aquí podrás personalizar la información de tu perfil."
      />
      <main className="max-w-4xl mx-4 md:mx-auto"></main>
    </>
  );
}
