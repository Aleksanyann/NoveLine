import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./components/ProductPage";
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
      description: "Premium fit and quality materials for everyday use.",
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
        title: "Dream Case (Blue)",
        colors: {
          Pink: [
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698330/photo_10_2026-05-13_22-49-46_aubjqd.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698328/photo_12_2026-05-13_22-49-46_fudp2a.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698330/photo_9_2026-05-13_22-49-46_cfq9vi.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698329/photo_11_2026-05-13_22-49-46_czfshn.jpg",
          ],
        },
        bestColors: ["#6d96a6", "#BFD1E0", "#FDF6ED", "#F0E4D6", "#CCBAA5"],
        description: [
          "• Խուսափել ջրից և խոնավությունից",
          "• Չդնել շատ ծանր իրերի տակ",
          "• Մաքրել միայն չոր և փափուկ կտորով",
          "• Չթողնել արևի ուղիղ ճառագայթների տակ երկար ժամանակ",
          "•Մաքրել շատ նուրբ խոզանակով",
          "• Պահել առանձին տոպրակի կամ տուփի մեջ",
          "• Խուսափել օծանելիքի, սպիրտի և քիմիական նյութերի հետ շփումից",
        ],
      },
      {
        id: 2,
        title: "Sweet heart",
        colors: {
          Pink: [
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698329/photo_5_2026-05-13_22-49-46_s0yea7.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698328/photo_6_2026-05-13_22-49-46_mm3jdu.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698327/photo_8_2026-05-13_22-49-46_tgb5pw.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698327/photo_7_2026-05-13_22-49-46_g5oosh.jpg",
          ],
        },
        bestColors: ["#ECE4DB", "#C4A69B", "#B8AB9C", "#CFC8BE", "#BAB8A2"],
        description: [
          "• Չթրջել ",
          "• Խուսափել օծանելիքի և քսուքների հետ անմիջական շփումից",
          "• Մաքրել միայն փափուկ, չոր կտորով",
          "• Պահել փոքր տուփի կամ փափուկ պարկի մեջ",
          "• Խուսափել հարվածներից կամ ընկնելուց",
        ],
      },

      {
        id: 3,
        title: "Mon cherie",
        colors: {
          Red: [
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698327/photo_4_2026-05-13_22-37-02_pkq9oy.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698328/photo_3_2026-05-13_22-37-02_kxu3cp.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698326/photo_2_2026-05-13_22-37-02_wdonki.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698328/photo_1_2026-05-13_22-37-02_rawkih.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698326/photo_5_2026-05-13_22-37-02_bnc0ch.jpg",
          ],
        },
        bestColors: ["#281E15", "#FEFFF1", "#520100", "#B8966D", "#8F775F"],
        description: [
          "• Խուսափել ջրից և խոնավությունից",
          "• Չթողնել արևի ուղիղ ճառագայթների տակ",
          "• Չծանրաբեռնել պայուսակը",
          "• Խուսափել օծանելիքի և քիմիական նյութերի հետ շփումից",
          "• Մաքրել միայն փափուկ, չոր կտորով",
          "• Պահել առանձին տոպրակի կամ տուփի մեջ",
          "• Օգտագործել նրբորեն՝ ձևը պահպանելու համար",
        ],
      },
      {
        id: 4,
        title: "Dream Case (Pink)",
        colors: {
          Red: [
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698329/photo_13_2026-05-13_22-49-46_cm6w4b.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698328/photo_15_2026-05-13_22-49-46_anfct1.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698328/photo_14_2026-05-13_22-49-46_evx66n.jpg",
          ],
        },
        bestColors: ["#968C83", "#D6D2C4", "#FFF5EA", "#F7DAD9"],
        description: [
          "• Խուսափել ջրից և խոնավությունից",
          "• Չդնել շատ ծանր իրերի տակ",
          "• Մաքրել միայն չոր և փափուկ կտորով",
          "• Չթողնել արևի ուղիղ ճառագայթների տակ երկար ժամանակ",
          "•Մաքրել շատ նուրբ խոզանակով",
          "• Պահել առանձին տոպրակի կամ տուփի մեջ",
          "• Խուսափել օծանելիքի, սպիրտի և քիմիական նյութերի հետ շփումից",
        ],
      },
      {
        id: 5,
        title: "Radiance",
        colors: {
          Gray: [
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698329/photo_2_2026-05-13_22-49-46_ainzyw.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698329/photo_4_2026-05-13_22-49-46_of9vmu.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698329/photo_3_2026-05-13_22-49-46_oxnfmx.jpg",
            "https://res.cloudinary.com/dfxrapmbv/image/upload/v1778698326/photo_1_2026-05-13_22-49-46_jdbacj.jpg",
          ],
        },
        bestColors: ["#EDE9DD", "#ADC0C4", "#CB8B82", "#AC795A", "#3A3A3C"],
        description: [
          "• Խուսափել ջրից և խոնավությունից",
          "• Չթողնել արևի ուղիղ ճառագայթների տակ",
          "• Չծանրաբեռնել պայուսակը",
          "• Խուսափել օծանելիքի և քիմիական նյութերի հետ շփումից",
          "• Մաքրել միայն փափուկ, չոր կտորով",
          "• Պահել առանձին տոպրակի կամ տուփի մեջ",
          "• Օգտագործել նրբորեն՝ ձևը պահպանելու համար",
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
