"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Heart, Calendar as CalendarIcon, ClipboardList } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";

// Booking form schema
const bookingSchema = z.object({
  serviceId: z.string().min(1, "Please select a service"),
  doctorId: z.string().min(1, "Please select a specialist"),
  date: z.string().min(1, "Please select an appointment date"),
  timeSlot: z.string().min(1, "Please select a preferred time slot"),
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number (E.164 format)"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const timeSlots = ["08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM", "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM"];

export function ContactSection() {
  const [activeTab, setActiveTab] = React.useState<"calculator" | "book">("calculator");
  
  // Risk calculator state
  const [age, setAge] = React.useState<string>("");
  const [history, setHistory] = React.useState<string>("");
  const [activity, setActivity] = React.useState<string>("");
  const [bp, setBp] = React.useState<string>("");
  const [riskResult, setRiskResult] = React.useState<{ score: number; level: string; advice: string } | null>(null);

  // Form hooks
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceId: "",
      doctorId: "",
      date: "",
      timeSlot: "",
      fullName: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const selectedServiceId = watch("serviceId");
  const selectedDoctorId = watch("doctorId");
  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");

  const [bookingConfirmed, setBookingConfirmed] = React.useState<BookingFormValues | null>(null);

  const handleCalculateRisk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !history || !activity || !bp) {
      toast.error("Please answer all questions to calculate your assessment.");
      return;
    }

    let score = 0;
    if (age === "above45") score += 3;
    else if (age === "35to44") score += 1;

    if (history === "yes") score += 4;
    if (activity === "sedentary") score += 2;
    if (bp === "yes") score += 2;

    let level = "Low Risk";
    let advice = "Your risk indicators are currently low. Maintain a balanced diet, stay active, and get routine metabolic checks annually.";

    if (score >= 7) {
      level = "High Risk";
      advice = "Multiple clinical markers suggest an elevated diabetic risk pattern. We recommend booking a comprehensive diagnostic screen with our medical specialists.";
    } else if (score >= 4) {
      level = "Moderate Risk";
      advice = "Your assessment suggests moderate risk factors. Consider tracking daily carb intakes, building exercise habits, and scheduling an HbA1c screening.";
    }

    setRiskResult({ score, level, advice });
    toast.success("Risk estimation calculated successfully.");
  };

  const onSubmit = async (data: BookingFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setBookingConfirmed(data);
    toast.success("Appointment request received successfully!");
  };

  const selectedService = siteConfig.services.items.find((s) => s.id === selectedServiceId);
  const selectedDoctor = siteConfig.doctor.members.find((d) => d.id === selectedDoctorId);

  // Message Form State
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSendingMsg, setIsSendingMsg] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all details before submitting.");
      return;
    }

    setIsSendingMsg(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSendingMsg(false);
    setIsSent(true);
    toast.success("Your message has been sent successfully!");
  };

  return (
    <Section id="contact" className="bg-background relative" aria-labelledby="contact-heading">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Interactive Appointment & Contact Portal
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete our clinical risk assessment estimator, book a screening panel, or message our staff.
          </p>
        </div>

        {/* Diagnostic Booking & Calculator block */}
        <div className="max-w-4xl mx-auto bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-xs mb-16" id="booking">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full bg-muted p-1 border border-border">
              <button
                onClick={() => setActiveTab("calculator")}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-semibold transition-all duration-200",
                  activeTab === "calculator" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Diabetic Risk Estimator
              </button>
              <button
                onClick={() => setActiveTab("book")}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-semibold transition-all duration-200",
                  activeTab === "book" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {activeTab === "calculator" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Self-Assessment Risk Estimator
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Answer these non-invasive questions to receive instant metabolic risk feedback based on major clinical markers.
                </p>
              </div>

              {!riskResult ? (
                <form onSubmit={handleCalculateRisk} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="calc-age" className="block text-sm font-semibold text-foreground">What is your age bracket?</label>
                      <select
                        id="calc-age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select age range</option>
                        <option value="under35">Under 35 years</option>
                        <option value="35to44">35 - 44 years</option>
                        <option value="above45">45 years or older</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="calc-history" className="block text-sm font-semibold text-foreground">Family history of diabetes (parents/siblings)?</label>
                      <select
                        id="calc-history"
                        value={history}
                        onChange={(e) => setHistory(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select answer</option>
                        <option value="no">No family history</option>
                        <option value="yes">Yes (Immediate family members)</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="calc-activity" className="block text-sm font-semibold text-foreground">General physical activity levels?</label>
                      <select
                        id="calc-activity"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select activity level</option>
                        <option value="active">Active (30+ mins daily exercise)</option>
                        <option value="moderate">Moderately active (1-2 times weekly)</option>
                        <option value="sedentary">Sedentary (Little to no exercise)</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="calc-bp" className="block text-sm font-semibold text-foreground">History of hypertension or high blood pressure?</label>
                      <select
                        id="calc-bp"
                        value={bp}
                        onChange={(e) => setBp(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select answer</option>
                        <option value="no">No, normal blood pressure</option>
                        <option value="yes">Yes, currently taking medicine / diagnosed</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full rounded-xl py-3 mt-4">
                    Calculate Assessment Result
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className={cn(
                    "p-6 rounded-2xl border",
                    riskResult.level === "High Risk" ? "bg-destructive/10 border-destructive/20 text-destructive-foreground" :
                    riskResult.level === "Moderate Risk" ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-700 dark:text-yellow-500" :
                    "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-500"
                  )}>
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-6 h-6 shrink-0" />
                      <h4 className="text-lg font-bold">Result: {riskResult.level}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90">{riskResult.advice}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => {
                        reset();
                        setValue("serviceId", riskResult.level === "High Risk" ? "precision-diagnostics" : "diabetes-management");
                        setActiveTab("book");
                      }}
                      className="flex-1 rounded-xl"
                    >
                      Schedule Recommended Service
                    </Button>
                    <Button variant="outline" onClick={() => setRiskResult(null)} className="rounded-xl">
                      Re-take Assessment
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "book" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <ClipboardList className="w-6 h-6 text-primary" />
                  Appointment Request Form
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Specify details below to submit your appointment request. Our reception desk will confirm your slot shortly.
                </p>
              </div>

              {!bookingConfirmed ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="booking-service" className="text-sm font-semibold text-foreground">Select Service Panel</label>
                      <select
                        id="booking-service"
                        {...register("serviceId")}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        {siteConfig.services.items.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title} ({service.price})
                          </option>
                        ))}
                      </select>
                      {errors.serviceId && <p className="text-xs text-destructive">{errors.serviceId.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="booking-doctor" className="text-sm font-semibold text-foreground">Select Specialist</label>
                      <select
                        id="booking-doctor"
                        {...register("doctorId")}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a doctor</option>
                        {siteConfig.doctor.members.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name} ({doctor.role})
                          </option>
                        ))}
                      </select>
                      {errors.doctorId && <p className="text-xs text-destructive">{errors.doctorId.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="booking-date" className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                        <CalendarIcon className="w-4 h-4 text-primary" />
                        Appointment Date
                      </label>
                      <Input
                        id="booking-date"
                        type="date"
                        {...register("date")}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full rounded-lg"
                      />
                      {errors.date && <p className="text-xs text-destructive">{errors.date.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="booking-time" className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-primary" />
                        Preferred Time Slot
                      </label>
                      <select
                        id="booking-time"
                        {...register("timeSlot")}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.timeSlot && <p className="text-xs text-destructive">{errors.timeSlot.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-border/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Patient Information</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="booking-name" className="text-sm font-semibold text-foreground">Full Name</label>
                        <Input
                          id="booking-name"
                          type="text"
                          placeholder="e.g. John Doe"
                          {...register("fullName")}
                          className="rounded-lg"
                        />
                        {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="booking-email" className="text-sm font-semibold text-foreground">Email Address</label>
                        <Input
                          id="booking-email"
                          type="email"
                          placeholder="name@example.com"
                          {...register("email")}
                          className="rounded-lg"
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="booking-phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                        <Input
                          id="booking-phone"
                          type="tel"
                          placeholder="e.g. +15550199"
                          {...register("phone")}
                          className="rounded-lg"
                        />
                        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="booking-notes" className="text-sm font-semibold text-foreground">Medical Details / Symptoms (Optional)</label>
                        <Textarea
                          id="booking-notes"
                          placeholder="Describe any specific health indicators or requirements..."
                          {...register("notes")}
                          className="rounded-lg min-h-[40px] resize-y"
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl py-3 mt-4">
                    {isSubmitting ? "Submitting Booking..." : "Submit Appointment Request"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">Booking Request Confirmed!</h4>
                    <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                      Thank you, {bookingConfirmed.fullName}. We have registered your request. An SMS and email notification details have been sent.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-2xl p-6 text-left max-w-md mx-auto border border-border text-sm space-y-3">
                    <p className="flex justify-between border-b border-border/80 pb-2">
                      <span className="text-muted-foreground">Service Panel:</span>
                      <span className="font-semibold text-foreground">{selectedService?.title}</span>
                    </p>
                    <p className="flex justify-between border-b border-border/80 pb-2">
                      <span className="text-muted-foreground">Doctor Assigned:</span>
                      <span className="font-semibold text-foreground">{selectedDoctor?.name}</span>
                    </p>
                    <p className="flex justify-between border-b border-border/80 pb-2">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-semibold text-foreground">{selectedDate}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Time Slot:</span>
                      <span className="font-semibold text-foreground">{selectedTime}</span>
                    </p>
                  </div>

                  <Button
                    onClick={() => {
                      setBookingConfirmed(null);
                      reset();
                    }}
                    variant="outline"
                    className="rounded-xl px-8"
                  >
                    Book Another Appointment
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Contacts details & map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
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
                    <p className="text-sm text-foreground mt-1 font-medium">{siteConfig.location.address}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Support</h4>
                    <p className="text-sm text-foreground mt-1 font-medium">
                      <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">
                        {siteConfig.contact.phone}
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
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                        {siteConfig.contact.email}
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
                      <p>{siteConfig.footer.openingHours.weekday}</p>
                      <p>{siteConfig.footer.openingHours.weekend}</p>
                      <p className="text-destructive font-medium">{siteConfig.footer.openingHours.sunday}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Card */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-border/80 bg-muted flex items-center justify-center text-center p-6">
              <div className="absolute inset-0 bg-linear-gradient(to_bottom,transparent,rgba(0,0,0,0.05))" />
              <div className="relative z-10 space-y-3">
                <MapPin className="w-8 h-8 text-primary mx-auto animate-bounce" />
                <h4 className="text-sm font-bold text-foreground">Interactive Clinic Map</h4>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Map View centered at Kasturi Nagar, Bengaluru (Latitude: {siteConfig.location.coordinates.lat}, Longitude: {siteConfig.location.coordinates.lng}).
                </p>
                <a
                  href={siteConfig.location.mapUrl}
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

                  <Button type="submit" disabled={isSendingMsg} className="w-full rounded-xl py-3 flex items-center justify-center gap-2">
                    {isSendingMsg ? "Sending..." : "Send Message"}
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
      </Container>
    </Section>
  );
}
