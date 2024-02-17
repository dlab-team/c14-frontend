import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFormStore = create(
  persist(
  set => ({
    responseId: null,
    acceptedTerms: null,
    politicalCharacterization: null,
    politicalName: null,
    currentSurveySection: 0,
    howCompare: null,
    politicalResult: [],
    socialResults: [],
    oppositePoliticalResult: [],
    oppositeSocialResult: [],
    socialCharacterization:[],
    totalPerceptionGap: 0,
    setPoliticalName : politicalName => {
      set(state => {
        return { ...state, politicalName };
      });
    },
    setTotalPerceptionGap: totalPerceptionGap => {
      set(state => {
        return { ...state, totalPerceptionGap };
      });
    },
    setResponseId: responseId => {
      set(state => {
        return { ...state, responseId };
      });
    },
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
    setOppositePoliticalResult: oppositePoliticalResult => {
      set(state => {
        return {
          ...state,
          oppositePoliticalResult: oppositePoliticalResult?.map(p => ({ ...p, value: 50 })),
        };
      });
    },
    updateOppositePoliticalResult: (phraseId, newValue) => {
      set(state => {
        return {
          ...state,
          oppositePoliticalResult: [...state.oppositePoliticalResult].map(phrase => ({
            ...phrase,
            value: phrase.id === phraseId ? newValue : phrase.value,
          })),
        };
      });
    },
    setOppositeSocialResult: oppositeSocialResult => {
      set(state => {
        return { ...state, 
          oppositeSocialResult: oppositeSocialResult?.map(p => ({ ...p, value: 50 })) };
      });
    },
    updateOppositeSocialResult: (phraseId, newValue) => {
      set(state => {
        return {
          ...state,
          oppositeSocialResult: [...state.oppositeSocialResult].map(phrase => ({
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
    prevStep: () => {
      set(state => ({ ...state, currentSurveySection: state.currentSurveySection - 1 }));
    }, 
    clearOppositeSocialResult: () => {
      set(state => ({ ...state, oppositeSocialResult: [] }));
    },
    clearOppositePoliticalResult: () => {
      set(state => ({ ...state, oppositePoliticalResult: [] }));
    },
    clearForm: () => {
      set(state => ({
        politicalCharacterization: null,
        socialCharacterization: null,
        currentSurveySection: 0,
        politicalResult: null,
        socialResult: null,
        oppositePoliticalResult: [],
        oppositeSocialResult: [],
        responseId: null,
        totalPerceptionGap: 0,
        politicalName: null,
      }));
    },
  }),
  {
    name: 'form-storage',
  }
  )
);

export default useFormStore;
