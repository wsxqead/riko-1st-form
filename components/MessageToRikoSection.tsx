"use client";

import { useEffect, useState } from "react";
import { useSurveyStore } from "@/store/useSurveyStore";
import Image from "next/image";

export default function MessageToRikoSection() {
  const { messageToRiko, setField } = useSurveyStore();

  const [fanartPreview, setFanartPreview] = useState<string | null>(null);

  useEffect(() => {
    if (messageToRiko.fanartFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFanartPreview(reader.result as string);
      };
      reader.readAsDataURL(messageToRiko.fanartFile);
    } else {
      setFanartPreview(null);
    }
  }, [messageToRiko.fanartFile]);

  return (
    <section className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-200 space-y-8">
      <h2 className="text-2xl font-bold text-[#4B8B4B]">
        📌 리코님께 보내는 메시지
      </h2>

      {/* 💬 재미있는 에피소드 */}
      <div>
        <label className="font-semibold block mb-1 text-gray-700">
          💬 리코와 함께한 1년, 재미있는 에피소드
        </label>
        <textarea
          value={messageToRiko.funEpisode}
          onChange={(e) =>
            setField("messageToRiko", { funEpisode: e.target.value })
          }
          rows={4}
          className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          placeholder="팬들과 함께한 웃긴 순간이나 방송 속 레전드 장면 등 자유롭게 적어주세요!"
        />
      </div>

      {/* 💌 편지 */}
      <div>
        <label className="font-semibold block mb-1 text-gray-700">
          💌 1년 동안 고마웠어요, 리코에게 편지 (1000자 이내)
        </label>
        <textarea
          value={messageToRiko.letter}
          onChange={(e) =>
            setField("messageToRiko", { letter: e.target.value })
          }
          rows={6}
          maxLength={1000}
          className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          placeholder="리코에게 전하고 싶은 진심을 담아 자유롭게 작성해주세요."
        />
      </div>

      {/* 🎨 팬아트 제출 */}
      <div>
        <label className="font-semibold block mb-1 text-gray-700">
          🎨 1주년 기념 팬아트 제출 (이미지 파일 1개)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setField("messageToRiko", {
              fanartFile: e.target.files?.[0] ?? null,
            })
          }
          className="block w-full border border-gray-300 rounded-lg p-2 bg-white"
        />

        {fanartPreview && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600 mb-1">
              🖼️ 미리보기
            </p>
            <div className="relative w-full h-[300px] border border-gray-300 rounded-lg overflow-hidden">
              <Image
                src={fanartPreview}
                alt="팬아트 미리보기"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        <textarea
          value={messageToRiko.fanartMessage}
          onChange={(e) =>
            setField("messageToRiko", { fanartMessage: e.target.value })
          }
          rows={3}
          className="w-full mt-4 p-3 border rounded-lg bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A6D0A6]"
          placeholder="짧은 응원 메시지를 함께 적어주세요!"
        />
      </div>
    </section>
  );
}
