export default function ProductPage({
  product,
  selectedColor,
  setSelectedColor,
  currentImage,
  setCurrentImage,
  onBack,
  t,
}) {
  const images = product.colors[selectedColor];
  const prevImage = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);

  return (
    <div className="p-4 md:p-6">
      <button
        onClick={onBack}
        className="mb-4 bg-slate-900 dark:bg-slate-700 text-white px-4 py-2 rounded-xl transition-colors duration-300"
      >
        {t?.back || "← Back"}
      </button>

      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-5 p-4 md:p-6 transition-colors duration-300">
        <div>
          <div className="relative mb-4">
            <img
              src={images[currentImage]}
              className="w-full h-[280px] md:h-[420px] object-cover rounded-2xl"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
            >
              →
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`w-full h-24 object-cover rounded-lg cursor-pointer transition ${index === currentImage ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
            {product.title}
          </h1>

          <div className="flex gap-3 mb-5">
            {Object.keys(product.colors).map((color) => (
              <button
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                  setCurrentImage(0);
                }}
                className={`w-10 h-10 rounded-full border-4 transition-all duration-200 ${
                  selectedColor === color
                    ? "border-blue-500 ring-2 ring-blue-500"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
          </div>

          <p className="text-slate-700 dark:text-slate-300">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
