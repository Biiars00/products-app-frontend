import GlobalStyle from './styles/global';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Form from './components/Form/Form.js'
import Grid from './components/Grid/Grid.js';
import Header from './components/Header/Header.js';

import { useProducts } from './hooks/useProducts.js';
import { Container, Title } from './styles/AppStyles.js';
import { usePagination } from './hooks/usePagination.js';

function App() {
  const [onEdit, setOnEdit] = useState(null);
  const { products } = useProducts();
  const { page, totalPages, goToNextPage, goToPreviousPage } = usePagination();

  return (
    <>
      <Header />
      <Container>
        <Title>Produtos</Title>
        <Form onEdit={onEdit} onSave={() => {}} />
        <Grid 
          products={products} 
          setOnEdit={setOnEdit} 
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          page={page}
          totalPages={totalPages}
        />
      </Container>
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
    </>
  );
}

export default App;
