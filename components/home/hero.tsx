'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/32141808/pexels-photo-32141808/free-photo-of-colorful-lighted-building-in-downtown-singapore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Illuminating Excellence',
      description: 'LIGHTING SOLUTIONS TO ENHANCE PEOPLE’S LIVES',
      buttonText: 'Explore Products',
      buttonLink: '/products'
    },
    {
      image: 'https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Architectural Brilliance',
      description: 'Transform spaces with our innovative lighting designs',
      buttonText: 'View Projects',
      buttonLink: '/about'
    },
    {
      image: 'https://images.pexels.com/photos/2197889/pexels-photo-2197889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Saudi-Made Excellence',
      description: 'Leading lighting manufacturer in the Kingdom',
      buttonText: 'Our Story',
      buttonLink: '/about'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-in-out 0.3s, transform 0.5s ease-in-out 0.3s',
              }}
            >
              {slide.title}
            </h1>
            <p 
              className="text-xl md:text-2xl max-w-xl mb-8"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-in-out 0.5s, transform 0.5s ease-in-out 0.5s',
              }}
            >
              {slide.description}
            </p>
            <Link href={slide.buttonLink}>
              <Button 
                size="lg" 
                className="bg-[#ffc733] text-black hover:bg-[#e6b32e] flex items-center"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease-in-out 0.7s, transform 0.5s ease-in-out 0.7s',
                }}
              >
                {slide.buttonText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-[#ffc733]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}