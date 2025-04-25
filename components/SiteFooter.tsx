// components/SiteFooter.tsx
export default function SiteFooter() {
  return (
    <footer className="text-sm text-center text-gray-500 mt-16 py-8 px-4 bg-white/60 backdrop-blur border-t border-gray-200">
      <p className="mb-2">
        📌 이 페이지는 팬이 자발적으로 제작한 비공식 프로젝트입니다.
      </p>
      <p className="mb-1">
        스텔라이브 및 소속 멤버와는 공식적인 관련이 없으며, 저작권 가이드라인을
        충분히 숙지하여 제작되었습니다.
      </p>
      <p className="text-xs text-gray-400">
        본 설문은 상업적 목적 없이 팬들의 축하와 추억을 공유하기 위한 순수한
        기념 활동입니다.
      </p>
    </footer>
  );
}
