import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

const useFormStore = create(
  // persist(
  set => ({
    politicalCharacterization: null,
    currentSurveySection: 0,
    howCompare: null,
    opossitePoliticalResult: [],
    setPoliticalCharacterization: politicalCharacterization => {
      set(state => {
        return { ...state, politicalCharacterization };
      });
    },
    setHowCompare: howCompare => {
      set(state => {
        return { ...state, howCompare };
      });
    },
    setOpossitePoliticalResult: opossitePoliticalResult => {
      set(state => {
        return {
          ...state,
          opossitePoliticalResult: opossitePoliticalResult?.map(p => ({ ...p, value: 50 })),
        };
      });
    },
    updateOpossitePoliticalResult: (phraseId, newValue) => {
      set(state => {
        return {
          ...state,
          opossitePoliticalResult: [...state.opossitePoliticalResult].map(phrase => ({
            ...phrase,
            value: phrase.id === phraseId ? newValue : phrase.value,
          })),
        };
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
