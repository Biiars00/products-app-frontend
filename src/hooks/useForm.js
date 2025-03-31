import { useState, useEffect } from 'react';

export const useForm = (onEdit) => {
    const [productData, setProductData] = useState({
        name: '',
        type: '',
        category: '',
        description: '',
    });

    useEffect(() => {
        if (onEdit) {
            setProductData({
                name: onEdit.name,
                type: onEdit.type,
                category: onEdit.category,
                description: onEdit.description,
            });
        }
    }, [onEdit]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    return {
        productData,
        handleInputChange,
    };
};