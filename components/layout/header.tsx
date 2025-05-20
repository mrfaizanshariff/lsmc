'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Menu, X } from 'lucide-react';
import logo from '../../public/assets/logo.png'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm p-4' 
          : 'bg-transparent p-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-[#ffc733] w-16 h-10 flex items-center justify-center rounded">
            {/* <span className="font-bold text-black text-xl">L</span> */}
            <Image
           src={logo.src}
           alt="LSMC LOGO"
           width={70}
           height={50}
           className="object-cover">
            
          </Image>
          </div>
          {/* <span className="font-bold text-xl">LSMC</span> */}
          
        </Link>
        
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground ${
                      pathname === '/' ? 'text-[#ffc733] font-bold' : ''
                    }`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <Link href="/products" legacyBehavior passHref>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md bg-[#ffc733]/10 p-4 leading-none no-underline outline-none transition-colors hover:bg-[#ffc733]/20 focus:bg-[#ffc733]/20"
                        >
                          <div className="text-sm font-medium leading-none text-[#ffc733]">All Products</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our complete catalog of premium lighting solutions for every need
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=indoor" legacyBehavior passHref>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Indoor Lighting</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Solutions for residential and commercial spaces
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=outdoor" legacyBehavior passHref>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Outdoor Lighting</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Durable solutions for exterior illumination
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=fixtures" legacyBehavior passHref>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Lighting Fixtures</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Decorative elements for any environment
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=equipment" legacyBehavior passHref>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Production Equipment</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Industrial-grade lighting solutions
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground ${
                      pathname === '/about' ? 'text-[#ffc733] font-bold' : ''
                    }`}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground ${
                      pathname === '/contact' ? 'text-[#ffc733] font-bold' : ''
                    }`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-[#ffc733] text-black hover:bg-[#e6b32e]">
                Get a Quote
              </Button>
            </Link>
          </div>
          
          <ModeToggle />
          
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden py-4 px-6 space-y-4 bg-background/95 backdrop-blur-md border-t">
          <Link href="/" className="block py-2">
            <span className={pathname === '/' ? 'font-bold text-[#ffc733]' : ''}>Home</span>
          </Link>
          <Link href="/products" className="block py-2">
            <span className={pathname === '/products' ? 'font-bold text-[#ffc733]' : ''}>Products</span>
          </Link>
          <Link href="/about" className="block py-2">
            <span className={pathname === '/about' ? 'font-bold text-[#ffc733]' : ''}>About</span>
          </Link>
          <Link href="/contact" className="block py-2">
            <span className={pathname === '/contact' ? 'font-bold text-[#ffc733]' : ''}>Contact</span>
          </Link>
          <div className="pt-2">
            <Link href="/contact">
              <Button className="w-full bg-[#ffc733] text-black hover:bg-[#e6b32e]">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}