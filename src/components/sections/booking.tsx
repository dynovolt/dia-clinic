"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Clock, User, ClipboardList, CheckCircle2, AlertCircle, Heart } from "lucide-react";
import { clinicConfig } from "@/config/clinic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Validation schema for booking
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

// Available time slots
const timeSlots = ["08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM", "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM"];

export function Booking() {
  const [activeTab, setActiveTab] = React.useState<"calculator" | "book">("calculator");
  
  // Risk assessment calculator state
  const [age, setAge] = React.useState<string>("");
  const [history, setHistory] = React.useState<string>("");
  const [activity, setActivity] = React.useState<string>("");
  const [bp, setBp] = React.useState<string>("");
  const [riskResult, setRiskResult] = React.useState<{ score: number; level: string; advice: string } | null>(null);

  // Form hook
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

  // Calculate Diabetic Risk
  const handleCalculateRisk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !history || !activity || !bp) {
      toast.error("Please answer all questions to calculate your assessment.");
      return;
    }

    let score = 0;
    // Age weighting
    if (age === "above45") score += 3;
    else if (age === "35to44") score += 1;

    // Family History weighting
    if (history === "yes") score += 4;

    // Activity level weighting
    if (activity === "sedentary") score += 2;

    // Blood Pressure weighting
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

  // Submit Booking Form
  const onSubmit = async (data: BookingFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setBookingConfirmed(data);
    toast.success("Appointment request received successfully!");
  };

  const selectedService = clinicConfig.services.find((s) => s.id === selectedServiceId);
  const selectedDoctor = clinicConfig.team.find((d) => d.id === selectedDoctorId);

  return (
    <section id="booking" className="py-20 lg:py-28 bg-background relative" aria-labelledby="booking-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="booking-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Interactive Health Portal
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete our clinical risk assessment estimator or request a specialized consultation below.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-muted p-1 border border-border">
            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === "calculator"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Diabetic Risk Estimator
            </button>
            <button
              onClick={() => setActiveTab("book")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === "book"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-xs">
          
          {/* TAB 1: RISK CALCULATOR */}
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
                    {/* Age Option */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-foreground">What is your age bracket?</label>
                      <select
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

                    {/* Family History */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-foreground">Family history of diabetes (parents/siblings)?</label>
                      <select
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

                    {/* Activity Level */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-foreground">General physical activity levels?</label>
                      <select
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

                    {/* Blood pressure */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-foreground">History of hypertension or high blood pressure?</label>
                      <select
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
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 rounded-2xl border ${
                    riskResult.level === "High Risk"
                      ? "bg-destructive/10 border-destructive/20 text-destructive-foreground"
                      : riskResult.level === "Moderate Risk"
                      ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-700 dark:text-yellow-500"
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-500"
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-6 h-6 shrink-0" />
                      <h4 className="text-lg font-bold">Result: {riskResult.level}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {riskResult.advice}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => {
                        reset();
                        if (riskResult.level === "High Risk") {
                          setValue("serviceId", "precision-diagnostics");
                        } else {
                          setValue("serviceId", "diabetes-management");
                        }
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

          {/* TAB 2: APPOINTMENT SCHEDULER */}
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
                  {/* Step 1: Select Service & Doctor */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Select Service Panel</label>
                      <select
                        {...register("serviceId")}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        {clinicConfig.services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title} ({service.price})
                          </option>
                        ))}
                      </select>
                      {errors.serviceId && <p className="text-xs text-destructive">{errors.serviceId.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Select Specialist</label>
                      <select
                        {...register("doctorId")}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a doctor</option>
                        {clinicConfig.team.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name} ({doctor.role})
                          </option>
                        ))}
                      </select>
                      {errors.doctorId && <p className="text-xs text-destructive">{errors.doctorId.message}</p>}
                    </div>
                  </div>

                  {/* Step 2: Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                        <CalendarIcon className="w-4 h-4 text-primary" />
                        Appointment Date
                      </label>
                      <Input
                        type="date"
                        {...register("date")}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full rounded-lg"
                      />
                      {errors.date && <p className="text-xs text-destructive">{errors.date.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-primary" />
                        Preferred Time Slot
                      </label>
                      <select
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

                  {/* Step 3: Patient Info */}
                  <div className="space-y-6 pt-4 border-t border-border/50">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Patient Information</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Full Name</label>
                        <Input
                          type="text"
                          placeholder="e.g. John Doe"
                          {...register("fullName")}
                          className="rounded-lg"
                        />
                        {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Email Address</label>
                        <Input
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
                        <label className="text-sm font-semibold text-foreground">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="e.g. +15550199"
                          {...register("phone")}
                          className="rounded-lg"
                        />
                        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Medical Details / Symptoms (Optional)</label>
                        <Textarea
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
                <div className="text-center py-8 space-y-6 animate-fade-in">
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
      </div>
    </section>
  );
}
