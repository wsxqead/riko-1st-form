"use client";

import { useState } from "react";
import { saveSurvey } from "@/lib/saveSurvey";
import { useRouter } from "next/navigation";

export default function SubmitButton() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg("");

    const result = await saveSurvey();

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/thanks");
      }, 1200);
    } else {
      setErrorMsg("제출 중 오류가 발생했습니다. 다시 시도해주세요.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-12 text-center">
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-6 py-3 bg-[#A6D0A6] text-white font-semibold rounded-lg hover:bg-[#8FBF8F] transition disabled:opacity-60"
      >
        {loading
          ? "제출 중..."
          : success
          ? "✅ 제출 완료!"
          : "📮 설문 제출하기"}
      </button>
      {errorMsg && (
        <p className="mt-3 text-sm text-red-500 font-semibold">{errorMsg}</p>
      )}
    </div>
  );
}
