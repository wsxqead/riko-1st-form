// types/survey.ts

export interface SurveyResponse {
  // 1️⃣ 리코님과의 첫 만남 & 이미지
  firstImpression: string; // 처음 알게 된 순간과 인상
  metaphor: string; // 리코님은 ___ 같은 존재
  shortPhrase: string; // 한마디 느낌
  emotionalSentence: string; // 감성 문장
  keywords: string[]; // 3가지 단어
  reasonForLove: string; // 좋아하게 된 계기
  relatedStream?: string; // 방송 제목 또는 날짜
  changedDescription: string; // 변화 설명

  // 2️⃣ 리코님과 함께한 특별한 순간
  memorableGreeting?: string; // 기억나는 첫 멘트
  legendaryStream: string; // 레전드 방송
  legendaryReason: string;
  favoriteSongs: string[]; // 좋아하는 곡 최대 3개

  // 3️⃣ 리코님께 보내는 메시지
  funnyEpisode?: string;
  letterToRiko: string;
  fanartUrl?: string; // 이미지 업로드 후 URL
  fanartMessage?: string;

  // 4️⃣ 나의 간단한 프로필
  region: string;
  ageGroup?: "10대" | "20대" | "30대 이상";
  gender?: "남성" | "여성" | "비공개";
  fanSince: string; // 입덕 시기
  fanSinceDetail?: string; // 사유
  fanRealization?: string;

  // 5️⃣ 1주년 특별 질문
  eventIdea?: string;
  futureContent?: string;
  songSuggestion?: string;

  // 기타
  nickname?: string;
  createdAt: number; // timestamp
}
