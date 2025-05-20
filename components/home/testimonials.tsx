'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ChevronLeft, 
  ChevronRight,
  Star
} from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Saud',
    title: 'Architect, Riyadh Designs',
    content: 'We\'ve used LSMC lighting solutions in multiple high-profile architectural projects across Saudi Arabia. Their attention to detail and quality is unmatched.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5
  },
  {
    name: 'Fatima Mohammed',
    title: 'Interior Designer, Elegant Spaces',
    content: 'The versatility of LSMC\'s indoor fixtures has allowed me to create stunning environments for my clients. Their products are both beautiful and reliable.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5
  },
  {
    name: 'Khalid Ibrahim',
    title: 'Project Manager, Gulf Construction',
    content: 'For large-scale commercial projects, we exclusively use LSMC outdoor lighting. Their durability in the harsh Saudi climate is impressive.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  
  const handlePrev = () => {
    setDirection('left');
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setDirection('right');
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-[#ffc733] py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-black tracking-wider uppercase">Testimonials</h2>
          <h3 className="text-3xl font-bold mt-2 text-black">What Our Clients Say</h3>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-lg text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'fill-[#ffc733] text-[#ffc733]' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-black' : 'bg-black/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}