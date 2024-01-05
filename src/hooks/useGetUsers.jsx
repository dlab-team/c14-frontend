import { AdministrationService } from '@/services/administration.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetUsers = () => {
  const { data, isLoading, isError, refetch } = useQuery('users', AdministrationService.getUsers, {
    onError: error => {
      toast.error(error?.message || 'Error al obtener los usuarios');
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useGetUsers;
