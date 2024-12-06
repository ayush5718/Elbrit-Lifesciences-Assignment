import dynamic from 'next/dynamic';

// Import components with no SSR to prevent hydration issues
const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false,
  loading: () => (
    <div className="min-h-[90vh] bg-gradient-to-b from-[#E3F2F9] to-white" />
  )
});

const Features = dynamic(() => import('@/components/Features'), {
  ssr: false,
  loading: () => <div className="min-h-[60vh]" />
});

const Ingredients = dynamic(() => import('@/components/Ingredients'), {
  ssr: false,
  loading: () => <div className="min-h-[60vh]" />
});

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />
      <Features />
      <Ingredients />
    </div>
  );
}
