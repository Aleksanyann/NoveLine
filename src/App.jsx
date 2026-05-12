import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./components/ProductPage";

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

  const translations = {
    en: {
      title: "White Sneakers",
      jacket: "Leather Jacket",
      cap: "Baseball Cap",
      sneakersDesc: "Modern sneakers with comfortable design.",
      jacketDesc: "Stylish leather jacket for any occasion.",
      capDesc: "Classic baseball cap with adjustable fit.",
      heroTitle: "Discover modern streetwear with premium detail.",
      heroSubtitle:
        "Browse curated pieces with bold colors, clean silhouettes, and effortless style. Click any product to explore color options and full product details.",
      viewProduct: "View product",
      follow: "Follow us on social media",
      back: "← Back",
      description: "Premium fit and quality materials for everyday wear.",
    },
    hy: {
      title: "Սպիտակ Կոշկեր",
      jacket: "Կաշվե Բաճկոն",
      cap: "Բեյսբոլ Գլխարկ",
      sneakersDesc: "Ժամանակակից կոշկեր հարմարավետ դիզայնով.",
      jacketDesc: "Տիպական կաշվե բաճկոն ցանկացած առիթի համար.",
      capDesc: "Դասական բեյսբոլ գլխարկ կարգավորվող տեղավորմամբ.",
      heroTitle:
        "Հայտնագործեք ժամանակակից փողոցային հագուստ պրեմիում մանրամասներով:",
      heroSubtitle:
        "Թաղել նվազեցված ստուգման մեջ թվով պատրաստված մասերի հետ կամ մեծ պատկերներ: Կտտացրեք ցանկացած ապրանքի վրա `ներուծել գույն տարբերակները և ամբողջ ապրանքի մանրամասները:",
      viewProduct: "Դիտել ապրանքը",
      follow: "Հետևեք մեզ սոցիալական մեդիայում",
      back: "← Հետ",
      description: "Պրեմիում տեղավորում և որակյալ նյութեր առօրյա կրելու համար:",
    },
  };

  const t = translations[language];

  const products = useMemo(
    () => [
      {
        id: 1,
        title: "White Sneakers",
        colors: {
          Pink: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
          ],
          Blue: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
          ],
        },
        bestColors: ["Pink", "Blue", "White", "Gray", "Black"],
        description: [
          "Modern sneakers with comfortable design.",
          "Breathable mesh upper.",
          "Cushioned sole for all-day comfort.",
        ],
      },

      {
        id: 2,
        title: "Leather Jacket",
        colors: {
          Red: [
            "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
          ],
          Black: [
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
          ],
        },
        bestColors: ["Black", "Charcoal", "Burgundy", "Brown", "Olive"],
        description: [
          "Խնամքի   պայմաններ",
          "Modern sneakers with comfortable design.",
          "Breathable mesh upper.",
          "Handcrafted leather with premium details.",
          "Cushioned sole for all-day comfort.",
        ],
      },

      {
        id: 3,
        title: "Baseball Cap",
        colors: {
          Gray: [
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80",
          ],
          White: [
            "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
          ],
        },
        bestColors: ["Gray", "Navy", "White", "Beige", "Black"],
        description: [
          "Modern sneakers with comfortable design.",
          "Breathable mesh upper.",
          "Cushioned sole for day comfort.",
        ],
      },
    ],
    [],
  );

  const initialProduct = useMemo(() => {
    const path = window.location.pathname;
    if (path.startsWith("/product/")) {
      const id = parseInt(path.split("/")[2]);
      return products.find((p) => p.id === id) || null;
    }
    return null;
  }, [products]);

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
