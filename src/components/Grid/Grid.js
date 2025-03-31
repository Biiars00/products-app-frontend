import React from 'react';
import { Table, Tbody, Thead, Tr, Th, Td, PaginationContainer, PageInfo, PageButton, IconWrapper } from '../../styles/components/GridStyles';
import { FaTrash, FaEdit, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { deleteProduct } from '../../services/productsService';

const Grid = ({ products, setOnEdit, goToPreviousPage, goToNextPage, page, totalPages }) => {
    const handleDelete = async (id) => {
        try {
          await deleteProduct(id);
          toast.success('Produto excluído com sucesso!');
        } catch (error) {
          toast.error('Erro ao excluir produto!');
        }
    };

    return (
        <>
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome do produto: </Th>
                    <Th>Tipo: </Th>
                    <Th>Categoria: </Th>
                    <Th>Descrição: </Th>
                </Tr>
            </Thead>
            <Tbody>
                {products.length > 0 ? (
                    products.map((item, index) => (
                        <Tr key={index}>
                            <Td width="30%">{item.name}</Td>
                            <Td width="30%">{item.type}</Td>
                            <Td width="20%">{item.category}</Td>
                            <Td width="20%">{item.description}</Td>
                            <Td alignCenter width="5%">
                                <FaEdit onClick={() => setOnEdit(item)} style={{ cursor: 'pointer' }} />
                            </Td>
                            <Td alignCenter width="5%">
                                <FaTrash onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }} />
                            </Td>
                        </Tr>
                    ))
                ) : (
                    <Tr>
                        <Td colSpan="6" alignCenter>Não há conteúdo para exibir</Td>
                    </Tr>
                )}
            </Tbody>
        </Table>
        <PaginationContainer>
        <PageButton onClick={goToPreviousPage} >
            <IconWrapper>
                <FaArrowLeft />
            </IconWrapper>
        </PageButton>
        <PageInfo>{`${1} de ${totalPages}`}</PageInfo>
        <PageButton onClick={goToNextPage} >
            <IconWrapper>
                <FaArrowRight />
            </IconWrapper>
        </PageButton>
        </PaginationContainer>
        </>
    )
}

export default Grid;