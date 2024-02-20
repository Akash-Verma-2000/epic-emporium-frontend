export default function PageLoadingAnimation() {
  return (
    <div className="my-5 d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
