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
    <div className="p-4 md:p-6" style={{ backgroundColor: "#f9f5ec" }}>
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 rounded-xl transition-colors duration-300 text-black"
        style={{
          backgroundColor: "#e5e7eb",
        }}
      >
        {t?.back || "← Back"}
      </button>

      <div
        className="max-w-5xl mx-auto rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-5 p-4 md:p-6 transition-colors duration-300"
        style={{
          backgroundColor: "#f9f5ec",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* IMAGE SECTION */}
        <div>
          <div className="relative mb-4">
            <img
              src={images[currentImage]}
              className="w-full h-[280px] md:h-[420px] object-cover rounded-2xl"
            />

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 text-black p-2 rounded-full hover:bg-black/30 transition"
            >
              ←
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 text-black p-2 rounded-full hover:bg-black/30 transition"
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
                    ? "ring-2 ring-black"
                    : "opacity-80 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        {/* INFO SECTION */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 text-black">
            {product.title}
          </h1>

          <div className="mb-5">
            <h2 className="text-lg font-semibold mb-3 text-black">
              Best color options
            </h2>

            <div className="flex items-center gap-3 flex-wrap">
              {(product.bestColors || Object.keys(product.colors)).map(
                (color) => (
                  <span
                    key={color}
                    className="w-10 h-10 rounded-full border-2 border-gray-400 shadow-md"
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
                <p key={index} className="text-black/70 mb-2 leading-relaxed">
                  {line}
                </p>
              ))
            ) : (
              <p className="text-black/70 leading-relaxed">
                {product.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
