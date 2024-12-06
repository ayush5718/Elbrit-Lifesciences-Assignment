"use client";

import { motion } from 'framer-motion';
import { TurmericIcon, MultivitaminIcon, VitaminDIcon, ImmunityIcon } from './icons/NewsIcons';

const News = () => {
  const news = [
    {
      Icon: TurmericIcon,
      bgColor: 'bg-orange-50',
      date: '15 Feb 2024',
      title: 'The Power of Turmeric Supplements',
      category: 'Health'
    },
    {
      Icon: MultivitaminIcon,
      bgColor: 'bg-blue-50',
      date: '14 Feb 2024',
      title: 'Benefits of Daily Multivitamins',
      category: 'Wellness'
    },
    {
      Icon: VitaminDIcon,
      bgColor: 'bg-yellow-50',
      date: '13 Feb 2024',
      title: 'Understanding Vitamin D Deficiency',
      category: 'Research'
    },
    {
      Icon: ImmunityIcon,
      bgColor: 'bg-green-50',
      date: '12 Feb 2024',
      title: 'Natural Ways to Boost Immunity',
      category: 'Lifestyle'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1B365C] mb-4">Latest News</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[4/3] overflow-hidden rounded-lg mb-4 ${item.bgColor} transition-all duration-300 group-hover:shadow-lg`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <item.Icon />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
                <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </div>
                <div className="absolute top-3 right-3 bg-white text-[#1B365C] text-xs px-3 py-1 rounded-full">
                  {item.date}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1B365C] group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
