"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { clinicConfig } from "@/config/clinic";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all details before submitting.");
      return;
    }

    setIsSubmitting(true);
    // Simulate send API
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSent(true);
    toast.success("Your message has been sent successfully!");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background relative" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about clinical offerings, diagnostic timelines, or scheduling? Connect with our administration support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground">Clinic Contacts</h3>
              
              <ul className="space-y-4" role="list">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Location</h4>
                    <p className="text-sm text-foreground mt-1 font-medium">{clinicConfig.contact.address}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Support</h4>
                    <p className="text-sm text-foreground mt-1 font-medium">
                      <a href={`tel:${clinicConfig.contact.phone}`} className="hover:underline">
                        {clinicConfig.contact.phone}
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Communications</h4>
                    <p className="text-sm text-foreground mt-1 font-medium">
                      <a href={`mailto:${clinicConfig.contact.email}`} className="hover:underline">
                        {clinicConfig.contact.email}
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Working Schedule</h4>
                    <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                      <p>{clinicConfig.workingHours.weekday}</p>
                      <p>{clinicConfig.workingHours.weekend}</p>
                      <p className="text-destructive font-medium">{clinicConfig.workingHours.sunday}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Premium Simulated Interactive Map */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-border/80 bg-muted flex items-center justify-center text-center p-6">
              <div className="absolute inset-0 bg-linear-gradient(to_bottom,transparent,rgba(0,0,0,0.05))" />
              <div className="relative z-10 space-y-3">
                <MapPin className="w-8 h-8 text-primary mx-auto animate-bounce" />
                <h4 className="text-sm font-bold text-foreground">Interactive Medical District Map</h4>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Map View centered at Boston Medical Sciences quadrant (Latitude: {clinicConfig.contact.coordinates.lat}, Longitude: {clinicConfig.contact.coordinates.lng}).
                </p>
                <a
                  href={clinicConfig.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "xs" }),
                    "rounded-lg"
                  )}
                >
                  Open Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Send a Quick Message</h3>
              
              {!isSent ? (
                <form onSubmit={handleSendMessage} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground" htmlFor="contact-name">
                        Your Name
                      </label>
                      <Input
                        id="contact-name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground" htmlFor="contact-email">
                        Your Email
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground" htmlFor="contact-message">
                      Your Message
                    </label>
                    <Textarea
                      id="contact-message"
                      placeholder="Briefly state your message or diagnostic queries..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded-lg min-h-[140px]"
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl py-3 flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Message Sent Successfully!</h4>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Thank you for connecting. Our administrative coordinator will reply to your registered email within one business day.
                  </p>
                  <Button variant="outline" onClick={() => { setIsSent(false); setName(""); setEmail(""); setMessage(""); }} className="rounded-lg mt-4">
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
