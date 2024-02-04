import "./SearchPage.css"

export default function SearchPage() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-top search-section"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header bg-light">
          <h2 className="text-primary">Discover Your Next Favorite Purchase</h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body container">
          <form role="search">
            <input
              className="form-control me-2 border-primary"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
