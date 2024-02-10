import { ResponseService } from '@/services/response.service';
import { toast } from 'sonner';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useFormStore from '@/store/useFormStore';

const useCreateResponse = () => {
  const setIdResponse = useFormStore(state => state.setResponseId);
  const navigate = useNavigate();

  return useMutation(ResponseService.createResponse, {
    onSuccess: data => {
      setIdResponse(data);
      navigate('/cuestionario');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
  });
};

export default useCreateResponse;
