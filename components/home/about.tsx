import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import img6 from '../../public/assets/6.jpeg'

export default function About() {
  return (
    <div className="container mx-auto py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-[#ffc733] tracking-wider uppercase">About LSMC</h2>
            <h3 className="text-3xl font-bold mt-2">Illuminating Saudi Arabia Since 2005</h3>
          </div>
          <p className="text-lg text-muted-foreground">
          With all of the diversity taking place in the
          industry today, lighting has become a major
          focus for architects and designers as not
          just a functional accessory, but a critical
          component in emotional well-being. The
          lighting systems and fixtures today,
          balance design, eco-friendliness, and
          emotional well-being. 

          </p>
          <p className="text-lg text-muted-foreground">
          With Wamda, the lighting fixtures brand of
          LSMC, we have established a new factory
          to manufacture products matching the
          quality of giant European brands and
          respond to the growing challenge of
          strengthening the local economy and
          introduce the “Made in Saudi” products.
          While accompanying the Kingdom’s Vision
          2030, it confirms the metamorphosis
          happening in our society and follows its
          growth as an economy
          </p>
          
          <div className="pt-4">
            <Link href="/about">
              <Button className="bg-transparent text-black border border-[#ffc733] hover:bg-[#ffc733] flex items-center">
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image 
              src={img6.src} 
              alt="LSMC Manufacturing"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#ffc733] rounded-lg flex items-center justify-center">
            <div className="text-center">
              <span className="block text-3xl font-bold text-black">18+</span>
              <span className="text-sm font-medium text-black">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 mt-24">
        <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="h-12 w-12 bg-[#ffc733]/20 rounded-full flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.5 9H21.5L16 14L18.5 21L12 17L5.5 21L8 14L2.5 9H9.5L12 2Z" fill="#ffc733" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
          <p className="text-muted-foreground">Rigorous testing and quality control processes ensure our products meet the highest standards.</p>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="h-12 w-12 bg-[#ffc733]/20 rounded-full flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#ffc733" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Energy Efficiency</h3>
          <p className="text-muted-foreground">Our lighting solutions are designed to minimize energy consumption without compromising performance.</p>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="h-12 w-12 bg-[#ffc733]/20 rounded-full flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#ffc733" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Warranty Backed</h3>
          <p className="text-muted-foreground">All our products come with comprehensive warranties, giving you peace of mind for years to come.</p>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="h-12 w-12 bg-[#ffc733]/20 rounded-full flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill="#ffc733" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
          <p className="text-muted-foreground">We work closely with architects and designers to create bespoke lighting solutions for unique projects.</p>
        </div>
      </div>
    </div>
  );
}