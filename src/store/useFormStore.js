import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFormStore = create(
  persist(
  set => ({
    acceptedTerms: null,
    politicalCharacterization: null,
    currentSurveySection: 0,
    howCompare: null,
    politicalResult: [],
    socialResults: [],
    opossitePoliticalResult: [],
    socialCharacterization:[],
    setSocialCharacterization: socialCharacterization => {
      set(state => {
        return { ...state, socialCharacterization };
      });
    },
    setPoliticalCharacterization: politicalCharacterization => {
      set(state => {
        return { ...state, politicalCharacterization };
      });
    },
    setAcceptedTerms: acceptedTerms => {
      set(state => {
        return { ...state, acceptedTerms };
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
    setPoliticalResult: politicalResult => {
      set(state => {
        return {
          ...state,
          politicalResult,
        };
      });
    },
    setSocialResult: socialResult => {
      set(state => {
        return {
          ...state,
          socialResult,
        };
      });
    },
    updatePoliticalResult: (phraseId, newValue) => {
      set(state => {
        return {
          ...state,
          politicalResult: state.politicalResult?.map(phrase => ({
            ...phrase,
            value: phrase.id === phraseId ? newValue : phrase.value,
          })),
        };
      });
    },
    updateSocialResult: (phraseId, newValue) => {
      set(state => {
        return {
          ...state,
          socialResult: state.socialResult?.map(phrase => ({
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
      set(state => ({
        politicalCharacterization: null,
        socialCharacterization: null,
        currentSurveySection: 0,
        politicalResult: null,
        socialResult: null,
        opossitePoliticalResult: [],
      }));
    },
  }),
  {
    name: 'form-storage',
  }
  )
);

export default useFormStore;
