export default function ProductCard({ product, onClick, t, isDark }) {
  return (
    <div
      onClick={onClick}
      className="group rounded-[2rem] border shadow-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        backgroundColor: "#f9f5ec", // changed here
        borderColor: "#e5e7eb",
      }}
    >
      <div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundColor: "#e5e7eb",
        }}
      >
        <img
          src={Object.values(product.colors)[0][0]}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-black mb-2">
          {product.title}
        </h2>

        <p className="text-sm text-black/70 mb-4">
          {t?.description ||
            "Premium fit and quality materials for everyday use."}
        </p>

        <div
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-black"
          style={{
            backgroundColor: "#e5e7eb",
          }}
        >
          {t?.viewProduct || "View product"}
        </div>
      </div>
    </div>
  );
}
