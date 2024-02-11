import "./SearchPage.css";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/reducers/productReducer";
import ProductList from "../../components/product-List/ProductCard";

export default function SearchPage() {
  const dispatch = useDispatch();

  const searchResultArray = useSelector(
    (state) => state.products.searchResultArray
  );

  return (
    <div>
      <div
        className="offcanvas offcanvas-top search-section"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header p-4  search-page-header">
          <input
            type="text"
            className="form-control  border-primary border-2"
            aria-label="Text input with dropdown button"
            onChange={(e) => {
              dispatch(searchProducts(e.target.value));
            }}
          />
        </div>

        <div className="offcanvas-body container">
          <div className="container">
            <ProductList ProductArray={searchResultArray} />

            <button
              type="button"
              className=" btn btn-primary position-fixed bottom-0 end-0 m-3 z-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
