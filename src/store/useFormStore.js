import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

const useFormStore = create(
  // persist(
  set => ({
    politicalCharacterization: null,
    currentSurveySection: 0,
    setPoliticalCharacterization: politicalCharacterization => {
      set(state => {
        return { ...state, politicalCharacterization };
      });
    },
    setCurrentSurveySection: sectionIndex => {
      set(state => ({ ...state, currentSurveySection: sectionIndex }));
    },
    nextStep: () => {
      set(state => ({ ...state, currentSurveySection: state.currentSurveySection + 1 }));
    },
    clearForm: () => {
      set({ politicalCharacterization: null, currentSurveySection: 0 });
    },
  }),
  {
    name: 'form-storage',
  }
  // )
);

export default useFormStore;
