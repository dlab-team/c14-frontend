import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFormStore = create(
  persist(
    (set, get) => ({
      answers: {},
      currentQuestionIndex: 0,
      currentSurveySection: 'questionary',
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
        set({ answers: {}, currentQuestionIndex: 0, currentSurveySection: '' });
        return answers; 
      },
      endForm: () => {
        set({ answers: {}, currentQuestionIndex: 0, currentSurveySection: 'done' });
      }
    }),
    {
      name: 'form-storage',
    },
  ),
);

export default useFormStore;
