
import { Header } from "./components/Header";
import { SectionHome } from "./section/SectionHome"
import { SectionAbout } from "./section/SectionAbout";
import Particles from './reactBits/Particles/Particles';
import { SectionExperience } from "./section/SectionExperience";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <div className="w-full h-full fixed top-0 left-0">
    
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Header />
      <SectionHome />
      <SectionAbout/>
      <SectionExperience/>
    </main>

  );
}
