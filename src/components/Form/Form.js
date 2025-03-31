import React from 'react';
import { FormContainer, InputArea, Label, Input, Button } from '../../styles/components/FormStyles';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';
import { addProduct, editProduct } from '../../services/productsService';

const Form = ({ onEdit, onSave }) => {
    const { productData, handleInputChange } = useForm(onEdit);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (onEdit) {
                await editProduct(onEdit.id, productData);
                toast.success('Produto editado com sucesso!');
            } else {
                await addProduct(productData);
                toast.success('Produto adicionado com sucesso!');
            }
            onSave();
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <InputArea>
                    <Label>Nome do produto: </Label>
                    <Input 
                        name='name' 
                        value={productData.name}
                        onChange={handleInputChange}
                        required
                    />
                </InputArea>
                <InputArea>
                    <Label>Tipo: </Label>
                    <Input 
                        name='type' 
                        value={productData.type}
                        onChange={handleInputChange}
                        required
                    />
                </InputArea>
                <InputArea>
                    <Label>Categoria: </Label>
                    <Input 
                        name='category'
                        value={productData.category}
                        onChange={handleInputChange}
                        required 
                    />
                </InputArea>
                <InputArea>
                    <Label>Descrição: </Label>
                    <Input 
                        name='description'
                        value={productData.description}
                        onChange={handleInputChange}
                        required 
                    />
                </InputArea>

                <Button type='submit'>
                    {onEdit ? 'Salvar Alterações' : 'Adicionar'}
                </Button>
            </FormContainer>
        </>
    )
}

export default Form;
