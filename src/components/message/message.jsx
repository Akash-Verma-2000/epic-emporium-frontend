export default function Message({ text }) {
  return (
    <>
      <div className="alert alert-success my-3" role="alert">
        {text}
      </div>
    </>
  );
}
