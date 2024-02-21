//Importing the neccessary modules and components 
import ProductList from "../product-List/ProductList";
import {
  searchProducts,
  filterByCategory,
} from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

//Component for rendering searchbar
export default function SearchBar() {

  //State varible to check which category is selected 
  const [categoryObj, setCategoryObj] = useState({
    menCat: false,
    womCat: false,
    jelCat: false,
    accCat: false,
    eleCat: false,
    othCat: false,
    maxPrice: 1200,
  });

  const dispatch = useDispatch();
  
  //Getting the search result array from the store
  const searchResultArray = useSelector(
    (state) => state.products.searchResultArray
  );

  //filtering the products array when category selection changes
  useEffect(() => {
    dispatch(filterByCategory(categoryObj));
  }, [
    categoryObj.menCat,
    categoryObj.womCat,
    categoryObj.jelCat,
    categoryObj.accCat,
    categoryObj.eleCat,
    categoryObj.othCat,
    categoryObj.maxPrice,
  ]);

  return (
    <>
      <div className="input-group my-5 ">
        <input
          type="text"
          className="form-control border border-primary"
          aria-label="Text input with dropdown button"
          onChange={(e) => {
            dispatch(searchProducts(e.target.value));
          }}
        />
        <button
          className="btn bg-primary text-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
        </button>
        <ul className="dropdown-menu dropdown-menu-end p-3 border-primary">
          <li>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                setCategoryObj({ ...categoryObj, menCat: !categoryObj.menCat });
              }}
            />
            <label className="form-check-label ms-2" htmlFor="exampleCheck1">
              Men
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                setCategoryObj({ ...categoryObj, womCat: !categoryObj.womCat });
              }}
            />
            <label className="form-check-label ms-2" htmlFor="exampleCheck1">
              Women
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                setCategoryObj({ ...categoryObj, jelCat: !categoryObj.jelCat });
              }}
            />
            <label className="form-check-label ms-2" htmlFor="exampleCheck1">
              Jewellery
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                setCategoryObj({ ...categoryObj, eleCat: !categoryObj.eleCat });
              }}
            />
            <label className="form-check-label ms-2" htmlFor="exampleCheck1">
              Electronics
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                setCategoryObj({ ...categoryObj, accCat: !categoryObj.accCat });
              }}
            />
            <label className="form-check-label ms-2" htmlFor="exampleCheck1">
              Accessories
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                setCategoryObj({ ...categoryObj, othCat: !categoryObj.othCat });
              }}
            />
            <label className="form-check-label ms-2" htmlFor="exampleCheck1">
              Kids
            </label>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <p>Max Price: ${categoryObj.maxPrice}</p>
            <input
              type="range"
              className="form-range"
              id="customRange1"
              min={0}
              max={1200}
              value={categoryObj.maxPrice}
              onChange={(e) => {
                setCategoryObj({ ...categoryObj, maxPrice: e.target.value });
              }}
            />
          </li>
        </ul>
      </div>

      <ProductList ProductArray={searchResultArray} />
    </>
  );
}
