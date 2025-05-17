import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import StatsPanel from "./components/StatsPanel";

function getInitialDarkMode() {
    if (typeof window !== "undefined") {
        if (localStorage.theme === "dark") return true;
        if (localStorage.theme === "light") return false;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
}

function App() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(true);
    const [dark, setDark] = useState(getInitialDarkMode);

    // Sincroniza la clase 'dark' y localStorage
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [dark]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=21").then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    const filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    const totalProducts = filteredProducts.length;

    let maxProduct = null;
    if (filteredProducts.length > 0) {
        maxProduct = filteredProducts[0];
        for (let p of filteredProducts) {
            if (p.price > maxProduct.price) {
                maxProduct = p;
            }
        }
    }

    let minProduct = null;
    if (filteredProducts.length > 0) {
        minProduct = filteredProducts[0];
        for (let p of filteredProducts) {
            if (p.price < minProduct.price) {
                minProduct = p;
            }
        }
    }

    let countLongTitles = 0;
    for (let p of filteredProducts) {
        if (p.title.length > 20) {
            countLongTitles++;
        }
    }

    let totalPrice = 0;
    for (let p of filteredProducts) {
        totalPrice += p.price;
    }
    totalPrice = totalPrice.toFixed(2);

    let avgDiscount = 0;
    if (filteredProducts.length > 0) {
        let sumDiscount = 0;
        for (let p of filteredProducts) {
            sumDiscount += p.discountPercentage;
        }
        avgDiscount = (sumDiscount / filteredProducts.length).toFixed(2);
    }

    let lowStockCount = 0;
    for (let p of filteredProducts) {
        if (p.stock < 50) {
            lowStockCount++;
        }
    }

    let maxDiscountProduct = null;
    if (filteredProducts.length > 0) {
        maxDiscountProduct = filteredProducts[0];
        for (let p of filteredProducts) {
            if (p.discountPercentage > maxDiscountProduct.discountPercentage) {
                maxDiscountProduct = p;
            }
        }
    }

    let avgPrice = 0;
    if (filteredProducts.length > 0) {
        avgPrice = (totalPrice / filteredProducts.length).toFixed(2);
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-950 px-4 py-8 transition-colors duration-300">
            <button
                onClick={() => setDark((prev) => !prev)}
                className="fixed top-4 right-4 px-4 py-2 rounded-lg bg-purple-700 text-gray-100 dark:bg-purple-300 dark:text-gray-900 shadow hover:bg-purple-600 dark:hover:bg-purple-400 transition-all duration-300 z-50"
            >
                {dark ? "Modo claro" : "Modo oscuro"}
            </button>
            <h1 className="text-4xl font-extrabold text-purple-700 dark:text-purple-400 mb-8 drop-shadow-lg tracking-wide text-center">
                AXIOS
            </h1>
            <input
                type="text"
                placeholder="Buscar producto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-96 px-4 py-2 mb-6 rounded-lg border-2 border-purple-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
            />
            <ProductList products={filteredProducts} />
            <button
                onClick={() => setShow(!show)}
                className="px-6 py-2 mb-6 rounded-lg bg-purple-700 text-gray-100 font-semibold shadow hover:bg-purple-600 transition-all duration-300"
            >
                {show ? "Ocultar estadísticas" : "Mostrar estadísticas"}
            </button>
            {show && (
                <StatsPanel
                    total={totalProducts}
                    max={maxProduct}
                    min={minProduct}
                    countLongTitles={countLongTitles}
                    totalPrice={totalPrice}
                    avgDiscount={avgDiscount}
                    lowStockCount={lowStockCount}
                    maxDiscountProduct={maxDiscountProduct}
                    avgPrice={avgPrice}
                />
            )}
            {filteredProducts.length === 0 && <div>No se encontraron productos</div>}
        </div>
    );
}

export default App;