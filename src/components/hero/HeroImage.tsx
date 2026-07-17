import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-border bg-linear-gradient(135deg, var(--primary) 0%, oklch(0.52 0.14 195) 100%) flex items-center justify-center text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent)]" />
      <div className="relative z-10 text-center p-8 space-y-4">
        {/* Fine CSS Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto border border-white/20 shadow-md">
          <span className="font-heading font-bold text-3xl">DC</span>
        </div>
        <p className="text-sm font-semibold uppercase tracking-wider opacity-85">Advanced Diabetes Bay</p>
        <h3 className="text-2xl font-bold font-heading">Diagnostic Analytics</h3>
      </div>
    </div>
  );
}
