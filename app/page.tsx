"use client";

import { useState } from "react";
import SearchBar from "../components/ui/SearchBar";

export default function Home() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {
    setLoading(true);

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
      }),
    });

    const data = await res.json();

    console.log(data);

    setLoading(false);
  }

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        AI Investment Research Agent
      </h1>

      <SearchBar
        company={company}
        setCompany={setCompany}
        onAnalyze={analyze}
        loading={loading}
      />
    </main>
  );
}