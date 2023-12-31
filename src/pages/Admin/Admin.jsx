import AdminHeader from '@/components/admin/AdminHeader';
import useAuthStore from '@/store/useAuthStore';
import AdminModal from '@/components/admin/AdminModal';
import Button from '@/layouts/Button';
import { useState } from 'react';

const Admin = () => {
  const { user } = useAuthStore();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AdminHeader
        title={`Bienvenido, ${user?.firstName}`}
        description="Información general sobre los resultados de los encuestados."
      />
      <AdminModal />
      <main className="p-8">
        <Button title={'Abrir modal'} />
      </main>
      {showModal && <AdminModal setShowModal={setShowModal} />}
    </>
  );
};

export default Admin;
