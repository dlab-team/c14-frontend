import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFormStore = create(
  persist(
    (set, get) => ({
      answers: {},
      currentQuestionIndex: 0,
      setAnswer: (questionItem, optionId) => {
        set(state => {
          const newAnswers = {
            ...state.answers,
            [questionItem]: optionId,
          };
          return { answers: newAnswers };
        });
      },
      setCurrentQuestionIndex: index => {
        set({ currentQuestionIndex: index });
      },
      clearForm: () => {
        const state = get(); 
        const answers = { ...state.answers }; 
        set({ answers: {}, currentQuestionIndex: 0 });
        return answers; 
      },
    }),
    {
      name: 'form-storage',
    },
  ),
);

export default useFormStore;
