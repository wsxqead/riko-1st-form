"use client";

import { useSurveyStore } from "@/store/useSurveyStore";

export default function SpecialIdeasSection() {
  const { specialIdeas, setField } = useSurveyStore();

  return (
    <section className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-200 space-y-8">
      <h2 className="text-2xl font-bold text-[#A6D0A6]">✨ 1주년 특별 질문!</h2>

      {/* 🎉 팬 이벤트 아이디어 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800">
          🎉 리코 1주년을 맞아 팬들이 준비하면 좋을 이벤트 아이디어가 있나요?
        </label>
        <textarea
          value={specialIdeas.eventIdea}
          onChange={(e) =>
            setField("specialIdeas", { eventIdea: e.target.value })
          }
          rows={4}
          className="w-full border p-3 rounded-lg"
          placeholder="예: 리코의 명대사를 모아 전시하는 온라인 전시회, 랜덤 엽서 이벤트 등"
        />
      </div>

      {/* 🎮 리코가 해줬으면 하는 콘텐츠 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800">
          🎮 앞으로 리코가 해줬으면 하는 콘텐츠나 도전하고 싶은 것은?
        </label>
        <textarea
          value={specialIdeas.futureContent}
          onChange={(e) =>
            setField("specialIdeas", { futureContent: e.target.value })
          }
          rows={4}
          className="w-full border p-3 rounded-lg"
          placeholder="예: 팬과 직접 이야기하는 토크쇼, 여행 브이로그, 자작곡 프로젝트 등"
        />
      </div>

      {/* 🎵 추천 커버곡 / 콘텐츠 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800">
          🎵 리코님에게 새로 추천하고 싶은 커버곡이나 콘텐츠가 있다면?
        </label>
        <textarea
          value={specialIdeas.coverSuggestion}
          onChange={(e) =>
            setField("specialIdeas", { coverSuggestion: e.target.value })
          }
          rows={4}
          className="w-full border p-3 rounded-lg"
          placeholder="예: 리코의 음색에 어울릴 것 같은 곡이나 특별하게 어필할 수 있는 콘텐츠!"
        />
      </div>
    </section>
  );
}
