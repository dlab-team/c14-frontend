import { PolynomialsService } from '@/services/polynomials.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetAllPoly = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'polynomials',
    PolynomialsService.getAllPolynomial,
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener los polinomios');
      },
    }
  );

  return { data, isLoading, isError, refetch };
}
export default useGetAllPoly