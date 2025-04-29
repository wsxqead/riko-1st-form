"use client";

import Link from "next/link";

export default function ThanksPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-white text-gray-800 animate-fade-in">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#A6D0A6]">
            🎉 감사합니다! 🎉
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            여러분의 소중한 마음이 리코에게 따뜻하게 전달될 예정입니다.
            <br className="hidden sm:block" />
            함께해주셔서 진심으로 감사드려요! 💙
          </p>
          <p className="text-sm text-gray-400">
            * 본 설문은 자동 응답 확인 기능은 없으며,
            <br className="sm:hidden" />
            수집된 메시지는 1주년 기념 홈페이지에 소중히 반영될 예정입니다.
          </p>

          {/* 🔥 수정: a 대신 Link */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-[#A6D0A6] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#8FBF8F] transition"
            >
              🔙 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-sm text-center text-gray-500 mt-16 py-8 px-4 bg-white/60 backdrop-blur border-t border-gray-200">
        <p className="mb-2">
          📌 이 페이지는 팬이 자발적으로 제작한 비공식 프로젝트입니다.
        </p>
        <p className="mb-1">
          스텔라이브 및 소속 멤버와는 공식적인 관련이 없으며, 저작권
          가이드라인을 충분히 숙지하여 제작되었습니다.
        </p>
        <p className="text-xs text-gray-400">
          본 설문은 상업적 목적 없이 팬들의 축하와 추억을 공유하기 위한 순수한
          기념 활동입니다.
        </p>
      </footer>
    </>
  );
}
