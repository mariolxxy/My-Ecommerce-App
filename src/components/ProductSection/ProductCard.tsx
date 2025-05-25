import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

const ProductGridPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 5;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();
      setProducts((prev) => [...prev, ...data.products]);
      if (data.products.length < limit) setHasMore(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const handleLoadMore = () => {
    setSkip((prev) => prev + limit);
  };

  return (
    <section className={styles.productSection}>
      <h4 className={styles.subtitle}>Featured Products</h4>
      <h2 className={styles.title}>BESTSELLER PRODUCTS</h2>
      <p className={styles.description}>
        Problems trying to resolve the conflict between
      </p>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p className={styles.cardTitle}>Graphic Design</p>
            <p className={styles.cardDept}>English Department</p>
            <div className={styles.cardPrices}>
              <span className={styles.oldPrice}>${product.price}</span>
              <span className={styles.newPrice}>$6.48</span>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={handleLoadMore}
          className={styles.loadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "LOAD MORE PRODUCTS"}
        </button>
      )}
    </section>
  );
};

export default ProductGridPage;
