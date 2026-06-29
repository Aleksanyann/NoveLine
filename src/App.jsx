import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./components/ProductPage";
import { products, translations } from "./data/db";
import bag from "./assets/prr.png";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const t = translations[language];
  const initialProduct = useMemo(() => {
    const path = window.location.pathname;
    if (path.startsWith("/product/")) {
      const id = parseInt(path.split("/")[2]);
      return products.find((p) => p.id === id) || null;
    }
    return null;
  }, []);

  const initialColor = useMemo(() => {
    if (initialProduct) {
      return Object.keys(initialProduct.colors)[0];
    }
    return "";
  }, [initialProduct]);

  const [selectedProduct, setSelectedProduct] = React.useState(initialProduct);

  const [selectedColor, setSelectedColor] = React.useState(initialColor);

  const [currentImage, setCurrentImage] = React.useState(0);

  const openProduct = (product) => {
    setSelectedProduct(product);

    setSelectedColor(Object.keys(product.colors)[0]);

    setCurrentImage(0);

    window.history.pushState({}, "", `/product/${product.id}`);
  };

  const goBack = () => {
    setSelectedProduct(null);

    window.history.pushState({}, "", "/");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"}`}
    >
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        language={language}
        setLanguage={setLanguage}
      />

      {selectedProduct ? (
        <ProductPage
          product={selectedProduct}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          onBack={goBack}
          t={t}
        />
      ) : (
        <Home products={products} openProduct={openProduct} t={t} />
      )}

      <Footer t={t} />
    </div>
  );
}
