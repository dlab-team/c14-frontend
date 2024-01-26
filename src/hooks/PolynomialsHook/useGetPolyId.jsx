import { PolynomialsService } from '@/services/polynomials.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetPolyId = id => {
  const { data, isLoading, isError } = useQuery(
    ['polyId', id],
    () => PolynomialsService.getPolynomialById(id),
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las opciones');
      },
    }
  );

  return { data, isLoading, isError };
};

export default useGetPolyId;
