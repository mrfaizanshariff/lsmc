import PageHeader from "@/components/ui/page-header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-6 space-y-16">
      <PageHeader 
        title="About LSMC" 
        subtitle="Leading the future of lighting in Saudi Arabia since 2005"
      />
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-lg text-muted-foreground">
          LSMC’s factory owns a full testing LAB with
          the necessary equipment to perform in-house
          testing for photometry, aging, IP and thermal
          management
          </p>
          <p className="text-lg text-muted-foreground">
          Our factory innovates to provide a constant
          development of lighting fixtures to optimize
          the value of the illuminated object, and
          ensure psychological and aesthetic comfort
          in the surrounding environment
          </p>
          <p className="text-lg text-muted-foreground">
          Wamda is a first Saudi maven of lighting
          fixtures and is taking part in putting the
          Kingdom’s industries under the spotlight of
          the world economy, while providing a
          dynamic array of solutions with high efficacy
          to positively enhance people’s lives and
          construction return on investment
          </p>
          <Button size="lg" className="mt-4 bg-[#ffc733] text-black hover:bg-[#e6b32e]">
            <Link href="/products">
            Our Products
            </Link>
          </Button>
        </div>
        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="LSMC Manufacturing Facility"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="py-16 bg-black text-white rounded-xl p-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To illuminate the world with innovative lighting solutions that enhance spaces,
            conserve energy, and inspire creativity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-[#ffc733] text-xl font-bold mb-4">Innovation</h3>
            <p>Constantly pushing the boundaries of lighting technology to create solutions that are ahead of their time.</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-[#ffc733] text-xl font-bold mb-4">Quality</h3>
            <p>Uncompromising commitment to excellence in materials, craftsmanship, and performance.</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-[#ffc733] text-xl font-bold mb-4">Sustainability</h3>
            <p>Developing energy-efficient lighting solutions that minimize environmental impact without sacrificing performance.</p>
          </div>
        </div>
      </div>
      
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#ffc733] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-muted-foreground">Our in-house designers create innovative lighting concepts with both aesthetics and functionality in mind.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#ffc733] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Prototyping</h3>
            <p className="text-muted-foreground">Advanced 3D printing and prototyping to test and refine every aspect of our lighting fixtures.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#ffc733] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Production</h3>
            <p className="text-muted-foreground">State-of-the-art manufacturing facilities with precision equipment and skilled craftspeople.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#ffc733] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
            <p className="text-muted-foreground">Rigorous testing to ensure every product meets our exacting standards for performance and durability.</p>
          </div>
        </div>
      </div>
    </div>
  );
}