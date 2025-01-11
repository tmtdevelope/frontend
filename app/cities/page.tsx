/** @format */

"use client";

import { ContactCTA } from "./ContactCTA";
import { CountyCard } from "./CountyCard";
import { counties } from "./Data";
export default function CitiesWeServe() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {counties.map((county) => (
            <CountyCard key={county.name} county={county} />
          ))}
        </div>

        <ContactCTA />
      </div>
    </div>
  );
}
