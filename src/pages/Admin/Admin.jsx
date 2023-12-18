import useLogout from '../../hooks/useLogout';
import Button from '../../layouts/Button';
import { toast } from 'sonner';

const Admin = () => {
  const title = "Logout";
  const { logout } = useLogout();

  const handleLogoutClick = async () => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas salir?');
    if (isConfirmed) {
      logout();
      toast.success('Sesión cerrada exitosamente');
    }
  };

  return (
    <div onClick={handleLogoutClick}>
      <Button title={title}></Button>
    </div>
  );
};

export default Admin;
