interface Props {
  quote: any;
}

function marketCap(value: number) {
  return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
}

export default function MetricsGrid({ quote }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">

      <div className="border rounded-xl p-4">
        <h3>Price</h3>
        <p>${quote.regularMarketPrice}</p>
      </div>

      <div className="border rounded-xl p-4">
        <h3>Market Cap</h3>
        <p>{marketCap(quote.marketCap)}</p>
      </div>

      <div className="border rounded-xl p-4">
        <h3>P/E</h3>
        <p>{quote.trailingPE}</p>
      </div>

      <div className="border rounded-xl p-4">
        <h3>Rating</h3>
        <p>{quote.averageAnalystRating}</p>
      </div>

    </div>
  );
}