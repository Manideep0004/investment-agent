"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { InvestmentResult } from "@/types/investment";
import RecommendationCard from "@/components/RecommendationCard";
import MetricsGrid from "@/components/MetricsGrid";

export default function Home() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InvestmentResult | null>(null);

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

    setResult(data);

    setLoading(false);
  }

  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        AI Investment Research Agent
      </h1>

      <SearchBar
        company={company}
        setCompany={setCompany}
        onAnalyze={analyze}
        loading={loading}
      />

      {result && (
  <div className="space-y-6 mt-8">

    <RecommendationCard
      recommendation={result.analysis.recommendation}
      confidence={result.analysis.confidence}
    />

    <MetricsGrid
      quote={result.quote}
    />

  </div>
)}

    </main>
  );
}