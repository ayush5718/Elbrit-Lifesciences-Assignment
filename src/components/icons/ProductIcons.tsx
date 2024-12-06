export const ProductBottle = () => (
  <svg
    viewBox="0 0 300 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Bottle Shadow */}
    <ellipse cx="150" cy="370" rx="80" ry="15" fill="#1B4B66" fillOpacity="0.15" />
    
    {/* Bottle Glow */}
    <circle cx="150" cy="200" r="120" fill="#FFE4B8" fillOpacity="0.5" filter="blur(40px)" />
    
    {/* Bottle Body */}
    <path
      d="M110 140C110 129.954 118.954 121 129 121H171C181.046 121 190 129.954 190 140V340C190 350.046 181.046 359 171 359H129C118.954 359 110 350.046 110 340V140Z"
      fill="#1B4B66"
      filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))"
    />
    <path
      d="M120 145C120 136.716 126.716 130 135 130H165C173.284 130 180 136.716 180 145V335C180 343.284 173.284 350 165 350H135C126.716 350 120 343.284 120 335V145Z"
      fill="white"
      fillOpacity="0.9"
    />
    
    {/* Bottle Neck */}
    <path
      d="M135 80H165V120H135V80Z"
      fill="#1B4B66"
      filter="drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))"
    />
    
    {/* Bottle Cap */}
    <path
      d="M130 60C130 54.4772 134.477 50 140 50H160C165.523 50 170 54.4772 170 60V80H130V60Z"
      fill="#1B4B66"
      filter="drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))"
    />
    
    {/* Label */}
    <rect x="130" y="200" width="40" height="100" rx="4" fill="#E3F2F9" fillOpacity="0.9" />
    <rect x="135" y="210" width="30" height="3" rx="1.5" fill="#1B4B66" fillOpacity="0.8" />
    <rect x="135" y="220" width="30" height="3" rx="1.5" fill="#1B4B66" fillOpacity="0.8" />
    <rect x="135" y="230" width="20" height="3" rx="1.5" fill="#1B4B66" fillOpacity="0.8" />
    
    {/* Shine Effects */}
    <path
      d="M175 145C175 140 178 135 180 135C182 135 185 140 185 145V335C185 340 182 345 180 345C178 345 175 340 175 335V145Z"
      fill="white"
      fillOpacity="0.4"
    />
    <circle cx="140" cy="150" r="8" fill="white" fillOpacity="0.4" />
  </svg>
);

export const Pill = ({ color, className = "" }: { color: string; className?: string }) => (
  <svg
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#pill-shadow)">
      <ellipse cx="40" cy="20" rx="35" ry="15" fill={color} />
      <ellipse cx="40" cy="17" rx="28" ry="10" fill="white" fillOpacity="0.3" />
    </g>
    <defs>
      <filter id="pill-shadow" x="0" y="0" width="80" height="40" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="2" />
        <feOffset dy="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
      </filter>
    </defs>
  </svg>
);
