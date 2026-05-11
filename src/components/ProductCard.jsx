export default function ProductCard({ product, onClick, t }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-700">
        <img
          src={Object.values(product.colors)[0][0]}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
          {product.title}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          {t?.description ||
            "Premium fit and quality materials for everyday wear."}
        </p>
        <div className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          {t?.viewProduct || "View product"}
        </div>
      </div>
    </div>
  );
}
