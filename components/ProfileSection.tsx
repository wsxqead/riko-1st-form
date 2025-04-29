"use client";

import { useSurveyStore } from "@/store/useSurveyStore";
import { useEffect, useState } from "react";

export default function ProfileSection() {
  const { profile, setField } = useSurveyStore();
  const [customRegion, setCustomRegion] = useState("");

  useEffect(() => {
    if (profile.region !== "기타") setCustomRegion("");
  }, [profile.region]);

  return (
    <section className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-200 space-y-8">
      <h2 className="text-2xl font-bold text-[#A6D0A6]">
        👤 나의 간단한 프로필
      </h2>

      {/* 🌟 닉네임 입력란 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800 mb-1">
          🌟 닉네임 (선택)
        </label>
        <input
          type="text"
          value={profile.nickname ?? ""}
          onChange={(e) => setField("profile", { nickname: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="닉네임을 입력해주세요 (선택사항)"
        />
        <p className="text-xs text-gray-500 mt-1">
          입력하지 않으면 &quot;익명의 치코 + 랜덤번호&quot;로 기록됩니다.
        </p>
      </div>

      {/* 🗺️ 지역 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800">
          🗺️ 사는 지역
        </label>
        <select
          className="w-full border p-3 rounded-lg"
          value={profile.region}
          onChange={(e) => {
            setField("profile", { region: e.target.value });
          }}
        >
          <option value="">선택해주세요</option>
          <option value="한국">🇰🇷 한국</option>
          <option value="일본">🇯🇵 일본</option>
          <option value="미국">🇺🇸 미국</option>
          <option value="캐나다">🇨🇦 캐나다</option>
          <option value="기타">기타 (직접 입력)</option>
        </select>
        {profile.region === "기타" && (
          <input
            type="text"
            className="w-full border p-3 rounded-lg"
            placeholder="지역을 직접 입력해주세요"
            value={customRegion}
            onChange={(e) => {
              setCustomRegion(e.target.value);
              setField("profile", { region: e.target.value });
            }}
          />
        )}
      </div>

      {/* 🎂 연령대 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800">🎂 연령대</label>
        <div className="flex flex-wrap gap-3">
          {["10대", "20대", "30대 이상"].map((age) => (
            <button
              key={age}
              onClick={() => setField("profile", { age })}
              className={`px-4 py-2 rounded-lg border transition ${
                profile.age === age
                  ? "bg-[#A6D0A6] text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      {/* ⚧️ 성별 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800">⚧️ 성별</label>
        <div className="flex flex-wrap gap-3">
          {["남성", "여성", "비공개"].map((gender) => (
            <button
              key={gender}
              onClick={() => setField("profile", { gender })}
              className={`px-4 py-2 rounded-lg border transition ${
                profile.gender === gender
                  ? "bg-[#A6D0A6] text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* 💙 입덕 시기 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800">
          💙 입덕 시기
        </label>
        <select
          className="w-full border p-3 rounded-lg"
          value={profile.joinedAt}
          onChange={(e) => setField("profile", { joinedAt: e.target.value })}
        >
          <option value="">선택해주세요</option>
          <option value="2024년 5~6월">📌 2024년 5~6월 (데뷔 초기)</option>
          <option value="2024년 7~9월">
            📌 2024년 7~9월 (멋봉리, 배그 등)
          </option>
          <option value="2024년 10~12월">
            📌 2024년 10~12월 (좀보이드 등)
          </option>
          <option value="2025년 1~2월">📌 2025년 1~2월 (1주년 준비)</option>
          <option value="2025년 3~4월">📌 2025년 3~4월 (최근 팬)</option>
        </select>
      </div>

      {/* 🫶 팬이라는 걸 실감했던 순간 */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800">
          🫶 내가 리코님의 팬이라는 걸 실감했던 순간
        </label>
        <textarea
          value={profile.turningPoint ?? ""}
          onChange={(e) =>
            setField("profile", { turningPoint: e.target.value })
          }
          rows={4}
          className="w-full border p-3 rounded-lg"
          placeholder="예: 리코가 내 채팅을 읽어줬을 때, 팬아트를 소개해줬을 때 등"
        />
      </div>
    </section>
  );
}
