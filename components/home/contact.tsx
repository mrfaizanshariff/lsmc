import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto py-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-[#ffc733] tracking-wider uppercase">Get in Touch</h2>
            <h3 className="text-3xl font-bold mt-2">Ready to Illuminate Your Space?</h3>
          </div>
          <p className="text-lg text-muted-foreground">
            Whether you're looking for custom lighting solutions for a commercial project
            or seeking the perfect fixtures for your home, our team is here to help.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="font-bold mb-2">Visit Us</h4>
              <p className="text-muted-foreground">
                Industrial City, Riyadh<br />
                Kingdom of Saudi Arabia
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contact</h4>
              <p className="text-muted-foreground">
                +966 11 000 0000<br />
                info@lsmc.sa
              </p>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-[#ffc733] text-black hover:bg-[#e6b32e] flex items-center">
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6">Subscribe to Our Newsletter</h3>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest product releases, industry insights, and exclusive offers.
          </p>
          <div className="space-y-4">
            <div>
              <Input placeholder="Your Name" className="focus-visible:ring-[#ffc733]" />
            </div>
            <div>
              <Input placeholder="Your Email" type="email" className="focus-visible:ring-[#ffc733]" />
            </div>
            <Button className="w-full bg-[#ffc733] text-black hover:bg-[#e6b32e]">
              Subscribe
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from LSMC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}