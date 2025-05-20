'use client';

import PageHeader from "@/components/ui/page-header";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(5, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Normally would submit to an API endpoint
    alert("Thank you for your message. We will contact you shortly.");
    form.reset();
  }

  return (
    <div className="container mx-auto py-12">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries and support"
      />
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" className="h-32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-[#ffc733] text-black hover:bg-[#e6b32e]">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
        
        <div className="space-y-8">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#ffc733]" />
                <div>
                  <p className="font-medium">LSMC Headquarters</p>
                  <p className="text-muted-foreground">Industrial City, Riyadh</p>
                  <p className="text-muted-foreground">Kingdom of Saudi Arabia</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-[#ffc733]" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+966 11 000 0000</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-[#ffc733]" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@lsmc.sa</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-[#ffc733]" />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-muted-foreground">Sunday - Thursday: 8am - 5pm</p>
                  <p className="text-muted-foreground">Friday - Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black text-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Distribution Network</h2>
            <p className="mb-4">
              LSMC products are available through our network of authorized 
              distributors across the Middle East.
            </p>
            <Button variant="outline" className="text-[#ffc733] border-[#ffc733] hover:bg-[#ffc733] hover:text-black">
              Find a Distributor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}