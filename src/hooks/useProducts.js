import { useState, useEffect } from 'react';
import { getProducts } from '../services/productsService';
import { usePagination } from './usePagination';

export const useProducts = () => {
  const { page, limit, setTotalPages } = usePagination();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { products: fetchedProducts, totalPages } = await getProducts(page, limit);
        setProducts(fetchedProducts);
        setTotalPages(totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit, setTotalPages]);

  return { products, loading, error };
};