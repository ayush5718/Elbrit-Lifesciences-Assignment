'use client';

import { useEffect, useState } from 'react';
import { VitaminC, VitaminB3, Magnesium, HyaluronicAcid, Lactobacillus } from './icons/IngredientIcons';

const ingredients = [
  {
    title: 'Vitamin C',
    description: 'Vitamin C as ascorbic acid',
    Icon: VitaminC,
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Vitamin B3',
    description: 'Niacin for healthy gut and skin',
    Icon: VitaminB3,
    bgColor: 'bg-cyan-50'
  },
  {
    title: 'Magnesium',
    description: 'Boost energy and support muscle function',
    Icon: Magnesium,
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Hyaluronic Acid',
    description: 'For smooth, supple and soft skin!',
    Icon: HyaluronicAcid,
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Lactobacillus',
    description: 'Invigorate your gut microbiome',
    Icon: Lactobacillus,
    bgColor: 'bg-blue-50'
  }
];

const Ingredients = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-x-hidden w-full">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#E3F2F9] rounded-full -z-10 transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#FFE4B8] rounded-full -z-10 transform translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <h4 className="text-sm font-medium text-[#1B4B66] mb-2 tracking-wider uppercase">
            INGREDIENTS
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4B66] mb-3 md:mb-4">
            Better Ingredients
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className={`${ingredient.bgColor} rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="h-full flex flex-col">
                <div className="mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1B4B66] mb-1 md:mb-2">
                    {ingredient.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {ingredient.description}
                  </p>
                </div>
                
                <div className="mt-auto flex justify-between items-end">
                  <button className="text-[#1B4B66] text-sm font-medium hover:underline inline-flex items-center">
                    SEE MORE
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  
                  {/* Icon container */}
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                    <ingredient.Icon className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
