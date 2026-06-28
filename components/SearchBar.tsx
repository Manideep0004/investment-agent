"use client";

interface SearchBarProps {
  company: string;
  setCompany: (value: string) => void;
  onAnalyze: () => void;
  loading: boolean;
}

export default function SearchBar({
  company,
  setCompany,
  onAnalyze,
  loading,
}: SearchBarProps) {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter company name..."
        className="border rounded-lg px-4 py-2 flex-1"
      />

      <button
        onClick={onAnalyze}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded-lg"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}