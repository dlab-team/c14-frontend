import { PolynomialsService } from '@/services/polynomials.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetSocialsPolynoamials = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'socialpoly',
    PolynomialsService.getSocialsPolynomial,
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las opciones');
      },
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useGetSocialsPolynoamials;
