import { PolynomialsService } from '@/services/polynomials.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetPolynomials = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'polynomials',
    PolynomialsService.getPolynomials,
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las opciones');
      },
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useGetPolynomials;
