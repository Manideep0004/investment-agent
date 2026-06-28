interface Props {
  recommendation: string;
  confidence: number;
}

export default function RecommendationCard({
  recommendation,
  confidence,
}: Props) {
  return (
    <div className="rounded-xl border p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-3">
        AI Recommendation
      </h2>

      <p className="text-4xl font-bold">
        {recommendation}
      </p>

      <p className="mt-2 text-gray-500">
        Confidence: {confidence}%
      </p>
    </div>
  );
}