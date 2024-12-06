'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  TestTubes, 
  Sprout, 
  Flag, 
  Truck, 
  ShieldCheck, 
  FlaskConical 
} from 'lucide-react';

const features = [
  {
    Icon: TestTubes,
    title: 'Clinically Studied',
    description: 'All products that we offer have undergone lab and safety tests'
  },
  {
    Icon: Sprout,
    title: 'Vegetarian Friendly',
    description: 'We have a wide selection of vegetarian products to meet your needs'
  },
  {
    Icon: Flag,
    title: 'Made In India',
    description: 'Shop local and explore health products made right here in India'
  },
  {
    Icon: Truck,
    title: 'Free Shipping',
    description: 'We deliver to your door with no shipping costs on your orders'
  },
  {
    Icon: ShieldCheck,
    title: 'No Risk',
    description: 'We ensure that all products are safe and within their use-by date'
  },
  {
    Icon: FlaskConical,
    title: 'GMO Free',
    description: 'Natural, no-modified products and derivatives for those who need it'
  }
];

const FeatureCard = ({ Icon, title, description, index }: {
  Icon: any;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white shadow-lg">
      <Icon className="w-10 h-10 text-[#1B4B66]" strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">
      {title}
    </h3>
    <p className="text-gray-200 text-sm leading-relaxed max-w-xs mx-auto">
      {description}
    </p>
  </motion.div>
);

export default function Features() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#1B4B66] rounded-[40px] mx-4 my-8" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
