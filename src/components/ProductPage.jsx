export default function ProductPage({
  product,
  selectedColor,
  setSelectedColor,
  currentImage,
  setCurrentImage,
  onBack,
  t,
  isDark,
}) {
  const images = product.colors[selectedColor];

  const prevImage = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length);

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);

  return (
    <div className="p-4 md:p-6">
      <button
        onClick={onBack}
        className="mb-4 text-white px-4 py-2 rounded-xl transition-colors duration-300"
        style={{
          backgroundColor: isDark ? "#1F2937" : "#4B5563",
        }}
      >
        {t?.back || "← Back"}
      </button>

      <div
        className="max-w-5xl mx-auto rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-5 p-4 md:p-6 transition-colors duration-300"
        style={{
          backgroundColor: isDark ? "#1F2937" : "#6B7280",
        }}
      >
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
                className={`w-full h-24 object-cover rounded-lg cursor-pointer transition ${
                  index === currentImage
                    ? "ring-2 ring-white"
                    : "opacity-80 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 text-white">
            {product.title}
          </h1>

          <div className="mb-5">
            <h2 className="text-lg font-semibold mb-3 text-slate-200">
              Best color options
            </h2>

            <div className="flex items-center gap-3 flex-wrap">
              {(product.bestColors || Object.keys(product.colors)).map(
                (color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setCurrentImage(0);
                    }}
                    aria-label={color}
                    title={color}
                    className={`w-10 h-10 rounded-full border-2 shadow-md transition-all duration-300 ${
                      selectedColor === color
                        ? "scale-110 border-white"
                        : "border-slate-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                  />
                ),
              )}
            </div>
          </div>

          <div className="mt-4">
            {Array.isArray(product.description) ? (
              product.description.map((line, index) => (
                <p key={index} className="text-slate-200 mb-2 leading-relaxed">
                  {line}
                </p>
              ))
            ) : (
              <p className="text-slate-200 leading-relaxed">
                {product.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
