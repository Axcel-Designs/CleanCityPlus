import TrackerForm from "@/components/tracker/TrackerForm";
import TrackerTable from "@/components/tracker/TrackerTable";
import React from "react";

export default function recyclingTracker() {
  return (
    <main className="container mx-auto my-20">
      <section className="text-center">
        <p className="text-6xl text-green-700">Recycling Tracker</p>
        <em>
          Log your recycling efforts, track your emrogress, and earn achievement
          badges for making a positive environmental impact
        </em>
      </section>
      <TrackerForm />
      <section></section>
      <section></section>
      <TrackerTable />
    </main>
  );
}
