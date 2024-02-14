export default function MessageBar({ text }) {
  return (
    <>
      <div className="alert alert-success my-3" role="alert">
        {text}
      </div>
    </>
  );
}
