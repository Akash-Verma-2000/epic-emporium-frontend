import SearchPage from "../../pages/seach-page/SearchPage";

export default function SearchButton() {
  return (
    <>
      <button
        className="btn btn-primary position-fixed bottom-0 end-0 m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        <i className="bi bi-search"></i>
      </button>
      <SearchPage />
    </>
  );
}
