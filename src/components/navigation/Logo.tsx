import Link from "next/link";
import { Activity } from "lucide-react";
import { businessConfig } from "@/config/business/business";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 group focus-visible:outline-2 focus-visible:outline-primary rounded-md p-1"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <Activity className="w-6 h-6 animate-pulse" />
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground font-heading">
        {businessConfig.name}
      </span>
    </Link>
  );
}
