// /store/useSurveyStore.ts
import { create } from "zustand";

type FirstImpression = {
  firstSeen: string;
  keywords: [string, string, string];
  fallInLove: string;
  rikoChange: {
    before: string;
    after: string;
  };
};

type SpecialMoment = {
  memorableLine: string;
  legendaryStream: string;
  favoriteSongs: [string, string, string];
};

type MessageToRiko = {
  funEpisode: string;
  letter: string;
  nickname?: string;
  fanartFile?: File | null;
  fanartMessage: string;
};

type Profile = {
  region: string;
  age?: string;
  gender?: string;
  joinedAt: string;
  turningPoint?: string;
};

type SpecialIdeas = {
  eventIdea: string;
  futureContent: string;
  coverSuggestion: string;
};

type SurveyState = {
  firstImpression: FirstImpression;
  specialMoment: SpecialMoment;
  messageToRiko: MessageToRiko;
  profile: Profile;
  specialIdeas: SpecialIdeas;
  setField: <K extends keyof SurveyState>(
    section: K,
    value: Partial<SurveyState[K]>
  ) => void;
};

export const useSurveyStore = create<SurveyState>((set) => ({
  firstImpression: {
    firstSeen: "",
    keywords: ["", "", ""],
    fallInLove: "",
    rikoChange: {
      before: "",
      after: "",
    },
  },
  specialMoment: {
    memorableLine: "",
    legendaryStream: "",
    favoriteSongs: ["", "", ""],
  },
  messageToRiko: {
    funEpisode: "",
    letter: "",
    nickname: "",
    fanartFile: null,
    fanartMessage: "",
  },
  profile: {
    region: "",
    age: "",
    gender: "",
    joinedAt: "",
    turningPoint: "",
  },
  specialIdeas: {
    eventIdea: "",
    futureContent: "",
    coverSuggestion: "",
  },
  setField: (section, value) =>
    set((state) => ({
      [section]: {
        ...state[section],
        ...value,
      },
    })),
}));
