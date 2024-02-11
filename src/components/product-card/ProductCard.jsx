// Functional component for rendering product cards
export default function ProductCard({ product }) {
  return (
    <>
      {/* Product card layout */}
      <div className="col-6 col-md-3 my-3 ">
        <div className="card p-1">
          {/* Product image */}
          <img
            src={product.image}
            className="card-img-top "
            alt="product Image"
          />
          <div className="card-body">
            {/* Product title */}
            <p className="card-title">{product.title}</p>

            <h4 className="card-text my-3">$ {product.price}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
