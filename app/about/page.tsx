import AboutHeader from '@/components/About/Header';
import AboutExperience from '@/components/About/Experience';
import AboutInfo from '@/components/About/Info';
import { Metadata } from 'next';
import GlowArea from '@/components/GlowArea';
export const metadata: Metadata = {
  title: 'About',
};
export default function About() {
  return (
    <>
      <GlowArea>
        {/* Header Section */}
        <AboutHeader />

        {/* Personal Info Section */}
        <AboutInfo />

        {/* Experience Section */}
        <AboutExperience />
      </GlowArea>
    </>
  );
}
