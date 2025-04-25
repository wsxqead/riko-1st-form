"use client";

import { useSurveyStore } from "@/store/useSurveyStore";
import { useEffect, useState } from "react";

export default function FirstImpressionSection() {
  const { firstImpression, setField } = useSurveyStore();
  const [form, setForm] = useState(firstImpression);

  useEffect(() => {
    setField("firstImpression", form);
  }, [form, setField]);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-200 space-y-6">
      <h2 className="text-2xl font-bold text-[#4B8B4B]">
        📌 리코님과의 첫 만남 & 이미지
      </h2>

      {/* 1. 처음 만난 리코님은 어떤 사람이었나요? */}
      <div>
        <label
          htmlFor="firstSeen"
          className="font-semibold block mb-1 text-gray-700"
        >
          💡 처음 만난 리코님은 어떤 사람이었나요?
        </label>
        <textarea
          id="firstSeen"
          name="firstSeen"
          rows={3}
          className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          placeholder="처음 본 리코님의 인상, 느낌 등을 적어주세요."
          value={form.firstSeen}
          onChange={handleChange}
        />
      </div>

      {/* 2. 리코님 하면 떠오르는 단어 3가지! */}
      <div>
        <label
          htmlFor="keywords"
          className="font-semibold block mb-1 text-gray-700"
        >
          💡 리코님 하면 떠오르는 단어 3가지!
        </label>
        <input
          id="keywords"
          name="keywords"
          type="text"
          placeholder="예: 반짝임, 따뜻함, 리액션"
          className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          value={form.keywords.join(", ")}
          onChange={(e) => {
            const values = e.target.value.split(",").map((v) => v.trim());
            setForm((prev) => ({
              ...prev,
              keywords: values as [string, string, string],
            }));
          }}
        />
      </div>

      {/* 3. 내가 리코님을 좋아하게 된 계기 */}
      <div>
        <label
          htmlFor="fallInLove"
          className="font-semibold block mb-1 text-gray-700"
        >
          💡 내가 리코님을 좋아하게 된 계기는?
        </label>
        <textarea
          id="fallInLove"
          name="fallInLove"
          rows={3}
          className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          placeholder="특정 방송, 노래, 순간 등 기억나는 계기를 알려주세요!"
          value={form.fallInLove}
          onChange={handleChange}
        />
      </div>

      {/* 4. 리코님의 첫인상과 현인상 */}
      <div>
        <label
          htmlFor="rikoChange"
          className="font-semibold block mb-1 text-gray-700"
        >
          💡 리코님의 첫인상과 현인상
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="before"
            placeholder="예: 조금 수줍었어요"
            value={form.rikoChange.before}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                rikoChange: {
                  ...prev.rikoChange,
                  before: e.target.value,
                },
              }))
            }
            className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          />
          <input
            type="text"
            name="after"
            placeholder="지금은 누구보다 프로 같아요!"
            value={form.rikoChange.after}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                rikoChange: {
                  ...prev.rikoChange,
                  after: e.target.value,
                },
              }))
            }
            className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          />
        </div>
      </div>
    </section>
  );
}
