export default function Button({ text, color, fn =null}) {
  return (
    <button className={`btn btn-${color}`} onClick={fn}>
      {text}
    </button>
  );
}
