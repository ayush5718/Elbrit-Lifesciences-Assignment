import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Features = dynamic(() => import('@/components/Features'), { ssr: false });
const Ingredients = dynamic(() => import('@/components/Ingredients'), { ssr: false });

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Features />
      <Ingredients />
    </main>
  );
}
