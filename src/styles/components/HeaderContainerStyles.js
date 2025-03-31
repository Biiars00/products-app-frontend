import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    color: ${({ theme }) => theme.palette.grey[900]};
`;

export const SubTitle = styled.h4`
    text-align: center;
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    color: ${({ theme }) => theme.palette.grey[700]};
`;