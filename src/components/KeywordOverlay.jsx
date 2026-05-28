export default function KeywordOverlay({ keywords = [], accent }) {
  return (
    <div className="keyword-overlay" aria-hidden="true">
      {keywords.map((keyword, index) => (
        <span
          key={`${keyword}-${index}`}
          className="keyword-tag"
          style={{
            "--delay": `${index * 0.12}s`,
            "--accent": accent
          }}
        >
          {keyword}
        </span>
      ))}
    </div>
  );
}
