import ProductCard from "../components/ProductCard";

export default function Home({ products, openProduct, t }) {
  return (
    <div className="px-4 pt-10 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => openProduct(product)}
              t={t}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
