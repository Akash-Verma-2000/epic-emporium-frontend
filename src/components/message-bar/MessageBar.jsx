export default function MessageBar({ text }) {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        {text}
      </div>
    </>
  );
}
