export function TechnicalScale() {
  const numbers = [25, 50, 100, 200, 300, 400, 500, 600];

  return (
    <div className="technical-scale">
      {numbers.map((num) => (
        <div key={num} className="scale-mark">
          {num}
        </div>
      ))}
    </div>
  );
}
