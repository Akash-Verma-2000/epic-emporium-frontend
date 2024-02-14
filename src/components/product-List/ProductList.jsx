import ProductCard from "../product-card/ProductCard";

export default function ProductList({ ProductArray }) {
  return (
    <div className="row">
      {ProductArray.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
}
