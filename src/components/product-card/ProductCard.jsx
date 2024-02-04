// Functional component for rendering product cards
export default function ProductCard({ product }) {
  return (
    <>
      {/* Product card layout */}
      <div className="col-6 col-md-3 my-3">
        <div className="card">
          {/* Product image */}
          <img
            src={product.image}
            className="card-img-top"
            alt="product Image"
          />
          <div className="card-body">
            {/* Product title */}
            <h5 className="card-title">{product.title}</h5>

            <h4 className="card-text my-3">$ {product.price}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
