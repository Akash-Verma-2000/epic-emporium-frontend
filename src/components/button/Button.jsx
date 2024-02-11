export default function Button({ text, color, fn }) {
  return (
    <button className={`btn btn-${color}`} onClick={fn}>
      {text}
    </button>
  );
}
