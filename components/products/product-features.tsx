interface ProductFeaturesProps {
  features: string[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className="h-6 w-6 bg-[#ffc733]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12L10 17L20 7" stroke="#ffc733" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p>{feature}</p>
        </div>
      ))}
    </div>
  );
}