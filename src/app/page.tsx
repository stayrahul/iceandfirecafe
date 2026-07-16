import Hero from '../components/home/Hero';
import BentoMenu from '../components/home/BentoMenu';

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      <Hero />
      <BentoMenu />
    </div>
  );
}
