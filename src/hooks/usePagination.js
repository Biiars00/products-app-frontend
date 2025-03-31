import { useState } from 'react';
 
export const usePagination = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const limit = 5;

  const goToNextPage = () => {
    if (page < totalPages) {
        setPage(prevPage => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
      if (page > 1) {
          setPage(prevPage => prevPage - 1);
      }
  };

  return {
      page,
      totalPages,
      setTotalPages,
      goToPreviousPage,
      goToNextPage,
      limit,
  };
};

