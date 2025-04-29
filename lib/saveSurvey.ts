// /lib/saveSurvey.ts
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSurveyStore } from "@/store/useSurveyStore";

// 랜덤 닉네임 생성 함수
function generateRandomNickname() {
  const randomNumber = Math.floor(10000 + Math.random() * 90000); // 5자리
  return `익명의 치코${randomNumber}`;
}

export async function saveSurvey() {
  const {
    firstImpression,
    specialMoment,
    messageToRiko,
    profile,
    specialIdeas,
  } = useSurveyStore.getState();

  try {
    let fanartUrl: string | null = null;

    // 🖼️ 팬아트 파일이 있으면 Storage에 업로드
    if (messageToRiko.fanartFile) {
      const storageRef = ref(
        storage,
        `fanart/${Date.now()}_${messageToRiko.fanartFile.name}`
      );
      await uploadBytes(storageRef, messageToRiko.fanartFile);
      fanartUrl = await getDownloadURL(storageRef);
    }

    // 🌟 닉네임 처리
    const finalNickname =
      profile.nickname && profile.nickname.trim() !== ""
        ? profile.nickname.trim()
        : generateRandomNickname();

    const docRef = await addDoc(collection(db, "surveyResponses"), {
      createdAt: Timestamp.now(),
      firstImpression,
      specialMoment,
      messageToRiko: {
        ...messageToRiko,
        fanartFile: undefined, // 파일은 storage로 빼고
        fanartUrl,
      },
      profile: {
        ...profile,
        nickname: finalNickname,
      },
      specialIdeas,
    });

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error("🔥 설문 저장 실패:", error);
    return {
      success: false,
      error,
    };
  }
}
