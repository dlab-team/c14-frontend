import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetExtrmPoliticalPhrases = group => {
  //Cuando en el back exista el endpoint para caracterizacion Neutra
  //Y que traiga las 9 frases en total usando Extremo 1 y Extremo 2
  //Esto se debe cambiar, ya sea usar la funcion que está abajo
  //O una condicion que dependa de la variable group y que si es Neutro
  //Que llame a otro servicio dentro de phrases.service.js si es que Neutro Es un endpoint nuevo

  const newGroup = group === 'Neutro' ? 'Extremo 1' : group;
  const { data, isLoading, isError } = useQuery(
    ['group', newGroup],
    () => PhrasesService.getExtrmPoliticalPhrases(newGroup),
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las frases');
      },
    }
  );

  /*
  const { data, isLoading, isError } = useQuery(
    ['group', group],
    () => PhrasesService.getExtrmPoliticalPhrases(group),
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las frases');
      },
    }
  );*/

  return { data, isLoading, isError };
};

export default useGetExtrmPoliticalPhrases;
