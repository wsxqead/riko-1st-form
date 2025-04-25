"use client";

import { useSurveyStore } from "@/store/useSurveyStore";

export default function SpecialMomentSection() {
  const { specialMoment, setField } = useSurveyStore();

  const handleSongChange = (index: number, value: string) => {
    const updatedSongs = [...specialMoment.favoriteSongs];
    updatedSongs[index] = value;
    setField("specialMoment", {
      favoriteSongs: updatedSongs as [string, string, string],
    });
  };

  return (
    <section className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-200 space-y-8">
      <h2 className="text-2xl font-bold text-[#4B8B4B]">
        📌 리코님과 함께한 특별한 순간
      </h2>

      {/* 🧩 기억에 남는 첫 멘트 */}
      <div>
        <label className="font-semibold block mb-1 text-gray-700">
          🧩 리코님의 첫 인사나 멘트 중 기억에 남는 말이 있다면?
        </label>
        <input
          type="text"
          value={specialMoment.memorableLine}
          onChange={(e) =>
            setField("specialMoment", { memorableLine: e.target.value })
          }
          className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          placeholder="예: 여러분~ 반가워요! 리코예요!"
        />
      </div>

      {/* 🎥 레전드 방송 */}
      <div>
        <label className="font-semibold block mb-1 text-gray-700">
          🎥 리코님의 방송 중 가장 기억에 남는 방송은?
        </label>
        <textarea
          value={specialMoment.legendaryStream}
          onChange={(e) =>
            setField("specialMoment", { legendaryStream: e.target.value })
          }
          rows={4}
          className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          placeholder="방송 제목과 기억에 남는 이유를 적어주세요!"
        />
      </div>

      {/* 🎵 좋아하는 노래 */}
      <div>
        <label className="font-semibold block mb-1 text-gray-700">
          🎵 가장 좋아하는 리코님의 노래는? (최대 3곡)
        </label>
        <div className="space-y-2">
          {specialMoment.favoriteSongs.map((song, idx) => (
            <input
              key={idx}
              type="text"
              value={song}
              onChange={(e) => handleSongChange(idx, e.target.value)}
              placeholder={`${idx + 1}번 곡 제목`}
              className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
