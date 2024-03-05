import { useMutation } from 'react-query';
import { ResponseService } from '@/services/response.service';
import { toast } from 'sonner';
import useFormStore from '@/store/useFormStore';

const useFinishResponse = (characterization, isSocial, opinion, subjetive) => {
  const responseId = useFormStore.getState().responseId;

  const modifiedOpinion = opinion.map(item => ({
    surveyResponseId: responseId,
    value: item.value,
    phraseId: item.id,
  }));

  const modifiedSubjetive = subjetive.map(item => ({
    surveyResponseId: responseId,
    value: item.value,
    phraseId: item.id,
  }));

  const polinomialOptionsId = Array.isArray(characterization)
    ? characterization
    : [characterization];

  const payload = {
    character: {
      id: responseId,
      polinomialOptionsId: polinomialOptionsId,
      finishedSocialForm: isSocial,
    },
    responseOpinion: modifiedOpinion,
    responseSubjetive: modifiedSubjetive,
  };

  return useMutation(() => ResponseService.finishResponse(payload), {
    onSuccess: () => {
      toast.success('Encuesta finalizada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
  });
};

export default useFinishResponse;
