import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.palette.grey[100]};
    padding: 20px;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.palette.grey[300]};
    border-radius: 5px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid ${({ theme }) => theme.palette.grey[500]};
    height: 40px;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    color: ${({ theme }) => theme.palette.grey[900]};
    background-color: ${({ theme }) => theme.palette.grey[100]};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.palette.primary.main};
    }
`;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    height: 42px;
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};

    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary.main || '#000000'};
    }
`;