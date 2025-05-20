import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import img1 from '../../public/assets/1.jpeg';
import img8 from '../../public/assets/8.jpeg';
import img7 from '../../public/assets/7.jpeg';
import img10 from '../../public/assets/10.jpeg';
import img11 from '../../public/assets/11.jpeg';
export default function ProductCategories() {
  const categories = [
    {
      name: 'Indoor Lighting',
      description: 'Elegant solutions for residential and commercial interiors',
      image: img8,
      link: '/products?category=indoor'
    },
    {
      name: 'Outdoor Lighting',
      description: 'Durable fixtures designed to withstand the elements',
      image: img7,
      link: '/products?category=outdoor'
    },
    {
      name: 'Lighting Fixtures',
      description: 'Decorative elements that become the centerpiece of any space',
      image: img10,
      link: '/products?category=fixtures'
    },
    {
      name: 'Production Equipment',
      description: 'Industrial-grade lighting for manufacturing facilities',
      image: img11,
      link: '/products?category=equipment'
    }
  ];
  
  return (
    <div className="bg-black text-white py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#ffc733] tracking-wider uppercase">Categories</h2>
          <h3 className="text-3xl font-bold mt-2">Explore Our Product Lines</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link 
              href={category.link} 
              key={index}
              className="group relative overflow-hidden rounded-lg h-[400px] transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <Image 
                src={category.image} 
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  {category.name}
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
              <div className="absolute top-0 left-0 h-full w-1 bg-[#ffc733] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}