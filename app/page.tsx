import MetaHead from "@/components/MetaHead";
import SiteFooter from "@/components/SiteFooter";

import IntroSection from "@/components/IntroSection";
import FirstMeetSection from "@/components/FirstMeetSection";
import SpecialMomentSection from "@/components/SpecialMomentSection";
import MessageToRikoSection from "@/components/MessageToRikoSection";
import ProfileSection from "@/components/ProfileSection";
import SpecialIdeasSection from "@/components/SpecialIdeasSection";
import SubmitButton from "@/components/SubmitButton";

export default function Home() {
  return (
    <>
      <MetaHead />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <IntroSection />

        <section className="space-y-12">
          <FirstMeetSection />
          <SpecialMomentSection />
          <MessageToRikoSection />
          <ProfileSection />
          <SpecialIdeasSection />
          <SubmitButton />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
