import { ContactForm } from "@/components/contact-form/contact-form";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactImage from "../../../public/img/ContactImage.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Have questions about our furniture? Contact our team for assistance with orders, product information, or to schedule a showroom visit.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-neutral-600 mt-2 md:text-xl">
            Have questions about our furniture? Our team is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-neutral-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Visit Our Showroom</h3>
                  <p className="text-neutral-600 mt-1">
                    123 Furniture Lane
                    <br />
                    Design District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-neutral-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Opening Hours</h3>
                  <p className="text-neutral-600 mt-1">
                    Monday - Friday: 10am - 7pm
                    <br />
                    Saturday: 10am - 6pm
                    <br />
                    Sunday: 12pm - 5pm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-neutral-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-neutral-600 mt-1">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-neutral-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-neutral-600 mt-1">info@luxehome.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="aspect-video bg-neutral-100 rounded-lg overflow-hidden">
                <Image
                  src={ContactImage}
                  alt="Map location of our showroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
