import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-[#ffc733] w-10 h-10 flex items-center justify-center rounded">
                <span className="font-bold text-black text-xl">L</span>
              </div>
              <span className="font-bold text-xl">LSMC</span>
            </div>
            <p className="text-gray-400">
              Leading manufacturer of premium lighting solutions in Saudi Arabia since 2005.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#ffc733] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#ffc733] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#ffc733] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#ffc733] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#ffc733]">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=indoor" className="text-gray-400 hover:text-white transition-colors">
                  Indoor Lighting
                </Link>
              </li>
              <li>
                <Link href="/products?category=outdoor" className="text-gray-400 hover:text-white transition-colors">
                  Outdoor Lighting
                </Link>
              </li>
              <li>
                <Link href="/products?category=fixtures" className="text-gray-400 hover:text-white transition-colors">
                  Lighting Fixtures
                </Link>
              </li>
              <li>
                <Link href="/products?category=equipment" className="text-gray-400 hover:text-white transition-colors">
                  Production Equipment
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#ffc733]">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#ffc733]">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new products and special sales
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-zinc-800 border-zinc-700 text-white" 
              />
              <Button className="bg-[#ffc733] text-black hover:bg-[#e6b32e]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-10 bg-zinc-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} LSMC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}