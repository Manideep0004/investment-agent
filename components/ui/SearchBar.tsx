"use client";

interface Props {
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
}: Props) {
  return (
    <div className="flex gap-4">
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter company..."
        className="border rounded-lg p-3 flex-1"
      />

      <button
        onClick={onAnalyze}
        disabled={loading}
        className="bg-black text-white px-6 rounded-lg"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}