// components/MetaHead.tsx
import Head from "next/head";

export default function MetaHead() {
  return (
    <Head>
      <title>유즈하 리코 1주년 설문</title>
      <meta
        name="description"
        content="스텔라이브 유즈하 리코 1주년 기념 팬 설문 페이지"
      />
      <meta property="og:title" content="유즈하 리코 1주년 설문" />
      <meta
        property="og:description"
        content="팬 여러분의 마음을 리코에게 전해주세요 💌"
      />
      <meta property="og:image" content="/og-image.png" />
    </Head>
  );
}
